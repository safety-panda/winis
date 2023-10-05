import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../counter'; 

test('Counter works correctly', () => {
  const { getByText } = render(<Counter title="Test Counter" />);

  // Check if title renders correctly
  expect(getByText('Test Counter')).toBeInTheDocument();

  // Check initial count
  expect(getByText('0')).toBeInTheDocument();

  // Click the "Add" button and check if count increments
  fireEvent.click(getByText('Add'));
  expect(getByText('1')).toBeInTheDocument();

  // Click the "Subtract" button and check if count decrements
  fireEvent.click(getByText('Subtract'));
  expect(getByText('0')).toBeInTheDocument();
});

