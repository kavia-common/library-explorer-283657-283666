import React from 'react';
import { NavLink, Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Navbar({ onToggleTheme, themeLabel }) {
  /** Top navigation bar with routes and theme toggle. */
  return (
    <nav className="navbar" role="navigation" aria-label="Primary">
      <div className="container navbar-inner">
        <Link to="/" className="nav-link" aria-label="Library home">
          <strong style={{ color: 'var(--primary)' }}>Library</strong> Explorer
        </Link>
        <div className="nav-links" role="menubar" aria-label="Primary menu">
          <NavLink to="/" end className="nav-link" role="menuitem">Home</NavLink>
          <NavLink to="/books" className="nav-link" role="menuitem">Books</NavLink>
          <NavLink to="/authors" className="nav-link" role="menuitem">Authors</NavLink>
          <NavLink to="/services" className="nav-link" role="menuitem">Services</NavLink>
          <button className="btn" onClick={onToggleTheme} aria-label="Toggle theme">{themeLabel}</button>
        </div>
      </div>
    </nav>
  );
}
