import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NumericComponent from './numeric';

describe('NumericComponent', () => {
  it('renders with an initial value', () => {
    render(<NumericComponent initialValue={10} />);
    const valueElement = screen.getByText(/Value: 10/i);
    expect(valueElement).toBeInTheDocument();
  });

  it('defaults to 0 if no initial value is provided', () => {
    render(<NumericComponent />);
    const valueElement = screen.getByText(/Value: 0/i);
    expect(valueElement).toBeInTheDocument();
  });

  it('increments the value when the Increment button is clicked', () => {
    render(<NumericComponent initialValue={5} />);
    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);
    const updatedValue = screen.getByText(/Value: 6/i);
    expect(updatedValue).toBeInTheDocument();
  });

  it('decrements the value when the Decrement button is clicked', () => {
    render(<NumericComponent initialValue={5} />);
    const decrementButton = screen.getByText('Decrement');
    fireEvent.click(decrementButton);
    const updatedValue = screen.getByText(/Value: 4/i);
    expect(updatedValue).toBeInTheDocument();
  });

  it('handles multiple increment and decrement interactions', () => {
    render(<NumericComponent initialValue={10} />);
    const incrementButton = screen.getByText('Increment');
    const decrementButton = screen.getByText('Decrement');
    
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Value: 12/i)).toBeInTheDocument();

    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    expect(screen.getByText(/Value: 9/i)).toBeInTheDocument();
  });
});