import types from '../types/types';

export const addFavorite = pokemon => ({
  type: types.addFavorite,
  payload: pokemon,
});

export const removeFavorite = id => ({
  type: types.removeFavorite,
  payload: id,
});
