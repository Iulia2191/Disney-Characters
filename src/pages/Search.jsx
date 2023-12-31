import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Search () {
  const [inputData, setInputData] = useState('')
  const [character, setCharacter] = useState(null)

  const fetchCharacter = async () => {
    try {
      const lowercasedInput = inputData.toLowerCase()
      const response = await fetch(
        `https://api.disneyapi.dev/character?name=${lowercasedInput}`
      )
      console.log('API Response:', response)

      if (response.ok) {
        const data = await response.json()
        console.log('Character Data:', data)

        setCharacter(data.data)
      } else {
        console.error(
          `Error fetching Disney Characters: ${response.statusText}`
        )
      }
    } catch (error) {
      console.error('Error fetching Disney Characters:', error)
    }
  }

  return (
    <div className='search-container mx-10 mt-10'>
      <h2 className='text-4xl font-bold mb-6 text-white'>Search Characters</h2>
      <div className='flex items-center mb-4'>
        <input
          type='text'
          placeholder='Search characters...'
          className='border mx-20 p-2 flex-grow mr-4 my-5'
          value={inputData}
          onChange={e => setInputData(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchCharacter();
              console.log('Enter pressed');
            }
          }}
        />
        <button
          onClick={fetchCharacter}
          className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors'
         
        >
          Search
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {Array.isArray(character) ? (
          character.map(char => (
            <div
              key={char._id}
              className='character-card bg-card rounded-md overflow-hidden shadow-md'
            >
              <Link to={`/character/${char.name}`}>
                <img
                  className='w-full h-64 object-cover cursor-pointer'
                  src={char.imageUrl}
                  alt={char.name}
                />
              </Link>

              <div className='p-4 flex flex-col items-center'>
                <h2 className='text-xl font-bold mb-2 text-shadow-md text-bg-buttons'>
                  {char.name}
                </h2>
              </div>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  )
}

export default Search
