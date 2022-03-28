import { Navigate, Routes, Route } from 'react-router-dom';
import './App.css';
import PokemonPage from './pages/PokemonPage/PokemonPage';
import SearchPage from './pages/SearchPage/SearchPage';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/pokemon" element={<PokemonPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
