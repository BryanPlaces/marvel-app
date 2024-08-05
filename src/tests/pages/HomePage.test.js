import { render, screen } from '@testing-library/react';
import HomePage from '../../pages/Home';
import { CharactersContext } from '../../context/characters';

// Mock components
jest.mock('../../components/characters/Search', () => {
  const MockSearchComponent = () => <div>SearchComponent</div>;
  return MockSearchComponent;
});

jest.mock('../../components/characters/List', () => {
  const MockCharacterListComponent = () => <div>CharacterListComponent</div>;
  return MockCharacterListComponent;
});

describe('HomePage', () => {
  it('renders the SearchComponent', () => {
    const charactersData = { loading: false };
    render(
      <CharactersContext.Provider value={{ charactersData }}>
        <HomePage />
      </CharactersContext.Provider>,
    );
    expect(screen.getByText('SearchComponent')).toBeInTheDocument();
  });

  it('displays loading message when loading is true', () => {
    const charactersData = { loading: true };
    render(
      <CharactersContext.Provider value={{ charactersData }}>
        <HomePage />
      </CharactersContext.Provider>,
    );
    expect(screen.getByText('... Cargando')).toBeInTheDocument();
  });

  it('displays CharacterListComponent when loading is false', () => {
    const charactersData = { loading: false };
    render(
      <CharactersContext.Provider value={{ charactersData }}>
        <HomePage />
      </CharactersContext.Provider>,
    );
    expect(screen.getByText('CharacterListComponent')).toBeInTheDocument();
  });
});
