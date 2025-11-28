import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import Paginator from '../components/Paginator';
import { listBooks } from '../lib/api/books';
import useQueryParams from '../hooks/useQueryParams';
import { useNavigate } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Books() {
  /** Books listing page with search and pagination. */
  const params = useQueryParams();
  const navigate = useNavigate();

  const [q, setQ] = useState(params.q || '');
  const [page, setPage] = useState(Number(params.page || 1));
  const [data, setData] = useState({ items: [], total: 0, page: 1, pageSize: 12 });
  const [loading, setLoading] = useState(false);

  async function load() {
    setLoading(true);
    const res = await listBooks({ q, page, pageSize: 12 });
    setData(res);
    setLoading(false);
  }

  // sync URL
  useEffect(() => {
    const qp = new URLSearchParams();
    if (q) qp.set('q', q);
    if (page > 1) qp.set('page', String(page));
    navigate({ pathname: '/books', search: qp.toString() ? `?${qp.toString()}` : '' }, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, page]);

  useEffect(() => { load(); /* eslint-disable-next-line */ }, [q, page]);

  const onSearch = (term) => {
    setPage(1);
    setQ(term || '');
  };

  return (
    <div className="container">
      <h1>Books</h1>
      <SearchBar onSearch={onSearch} placeholder="Search books by title, author..." />
      {loading && <p>Loading...</p>}
      {!loading && data.items.length === 0 && <p>No books found.</p>}
      <div className="grid grid-3" style={{ marginTop: '1rem' }}>
        {data.items.map((b) => <BookCard key={b.id} book={b} />)}
      </div>
      <Paginator page={data.page} total={data.total} pageSize={data.pageSize} onPageChange={setPage} />
    </div>
  );
}
