import React from 'react';

// PUBLIC_INTERFACE
export default function Services() {
  /** Static page describing library services. */
  return (
    <div className="container">
      <h1>Library Services</h1>
      <div className="grid" style={{ marginTop: '1rem' }}>
        <section className="card">
          <h3>Borrowing</h3>
          <p>Borrow books for up to 3 weeks. Renewals available if there are no holds.</p>
        </section>
        <section className="card">
          <h3>Research Help</h3>
          <p>Our librarians can help you locate resources and conduct research.</p>
        </section>
        <section className="card">
          <h3>Events & Programs</h3>
          <p>Join reading clubs, author talks, and workshops. Check the events calendar.</p>
        </section>
      </div>
    </div>
  );
}
