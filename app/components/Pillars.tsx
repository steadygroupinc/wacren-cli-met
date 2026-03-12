export default function Pillars() {
  const pillars = [
    {
      num: "01",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>,
      title: "Regional Climate Data Infrastructure",
      points: [
        "Federated access to EUMETCast, Earth Observation, and national meteorological datasets",
        "FAIR-aligned data services (Findable, Accessible, Interoperable, Reusable)",
        "Integration with WACREN-connected data centres, clouds, and HPC resources",
      ],
      className: "p1",
    },
    {
      num: "02",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>,
      title: "Connectivity for Climate Science",
      points: [
        "High-speed backbone interconnecting NRENs and research institutions",
        "Secure cross-border data flows for climate modelling and early-warning systems",
        "Redundant, resilient Points of Presence for critical climate services",
      ],
      className: "p2",
    },
    {
      num: "03",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" /><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" /><circle cx="12" cy="12" r="2" /><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" /><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" /></svg>,
      title: "Field Sensors & LoRaWAN Networks",
      points: [
        "LoRaWAN gateways integrated into NREN and campus networks",
        "WMO-compliant automatic weather stations for real-time observation",
        "Low-power sensors for rainfall, temperature, air & water quality",
        "Solar-powered, resilient deployments for remote locations",
      ],
      className: "p3",
    },
    {
      num: "04",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
      title: "Open Science & Collaboration",
      points: [
        "Implementation of UNESCO Open Science principles for climate research",
        "Shared platforms for data publishing, repositories, and collaboration",
        "Open tools, open standards, and reproducible climate research workflows",
      ],
      className: "p4",
    },
    {
      num: "05",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>,
      title: "Capacity Building & Skills",
      points: [
        "Training in climate data analysis, HPC, and open data practices",
        "Hands-on LoRaWAN deployment, sensor calibration, and data stewardship",
        "Support for early-career researchers and women in climate STEM",
        "Design sprints linked to real policy and sector needs",
      ],
      className: "p5",
    },
  ];

  return (
    <section id="pillars">
      <div className="container">
        <div className="section-label">Programme Pillars</div>
        <h2 className="section-title">Five Interconnected Pillars</h2>
        <p className="section-lead">Each pillar of WACREN CLI-MET reinforces the others, creating a coherent system where connectivity, data, tools, science, and skills work together.</p>
        <div className="pillars-grid">
          {pillars.map((p, i) => (
            <div key={i} className={`pillar-card ${p.className}`}>
              <div className="pillar-num">{p.num}</div>
              <div className="pillar-icon">{p.icon}</div>
              <div className="pillar-title">{p.title}</div>
              <ul className="pillar-points">
                {p.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
