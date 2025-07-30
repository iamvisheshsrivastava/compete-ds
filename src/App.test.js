import { render, screen } from '@testing-library/react'; // Testing utilities
import App from './App'; // Component under test

// Basic example test
test('renders learn react link', () => {
  render(<App />); // Render the component
  const linkElement = screen.getByText(/learn react/i); // Search for link
  expect(linkElement).toBeInTheDocument(); // Verify presence
});
