import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CharactersContext } from '../context/characters';
import marvelLogo from '../assets/logo.png';
import heart from '../assets/heartSelected.png';

const Header = () => {
  const navigate = useNavigate();
  const { charactersData, setCharactersData } = useContext(CharactersContext);

  const showFavoriteCharacters = (value) => {
    setCharactersData((prevState) => ({ ...prevState, showFavoriteList: value }));
    navigate('/');
  };

  return (
    <header className="app-header">
      <button
        type="button"
        onClick={() => showFavoriteCharacters(false)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            showFavoriteCharacters(false);
          }
        }}
        style={{ background: 'none', border: 'none', padding: 0 }}
      >
        <img src={marvelLogo} alt="Logo" width="100" />
      </button>

      <div
        className="favorite-header-container"
        role="button"
        tabIndex="0"
        onClick={() => showFavoriteCharacters(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            showFavoriteCharacters(true);
          }
        }}
      >
        <img src={heart} alt="Heart icon" width="100" className="favorite-icon" />
        {charactersData.favoriteCharacters.length}
      </div>
    </header>
  );
};

export default Header;
