import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterBar from './filterbar';

describe('FilterBar Component', () => {
  const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
  const mockHandleGenreSelect = jest.fn();
  const mockHandleSortChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders genre buttons and sort dropdown correctly', () => {
    render(<FilterBar genres={genres} onGenreSelect={mockHandleGenreSelect} onSortChange={mockHandleSortChange} />);

    // Check genre buttons
    genres.forEach((genre) => {
      const genreButton = screen.getByText(genre);
      expect(genreButton).toBeInTheDocument();
    });

    // Check sort dropdown
    const sortLabel = screen.getByText('Sort by');
    const sortSelect = screen.getByRole('combobox');
    expect(sortLabel).toBeInTheDocument();
    expect(sortSelect).toBeInTheDocument();

    // Check sort options
    const releaseDateOption = screen.getByText('Release Date');
    const titleOption = screen.getByText('Title');
    expect(releaseDateOption).toBeInTheDocument();
    expect(titleOption).toBeInTheDocument();
  });

  it('calls onGenreSelect when a genre button is clicked', () => {
    render(<FilterBar genres={genres} onGenreSelect={mockHandleGenreSelect} onSortChange={mockHandleSortChange} />);

    const genreButton = screen.getByText('Documentary');
    fireEvent.click(genreButton);

    expect(mockHandleGenreSelect).toHaveBeenCalledTimes(1);
    expect(mockHandleGenreSelect).toHaveBeenCalledWith('Documentary');
  });

  it('highlights the selected genre button', () => {
    render(<FilterBar genres={genres} onGenreSelect={mockHandleGenreSelect} onSortChange={mockHandleSortChange} />);

    const allButton = screen.getByText('All');
    const comedyButton = screen.getByText('Comedy');

    // Verify "All" is initially active
    expect(allButton).toHaveClass('active');

    // Click on Comedy button
    fireEvent.click(comedyButton);

    // Verify "Comedy" is now active
    expect(comedyButton).toHaveClass('active');
    expect(allButton).not.toHaveClass('active');
  });

  it('calls onSortChange when a sort option is selected', () => {
    render(<FilterBar genres={genres} onGenreSelect={mockHandleGenreSelect} onSortChange={mockHandleSortChange} />);

    const sortSelect = screen.getByRole('combobox');
    fireEvent.change(sortSelect, { target: { value: 'title' } });

    expect(mockHandleSortChange).toHaveBeenCalledTimes(1);
    expect(mockHandleSortChange).toHaveBeenCalledWith('title');
  });

  it('pre-selects the correct default sort option', () => {
    render(<FilterBar genres={genres} onGenreSelect={mockHandleGenreSelect} onSortChange={mockHandleSortChange} />);

    const sortSelect = screen.getByRole('combobox');
    expect(sortSelect).toHaveValue('releaseDate'); // Verify default selected value
  });
});