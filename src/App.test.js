import { render, screen } from '@testing-library/react'; // Testing utilities
import App from './App'; // Component under test

// Basic example test
test('renders welcome heading', () => {
  render(<App />); // Render the component
  const heading = screen.getByText(/Welcome to CompeteDS!/i);
  expect(heading).toBeInTheDocument();
});
