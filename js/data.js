// Centralized Data Configuration for Corporate Engineering Web App
window.CONFIG = {
  company: {
    name: "Krapali Electro Craft",
    logoText: "Krapali Electro Craft",
    phone: "+91 7014471607",
    email: "krapalielectrocraft@gmail.com",
    address: "Jaipur, Rajasthan",
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

  products: {
    "industrial-plug-socket": {
      slug: "industrial-plug-socket",
      name: "Industrial Plug & Socket",
      title: "Industrial Plug & Socket Solutions",
      shortDescription: "High-grade industrial IP44/IP67 plugs, sockets, and interlocked combinations for harsh industrial environments.",
      intro: "Heavy-duty industrial plugs, sockets, and interlocked switch sockets built for reliable, safe power connections across harsh manufacturing, construction, and outdoor sites.",
      image: "images/industrial plug and socket.jpeg",
      photos: [
        "images/industrial plug and socket.jpeg"
      ],
      imagePlaceholderText: "Industrial Plug & Socket",
      seo: {
        title: "Industrial Plug & Socket Solutions | Krapali Electro Craft",
        description: "Heavy-duty industrial plugs, sockets, and interlocked combinations with IP44/IP67 ingress protection."
      },
      whyChooseUs: [
        { title: "IP44 / IP67 Ingress Protection", desc: "Engineered to resist heavy moisture, chemical washdowns, and conductive dust intrusion." },
        { title: "High Mechanical Impact Strength", desc: "Constructed with impact-resistant polyamide material for rugged factory floors." },
        { title: "Self-Cleaning Contacts", desc: "Nickel-plated brass pins and beryllium copper sleeves ensure low contact resistance and zero arcing." },
        { title: "Interlocked Safety Features", desc: "Prevents plug withdrawal under electrical load, protecting operators from hazardous flashovers." }
      ],
      comprehensive: [
        "Available in 16A, 32A, 63A, and 125A ratings with 2P+E, 3P+E, and 3P+N+E pin configurations.",
        "Standard voltage codings (230V Blue, 415V Red, 110V Yellow) per IEC 60309-1 / 60309-2 standards.",
        "Interlocked receptacle enclosures with built-in miniature circuit breakers (MCBs) or RCBOs.",
        "Wall mounting, panel mounting, and mobile trailing cable versions.",
        "Flame retardant, UV-stabilized thermoplastic housing with high thermal endurance.",
        "Tool-free quick-lock wiring terminals for rapid and secure cable termination."
      ],
      benefits: [
        "Significantly eliminates operator shock risks and arc flashes during frequent equipment changeovers.",
        "Provides watertight seal in washdown zones, outdoor terminals, and marine installations.",
        "Minimizes electrical contact overheating and prevents socket burning.",
        "Reduces maintenance downtime with modular drop-in replacement pins and sleeves."
      ]
    },
    "power-distribution-boards": {
      slug: "power-distribution-boards",
      name: "Power Distribution Boards",
      title: "Industrial Power Distribution Boards (PDB)",
      shortDescription: "Custom engineered electrical distribution boards engineered for optimal load balancing, circuit protection, and safety.",
      intro: "Robust main and sub-distribution panels engineered with high short-circuit withstand capabilities, modular compartmentalization, and high-performance protection gear.",
      image: "images/power distribution board.jpeg",
      photos: [
        "images/power distribution board.jpeg"
      ],
      imagePlaceholderText: "Power Distribution Board",
      seo: {
        title: "Power Distribution Boards (PDB) | Krapali Electro Craft",
        description: "Custom engineered power distribution boards up to Form 4b construction with CPRI-tested busbars."
      },
      whyChooseUs: [
        { title: "CPRI Tested Busbar Arrangements", desc: "High electrolytic copper and aluminum busbars engineered for short-circuit withstand up to 50kA." },
        { title: "Modular Form Separation", desc: "Manufactured up to Form 4b construction for segregated busbar, cable, and switchgear chambers." },
        { title: "IP54 / IP55 Weatherproof Enclosures", desc: "CNC-fabricated CRCA sheet steel with multi-stage pre-treatment and electrostatic powder coating." },
        { title: "Smart Metering & Telemetry", desc: "Integrated digital multi-function meters with RS485 Modbus for remote energy monitoring." }
      ],
      comprehensive: [
        "Incomers featuring Air Circuit Breakers (ACB) or Molded Case Circuit Breakers (MCCB) up to 4000A.",
        "Outgoing feeders with motorized MCCBs, MCBs, MPCB motor feeders, and contactors.",
        "Segregated neutral and earth busbars sized to accommodate 200% non-linear harmonic return currents.",
        "Digital metering for voltage, current, power factor, active power, and total harmonic distortion (THD).",
        "Neoprene gasket sealing, interlocked door handles, and safety acrylic flash barriers.",
        "Full factory routine testing: insulation resistance, dielectric withstand, and temperature rise verification."
      ],
      benefits: [
        "Prevents cascading electrical trips by offering precise discrimination between breaker stages.",
        "Protects plant personnel during routine inspection via physical internal compartmentalization.",
        "Maximizes continuous plant uptime with hot-standby changeover and auto-transfer mechanisms.",
        "Guarantees compliance with CEA 2010 safety regulations and IS/IEC 61439 standards."
      ]
    },
    "polycarbonate-distribution-customised-db": {
      slug: "polycarbonate-distribution-customised-db",
      name: "Polycarbonate Distribution customised DB",
      title: "Custom Polycarbonate Distribution Boards",
      shortDescription: "Corrosion-proof, high-impact polycarbonate distribution boxes custom configured with receptacles, MCBs, and isolators.",
      intro: "Fully customized non-metallic distribution panels made from high-grade engineering polycarbonate, offering 100% rust immunity, double insulation, and high ingress protection.",
      image: "images/polycarbonate distribution solution.jpeg",
      photos: [
        "images/polycarbonate distribution solution.jpeg"
      ],
      imagePlaceholderText: "Polycarbonate Distribution DB",
      seo: {
        title: "Custom Polycarbonate Distribution Boards | Krapali Electro Craft",
        description: "Non-metallic, corrosion-proof polycarbonate distribution panels custom configured with sockets and circuit protection."
      },
      whyChooseUs: [
        { title: "100% Corrosion & Rust Free", desc: "Polycarbonate material eliminates rust, making it ideal for chemical plants, mines, and coastal regions." },
        { title: "Double Insulated Class II Safety", desc: "Non-conductive enclosure walls eliminate electric shock hazards from internal insulation failures." },
        { title: "Transparent Inspection Covers", desc: "Impact-resistant clear polycarbonate windows allow visual breaker status checks without opening the door." },
        { title: "Bespoke Receptacle Configurations", desc: "Tailored combinations of industrial sockets (16A, 32A, 63A) with integrated MCB/ELCB protection." }
      ],
      comprehensive: [
        "Modular enclosure dimensions with IP65 / IP67 silicone gasket sealing.",
        "Built-in DIN rails accommodating single-phase and three-phase miniature circuit breakers.",
        "UV-resistant, halogen-free, and self-extinguishing polycarbonate compliant with UL94 V-0.",
        "Pre-wired internal wiring using high-temperature, heat-resistant multi-strand copper cables.",
        "Integrated rotary isolator switches or main lockable disconnect switches on the exterior.",
        "Available in wall-mounting, pedestal stand, or portable carry-handle configurations for job sites."
      ],
      benefits: [
        "Zero painting or rust maintenance required throughout the entire operational lifecycle.",
        "Outstanding mechanical impact protection (IK08 / IK10) on harsh industrial construction sites.",
        "Lightweight design simplifies installation on walls, structural pillars, and mobile work stations.",
        "Guarantees maximum operator safety with total electrical insulation."
      ]
    },
    "rtpfc-panel": {
      slug: "rtpfc-panel",
      name: "RTPFC Panel",
      title: "Real-Time Power Factor Correction (RTPFC) Panel",
      shortDescription: "Ultra-fast thyristor-switched capacitor panels delivering instantaneous reactive compensation within 1-2 cycles.",
      intro: "State-of-the-art solid-state power factor correction panels employing thyristor switching modules to compensate ultra-fast, fluctuating inductive loads like welding machines, cranes, and robotic lines.",
      image: "images/RTPFC panel .jpeg",
      photos: [
        "images/RTPFC panel .jpeg",
        "images/RTFC Panel.jpeg"
      ],
      imagePlaceholderText: "RTPFC Panel",
      seo: {
        title: "Real-Time Power Factor Correction (RTPFC) Panels | Krapali Electro Craft",
        description: "Transient-free thyristor switched power factor panels responding within 5-20 milliseconds."
      },
      whyChooseUs: [
        { title: "Transient-Free Zero Cross Switching", desc: "Thyristor modules switch capacitors precisely at voltage zero-crossing, eliminating inrush currents and voltage spikes." },
        { title: "Sub-Cycle Response Time (5-20 ms)", desc: "Corrects power factor within milliseconds, keeping up with spot welders, elevators, and induction furnaces." },
        { title: "Extended Capacitor Lifespan", desc: "Elimination of mechanical contactor arcing extends capacitor cell life by over 300%." },
        { title: "Detuned Harmonic Blocking Reactors", desc: "Integrated heavy copper reactors protect capacitors from harmonic resonance and thermal burnout." }
      ],
      comprehensive: [
        "Fast micro-controller-based real-time reactive power compensation controller.",
        "Thyristor solid-state switches with built-in heat sinks, thermal cutoffs, and cooling fans.",
        "Heavy-duty MPP/gas-filled capacitor units with burst-proof disconnectors.",
        "7%, 5.67%, or 14% detuned harmonic filter reactors calibrated to plant harmonic profile.",
        "Digital display displaying instantaneous PF, kVAR required, current THD, and step status.",
        "Compartmentalized cooling airflow design ensuring safe temperature control during peak load cycles."
      ],
      benefits: [
        "Eliminates utility reactive power penalties on rapidly fluctuating industrial processes.",
        "Prevents flicker and voltage drops during sudden heavy motor or welder starts.",
        "Eliminates contactor replacement costs and frequent capacitor breakdowns.",
        "Stabilizes DC busbars and reduces harmonic stress on transformers and switchgear."
      ]
    },
    "apfc-panel": {
      slug: "apfc-panel",
      name: "APFC Panel",
      title: "Automatic Power Factor Control (APFC) Panel",
      shortDescription: "Microprocessor-driven automated capacitor panels engineered to maintain near-unity power factor and eliminate penalties.",
      intro: "High-efficiency automatic power factor compensation systems designed to continuously monitor reactive power demand and dynamically switch capacitor stages to secure utility rebates.",
      image: "images/APFC panel.jpeg",
      photos: [
        "images/APFC panel.jpeg"
      ],
      imagePlaceholderText: "APFC Panel",
      seo: {
        title: "Automatic Power Factor Control (APFC) Panels | Krapali Electro Craft",
        description: "Multi-stage APFC panels with detuned harmonic filters to maintain unity power factor."
      },
      whyChooseUs: [
        { title: "Maintains Unity Power Factor (0.99)", desc: "Intelligent stepped switching ensures your plant stays eligible for top utility power factor discounts." },
        { title: "Specialized Capacitor Duty Contactors", desc: "Equipped with damping resistors and auxiliary contacts to absorb initial switching surges." },
        { title: "Harmonic Suppression Reactors", desc: "Detuned iron-core reactors prevent parallel resonance and protect against 5th/7th harmonic amplification." },
        { title: "Intelligent Step Cycling", desc: "Controller rotates step sequence to equalize operating hours across all capacitor banks." }
      ],
      comprehensive: [
        "Automatic multi-stage PF controller supporting 8, 12, 14, or 16 symmetrical or binary steps.",
        "Low-loss, self-healing metallized polypropylene (MPP) capacitors with overpressure safety.",
        "Heavy copper busbar matrix rated for 1.5x continuous overcurrent capacity.",
        "Thermal protection with internal ambient thermostat and high-CFM exhaust fan louvers.",
        "Comprehensive alarms: under-voltage, over-voltage, high THD, step failure, and over-temperature.",
        "Manual / Auto selector switch for straightforward testing and commissioned servicing."
      ],
      benefits: [
        "Completely eliminates monthly utility low power factor penalty charges.",
        "Reduces apparent power (kVA) demand, freeing up transformer capacity for factory expansion.",
        "Lowers technical distribution I²R losses in internal cabling and transformers.",
        "Rapid investment payback, typically achieved in 6 to 12 months from utility bill savings."
      ]
    },
    "hybrid-power-quality-system": {
      slug: "hybrid-power-quality-system",
      name: "Hybrid Power quality System",
      title: "Hybrid Power Quality Management System",
      shortDescription: "Cutting-edge hybrid architecture combining Active Harmonic Filters with fast capacitor banks for comprehensive power correction.",
      intro: "An advanced, unified power quality solution integrating solid-state Active Harmonic Filters (AHF) with detuned capacitor banks to mitigate harmonics, balance phases, and correct power factor in one compact system.",
      image: "images/detune harmonic reactor.jpeg",
      photos: [
        "images/detune harmonic reactor.jpeg",
        "images/active filters.jpeg"
      ],
      imagePlaceholderText: "Hybrid Power Quality System",
      seo: {
        title: "Hybrid Power Quality Management Systems | Krapali Electro Craft",
        description: "Combined active harmonic filters and detuned capacitor banks for simultaneous harmonic mitigation and power factor correction."
      },
      whyChooseUs: [
        { title: "Dual Harmonics & Reactive Correction", desc: "Eliminates harmful harmonic currents while delivering dynamic reactive power compensation." },
        { title: "Optimized Total Cost of Ownership", desc: "Uses cost-effective capacitors for bulk reactive power and active electronics for harmonic cancellation." },
        { title: "Three-Phase Load Balancing", desc: "Actively balances current across phases, mitigating neutral current buildup and transformer heating." },
        { title: "Compliance with IEEE 519-2022", desc: "Guarantees Total Harmonic Distortion of Current (THDi) remains well below statutory 5% limits." }
      ],
      comprehensive: [
        "Modular IGBT-based active filter modules running high-frequency DSP control algorithms.",
        "Automatic detuned capacitor stages for baseline displacement power factor correction.",
        "High-accuracy split-core current transformers monitoring incoming feeder waveforms.",
        "7-inch color touchscreen HMI with waveform displays, harmonic spectrums, and energy logging.",
        "Dynamic stepless compensation of leading and lagging reactive power within sub-cycle speeds.",
        "Communication interfaces: Modbus RTU, Ethernet TCP/IP, and IoT cloud dashboard integration."
      ],
      benefits: [
        "Protects sensitive automation, PLCs, and drive systems from erratic tripping and harmonic distortion.",
        "Eliminates transformer overheating, neutral cable overload, and premature component degradation.",
        "Ensures full regulatory compliance with utility grid standards and BEE quality mandates.",
        "Lower capital expenditure compared to full active filter systems while providing superior performance."
      ]
    },
    "active-filters": {
      slug: "active-filters",
      name: "Active Filters",
      title: "Active Harmonic Filters (AHF)",
      shortDescription: "High-speed DSP-controlled solid-state filters providing real-time cancellation of harmonic frequencies up to the 50th order.",
      intro: "State-of-the-art power electronics solutions that dynamically inject equal-and-opposite harmonic currents to actively neutralize electrical distortion produced by variable frequency drives (VFDs), UPS, and rectifiers.",
      image: "images/active filters.jpeg",
      photos: [
        "images/active filters.jpeg"
      ],
      imagePlaceholderText: "Active Harmonic Filter",
      seo: {
        title: "Active Harmonic Filters (AHF) | Krapali Electro Craft",
        description: "Real-time mitigation of 2nd to 50th order harmonics with sub-5ms response time and three-phase load balancing."
      },
      whyChooseUs: [
        { title: "Eliminates 2nd through 50th Harmonics", desc: "Selectively or comprehensively mitigates all orders of harmonic frequencies simultaneously." },
        { title: "Ultra-Fast Response (<5 ms)", desc: "Instantaneously adapts to dynamic, rapidly shifting non-linear loads with zero resonance risk." },
        { title: "Modular & Scalable Rack Architecture", desc: "Hot-swappable 30A, 50A, 100A, and 150A modules allow easy capacity expansion as plant loads grow." },
        { title: "Programmable Compensation Priorities", desc: "Configure prioritizations between harmonic mitigation, reactive power compensation, and phase balancing." }
      ],
      comprehensive: [
        "3-Level NPC inverter topology delivering high efficiency (>97.5%) and low thermal losses.",
        "Digital Signal Processor (DSP) with FPGA architecture for ultra-high sampling rates (20 kHz+).",
        "Simultaneous compensation of both current harmonics and displacement power factor (cos φ).",
        "Zero resonance risk with existing plant capacitors or utility grid impedances.",
        "Touchscreen graphical display with full harmonic spectrum analysis up to the 50th harmonic.",
        "Built-in protections against overcurrent, overvoltage, short circuit, and IGBT over-temperature."
      ],
      benefits: [
        "Eliminates erratic PLC reboots, sensor glitches, and communication bus errors.",
        "Prevents power factor capacitors and detuned reactors from premature thermal burnout.",
        "Reduces heat dissipation in power transformers, switchboards, and distribution cables.",
        "Achieves strict compliance with IEEE 519-2022 guidelines and CEA regulations."
      ]
    },
    "shunt-reactor-leading-pf-solution": {
      slug: "shunt-reactor-leading-pf-solution",
      name: "Shunt reactor (for leading PF solution)",
      title: "Shunt Reactor Systems for Leading Power Factor Correction",
      shortDescription: "Engineered inductive compensation reactors designed to absorb excess capacitive charging current and prevent leading PF penalties.",
      intro: "High-linearity iron-core and air-core shunt reactor systems engineered to compensate for capacitive charging currents generated by long underground cables, lightly loaded transformers, and data center UPS systems.",
      image: "images/shuntreactor.jpeg",
      photos: [
        "images/shuntreactor.jpeg"
      ],
      imagePlaceholderText: "Shunt Reactor Panel",
      seo: {
        title: "Shunt Reactor Leading Power Factor Solutions | Krapali Electro Craft",
        description: "Inductive compensation reactors to eliminate leading power factor penalties under kVAh billing tariffs."
      },
      whyChooseUs: [
        { title: "Eliminates Leading PF Penalties", desc: "Neutralizes capacitive reactive energy (kVArh) to prevent expensive utility penalty charges on modern kVAh billing." },
        { title: "Stabilizes Line Voltage Profiles", desc: "Suppresses Ferranti effect and prevents terminal overvoltage during light load and night shifts." },
        { title: "High-Linearity Magnetic Core", desc: "Low-loss magnetic laminations maintain linear inductance even during severe voltage variations." },
        { title: "Automatic Stepped or Solid-State Switching", desc: "Integrated controller switches reactor stages precisely as plant load drops to maintain target PF." }
      ],
      comprehensive: [
        "Custom ratings from 5 kVAR up to 500 kVAR for 415V, 3.3kV, 6.6kV, and 11kV distribution systems.",
        "Class H insulation with high-temperature varnish vacuum pressure impregnation (VPI).",
        "Copper and electrolytic grade aluminum winding configurations with electrostatic screening.",
        "Built-in thermal protection with embedded RTD temperature sensors and trip relays.",
        "Low acoustic noise design with precision air-gapped core construction.",
        "Available as freestanding panel assemblies or modular indoor/outdoor enclosures."
      ],
      benefits: [
        "Stops utility penalties under kVAh billing tariff regimes where leading power factor is billed as a penalty.",
        "Prevents dangerous voltage rise on long underground HT/LT distribution cable networks.",
        "Reduces generator trip risks caused by reverse reactive power flow during grid outages.",
        "Improves overall transformer life expectancy and operational stability."
      ]
    },
    "detune-harmonics-block-reactors": {
      slug: "detune-harmonics-block-reactors",
      name: "De-tune harmonics block Reactors",
      title: "De-tuned Harmonics Blocking Reactors (Detuned Filter Reactors)",
      shortDescription: "Heavy-duty three-phase detuned harmonic blocking reactors engineered to prevent harmonic resonance and protect capacitor banks in non-linear power networks.",
      intro: "High-linearity three-phase iron-core detuned harmonic blocking reactors designed to be connected in series with power factor correction capacitors, preventing electrical resonance, filtering harmonic currents, and safeguarding industrial capacitors against thermal burnout.",
      image: "images/detune harmonic reactor.jpeg",
      photos: [
        "images/detune harmonic reactor.jpeg"
      ],
      imagePlaceholderText: "De-tune Harmonics Block Reactor",
      seo: {
        title: "De-tune Harmonics Block Reactors | Krapali Electro Craft",
        description: "High-linearity 5.67%, 7%, and 14% detuned harmonic blocking filter reactors for APFC and RTPFC capacitor banks compliant with IEC 60076-6."
      },
      whyChooseUs: [
        { title: "High Magnetic Linearity (>180% In)", desc: "Maintains linear inductance even under extreme harmonic current distortion and voltage surges without core saturation." },
        { title: "Precision Detuning Factors (5.67%, 7%, 14%)", desc: "Shifts series resonant frequency safely below prevailing dominant harmonic orders (5th, 7th, 11th) to prevent resonance amplification." },
        { title: "Class H / 200°C Thermal Endurance", desc: "Constructed with high-grade copper/aluminum conductors, Nomex insulation, and multi-air-gap CRGO cores." },
        { title: "Vacuum Pressure Impregnation (VPI)", desc: "Treated under high vacuum with polyester resin for silent low-hum operation (<60 dB) and high dielectric strength." }
      ],
      comprehensive: [
        "Available for nominal system voltages of 415V, 440V, 480V, 690V, and medium voltage applications.",
        "Standard tuning factors: p = 7% (189 Hz series resonance), p = 5.67% (210 Hz), and p = 14% (134 Hz).",
        "Low-loss, grain-oriented cold rolled silicon steel (CRGO) magnetic core with precision non-magnetic air gap spacers.",
        "Built-in micro-switch thermal protection (normally-closed dry contact at 125°C/130°C) embedded inside center coil winding.",
        "High-quality tin-plated copper terminal busbar lugs for reliable, low-resistance cable connections.",
        "100% routine tested for inductance tolerance (±3%), temperature rise, dielectric withstand, and insulation resistance per IEC 60076-6."
      ],
      benefits: [
        "Eliminates catastrophic harmonic resonance that causes power factor capacitors to explode or overheat.",
        "Dramatically reduces inrush switching transient currents during capacitor bank energization.",
        "Extends the operational lifespan of power factor correction capacitors and switching switchgear by up to 300%.",
        "Absorbs a percentage of 5th and 7th harmonic currents, reducing overall plant Total Harmonic Distortion (THD)."
      ]
    },
    "lighting-automation": {
      slug: "lighting-automation",
      name: "Lighting Automation",
      title: "Industrial & Commercial Lighting Automation Systems",
      shortDescription: "Smart energy-saving lighting control panels with astronomical timers, daylight harvesting, and occupancy sensing.",
      intro: "Centralized intelligent lighting control systems designed to dramatically slash electricity consumption across industrial warehouses, high bays, office complexes, and exterior perimeter lighting.",
      image: "",
      photos: [],
      imagePlaceholderText: "Lighting Automation System",
      seo: {
        title: "Industrial Lighting Automation Systems | Krapali Electro Craft",
        description: "Intelligent astronomical timer and sensor-based lighting control panels saving up to 60% energy."
      },
      whyChooseUs: [
        { title: "Astronomical Time Clock Automation", desc: "Automatically calculates daily sunset and sunrise times to control street and perimeter lighting with zero manual intervention." },
        { title: "Daylight Harvesting & Dimming", desc: "Integrates lux sensors to dynamically adjust indoor high bay light levels based on ambient natural sunlight." },
        { title: "Substantial Energy Savings (30-60%)", desc: "Eliminates lighting waste in unoccupied storage bays, production zones, and exterior pathways." },
        { title: "Centralized Remote Scheduling & SCADA", desc: "Manage zones, override schedules, and track energy usage via web dashboard or mobile app." }
      ],
      comprehensive: [
        "Multi-channel lighting control panels with latching contactors and manual override switches.",
        "Astronomical digital clocks, motion detectors, and outdoor photocell sensors.",
        "0-10V, DALI-2, and wireless mesh control protocols for individual fixture dimming.",
        "Dedicated energy metering logging kWh consumption per lighting circuit.",
        "Programmable scene controls: Production Shift, Cleaning Mode, Night Security, and Emergency Off.",
        "Enclosure built to IP55 / IP65 standard for reliable operation in dusty industrial environments."
      ],
      benefits: [
        "Slashes lighting electricity consumption by up to 60%, yielding immediate utility bill reductions.",
        "Prolongs the operating lifetime of LED luminaires by minimizing burning hours and heat buildup.",
        "Eliminates human error associated with manual switches being left on during daylight hours.",
        "Improves facility safety and security through consistent, automated illumination scheduling."
      ]
    },
    "isolation-transformer": {
      slug: "isolation-transformer",
      name: "Isolation Transformer (1 kVA to as per required)",
      title: "Industrial Isolation Transformers (Range 1 kVA to As Required)",
      shortDescription: "Precision dry-type isolation transformers providing galvanic isolation, electrostatic noise attenuation, and clean local ground reference from 1 kVA up to required capacity.",
      intro: "Engineered single-phase and three-phase dry-type isolation transformers designed to provide 100% galvanic separation, electrostatic noise shielding, and spike suppression between incoming mains and sensitive industrial equipment across ratings from 1 kVA up to customer-required capacity.",
      image: "images/isolation-transformer.svg",
      photos: [
        "images/isolation-transformer.svg"
      ],
      imagePlaceholderText: "Isolation Transformer 1 kVA to As Required",
      seo: {
        title: "Isolation Transformers (1 kVA to As Required) | Krapali Electro Craft",
        description: "Industrial galvanic isolation transformers from 1 kVA to custom ratings with Faraday electrostatic shielding, Class H insulation, and low noise design."
      },
      whyChooseUs: [
        { title: "Custom Ratings (1 kVA to As Required)", desc: "Tailored manufacturing from small 1 kVA single-phase control units up to large multi-kVA three-phase industrial installations." },
        { title: "Complete Galvanic Isolation", desc: "Physically isolates primary and secondary circuits with high dielectric breakdown strength (>2.5 kV) to prevent shock and ground loop hazards." },
        { title: "Faraday Electrostatic Shielding", desc: "Dual electrostatic copper shields attenuate common-mode noise, spikes, and high-frequency switching surges by over 90 dB." },
        { title: "Ultra-Clean Neutral-to-Earth Bond", desc: "Establishes a true isolated local neutral reference, reducing neutral-to-ground noise voltage (<1V) for sensitive CNC machines and server racks." }
      ],
      comprehensive: [
        "Wide power capacity range: 1 kVA up to 500+ kVA in single-phase (1-ph) and three-phase (3-ph) models.",
        "Custom input/output voltage ratios: 415V/415V, 415V/200V, 415V/110V, 480V/415V, 230V/230V, or site-specified voltages.",
        "Premium CRGO (Cold Rolled Grain Oriented) low-loss silicon steel core with precision non-magnetic air gaps.",
        "Vacuum Pressure Impregnation (VPI) with Class F / Class H (180°C/200°C) high-temperature insulation varnish.",
        "Off-circuit tap changers (±2.5%, ±5%) to compensate for persistent utility supply fluctuations.",
        "Enclosures engineered to IP21/IP23 indoor ventilated or IP54/IP55 weatherproof outdoor standards with low acoustic hum (<50 dB)."
      ],
      benefits: [
        "Shields expensive PLCs, CNC drives, laser cutters, and laboratory instruments from catastrophic grid voltage transients.",
        "Eliminates mysterious sensor glitches and communication drops caused by common-mode electrical noise.",
        "Prevents harmonic distortion and electrical noise from non-linear plant loads reflecting back onto utility supplies.",
        "Ensures operator safety and compliance with IS 2026, IS 11171, and IEC 61558-2-4 standards."
      ]
    }
  },

  team: [],

  // Valuable Customers / Client Organizations
  // To add a new customer, place your image in the "images/" folder and add an entry below:
  // e.g.: { name: "Company Name", logo: "images/company_name.jpeg", category: "Industry Category" }
  valuableCustomers: [
    {
      name: "Indian Air Force",
      logo: "images/airforce.jpeg",
      category: "Defense & Aerospace",
      engagementTag: "Defense Infrastructure & High-Reliability Electrical Auditing",
      desc: "Delivering mission-critical electrical safety audits, substation thermography, and uncompromised power reliability for high-security defense bases."
    },
    {
      name: "Indian Railways",
      logo: "images/indian_railway.jpeg",
      category: "Public Sector & Transportation",
      engagementTag: "Traction & Safety Power Audits, Substation Analysis",
      desc: "Conducting power quality analysis, trackside electrical audits, and non-contact thermal scans to ensure uninterrupted rail operations."
    },
    {
      name: "Ministry of Defence",
      logo: "images/ministry_of_defense.jpeg",
      category: "Government of India",
      engagementTag: "Government Defense Establishments & Safety Verification",
      desc: "Statutory electrical compliance verification, earthing audits, and preventive power diagnostics for vital national defense assets."
    },
    {
      name: "Adani",
      logo: "images/adani.jpeg",
      category: "Energy, Ports & Heavy Infrastructure",
      engagementTag: "Mega Infrastructure & Substation Power Quality Audits",
      desc: "Large-scale energy management studies, harmonic mitigation, and electrical safety inspections across industrial and logistics infrastructure."
    },
    {
      name: "Wonder Cement",
      logo: "images/wonder_cement.jpeg",
      category: "Heavy Industry & Manufacturing",
      engagementTag: "Harmonic Mitigation, Thermography & Heavy Motor Load Studies",
      desc: "Comprehensive plant-wide electrical auditing, kiln drive harmonic studies, and transformer load balancing for heavy cement manufacturing."
    },
    {
      name: "Hero MotoCorp",
      logo: "images/hero.jpeg",
      category: "Automotive & Manufacturing",
      engagementTag: "Automated Line Power Quality & Energy Efficiency Studies",
      desc: "Energy benchmarking and power factor stabilization across high-speed robotic welding and automotive assembly facilities."
    },
    {
      name: "Bals",
      logo: "images/bals.jpeg",
      category: "Industrial Switchgear & Plugs",
      engagementTag: "Industrial Plug & Socket Solutions Partner",
      desc: "Technical collaboration for world-class IP44/IP67 industrial plugs, sockets, and customized polycarbonate distribution enclosures."
    },
    {
      name: "Mennekes",
      logo: "images/mennekens.jpeg",
      category: "Industrial Power Connections",
      engagementTag: "Industrial Receptacle & Power Connection Partner",
      desc: "Certified product association providing premium heavy-duty industrial plugs, switch receptacles, and distribution combinations."
    },
    {
      name: "Sinexcel",
      logo: "images/sineexcel.jpeg",
      category: "Active Power Electronics",
      engagementTag: "Active Harmonic Filter & SVG Technology Partner",
      desc: "Deployment of state-of-the-art solid-state Active Harmonic Filters (AHF) and dynamic power quality compensation systems."
    },
    {
      name: "Neptune",
      logo: "images/neptune.jpeg",
      category: "Power Quality & Capacitor Solutions",
      engagementTag: "Power Factor & Energy Management Solutions",
      desc: "Technical association for high-efficiency capacitor systems, detuned filter reactors, and digital energy management."
    },
    {
      name: "Nitin Spinners",
      logo: "images/nitin.jpeg",
      category: "Textiles & Manufacturing",
      engagementTag: "Continuous Spinning Mill Energy & Electrical Audits",
      desc: "Electrical safety assessments, thermal hot-spot profiling, and motor energy optimization for continuous textile spinning operations."
    },
    {
      name: "Wings",
      logo: "images/wings.jpeg",
      category: "Manufacturing & Commercial Enterprise",
      engagementTag: "Electrical Safety & Predictive Maintenance Studies",
      desc: "Comprehensive electrical infrastructure audits, load balancing, and thermography scans to safeguard plant productivity."
    }
  ],

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
        title: "Electrical Safety & Distribution Audit | Krapali Electro Craft",
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
        title: "Certified Industrial Energy Audit Services | Krapali Electro Craft",
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
        title: "Industrial Lighting & Lux Optimization Audit | Krapali Electro Craft",
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
        title: "Industrial Power Distribution Engineering | Krapali Electro Craft",
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
        title: "Industrial Power Quality & Harmonic Mitigation | Krapali Electro Craft",
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
        title: "Electric Load Study | Krapali Electro Craft",
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
        title: "Thermography Analysis | Krapali Electro Craft",
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
        title: "Earth Pit Testing | Krapali Electro Craft",
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
        title: "Infrared Thermography Inspection Services | Krapali Electro Craft",
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
        title: "Electrical Load Flow Study & Capacity Analysis | Krapali Electro Craft",
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
        title: "Power Quality Analysis & Disturbances Study | Krapali Electro Craft",
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
        title: "Power Factor Study & APFC Optimization | Krapali Electro Craft",
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
