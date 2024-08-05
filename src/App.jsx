import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import DetailsPage from './pages/Details';
import './styles/app.scss';
import Header from './components/Header';
import { CharactersProvider } from './context/characters';

const App = () => (
  <CharactersProvider>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  </CharactersProvider>
);

export default App;
