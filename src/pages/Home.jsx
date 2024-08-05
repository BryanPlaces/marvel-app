import { useContext } from 'react';
import SearchComponent from '../components/characters/Search';
import CharacterListComponent from '../components/characters/List';
import { CharactersContext } from '../context/characters';
import '../styles/Characters.scss';

const HomePage = () => {
  const { charactersData } = useContext(CharactersContext);
  const { loading } = charactersData;

  return (
    <div className="characters-container">
      <SearchComponent />
      {
        loading ? <p>... Cargando</p> : <CharacterListComponent />
      }
    </div>
  );
};

export default HomePage;
