// imports here
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import types from '../ChampionType';

interface FormData {
  name: string;
  description: string;
  type: string;
}

interface FilterProps {
  addChampion: (newChampion: FormData) => void;
}

//creating zod schema
const schema = z.object({
  name: z
    .string()
    .min(3, { message: 'Field must contain at least 3 characters' })
    .max(50),
  description: z
    .string()
    .min(10, { message: 'Field must contain at least 10 characters.' }),
  type: z.enum(types, {
    errorMap: () => ({ message: 'Type is required.' }),
  }),
});

const Filter = ({ addChampion }: FilterProps) => {
  // logic here

  //   called reset using react hook form then added it to the onSubmit function to reset form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    addChampion(data);
    console.log(data);
    reset();
  };

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
        <label htmlFor='type' className='form-label'>
          Types
        </label>
        <select {...register('type')} id='type' className='form-select'>
          {/* this field is intentionally left blank */}
          <option value=''></option>
          {types.map((types) => (
            <option key={types} value={types}>
              {types}
            </option>
          ))}
        </select>
        {errors.type && <p className='text-red-600'>{errors.type.message}</p>}
      </div>
      <button className='btn btn-primary mb-5' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default Filter;
