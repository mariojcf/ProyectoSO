import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const imgElement = screen.getByAltText(/banner/i);
  expect(imgElement).toBeInTheDocument();
});

test('Testing title content', () => {
  render(<App />);
  const textElement = screen.getByText(/Registrate para ir a la celebración/i);
  expect(textElement).toBeInTheDocument();
});
