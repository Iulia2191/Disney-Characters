import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  characters: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      if (!state.characters) {
        state.characters = [];
      }

      const existingCharacter = state.characters.find(
        (char) => char.id === action.payload.id
      );

      if (!existingCharacter) {
        state.characters.push(action.payload);
      }
    },
    removeItemFavorite: (state, action) => {
      state.characters = state.characters.filter(
        (char) => char.id !== action.payload
      );
    },
    resetFavorite: (state) => {
      state.characters = [];
    },
  },
});

export const { addToFavorite, removeItemFavorite, resetFavorite } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
