import {
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import { getCharacter } from '../services/characters';
import { CharactersContext } from '../context/characters';

export function useCharacter({ id }) {
  const [character, setCharacter] = useState(null);
  const { setCharactersData } = useContext(CharactersContext);

  const fetchCharacter = useCallback(async (characterId) => {
    try {
      setCharactersData((prevState) => ({ ...prevState, loading: true }));
      const marvelCharacter = await getCharacter(characterId);
      setCharacter(marvelCharacter);
    } catch (e) {
      console.log(e.message);
    } finally {
      setCharactersData((prevState) => ({ ...prevState, loading: false }));
    }
  }, []);

  useEffect(() => {
    fetchCharacter(id);
  }, [id, fetchCharacter]);

  return {
    character,
  };
}
