import { useState } from 'react';
import Filter from './components/Filter';
import Table, { Champion } from './components/Table';

function App() {
  const [champions, setChampions] = useState<Champion[]>([]);

  const addChampion = (newChampion: Champion) => {
    setChampions([...champions, newChampion]);
  };

  //next we will create the delete button to delete entries

  return (
    <>
      <h1 className='text-3xl font-bold underline text-center'>
        LoL Custom Character Form
      </h1>
      {/* below we pass the addChampion function as props to Filter component */}
      <Filter addChampion={addChampion} />
      <Table champions={champions} />
    </>
  );
}

export default App;
