import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders NotFound for unknown route', () => {
  render(
    <MemoryRouter initialEntries={['/some/unknown/path']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/page not found/i)).toBeInTheDocument();
});
