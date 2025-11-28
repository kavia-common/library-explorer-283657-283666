import { useMemo } from 'react';

// PUBLIC_INTERFACE
export default function useFeatureFlags() {
  /**
   * Parses feature flags from REACT_APP_FEATURE_FLAGS.
   * Supports JSON string {"flag": true} or comma-separated "flag1,flag2"
   */
  const flags = useMemo(() => {
    const raw = process.env.REACT_APP_FEATURE_FLAGS || '';
    if (!raw) return {};
    try {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') return parsed;
    } catch {
      // fallback to comma separated
    }
    const obj = {};
    raw.split(',').map((s) => s.trim()).filter(Boolean).forEach((k) => { obj[k] = true; });
    return obj;
  }, []);
  return { flags };
}
