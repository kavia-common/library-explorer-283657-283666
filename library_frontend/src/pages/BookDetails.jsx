import React, { useEffect, useState } from 'react';
import { getBook } from '../lib/api/books';
import { useParams, Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function BookDetails() {
  /** Book details page by id. */
  const { id } = useParams();
  const [state, setState] = useState({ item: null, loading: true });

  useEffect(() => {
    let ignore = false;
    async function load() {
      const res = await getBook(id);
      if (!ignore) setState({ item: res.item, loading: false });
    }
    load();
    return () => { ignore = true; };
  }, [id]);

  if (state.loading) return <div className="container"><p>Loading...</p></div>;
  if (!state.item) return (
    <div className="container">
      <p>Book not found.</p>
      <Link className="btn" to="/books">Back to Books</Link>
    </div>
  );

  const b = state.item;
  return (
    <div className="container">
      <article className="card" aria-labelledby="book-title">
        <h1 id="book-title">{b.title}</h1>
        <p className="book-meta">
          {b.author ? `by ${b.author}` : 'Unknown author'} {b.year ? `· ${b.year}` : ''}
        </p>
        {b.description && <p style={{ marginTop: '1rem' }}>{b.description}</p>}
        <div style={{ marginTop: '1rem' }}>
          <Link className="btn" to="/books">Back</Link>
        </div>
      </article>
    </div>
  );
}
