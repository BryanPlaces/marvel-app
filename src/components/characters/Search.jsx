import { useState, useCallback, useContext } from 'react';
import debounce from 'just-debounce-it';
import lendsIcon from '../../assets/lends.png';
import { useCharacters } from '../../hooks/useCharacters';
import { CharactersContext } from '../../context/characters';

const SearchComponent = () => {

  const [search, setSearch] = useState('');
  const { getCharacters } = useCharacters({ search });
  const { charactersData } = useContext(CharactersContext);

  const { favoriteCharacters, characters, showFavoriteList } = charactersData;

  const debouncedGetCharacters = useCallback(debounce((searchValue) => {
    getCharacters({ searchValue });
  }, 500), [getCharacters]);

  const handleSubmit = (event) => {
    event.preventDefault();
    getCharacters({ search });
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    debouncedGetCharacters(newSearch);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="search-container">
        <img src={lendsIcon} alt="lends-icon" />
        <input
          className="search-input"
          onChange={handleChange}
          value={search}
          name="query"
          placeholder="SEARCH A CHARACTER..."
        />
      </div>
      <div>
        {showFavoriteList ? favoriteCharacters.length : characters.length}
        RESULTS
      </div>
    </form>
  );
};

export default SearchComponent;
