import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('search input submits on Books page', () => {
  render(
    <MemoryRouter initialEntries={['/books']}>
      <App />
    </MemoryRouter>
  );
  const input = screen.getByRole('searchbox', { name: /search/i });
  fireEvent.change(input, { target: { value: 'gatsby' } });
  fireEvent.submit(input.closest('form'));
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});
