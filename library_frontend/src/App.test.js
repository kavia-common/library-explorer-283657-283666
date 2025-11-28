import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

function renderWithRouter(initialEntries = ['/']) {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <App />
    </MemoryRouter>
  );
}

test('renders navbar links', () => {
  renderWithRouter(['/']);
  expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /books/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /authors/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument();
});

test('navigates to Books page and performs search', async () => {
  renderWithRouter(['/books']);
  expect(screen.getByRole('heading', { name: /books/i })).toBeInTheDocument();
  const input = screen.getByRole('searchbox', { name: /search/i });
  fireEvent.change(input, { target: { value: 'React' } });
  fireEvent.submit(input.closest('form'));
  // We cannot assert network calls, but URL should update
  // MemoryRouter doesn't update window.location, but component renders without error
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});
