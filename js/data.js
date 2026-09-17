// Centralized Data Configuration for Corporate Engineering Web App
window.CONFIG = {
  company: {
    name: "Best Electrical Solution",
    logoText: "Best Electrical Solution",
    phone: "+91 7014471607",
    email: "bse.power29@gmail.com",
    address: "302, Phase II, Industrial Area, Malviya Nagar, Jaipur, Rajasthan, India - 302017",
    workingHours: "Monday – Saturday: 9:00 AM – 6:00 PM (Sunday Closed)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56983.83401569429!2d75.7872709121731!3d26.85614343161314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db608d4b313ef%3A0x6b0ff22b8214ec0e!2sMalviya%20Nagar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1716180000000!5m2!1sen!2sin"
  },

  heroSlides: [
    {
      id: 1,
      type: "image", // can be "image" or "video"
      src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80",
      placeholderText: "Industrial Electrical Inspection",
      title: "Powering Efficiency. Ensuring Reliability.",
      subtitle: "Professional electrical auditing, energy studies, and power-quality solutions for modern industrial and commercial systems.",
      ctaText: "Explore Our Services",
      ctaLink: "#/services/electrical-audit"
    },
    {
      id: 2,
      type: "image",
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80",
      placeholderText: "Electrical Panel Inspection",
      title: "Mitigate Operations Risk with Thermography",
      subtitle: "Identify hidden hot spots, loose connections, and potential panel failures before they cause costly downtime.",
      ctaText: "Explore Thermography",
      ctaLink: "#/study/thermography"
    },
    {
      id: 3,
      type: "image",
      src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=80",
      placeholderText: "Thermography Inspection",
      title: "Data-Driven Electrical Load Studies",
      subtitle: "Optimize power consumption and ensure distribution capacity alignment using accurate load profiles.",
      ctaText: "View Load Studies",
      ctaLink: "#/study/electrical-load-study"
    },
    {
      id: 4,
      type: "image",
      src: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=1920&q=80",
      placeholderText: "Industrial Facility",
      title: "Power Quality & Harmonic Solutions",
      subtitle: "Analyze electrical disturbances, reduce harmonics, and stabilize voltage profiles to protect sensitive machinery.",
      ctaText: "See Power Quality Solutions",
      ctaLink: "#/services/power-quality-solutions"
    },
    {
      id: 5,
      type: "image",
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
      placeholderText: "Power Quality Measurement",
      title: "Comprehensive Energy Studies",
      subtitle: "Systematic auditing of industrial energy consumers to identify load-saving opportunities and lower utility bills.",
      ctaText: "Learn About Energy Audits",
      ctaLink: "#/services/energy-audit"
    }
  ],

  products: [
    { name: "Industrial Plug & Socket", slug: "industrial-plug-socket" },
    { name: "Power Distribution Boards", slug: "power-distribution-boards" },
    { name: "Polycarbonate Distribution customised DB", slug: "polycarbonate-distribution-customised-db" },
    { name: "RTPFC Panel", slug: "rtpfc-panel" },
    { name: "APFC Panel", slug: "apfc-panel" },
    { name: "Hybrid Power quality System", slug: "hybrid-power-quality-system" },
    { name: "Active Filters", slug: "active-filters" },
    { name: "Shunt reactor (for leading PF solution)", slug: "shunt-reactor-leading-pf-solution" },
    { name: "Lighting Automation", slug: "lighting-automation" }
  ],

  team: [],

  services: {
    "electrical-audit": {
      slug: "electrical-audit",
      title: "Power Quality Load Study & Audit",
      navOrder: 3,
      shortDescription: "Thorough assessment of electrical infrastructure to verify safety, discover system losses, and ensure regulatory compliance.",
      intro: "A rigorous system-wide inspection designed to verify safety compliance, identify operational hazards, isolate energy losses, and provide practical engineering corrective actions.",
      icon: "fa-shield-halved",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=800&q=80",
      imagePlaceholderText: "Electrical Audit Field Inspection",
      seo: {
        title: "Electrical Safety & Distribution Audit | Apex Energy",
        description: "Professional electrical safety audits, distribution board verification, and regulatory compliance checks for industrial facilities in India."
      },
      whyChooseUs: [
        { title: "Bureau of Energy Efficiency (BEE) Auditing Standards", desc: "Our methodology adheres to international safety standards and local national code guidelines." },
        { title: "Advanced Test Instrumentation", desc: "We utilize calibrated Class-A power quality analyzers, thermal imagers, and earth testers." },
        { title: "Comprehensive Risk Assessment", desc: "Identification of short-circuit risks, protection coordination mismatches, and grounding faults." },
        { title: "Practical Engineering Action Plans", desc: "Every observation is backed by a cost-effective engineering resolution and priority ranking." }
      ],
      comprehensive: [
        "Visual inspection of all distribution boards, panels, cables, and switchgear assets.",
        "Verification of earth resistance value and grounding network integrity.",
        "Assessment of protection relay settings and switchgear trip coordination.",
        "Load-balancing calculations and current-carrying capacity check for feeders.",
        "Identification of hot spots, loose terminations, and damaged insulation.",
        "Verification of single-line diagrams (SLDs) and equipment labeling accuracy.",
        "Assessment of electrical fire safety, safety clearances, and warning signs."
      ],
      benefits: [
        "Guarantees compliance with central and state electricity authority rules.",
        "Significantly minimizes operational risks related to electrical flashovers and fires.",
        "Enhances plant uptime by addressing electrical faults before they trigger trips.",
        "Reduces technical losses in transformer windings and distribution lines.",
        "Enhances workspace safety index for operational and maintenance personnel."
      ]
    },
    "energy-audit": {
      slug: "energy-audit",
      title: "Energy Audit",
      navOrder: 4,
      shortDescription: "BEE-certified engineering analysis of energy consumers to optimize efficiency, lower utility bills, and reduce carbon footprints.",
      intro: "Detailed verification of utility energy pathways, identifying operational waste, optimizing utility tariffs, and introducing cost-saving measures across critical thermal and electrical systems.",
      icon: "fa-charging-station",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
      imagePlaceholderText: "Energy Efficiency Analysis",
      seo: {
        title: "Certified Industrial Energy Audit Services | Apex Energy",
        description: "BEE-certified energy audit services targeting utility systems, cooling towers, HVAC, boilers, and industrial motors to cut energy bills."
      },
      whyChooseUs: [
        { title: "Accredited Energy Auditors", desc: "Audits led by Bureau of Energy Efficiency (BEE) certified professionals with extensive domain expertise." },
        { title: "Structured Feasibility Analysis", desc: "We provide CAPEX, OPEX, and internal rate of return (IRR) models for recommended capital upgrades." },
        { title: "Cross-System Evaluation", desc: "We inspect both electrical consumers and thermal utilities for holistically integrated efficiency." },
        { title: "Continuous Monitoring Framework", desc: "Guidelines to establish baseline targets and configure energy management dashboard alerts." }
      ],
      comprehensive: [
        "Detailed review of past 12-36 months of utility invoices to optimize tariff packages.",
        "Performance testing of motors, pumps, air compressors, and refrigeration units.",
        "Evaluation of boiler operations, steam networks, and condensate recovery efficiency.",
        "Illumination intensity mapping and evaluation of lighting energy indices.",
        "Analysis of HVAC distribution loops, chilled water flow, and building envelop loads.",
        "Preparation of complete energy balance flow charts (Sankey diagrams).",
        "Cost-benefit projections for implementing high-efficiency variable frequency drives (VFDs)."
      ],
      benefits: [
        "Reduces monthly utility costs by 10% to 25% through actionable conservation tasks.",
        "Delivers rapid return-on-investment (ROI) suggestions with payback periods under 12 months.",
        "Lowers overall plant carbon footprint, supporting environmental ESG metrics.",
        "Optimizes load curves to avoid maximum demand penalty charges.",
        "Identifies underperforming machinery to streamline preventative maintenance."
      ]
    },
    "lighting-audit": {
      slug: "lighting-audit",
      title: "Lighting Audit",
      navOrder: 8,
      shortDescription: "Specialized assessment of illumination performance, daylight integration, and energy-efficient lighting upgrades.",
      intro: "Expert appraisal of facility lighting patterns, combining photometrical lux mapping with design studies to lower power consumption while improving safety and operator productivity.",
      icon: "fa-lightbulb",
      image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=800&q=80",
      imagePlaceholderText: "Lux Intensity Mapping",
      seo: {
        title: "Industrial Lighting & Lux Optimization Audit | Apex Energy",
        description: "Lux mapping, lighting efficacy evaluation, and energy saving conversions for industrial plants and office complexes."
      },
      whyChooseUs: [
        { title: "Photometrical Precision Tools", desc: "We capture light distribution levels using high-accuracy digital photometer instruments." },
        { title: "Workplace Standards Alignment", desc: "Ensures lighting levels match industrial work conditions (ISO/IS codes)." },
        { title: "Smart Integration Engineering", desc: "Expert placement of occupancy sensors, timers, and daylight harvesting controllers." },
        { title: "Manufacturer-Neutral Spec Sheets", desc: "We provide vendor-neutral hardware recommendations based on performance and lifespan." }
      ],
      comprehensive: [
        "Grid-based lux mapping across assembly lines, storage zones, and office cubicles.",
        "Calculating current lighting power densities (LPD) in Watts per square meter.",
        "Assessing lighting quality parameters like color rendering index (CRI) and glare levels.",
        "Evaluating natural day-lighting integration options in industrial sheds.",
        "Reviewing circuit wiring configurations to ensure localized switching capability.",
        "Calculating complete return-on-investment models for converting to LED arrays.",
        "Auditing emergency and escape route lighting battery backups."
      ],
      benefits: [
        "Decreases lighting power consumption by up to 50% to 70% using modern LED layouts.",
        "Improves factory operator safety and reduces eye strain and processing errors.",
        "Achieves optimized lux levels customized for specific task complexities.",
        "Reduces cooling system heat loads by swapping out hot halide bulbs.",
        "Ensures compliance with national structural fire and safety building codes."
      ]
    },
    "power-distribution": {
      slug: "power-distribution",
      title: "Energy Audit, Load Profiling & rationalization and Distribution Transformer",
      navOrder: 5,
      shortDescription: "Detailed engineering and design services for power distribution networks, switchgear layout, and protective relays.",
      intro: "Tailored engineering design services focusing on transformer layouts, switchgear installations, cabling routes, and relay coordination protocols to establish modular and reliable plant operations.",
      icon: "fa-network-wired",
      image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=800&q=80",
      imagePlaceholderText: "Power Distribution Engineering Design",
      seo: {
        title: "Industrial Power Distribution Engineering | Apex Energy",
        description: "Custom design of electrical distribution systems, substations, protective relay settings, and cable optimization."
      },
      whyChooseUs: [
        { title: "Reliability-First Approach", desc: "We build layouts with N+1 redundancies and smart bypass rings to avoid single-point outages." },
        { title: "Advanced Simulation Validation", desc: "Designs verified using electrical network simulation tools for short-circuit modeling." },
        { title: "Future Expansion Planning", desc: "Distribution layouts structured with capacity headrooms to support future facility growth." },
        { title: "Bespoke Vendor Specifications", desc: "We write strict, objective equipment specs to guide transparent client procurement." }
      ],
      comprehensive: [
        "Determining plant load curves and matching incoming utility substation designs.",
        "Sizing HT/LT transformers, main air circuit breakers, and busbar tracks.",
        "Creating comprehensive Single Line Diagrams (SLD) and cable tray routing models.",
        "Designing main electrical room spaces, ventilation, and fire suppression layouts.",
        "Performing detailed cable voltage drop, short-circuit, and thermal calculations.",
        "Developing earthing grids and lightning protection shield structures.",
        "Specifying relay trip equations to guarantee selective, isolated system tripping."
      ],
      benefits: [
        "Prevents massive voltage drops over long cables, keeping equipment running smoothly.",
        "Guarantees that faults only isolate local circuits, preserving broad plant uptime.",
        "Prevents equipment oversizing, cutting capital expenditures (CAPEX) on switchgear.",
        "Extends the operational lifespan of power transformers and breaker mechanisms.",
        "Improves electrical maintenance accessibility through logical panel layout designs."
      ]
    },
    "power-quality-solutions": {
      slug: "power-quality-solutions",
      title: "Power factor Correction & Solutions",
      navOrder: 1,
      shortDescription: "Mitigation of harmonics, voltage dips, surges, and transients to secure sensitive process control equipment.",
      intro: "Targeted troubleshooting and design support to identify electrical supply disturbances, suppress harmonic distortion, and prevent voltage sags from disrupting computer-controlled automation.",
      icon: "fa-wave-square",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      imagePlaceholderText: "Power Quality Waveform Analysis",
      seo: {
        title: "Industrial Power Quality & Harmonic Mitigation | Apex Energy",
        description: "Expert active harmonic filter sizing, passive filter design, and voltage surge stabilization solutions."
      },
      whyChooseUs: [
        { title: "High-Frequency Data Capturing", desc: "We monitor systems using Class-A recorders capable of detecting microsecond transients." },
        { title: "IEEE-519 Standards Compliance", desc: "Our solutions guarantee your harmonic levels comply with global utility network policies." },
        { title: "Custom Mitigation Designs", desc: "We design tailored active and passive filtering systems instead of recommending generic boxes." },
        { title: "Before-and-After Verification", desc: "We measure performance post-install to prove return on investment and harmonic reduction." }
      ],
      comprehensive: [
        "Continuous monitoring of Total Harmonic Distortion (THD-V & THD-I) at main tie-lines.",
        "Tracing sources of harmonic noise generated by variable frequency drives and rectifiers.",
        "Simulating electrical resonance conditions near capacitor bank banks.",
        "Sizing Active Harmonic Filters (AHF) and detuned filter capacitor systems.",
        "Analyzing transformer derating factors caused by harmonic heating.",
        "Evaluating voltage sags and transients to select appropriate UPS or stabilizer ratings.",
        "Verifying neutral wire current profiles in unbalanced distribution lines."
      ],
      benefits: [
        "Stops unexplained controller trips, PLC resets, and computer hardware failures.",
        "Reduces transformer overheating, extending copper winding insulation lifespan.",
        "Eliminates high-frequency current losses to lower active energy bills.",
        "Reduces neutral wire current levels, preventing fire risks in cables.",
        "Ensures compliance with utility rules, avoiding grid penalty charges."
      ]
    },
    "electrical-load-study": {
      slug: "electrical-load-study",
      title: "Electric Load Study",
      navOrder: 2,
      shortDescription: "Assessment of electrical load patterns, current distribution, and system capacity.",
      intro: "A focused engineering study of electrical demand and load behavior to support reliable distribution planning.",
      icon: "fa-chart-line",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      imagePlaceholderText: "Electric Load Study",
      seo: {
        title: "Electric Load Study | Apex Energy",
        description: "Professional electric load study services for industrial and commercial distribution systems."
      },
      whyChooseUs: [{ title: "Measured Load Profiles", desc: "We use recorded operating data to assess demand and loading conditions." }],
      comprehensive: ["Reviewing feeder and transformer loading", "Analyzing current and voltage trends", "Identifying capacity and balancing opportunities"],
      benefits: ["Supports capacity planning", "Improves distribution reliability", "Identifies actionable load optimization opportunities"]
    },
    "thermography-analysis": {
      slug: "thermography-analysis",
      title: "Thermography Analysis",
      navOrder: 6,
      shortDescription: "Infrared analysis to identify electrical and mechanical hot spots before failure.",
      intro: "A targeted thermal inspection service for locating abnormal heat patterns in operating electrical and mechanical assets.",
      icon: "fa-temperature-high",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      imagePlaceholderText: "Thermography Analysis",
      seo: {
        title: "Thermography Analysis | Apex Energy",
        description: "Professional infrared thermography analysis for electrical and mechanical equipment."
      },
      whyChooseUs: [{ title: "Non-Destructive Inspection", desc: "Thermal imaging helps identify developing faults without interrupting operations." }],
      comprehensive: ["Scanning energized electrical panels", "Reviewing thermal anomalies", "Prioritizing corrective maintenance actions"],
      benefits: ["Finds developing faults early", "Reduces unplanned downtime", "Focuses maintenance resources on measured conditions"]
    },
    "earth-pit-testing": {
      slug: "earth-pit-testing",
      title: "Earth Pit testing",
      navOrder: 7,
      shortDescription: "Testing of earthing systems to verify grounding performance and electrical safety.",
      intro: "A practical assessment of earth pits and grounding paths to verify resistance values and support safe electrical operation.",
      icon: "fa-bolt",
      image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=800&q=80",
      imagePlaceholderText: "Earth Pit Testing",
      seo: {
        title: "Earth Pit Testing | Apex Energy",
        description: "Professional earth pit and grounding system testing for industrial and commercial facilities."
      },
      whyChooseUs: [{ title: "Grounding Verification", desc: "We assess earth resistance and grounding continuity using appropriate test methods." }],
      comprehensive: ["Testing earth pit resistance", "Reviewing grounding connections", "Documenting test observations and results"],
      benefits: ["Supports electrical safety", "Helps identify grounding deficiencies", "Provides records for maintenance and compliance"]
    }
  },

  studies: {
    "thermography": {
      slug: "thermography",
      title: "Infrared Thermography Inspection",
      shortDescription: "Non-destructive thermal imaging of electrical and mechanical assets to locate hot spots and loose terminations.",
      intro: "A specialized non-contact scan using infrared cameras to trace heat build-up. This reveals loose terminal links, overloaded fuses, and unbalanced loads without interrupting plant operations.",
      icon: "fa-temperature-high",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      imagePlaceholderText: "Infrared Thermographic Scan",
      seo: {
        title: "Infrared Thermography Inspection Services | Apex Energy",
        description: "Professional thermal imaging scans for electrical panels, transformers, bus ducts, and rotating parts to preempt failures."
      },
      whyChooseUs: [
        { title: "Certified Thermographers", desc: "Our inspections are conducted by Level II certified infrared thermography experts." },
        { title: "High-Resolution Flir Imagers", desc: "We utilize advanced radiometric cameras to capture precise temperature differentials." },
        { title: "Real-Time Scan Operations", desc: "Inspections are executed during peak load operations, keeping your production line online." },
        { title: "Comprehensive Visual Reports", desc: "Our documentation pairs thermal shots with regular photos, making issues easy to locate." }
      ],
      comprehensive: [
        "Radiometric thermal scans of all HT/LT panels, switchgear breakers, and bus duct joints.",
        "Scanning transformer cooling fins, bushing connections, and cable terminations.",
        "Monitoring bearing housings, belt drives, and coupling alignments on large motors.",
        "Calculating delta-T (temperature difference) values relative to background baselines.",
        "Classifying identified thermal anomalies into critical, major, and minor hazard levels.",
        "Reviewing panel environments for ventilation blocks and dirt accumulation.",
        "Providing corrective guidelines for wire re-termination and contact surface cleaning."
      ],
      benefits: [
        "Flags loose electrical connections before they spark, burn out, or start fires.",
        "Zero operational downtime during the inspection process.",
        "Reduces replacement costs by targeting specific connector parts before failure.",
        "Qualifies plants for lower corporate property insurance premiums.",
        "Provides maintenance crews with a highly focused repair checklist."
      ]
    },
    "electrical-load-study": {
      slug: "electrical-load-study",
      title: "Electrical Load Flow Study",
      shortDescription: "Assessment of system load trends, current distribution, voltage profiles, and transformer loading profiles.",
      intro: "Systematic multi-day tracking of load dynamics, current draws, and voltage shifts across feeders. This data guides capacity management, phase balancing, and system growth planning.",
      icon: "fa-chart-line",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      imagePlaceholderText: "Electrical Load Profile Recording",
      seo: {
        title: "Electrical Load Flow Study & Capacity Analysis | Apex Energy",
        description: "Detailed load profiling, phase balancing, transformer sizing analysis, and distribution capacity optimization."
      },
      whyChooseUs: [
        { title: "7-Day Continuous Logging", desc: "We run deep logging sessions to capture real load profiles across weekend changes." },
        { title: "Phase Balance Analytics", desc: "We analyze current profiles to balance loads across phases and reduce neutral current." },
        { title: "Growth Capacity Analysis", desc: "We calculate reserve capacities to ensure your system can handle future expansions." },
        { title: "Clear Load Diagrams", desc: "Data is converted into clear daily, weekly, and peak demand charts." }
      ],
      comprehensive: [
        "Installing multi-channel logging meters at transformers and main switchgear panels.",
        "Recording current, voltage, kW, kVA, and power factor parameters at 15-minute intervals.",
        "Mapping daily load curves to find peak demand windows and average load factors.",
        "Calculating current imbalances across phase lines.",
        "Comparing transformer and main breaker nameplate ratings against actual peaks.",
        "Evaluating voltage regulation profiles across distant distribution points.",
        "Creating simulation models to test hypothetical load-addition scenarios."
      ],
      benefits: [
        "Identifies spare capacity in existing panels, avoiding unnecessary transformer purchases.",
        "Reduces neutral wire line losses by balancing currents across phases.",
        "Prevents breakers from tripping due to short-term peak overloading.",
        "Ensures utility service drops match actual demand, cutting contract charges.",
        "Provides precise baseline load data to guide future factory expansions."
      ]
    },
    "power-quality-study": {
      slug: "power-quality-study",
      title: "Power Quality & Disturbances Study",
      shortDescription: "In-depth investigation of voltage sags, swells, transients, harmonics, and flicker on sensitive electronics.",
      intro: "A dedicated investigation analyzing voltage swells, sags, harmonic profiles, and line flicker to protect automated systems from memory resets and tracking errors.",
      icon: "fa-wave-square",
      image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=800&q=80",
      imagePlaceholderText: "Power Quality Diagnostic Analyzer",
      seo: {
        title: "Power Quality Analysis & Disturbances Study | Apex Energy",
        description: "Class-A power quality auditing, voltage sag measurements, and transient analysis to protect sensitive systems."
      },
      whyChooseUs: [
        { title: "Class-A IEC 61000-4-30 Meters", desc: "We gather certified, legally valid data using advanced diagnostic analyzers." },
        { title: "Root-Cause Diagnostics", desc: "We determine if voltage disturbances originate inside your plant or from the utility grid." },
        { title: "Detailed Waveform Catching", desc: "We capture transient waveforms to analyze the exact shape of voltage spikes." },
        { title: "Customized Mitigation Options", desc: "We design targeted solutions, from simple surge suppressors to active stabilizers." }
      ],
      comprehensive: [
        "Monitoring supply busbars for voltage sags, swells, transients, and interruptions.",
        "Recording harmonic frequencies up to the 50th order on key branch circuits.",
        "Measuring voltage flicker indices to address lighting fluctuation issues.",
        "Analyzing frequency deviations relative to grid standards.",
        "Investigating grounding grid noise levels affecting communication cables.",
        "Correlating equipment fault logs with recorded power quality events.",
        "Evaluating the ride-through capacity of key control and PLC power systems."
      ],
      benefits: [
        "Pinpoints why sensitive electronics and PLCs reset, preventing production stops.",
        "Protects expensive motor drives from voltage spike failures.",
        "Identifies capacitor resonance risks before they lead to explosions.",
        "Resolves lighting flicker issues, improving workplace safety and comfort.",
        "Helps request compensation from utilities for out-of-spec power delivery."
      ]
    },
    "power-factor-study": {
      slug: "power-factor-study",
      title: "Power Factor & Reactive Energy Study",
      shortDescription: "Analysis of power factor profiles, capacitor bank sizing, and optimization of reactive power compensation.",
      intro: "An engineering review focusing on system power factor (PF) profiles, analyzing capacitor bank operations, and sizing automatic correction systems to avoid utility penalties.",
      icon: "fa-bolt",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      imagePlaceholderText: "Power Factor Capacitor Bank Inspection",
      seo: {
        title: "Power Factor Study & APFC Optimization | Apex Energy",
        description: "Analysis of power factor, automatic power factor control (APFC) panel sizing, and reactive power management."
      },
      whyChooseUs: [
        { title: "Reactive Power Optimization", desc: "We size capacitor systems to maintain a power factor close to unity (0.99)." },
        { title: "Resonance Risk Mitigation", desc: "We design detuned reactor banks to prevent capacitor failure from harmonic resonance." },
        { title: "Health Analysis for Capacitor Cells", desc: "We measure individual capacitor cell health using current-draw diagnostics." },
        { title: "Utility Bill Review", desc: "We check billing history to calculate potential payback periods for new APFC panels." }
      ],
      comprehensive: [
        "Analyzing active, reactive, and apparent power consumption (kW, kVAR, kVA).",
        "Inspecting Automatic Power Factor Control (APFC) panels and testing controllers.",
        "Measuring capacitance loss in capacitor banks to identify degraded cells.",
        "Evaluating switchgear contactor wear caused by high capacitor inrush currents.",
        "Calculating detuned reactor values (e.g., 7% or 14%) to block harmonic currents.",
        "Assessing load-side power factor levels at large individual motor terminals.",
        "Designing localized reactive power correction plans for large transformers."
      ],
      benefits: [
        "Maintains a high power factor to eliminate monthly utility reactive power penalties.",
        "Secures utility bill incentives and discounts for maintaining near-unity power factor.",
        "Lowers overall kVA load on transformers, freeing up capacity for new machinery.",
        "Reduces voltage drops in main feeders, keeping terminal voltage stable.",
        "Extends the operational lifespan of power factor capacitor cells."
      ]
    }
  }
};
