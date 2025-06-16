import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchComponent from './search';

describe('SearchComponent', () => {
  it('renders correctly with initial query', () => {
    render(<SearchComponent initialQuery="Avengers" onSearch={jest.fn()} />);
    const inputElement = screen.getByPlaceholderText('What do you want to watch?');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('Avengers');

    const buttonElement = screen.getByText('Search');
    expect(buttonElement).toBeInTheDocument();
  });

  it('updates input value when typing', () => {
    render(<SearchComponent initialQuery="Avengers" onSearch={jest.fn()} />);
    const inputElement = screen.getByPlaceholderText('What do you want to watch?');
    fireEvent.change(inputElement, { target: { value: 'Spider-Man' } });
    expect(inputElement).toHaveValue('Spider-Man');
  });

  it('calls onSearch when clicking the Search button', () => {
    const onSearchMock = jest.fn();
    render(<SearchComponent initialQuery="" onSearch={onSearchMock} />);
    const inputElement = screen.getByPlaceholderText('What do you want to watch?');
    const buttonElement = screen.getByText('Search');
    fireEvent.change(inputElement, { target: { value: 'Avengers' } });
    fireEvent.click(buttonElement);
    expect(onSearchMock).toHaveBeenCalledWith('Avengers');
  });
});