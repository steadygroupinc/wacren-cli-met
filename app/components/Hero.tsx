import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero" id="home">
      <div className="hero-canvas"></div>
      <div className="hero-grid"></div>
      <div className="hero-noise"></div>
      <div className="hero-content">
        <div>
          <div className="hero-eyebrow fade-up">
            <span className="hero-eyebrow-text">Regional Digital Climate Infrastructure</span>
          </div>
          <h1 className="fade-up delay-1">
            Building a <span className="h1-accent">Connected</span>, <span className="h1-accent">Open</span>, and <span className="h1-accent">Resilient</span> Climate Ecosystem for West &amp; Central Africa
          </h1>
          <p className="hero-desc fade-up delay-2">
            WACREN CLI-MET leverages advanced digital connectivity, open science, and trusted research infrastructure to strengthen climate research, climate-informed decision-making, and sustainable development across the region — positioning Research and Education Networks as critical enablers of climate resilience.
          </p>
          <div className="hero-actions fade-up delay-3">
            <Link href="/#pillars" className="btn btn-primary">Explore the Programme</Link>
            <Link href="/contact" className="btn btn-ghost">
              PARTNER WITH US
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>


      </div>
    </div>
  );
}
