import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

function Root() {
  useEffect(() => {
    const path = window.location.pathname;
    if (path !== '/') {
      window.history.replaceState({}, '', '/');
    }
  }, []);

  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
