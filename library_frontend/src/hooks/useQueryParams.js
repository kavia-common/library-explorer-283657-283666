import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function useQueryParams() {
  /** Returns an object of current URL query params. */
  const { search } = useLocation();
  return useMemo(() => {
    const params = new URLSearchParams(search);
    const obj = {};
    params.forEach((v, k) => { obj[k] = v; });
    return obj;
  }, [search]);
}
