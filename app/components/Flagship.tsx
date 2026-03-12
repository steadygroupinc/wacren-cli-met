export default function Flagship() {
  const activities = [
    { num: "I", title: "EUMETCast Terrestrial Data Portal Deployment & Training", desc: "Deploying and operationalising terrestrial EUMETCast receiving stations at National Meteorological and Hydrological Services, and providing training to ensure effective use of satellite-derived Earth Observation data across the WACREN region.", tag: "Satellite · Data Access" },
    { num: "II", title: "Open Climate & Agriculture Data Design Sprints", desc: "Collaborative design sprints co-organised with EUMETSAT, WASCAL, ICTP, RUFORUM, and AfriGEO, bringing together meteorologists, agronomists, data scientists, and policymakers to develop open, actionable climate and agricultural data products for the region.", tag: "Agriculture · Open Data" },
    { num: "III", title: "Regional Climate Research Connectivity & HPC Integration", desc: "Connecting national and regional climate research centres to high-performance computing infrastructure through WACREN's high-speed backbone, enabling regional climate modelling, seasonal forecasting, and shared computing resources for complex climate simulations.", tag: "HPC · Connectivity" },
    { num: "IV", title: "IoT & WMO-Compliant Environmental Monitoring Station Network", desc: "Deployment of LoRaWAN-enabled, WMO-compliant automatic weather and environmental monitoring stations at WACREN-connected institutions, producing continuous, ground-truth observations that feed regional climate platforms.", tag: "IoT · Weather Stations" },
  ];

  return (
    <section id="flagship">
      <div className="container">
        <div className="section-label">Flagship Activities</div>
        <h2 className="section-title">Activities</h2>
        <p className="section-lead">Concrete, partner-supported activities that bring the CLI-MET vision to life, producing tangible outcomes for the region.</p>
        <div className="flagship-list">
          {activities.map((f, i) => (
            <div key={i} className="flagship-item">
              <div className="flagship-num">{f.num}</div>
              <div>
                <div className="flagship-title">{f.title}</div>
                <div className="flagship-desc">{f.desc}</div>
              </div>
              <div className="flagship-tag">{f.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
