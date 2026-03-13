"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [backToTopVisible, setBackToTopVisible] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSubmitStatus("success");
      setFormState({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      
      <main className="contact-page">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column: Info */}
            <div className="contact-info">
              <div className="contact-info-header">
                <h1 className="contact-title">Get in touch</h1>
                <p className="contact-subtitle">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <h3>Accra, Ghana</h3>
                  <p>West and Central African Research and Education Network</p>
                  <p><span className="label">Address:</span> <a href="https://www.google.com/maps?sca_esv=df890eccffbfa804&aep=1&prmd=ivns&sxsrf=ANbL-n6VizXt2phx2HBO7wpgIw0HEcgfPA:1773331859691&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3jljrY5CkLlk8Dq3IvwBz-R5R-93bnJN-gfJetFY0A5M6NANLPFEQzj1dcFq3LKKBXHVoOgyWf6JqUwGOohIri1ZbKlIdZIYLCoWCcgdvvLUCGHg9yRK_YDxJ9L6Z2ZB_2aQaHCOnhTyYCnPFqsoOfSnoVwLX5ZQJDHa7zyZ3qmdVvO99Q&biw=1536&bih=742&dpr=1.25&um=1&ie=UTF-8&fb=1&gl=gh&sa=X&geocode=KZfUp8nwm98PMY5U-qS4GZJg&daddr=VCG+Office+Complex,+IPS+Rd,+Accra" target="_blank" rel="noopener" style={{ color: 'inherit', textDecoration: 'underline' }}>VCG Office Complex, IPS Rd, Accra</a></p>
                  <p>
                    <span className="label">Phone:</span>{" "}
                    {showPhone ? (
                      <a href={`tel:${['030', '294', '2873'].join('')}`} style={{ color: 'var(--navy)', fontWeight: '600' }}>
                        {['030', '294', '2873'].join(' ')}
                      </a>
                    ) : (
                      <button 
                        onClick={() => setShowPhone(true)} 
                        style={{ border: 'none', background: 'rgba(0,102,204,0.1)', color: 'var(--navy)', padding: '2px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}
                      >
                        Click to view phone
                      </button>
                    )}
                  </p>
                  <p>
                    <span className="label">Email:</span>{" "}
                    {showEmail ? (
                      <a href={`mailto:${['climet', 'wacren.net'].join('@')}`} style={{ color: 'var(--navy)', fontWeight: '600' }}>
                        {['climet', 'wacren.net'].join('@')}
                      </a>
                    ) : (
                      <button 
                        onClick={() => setShowEmail(true)} 
                        style={{ border: 'none', background: 'rgba(0,102,204,0.1)', color: 'var(--navy)', padding: '2px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}
                      >
                        Click to reveal email
                      </button>
                    )}
                  </p>
                </div>

              </div>
            </div>

            {/* Right Column: Form */}
            <div className="contact-form-card">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Jane Smith" 
                    className="form-input"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="jane@company.com" 
                    className="form-input"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="+1 (555) 555-1234" 
                    className="form-input"
                    value={formState.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    placeholder="Your Company" 
                    className="form-input"
                    value={formState.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '32px' }}>
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell us about your project or how we can help you..." 
                    className="form-input form-textarea"
                    value={formState.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitStatus === "success" && (
                  <p style={{ marginTop: "16px", color: "var(--green)", fontWeight: "600", fontSize: "14px" }}>
                    Thank you! Your message has been sent successfully.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p style={{ marginTop: "16px", color: "#DC2626", fontWeight: "600", fontSize: "14px" }}>
                    Oops! Something went wrong. Please try again or contact us directly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer 
        backToTopVisible={backToTopVisible} 
        scrollToTop={scrollToTop} 
      />
    </>
  );
}
