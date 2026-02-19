# NexGen Academy — Mobile-Responsive Design System Guide
> Paste this entire document into your AI/Cursor/v0 prompt as the design specification.

---

## 🎯 Design Philosophy

**Aesthetic Direction:** Dark Futurist / Creator Economy Premium
**Tone:** Aggressive confidence. Bold hierarchy. Motion-first. Built for Gen Z creators who scroll fast and buy on impulse.
**One Unforgettable Thing:** The site should feel like opening a high-end gaming interface — black, neon cyan accents, brutalist type contrasting with editorial refinement.

---

## 🎨 Design Tokens (CSS Variables)

```css
:root {
  /* Colors */
  --color-bg:           #080808;
  --color-bg-card:      #111111;
  --color-bg-elevated:  #181818;
  --color-border:       rgba(255,255,255,0.07);
  --color-border-glow:  rgba(0,229,255,0.3);

  --color-cyan:         #00E5FF;
  --color-cyan-dim:     rgba(0,229,255,0.15);
  --color-cyan-glow:    0 0 24px rgba(0,229,255,0.4);

  --color-white:        #FFFFFF;
  --color-gray-100:     #E8E8E8;
  --color-gray-400:     #888888;
  --color-gray-600:     #444444;

  /* Typography */
  --font-display:  'Barlow Condensed', sans-serif;   /* Hero headings — tight, aggressive */
  --font-body:     'DM Sans', sans-serif;             /* Body text — clean, modern */
  --font-label:    'Space Mono', monospace;           /* Labels, tags, metadata */

  /* Type Scale (Mobile-first) */
  --text-hero:    clamp(3.5rem, 14vw, 8rem);    /* THE VAULT, NEXGEN */
  --text-h1:      clamp(2.2rem, 8vw, 5rem);     /* Section titles */
  --text-h2:      clamp(1.4rem, 4vw, 2.2rem);   /* Card titles */
  --text-h3:      clamp(1rem, 3vw, 1.3rem);     /* Subheadings */
  --text-body:    clamp(0.875rem, 2.5vw, 1rem);
  --text-label:   clamp(0.65rem, 2vw, 0.75rem);

  /* Spacing */
  --space-xs:   0.25rem;  /*  4px */
  --space-sm:   0.5rem;   /*  8px */
  --space-md:   1rem;     /* 16px */
  --space-lg:   1.5rem;   /* 24px */
  --space-xl:   2.5rem;   /* 40px */
  --space-2xl:  4rem;     /* 64px */
  --space-3xl:  6rem;     /* 96px */

  /* Layout */
  --container-max:     1280px;
  --container-padding: clamp(1rem, 5vw, 2rem);
  --border-radius-sm:  8px;
  --border-radius-md:  16px;
  --border-radius-lg:  24px;
  --border-radius-xl:  32px;

  /* Motion */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:   cubic-bezier(0.4, 0, 0.2, 1);
  --duration-fast: 200ms;
  --duration-med:  400ms;
  --duration-slow: 700ms;
}
```

---

## 📱 Breakpoints

```css
/* Mobile-first breakpoints */
/* xs:  < 480px  — small phones */
/* sm:  480px+   — large phones */
/* md:  768px+   — tablets */
/* lg:  1024px+  — small desktops */
/* xl:  1280px+  — full desktop */

@media (min-width: 480px)  { /* sm  */ }
@media (min-width: 768px)  { /* md  */ }
@media (min-width: 1024px) { /* lg  */ }
@media (min-width: 1280px) { /* xl  */ }
```

---

## 🧱 Component Library

---

### 1. NAVIGATION

**Mobile (< 768px):**
- Fixed top bar, full width, 60px height
- Logo left-aligned (NEXGEN bold white + ACADEMY cyan)
- Hamburger menu icon right side — 3 lines → X animation on open
- On open: full-screen overlay slides down from top with `translateY(-100%) → translateY(0)` over 400ms
- Overlay: bg `rgba(8,8,8,0.97)` + backdrop blur 20px
- Nav links stacked vertically, centered, 56px tall each, font-size 2rem Barlow Condensed uppercase
- Each link slides in with staggered delay (0ms, 80ms, 160ms, 240ms)
- "JOIN ELITE" button at bottom of overlay: full-width, cyan background, black text, 56px height, 28px font
- Active page link gets cyan color + left border 3px cyan

**Desktop (768px+):**
- Horizontal nav bar, centered pill shape (border 1px solid rgba(255,255,255,0.12), backdrop blur 12px)
- JOIN ELITE button: outline white, becomes filled cyan on hover
- Sticky with `position: sticky; top: 16px; z-index: 100`

```css
.nav-mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(8,8,8,0.97);
  backdrop-filter: blur(20px);
  transform: translateY(-100%);
  transition: transform var(--duration-slow) var(--ease-out-expo);
  z-index: 200;
}
.nav-mobile-overlay.open {
  transform: translateY(0);
}
.nav-link {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-gray-400);
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-border);
  transition: color var(--duration-fast);
}
.nav-link:hover { color: var(--color-cyan); }
```

---

### 2. HERO SECTION

**Layout (Mobile):**
- Full viewport height (100svh)
- Background: radial gradient from center — deep teal glow (`rgba(0,229,255,0.06)`) on near-black
- Animated chromatic wave lines (CSS animation or canvas) — same as the rainbow wave seen in screenshots
- Logo/wordmark centered, massive — `NEXGEN` in 80px bold white Barlow Condensed, `ACADEMY` in cyan spaced letters below
- "JOIN NOW" button: 56px height, cyan background, black text 14px Space Mono uppercase, border-radius 100px, glow effect
- Scroll indicator: minimal animated dot pulse at bottom center

**Chromatic Wave Animation:**
```css
@keyframes wave-drift {
  0%   { transform: translateX(-10%) scaleY(1); }
  50%  { transform: translateX(5%) scaleY(1.05); }
  100% { transform: translateX(-10%) scaleY(1); }
}
.wave-line {
  position: absolute;
  width: 140%;
  left: -20%;
  height: 2px;
  border-radius: 100%;
  animation: wave-drift 8s ease-in-out infinite;
  filter: blur(1px);
}
.wave-white { background: white; opacity: 0.9; top: 52%; animation-delay: 0s; }
.wave-red   { background: #FF3B30; opacity: 0.7; top: 54%; animation-delay: 0.3s; }
.wave-blue  { background: #0A84FF; opacity: 0.7; top: 50%; animation-delay: 0.6s; }
.wave-green { background: #30D158; opacity: 0.5; top: 56%; animation-delay: 0.9s; }
```

---

### 3. STATS SECTION

**Mobile layout:**
- Stack cards vertically (single column)
- Each card: dark elevated bg, 16px border-radius, padding 24px
- Large number: 3.5rem Barlow Condensed white, bold
- Label below: 0.65rem Space Mono, cyan, uppercase, letter-spacing 0.15em
- 3px cyan underline/accent below number (2rem wide)
- Cards have subtle `border: 1px solid rgba(255,255,255,0.07)`
- Animated count-up effect on scroll into view

**Tablet (480px+):** 3 cards in a row

```css
.stats-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
}
@media (min-width: 480px) {
  .stats-grid { grid-template-columns: repeat(3, 1fr); }
}
.stat-card {
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  padding: var(--space-xl) var(--space-lg);
  position: relative;
  overflow: hidden;
}
.stat-card::before {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-cyan), transparent);
}
.stat-number {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 8vw, 3.5rem);
  font-weight: 800;
  line-height: 1;
  color: var(--color-white);
}
.stat-label {
  font-family: var(--font-label);
  font-size: var(--text-label);
  color: var(--color-cyan);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-top: var(--space-sm);
}
```

---

### 4. OUR VISION / PHILOSOPHY SECTION

**Mobile layout:**
- Stacked vertically: Philosophy card first, Vision text second
- Philosophy card: dark card with teal gradient bg (`linear-gradient(135deg, rgba(0,100,80,0.4), rgba(0,30,30,0.8))`), rounded 20px
- "THE PHILOSOPHY" label: Space Mono, 10px, cyan, uppercase, tracking-widest
- Quote text: 1.5rem Barlow Condensed, white italic, with cyan keyword highlights
- Vision heading: `OUR` white + `VISION` cyan, Barlow Condensed, very large
- Cyan underline accent (3px, 40px wide) under heading
- Body text: DM Sans, 15px, gray-100, line-height 1.7
- "LEARN MORE ABOUT US" CTA: text link with cyan arrow/dash right

---

### 5. COURSE CARDS (Homepage Preview)

**Mobile:** Single column, full width cards
**Tablet (640px+):** 2 columns
**Desktop (1024px+):** 3 columns

```css
.courses-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
}
@media (min-width: 640px) {
  .courses-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .courses-grid { grid-template-columns: repeat(3, 1fr); }
}
```

**Card anatomy (mobile-optimized):**
- Card bg: `#111111`, border-radius 20px, overflow hidden
- **Thumbnail area:** 16:9 aspect ratio (aspect-ratio: 16/9), image fills, has dark gradient overlay at bottom
- **Badge** (MASTERCLASS / ENROLLMENT OPEN): absolute top-left, cyan pill bg, black text, 10px Space Mono uppercase
- **Meta row:** `ENROLLMENT OPEN` gray label left | `12.5+ Hours` cyan right — Space Mono 10px
- **Title:** Barlow Condensed 1.4rem, white, uppercase, 2 line max
- **Price + CTA row:** Price left (DM Sans 1.2rem bold white) | "VIEW DETAILS" right (cyan, Space Mono 11px uppercase, underline on hover)
- **Hover state (desktop):** card lifts `translateY(-4px)`, border becomes `rgba(0,229,255,0.25)`, box-shadow cyan glow

```css
.course-card {
  background: var(--color-bg-card);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-border);
  overflow: hidden;
  cursor: pointer;
  transition: transform var(--duration-med) var(--ease-out-expo),
              border-color var(--duration-med),
              box-shadow var(--duration-med);
}
@media (hover: hover) {
  .course-card:hover {
    transform: translateY(-4px);
    border-color: rgba(0,229,255,0.25);
    box-shadow: 0 20px 60px rgba(0,229,255,0.08);
  }
}
.card-thumbnail {
  aspect-ratio: 16/9;
  position: relative;
  overflow: hidden;
}
.card-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--ease-out-expo);
}
@media (hover: hover) {
  .course-card:hover .card-thumbnail img {
    transform: scale(1.05);
  }
}
.card-thumbnail::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%);
}
.card-body {
  padding: var(--space-lg);
}
.card-badge {
  position: absolute;
  top: var(--space-md);
  left: var(--space-md);
  background: var(--color-cyan);
  color: #000;
  font-family: var(--font-label);
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 100px;
  z-index: 2;
}
```

---

### 6. THE VAULT SECTION

**Filter bar (mobile):**
- Horizontal scrollable pills, `overflow-x: auto`, no scrollbar visible
- Pills: `scrollbar-width: none` + `-webkit-overflow-scrolling: touch`
- Active pill: cyan bg + black text | Inactive: border-only gray
- Pill height: 36px, font Space Mono 11px uppercase

**Vault card grid:**
- Mobile: 1 column
- 480px+: 2 columns
- 1024px+: 3 columns

**Vault card anatomy:**
- Same card dark bg, rounded 20px
- Thumbnail: square aspect-ratio (1:1)
- Badge top-right: BEST SELLER / NEW / ELITE — cyan pill
- Rating: star + number, bottom right of thumbnail
- Category: Space Mono cyan uppercase
- Title: Barlow Condensed white
- Price: bold white | PURCHASE button: white pill, black text, hover → cyan bg

```css
.vault-filter-bar {
  display: flex;
  gap: var(--space-sm);
  overflow-x: auto;
  scrollbar-width: none;
  padding-bottom: var(--space-sm);
  -webkit-overflow-scrolling: touch;
}
.vault-filter-bar::-webkit-scrollbar { display: none; }

.filter-pill {
  flex-shrink: 0;
  height: 36px;
  padding: 0 var(--space-md);
  border-radius: 100px;
  font-family: var(--font-label);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all var(--duration-fast);
  border: 1px solid var(--color-gray-600);
  color: var(--color-gray-400);
  background: transparent;
  white-space: nowrap;
}
.filter-pill.active {
  background: var(--color-cyan);
  border-color: var(--color-cyan);
  color: #000;
}
```

---

### 7. BLUEPRINT / PHASES SECTION

**Mobile layout:**
- Single vertical timeline, centered line
- Phases alternate left/right on tablet, all full-width on mobile
- Timeline line: 1px, `rgba(0,229,255,0.3)`, vertical, centered
- Phase dot: 10px circle, cyan filled, on the line
- Phase cards: dark bg, border 1px subtle, rounded 16px
- Phase label: Space Mono cyan uppercase (PHASE 01, PHASE 02...)
- Title: Barlow Condensed 1.5rem white
- Body: DM Sans 14px gray-100
- Tags at bottom: small dark pills, white text, 12px DM Sans

```css
.blueprint-timeline {
  position: relative;
  padding: var(--space-2xl) 0;
}
.timeline-line {
  position: absolute;
  left: 50%;
  top: 0; bottom: 0;
  width: 1px;
  background: linear-gradient(to bottom, transparent, rgba(0,229,255,0.4), transparent);
  transform: translateX(-50%);
}

/* Mobile: cards full width, offset from center */
.phase-card {
  width: calc(50% - 2rem);
  margin-left: auto; /* or margin-right depending on phase */
}

@media (max-width: 768px) {
  .phase-card {
    width: 100%;
    margin: 0;
  }
  .timeline-line {
    left: 1.5rem;
  }
}
```

---

### 8. INSTRUCTOR SECTION (VAIBHAV KADNAR)

**Mobile layout:**
- Image first (full width, 1:1 square, grayscale, rounded corners, subtle teal border)
- Text content stacked below
- Name: `VAIBHAV` white + `KADNAR` cyan outline (text-stroke), Barlow Condensed massive
- Quote: italic DM Sans, border-left 3px cyan, padding-left 16px
- Bio: DM Sans 14px gray-100
- Skill tags: 2-column grid of dark rounded pills, each with cyan dot indicator

```css
.instructor-name-line2 {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 12vw, 6rem);
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 2px var(--color-cyan);
  letter-spacing: 0.02em;
}
.instructor-quote {
  border-left: 3px solid var(--color-cyan);
  padding-left: var(--space-md);
  font-family: var(--font-body);
  font-style: italic;
  font-size: clamp(1rem, 3vw, 1.2rem);
  color: var(--color-gray-100);
  line-height: 1.6;
  margin: var(--space-lg) 0;
}
.skill-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-sm);
  margin-top: var(--space-lg);
}
.skill-tag {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-sm);
  padding: var(--space-sm) var(--space-md);
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: var(--color-gray-100);
}
.skill-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--color-cyan);
  flex-shrink: 0;
}
```

---

### 9. FAQ SECTION

**Mobile layout:**
- Full width accordion items
- Each item: `border-bottom: 1px solid rgba(255,255,255,0.08)`
- Closed: question text left + `+` icon right
- Open: question text + `×` icon + answer text slides down smoothly
- Answer: DM Sans 14px gray-400, padding 12px 0 20px
- Section heading: `SOLVING YOUR` white + `DOUBTS` cyan outline

```css
.faq-item {
  border-bottom: 1px solid var(--color-border);
}
.faq-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: var(--space-lg) 0;
  font-family: var(--font-body);
  font-size: clamp(0.9rem, 3vw, 1.05rem);
  font-weight: 600;
  color: var(--color-white);
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
}
.faq-icon {
  width: 24px; height: 24px;
  border: 1px solid var(--color-gray-600);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: var(--color-cyan);
  transition: transform var(--duration-med) var(--ease-out-expo),
              border-color var(--duration-fast);
  flex-shrink: 0;
}
.faq-item.open .faq-icon {
  transform: rotate(45deg);
  border-color: var(--color-cyan);
}
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--duration-med) var(--ease-out-expo),
              padding var(--duration-med);
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--color-gray-400);
  line-height: 1.7;
}
.faq-item.open .faq-answer {
  max-height: 500px;
  padding-bottom: var(--space-lg);
}
```

---

### 10. CTA BANNER SECTION ("READY TO BECOME NEXGEN?")

**Mobile layout:**
- Dark card with teal radial glow background (positioned center)
- `READY TO BECOME` white, Barlow Condensed large
- `NEXGEN?` cyan, same size, on separate line
- Subtext: DM Sans 14px gray-100, centered, max-width 480px
- Button: full width on mobile, cyan bg, black text, 56px height, Space Mono 13px uppercase
- Button glow on hover: `box-shadow: 0 0 30px rgba(0,229,255,0.5)`

```css
.cta-section {
  background: radial-gradient(ellipse at 50% 50%, rgba(0,100,80,0.25) 0%, transparent 70%);
  border: 1px solid rgba(0,229,255,0.15);
  border-radius: var(--border-radius-xl);
  padding: clamp(3rem, 10vw, 6rem) var(--container-padding);
  text-align: center;
}
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  padding: 0 2.5rem;
  background: var(--color-cyan);
  color: #000;
  font-family: var(--font-label);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  transition: box-shadow var(--duration-fast), transform var(--duration-fast);
  width: 100%;
  max-width: 320px;
}
.btn-primary:hover {
  box-shadow: 0 0 30px rgba(0,229,255,0.5);
  transform: translateY(-1px);
}
@media (min-width: 480px) {
  .btn-primary { width: auto; }
}
```

---

## 📐 Global Mobile Patterns

### Container
```css
.container {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}
```

### Section spacing
```css
section {
  padding: clamp(3rem, 10vw, 6rem) 0;
}
```

### Touch targets
- All tappable elements minimum 44×44px
- Buttons minimum 48px height on mobile
- Nav links: full-width tap area, padding 14px vertical

### Scroll behavior
```css
html {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
```

### Images
```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

### Prevent horizontal overflow
```css
body {
  overflow-x: hidden;
}
* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}
```

---

## 🎬 Scroll Animation Pattern (Intersection Observer)

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
```

```css
[data-animate] {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s var(--ease-out-expo),
              transform 0.6s var(--ease-out-expo);
}
[data-animate].visible {
  opacity: 1;
  transform: translateY(0);
}
[data-animate-delay="1"] { transition-delay: 0.1s; }
[data-animate-delay="2"] { transition-delay: 0.2s; }
[data-animate-delay="3"] { transition-delay: 0.3s; }
```

---

## 🔤 Typography Usage Reference

| Context             | Font              | Size        | Weight | Case       |
|---------------------|-------------------|-------------|--------|------------|
| Hero wordmark        | Barlow Condensed  | 14vw clamp  | 900    | UPPER      |
| Section headings     | Barlow Condensed  | 8vw clamp   | 700    | UPPER      |
| Card titles          | Barlow Condensed  | 1.4rem      | 700    | UPPER      |
| Body copy            | DM Sans           | 15px        | 400    | Sentence   |
| Labels / tags        | Space Mono        | 10–12px     | 600    | UPPER      |
| Prices               | DM Sans           | 1.2rem      | 700    | —          |
| CTA buttons          | Space Mono        | 12px        | 700    | UPPER      |

---

## 🌊 Background Texture System

```css
/* Subtle noise overlay for depth */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 1000;
  opacity: 0.4;
}

/* Section glow accents */
.glow-accent {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.glow-accent.cyan {
  width: 400px; height: 400px;
  background: rgba(0,229,255,0.06);
}
```

---

## ✅ Mobile UX Checklist

- [ ] No horizontal scroll on any screen < 375px
- [ ] All buttons ≥ 48px tall on mobile
- [ ] Hamburger menu fully accessible (aria-expanded, aria-label)
- [ ] Course images use `loading="lazy"` and `decoding="async"`
- [ ] Filter bar scrolls horizontally without showing scrollbar
- [ ] FAQ accordion has smooth animation (no jump)
- [ ] Count-up animation triggers on scroll-into-view
- [ ] Hero wave lines perform well on mobile (use `will-change: transform`)
- [ ] Font imports use `display=swap`
- [ ] Touch events don't have `300ms` delay (use `touch-action: manipulation`)

```css
button, a, [role="button"] {
  touch-action: manipulation;
}
```

---

## 🔗 Font Import (Add to `<head>`)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

---

*This guide covers every section of NexGen Academy with pixel-precise mobile specifications. Follow the token system and component specs exactly for a cohesive, premium feel across all device sizes.*