import { useState } from 'react';
import Filter from './components/Filter';
import Table, { Champion } from './components/Table';

//notice our interface is defined in a child component but we use it here in state by importing it
//we defined the interface paramaters in table.tsx
function App() {
  const [champions, setChampions] = useState<Champion[]>([]);

  //adds a new champion to the champions state
  const addChampion = (newChampion: Champion) => {
    setChampions([...champions, newChampion]);
  };

  //delete champion
  const deleteChampion = (index: number) => {
    setChampions(champions.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1 className='text-3xl font-bold underline text-center'>
        LoL Custom Character Form
      </h1>
      {/* below we pass the addChampion function as props to Filter component */}
      <Filter addChampion={addChampion} />
      <Table champions={champions} deleteChampion={deleteChampion} />
    </>
  );
}

export default App;
