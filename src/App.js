import { Navigate, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import SearchPage from './pages/SearchPage/SearchPage';
import store from './store/store';
import './App.css';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
