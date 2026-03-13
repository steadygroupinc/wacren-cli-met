export default function Alignment() {
  const alignments = [
    { title: "AfricaConnect4 / Global Gateway", desc: "EU-funded research and education network connectivity underpinning CLI-MET's regional backbone infrastructure.", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg> },
    { title: "UNESCO Open Science Recommendation", desc: "FAIR data principles and open collaboration frameworks applied to climate research across the WACREN region.", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg> },
    { title: "AU Agenda 2063 & Digital Transformation Strategy", desc: "Contributing to a digitally integrated, science-driven, and resilient Africa through regional climate data infrastructure.", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> },
    { title: "UN SDGs 2, 6, 7 & 13", desc: "Zero Hunger, Clean Water, Clean Energy, and Climate Action — all advanced by CLI-MET's integrated data and connectivity programme.", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> },
  ];

  return (
    <section id="alignment">
      <div className="container">
        <div className="section-label">Strategic Alignment</div>
        <h2 className="section-title">Anchored in Global &amp; Continental Frameworks</h2>
        <p className="section-lead">CLI-MET is designed from the ground up to align with, and accelerate progress toward, the most important international and African climate and development frameworks.</p>
        <div className="alignment-grid">
          {alignments.map((al, i) => (
            <div key={i} className="alignment-card">
              <div className="alignment-logo">{al.icon}</div>
              <div>
                <div className="alignment-name">{al.title}</div>
                <div className="alignment-desc">{al.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
