import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Characters() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    try {
      const response = await fetch('https://api.disneyapi.dev/character');
      const data = await response.json();
      setCharacters(data.data);
    } catch (error) {
      console.error('Error fetching Disney Characters: ', error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div id='characters'>
      <h1 className='mt-5 mb-5 text-5xl font-bold text-center text-white'>
        Disney Characters
      </h1>
      <div className='characters-cards md:container md:mx-auto p-4 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {characters.slice(0, 18).map((character) => (
          <div
            className='character-card bg-card rounded-md mt-5 overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105'
            key={character._id}
          >
            <Link to={`/character/${character.name.toLowerCase()}`}>
              <img
                className='w-full h-64 object-cover cursor-pointer'
                src={character.imageUrl}
                alt={character.name}
              />
            </Link>
            <div className='p-4 flex flex-col items-center'>
              <h2 className='text-xl font-bold mb-2 text-shadow-md text-bg-buttons'>
                {character.name}
              </h2>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
