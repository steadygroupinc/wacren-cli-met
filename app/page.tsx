"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyItMatters from "./components/WhyItMatters";
import Stakeholders from "./components/Stakeholders";
import Pillars from "./components/Pillars";
import Flagship from "./components/Flagship";
import SDGs from "./components/SDGs";
import Impact from "./components/Impact";
import WhoBenefits from "./components/WhoBenefits";
import Alignment from "./components/Alignment";
import Footer from "./components/Footer";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  useEffect(() => {
    // Scroll-reveal nav logic
    let lastScroll = 0;
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > 300 && y > lastScroll) {
        setNavHidden(true);
        setMobileMenuOpen(false);
      } else {
        setNavHidden(false);
      }

      if (y > 400) {
        setBackToTopVisible(true);
      } else {
        setBackToTopVisible(false);
      }
      lastScroll = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Intersection Observer for fade-up animations
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
      { threshold: 0.08 }
    );

    document
      .querySelectorAll(
        ".challenge-card, .pillar-card, .impact-card, .who-card, .alignment-card, .flagship-item, .stakeholder-card, .sdg-panel, .au-card, .stat-card"
      )
      .forEach((el) => {
        (el as HTMLElement).style.opacity = "0";
        (el as HTMLElement).style.transform = "translateY(20px)";
        (el as HTMLElement).style.transition = "opacity 0.55s ease, transform 0.55s ease";
        obs.observe(el);
      });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        navHidden={navHidden} 
      />
      
      <Hero />
      <WhyItMatters />
      <Stakeholders />
      <Pillars />
      <Flagship />
      <SDGs />
      <Impact />
      <WhoBenefits />
      <Alignment />
      
      <Footer 
        backToTopVisible={backToTopVisible} 
        scrollToTop={scrollToTop} 
      />
    </>
  );
}
