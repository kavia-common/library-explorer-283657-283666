import React from 'react';

// PUBLIC_INTERFACE
export default function Footer() {
  /** Footer with basic site info. */
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container" role="contentinfo">
        <p>© {year} Library Explorer. All rights reserved.</p>
      </div>
    </footer>
  );
}
