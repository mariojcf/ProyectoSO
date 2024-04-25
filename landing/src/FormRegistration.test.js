import { render, screen } from '@testing-library/react';
import FormRegistration from './FormRegistration';

test('Testing name form exists', () => {
  render(<FormRegistration />);
  const labelElement = screen.getByText(/Nombre:/i);
  expect(labelElement).toBeInTheDocument();
});

test('Testing field asistira form exists', () => {
  render(<FormRegistration />);
  const labelElement = screen.getByText(/Asistirá/i);
  expect(labelElement).toBeInTheDocument();
});