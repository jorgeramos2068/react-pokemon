import types from '../types/types';

export const addFavorite = pokemon => ({
  type: types.addFavorite,
  payload: pokemon,
});

export const removeFavorite = id => ({
  type: types.removeFavorite,
  payload: id,
});

export const setFavorites = favorites => ({
  type: types.setFavorites,
  payload: favorites,
});
