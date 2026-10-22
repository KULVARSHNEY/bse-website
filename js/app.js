// Core Application Controller for Krapali Electro Craft
window.App = {
  // Global reference for hero carousel timer
  carouselIntervalId: null,
  currentSlideIndex: 0,

  // Initialize page-specific events after router mounts components
  initPageEvents: function (hash) {
    // 1. Reset and clean up previous page timers/listeners
    if (this.carouselIntervalId) {
      clearInterval(this.carouselIntervalId);
      this.carouselIntervalId = null;
    }
    this.currentSlideIndex = 0;

    // 2. Bind Header & Navigation Event Listeners
    this.bindHeaderEvents();

    // 3. Page specific bindings
    if (hash === '#/' || hash === '') {
      this.bindHeroCarousel();
      this.bindEnquiryForm();
    } else if (hash === '#/contact') {
      this.bindContactForm();
    }

    // 4. Initialize IntersectionObserver for Scroll Reveal
    this.initScrollReveal();
  },

  // Navigation Header Event Binding
  bindHeaderEvents: function () {
    const header = document.querySelector('header');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const menuLinks = document.querySelectorAll('.nav-links a');
    const serviceToggle = document.getElementById('services-dropdown-toggle');
    const studyToggle = document.getElementById('study-dropdown-toggle');
    const productsToggle = document.getElementById('products-dropdown-toggle');
    const serviceMenu = document.getElementById('services-menu');
    const studyMenu = document.getElementById('study-menu');
    const productsMenu = document.getElementById('products-menu');
    const dropdownMenus = [productsMenu, serviceMenu, studyMenu].filter(Boolean);

    // Sticky Header Scroll Transition
    const checkScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check immediately on load

    // Mobile Hamburger Menu Toggle
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('is-active');
        navLinks.classList.toggle('is-open');
      });
    }

    // Touch/Click Dropdown Toggles for Mobile Screen Widths
    const isMobile = () => window.innerWidth <= 991;

    if (serviceToggle && serviceMenu) {
      serviceToggle.addEventListener('click', (e) => {
        if (isMobile()) {
          e.preventDefault();
          e.stopPropagation();
          // Close other menu if open
          dropdownMenus.forEach(menu => menu.classList.remove('is-open'));
          serviceMenu.classList.toggle('is-open');
        }
      });
    }

    if (studyToggle && studyMenu) {
      studyToggle.addEventListener('click', (e) => {
        if (isMobile()) {
          e.preventDefault();
          e.stopPropagation();
          // Close other menu if open
          dropdownMenus.forEach(menu => menu.classList.remove('is-open'));
          studyMenu.classList.toggle('is-open');
        }
      });
    }

    if (productsToggle && productsMenu) {
      productsToggle.addEventListener('click', (e) => {
        if (isMobile()) {
          e.preventDefault();
          e.stopPropagation();
          dropdownMenus.forEach(dropdown => dropdown.classList.remove('is-open'));
          productsMenu.classList.toggle('is-open');
        }
      });
    }

    // Close mobile menu when clicking outside or clicking any nav link
    document.addEventListener('click', () => {
      if (isMobile()) {
        if (hamburger) hamburger.classList.remove('is-active');
        if (navLinks) navLinks.classList.remove('is-open');
        dropdownMenus.forEach(menu => menu.classList.remove('is-open'));
      }
    });

    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (isMobile()) {
          if ([productsToggle, serviceToggle, studyToggle].includes(link)) return;
          if (hamburger) hamburger.classList.remove('is-active');
          if (navLinks) navLinks.classList.remove('is-open');
        }
      });
    });
  },

  // Hero Carousel Slider logic
  bindHeroCarousel: function () {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');

    if (slides.length === 0) return;

    const totalSlides = slides.length;

    const showSlide = (index) => {
      // Bounds check
      if (index >= totalSlides) index = 0;
      if (index < 0) index = totalSlides - 1;

      this.currentSlideIndex = index;

      // Update active classes for slides
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active');
          // Play video if it contains one
          const video = slide.querySelector('video');
          if (video) {
            video.currentTime = 0;
            video.play().catch(e => console.log("Video auto-play blocked: ", e));
          }
        } else {
          slide.classList.remove('active');
          const video = slide.querySelector('video');
          if (video) video.pause();
        }
      });

      // Update active classes for dots
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    };

    const nextSlide = () => {
      showSlide(this.currentSlideIndex + 1);
    };

    const prevSlide = () => {
      showSlide(this.currentSlideIndex - 1);
    };

    // Set auto rotation interval (5 seconds)
    const startInterval = () => {
      this.carouselIntervalId = setInterval(nextSlide, 5000);
    };

    const resetInterval = () => {
      if (this.carouselIntervalId) {
        clearInterval(this.carouselIntervalId);
        startInterval();
      }
    };

    // Attach button click event handlers
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
      });
    }

    // Attach dot controls event handlers
    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        const targetIndex = parseInt(e.target.getAttribute('data-slide-index'));
        showSlide(targetIndex);
        resetInterval();
      });
    });

    // Start sliding
    startInterval();
  },

  // Booking Enquiry form handling
  bindEnquiryForm: function () {
    const form = document.getElementById('enquiry-form');
    const successMsg = document.getElementById('enquiry-success-message');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const isValid = this.validateForm(form);

      if (!isValid) return;

      const submitButton = form.querySelector('button[type="submit"]');
      const originalButtonHTML = submitButton.innerHTML;

      const formData = {
        name: document.getElementById('enquiry-name').value.trim(),
        mobile: document.getElementById('enquiry-mobile').value.trim(),
        email: document.getElementById('enquiry-email').value.trim(),
        service: document.getElementById('enquiry-service').value
      };

      try {
        // Prevent multiple submissions
        submitButton.disabled = true;
        submitButton.innerHTML =
          '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';

        const { error } = await supabaseClient
          .from('enquiries')
          .insert([formData]);

        if (error) {
          throw error;
        }

        console.log('Enquiry submitted successfully.');

        form.reset();

        form.style.display = 'none';

        if (successMsg) {
          successMsg.style.display = 'block';
          successMsg.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }

      } catch (error) {
        console.error('Enquiry submission failed:', error);

        alert(
          'We could not submit your enquiry right now. Please try again or contact us directly.'
        );

      } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonHTML;
      }
    });

    // Remove validation errors when typing/modifying inputs
    form.querySelectorAll('.form-input').forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('is-invalid');
      });

      input.addEventListener('change', () => {
        input.classList.remove('is-invalid');
      });
    });
  },

  // Contact page form handling
  bindContactForm: function () {
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('contact-success-message');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const isValid = this.validateForm(form);

      if (!isValid) return;

      const submitButton = form.querySelector('button[type="submit"]');
      const originalButtonHTML = submitButton.innerHTML;

      const formData = {
        name: document.getElementById('contact-name').value.trim(),
        phone: document.getElementById('contact-phone').value.trim(),
        email: document.getElementById('contact-email').value.trim(),
        message: document.getElementById('contact-message').value.trim()
      };

      try {
        submitButton.disabled = true;
        submitButton.innerHTML =
          '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

        const { error } = await supabaseClient
          .from('contact_messages')
          .insert([formData]);

        if (error) {
          throw error;
        }

        console.log('Contact message submitted successfully.');

        form.reset();

        if (successMsg) {
          successMsg.style.display = 'block';

          successMsg.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });

          setTimeout(() => {
            successMsg.style.display = 'none';
          }, 8000);
        }

      } catch (error) {
        console.error('Contact form submission failed:', error);

        alert(
          'We could not send your message right now. Please try again or contact us directly.'
        );

      } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonHTML;
      }
    });

    // Remove validation errors when typing/modifying inputs
    form.querySelectorAll('.form-input').forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('is-invalid');
      });

      input.addEventListener('change', () => {
        input.classList.remove('is-invalid');
      });
    });
  },

  // Client-side form inputs verification logic
  validateForm: function (form) {
    let isValid = true;
    const inputs = form.querySelectorAll('.form-input[required]');

    inputs.forEach(input => {
      let isInputValid = true;
      const value = input.value.trim();

      // Check empty inputs
      if (value === '') {
        isInputValid = false;
      } else {
        // Check pattern matches if defined (e.g. mobile 10 digits pattern)
        if (input.hasAttribute('pattern')) {
          const pattern = new RegExp(input.getAttribute('pattern'));
          if (!pattern.test(value)) {
            isInputValid = false;
          }
        }

        // Check email syntax
        if (input.type === 'email') {
          const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!emailPattern.test(value)) {
            isInputValid = false;
          }
        }
      }

      if (!isInputValid) {
        input.classList.add('is-invalid');
        isValid = false;
      } else {
        input.classList.remove('is-invalid');
      }
    });

    return isValid;
  },

  // CSS Scroll Reveal Animation trigger
  initScrollReveal: function () {
    const reveals = document.querySelectorAll('.reveal');

    // Set up Observer options
    const observerOptions = {
      root: null,
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Trigger once
        }
      });
    }, observerOptions);

    reveals.forEach(el => {
      observer.observe(el);
    });
  }
};

// Bootstrap application on DOM complete
document.addEventListener('DOMContentLoaded', () => {
  window.Router.init('app');
});
