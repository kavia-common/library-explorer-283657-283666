import React, { useState } from 'react';

// PUBLIC_INTERFACE
export default function SearchBar({ onSearch, placeholder = "Search..." }) {
  /** Search input with submit button; calls onSearch(term). */
  const [q, setQ] = useState('');

  const submit = (e) => {
    e.preventDefault();
    onSearch?.(q.trim());
  };

  return (
    <form onSubmit={submit} role="search" aria-label="Site search">
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          className="input"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={placeholder}
          aria-label="Search"
        />
        <button className="btn" type="submit" aria-label="Submit search">Search</button>
      </div>
    </form>
  );
}
