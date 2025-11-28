import React from 'react';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Home() {
  /** Landing page introducing the library. */
  return (
    <div className="container">
      <section className="card" aria-labelledby="welcome-title" style={{ padding: '2rem' }}>
        <h1 id="welcome-title" style={{ marginTop: 0 }}>Welcome to Library Explorer</h1>
        <p className="description" style={{ color: 'var(--muted)' }}>
          Browse books, discover authors, and explore library services. Use the navigation above to get started.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', marginTop: '1rem' }}>
          <Link to="/books" className="btn">Browse Books</Link>
          <Link to="/authors" className="btn secondary">Discover Authors</Link>
        </div>
      </section>
    </div>
  );
}
