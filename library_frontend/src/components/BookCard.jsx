import React from 'react';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function BookCard({ book }) {
  /** Renders a single book summary card. */
  if (!book) return null;
  return (
    <article className="card book-card" aria-labelledby={`book-${book.id}-title`}>
      <h3 id={`book-${book.id}-title`} className="book-title">{book.title}</h3>
      <p className="book-meta">
        {book.author ? `by ${book.author}` : 'Unknown author'}
        {book.year ? ` · ${book.year}` : ''}
      </p>
      <div>
        <Link to={`/books/${book.id}`} className="btn secondary" aria-label={`View details for ${book.title}`}>View</Link>
      </div>
    </article>
  );
}
