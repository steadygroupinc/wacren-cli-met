"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }: NavbarProps) {
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Helper to determine active state
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <div className="header-outer">
        <header>
          {/* Logo */}
          <Link href="/" className="logo-block">
            <div className="logo-badge">CLI<br />MET</div>
            <div className="logo-text-wrap">
              <span className="logo-name">WACREN</span>
              <span className="logo-tag">CLI-MET</span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <nav aria-label="Main navigation" className="nav-desktop">
            <ul className="nav-links">
               <li><Link href="/#home" className={isActive('/') ? 'active' : ''}>CLI-MET</Link></li>
              <li><Link href="/#pillars">PILLARS</Link></li>
              <li><Link href="/#flagship">ACTIVITIES</Link></li>
              
              <li className="nav-divider-v"></li>

               <li><Link href="/community" className={isActive('/community') ? 'active' : ''}>COMMUNITY</Link></li>
              <li><Link href="/impact" className={isActive('/impact') ? 'active' : ''}>IMPACT</Link></li>
              <li><Link href="/precursor" className={isActive('/precursor') ? 'active' : ''}>PRECURSOR</Link></li>
            </ul>
          </nav>

          <div className="nav-actions">
            <Link href="/contact" className="nav-cta">PARTNER WITH US</Link>
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
        <div className="mobile-menu-links">
          <Link href="/#home" className={`mobile-menu-link ${isActive('/') ? 'active' : ''}`} onClick={closeMobileMenu}>CLI-MET</Link>
          <Link href="/#pillars" className="mobile-menu-link" onClick={closeMobileMenu}>PILLARS</Link>
          <Link href="/#flagship" className="mobile-menu-link" onClick={closeMobileMenu}>ACTIVITIES</Link>
          <div className="mobile-menu-divider"></div>
          <Link href="/community" className={`mobile-menu-link ${isActive('/community') ? 'active' : ''}`} onClick={closeMobileMenu}>COMMUNITY</Link>
          <Link href="/impact" className={`mobile-menu-link ${isActive('/impact') ? 'active' : ''}`} onClick={closeMobileMenu}>IMPACT</Link>
          <Link href="/precursor" className={`mobile-menu-link ${isActive('/precursor') ? 'active' : ''}`} onClick={closeMobileMenu}>PRECURSOR</Link>
        </div>
        <div className="mobile-menu-footer">
          <Link href="/contact" className="mobile-menu-cta" onClick={closeMobileMenu}>
            Partner With Us
          </Link>
        </div>
      </div>
    </>
  );
}
