import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const navigation = [
  { href: "#why", label: "Why It Matters" },
  { href: "#pillars", label: "Pillars" },
  { href: "#flagship", label: "Activities" },
  { href: "#sdgs", label: "SDGs & AU Agenda" },
  { href: "#impact", label: "Impact" },
  { href: "#who", label: "Who Benefits" },
];

const heroStats = [
  {
    value: "16+",
    label:
      "West and Central African countries connected through WACREN's regional backbone",
  },
  {
    value: "5",
    label:
      "Integrated programme pillars anchoring the regional climate-data agenda",
  },
  {
    value: "SDG 2, 6, 7, 13",
    label:
      "UN Sustainable Development Goals directly advanced by the CLI-MET programme",
  },
];

const challenges = [
  {
    icon: "📡",
    title: "Fragmented Earth Observation Access",
    description:
      "National meteorological agencies lack reliable, high-speed access to EUMETCast satellite data, global reanalysis products, and real-time sensor networks, leaving critical forecasting gaps.",
    tone: "bg-red-50",
  },
  {
    icon: "🧱",
    title: "Siloed National Systems",
    description:
      "Climate data remains locked in national silos with weak cross-border data-sharing protocols, preventing the regional-scale analysis that transboundary climate hazards demand.",
    tone: "bg-orange-50",
  },
  {
    icon: "💻",
    title: "Insufficient Compute & Skills",
    description:
      "Without access to HPC infrastructure and climate modelling platforms, regional scientists cannot generate the climate projections and scenario analyses essential for evidence-based policy.",
    tone: "bg-amber-50",
  },
  {
    icon: "🌾",
    title: "Data Poverty in Agriculture",
    description:
      "Climate-dependent sectors, particularly food and water systems, lack the localised, real-time environmental data needed to protect livelihoods and guide resource management decisions.",
    tone: "bg-fuchsia-50",
  },
];

const stakeholders = [
  {
    icon: "🌦️",
    title: "Meteorological & Hydrological Services",
    description:
      "Gain high-speed access to EUMETCast data, real-time ground observations via LoRaWAN, and shared HPC resources to improve forecast accuracy and early-warning capacity.",
  },
  {
    icon: "🔬",
    title: "Climate Research Institutions",
    description:
      "Access FAIR-aligned climate datasets, collaborate across borders on shared platforms, and connect to regional HPC for climate modelling and reproducible research.",
  },
  {
    icon: "🌱",
    title: "Agriculture & Food Security Agencies",
    description:
      "Receive localised, real-time agro-meteorological data and open climate intelligence to guide food system planning, drought response, and crop advisory services.",
  },
  {
    icon: "💼",
    title: "Climate Policy Decision-Makers",
    description:
      "Access a coherent evidence base for national adaptation plans, NDC implementation, and climate budget decisions backed by regional open science infrastructure.",
  },
  {
    icon: "🤝",
    title: "Development Partners & Funders",
    description:
      "Invest in a platform-level intervention with measurable regional reach, reducing fragmentation and maximising the impact of climate resilience financing.",
  },
  {
    icon: "🎓",
    title: "Universities & Training Institutions",
    description:
      "Connect students and early-career scientists to hands-on training in climate data, LoRaWAN sensors, HPC modelling, and open science practices.",
  },
  {
    icon: "🌍",
    title: "Regional Bodies & Economic Commissions",
    description:
      "Build shared transboundary climate intelligence infrastructure, from river basin monitoring to regional early warning, that no single country can build alone.",
  },
  {
    icon: "📊",
    title: "Global Climate Data Partners",
    description:
      "Gain ground-truth data from underserved regions and extend the reach of global climate datasets while building local data ownership.",
  },
];

const pillars = [
  {
    number: "01",
    icon: "🛰️",
    title: "Regional Climate Data Infrastructure",
    color: "before:bg-teal",
    points: [
      "Federated access to EUMETCast, Earth Observation, and national meteorological datasets",
      "FAIR-aligned data services for climate knowledge exchange",
      "Integration with WACREN-connected data centres, clouds, and HPC resources",
    ],
  },
  {
    number: "02",
    icon: "🔗",
    title: "Connectivity for Climate Science",
    color: "before:bg-green",
    points: [
      "High-speed backbone interconnecting NRENs and research institutions",
      "Secure cross-border data flows for climate modelling and early-warning systems",
      "Redundant, resilient points of presence for critical climate services",
    ],
  },
  {
    number: "03",
    icon: "📡",
    title: "Field Sensors & LoRaWAN Networks",
    color: "before:bg-gold",
    points: [
      "LoRaWAN gateways integrated into NREN and campus networks",
      "WMO-compliant automatic weather stations for real-time observation",
      "Low-power sensors for rainfall, temperature, air and water quality",
      "Solar-powered, resilient deployments for remote locations",
    ],
  },
  {
    number: "04",
    icon: "🔬",
    title: "Open Science & Collaboration",
    color: "before:bg-violet-600",
    points: [
      "Implementation of UNESCO Open Science principles for climate research",
      "Shared platforms for data publishing, repositories, and collaboration",
      "Open tools, open standards, and reproducible research workflows",
    ],
  },
  {
    number: "05",
    icon: "🎓",
    title: "Capacity Building & Skills",
    color: "before:bg-pink-600",
    points: [
      "Training in climate data analysis, HPC, and open data practices",
      "Hands-on LoRaWAN deployment, sensor calibration, and data stewardship",
      "Support for early-career researchers and women in climate STEM",
      "Design sprints linked to real policy and sector needs",
    ],
  },
];

const flagshipActivities = [
  {
    number: "I",
    title: "EUMETCast Terrestrial Data Portal Deployment & Training",
    description:
      "Deploying and operationalising terrestrial EUMETCast receiving stations at National Meteorological and Hydrological Services, with training to ensure effective use of satellite-derived Earth Observation data across the WACREN region.",
    tag: "Satellite · Data Access",
  },
  {
    number: "II",
    title: "Open Climate & Agriculture Data Design Sprints",
    description:
      "Collaborative design sprints with EUMETSAT, WASCAL, ICTP, RUFORUM, and AfriGEO to develop open, actionable climate and agricultural data products for the region.",
    tag: "Agriculture · Open Data",
  },
  {
    number: "III",
    title: "Regional Climate Research Connectivity & HPC Integration",
    description:
      "Connecting national and regional climate research centres to high-performance computing infrastructure through WACREN's backbone for regional modelling, seasonal forecasting, and shared simulation resources.",
    tag: "HPC · Connectivity",
  },
  {
    number: "IV",
    title: "IoT & WMO-Compliant Environmental Monitoring Station Network",
    description:
      "Deployment of LoRaWAN-enabled environmental monitoring stations at WACREN-connected institutions, producing continuous observations for rainfall, temperature, humidity, air quality, and hydrological parameters.",
    tag: "IoT · Weather Stations",
  },
];

const sdgs = [
  {
    badge: "SDG 2",
    color: "bg-amber-600 text-white",
    title: "Zero Hunger.",
    text: "Real-time agro-meteorological data from LoRaWAN weather stations and EUMETCast feeds supports early warning of drought, flood risk, and crop stress for climate-vulnerable smallholder farmers.",
  },
  {
    badge: "SDG 6",
    color: "bg-blue-600 text-white",
    title: "Clean Water & Sanitation.",
    text: "Hydrological monitoring stations and cross-border data sharing enable better river basin management, groundwater monitoring, and flood early warning.",
  },
  {
    badge: "SDG 7",
    color: "bg-orange-600 text-white",
    title: "Affordable & Clean Energy.",
    text: "High-resolution climate and solar radiation data support renewable energy assessment, hydropower planning, and climate-smart infrastructure investment.",
  },
  {
    badge: "SDG 13",
    color: "bg-green-600 text-white",
    title: "Climate Action.",
    text: "CLI-MET enables National Adaptation Plans, strengthens NDCs, and gives African scientists and policymakers the data and tools to drive evidence-based climate policy.",
  },
  {
    badge: "SDG 17",
    color: "bg-violet-600 text-white",
    title: "Partnerships for the Goals.",
    text: "CLI-MET operationalises multi-stakeholder partnerships between universities, regional bodies, and international climate institutions to achieve shared outcomes.",
  },
];

const auFrameworks = [
  {
    badge: "DTS",
    title: "AU Digital Transformation Strategy (2020-2030).",
    text: "CLI-MET extends digital public infrastructure into climate, environment, and agriculture as critical data sectors.",
  },
  {
    badge: "CAADP",
    title: "Comprehensive Africa Agriculture Development Programme.",
    text: "Localised, timely agro-climate data supports agriculture-led growth and food security.",
  },
  {
    badge: "PACJA",
    title: "Pan-African Climate Justice Alliance.",
    text: "CLI-MET strengthens Africa's scientific capacity and data sovereignty in global climate negotiations.",
  },
];

const auCards = [
  {
    icon: "🤝",
    title: "AfricaConnect4 / EU Global Gateway",
    text: "CLI-MET is anchored within the AfricaConnect4 framework, leveraging investment to build the research connectivity backbone that carries climate data across the region.",
  },
  {
    icon: "📖",
    title: "UNESCO Open Science Recommendation",
    text: "CLI-MET implements UNESCO open science principles across climate research, making African climate knowledge more accessible and reusable.",
  },
  {
    icon: "🌤️",
    title: "WMO Global Climate Observing System",
    text: "WMO-compliant weather stations and data ingestion standards position CLI-MET as a contributor to the global climate observation network.",
  },
];

const impactCards = [
  {
    icon: "⚡",
    title: "Faster, More Reliable Climate Data Access",
    text: "Researchers, meteorologists, and policymakers gain high-speed access to satellite, in-situ, and modelled climate data, cutting the time from collection to decision-making.",
  },
  {
    icon: "🌾",
    title: "Improved Climate-Smart Agriculture",
    text: "Localised agro-meteorological intelligence supports better seasonal planning, pest and disease early warning, and resilient crop management.",
  },
  {
    icon: "🔔",
    title: "Stronger Disaster Preparedness",
    text: "Enhanced regional early-warning infrastructure reduces death tolls and economic losses from floods, droughts, and extreme weather events.",
  },
  {
    icon: "🌍",
    title: "An African-Led Climate Data Ecosystem",
    text: "A sustainable, open, and African-owned climate data platform reduces dependence on external systems while building lasting institutional capacity.",
  },
];

const beneficiaries = [
  {
    icon: "🌦️",
    title: "National Meteorological & Hydrological Services",
    text: "Better data, better forecasts, and better early warnings with access to EUMETCast, LoRaWAN ground truth, and shared HPC resources.",
  },
  {
    icon: "🏛️",
    title: "Regional Climate & Environment Agencies",
    text: "Shared transboundary data infrastructure enables coherent regional monitoring of river basins, ecosystems, and cross-border climate hazards.",
  },
  {
    icon: "🌱",
    title: "Agriculture Research & Development Institutions",
    text: "Agro-climate data pipelines support crop modelling, food system resilience research, and evidence-based advisory services for smallholders.",
  },
  {
    icon: "🏫",
    title: "Universities & Research Institutions",
    text: "Researchers gain access to open datasets, HPC facilities, and collaborative platforms that enable globally competitive climate science.",
  },
  {
    icon: "📋",
    title: "Policymakers in Agriculture, Environment & Energy",
    text: "Decision-makers access evidence-based climate intelligence to underpin adaptation plans, NDCs, and sectoral investment strategies.",
  },
  {
    icon: "🌐",
    title: "Regional & Global Climate Data Partners",
    text: "Institutions like EUMETSAT, ICTP, WASCAL, and AfriGEO gain a trusted regional partner for distribution, ground-truth collection, and capacity development.",
  },
];

const alignmentCards = [
  {
    icon: "🌐",
    title: "AfricaConnect4 / Global Gateway",
    text: "EU-funded research and education network connectivity underpinning CLI-MET's regional backbone infrastructure.",
  },
  {
    icon: "📖",
    title: "UNESCO Open Science Recommendation",
    text: "FAIR data principles and open collaboration frameworks applied to climate research across the WACREN region.",
  },
  {
    icon: "🌍",
    title: "AU Agenda 2063 & Digital Transformation Strategy",
    text: "Contributing to a digitally integrated, science-driven, and resilient Africa through regional climate data infrastructure.",
  },
  {
    icon: "🎯",
    title: "UN SDGs 2, 6, 7 & 13",
    text: "Zero Hunger, Clean Water, Clean Energy, and Climate Action advanced by CLI-MET's integrated data and connectivity programme.",
  },
  {
    icon: "☁️",
    title: "WMO Global Climate Observing System",
    text: "WMO-compliant weather stations and data standards connect the region to the global climate observation infrastructure.",
  },
];

const footerGroups = [
  {
    title: "Programme",
    links: [
      { href: "#why", label: "Why It Matters" },
      { href: "#pillars", label: "Programme Pillars" },
      { href: "#flagship", label: "Flagship Activities" },
      { href: "#impact", label: "Impact" },
      { href: "#who", label: "Who Benefits" },
    ],
  },
  {
    title: "Alignment",
    links: [
      { href: "#sdgs", label: "SDGs & AU Agenda" },
      { href: "#alignment", label: "Strategic Partners" },
      { href: "#", label: "AfricaConnect4" },
      { href: "#", label: "UNESCO Open Science" },
      { href: "#", label: "AU Agenda 2063" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { href: "#contact", label: "Partner With Us" },
      { href: "#flagship", label: "Join a Design Sprint" },
      { href: "#who", label: "Training & Capacity Building" },
      { href: "#contact", label: "Contact WACREN" },
      { href: "#contact", label: "Press & Media" },
    ],
  },
];

export const metadata: Metadata = {
  title: "Regional Digital Infrastructure for Climate Resilience",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

function SectionHeader({
  label,
  title,
  lead,
  light = false,
}: {
  label: string;
  title: string;
  lead?: string;
  light?: boolean;
}) {
  return (
    <div>
      <div className={`section-label ${light ? "text-gold2 before:bg-gold2" : ""}`}>
        {label}
      </div>
      <h2 className={`section-title ${light ? "text-white" : ""}`}>{title}</h2>
      {lead ? (
        <p className={`section-lead ${light ? "text-white/65" : ""}`}>{lead}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    inLanguage: "en",
    about: [
      "Climate resilience",
      "Open science",
      "Research and education networks",
      "Regional climate data infrastructure",
    ],
  };

  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="sticky top-0 z-50 border-b border-teal/30 bg-navy/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-green font-mono text-[11px] font-medium leading-none tracking-[0.05em] text-white">
              CLI
              <br />
              MET
            </div>
            <div>
              <div className="font-display text-2xl leading-none text-white">WACREN</div>
              <div className="font-mono text-[9px] uppercase tracking-[0.35em] text-teal2">
                CLI-MET Programme
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-white/75 transition hover:bg-teal/20 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 rounded-md bg-teal px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal2"
            >
              Partner With Us
            </a>
          </nav>

          <details className="group lg:hidden">
            <summary className="list-none rounded-md border border-white/15 px-3 py-2 font-mono text-xs uppercase tracking-[0.25em] text-white">
              Menu
            </summary>
            <div className="absolute right-6 top-[72px] w-72 rounded-2xl border border-white/10 bg-navy2 p-4 shadow-card">
              <nav className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm text-white/80 transition hover:bg-teal/20 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 rounded-md bg-teal px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Partner With Us
                </a>
              </nav>
            </div>
          </details>
        </div>
      </header>

      <section className="topo-bg relative min-h-[92vh] bg-navy">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_50%,rgba(11,126,168,0.18)_0%,transparent_70%),radial-gradient(ellipse_50%_40%_at_20%_80%,rgba(26,138,80,0.12)_0%,transparent_60%),radial-gradient(ellipse_60%_80%_at_90%_10%,rgba(232,160,48,0.06)_0%,transparent_60%)]" />
        <div className="hero-grid absolute inset-0" />
        <div className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-6 py-20 md:px-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-12 lg:py-24">
          <div>
            <div className="animate-fade-up font-mono text-xs uppercase tracking-[0.35em] text-teal2">
              Regional Digital Climate Infrastructure
            </div>
            <h1 className="animate-fade-up pt-6 font-display text-5xl leading-tight text-white md:text-6xl">
              Building a <em className="text-gold2">Connected, Open,</em> and
              Resilient Climate Ecosystem for West & Central Africa
            </h1>
            <p className="animate-fade-up pt-6 text-lg leading-8 text-white/70 md:max-w-2xl">
            WACREN CLI-MET leverages advanced digital connectivity, open science, and trusted research infrastructure to strengthen climate research, climate-informed decision-making, and sustainable development across the region, positioning Research and Education Networks as critical enablers of climate resilience.
            </p>
            <div className="animate-fade-up flex flex-wrap gap-4 pt-10">
              <a
                href="#pillars"
                className="rounded-lg bg-teal px-6 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal2"
              >
                Explore the Programme
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-white/40 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Partner With Us
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-teal/25 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-teal/40"
              >
                <div className="font-display text-4xl leading-none text-gold2">
                  {stat.value}
                </div>
                <p className="pt-2 text-sm leading-6 text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="section-shell bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="section-label">Why It Matters</div>
            <h2 className="section-title">
              A Region at the Climate Frontline and the Data Gap That Holds It Back
            </h2>
            <div className="mb-10 mt-8 h-[3px] w-14 rounded bg-gradient-to-r from-teal to-green" />
            <div className="space-y-5 text-[16.5px] leading-8 text-slate-700">
              <p>
                West and Central Africa is among the world&apos;s most
                climate-vulnerable regions. Escalating floods in the Sahel,
                prolonged droughts across the Lake Chad Basin, sea-level rise
                threatening coastal cities, and erratic rainfall devastating
                smallholder agriculture are current realities.
              </p>
              <blockquote className="rounded-r-xl border-l-4 border-teal bg-offwhite px-6 py-5 font-display text-2xl italic leading-9 text-navy2">
                Climate challenges in West and Central Africa are inherently
                regional, yet the data, tools, and infrastructure needed to
                address them remain dangerously fragmented.
              </blockquote>
              <p>
                <strong className="text-navy">
                  National meteorological and hydrological services
                </strong>{" "}
                often work with outdated equipment and limited access to Earth
                Observation data.{" "}
                <strong className="text-navy">
                  Climate research institutions and universities
                </strong>{" "}
                lack the computing infrastructure to run regional models.
              </p>
              <p>
                The consequences are severe: early-warning systems fail to reach
                communities in time, food security interventions are poorly
                targeted, infrastructure investments ignore climate risk, and
                the region&apos;s scientific voice is marginalised.
              </p>
              <p>
                WACREN CLI-MET closes this gap by making high-quality, timely
                climate data accessible, shareable, and actionable through a
                trusted, African-led research and education network.
              </p>
            </div>
          </div>

          <div>
            <div className="mb-6 section-label">Key Constraints</div>
            <div className="grid gap-4">
              {challenges.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border bg-light p-6 transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="flex gap-5">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ${item.tone}`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-navy">
                        {item.title}
                      </h3>
                      <p className="pt-1 text-sm leading-6 text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl bg-gradient-to-br from-navy to-navy2 p-6 text-white">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-teal2">
                The Opportunity
              </div>
              <p className="pt-3 font-display text-2xl leading-8">
                Connectivity is the multiplier that turns climate data into
                climate action.
              </p>
              <p className="pt-3 text-sm leading-6 text-white/60">
                WACREN&apos;s existing regional backbone is uniquely positioned
                to become the climate data highway that West and Central Africa
                urgently needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-navy text-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Who Needs This"
            title="Built for the Institutions That Can't Afford to Wait"
            light
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stakeholders.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-teal/40 hover:bg-teal/15"
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="pt-4 font-display text-2xl leading-8 text-white">
                  {item.title}
                </h3>
                <p className="pt-3 text-sm leading-6 text-white/60">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pillars" className="section-shell bg-light">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Programme Pillars"
            title="Five Interconnected Pillars"
            lead="Each pillar reinforces the others, creating a coherent system where connectivity, data, tools, science, and skills work together."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {pillars.map((pillar) => (
              <article
                key={pillar.number}
                className={`relative overflow-hidden rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-card before:absolute before:left-0 before:right-0 before:top-0 before:h-1 ${pillar.color}`}
              >
                <div className="font-mono text-xs tracking-[0.25em] text-muted">
                  {pillar.number}
                </div>
                <div className="pt-4 text-3xl">{pillar.icon}</div>
                <h3 className="pt-4 font-display text-2xl leading-8 text-navy">
                  {pillar.title}
                </h3>
                <ul className="space-y-3 pt-4 text-sm leading-6 text-muted">
                  {pillar.points.map((point) => (
                    <li key={point} className="relative pl-4 before:absolute before:left-0 before:text-teal before:content-['›']">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="flagship" className="section-shell bg-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Flagship Activities"
            title="Programmes in Action"
            lead="Concrete, partner-supported activities that bring the CLI-MET vision to life with tangible regional outcomes."
          />
          <div className="mt-12 grid gap-6">
            {flagshipActivities.map((item) => (
              <article
                key={item.number}
                className="group grid gap-6 rounded-2xl border bg-light p-6 transition hover:bg-navy hover:text-white md:grid-cols-[64px_minmax(0,1fr)_auto] md:items-center md:p-8"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-border font-display text-3xl text-slate-400 transition group-hover:border-gold2 group-hover:text-gold2">
                  {item.number}
                </div>
                <div>
                  <h3 className="font-display text-3xl leading-9 text-navy transition group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="pt-2 text-sm leading-6 text-muted transition group-hover:text-white/60">
                    {item.description}
                  </p>
                </div>
                <div className="w-fit rounded-full bg-offwhite px-3 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted transition group-hover:bg-teal/30 group-hover:text-teal2">
                  {item.tag}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sdgs" className="relative overflow-hidden bg-navy section-shell">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(26,138,80,0.12)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(232,160,48,0.1)_0%,transparent_40%),radial-gradient(circle_at_60%_90%,rgba(11,126,168,0.1)_0%,transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            label="Global & Continental Alignment"
            title="Meeting the SDGs and Africa's Climate Commitments"
            lead="WACREN CLI-MET is foundational infrastructure that accelerates progress on the region's most critical global and continental obligations."
            light
          />

          <div className="mt-12 grid gap-8 xl:grid-cols-2">
            <div className="rounded-[20px] border border-white/10 bg-white/5">
              <div className="flex items-center gap-4 border-b border-white/10 px-8 py-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-blue-900 text-2xl">
                  🌐
                </div>
                <div>
                  <h3 className="font-display text-3xl text-white">
                    UN Sustainable Development Goals
                  </h3>
                  <div className="pt-1 font-mono text-xs tracking-[0.15em] text-white/45">
                    SDGs 2 · 6 · 7 · 13 · 17
                  </div>
                </div>
              </div>
              <div className="px-8 py-5">
                {sdgs.map((item) => (
                  <div
                    key={item.badge}
                    className="flex gap-4 border-b border-white/10 py-4 last:border-none"
                  >
                    <div
                      className={`h-fit rounded-md px-3 py-1 font-mono text-[10px] ${item.color}`}
                    >
                      {item.badge}
                    </div>
                    <p className="text-sm leading-6 text-white/70">
                      <strong className="text-white">{item.title}</strong> {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[20px] border border-white/10 bg-white/5">
                <div className="flex items-center gap-4 border-b border-white/10 px-8 py-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-600 to-amber-900 text-2xl">
                    🌍
                  </div>
                  <div>
                    <h3 className="font-display text-3xl text-white">
                      AU Agenda 2063 & Climate Frameworks
                    </h3>
                    <div className="pt-1 font-mono text-xs tracking-[0.15em] text-white/45">
                      Digital · Climate · Science & Technology
                    </div>
                  </div>
                </div>
                <div className="px-8 py-5">
                  {auFrameworks.map((item) => (
                    <div
                      key={item.badge}
                      className="flex gap-4 border-b border-white/10 py-4 last:border-none"
                    >
                      <div className="h-fit rounded-md bg-gold/20 px-3 py-1 font-mono text-[10px] text-gold2">
                        {item.badge}
                      </div>
                      <p className="text-sm leading-6 text-white/70">
                        <strong className="text-white">{item.title}</strong> {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3">
                {auCards.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-gold/25 bg-white/5 p-5 transition hover:border-gold/45 hover:bg-gold/10"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <h3 className="pt-3 font-display text-xl leading-7 text-gold2">
                      {item.title}
                    </h3>
                    <p className="pt-2 text-sm leading-6 text-white/55">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="section-shell bg-offwhite">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Programme Impact"
            title="What Success Looks Like"
            lead="Measurable, meaningful outcomes for researchers, policymakers, communities, and the region's climate future."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {impactCards.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border bg-white p-7 text-center transition hover:-translate-y-1 hover:shadow-card"
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="pt-4 font-display text-2xl leading-8 text-navy">
                  {item.title}
                </h3>
                <p className="pt-3 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="who" className="section-shell bg-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Beneficiaries"
            title="Who Benefits"
            lead="CLI-MET serves a broad ecosystem of institutions whose effectiveness depends on reliable, shared climate data and infrastructure."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {beneficiaries.map((item) => (
              <article
                key={item.title}
                className="flex gap-4 rounded-2xl border bg-light p-6 transition hover:border-teal hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-navy text-xl text-white">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-2xl leading-8 text-navy">
                    {item.title}
                  </h3>
                  <p className="pt-2 text-sm leading-6 text-muted">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="alignment" className="section-shell bg-offwhite">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Strategic Alignment"
            title="Anchored in Global and Continental Frameworks"
            lead="CLI-MET is designed to accelerate progress toward international and African climate and development frameworks."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {alignmentCards.map((item) => (
              <article
                key={item.title}
                className="flex items-center gap-4 rounded-2xl border bg-white p-6 transition hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-xl text-white">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-2xl leading-8 text-navy">
                    {item.title}
                  </h3>
                  <p className="pt-1 text-sm leading-6 text-muted">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#020F1E] px-6 py-14 text-white/50 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-green font-mono text-[11px] font-medium leading-none tracking-[0.05em] text-white">
                CLI
                <br />
                MET
              </div>
              <div>
                <div className="font-display text-3xl text-white">WACREN</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.35em] text-teal2">
                  CLI-MET Programme
                </div>
              </div>
            </div>
            <p className="max-w-md pt-4 text-sm leading-7 text-white/40">
              WACREN CLI-MET is the West and Central African Research and
              Education Network&apos;s regional programme for climate and
              meteorological infrastructure, building the digital backbone for a
              climate-resilient Africa.
              WACREN CLI-MET leverages advanced digital connectivity, open science, and trusted research infrastructure to strengthen climate research, climate-informed decision-making, and sustainable development across the region, positioning Research and Education Networks as critical enablers of climate resilience.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-teal2">
                {group.title}
              </div>
              <ul className="space-y-3 pt-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/45 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-3 pt-8 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
          <span>
            © WACREN. West and Central African Research and Education Network,
            Climate & Meteorology Programme (CLI-MET)
          </span>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms of Use
            </a>
            <a href="#" className="transition hover:text-white">
              Accessibility
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
