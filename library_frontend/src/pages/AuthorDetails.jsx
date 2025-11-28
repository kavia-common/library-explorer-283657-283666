import React, { useEffect, useState } from 'react';
import { getAuthor } from '../lib/api/authors';
import { useParams, Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function AuthorDetails() {
  /** Author details page by id. */
  const { id } = useParams();
  const [state, setState] = useState({ item: null, loading: true });

  useEffect(() => {
    let ignore = false;
    async function load() {
      const res = await getAuthor(id);
      if (!ignore) setState({ item: res.item, loading: false });
    }
    load();
    return () => { ignore = true; };
  }, [id]);

  if (state.loading) return <div className="container"><p>Loading...</p></div>;
  if (!state.item) return (
    <div className="container">
      <p>Author not found.</p>
      <Link className="btn" to="/authors">Back to Authors</Link>
    </div>
  );

  const a = state.item;
  return (
    <div className="container">
      <article className="card" aria-labelledby="author-title">
        <h1 id="author-title">{a.name}</h1>
        <p className="book-meta">{a.nationality || 'Unknown nationality'}</p>
        {a.bio && <p style={{ marginTop: '1rem' }}>{a.bio}</p>}
        <div style={{ marginTop: '1rem' }}>
          <Link className="btn" to="/authors">Back</Link>
        </div>
      </article>
    </div>
  );
}
