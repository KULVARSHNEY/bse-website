// Client-Side Router for Apex Power & Energy Solutions Single Page App
window.Router = {
  // Mount target element
  mountNode: null,

  // Initialize the router
  init: function(mountId) {
    this.mountNode = document.getElementById(mountId);
    if (!this.mountNode) {
      console.error(`Mount node with ID "${mountId}" not found.`);
      return;
    }

    // Bind hash change and initial page load listeners
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('load', () => this.handleRoute());
  },

  // Route handler
  handleRoute: function() {
    const hash = window.location.hash || '#/';
    let pageContentHtml = '';
    let seoTitle = window.CONFIG.company.name + " | Electrical Engineering & Energy Consulting";
    let seoDesc = "Apex Power & Energy Solutions provides industrial electrical auditing, safety inspections, certified energy audits, and power quality solutions.";

    // Match routes
    if (hash === '#/' || hash === '') {
      // Home Page
      pageContentHtml = `
        <main>
          ${window.Components.HeroCarousel(window.CONFIG.heroSlides)}
          ${window.Components.EnquirySection()}
          ${window.Components.AboutSection()}
          ${window.Components.ServicesSection()}
          ${window.Components.WhyChooseUsSection()}
        </main>
      `;
    } else if (hash.startsWith('#/services/')) {
      // Service Detail Page
      const slug = hash.replace('#/services/', '');
      const service = window.CONFIG.services[slug];
      
      if (service) {
        pageContentHtml = `
          <main>
            ${window.Components.ServiceStudyDetail(service, 'service')}
          </main>
        `;
        seoTitle = service.seo.title;
        seoDesc = service.seo.description;
      } else {
        pageContentHtml = this.render404();
      }
    } else if (hash.startsWith('#/study/')) {
      // Study Detail Page
      const slug = hash.replace('#/study/', '');
      const study = window.CONFIG.studies[slug];
      
      if (study) {
        pageContentHtml = `
          <main>
            ${window.Components.ServiceStudyDetail(study, 'study')}
          </main>
        `;
        seoTitle = study.seo.title;
        seoDesc = study.seo.description;
      } else {
        pageContentHtml = this.render404();
      }
    } else if (hash === '#/contact') {
      // Contact Us Page
      pageContentHtml = `
        <main>
          ${window.Components.ContactPage()}
        </main>
      `;
      seoTitle = "Contact Us | Apex Power & Energy Solutions";
      seoDesc = "Get in touch with Apex Power & Energy Solutions in Jaipur for professional electrical audits, power studies, and consulting quotes.";
    } else {
      // 404 Page
      pageContentHtml = this.render404();
    }

    // Assemble final page frame (Header + Content + Footer)
    this.mountNode.innerHTML = `
      ${window.Components.Header(hash)}
      ${pageContentHtml}
      ${window.Components.Footer()}
    `;

    // Apply SEO changes
    this.updateSEO(seoTitle, seoDesc);

    // Reset window scroll to top instantly
    window.scrollTo(0, 0);

    // Notify App module to attach event listeners to newly mounted elements
    if (window.App && typeof window.App.initPageEvents === 'function') {
      window.App.initPageEvents(hash);
    }
  },

  // Update document title and meta description dynamically
  updateSEO: function(title, description) {
    document.title = title;
    
    // Find or create meta description tag
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  },

  // Fallback 404 markup
  render404: function() {
    return `
      <main class="section section-light" style="display:flex; align-items:center; min-height:60vh; text-align:center;">
        <div class="container">
          <i class="fa-solid fa-triangle-exclamation" style="font-size:4rem; color:var(--color-accent); margin-bottom:1.5rem;"></i>
          <h2>Page Not Found</h2>
          <p>The engineering service or study route you are trying to access does not exist or has been relocated.</p>
          <a href="#/" class="btn btn-primary" style="margin-top:1.5rem;"><i class="fa-solid fa-house"></i> Return to Homepage</a>
        </div>
      </main>
    `;
  }
};
