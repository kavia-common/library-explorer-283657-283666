import React from 'react';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function NotFound() {
  /** 404 page for unmatched routes. */
  return (
    <div className="container">
      <h1>Page Not Found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link className="btn" to="/">Go Home</Link>
    </div>
  );
}
