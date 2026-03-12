export default function SDGs() {
  const sdgs = [
    { badge: "SDG 2", color: "#D97706", text: "Zero Hunger. Real-time agro-meteorological data from LoRaWAN weather stations and EUMETCast feeds directly supports early warning of drought, flood risk, and crop stress, enabling timely interventions that protect food security." },
    { badge: "SDG 6", color: "#2563EB", text: "Clean Water & Sanitation. Hydrological monitoring stations and cross-border data sharing enable better river basin management, groundwater monitoring, and early warning of flood events." },
    { badge: "SDG 7", color: "#D97706", text: "Affordable & Clean Energy. High-resolution climate and solar radiation data support renewable energy resource assessment, hydropower planning, and climate-smart energy infrastructure investment." },
    { badge: "SDG 13", color: "#16A34A", text: "Climate Action. CLI-MET is the core infrastructure for regional climate action, enabling National Adaptation Plans, strengthening NDCs, and giving African scientists the data and tools to drive evidence-based climate policy." },
    { badge: "SDG 17", color: "#7C3AED", text: "Partnerships for the Goals. CLI-MET operationalises multi-stakeholder partnerships between universities, regional bodies, EUMETSAT, WASCAL, ICTP, RUFORUM, and AfriGEO, pooling expertise to achieve shared climate outcomes." },
  ];

  const auItems = [
    { badge: "DTS", text: "AU Digital Transformation Strategy (2020–2030). CLI-MET is a direct embodiment of the AU DTS goal to deploy continental digital public infrastructure for science and development." },
    { badge: "CAADP", text: "Comprehensive Africa Agriculture Development Programme. By delivering localised, timely agro-climate data to agricultural research institutions, CLI-MET directly underpins CAADP's goal of agriculture-led growth and food security." },
    { badge: "PACJA", text: "Pan-African Climate Justice Alliance. CLI-MET strengthens Africa's scientific capacity and data sovereignty, ensuring the continent speaks from evidence in global climate negotiations." },
  ];

  const partners = [
    { title: "AfricaConnect4 / EU Global Gateway", text: "CLI-MET is anchored within the AfricaConnect4 framework, leveraging EU Global Gateway investment to build the research connectivity backbone.", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
    { title: "UNESCO Open Science Recommendation", text: "CLI-MET implements UNESCO's Open Science principles across climate research, making African climate knowledge globally accessible and reusable.", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg> },
    { title: "WMO Global Climate Observing System", text: "WMO-compliant weather stations and data standards position CLI-MET as a regional contributor to the global climate observation network.", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" /></svg> },
  ];

  return (
    <section id="sdgs">
      <div className="sdgs-bg-pattern"></div>
      <div className="container sdgs-inner">
        <div className="section-label sdgs-section-label">Global &amp; Continental Alignment</div>
        <h2 className="section-title sdgs-title">Meeting the SDGs &amp; Africa's Climate Commitments</h2>
        <p className="section-lead sdgs-lead">WACREN CLI-MET is foundational infrastructure that accelerates progress on the region's most critical global and continental obligations.</p>

        <div className="sdgs-layout">
          <div className="sdg-panel">
            <div className="sdg-panel-header">
              <div className="sdg-panel-icon" style={{ background: "var(--navy)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
              </div>
              <div>
                <div className="sdg-panel-title">UN Sustainable Development Goals</div>
                <div className="sdg-panel-subtitle">SDGs 2 · 6 · 7 · 13 · 17</div>
              </div>
            </div>
            <div className="sdg-items">
              {sdgs.map((s, i) => (
                <div key={i} className="sdg-item">
                  <div className="sdg-badge" style={{ background: s.color, color: "white" }}>{s.badge}</div>
                  <div className="sdg-item-text"><strong>{s.text.split(".")[0]}.</strong>{s.text.split(".").slice(1).join(".")}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="sdg-panel">
              <div className="sdg-panel-header">
                <div className="sdg-panel-icon" style={{ background: "var(--gold)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                </div>
                <div>
                  <div className="sdg-panel-title">AU Agenda 2063 &amp; Climate Frameworks</div>
                  <div className="sdg-panel-subtitle">Digital · Climate · Science &amp; Technology</div>
                </div>
              </div>
              <div className="sdg-items">
                {auItems.map((s, i) => (
                  <div key={i} className="sdg-item">
                    <div className="sdg-badge" style={{ background: "rgba(230, 126, 34, 0.15)", color: "var(--gold)" }}>{s.badge}</div>
                    <div className="sdg-item-text"><strong>{s.text.split(".")[0]}.</strong>{s.text.split(".").slice(1).join(".")}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="au-grid">
              {partners.map((a, i) => (
                <div key={i} className="au-card">
                  <div className="au-card-icon">{a.icon}</div>
                  <div className="au-card-title">{a.title}</div>
                  <div className="au-card-text">{a.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
