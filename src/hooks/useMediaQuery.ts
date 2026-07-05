import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    let debounceTimer: ReturnType<typeof setTimeout>;
    const handler = (e: MediaQueryListEvent) => {
      // Debounce resize-triggered re-renders to ~300ms
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => setMatches(e.matches), 300);
    };
    media.addEventListener('change', handler);
    return () => {
      media.removeEventListener('change', handler);
      clearTimeout(debounceTimer);
    };
  }, [query]);

  return matches;
}

export function useIsMobile() {
  return useMediaQuery('(max-width: 768px)');
}

export function useIsTablet() {
  return useMediaQuery('(max-width: 1024px)');
}
