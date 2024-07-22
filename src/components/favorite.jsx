import React, { useState, useEffect } from 'react';

const Favorite = ({ initialFavorites }) => {
  // Using state to manage the list of favorite items

  const [favorites, setFavorites] = useState(initialFavorites);
  const [newFavorite, setNewFavorite] = useState('');

  // Using effect to log the favorite items to the console whenever they change

  useEffect(() => {
    console.log('Favorites:', favorites);
  }, [favorites]);

  // Function to add a new favorite item to the list
  
  const addFavorite = () => {
    if (newFavorite.trim()) {
      setFavorites([...favorites, newFavorite]);
      setNewFavorite(''); // Clear the input field
    }
  };

  return (
    <div>
      <h1>Your favorite events:</h1>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>{favorite}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newFavorite}
        onChange={(e) => setNewFavorite(e.target.value)}
        placeholder="Add a new favorite"
      />
      <button onClick={addFavorite}>Add Favorite</button>
    </div>
  );
};

export default Favorite;

