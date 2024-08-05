import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import DetailsPage from '../../pages/Details';
import { useCharacter } from '../../hooks/useCharacter';

// Mock the useCharacter hook
jest.mock('../../hooks/useCharacter');

describe('DetailsPage', () => {
  it('renders loading state when character is not available', () => {
    useCharacter.mockReturnValue({ character: null });

    render(
      <MemoryRouter initialEntries={['/character/1']}>
        <Routes>
          <Route path="/character/:id" element={<DetailsPage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
