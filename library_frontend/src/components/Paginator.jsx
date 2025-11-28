import React from 'react';

// PUBLIC_INTERFACE
export default function Paginator({ page = 1, total = 0, pageSize = 10, onPageChange }) {
  /**
   * Accessible paginator with previous/next buttons.
   * total = total items
   */
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <nav aria-label="Pagination" style={{ display: 'flex', gap: '.5rem', alignItems: 'center', justifyContent: 'flex-end', marginTop: '1rem' }}>
      <button className="btn" onClick={() => onPageChange?.(page - 1)} disabled={!canPrev} aria-disabled={!canPrev} aria-label="Previous page">Prev</button>
      <span aria-live="polite">Page {page} of {totalPages}</span>
      <button className="btn" onClick={() => onPageChange?.(page + 1)} disabled={!canNext} aria-disabled={!canNext} aria-label="Next page">Next</button>
    </nav>
  );
}
