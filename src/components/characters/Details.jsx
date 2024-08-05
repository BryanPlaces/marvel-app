import { useFavorite } from '../../hooks/useFavorite';
import heartUnselected from '../../assets/heartUnselected.png';
import heartSelected from '../../assets/heartSelected.png';

const CharacterDetailComponent = ({ character }) => {
  const { isFavorite, toggleFavorite } = useFavorite({ character });

  return (
    <div className="character-resume">
      <img className="character-img" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
      <div className="character-info">
        <div className="character-title">
          <h1>{character.name}</h1>
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
            <img src={isFavorite ? heartSelected : heartUnselected} alt="Logo" width="100" />
          </button>
        </div>
        <p>{character.description}</p>
      </div>
    </div>
  );
};

export default CharacterDetailComponent;
