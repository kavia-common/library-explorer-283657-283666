import React, { useEffect, useState } from 'react';
import client from '../lib/api/client';

// PUBLIC_INTERFACE
export default function HealthcheckBanner() {
  /**
   * Optionally checks backend health and shows a banner when unreachable.
   * Controlled by REACT_APP_HEALTHCHECK_PATH; if not set, tries '/health'.
   */
  const [status, setStatus] = useState('idle'); // idle | ok | error | skipped

  useEffect(() => {
    let ignore = false;
    const path = process.env.REACT_APP_HEALTHCHECK_PATH || '/health';
    async function check() {
      try {
        const res = await client.get(path, { timeoutMs: 2500 });
        if (!ignore) setStatus(res.ok ? 'ok' : 'error');
      } catch {
        if (!ignore) setStatus('error');
      }
    }
    // If explicitly set to 'none', skip checks
    if ((process.env.REACT_APP_HEALTHCHECK_PATH || '').toLowerCase() === 'none') {
      setStatus('skipped');
      return;
    }
    check();
    return () => { ignore = true; };
  }, []);

  if (status !== 'error') return null;

  return (
    <div role="status" className="banner error">
      The backend API is currently unreachable. Some data may not be available.
    </div>
  );
}
