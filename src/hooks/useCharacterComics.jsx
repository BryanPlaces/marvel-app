import { useState, useEffect } from 'react';
import { getCharacterComics } from '../services/characters';

export function useCharacterComics({ id }) {
  const [comics, setComics] = useState([]);
  useEffect(() => {
    const fetchCharacterComics = async () => {
      const comicsResult = await getCharacterComics(id);
      setComics(comicsResult);
    };

    fetchCharacterComics();
  }, [id]);

  return {
    comics,
  };
}
