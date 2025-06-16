import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Mock child components
jest.mock('./components/filterbar/filterbar', () => ({ genres, onGenreSelect, onSortChange }) => {
  return (
    <div data-testid="filterbar">
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onGenreSelect(genre)}
          data-testid={`genre-select-${genre}`}
        >
          {genre}
        </button>
      ))}
      <button onClick={() => onSortChange('Release Date')} data-testid="sort-change">
        Sort by Release Date
      </button>
    </div>
  );
});

jest.mock('./components/heroimage/heroimage', () => ({ onAddMovie }) => {
  return (
    <div data-testid="heroimage">
      <button onClick={onAddMovie} data-testid="add-movie">
        Add Movie
      </button>
    </div>
  );
});

jest.mock('./components/movietile/movielist', () => () => {
  return <div data-testid="movieslist">Movies List</div>;
});

describe('App Component', () => {
  test('renders HeroImage, FilterBar, and MoviesList components', () => {
    render(<App />);

    // Verify that the mocked components are rendered
    expect(screen.getByTestId('heroimage')).toBeInTheDocument();
    expect(screen.getByTestId('filterbar')).toBeInTheDocument();
    expect(screen.getByTestId('movieslist')).toBeInTheDocument();
  });

  test('triggers handleAddMovie when "Add Movie" button is clicked', () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

    render(<App />);

    const addMovieButton = screen.getByTestId('add-movie');
    fireEvent.click(addMovieButton);

    expect(consoleLogSpy).toHaveBeenCalledWith('Add movie button clicked');

    consoleLogSpy.mockRestore();
  });

  test('triggers handleGenreSelect when a genre button is clicked', () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

    render(<App />);

    const comedyGenreButton = screen.getByTestId('genre-select-Comedy');
    fireEvent.click(comedyGenreButton);

    expect(consoleLogSpy).toHaveBeenCalledWith('Selected genre:', 'Comedy');

    consoleLogSpy.mockRestore();
  });

  test('triggers handleSortChange when the sort option is changed', () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

    render(<App />);

    const sortChangeButton = screen.getByTestId('sort-change');
    fireEvent.click(sortChangeButton);

    expect(consoleLogSpy).toHaveBeenCalledWith('Selected sort option:', 'Release Date');

    consoleLogSpy.mockRestore();
  });

  test('filters genres correctly by rendering all genre buttons', () => {
    render(<App />);

    const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

    // Check if all genre buttons are rendered
    genres.forEach((genre) => {
      expect(screen.getByTestId(`genre-select-${genre}`)).toBeInTheDocument();
    });
  });
});