import { useState, useContext, useEffect } from 'react';
import { CharactersContext } from '../context/characters';

export const useFavorite = ({ character }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { charactersData, setCharactersData } = useContext(CharactersContext);

  useEffect(() => {
    const isFav = charactersData.favoriteCharacters.some((favChar) => favChar.id === character.id);
    setIsFavorite(isFav);
  }, [charactersData.favoriteCharacters, character.id]);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();

    setCharactersData((prevState) => {
      const { favoriteCharacters } = prevState;

      if (isFavorite || charactersData.showFavoriteList) {
        return {
          ...prevState,
          favoriteCharacters: favoriteCharacters.filter((favChar) => favChar.id !== character.id),
        };
      }

      return { ...prevState, favoriteCharacters: [...favoriteCharacters, character] };
    });

    setIsFavorite(!isFavorite);
  };

  return {
    isFavorite,
    charactersData,
    setIsFavorite,
    toggleFavorite,
  };
};
