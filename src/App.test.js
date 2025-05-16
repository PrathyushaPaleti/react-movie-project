import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders the title for NumericComponent', () => {
    render(<App />);
    const numericTitleElement = screen.getByText('Numeric Value Example');
    expect(numericTitleElement).toBeInTheDocument();
  });

  it('renders the NumericComponent with initial value', () => {
    render(<App />);
    const numericValueElement = screen.getByText(/Value: 10/i);
    expect(numericValueElement).toBeInTheDocument();
  });

  it('renders the title for SearchComponent', () => {
    render(<App />);
    const searchTitleElement = screen.getByText('Search for a movie');
    expect(searchTitleElement).toBeInTheDocument();
  });

  it('renders SearchComponent with initial query', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText('What do you want to watch?');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('Avengers');
  });


  it('calls handleSearch when SearchComponent executes a search (button click)', () => {
    jest.spyOn(console, 'log'); // Spy on console.log to test handleSearch behavior
    render(<App />);

    const inputElement = screen.getByPlaceholderText('What do you want to watch?');
    const searchButton = screen.getByText('Search');
    fireEvent.change(inputElement, { target: { value: 'Iron Man' } });
    fireEvent.click(searchButton);

    expect(console.log).toHaveBeenCalledWith('Search query:', 'Iron Man');
  });
});