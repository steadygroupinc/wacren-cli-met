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

  const focusAreas = [
    { title: "Data Readiness", desc: "Standardizing climate and meteorological data flows to ensure interoperability across R&E networks.", icon: "📊" },
    { title: "Regional Connectivity", desc: "Leveraging the WACREN backbone to provide ultra-high-speed access to Earth Observation datasets.", icon: "🌐" },
    { title: "Capacity Building", desc: "Training regional scientists in high-performance computing and open science practices.", icon: "🎓" },
    { title: "Infrastructure Setup", desc: "Deploying LoRaWAN weather stations and regional compute nodes for localized modelling.", icon: "🏗️" }
  ];

  return (
    <>
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main className="precursor-page" style={{ paddingTop: "100px", minHeight: "100vh", background: "var(--bg-white)" }}>
        {/* Hero Section */}
        <section style={{ padding: "80px 0", background: "linear-gradient(180deg, rgba(0,102,204,0.05) 0%, rgba(255,255,255,0) 100%)" }}>
          <div className="container">
            <div className="section-label reveal">Initiative Genesis</div>
            <h1 className="section-title reveal" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "24px" }}>
              The <span className="h1-accent">Precursor</span> Phase
            </h1>
            <p className="section-lead reveal" style={{ maxWidth: "800px" }}>
              Before full-scale deployment, the CLI-MET Precursor phase establishes the foundational digital architecture, data standards, and regional partnerships required for a resilient African climate ecosystem.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section style={{ padding: "100px 0" }}>
          <div className="container">
            <div className="precursor-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
              {focusAreas.map((area, idx) => (
                <div key={idx} className="precursor-card reveal" style={{ 
                  padding: "40px", 
                  backgroundColor: "white", 
                  borderRadius: "24px", 
                  boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.03)",
                  transition: "transform 0.3s ease"
                }}>
                  <div style={{ fontSize: "40px", marginBottom: "20px" }}>{area.icon}</div>
                  <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "var(--navy)" }}>{area.title}</h3>
                  <p style={{ color: "var(--text-gray)", lineHeight: "1.6" }}>{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline/Strategic Section */}
        <section style={{ padding: "100px 0", backgroundColor: "var(--navy)", color: "white", borderRadius: "60px 60px 0 0" }}>
          <div className="container">
            <div className="reveal" style={{ maxWidth: "700px" }}>
              <div className="section-label" style={{ color: "var(--gold)" }}>Strategic Roadmap</div>
              <h2 className="section-title" style={{ color: "white" }}>Building the Backbone</h2>
              <p style={{ opacity: "0.8", fontSize: "18px", marginBottom: "40px" }}>
                The Precursor phase is a multi-stakeholder collaboration designed to de-risk the regional implementation by validating connectivity protocols and data governance models.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {[
                  "Consolidating Regional Earth Observation feeds",
                  "Establishing FAIR data discovery portals",
                  "Piloting HPC-as-a-Service for climate scientists"
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ width: "24px", height: "24px", borderRadius: "12px", background: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer backToTopVisible={backToTopVisible} scrollToTop={scrollToTop} />
    </>
  );
}
