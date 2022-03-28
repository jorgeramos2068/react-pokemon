import React, { useState } from 'react';
import axios from 'axios';

const SearchPage = () => {
  const endpoint = 'https://pokeapi.co/api/v2/pokemon';
  const [searchName, setSearchName] = useState('');
  const [error, setError] = useState('');
  const [pokemon, setPokemon] = useState(null);

  const handleInputChange = e => {
    setSearchName(e.target.value);
  };

  const searchPokemon = async () => {
    try {
      if (searchName) {
        const { data } = await axios.get(`${endpoint}/${searchName}`);
        const { name, order, weight, stats, sprites } = data;
        setPokemon({ name, order, weight, stats, sprites });
        setError('');
      } else {
        setError('The search text cannot be empty');
        setPokemon(null);
      }
    } catch (e) {
      setError('There is no data with that search');
      setPokemon(null);
      console.error(e);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    searchPokemon();
  };

  return (
    <div>
      <h1>Pokemon App - Search</h1>
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              Pokemon App
            </a>
            <div>
              <form
                className="custom-form form-inline my-2 my-lg-0"
                onSubmit={handleSubmit}
              >
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchName}
                  onChange={handleInputChange}
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {pokemon && (
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
                <button type="button" className="btn btn-primary">
                  Add to favorites
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
