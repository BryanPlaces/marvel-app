import { createContext, useState, useMemo } from 'react';

export const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
  const [charactersData, setCharactersData] = useState({
    favoriteCharacters: [],
    characters: [],
    showFavoriteList: false,
    loading: false,
  });

  const value = useMemo(() => ({ charactersData, setCharactersData }), [charactersData]);

  return (
    <CharactersContext.Provider value={value}>
      { children }
    </CharactersContext.Provider>
  );
};
