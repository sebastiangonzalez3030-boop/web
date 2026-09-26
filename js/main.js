/**
 * Cobramos PH - Scripts Corporativos
 * Gestión de Cartera en Propiedad Horizontal
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initFaqAccordion();
  initCalculator();
  initLoginModal();
  initContactForm();
  initWhatsAppWidget();
});

/* ==========================================================================
   1. NAVBAR & STICKY HEADER
   ========================================================================== */
function initNavbar() {
  const header = document.getElementById('main-header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Change style on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-md', 'bg-white/98');
      header.classList.remove('bg-white/90');
    } else {
      header.classList.remove('shadow-md', 'bg-white/98');
      header.classList.add('bg-white/90');
    }
  });

  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        if (!isExpanded) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close menu when clicking any mobile link
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }
}

/* ==========================================================================
   2. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const accordionButtons = document.querySelectorAll('.faq-trigger');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('aria-controls');
      const content = document.getElementById(targetId);
      const icon = button.querySelector('.faq-icon');
      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      // Close all other open accordions in the same container for clean presentation
      accordionButtons.forEach(otherBtn => {
        if (otherBtn !== button) {
          otherBtn.setAttribute('aria-expanded', 'false');
          const otherId = otherBtn.getAttribute('aria-controls');
          const otherContent = document.getElementById(otherId);
          const otherIcon = otherBtn.querySelector('.faq-icon');
          if (otherContent) otherContent.classList.add('hidden');
          if (otherIcon) {
            otherIcon.classList.remove('rotate-180', 'text-brand-gold');
            otherIcon.classList.add('text-slate-400');
          }
        }
      });

      // Toggle current
      if (isExpanded) {
        button.setAttribute('aria-expanded', 'false');
        if (content) content.classList.add('hidden');
        if (icon) {
          icon.classList.remove('rotate-180', 'text-brand-gold');
          icon.classList.add('text-slate-400');
        }
      } else {
        button.setAttribute('aria-expanded', 'true');
        if (content) content.classList.remove('hidden');
        if (icon) {
          icon.classList.add('rotate-180', 'text-brand-gold');
          icon.classList.remove('text-slate-400');
        }
      }
    });
  });
}

/* ==========================================================================
   3. CALCULADORA DE RECUPERACIÓN & LIQUIDEZ
   ========================================================================== */
function initCalculator() {
  const slider = document.getElementById('calc-slider');
  const debtDisplay = document.getElementById('calc-debt-display');
  const unitsInput = document.getElementById('calc-units');
  const resultRecovered = document.getElementById('calc-recovered');
  const resultLiquidity = document.getElementById('calc-liquidity');
  const resultAvgPerUnit = document.getElementById('calc-avg-unit');
  const presetButtons = document.querySelectorAll('.calc-preset-btn');

  if (!slider || !debtDisplay) return;

  function formatCOP(val) {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(val);
  }

  function updateCalculations() {
    const debt = parseFloat(slider.value);
    const units = parseInt(unitsInput ? unitsInput.value : 80) || 80;

    // Display formatted debt
    debtDisplay.textContent = formatCOP(debt);

    // Estimated recovery in 60-90 days extrajudicially (~88%)
    const recovered = Math.round(debt * 0.88);
    if (resultRecovered) {
      resultRecovered.textContent = formatCOP(recovered);
    }

    // Cobramos Liquidez (10% de tarifa sobre anticipo para emergencias)
    // Anticipo neto estimado del 90%
    const liquidityNet = Math.round(debt * 0.90);
    if (resultLiquidity) {
      resultLiquidity.textContent = formatCOP(liquidityNet);
    }

    // Average debt per unit
    const avg = Math.round(debt / units);
    if (resultAvgPerUnit) {
      resultAvgPerUnit.textContent = formatCOP(avg);
    }
  }

  slider.addEventListener('input', updateCalculations);
  if (unitsInput) {
    unitsInput.addEventListener('input', updateCalculations);
  }

  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-value');
      if (val) {
        slider.value = val;
        // highlight active preset button
        presetButtons.forEach(b => b.classList.remove('bg-brand-navy', 'text-white'));
        btn.classList.add('bg-brand-navy', 'text-white');
        updateCalculations();
      }
    });
  });

  // Initial calculation
  updateCalculations();
}

/* ==========================================================================
   4. MODAL ACCESO CLIENTES
   ========================================================================== */
function initLoginModal() {
  const openButtons = document.querySelectorAll('.open-login-modal');
  const modal = document.getElementById('login-modal');
  const closeBtn = document.getElementById('close-login-modal');
  const backdrop = document.getElementById('login-modal-backdrop');
  const loginForm = document.getElementById('client-login-form');
  const loginTabs = document.querySelectorAll('.login-tab-btn');
  const tabTypeInput = document.getElementById('login-user-type');
  const alertBox = document.getElementById('login-alert-box');

  if (!modal) return;

  function openModal() {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  function closeModal() {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    if (alertBox) alertBox.classList.add('hidden');
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Switch tabs
  loginTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      loginTabs.forEach(t => {
        t.classList.remove('text-brand-navy', 'border-brand-navy', 'font-bold');
        t.classList.add('text-slate-500', 'border-transparent');
      });
      tab.classList.add('text-brand-navy', 'border-brand-navy', 'font-bold');
      tab.classList.remove('text-slate-500', 'border-transparent');

      const userType = tab.getAttribute('data-type');
      if (tabTypeInput) tabTypeInput.value = userType;
    });
  });

  // Simulate login
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = loginForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Verificando credenciales...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (alertBox) {
          alertBox.classList.remove('hidden');
          alertBox.innerHTML = `
            <div class="flex items-center gap-2 text-brand-green font-semibold">
              <i class="fa-solid fa-circle-check text-base"></i>
              <span>Autenticación exitosa. Redirigiendo a su panel seguro de copropiedad...</span>
            </div>
          `;
        }
      }, 1200);
    });
  }
}

/* ==========================================================================
   5. FORMULARIO DE CONTACTO / SOLICITUD DE DIAGNÓSTICO
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('diagnostic-form');
  const successModal = document.getElementById('form-success-modal');
  const closeSuccessBtn = document.getElementById('close-success-modal');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Procesando Solicitud...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      // Show success modal or toast
      if (successModal) {
        successModal.classList.remove('hidden');
      } else {
        alert('¡Solicitud enviada con éxito! Un especialista de Cobramos PH se comunicará en menos de 2 horas.');
      }

      form.reset();
    }, 1000);
  });

  if (closeSuccessBtn && successModal) {
    closeSuccessBtn.addEventListener('click', () => {
      successModal.classList.add('hidden');
    });
  }
}

/* ==========================================================================
   6. WIDGET FLOTANTE WHATSAPP
   ========================================================================== */
function initWhatsAppWidget() {
  const tooltip = document.getElementById('whatsapp-tooltip');
  if (tooltip) {
    // Show after 3 seconds, then hide after 8 seconds
    setTimeout(() => {
      tooltip.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
      tooltip.classList.add('opacity-100', 'translate-y-0');
    }, 2500);
  }
}
