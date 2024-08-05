import {
  useEffect,
  useRef,
  useCallback,
  useContext,
} from 'react';
import { searchCharacters } from '../services/characters';
import { CharactersContext } from '../context/characters';

export function useCharacters({ search = '' }) {
  const { setCharactersData } = useContext(CharactersContext);
  const previousSearch = useRef(search);

  const getCharacters = useCallback(async ({ searchValue }) => {
    try {
      setCharactersData((prevState) => ({ ...prevState, loading: true }));

      previousSearch.current = searchValue;
      const newCharacters = await searchCharacters(searchValue);
      setCharactersData((prevState) => ({ ...prevState, characters: newCharacters }));
    } catch (e) {
      console.log(e.message);
    } finally {
      setCharactersData((prevState) => ({ ...prevState, loading: false }));
    }
  }, []);

  useEffect(() => {
    getCharacters({ search });
  }, []);

  return {
    getCharacters,
  };
}
