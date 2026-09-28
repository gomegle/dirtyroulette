import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const DESTINATION = 'https://dirtyroulette.com';

function Brand() {
  return (
    <div className="brand" aria-label="Dirty Roulette">
      <span className="brand__dirty">Dirty</span>
      <span className="brand__roulette">Roulette</span>
    </div>
  );
}

function LandingPage() {
  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="brand-heading">
        <h1 id="brand-heading" className="sr-only">Dirty Roulette</h1>
        <Brand />
        <a className="start-button" href={DESTINATION} aria-label="Start Dirty Roulette">
          Start
        </a>
      </section>

      <div className="bottom-wave" aria-hidden="true">
        <svg className="bottom-wave__svg" viewBox="0 0 100 25" preserveAspectRatio="none" role="presentation">
          <path
            d="M0 0 C8 6.2 15 15.8 22 25 L64 25 C72 20.3 79 12.7 86 8.3 C91.8 4.7 97 3.3 100 4.1 L100 25 L0 25 Z"
          />
        </svg>
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
);
