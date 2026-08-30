/**
 * L'AURA BISTRO & LOUNGE - INTERACTIVE JAVASCRIPT
 * Modern, responsive interactions, filters, modals, and reservations
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- 1. Sticky Navigation & Scroll Spy ---
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('backToTop');

  const handleScroll = () => {
    const scrollY = window.pageYOffset;

    // Sticky Navbar
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top button
    if (scrollY > 450) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }

    // Scroll Spy for Nav links
    let currentSectionId = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check

  // Back to Top Click
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --- 2. Mobile Drawer Navigation ---
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (navMenu.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });

    // Close menu when clicking nav links
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });
  }

  // --- 3. Menu Filtering System ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const menuCards = document.querySelectorAll('.menu-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Toggle active class
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      menuCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // --- 4. Dish Details Modal ---
  const dishModal = document.getElementById('dishModal');
  const modalCloseBtns = document.querySelectorAll('.modal-close-btn, .close-modal-trigger');
  const quickViewBtns = document.querySelectorAll('.quick-view-btn');

  const dishData = {
    'truffle-carpaccio': {
      title: 'Truffle Wagyu Carpaccio',
      price: '$34',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      description: 'Thinly sliced A5 Miyazaki Wagyu beef topped with shaved Italian black truffles, aged 24-month Parmigiano-Reggiano, baby wild arugula, and extra virgin olive oil drizzle.',
      pairing: 'Sommelier Pair: 2018 Barolo DOCG',
      allergens: 'Dairy, Gluten-Free',
      prepTime: '15 mins'
    },
    'lobster-bisque': {
      title: 'Velveteen Lobster Bisque',
      price: '$26',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
      description: 'Slow-simmered Maine lobster velouté enriched with French cognac, tarragon cream, and butter-poached lobster medallion with herb oil.',
      pairing: 'Sommelier Pair: Chablis Premier Cru',
      allergens: 'Shellfish, Dairy',
      prepTime: '20 mins'
    },
    'burrata-salad': {
      title: 'Heirloom Burrata Caprese',
      price: '$22',
      image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80',
      description: 'Fresh Puglia artisan burrata cheese, organic heirloom tomatoes, 25-year aged Modena balsamic glaze, toasted pine nuts, and genovese basil crystal.',
      pairing: 'Sommelier Pair: Pinot Grigio Alto Adige',
      allergens: 'Dairy, Nuts, Vegetarian',
      prepTime: '10 mins'
    },
    'dry-aged-ribeye': {
      title: '45-Day Dry Aged Prime Ribeye',
      price: '$68',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
      description: 'Charcoal grilled 16oz USDA Prime beef served with roasted marrow bone butter, caramelized shallot jus, and smoked fleur de sel.',
      pairing: 'Sommelier Pair: 2017 Napa Valley Cabernet Sauvignon',
      allergens: 'Gluten-Free, Dairy',
      prepTime: '25 mins'
    },
    'pan-seared-seabass': {
      title: 'Chilean Sea Bass en Papillote',
      price: '$52',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
      description: 'Pan-roasted wild Chilean sea bass over saffron risotto, baby asparagus tips, preserved Meyer lemon, and caviar emulsion.',
      pairing: 'Sommelier Pair: Meursault Burgundy Chardonnay',
      allergens: 'Fish, Dairy, Gluten-Free',
      prepTime: '22 mins'
    },
    'truffle-tagliolini': {
      title: 'Handmade Black Truffle Tagliolini',
      price: '$38',
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
      description: 'House-extruded egg tagliolini pasta gently tossed in Normandy cultured butter, cracked tellicherry pepper, and generous freshly shaved seasonal truffles.',
      pairing: 'Sommelier Pair: Brunello di Montalcino',
      allergens: 'Gluten, Eggs, Dairy, Vegetarian',
      prepTime: '18 mins'
    },
    'valrhona-fondant': {
      title: 'Valrhona Chocolate Lava Dome',
      price: '$18',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
      description: 'Warm 70% dark Valrhona chocolate molten center paired with Tahitian vanilla bean gelato, gold leaf leafing, and raspberry coulis.',
      pairing: 'Sommelier Pair: 20-Year Tawny Port',
      allergens: 'Dairy, Eggs, Gluten',
      prepTime: '12 mins'
    },
    'smoked-old-fashioned': {
      title: 'L\'Aura Smoked Oak Old Fashioned',
      price: '$21',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
      description: 'Bourbon infused with Madagascar vanilla beans, bitters, organic demerara sugar, flamed orange oil, presented under a smoking cloche with cherrywood aroma.',
      pairing: 'Recommended with Artisanal Cheese Board',
      allergens: 'Gluten-Free, Vegan',
      prepTime: '5 mins'
    }
  };

  quickViewBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const dishKey = btn.getAttribute('data-dish');
      const data = dishData[dishKey];

      if (data && dishModal) {
        document.getElementById('modalDishImg').src = data.image;
        document.getElementById('modalDishTitle').textContent = data.title;
        document.getElementById('modalDishPrice').textContent = data.price;
        document.getElementById('modalDishDesc').textContent = data.description;
        document.getElementById('modalDishPairing').textContent = data.pairing;
        document.getElementById('modalDishAllergens').textContent = data.allergens;
        document.getElementById('modalDishPrep').textContent = data.prepTime;

        dishModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close modals
  const closeModal = (modal) => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  modalCloseBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const parentModal = btn.closest('.modal-overlay');
      if (parentModal) closeModal(parentModal);
    });
  });

  document.querySelectorAll('.modal-overlay').forEach((overlay) => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal(overlay);
    });
  });

  // --- 5. Table Booking / Reservation System ---
  const bookingForm = document.getElementById('bookingForm');
  const bookingModal = document.getElementById('bookingModal');
  const bookDateInput = document.getElementById('bookDate');

  // Set min date to today
  if (bookDateInput) {
    const today = new Date().toISOString().split('T')[0];
    bookDateInput.min = today;
    bookDateInput.value = today;
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('bookName').value.trim();
      const email = document.getElementById('bookEmail').value.trim();
      const phone = document.getElementById('bookPhone').value.trim();
      const date = document.getElementById('bookDate').value;
      const time = document.getElementById('bookTime').value;
      const guests = document.getElementById('bookGuests').value;
      const occasion = document.getElementById('bookOccasion').value || 'Standard Dining';
      const seatingElem = document.querySelector('input[name="seating"]:checked');
      const seating = seatingElem ? seatingElem.value : 'Main Dining Hall';
      const specialReq = document.getElementById('bookRequests').value.trim() || 'None';

      if (!name || !email || !phone || !date || !time || !guests) {
        showToast('Please fill in all required fields.', 'error', 'fa-circle-exclamation');
        return;
      }

      // Generate Random Reservation ID
      const reservationId = 'LA-' + Math.floor(100000 + Math.random() * 900000);

      // Populate Ticket
      document.getElementById('ticketId').textContent = reservationId;
      document.getElementById('ticketName').textContent = name;
      document.getElementById('ticketEmail').textContent = email;
      document.getElementById('ticketDate').textContent = date;
      document.getElementById('ticketTime').textContent = time;
      document.getElementById('ticketGuests').textContent = `${guests} Guests`;
      document.getElementById('ticketSeating').textContent = seating;
      document.getElementById('ticketOccasion').textContent = occasion;
      document.getElementById('ticketRequests').textContent = specialReq;

      // Show modal & toast
      bookingModal.classList.add('active');
      document.body.style.overflow = 'hidden';

      showToast(`Reservation Confirmed! Reference #${reservationId}`, 'success', 'fa-circle-check');
      bookingForm.reset();
      if (bookDateInput) {
        const today = new Date().toISOString().split('T')[0];
        bookDateInput.value = today;
      }
    });
  }

  // Print / Save Ticket Action
  const printTicketBtn = document.getElementById('printTicketBtn');
  if (printTicketBtn) {
    printTicketBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // --- 6. Contact Form Submission ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const subject = document.getElementById('contactSubject').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      if (!name || !email || !subject || !message) {
        showToast('Please complete all contact form fields.', 'error', 'fa-circle-exclamation');
        return;
      }

      showToast(`Thank you, ${name}! Your message has been sent to our concierge.`, 'success', 'fa-paper-plane');
      contactForm.reset();
    });
  }

  // --- 7. Newsletter Subscription Form ---
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value.trim()) {
        showToast('Subscribed! You will receive our seasonal tasting invitations.', 'success', 'fa-envelope-open-text');
        newsletterForm.reset();
      }
    });
  }

  // --- 8. Reusable Toast Notification Engine ---
  function showToast(message, type = 'info', iconClass = 'fa-circle-info') {
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.className = 'toast-container';
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <i class="fa-solid ${iconClass} toast-icon"></i>
      <div class="toast-message">${message}</div>
    `;

    toastContainer.appendChild(toast);

    // Trigger animation
    setTimeout(() => {
      toast.classList.add('show');
    }, 100);

    // Auto remove
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 400);
    }, 4500);
  }
});
