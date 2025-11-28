import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layout and shared components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HealthcheckBanner from './components/HealthcheckBanner';

// Pages
import Home from './pages/Home';
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';
import Authors from './pages/Authors';
import AuthorDetails from './pages/AuthorDetails';
import Services from './pages/Services';
import NotFound from './pages/NotFound';

// Hooks
import useFeatureFlags from './hooks/useFeatureFlags';

// PUBLIC_INTERFACE
function App() {
  /**
   * Top-level application with routing and theming.
   * - Provides React Router routes for all app pages
   * - Applies Ocean Professional theme via CSS variables
   * - Displays optional backend healthcheck banner when backend unreachable
   */
  const [theme, setTheme] = useState('light');
  const { flags } = useFeatureFlags();

  // Apply theme attribute for CSS variables
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  const themeLabel = useMemo(() => (theme === 'light' ? '🌙 Dark' : '☀️ Light'), [theme]);

  return (
    <Router>
      <div className="app-root" style={{ background: 'var(--background)', color: 'var(--text)' }}>
        <a href="#main" className="skip-link">Skip to content</a>
        <Navbar onToggleTheme={toggleTheme} themeLabel={themeLabel} />
        <HealthcheckBanner />
        <main id="main" role="main" className="container page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<BookDetails />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/authors/:id" element={<AuthorDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {flags.showFooter !== false && <Footer />}
      </div>
    </Router>
  );
}

export default App;
