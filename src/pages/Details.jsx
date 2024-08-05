import { useParams } from 'react-router-dom';
import CharacterDetailsComponent from '../components/characters/Details';
import ComicsComponent from '../components/characters/Comics';
import { useCharacter } from '../hooks/useCharacter';
import '../styles/CharactersDetails.scss';

const DetailsPage = () => {
  const { id } = useParams();
  const { character } = useCharacter({ id });

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="character-header">
        <CharacterDetailsComponent character={character} />
      </div>
      <ComicsComponent />
    </>
  );
};

export default DetailsPage;
