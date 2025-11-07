import { useEffect } from 'react';

export function NotFound() {
  useEffect(() => {
    window.location.href = '/';
  }, []);

  return null;
}
