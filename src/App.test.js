// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders group number and team member names', () => {
  render(<App />);
  const groupElement = screen.getByText(/Group #16/i);
  const teamMemberElement = screen.getByText(/Simranjot Kaur Brar/i);
  expect(groupElement).toBeInTheDocument();
  expect(teamMemberElement).toBeInTheDocument();
});
