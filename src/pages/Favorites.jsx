import { useSelector, useDispatch } from 'react-redux';
import { removeItemFavorite, resetFavorite } from '../redux/favoriteReducer';

const Favorites = () => {

  const favoriteCharacters =
    useSelector((state) => state.favorite.characters) || [];

  const dispatch = useDispatch();

  return (
    <div className='favorite-container mx-5 mt-10'>
      <h2 className='text-4xl font-bold mb-6 text-white'>Favorite Characters</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {favoriteCharacters.map((character) => (
          <div
            key={character.id}
            className='character-card bg-card rounded-md overflow-hidden shadow-md'
          >
            <img
              className='w-full h-64 object-cover'
              src={character.img}
              alt={character.name}
            />
            <div className='p-4 flex flex-col items-center'>
              <h2 className='text-xl font-bold mb-2 text-shadow-md text-black'>
                {character.name}
              </h2>
              <button
                onClick={() =>
                  dispatch(removeItemFavorite(character.id))
                }
                className='bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition-colors cursor-pointer'
              >
                Remove Character
              </button>
            </div>
          </div>
        ))}
      </div>
      {favoriteCharacters.length > 0 && (
        <button
          onClick={() => dispatch(resetFavorite())}
          className='bg-button text-white px-4 py-2 rounded mt-4 hover:bg-btnHover transition-colors cursor-pointer'
        >
          Reset Favorites
        </button>
      )}
    </div>
  );
};

export default Favorites;
