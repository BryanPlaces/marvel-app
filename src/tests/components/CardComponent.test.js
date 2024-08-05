import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CharacterCard from '../../components/characters/Card';
import { useFavorite } from '../../hooks/useFavorite';

// Mock the useFavorite hook
jest.mock('../../hooks/useFavorite', () => ({
  useFavorite: jest.fn(),
}));

const mockCharacter = {
  id: 1,
  name: 'Spider-Man',
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b',
    extension: 'jpg',
  },
};

describe('CharacterCard', () => {
  beforeEach(() => {
    useFavorite.mockReturnValue({
      isFavorite: false,
      charactersData: { showFavoriteList: false },
      toggleFavorite: jest.fn(),
    });
  });

  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <CharacterCard character={mockCharacter} />
      </MemoryRouter>,
    );
    expect(screen.getByAltText(mockCharacter.name)).toBeInTheDocument();
  });

  it('displays character information correctly', () => {
    render(
      <MemoryRouter>
        <CharacterCard character={mockCharacter} />
      </MemoryRouter>,
    );
    expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
    expect(screen.getByAltText(mockCharacter.name)).toHaveAttribute(
      'src',
      `${mockCharacter.thumbnail.path}.${mockCharacter.thumbnail.extension}`,
    );
  });

  it('displays the correct favorite icon based on isFavorite state', () => {
    useFavorite.mockReturnValueOnce({
      isFavorite: true,
      charactersData: { showFavoriteList: false },
      toggleFavorite: jest.fn(),
    });

    render(
      <MemoryRouter>
        <CharacterCard character={mockCharacter} />
      </MemoryRouter>,
    );
    expect(screen.getByAltText('heart-icon')).toHaveAttribute('src', 'heartSelected.png');
  });

  it('calls toggleFavorite when the favorite icon is clicked', () => {
    const toggleFavoriteMock = jest.fn();
    useFavorite.mockReturnValue({
      isFavorite: false,
      charactersData: { showFavoriteList: false },
      toggleFavorite: toggleFavoriteMock,
    });

    render(
      <MemoryRouter>
        <CharacterCard character={mockCharacter} />
      </MemoryRouter>,
    );
    fireEvent.click(screen.getByAltText('heart-icon'));
    expect(toggleFavoriteMock).toHaveBeenCalledTimes(1);
  });
});
