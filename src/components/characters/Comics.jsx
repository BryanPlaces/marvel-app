import { useParams } from 'react-router-dom';
import { useCharacterComics } from '../../hooks/useCharacterComics';

const ComicsComponent = () => {
  const { id } = useParams();
  const { comics } = useCharacterComics({ id });

  return (
    <div className="comics-wrapper">
      <h2>COMICS</h2>
      <div className="comics-container">
        {comics.map((comic) => (
          <div className="comic-card" key={comic.id}>
            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} className="comic-image" />
            <div className="comic-title" key={comic.id}>{comic.title}</div>
            <div className="comic-date">
              {comic.dates[0].date.slice(0, 4)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComicsComponent;
