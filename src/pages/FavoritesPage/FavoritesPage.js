import React from 'react';
import { useSelector } from 'react-redux';

const FavoritesPage = () => {
  const { favorites } = useSelector(state => state.pokemon);
  console.log('Favs', favorites);

  return (
    <div>
      <h1>Pokemon App - Favorites</h1>
      <div className="row mt-5">
        <div className="col">
          {/*false && (
            <div className="card" style={{ width: '50%' }}>
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
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddFavorite}
                >
                  Add to favorites
                </button>
              </div>
            </div>
                  )*/}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
