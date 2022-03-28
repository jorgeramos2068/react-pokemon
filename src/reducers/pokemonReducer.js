import types from '../types/types';

const initialState = {
  favorites: [],
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addFavorite:
      const found = state.favorites.find(
        element => element.id === action.payload.id
      );
      if (found) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

export default pokemonReducer;
