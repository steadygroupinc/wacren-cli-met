export default function WhoBenefits() {
  const beneficiaries = [
    { title: "National Meteorological & Hydrological Services", desc: "Better data, better forecasts, better early warnings, with access to EUMETCast, LoRaWAN ground truth, and shared HPC resources.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" /></svg> },
    { title: "Regional Climate & Environment Agencies", desc: "Shared transboundary data infrastructure enables coherent regional monitoring of river basins, ecosystems, and cross-border climate hazards.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg> },
    { title: "Agriculture Research & Development Institutions", desc: "Agro-climate data pipelines support crop modelling, food system resilience research, and evidence-based advisory services for smallholders.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
    { title: "Universities & Research Institutions", desc: "Researchers gain access to open datasets, HPC facilities, and collaborative platforms, enabling globally competitive climate science from within the region.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg> },
    { title: "Policymakers in Agriculture, Environment & Energy", desc: "Decision-makers access coherent, evidence-based climate intelligence to underpin national adaptation plans, NDCs, and sectoral investment strategies.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg> },
    { title: "Regional & Global Climate Data Partners", desc: "Institutions like EUMETSAT, EUREF, ICTP, WASCAL, and AfriGEO gain a trusted regional partner for data distribution, ground-truth collection, and capacity development.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg> },
  ];

  return (
    <section id="who">
      <div className="container">
        <div className="section-label">Beneficiaries</div>
        <h2 className="section-title">Who Benefits</h2>
        <p className="section-lead">CLI-MET serves a broad ecosystem of institutions whose effectiveness depends on reliable, shared climate data and infrastructure.</p>
        <div className="who-grid">
          {beneficiaries.map((w, i) => (
            <div key={i} className="who-card">
              <div className="who-icon">{w.icon}</div>
              <div>
                <div className="who-title">{w.title}</div>
                <div className="who-text">{w.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
