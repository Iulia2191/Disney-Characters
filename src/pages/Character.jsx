import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../redux/favoriteReducer';

function Character() {
  const [character, setCharacter] = useState(null);
  const location = useLocation();
  const { name } = useParams();
  const dispatch = useDispatch();

  const fetchCharacter = async () => {
    try {
      const response = await fetch(`https://api.disneyapi.dev/character?name=${encodeURIComponent(name)}`);
      console.log('API Response:', response);
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Character Data:', responseData);
  
        // Verificăm dacă 'name' este definit
        if (name) {
          const foundCharacter = responseData.data;
  
          if (foundCharacter) {
            // Dacă foundCharacter este un array, luăm primul element
            const characterData = Array.isArray(foundCharacter) ? foundCharacter[0] : foundCharacter;
            setCharacter(characterData);
          } else {
            console.error('Character not found.');
          }
        } else {
          console.error('Character name is undefined.');
        }
      } else {
        console.error(`Error fetching Disney Characters: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error fetching Disney Characters:', error);
    }
  };
  
  
  useEffect(() => {
    if (name) {
      console.log('Name from useParams:', name);
      fetchCharacter();
    }
  }, [location.pathname, name]);
  
  return (
    <div className='character-container mt-20 mx-auto p-4 flex justify-center items-center'>
      {character ? (
        <div className='character-card bg-gradient-to-br from-blue-500 to-cyan-500 p-8 rounded-lg shadow-md text-white text-center'>
          <h2 className='text-4xl font-extrabold mb-4'>{character.name}</h2>
          <img
            className='w-full h-64 object-cover mb-6 rounded-md'
            src={character.imageUrl}
            alt={character.name}
          />
          <div className='grid grid-cols-2 gap-4'>
            <div className='text-lg'>
              <h3 className='font-semibold mb-2'>Films:</h3>
              <p>{character.films && character.films.join(', ')}</p>
            </div>
            <div className='text-lg'>
              <h3 className='font-semibold mb-2'>Short Films:</h3>
              <p>{character.shortFilms && character.shortFilms.join(', ')}</p>
            </div>
            <div className='text-lg'>
              <h3 className='font-semibold mb-2'>TV Shows:</h3>
              <p>{character.tvShows && character.tvShows.join(', ')}</p>
            </div>
            <div className='text-lg'>
              <h3 className='font-semibold mb-2'>Video Games:</h3>
              <p>{character.videoGames && character.videoGames.join(', ')}</p>
            </div>
          </div>
          <button
            onClick={() =>
              dispatch(
                addToFavorite({
                  id: character._id,
                  name: character.name,
                  img: character.imageUrl
                })
              )
            }
            className='bg-button mt-3 w-full text-white px-4 py-1 rounded hover:bg-btnHover transition-colors cursor-pointer'
          >
            Add to Favorites
          </button>
        </div>
      ) : (
        <p className='text-2xl text-gray-600'>
          {name ? 'Character not found' : 'Loading...'}
        </p>
      )}
    </div>
  );
}

export default Character;
