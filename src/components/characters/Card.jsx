import { Link } from 'react-router-dom';
import { useFavorite } from '../../hooks/useFavorite';
import heartSelected from '../../assets/heartSelected.png';
import heartUnselected from '../../assets/heartUnselected.png';
import '../../styles/Characters.scss';

const CharacterCard = ({ character }) => {
  const { isFavorite, charactersData, toggleFavorite } = useFavorite({ character });

  return (
    <div className="character-card">
      <Link to={`/character/${character.id}`}>
        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} className="character-image" />
        <div className="character-info">
          <div className="character-name">{character.name}</div>
        </div>
      </Link>

      <button
        type="button"
        onClick={toggleFavorite}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleFavorite();
          }
        }}
        style={{ background: 'none', border: 'none', padding: 0 }}
      >
        <img src={isFavorite || charactersData.showFavoriteList ? heartSelected : heartUnselected} alt="heart-icon" className="favorite-icon" />
      </button>
    </div>
  );
};

export default CharacterCard;
