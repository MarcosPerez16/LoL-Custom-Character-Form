// imports here

export interface Champion {
  name: string;
  description: string;
  type: string;
}

interface TableProps {
  champions: Champion[];
}

const Table = ({ champions }: TableProps) => {
  // logic here
  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {champions.map((champion, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{champion.name}</td>
              <td>{champion.description}</td>
              <td>{champion.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
