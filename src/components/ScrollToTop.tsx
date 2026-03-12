import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToHashTarget } from '../lib/scroll';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      scrollToHashTarget(hash);
      return;
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
};
