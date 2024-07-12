// imports here
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface FormData {
  name: string;
  description: string;
  type: string;
}

//creating zod schema
const schema = z.object({
  name: z
    .string()
    .min(3, { message: 'Field must contain at least 3 characters' })
    .max(50),
  description: z
    .string()
    .min(20, { message: 'Field must contain at least 20 characters.' })
    .max(50),
  type: z.string().min(3).max(50),
});

const onSubmit = (data: FormData) => console.log(data);

const Filter = () => {
  // logic here

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          {...register('name')}
          id='name'
          type='text'
          className='form-control'
        />
        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
      </div>
      <div className='mb-3'>
        <label htmlFor='description' className='form-label'>
          Description
        </label>
        <input
          {...register('description')}
          id='description'
          type='text'
          className='form-control'
        />
        {errors.description && (
          <p className='text-red-600'>{errors.description.message}</p>
        )}
      </div>
      <div className='mb-3'>
        {/* i will have to create a data file to store the types in and then 
        map over so it can be a drop down menu instead of just typing in the input
        */}
        <label htmlFor='type'>Type</label>
        <input
          {...register('type')}
          id='type'
          type='text'
          className='form-control'
        />
      </div>
      <button className='btn btn-primary mb-5' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default Filter;
