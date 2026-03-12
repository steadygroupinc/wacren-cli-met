export default function Stakeholders() {
  const stakeholders = [
    { title: "Meteorological & Hydrological Services", desc: "Gain high-speed access to EUMETCast data, real-time ground observations via LoRaWAN, and shared HPC resources to improve forecast accuracy and early-warning capacity.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" /></svg> },
    { title: "Climate Research Institutions", desc: "Access FAIR-aligned climate datasets, collaborate across borders on shared platforms, and connect to regional HPC for climate modelling and reproducible research.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2" /></svg> },
    { title: "Agriculture & Food Security Agencies", desc: "Receive localised, real-time agro-meteorological data and open climate intelligence to guide food system planning, drought response, and crop advisory services.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> },
    { title: "Climate Policy Decision-Makers", desc: "Access a coherent, evidence base for national adaptation plans, NDC implementation, and climate budget decisions, backed by regional open science infrastructure.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg> },
    { title: "Development Partners & Funders", desc: "Invest in a platform-level intervention with measurable regional reach, reducing fragmentation and maximising the impact of climate resilience financing across multiple countries.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
    { title: "Universities & Training Institutions", desc: "Connect students and early-career scientists to hands-on training in climate data, LoRaWAN sensors, HPC modelling, and open science practices aligned to real policy needs.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg> },
    { title: "Regional Bodies & Economic Commissions", desc: "Build shared transboundary climate intelligence infrastructure — from river basin monitoring to regional early-warning — that no single country can build alone.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg> },
    { title: "Global Climate Data Partners", desc: "Gain ground-truth data from underserved regions and extend the reach of global climate datasets, improving global model accuracy while building local data ownership.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg> },
  ];

  return (
    <div className="stakeholder-strip">
      <div className="container">
        <div className="section-label" style={{ color: "var(--teal2)" }}>
          <span style={{ width: "28px", height: "1px", background: "var(--teal2)", display: "inline-block", flexShrink: "0" }}></span>
          Who Needs This
        </div>
        <h2 className="section-title" style={{ color: "white", maxWidth: "640px", marginTop: "12px" }}>Built for the Institutions That Can't Afford to Wait</h2>
        <div className="stakeholder-grid">
          {stakeholders.map((s, i) => (
            <div key={i} className="stakeholder-card">
              <div className="stakeholder-icon">{s.icon}</div>
              <div className="stakeholder-title">{s.title}</div>
              <div className="stakeholder-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
