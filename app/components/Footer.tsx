"use client";

import Link from "next/link";

interface FooterProps {
  backToTopVisible: boolean;
  scrollToTop: (e: React.MouseEvent) => void;
}

export default function Footer({ backToTopVisible, scrollToTop }: FooterProps) {
  return (
    <>
      <footer id="contact">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="logo-block" style={{ marginBottom: "0" }}>
              <div className="logo-badge">CLI<br />MET</div>
              <div>
                <div className="logo-name">WACREN</div>
                <span className="logo-tag">CLI-MET Programme</span>
              </div>
            </div>
            <p className="footer-about">WACREN CLI-MET is the West and Central African Research and Education Network&apos;s regional programme for climate and meteorological infrastructure, building the digital backbone for a climate-resilient Africa.</p>

            <div className="footer-social">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/west-and-central-african-research-and-education-network/" target="_blank" rel="noopener" className="footer-social-link" aria-label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              {/* Bluesky */}
              <a href="https://bsky.app/profile/wacren.bsky.social" target="_blank" rel="noopener" className="footer-social-link" aria-label="Bluesky">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.204-.659-.299-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z" /></svg>
              </a>
              {/* Mastodon */}
              <a href="https://mastodon.social/@wacren" target="_blank" rel="noopener" className="footer-social-link" aria-label="Mastodon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.303 7.758.148 10.33.148 13.41c0 1.132.012 2.256.034 3.342.04 1.783.35 3.556 1.007 5.175 1.43 3.474 4.755 3.991 8.112 4.084 2.19.06 4.404-.315 6.422-1.038.58-.208 1.011-.74 1.011-1.353v-1.23c0-.61-.412-1.143-.994-1.334-.582-.192-1.206-.062-1.657.34-.51.455-1.32.762-2.186.912-2.006.348-4.23.246-6.17-.303-1.026-.29-2.057-.803-2.102-2.522-.01-.37-.013-.756-.013-1.154h15.486c.06.007.115.007.172.007.567 0 1.123-.456 1.123-1.02v-6.99c0-2.22-.05-3.664-.132-5.243zM18.81 14.88h-2.173v-4.102c0-.52-.138-.952-.414-1.294-.277-.342-.644-.512-1.133-.512-.49 0-.856.17-1.134.512-.277.342-.413.774-.413 1.294v1.84h-2.172v-1.84c0-.52-.137-.952-.414-1.294-.277-.342-.644-.512-1.133-.512-.49 0-.856.17-1.134.512-.277.342-.413.774-.413 1.294v4.102H6.918s0-5.465 0-6.423c0-.52.138-.952.414-1.294.277-.342.644-.512 1.133-.512.49 0 .856.17 1.134.512.277.342.413.774.413 1.294v1.23h2.172v-1.23c0-.52.137-.952.414-1.294.277-.342.644-.512 1.133-.512.49 0 .856.17 1.134.512.277.342.413.774.413 1.294v6.423h2.172s0-5.465 0-6.423c0-.52.138-.952.414-1.294.277-.342.644-.512 1.133-.512.49 0 .856.17 1.134.512.277.342.413.774.413 1.294v6.423z"/></svg>
              </a>
              {/* X / Twitter */}
              <a href="https://twitter.com/wacren" target="_blank" rel="noopener" className="footer-social-link" aria-label="X (Twitter)">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Programme</div>
            <ul className="footer-links">
              <li><Link href="/#home">CLI-MET</Link></li>
              <li><Link href="/#pillars">PILLARS</Link></li>
              <li><Link href="/community">COMMUNITY</Link></li>
              <li><Link href="/#flagship">ACTIVITIES</Link></li>
              <li><Link href="/impact">IMPACT</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Alignment</div>
            <ul className="footer-links">
              <li><Link href="/#alignment">Strategic Alignment</Link></li>
              <li><a href="#">AfricaConnect4</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Get Involved</div>
            <ul className="footer-links">
              <li><Link href="/contact">PARTNER WITH US</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© WACREN. West and Central African Research and Education Network, Climate &amp; Meteorology Programme (CLI-MET)</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <a 
        href="#" 
        className={`back-to-top ${backToTopVisible ? "visible" : ""}`} 
        id="backToTop" 
        aria-label="Back to top"
        onClick={scrollToTop}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </a>
    </>
  );
}
