export default function WhyItMatters() {
  return (
    <section id="why">
      <div className="container">
        <div className="why-content">
          <h2 className="section-title">WACREN CLI-MET</h2>
          
          <div className="rationale-section">
            <p className="why-text">
              West and Central Africa is among the world's most climate-vulnerable regions. Escalating floods in the Sahel, prolonged droughts across the Lake Chad Basin, sea-level rise threatening coastal cities, and erratic rainfall devastating smallholder agriculture. These are not future risks. They are today's realities, affecting hundreds of millions of people.
            </p>
            <p className="why-text">
              Climate challenges in West and Central Africa are inherently regional, yet the data, tools, and infrastructure needed to address them remain dangerously fragmented.
            </p>
            <div className="rationale-grid">
              <p className="why-text">
                National meteorological and hydrological services across the region are often under-resourced, working with outdated equipment and limited access to Earth Observation data. Climate research institutions and universities lack the computing infrastructure to run regional climate models. Agricultural agencies advising millions of smallholder farmers have no reliable pipeline of timely, localised agro-meteorological data.
              </p>
              <p className="why-text">
                WACREN CLI-MET exists to close this gap by making high-quality, timely climate data accessible, shareable, and actionable across the region through a trusted, African-led research and education network infrastructure.
              </p>
            </div>
          </div>

          <div className="why-problem-section">
            <div className="section-label" style={{ marginBottom: "24px" }}>The Problem</div>
            <div className="challenge-cards">
              <div className="challenge-card">
                <div className="challenge-icon red">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>
                </div>
                <div>
                  <div className="challenge-title">Fragmented Earth Observation Access</div>
                  <div className="challenge-desc">National meteorological agencies lack reliable, high-speed access to EUMETCast satellite data, global reanalysis products, and real-time sensor networks, leaving critical forecasting gaps.</div>
                </div>
              </div>
              <div className="challenge-card">
                <div className="challenge-icon orange">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
                </div>
                <div>
                  <div className="challenge-title">Siloed National Systems</div>
                  <div className="challenge-desc">Climate data remains locked in national silos with weak cross-border data-sharing protocols, preventing the regional-scale analysis that transboundary climate hazards demand.</div>
                </div>
              </div>
              <div className="challenge-card">
                <div className="challenge-icon yellow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                </div>
                <div>
                  <div className="challenge-title">Insufficient Compute &amp; Skills</div>
                  <div className="challenge-desc">Without access to HPC infrastructure and climate modelling platforms, regional scientists cannot generate the climate projections and scenario analyses essential for evidence-based policy.</div>
                </div>
              </div>
              <div className="challenge-card">
                <div className="challenge-icon blue">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22V12" />
                    <path d="M12 12C12 7 8 4 3 3c0 5 3 9 9 9" />
                    <path d="M12 12c0-5 4-8 9-9-1 5-4 9-9 9" />
                  </svg>
                </div>
                <div>
                  <div className="challenge-title">Data Poverty in Agriculture</div>
                  <div className="challenge-desc">Climate-dependent sectors, particularly food and water systems, lack the localised, real-time environmental data needed to protect livelihoods and guide resource management decisions.</div>
                </div>
              </div>
            </div>

            <div className="opportunity-box">
              <div className="opportunity-label">The Opportunity</div>
              <p className="opportunity-quote">Connectivity is the multiplier that turns climate data into climate action.</p>
              <p className="opportunity-text">WACREN's existing regional backbone is uniquely positioned to become the climate data highway that West and Central Africa urgently needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
