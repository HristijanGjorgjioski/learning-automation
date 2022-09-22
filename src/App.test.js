import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hristijan Tes text', () => {
  render(<App />);
  const textElement = screen.getByText('Hristijan Test');
  expect(textElement).toBeInTheDocument();
});
