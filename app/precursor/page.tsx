"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrecursorPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > 300 && y > lastScroll) {
        setMobileMenuOpen(false);
      }
      setBackToTopVisible(y > 400);
      lastScroll = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(30px)";
      (el as HTMLElement).style.transition = "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
      obs.observe(el);
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const precursorLinks = [
    {
      title: "WACREN Climate Programme: Catalysing Climate Solutions",
      description: "Initial description, justification and partnerships for the WACREN CLI-MET programme",
      url: "https://wacren.net/en/newsletter/wacren-climate-programme-catalysing-climate-solutions/",
    },
    {
      title: "WACREN-ICTP-OAU Collaboration at Ile-Ife Nigeria",
      description: "Collaborating to conduct real-time monitoring of surface water pollution using IoT-based sensors",
      url: "https://indico.wacren.net/event/207/contributions/1729/subcontributions/38/attachments/686/977/REGIONAL%20ACTIVITIES%20OF%20THE%20WACREN-ICTP%20PROGRAMME%20.pdf",
    },
    {
      title: "WACREN-ITCP Collaboration with GMet and GARNET",
      description: "A workshop as part of a developing program to boost the deployment of sensor networks and LoraWAN gateways in WACREN NRENs for climate and weather research support services",
      url: "https://indico.wacren.net/event/160/",
    },
    {
      title: "AfricaConnect Meeting and Workshop on IoT-Based Acquisition of Research Data for Scientific Computing",
      description: "An activity designed to introduce IT staff, engineers and scientists from Research and Education Networks (RENs) in the Africa to operating a network-wide service for the scientific application of Internet of Things (IoT) sensors and technology.",
      url: "https://indico.ictp.it/event/10787/overview",
    },
  ];

  return (
    <>
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main className="precursor-page" style={{ paddingTop: "100px", minHeight: "100vh", background: "var(--bg-white)" }}>
        {/* Content Section */}
        <section style={{ padding: "100px 0" }}>
          <div className="container">
            <div className="section-label" style={{ marginBottom: "12px" }}>Precursor Phase</div>
            <h2 className="section-title" style={{ marginBottom: "8px" }}>Growing Collaborations, Partnerships and Activities</h2>
            <p className="section-lead" style={{ width: "100%", margin: "0 0 30px 0", textAlign: "left" }}>
              The precursor phase established a foundation of national and regional collaborations and partnerships serving as building blocks and leading up to the current phase of the CLI-MET programme.
            </p>
            <div className="precursor-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(280px, 1fr))", gap: "32px" }}>
              {precursorLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="precursor-card reveal"
                  style={{
                    padding: "40px",
                    backgroundColor: "white",
                    borderRadius: "24px",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
                    border: "1px solid rgba(0,0,0,0.03)",
                    transition: "transform 0.3s ease",
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "var(--navy)" }}>{item.title}</h3>
                    <p style={{ color: "var(--text-gray)", lineHeight: "1.6" }}>{item.description}</p>
                  </div>
                  <div style={{ marginTop: "26px" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        fontWeight: 600,
                        color: "var(--teal)",
                        fontSize: "14px",
                      }}
                    >
                      Learn more
                      <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer backToTopVisible={backToTopVisible} scrollToTop={scrollToTop} />
    </>
  );
}
