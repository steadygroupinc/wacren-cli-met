"use client";

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  navHidden: boolean;
}

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen, navHidden }: NavbarProps) {
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className={`header-outer ${navHidden ? "nav-hidden" : ""}`}>
        <header>
          {/* Logo */}
          <a href="#" className="logo-block">
            <div className="logo-badge">CLI<br />MET</div>
            <div className="logo-text-wrap">
              <span className="logo-text">WACREN</span>
              <span className="logo-sub">CLI-MET</span>
            </div>
          </a>

          {/* Desktop nav links */}
          <nav aria-label="Main navigation" className="nav-desktop">
            <ul className="nav-links">
              <li><a href="#why">Why It Matters</a></li>
              <li><a href="#pillars">Pillars</a></li>
              <li><a href="#flagship">Activities</a></li>
              <li><a href="#sdgs">SDGs &amp; AU Agenda</a></li>
              <li><a href="#impact">Impact</a></li>
              <li><a href="#who">Who Benefits</a></li>
            </ul>
          </nav>

          {/* Right side: CTA + hamburger */}
          <div className="nav-actions">
            <a href="#contact" className="nav-cta">Partner With Us</a>
            <button 
              className="nav-hamburger" 
              id="hamburger" 
              aria-label="Open menu" 
              aria-expanded={mobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile menu dropdown */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`} aria-hidden={!mobileMenuOpen}>
        <a href="#why" className="mobile-menu-link" onClick={closeMobileMenu}>Why It Matters</a>
        <div className="mobile-menu-divider"></div>
        <a href="#pillars" className="mobile-menu-link" onClick={closeMobileMenu}>Pillars</a>
        <div className="mobile-menu-divider"></div>
        <a href="#flagship" className="mobile-menu-link" onClick={closeMobileMenu}>Activities</a>
        <div className="mobile-menu-divider"></div>
        <a href="#sdgs" className="mobile-menu-link" onClick={closeMobileMenu}>SDGs &amp; AU Agenda</a>
        <div className="mobile-menu-divider"></div>
        <a href="#impact" className="mobile-menu-link" onClick={closeMobileMenu}>Impact</a>
        <div className="mobile-menu-divider"></div>
        <a href="#who" className="mobile-menu-link" onClick={closeMobileMenu}>Who Benefits</a>
        <a href="#contact" className="mobile-menu-cta" onClick={closeMobileMenu}>
          Partner With Us
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </a>
      </div>
    </>
  );
}
