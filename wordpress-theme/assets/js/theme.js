/* BLRT Grupp — theme.js */

(function () {
  'use strict';

  // ── Scroll reveal ──────────────────────────────────────────────────────────
  const revealObserver = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); } }),
    { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  // ── Sticky header shadow ───────────────────────────────────────────────────
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 40), { passive: true });
  }

  // ── Mobile menu ────────────────────────────────────────────────────────────
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav    = document.querySelector('.main-nav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const open = mainNav.classList.toggle('mobile-open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
  }

  // ── Megamenu ───────────────────────────────────────────────────────────────
  document.querySelectorAll('.mega-trigger').forEach((trigger) => {
    const menu = trigger.nextElementSibling;
    if (!menu) return;
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menu.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(isOpen));
    });
  });
  document.addEventListener('click', () => {
    document.querySelectorAll('.megamenu.open').forEach((m) => {
      m.classList.remove('open');
      m.previousElementSibling?.setAttribute('aria-expanded', 'false');
    });
  });

  // ── Counter animations ────────────────────────────────────────────────────
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el     = e.target;
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        if (isNaN(target)) return;
        counterObserver.unobserve(el);
        let start = 0;
        const dur  = 900;
        const t0   = performance.now();
        const tick = (now) => {
          const p = Math.min((now - t0) / dur, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(ease * target) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.5 }
  );
  document.querySelectorAll('.stat-value[data-target]').forEach((el) => counterObserver.observe(el));

  // ── Service card expand toggle ────────────────────────────────────────────
  document.querySelectorAll('.svc-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.service-card');
      const full = card?.querySelector('.svc-full');
      if (!full) return;
      const expanded = full.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(expanded));
      btn.querySelector('.btn-label').textContent = expanded ? btn.dataset.less : btn.dataset.more;
    });
  });

  // ── Video block ───────────────────────────────────────────────────────────
  document.querySelectorAll('.video-poster').forEach((poster) => {
    poster.addEventListener('click', () => {
      const wrapper = poster.closest('.video-wrapper');
      const iframeWrap = wrapper?.querySelector('.video-iframe');
      if (!iframeWrap) return;
      poster.style.display = 'none';
      iframeWrap.style.display = 'block';
      const iframe = iframeWrap.querySelector('iframe');
      if (iframe) {
        const src = iframe.dataset.src;
        if (src) iframe.src = src + '?autoplay=1&rel=0';
      }
    });
  });

  // ── Gallery lightbox ─────────────────────────────────────────────────────
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const lbImg   = lightbox.querySelector('.lightbox-img');
    const lbClose = lightbox.querySelector('.lightbox-close');
    document.querySelectorAll('.gallery-item img').forEach((img) => {
      img.parentElement.addEventListener('click', () => {
        lbImg.src = img.dataset.full || img.src;
        lbImg.alt = img.alt;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });
    const closeLb = () => { lightbox.classList.remove('open'); document.body.style.overflow = ''; };
    lbClose?.addEventListener('click', closeLb);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLb(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLb(); });
  }

  // ── Contact form AJAX ─────────────────────────────────────────────────────
  document.querySelectorAll('.blrt-contact-form').forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn      = form.querySelector('[type="submit"]');
      const feedback = form.querySelector('.form-feedback');
      btn.disabled   = true;
      btn.textContent = btn.dataset.sending || 'Sending…';

      const data = new FormData(form);
      data.set('action', 'blrt_contact');
      data.set('nonce', window.blrtAjax?.nonce || '');
      data.set('to_email', form.dataset.toEmail || '');

      try {
        const res  = await fetch(window.blrtAjax?.url || '/wp-admin/admin-ajax.php', { method: 'POST', body: data });
        const json = await res.json();
        if (json.success) {
          form.innerHTML = `
            <div class="form-success">
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <p style="font-weight:600">Message sent successfully.</p>
              <p style="color:var(--color-muted)">We will get back to you shortly.</p>
            </div>`;
        } else {
          if (feedback) feedback.textContent = json.data?.message || 'Something went wrong. Please try again.';
          btn.disabled   = false;
          btn.textContent = btn.dataset.label || 'Send';
        }
      } catch {
        if (feedback) feedback.textContent = 'Network error. Please try again.';
        btn.disabled   = false;
        btn.textContent = btn.dataset.label || 'Send';
      }
    });
  });

  // ── Job filter (careers page) ─────────────────────────────────────────────
  const filterBtns = document.querySelectorAll('[data-job-filter]');
  if (filterBtns.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const slug = btn.dataset.jobFilter;
        document.querySelectorAll('.job-card[data-company]').forEach((card) => {
          card.style.display = (slug === 'all' || card.dataset.company === slug) ? '' : 'none';
        });
      });
    });
  }

  // ── FAQ Accordion ─────────────────────────────────────────────────────────
  document.querySelectorAll('.faq-toggle').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const item     = toggle.closest('.faq-item');
      const answer   = item?.querySelector('.faq-answer');
      if (!answer) return;
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';

      // Collapse any other open items (optional: comment out to allow multiple open)
      document.querySelectorAll('.faq-toggle[aria-expanded="true"]').forEach((other) => {
        if (other === toggle) return;
        other.setAttribute('aria-expanded', 'false');
        const otherAnswer = other.closest('.faq-item')?.querySelector('.faq-answer');
        if (otherAnswer) otherAnswer.hidden = true;
      });

      toggle.setAttribute('aria-expanded', String(!isOpen));
      answer.hidden = isOpen;
    });
  });

  // ── Companies Grid sector quick-jump smooth scroll ─────────────────────────
  document.querySelectorAll('.cg-jump-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const href = btn.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ── Presence map quick-jump (already handled by CSS mask, no JS needed) ────

  // ── Class Societies: pause marquee on reduced-motion preference ────────────
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.cs-track').forEach((el) => {
      el.style.animationPlayState = 'paused';
    });
  }

})();
