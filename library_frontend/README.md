# Library Frontend (Library Explorer)

A React-based frontend for browsing, searching, and viewing information about books, authors, and library services.

## Features

- Ocean Professional theme via CSS variables
- Client-side routing (react-router-dom v6)
- Pages: Home, Books, Book Details, Authors, Author Details, Services, Not Found
- Shared components: Navbar, Footer, SearchBar, BookCard, Paginator
- API client with environment-based base URL resolution
- Graceful handling when backend is unreachable (optional healthcheck banner)
- Accessibility: skip links, aria labels, keyboard focus styles
- Basic tests for routing and search flows

## Getting Started

Install dependencies and run the app:

```bash
npm install
npm start
```

Run tests:

```bash
npm test
```

Build for production:

```bash
npm run build
```

## Environment Variables

Configure via `.env`:

- REACT_APP_API_BASE: Base URL for API (preferred).
- REACT_APP_BACKEND_URL: Fallback base URL if API_BASE is not set.
- REACT_APP_FRONTEND_URL: Secondary fallback for API base.
- REACT_APP_HEALTHCHECK_PATH: Optional; path to check backend health (default: `/health`). Set to `none` to disable.
- REACT_APP_FEATURE_FLAGS: Optional; JSON string or comma-separated flags (e.g., `{"showFooter":true}` or `showFooter,experimental`).
- REACT_APP_WS_URL, REACT_APP_NODE_ENV, REACT_APP_NEXT_TELEMETRY_DISABLED, REACT_APP_ENABLE_SOURCE_MAPS, REACT_APP_PORT, REACT_APP_TRUST_PROXY, REACT_APP_LOG_LEVEL, REACT_APP_EXPERIMENTS_ENABLED are available for advanced setups.

Note: Do not commit a `.env` with secrets. Provide these variables via deployment configuration.

## API Expectations

The UI expects these endpoints:
- GET /books?q=&page=&pageSize= -> { items: [], total, page, pageSize }
- GET /books/:id -> { id, title, author, year, description? }
- GET /authors?q=&page=&pageSize= -> { items: [], total, page, pageSize }
- GET /authors/:id -> { id, name, nationality?, bio? }
- Optional: GET /health -> 200 OK for healthcheck

If the backend is unavailable, the UI renders empty states and shows a health banner (unless disabled).

## Project Structure

- src/App.js: Router and layout
- src/components: Navbar, Footer, SearchBar, BookCard, Paginator, HealthcheckBanner
- src/pages: Home, Books, BookDetails, Authors, AuthorDetails, Services, NotFound
- src/lib/api: client.js (fetch wrapper), books.js, authors.js
- src/hooks: useQueryParams, useFeatureFlags

## Theming

Theme variables defined in `src/App.css`. Supports light and dark modes (toggle in Navbar). Colors derived from Ocean Professional theme with subtle shadows and rounded corners.

## Accessibility

- Skip-link to main content
- Proper aria attributes on navigation and search
- Focus ring and keyboard navigability

## Notes

- When integrating with a real backend, ensure CORS is configured appropriately if the API is on a different domain.
- Healthcheck can be disabled by setting `REACT_APP_HEALTHCHECK_PATH=none`.
