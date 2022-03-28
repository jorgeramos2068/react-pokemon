import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFavorites } from '../../actions/pokemon';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = JSON.parse(localStorage.getItem('pokemonFavorites') || []);

  useEffect(() => {
    dispatch(setFavorites(favorites));
  }, [favorites]);

  return (
    <div>
      <h1>Pokemon App - Favorites</h1>
      <div className="row mt-5">
        <div className="col">
          <Link to="/">Home</Link>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          {favorites.map(pokemon => (
            <div className="card mb-4" key={pokemon.id}>
              <div className="card-body">
                <h5 className="card-title text-center">{pokemon.name}</h5>
                <img src={pokemon.sprites?.front_default} />
                <p className="card-text">
                  <strong>Order:</strong> {pokemon.order}
                </p>
                <p className="card-text">
                  <strong>Weight:</strong> {pokemon.weight}
                </p>
                <p className="card-text">
                  <strong>Stats:</strong>
                  <br />
                  {pokemon.stats.map(({ stat }) => (
                    <small key={stat.name}>
                      {stat.name} / {stat.url}
                    </small>
                  ))}
                </p>
                <p className="card-text">
                  <strong>Sprites:</strong>
                  <br />
                  <small>{pokemon.sprites?.front_default}</small>
                </p>
                <button type="button" className="btn btn-primary">
                  Add to favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
