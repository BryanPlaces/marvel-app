import { useContext } from 'react';
import CharacterCard from './Card';
import { CharactersContext } from '../../context/characters';
import '../../styles/Characters.scss';

const CharacterListComponent = () => {

  const { charactersData } = useContext(CharactersContext);
  const { favoriteCharacters, characters, showFavoriteList } = charactersData;

  const charactersToDisplay = showFavoriteList ? favoriteCharacters : characters;

  return (
    <div className="character-grid">
      {charactersToDisplay.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterListComponent;
