# NexGen Academy — Mobile-Only Patch
## Paste this into your project. Zero desktop changes — everything lives inside `@media (max-width: 767px)`.

---

## STEP 1 — Add this HTML to your `<nav>` element

Find your existing `<nav>` tag and make sure it matches this structure.
**Only add the hamburger button and mobile overlay — keep all existing desktop nav content.**

```html
<!-- ADD: Hamburger button (place inside your <nav>, after the logo) -->
<button class="nav-hamburger" id="navHamburger" aria-label="Open menu" aria-expanded="false">
  <span class="ham-line"></span>
  <span class="ham-line"></span>
  <span class="ham-line"></span>
</button>

<!-- ADD: Mobile fullscreen overlay (place right before closing </nav> or after </nav>) -->
<div class="mobile-nav-overlay" id="mobileNavOverlay" aria-hidden="true">
  <div class="mobile-nav-links">
    <a href="/" class="mobile-nav-link" data-delay="0">Home</a>
    <a href="/courses" class="mobile-nav-link" data-delay="1">Courses</a>
    <a href="/academy" class="mobile-nav-link" data-delay="2">Academy</a>
    <a href="/vault" class="mobile-nav-link" data-delay="3">The Vault</a>
  </div>
  <a href="/join" class="mobile-nav-cta">JOIN ELITE</a>
</div>
```

---

## STEP 2 — Add this CSS

Add this entire `<style>` block to your CSS file or inside a `<style>` tag in your `<head>`.

```css
/* ============================================================
   NEXGEN ACADEMY — MOBILE PATCH
   All rules scoped to max-width: 767px
   Desktop is 100% untouched.
   ============================================================ */

/* ── HAMBURGER BUTTON (hidden on desktop) ── */
.nav-hamburger {
  display: none; /* hidden by default (desktop) */
}

@media (max-width: 767px) {

  /* ── NAVBAR LAYOUT ── */
  nav {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    padding: 0 1.25rem !important;
    height: 60px !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    z-index: 500 !important;
    background: rgba(8, 8, 8, 0.95) !important;
    backdrop-filter: blur(16px) !important;
    -webkit-backdrop-filter: blur(16px) !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important;
  }

  /* Hide desktop nav links + JOIN ELITE button on mobile */
  nav .nav-links,
  nav ul,
  nav > a:not(.logo),
  nav .nav-desktop-links,
  nav .join-elite-btn,
  nav > div:not(.logo-wrapper) {
    display: none !important;
  }

  /* Keep logo visible */
  nav .logo,
  nav .logo-wrapper,
  nav > a.logo {
    display: flex !important;
    flex-direction: column !important;
    line-height: 1.1 !important;
  }

  /* ── HAMBURGER BUTTON ── */
  .nav-hamburger {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 5px !important;
    width: 44px !important;
    height: 44px !important;
    background: transparent !important;
    border: none !important;
    cursor: pointer !important;
    z-index: 600 !important;
    padding: 0 !important;
    position: relative !important;
  }

  .ham-line {
    display: block !important;
    width: 24px !important;
    height: 2px !important;
    background: #ffffff !important;
    border-radius: 2px !important;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                opacity 0.2s ease,
                width 0.3s ease !important;
    transform-origin: center !important;
  }

  /* Hamburger → X animation */
  .nav-hamburger.open .ham-line:nth-child(1) {
    transform: translateY(7px) rotate(45deg) !important;
  }
  .nav-hamburger.open .ham-line:nth-child(2) {
    opacity: 0 !important;
    width: 0 !important;
  }
  .nav-hamburger.open .ham-line:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg) !important;
  }

  /* ── MOBILE FULLSCREEN OVERLAY ── */
  .mobile-nav-overlay {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 0 !important;
    position: fixed !important;
    inset: 0 !important;
    background: rgba(6, 6, 6, 0.98) !important;
    backdrop-filter: blur(24px) !important;
    -webkit-backdrop-filter: blur(24px) !important;
    z-index: 490 !important;
    transform: translateY(-100%) !important;
    transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1) !important;
    pointer-events: none !important;
  }

  .mobile-nav-overlay.open {
    transform: translateY(0) !important;
    pointer-events: all !important;
  }

  /* ── MOBILE NAV LINKS ── */
  .mobile-nav-links {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    width: 100% !important;
    padding: 0 2rem !important;
    margin-bottom: 3rem !important;
  }

  .mobile-nav-link {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100% !important;
    padding: 1.1rem 0 !important;
    font-family: 'Barlow Condensed', sans-serif !important;
    font-size: 2.4rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.04em !important;
    text-transform: uppercase !important;
    color: rgba(255, 255, 255, 0.5) !important;
    text-decoration: none !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07) !important;
    transition: color 0.2s ease !important;

    /* Staggered entrance animation */
    opacity: 0 !important;
    transform: translateY(20px) !important;
    transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s ease !important;
  }

  .mobile-nav-link:active,
  .mobile-nav-link:hover {
    color: #00E5FF !important;
  }

  /* Stagger delays for links */
  .mobile-nav-link[data-delay="0"] { transition-delay: 0.05s !important; }
  .mobile-nav-link[data-delay="1"] { transition-delay: 0.12s !important; }
  .mobile-nav-link[data-delay="2"] { transition-delay: 0.19s !important; }
  .mobile-nav-link[data-delay="3"] { transition-delay: 0.26s !important; }

  /* When overlay is open, animate links in */
  .mobile-nav-overlay.open .mobile-nav-link {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  /* ── MOBILE NAV CTA BUTTON ── */
  .mobile-nav-cta {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: calc(100% - 4rem) !important;
    height: 56px !important;
    background: #00E5FF !important;
    color: #000000 !important;
    font-family: 'Space Mono', monospace !important;
    font-size: 0.8rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.14em !important;
    text-transform: uppercase !important;
    text-decoration: none !important;
    border-radius: 100px !important;
    border: none !important;
    cursor: pointer !important;
    box-shadow: 0 0 30px rgba(0, 229, 255, 0.25) !important;
    opacity: 0 !important;
    transform: translateY(16px) !important;
    transition: opacity 0.4s ease 0.33s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.33s !important;
  }

  .mobile-nav-overlay.open .mobile-nav-cta {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  /* ── PAGE TOP PADDING (so content doesn't hide under fixed nav) ── */
  body {
    padding-top: 60px !important;
  }

  /* ── HERO SECTION ── */
  /* Ensure hero wordmark is well-sized on mobile */
  .hero-title,
  h1.hero {
    font-size: clamp(3rem, 16vw, 5.5rem) !important;
    line-height: 0.95 !important;
    letter-spacing: -0.01em !important;
  }

  .hero-subtitle,
  .hero-tagline {
    font-size: clamp(0.85rem, 3.5vw, 1rem) !important;
    letter-spacing: 0.18em !important;
  }

  /* ── STATS SECTION ── */
  /* Change from 3-col horizontal to proper 1-col stacked with better proportions */
  .stats-grid,
  .stats-container,
  [class*="stats"] > div {
    display: flex !important;
    flex-direction: column !important;
    gap: 0.75rem !important;
    padding: 0 1.25rem !important;
  }

  /* Each stat card: full width, side-by-side number + label layout */
  .stat-card,
  [class*="stat-card"] {
    width: 100% !important;
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-between !important;
    padding: 1.25rem 1.5rem !important;
    background: #111111 !important;
    border: 1px solid rgba(255, 255, 255, 0.07) !important;
    border-radius: 16px !important;
    position: relative !important;
    overflow: hidden !important;
  }

  .stat-card::after {
    content: '' !important;
    position: absolute !important;
    bottom: 0 !important;
    left: 0 !important;
    right: 0 !important;
    height: 1px !important;
    background: linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.5), transparent) !important;
  }

  .stat-number,
  [class*="stat-number"] {
    font-size: clamp(2rem, 10vw, 3rem) !important;
    font-weight: 800 !important;
    line-height: 1 !important;
    color: #ffffff !important;
  }

  .stat-label,
  [class*="stat-label"] {
    font-size: 0.65rem !important;
    letter-spacing: 0.14em !important;
    color: #00E5FF !important;
    text-transform: uppercase !important;
    text-align: right !important;
  }

  /* ── COURSE CARDS ── */
  /* Ensure single column, proper spacing */
  .courses-grid,
  [class*="courses-grid"],
  [class*="course-list"] {
    display: flex !important;
    flex-direction: column !important;
    gap: 1.25rem !important;
    padding: 0 1.25rem !important;
  }

  .course-card,
  [class*="course-card"] {
    width: 100% !important;
    border-radius: 20px !important;
    overflow: hidden !important;
  }

  /* ── VAULT FILTER BAR ── */
  [class*="filter-bar"],
  [class*="vault-filters"] {
    overflow-x: auto !important;
    scrollbar-width: none !important;
    -webkit-overflow-scrolling: touch !important;
    padding: 0 1.25rem 0.5rem !important;
    display: flex !important;
    gap: 0.5rem !important;
    flex-wrap: nowrap !important;
  }

  [class*="filter-bar"]::-webkit-scrollbar {
    display: none !important;
  }

  [class*="filter-pill"] {
    flex-shrink: 0 !important;
    white-space: nowrap !important;
  }

  /* ── SECTION HEADINGS ── */
  /* Section labels (THE SOLUTION, THE JOURNEY, etc.) */
  [class*="section-label"],
  [class*="section-tag"] {
    font-size: 0.65rem !important;
    letter-spacing: 0.18em !important;
    margin-bottom: 0.5rem !important;
  }

  /* Large section headings */
  [class*="section-title"],
  h2 {
    font-size: clamp(2rem, 10vw, 3.5rem) !important;
    line-height: 1 !important;
  }

  /* ── PHILOSOPHY + VISION SECTION ── */
  [class*="vision-wrapper"],
  [class*="philosophy-section"] {
    flex-direction: column !important;
    gap: 2rem !important;
    padding: 0 1.25rem !important;
  }

  /* ── BLUEPRINT TIMELINE ── */
  [class*="timeline-line"] {
    left: 1.5rem !important;
  }

  [class*="phase-card"] {
    width: 100% !important;
    margin-left: 3rem !important;
    margin-right: 0 !important;
  }

  /* ── CTA SECTION ── */
  [class*="cta-section"],
  [class*="cta-banner"] {
    margin: 0 1.25rem !important;
    padding: 3rem 1.5rem !important;
    border-radius: 20px !important;
    text-align: center !important;
  }

  /* Full-width CTA button on mobile */
  [class*="cta-section"] [class*="btn"],
  [class*="cta-banner"] [class*="btn"] {
    width: 100% !important;
    max-width: 320px !important;
  }

  /* ── INSTRUCTOR SECTION ── */
  [class*="instructor"],
  [class*="vaibhav"] {
    flex-direction: column !important;
    gap: 2rem !important;
    padding: 0 1.25rem !important;
  }

  [class*="instructor-image"] {
    width: 100% !important;
    max-width: 320px !important;
    margin: 0 auto !important;
  }

  /* ── FAQ ── */
  [class*="faq"] {
    padding: 0 1.25rem !important;
  }

  /* ── GLOBAL TOUCH IMPROVEMENTS ── */
  button,
  a,
  [role="button"] {
    touch-action: manipulation !important;
  }

  /* Prevent horizontal overflow globally */
  section,
  main,
  .container,
  [class*="container"] {
    overflow-x: hidden !important;
    max-width: 100vw !important;
  }

} /* end @media (max-width: 767px) */
```

---

## STEP 3 — Add this JavaScript

Place this `<script>` before the closing `</body>` tag.

```javascript
// ============================================================
// NEXGEN ACADEMY — Mobile Nav Toggle
// Only activates on mobile (max-width 767px)
// ============================================================
(function() {
  const hamburger = document.getElementById('navHamburger');
  const overlay   = document.getElementById('mobileNavOverlay');

  if (!hamburger || !overlay) return;

  function openMenu() {
    hamburger.classList.add('open');
    overlay.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // prevent bg scroll
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function() {
    const isOpen = hamburger.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  // Close when a nav link is tapped
  overlay.querySelectorAll('.mobile-nav-link, .mobile-nav-cta').forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on overlay backdrop tap (not on links)
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeMenu();
  });

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeMenu();
  });
})();
```

---

## HOW TO IMPLEMENT (Framework-specific notes)

### Plain HTML/CSS site
1. Add the hamburger `<button>` and `<div class="mobile-nav-overlay">` HTML to your `<nav>`
2. Paste the CSS into your main stylesheet
3. Paste the JS before `</body>`

### React / Next.js
- Convert the overlay to a component: `<MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />`
- Use `useState` for open/close state
- Use `useEffect` to handle `body.overflow` and keyboard events

### Tailwind CSS project
- Keep the class selectors above, OR replace `[class*="..."]` wildcards with your actual Tailwind component class names
- The hamburger + overlay HTML and JS work as-is

---

## WHAT EACH FIX ADDRESSES

| Problem (from screenshots) | Fix applied |
|---|---|
| Nav links cramped/cut off on mobile | Desktop links hidden; hamburger + fullscreen overlay added |
| No hamburger menu | 3-line → X animated button with fullscreen slide-down overlay |
| Stats stacked in ugly tall single column | Cards laid out horizontal (number left, label right) in compact rows |
| Content touching screen edges | 1.25rem padding added to all major sections |
| Sections overlapping fixed nav | `body { padding-top: 60px }` added |
| Blueprint timeline alignment off | Timeline line anchored left at 1.5rem on mobile |
| Filter pills wrapping awkwardly | Horizontal scroll with hidden scrollbar |
| Touch delay on taps | `touch-action: manipulation` on all interactive elements |
