// Reusable UI Components for Krapali Electro Craft
window.Components = {
  // Navigation / Header Component
  Header: function(activePath) {
    const company = window.CONFIG.company;
    const services = Object.values(window.CONFIG.services).sort((a, b) => a.navOrder - b.navOrder);
    const studies = Object.values(window.CONFIG.studies);
    const products = Array.isArray(window.CONFIG.products) ? window.CONFIG.products : Object.values(window.CONFIG.products);
    // Helper to determine if a route group is active
    const isServicesActive = activePath.startsWith('#/services/');
    const isStudiesActive = activePath.startsWith('#/study/');
    const isProductsActive = activePath.startsWith('#/products/') || activePath.startsWith('#/product/');
    const isAssociationsActive = activePath === '#/company-associations' || activePath === '#/associations';
    const isHomeActive = activePath === '#/' || activePath === '';
    const isContactActive = activePath === '#/contact';

    // Generate dropdown items for Services
    const serviceItems = services.map(s => `
      <li><a href="#/services/${s.slug}" class="dropdown-item ${activePath === '#/services/' + s.slug ? 'active' : ''}">${s.title}</a></li>
    `).join('');

    const productItems = products.map(product => `
      <li><a href="#/products/${product.slug}" class="dropdown-item ${activePath === '#/products/' + product.slug || activePath === '#/product/' + product.slug ? 'active' : ''}">${product.name || product.title}</a></li>
    `).join('');

    // Generate dropdown items for Studies
    const studyItems = studies.map(s => `
      <li><a href="#/study/${s.slug}" class="dropdown-item ${activePath === '#/study/' + s.slug ? 'active' : ''}">${s.title}</a></li>
    `).join('');

    return `
      <header>

        <!-- Top Info Bar -->
        <div class="header-topbar">
          <div class="container topbar-container">
            <div class="topbar-contacts">
              <a href="tel:${company.phone}" class="topbar-contact-item">
                <i class="fa-solid fa-phone"></i>
                <span>${company.phone}</span>
              </a>
              <a href="https://wa.me/9198765432" class="topbar-contact-item" target="_blank" rel="noopener">
                <i class="fa-brands fa-whatsapp"></i>
                <span>WhatsApp</span>
              </a>
              <a href="mailto:${company.email}" class="topbar-contact-item">
                <i class="fa-solid fa-envelope"></i>
                <span>${company.email}</span>
              </a>
            </div>
            <div class="topbar-socials">
              <span class="topbar-follow-label">Follow Us:</span>
              <a href="#" class="topbar-social-link" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#" class="topbar-social-link" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
              <a href="#" class="topbar-social-link" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
              <a href="#" class="topbar-social-link" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <!-- Main Nav Bar -->
        <div class="header-navbar">
          <div class="container navbar-container">
            <a href="#/" class="logo" aria-label="Home">
              <img src="images/logo.png" alt="${company.name} Logo" class="logo-img"
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <span class="logo-fallback">
                <i class="fa-solid fa-bolt-lightning"></i>
                ${company.logoText}
              </span>
            </a>

            <nav>
              <ul class="nav-links" id="nav-links">
                <li class="nav-item ${isHomeActive ? 'active' : ''}">
                  <a href="#/" class="nav-link">Home</a>
                </li>

                <li class="nav-item ${isProductsActive ? 'active' : ''}">
                  <a class="nav-link" id="products-dropdown-toggle">Products <i class="fa-solid fa-chevron-down" style="font-size:0.7rem;"></i></a>
                  <ul class="dropdown-menu" id="products-menu">
                    ${productItems}
                  </ul>
                </li>

                <li class="nav-item ${isServicesActive ? 'active' : ''}">
                  <a class="nav-link" id="services-dropdown-toggle">Services <i class="fa-solid fa-chevron-down" style="font-size:0.7rem;"></i></a>
                  <ul class="dropdown-menu" id="services-menu">
                    ${serviceItems}
                  </ul>
                </li>

                <li class="nav-item ${isStudiesActive ? 'active' : ''}">
                  <a class="nav-link" id="study-dropdown-toggle">Studies <i class="fa-solid fa-chevron-down" style="font-size:0.7rem;"></i></a>
                  <ul class="dropdown-menu" id="study-menu">
                    ${studyItems}
                  </ul>
                </li>

                <li class="nav-item ${isAssociationsActive ? 'active' : ''}">
                  <a href="#/company-associations" class="nav-link">Company Associations</a>
                </li>

                <li class="nav-item ${isContactActive ? 'active' : ''}">
                  <a href="#/contact" class="nav-link">Contact Us</a>
                </li>
              </ul>
            </nav>

            <button class="hamburger" id="hamburger" aria-label="Toggle navigation">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>

      </header>
    `;
  },

  // Media Hero Carousel Component
  HeroCarousel: function(slides) {
    const slideElements = slides.map((slide, index) => {
      const activeClass = index === 0 ? 'active' : '';
      let mediaHtml = '';
      
      if (slide.type === 'video') {
        mediaHtml = `
          <video class="slide-media" autoplay loop muted playsinline poster="${slide.src.split('?')[0]}">
            <source src="${slide.src}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        `;
      } else {
        mediaHtml = `<img class="slide-media" src="${slide.src}" alt="${slide.placeholderText}" loading="${index === 0 ? 'eager' : 'lazy'}">`;
      }

      return `
        <div class="slide ${activeClass}" data-slide-id="${slide.id}">
          ${mediaHtml}
          <div class="slide-overlay"></div>
          <div class="slide-content">
            <h1>${slide.title}</h1>
            <p>${slide.subtitle}</p>
            <a href="${slide.ctaLink}" class="btn btn-accent">${slide.ctaText} <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      `;
    }).join('');

    const dots = slides.map((_, index) => `
      <button class="slider-dot ${index === 0 ? 'active' : ''}" data-slide-index="${index}" aria-label="Go to slide ${index + 1}"></button>
    `).join('');

    return `
      <section class="hero-slider">
        <div class="slider-container">
          ${slideElements}
        </div>
        <button class="slider-btn slider-btn-prev" id="slider-prev" aria-label="Previous slide">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button class="slider-btn slider-btn-next" id="slider-next" aria-label="Next slide">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
        <div class="slider-nav">
          ${dots}
        </div>
      </section>
    `;
  },

  // Home Enquiry Section Component
  EnquirySection: function() {
    const services = Object.values(window.CONFIG.services);
    const studies = Object.values(window.CONFIG.studies);
    
    const serviceOptions = services.map(s => `
      <option value="${s.title}">${s.title}</option>
    `).join('');
    
    const studyOptions = studies.map(s => `
      <option value="${s.title}">${s.title}</option>
    `).join('');

    return `
      <section class="enquiry-section">
        <div class="container enquiry-container">
          <div class="enquiry-header">
            <h3>Have a Requirement? Let's Discuss It.</h3>
            <p>Fill out this quick form and our engineering team will get back to you with analysis details.</p>
          </div>
          
          <div id="enquiry-success-message" class="submit-success" style="width:100%;">
            <i class="fa-solid fa-circle-check"></i> Thank you! Your booking request has been submitted successfully. We will call you shortly.
          </div>
          
          <form class="enquiry-form" id="enquiry-form" novalidate>
            <div class="form-group">
              <label for="enquiry-name">Full Name</label>
              <input type="text" id="enquiry-name" class="form-input" placeholder="e.g. Rajesh Kumar" required>
              <span class="error-message">Name is required</span>
            </div>
            
            <div class="form-group">
              <label for="enquiry-mobile">Mobile Number</label>
              <input type="tel" id="enquiry-mobile" class="form-input" placeholder="10-digit number" required pattern="^[0-9]{10}$">
              <span class="error-message">Enter a valid 10-digit phone number</span>
            </div>
            
            <div class="form-group">
              <label for="enquiry-email">Email Address</label>
              <input type="email" id="enquiry-email" class="form-input" placeholder="name@company.com" required>
              <span class="error-message">Enter a valid email address</span>
            </div>
            
            <div class="form-group">
              <label for="enquiry-service">Service Required</label>
              <select id="enquiry-service" class="form-input" required>
                <option value="" disabled selected>Select a Service</option>
                <optgroup label="Core Engineering Services">
                  ${serviceOptions}
                </optgroup>
                <optgroup label="System Studies & Diagnostics">
                  ${studyOptions}
                </optgroup>
                <option value="Other">Other Requirement</option>
              </select>
              <span class="error-message">Please select a service option</span>
            </div>
            
            <button type="submit" class="btn btn-accent">Book Now <i class="fa-solid fa-calendar-check"></i></button>
          </form>
        </div>
      </section>
    `;
  },

  // About Us Component
  AboutSection: function() {
    return `
      <section class="section reveal" id="about-us">
        <div class="container">
          <div class="grid-2">
            <div class="about-image-wrapper">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" alt="About Krapali Electro Craft" class="about-image">
              <div class="about-experience-badge">
                <h4>15+</h4>
                <p>Years of Engineering</p>
              </div>
            </div>
            
            <div>
              <h2>About Us</h2>
              <p><strong>Krapali Electro Craft</strong> is a premium engineering consultancy focused on improving industrial electrical system reliability, energy efficiency, and operational performance. We provide systematic electrical audits, energy studies, thermographic inspections, and power-quality solutions for industrial and commercial facilities.</p>
              <p>Our team comprises Bureau of Energy Efficiency (BEE) certified Energy Auditors, seasoned electrical design engineers, and certified thermographers committed to securing your operational uptime, plant safety, and utility cost efficiency.</p>
              
              <ul class="about-bullets">
                <li class="about-bullet-item">
                  <i class="fa-solid fa-circle-check"></i> Deep Industrial & Core Engineering Expertise
                </li>
                <li class="about-bullet-item">
                  <i class="fa-solid fa-circle-check"></i> Rigorous Electrical & Fire Safety Standards
                </li>
                <li class="about-bullet-item">
                  <i class="fa-solid fa-circle-check"></i> Highly Reliable, Zero-Downtime Inspections
                </li>
                <li class="about-bullet-item">
                  <i class="fa-solid fa-circle-check"></i> Measurable Energy & Cost Savings
                </li>
              </ul>
              
              <a href="#/contact" class="btn btn-primary">Learn More <i class="fa-solid fa-chevron-right"></i></a>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // Core Services Component (Cards grid)
  ServicesSection: function() {
    const services = Object.values(window.CONFIG.services);
    const serviceCards = services.map(s => `
      <div class="card">
        <div class="card-icon"><i class="fa-solid ${s.icon}"></i></div>
        <h3>${s.title}</h3>
        <p>${s.shortDescription}</p>
        <a href="#/services/${s.slug}" class="card-link">Learn More <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    `).join('');

    return `
      <section class="section section-light reveal" id="core-services">
        <div class="container">
          <div class="text-center">
            <h2>Our Core Services</h2>
            <p style="max-width: 600px; margin: 0 auto 3rem auto;">We offer structured engineering and auditing options to keep your facility compliant, efficient, and running safely.</p>
          </div>
          <div class="grid-3 card-grid">
            ${serviceCards}
          </div>
        </div>
      </section>
    `;
  },

  // Valuable Customers Component
  ValuableCustomersSection: function() {
    const rawCustomers = window.CONFIG.valuableCustomers || [];
    if (!rawCustomers.length) return '';

    const customerCards = rawCustomers.map(customer => {
      // Support object or string formats
      const isString = typeof customer === 'string';
      const logo = isString ? customer : (customer.logo || '');
      let name = !isString && customer.name ? customer.name : '';
      if (!name && logo) {
        // Derive company name from filename
        const filename = logo.split('/').pop().replace(/\.[^/.]+$/, "");
        name = filename.replace(/[_-]/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
      }
      const category = (!isString && customer.category) ? customer.category : 'Valued Client';

      return `
        <div class="customer-card">
          <div class="customer-logo-wrap">
            <img src="${logo}" alt="${name} Logo" class="customer-logo-img" loading="lazy"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="customer-logo-fallback" style="display:none;">
              <i class="fa-solid fa-building-columns"></i>
              <span>${name}</span>
            </div>
          </div>
          <h4 class="customer-name">${name}</h4>
          ${category ? `<span class="customer-category">${category}</span>` : ''}
        </div>
      `;
    }).join('');

    return `
      <section class="section section-customers reveal" id="valuable-customers">
        <div class="container">
          <div class="text-center">
            <div>
              <span class="customers-badge-tag"><i class="fa-solid fa-handshake"></i> Trusted Partnerships</span>
            </div>
            <h2>Our Valuable Customers</h2>
            <p class="customers-subtitle">
              Proudly trusted by leading government institutions, defense establishments, and manufacturing enterprises for professional power quality studies, electrical safety, and energy audits.
            </p>
          </div>
          <div class="customers-grid">
            ${customerCards}
          </div>

          <div class="customers-trust-bar">
            <div class="trust-bar-item">
              <i class="fa-solid fa-shield-halved trust-bar-icon"></i>
              <div class="trust-bar-text">
                <h5>BEE & CEA Aligned</h5>
                <p>Strict compliance with national electrical safety & energy standards</p>
              </div>
            </div>
            <div class="trust-bar-item">
              <i class="fa-solid fa-chart-line trust-bar-icon"></i>
              <div class="trust-bar-text">
                <h5>Zero-Disruption Audits</h5>
                <p>Non-contact infrared thermography & online disturbance logging</p>
              </div>
            </div>
            <div class="trust-bar-item">
              <i class="fa-solid fa-award trust-bar-icon"></i>
              <div class="trust-bar-text">
                <h5>Proven Industry Track Record</h5>
                <p>Deep engineering expertise across heavy manufacturing & defense sectors</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // Why Choose Us Component
  WhyChooseUsSection: function() {
    const points = [
      {
        icon: "fa-user-gear",
        title: "Engineering Expertise",
        desc: "Led by certified BEE energy auditors and senior design consultants with rich experience in heavy manufacturing systems."
      },
      {
        icon: "fa-magnifying-glass-chart",
        title: "Comprehensive Analysis",
        desc: "We perform deep-dive examinations of entire power loops rather than providing simple surface checking."
      },
      {
        icon: "fa-laptop-code",
        title: "Data-Driven Recommendations",
        desc: "Our reports are packed with numerical logging records, heat graphs, and simulated voltage profiles."
      },
      {
        icon: "fa-shield-heart",
        title: "Safety-Focused Approach",
        desc: "All calculations protect your personnel safety, limit fire hazards, and prevent component failure."
      },
      {
        icon: "fa-leaf",
        title: "Energy Efficiency",
        desc: "Structured action plans designed to systematically lower monthly utility bills and reduce site carbon footprints."
      },
      {
        icon: "fa-plug-circle-check",
        title: "Improved System Reliability",
        desc: "Locate loose connections and harmonic issues before they trigger breaker trips or destroy electronics."
      }
    ];

    const pointCards = points.map(p => `
      <div class="wcu-item">
        <div class="wcu-icon-box"><i class="fa-solid ${p.icon}"></i></div>
        <div class="wcu-content">
          <h4>${p.title}</h4>
          <p>${p.desc}</p>
        </div>
      </div>
    `).join('');

    return `
      <section class="section reveal" id="why-choose-us">
        <div class="container">
          <div class="text-center">
            <h2>Why Choose Us</h2>
            <p style="max-width: 600px; margin: 0 auto 3rem auto;">We deliver highly detailed engineering insights and practical optimization plans built around operations reliability.</p>
          </div>
          <div class="grid-2 card-grid">
            ${pointCards}
          </div>
        </div>
      </section>
    `;
  },

  // Footer Component
  Footer: function() {
    const company = window.CONFIG.company;
    const services = Object.values(window.CONFIG.services);

    const serviceLinks = services.map(s => `
      <li><a href="#/services/${s.slug}">${s.title}</a></li>
    `).join('');

    return `
      <footer>
        <div class="container footer-top">
          <div class="footer-col">
            <div class="footer-logo">
              <i class="fa-solid fa-bolt-lightning" style="color:var(--color-accent); margin-right:8px;"></i>
              ${company.logoText}<span>.</span>
            </div>
            <p class="footer-desc">Professional electrical auditing, certified energy studies, and diagnostic power-quality mitigation for heavy industrial systems and commercial centers.</p>
            <div class="footer-socials">
              <a href="#" class="footer-social-link" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
              <a href="#" class="footer-social-link" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="#" class="footer-social-link" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            </div>
          </div>
          
          <div class="footer-col">
            <h4>Services</h4>
            <ul class="footer-links">
              ${serviceLinks}
            </ul>
          </div>
          
          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul class="footer-links">
              <li><a href="#/">Home</a></li>
              <li><a href="#/#about-us">About Us</a></li>
              <li><a href="#/company-associations">Company Associations</a></li>
              <li><a href="#/#why-choose-us">Why Choose Us</a></li>
              <li><a href="#/study/thermography">Thermography Study</a></li>
              <li><a href="#/contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div class="footer-col">
            <h4>Contact Info</h4>
            <div class="footer-contact-item">
              <i class="fa-solid fa-location-dot"></i>
              <span>${company.address}</span>
            </div>
            <div class="footer-contact-item">
              <i class="fa-solid fa-phone"></i>
              <span>${company.phone}</span>
            </div>
            <div class="footer-contact-item">
              <i class="fa-solid fa-envelope"></i>
              <span>${company.email}</span>
            </div>
          </div>
        </div>
        
        <div class="container footer-bottom">
          <p>Copyright &copy; 2026 ${company.name}. All Rights Reserved.</p>
          <div class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    `;
  },

  // Breadcrumbs Generator
  Breadcrumbs: function(title, category) {
    return `
      <div class="breadcrumbs">
        <a href="#/">Home</a>
        <i class="fa-solid fa-chevron-right" style="font-size:0.7rem;"></i>
        <span>${category}</span>
        <i class="fa-solid fa-chevron-right" style="font-size:0.7rem;"></i>
        <span style="color:#ffffff;">${title}</span>
      </div>
    `;
  },

  // Service and Study Dedicated Detail Page Template
  ServiceStudyDetail: function(item, type) {
    const categoryName = type === 'service' ? 'Services' : 'Studies';
    const breadcrumbs = this.Breadcrumbs(item.title, categoryName);
    
    // Generate Why Choose Us points
    const wcuList = item.whyChooseUs.map(p => `
      <div class="wcu-item" style="background-color: var(--color-light-bg);">
        <div class="wcu-icon-box" style="background-color:rgba(0, 50, 98, 0.08); color:var(--color-primary);"><i class="fa-solid fa-circle-check"></i></div>
        <div class="wcu-content">
          <h4 style="color:var(--color-primary);">${p.title}</h4>
          <p style="font-size: 0.9rem;">${p.desc}</p>
        </div>
      </div>
    `).join('');

    // Generate comprehensive list checklist
    const compHeader = type === 'service' ? `Our Comprehensive ${item.title} Services` : `Our Comprehensive ${item.title} Methodology`;
    const checklistItems = item.comprehensive.map(c => `
      <li class="checklist-li">
        <i class="fa-solid fa-circle-check"></i>
        <span>${c}</span>
      </li>
    `).join('');

    // Generate benefits list checklist
    const benefitsList = item.benefits.map(b => `
      <li class="checklist-li">
        <i class="fa-solid fa-circle-check" style="color:var(--color-success);"></i>
        <span>${b}</span>
      </li>
    `).join('');

    return `
      <section class="inner-hero">
        <div class="container">
          ${breadcrumbs}
          <h1>${item.title}</h1>
          <p class="subtitle">${item.intro}</p>
        </div>
      </section>
      
      <section class="section">
        <div class="container">
          <div class="detail-grid">
            <div>
              <h2 style="margin-bottom:2rem;">Why Choose Us for ${item.title}?</h2>
              <div class="grid-2" style="grid-template-columns:1fr; gap:1.5rem; margin-bottom:3.5rem;">
                ${wcuList}
              </div>
              
              <div class="checklist-box" style="margin-bottom:3rem;">
                <h3>${compHeader}</h3>
                <ul class="checklist-ul">
                  ${checklistItems}
                </ul>
              </div>
              
              <div class="checklist-box" style="background-color: #ffffff; border-left-color: var(--color-success);">
                <h3 style="color:var(--color-success);">Benefits of Our ${item.title}</h3>
                <ul class="checklist-ul">
                  ${benefitsList}
                </ul>
              </div>
            </div>
            
            <div>
              <img src="${item.image}" alt="${item.imagePlaceholderText}" class="detail-sidebar-image">
              
              <div class="sidebar-contact-box">
                <i class="fa-solid fa-circle-question" style="font-size: 3rem; color:var(--color-accent); margin-bottom:1.5rem;"></i>
                <h3>Need Professional ${item.title}?</h3>
                <p>Contact our engineering desk in Jaipur to discuss parameters, timelines, and custom quotes.</p>
                <a href="#/contact" class="btn btn-accent btn-sm">Inquire Now <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // Product Dedicated Detail Page Template
  ProductDetail: function(product) {
    const breadcrumbs = this.Breadcrumbs(product.title || product.name, 'Products');
    const company = window.CONFIG.company;

    // Generate Why Choose Us points
    const wcuList = (product.whyChooseUs || []).map(p => `
      <div class="wcu-item" style="background-color: var(--color-light-bg);">
        <div class="wcu-icon-box" style="background-color:rgba(0, 50, 98, 0.08); color:var(--color-primary);"><i class="fa-solid fa-circle-check"></i></div>
        <div class="wcu-content">
          <h4 style="color:var(--color-primary);">${p.title}</h4>
          <p style="font-size: 0.9rem;">${p.desc}</p>
        </div>
      </div>
    `).join('');

    // Generate comprehensive list checklist
    const checklistItems = (product.comprehensive || []).map(c => `
      <li class="checklist-li">
        <i class="fa-solid fa-circle-check"></i>
        <span>${c}</span>
      </li>
    `).join('');

    // Generate benefits list checklist
    const benefitsList = (product.benefits || []).map(b => `
      <li class="checklist-li">
        <i class="fa-solid fa-circle-check" style="color:var(--color-success);"></i>
        <span>${b}</span>
      </li>
    `).join('');

    // Photos handling
    const mainImage = product.image || (product.photos && product.photos.length > 0 ? product.photos[0] : '');
    const photosList = product.photos || (mainImage ? [mainImage] : []);

    return `
      <section class="inner-hero">
        <div class="container">
          ${breadcrumbs}
          <h1>${product.title || product.name}</h1>
          <p class="subtitle">${product.intro || product.shortDescription}</p>
        </div>
      </section>
      
      <section class="section">
        <div class="container">
          <div class="detail-grid">
            <div>
              <h2 style="margin-bottom:2rem;">Why Choose Our ${product.name || product.title}?</h2>
              <div class="grid-2" style="grid-template-columns:1fr; gap:1.5rem; margin-bottom:3.5rem;">
                ${wcuList}
              </div>
              
              <div class="checklist-box" style="margin-bottom:3rem;">
                <h3>Key Features & Technical Specifications</h3>
                <ul class="checklist-ul">
                  ${checklistItems}
                </ul>
              </div>
              
              <div class="checklist-box" style="background-color: #ffffff; border-left-color: var(--color-success); margin-bottom:3.5rem;">
                <h3 style="color:var(--color-success);">Industrial Benefits & Operational Advantages</h3>
                <ul class="checklist-ul">
                  ${benefitsList}
                </ul>
              </div>

              <!-- Dedicated Contact Banner with Contact Us Button -->
              <div class="product-banner-cta">
                <div class="product-banner-cta-content">
                  <div class="product-banner-icon"><i class="fa-solid fa-headset"></i></div>
                  <div>
                    <h3>Ready to Order or Need Technical Guidance?</h3>
                    <p>Contact our engineering sales department for customized panel configurations, pricing, and on-site delivery schedules.</p>
                  </div>
                </div>
                <a href="#/contact" class="btn btn-accent btn-lg">Contact Us <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
            
            <div>
              <!-- Photos Section -->
              <div class="product-photos-panel">
                <div class="product-photos-header">
                  <h4><i class="fa-solid fa-camera"></i> Product Photos</h4>
                  ${photosList.length > 1 ? `<span class="photo-count-badge">${photosList.length} Photos</span>` : ''}
                </div>
                
                <div class="product-main-photo-frame">
                  ${mainImage ? `
                    <img src="${mainImage}" alt="${product.imagePlaceholderText || product.title || product.name}" class="product-featured-img" id="product-featured-image" loading="lazy"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="photo-placeholder-box" style="display:none;">
                      <i class="fa-solid fa-bolt-lightning"></i>
                      <p><strong>${product.name || product.title}</strong></p>
                    </div>
                  ` : `
                    <div class="photo-placeholder-box">
                      <i class="fa-solid fa-image"></i>
                      <p><strong>${product.name || product.title}</strong></p>
                    </div>
                  `}
                </div>

                ${photosList.length > 1 ? `
                  <!-- Product Photo Gallery Thumbnails -->
                  <div class="product-gallery-strip">
                    ${photosList.map((photo, i) => `
                      <div class="product-gallery-thumb ${i === 0 ? 'active' : ''}" onclick="const feat = document.getElementById('product-featured-image'); if(feat) feat.src = '${photo}'; document.querySelectorAll('.product-gallery-thumb').forEach(el=>el.classList.remove('active')); this.classList.add('active');">
                        <img src="${photo}" alt="Thumbnail ${i + 1}" loading="lazy">
                      </div>
                    `).join('')}
                  </div>
                ` : ''}
              </div>

              <!-- Sidebar Contact Us Box with Contact Us Button -->
              <div class="sidebar-contact-box" style="margin-top:2rem;">
                <i class="fa-solid fa-circle-question" style="font-size: 3rem; color:var(--color-accent); margin-bottom:1.5rem;"></i>
                <h3>Need Quote or Datasheet?</h3>
                <p>Speak directly with our technical team in Jaipur to discuss sizing, quotation, and custom enclosure specifications.</p>
                <a href="#/contact" class="btn btn-accent btn-sm" style="width: 100%; justify-content: center; margin-bottom: 0.75rem;">Contact Us <i class="fa-solid fa-arrow-right"></i></a>
                <a href="tel:${company.phone}" class="btn btn-primary btn-sm" style="width: 100%; justify-content: center;"><i class="fa-solid fa-phone"></i> ${company.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // Contact Us Page Component
  ContactPage: function() {
    const company = window.CONFIG.company;
    
    return `
      <section class="inner-hero">
        <div class="container">
          <div class="breadcrumbs">
            <a href="#/">Home</a>
            <i class="fa-solid fa-chevron-right" style="font-size:0.7rem;"></i>
            <span style="color:#ffffff;">Contact Us</span>
          </div>
          <h1>Contact Us</h1>
          <p class="subtitle">Reach out to our electrical engineering and energy auditing consultation desk in Jaipur.</p>
        </div>
      </section>
      
      <section class="section">
        <div class="container">
          <div class="contact-grid">
            <div>
              <h2>Contact Information</h2>
              <p style="margin-bottom: 2.5rem;">Get in touch directly or visit our office. Our expert team is ready to analyze your power distribution and energy savings profile.</p>
              
              <div class="contact-info-list">
                <div class="contact-info-item">
                  <div class="contact-info-icon"><i class="fa-solid fa-location-dot"></i></div>
                  <div class="contact-info-text">
                    <h4>Office Location</h4>
                    <p>${company.address}</p>
                  </div>
                </div>
                
                <div class="contact-info-item">
                  <div class="contact-info-icon"><i class="fa-solid fa-phone"></i></div>
                  <div class="contact-info-text">
                    <h4>Phone Number</h4>
                    <p>${company.phone}</p>
                  </div>
                </div>
                
                <div class="contact-info-item">
                  <div class="contact-info-icon"><i class="fa-solid fa-envelope"></i></div>
                  <div class="contact-info-text">
                    <h4>Email Address</h4>
                    <p><a href="mailto:${company.email}">${company.email}</a></p>
                  </div>
                </div>
                
                <div class="contact-info-item">
                  <div class="contact-info-icon"><i class="fa-solid fa-clock"></i></div>
                  <div class="contact-info-text">
                    <h4>Working Hours</h4>
                    <p>${company.workingHours}</p>
                  </div>
                </div>
              </div>
              
              <div class="contact-map-wrapper">
                <iframe src="${company.mapEmbedUrl}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Office Location Map"></iframe>
              </div>
            </div>
            
            <div>
              <div class="contact-form-box">
                <h3>Get In Touch</h3>
                <p style="font-size: 0.95rem; margin-bottom: 2rem;">Fill out your service or study requirements below. Our engineering lead will respond within 24 hours.</p>
                
                <div id="contact-success-message" class="submit-success">
                  <i class="fa-solid fa-circle-check"></i> Thank you for contacting us. Our team will get back to you shortly.
                </div>
                
                <form id="contact-form" novalidate>
                  <div class="form-group">
                    <label for="contact-name">Name</label>
                    <input type="text" id="contact-name" class="form-input" placeholder="e.g. Rajesh Kumar" required>
                    <span class="error-message">Name is required</span>
                  </div>
                  
                  <div class="form-group">
                    <label for="contact-phone">Phone Number</label>
                    <input type="tel" id="contact-phone" class="form-input" placeholder="e.g. 9876543210" required pattern="^[0-9]{10}$">
                    <span class="error-message">Enter a valid 10-digit phone number</span>
                  </div>
                  
                  <div class="form-group">
                    <label for="contact-email">Email Address</label>
                    <input type="email" id="contact-email" class="form-input" placeholder="name@company.com" required>
                    <span class="error-message">Enter a valid email address</span>
                  </div>
                  
                  <div class="form-group">
                    <label for="contact-message">Message</label>
                    <textarea id="contact-message" class="form-input" placeholder="Please outline your system capacity, loads, or auditing requirements here..." required></textarea>
                    <span class="error-message">Message content is required</span>
                  </div>
                  
                  <button type="submit" class="btn btn-accent" style="width: 100%;">Submit Inquiry <i class="fa-solid fa-paper-plane"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // Company Associations Dedicated Page
  CompanyAssociationsPage: function() {
    const company = window.CONFIG.company;
    const rawCustomers = window.CONFIG.valuableCustomers || [];

    const associationCards = rawCustomers.map(customer => {
      const isString = typeof customer === 'string';
      const logo = isString ? customer : (customer.logo || '');
      let name = !isString && customer.name ? customer.name : '';
      if (!name && logo) {
        const filename = logo.split('/').pop().replace(/\.[^/.]+$/, "");
        name = filename.replace(/[_-]/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
      }
      const category = (!isString && customer.category) ? customer.category : 'Valued Associate';

      // Specific engagement highlights for prominent organizations
      let engagementTag = (!isString && customer.engagementTag) ? customer.engagementTag : "Power Quality & Electrical Consulting";
      let desc = (!isString && customer.desc) ? customer.desc : "Collaborating on advanced power diagnostics, BEE-aligned energy audits, thermal hot-spot profiling, and specialized industrial switchgear solutions.";

      return `
        <div class="association-card reveal">
          <div class="association-card-top">
            <div class="association-logo-wrap">
              <img src="${logo}" alt="${name} Logo" class="customer-logo-img" loading="lazy"
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div class="customer-logo-fallback" style="display:none;">
                <i class="fa-solid fa-building-columns"></i>
                <span>${name}</span>
              </div>
            </div>
            <span class="customer-category">${category}</span>
          </div>
          <div class="association-card-body">
            <h3 class="association-name">${name}</h3>
            <div class="association-badge">
              <i class="fa-solid fa-circle-check"></i> ${engagementTag}
            </div>
            <p class="association-desc">${desc}</p>
          </div>
          <div class="association-card-footer">
            <span class="association-status"><i class="fa-solid fa-shield-halved"></i> Verified Association</span>
          </div>
        </div>
      `;
    }).join('');

    return `
      <!-- Inner Hero -->
      <section class="inner-hero">
        <div class="container">
          <div class="breadcrumbs">
            <a href="#/">Home</a>
            <i class="fa-solid fa-chevron-right" style="font-size:0.7rem;"></i>
            <span style="color:#ffffff;">Company Associations</span>
          </div>
          <h1>Company Associations</h1>
          <p class="subtitle">Trusted long-standing partnerships and technical associations across India's premier defense forces, public sector transport systems, and heavy manufacturing leaders.</p>
        </div>
      </section>

      <!-- Trust Metrics Bar -->
      <section style="background: #ffffff; border-bottom: 1px solid var(--color-border); padding: 2rem 0;">
        <div class="container">
          <div class="customers-trust-bar" style="margin-top:0;">
            <div class="trust-bar-item">
              <i class="fa-solid fa-shield-halved trust-bar-icon"></i>
              <div class="trust-bar-text">
                <h5>Defense & Government Trust</h5>
                <p>Proudly serving Indian Air Force, Ministry of Defence, and Indian Railways</p>
              </div>
            </div>
            <div class="trust-bar-item">
              <i class="fa-solid fa-award trust-bar-icon"></i>
              <div class="trust-bar-text">
                <h5>Statutory Compliance</h5>
                <p>BEE, CEA 2010 safety, and IEEE 519 harmonic mitigation standards</p>
              </div>
            </div>
            <div class="trust-bar-item">
              <i class="fa-solid fa-chart-line trust-bar-icon"></i>
              <div class="trust-bar-text">
                <h5>Measurable Impact</h5>
                <p>Average 12-25% reduction in plant power losses and zero unplanned trips</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Associations Section -->
      <section class="section">
        <div class="container">
          <div class="text-center" style="max-width: 760px; margin: 0 auto 3.5rem;">
            <div><span class="customers-badge-tag"><i class="fa-solid fa-handshake"></i> Institutional Engagements</span></div>
            <h2>Our Valued Client Associations</h2>
            <p style="color: var(--color-muted); font-size: 1.05rem; line-height: 1.7;">
              From high-security defense bases requiring zero-downtime reliability to massive continuous manufacturing facilities, our certified engineers deliver uncompromising electrical audit and power quality excellence.
            </p>
          </div>

          <div class="associations-grid">
            ${associationCards}
          </div>
        </div>
      </section>

      <!-- Key Industry Sectors Banner -->
      <section class="section" style="background: #F8FAFC; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
        <div class="container">
          <div class="text-center" style="max-width: 700px; margin: 0 auto 3rem;">
            <h2>Sectors We Proudly Serve</h2>
            <p style="color: var(--color-muted);">Our specialized consulting and custom-built electrical solutions are engineered to meet the unique challenges of diverse high-demand industries.</p>
          </div>

          <div class="sectors-grid">
            <div class="sector-card">
              <div class="sector-icon"><i class="fa-solid fa-jet-fighter"></i></div>
              <h4>Defense & Aerospace</h4>
              <p>Critical power reliability, radar substation audits, and secure facility electrical safety compliant with national defense norms.</p>
            </div>
            <div class="sector-card">
              <div class="sector-icon"><i class="fa-solid fa-train"></i></div>
              <h4>Railways & Public Transit</h4>
              <p>Traction substation studies, trackside switchgear verification, and predictive thermography for continuous mass transit uptime.</p>
            </div>
            <div class="sector-card">
              <div class="sector-icon"><i class="fa-solid fa-industry"></i></div>
              <h4>Heavy Process & Cement</h4>
              <p>Kiln drive harmonics, transformer load balancing, power factor correction, and high-voltage motor protection.</p>
            </div>
            <div class="sector-card">
              <div class="sector-icon"><i class="fa-solid fa-car"></i></div>
              <h4>Automotive & Robotics</h4>
              <p>Transient-free RTPFC panels, dynamic welding load compensation, and harmonic filtering for automated robotic lines.</p>
            </div>
            <div class="sector-card">
              <div class="sector-icon"><i class="fa-solid fa-shirt"></i></div>
              <h4>Textiles & Spinning Mills</h4>
              <p>Detailed energy benchmarking, inverter drive harmonic studies, and fire risk mitigation through thermal infrared scans.</p>
            </div>
            <div class="sector-card">
              <div class="sector-icon"><i class="fa-solid fa-hospital"></i></div>
              <h4>Healthcare & Data Centers</h4>
              <p>Medical-grade isolation transformer deployment, zero-interruption UPS power audits, and harmonic cancellation.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Partnership CTA -->
      <section class="section" style="padding: 5rem 0;">
        <div class="container">
          <div class="association-cta-box">
            <div class="association-cta-content">
              <span class="badge-accent"><i class="fa-solid fa-bolt-lightning"></i> Enterprise Partnership</span>
              <h2>Associate Your Organization with Krapali Electro Craft</h2>
              <p>Whether you require a statutory BEE Energy Audit, an urgent thermography hot-spot inspection, or custom-engineered harmonic blocking reactors, our certified engineers are ready to assist.</p>
              <div class="association-cta-actions">
                <a href="#/contact" class="btn btn-accent">Request Consultation <i class="fa-solid fa-arrow-right"></i></a>
                <a href="tel:${company.phone}" class="btn btn-outline" style="color:#ffffff; border-color:rgba(255,255,255,0.4);">
                  <i class="fa-solid fa-phone"></i> Call Direct: ${company.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
};
