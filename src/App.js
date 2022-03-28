import { Navigate, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import PokemonPage from './pages/PokemonPage/PokemonPage';
import SearchPage from './pages/SearchPage/SearchPage';
import store from './store/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/pokemon" element={<PokemonPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
