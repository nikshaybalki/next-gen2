NexGen Academy — Academics Section Design Guide
Overview & Philosophy
This guide will transform the Academics section into a standalone premium learning interface — completely separate from the main NexGen site. Think Coursera's clarity meets the editorial minimalism of Composio's white-theme pages. Steve Jobs principle: fewer elements, each one perfect.

Core Design Principles
1. Radical Simplicity — Every element must earn its place. If it doesn't help the user learn, remove it.
2. Typographic Hierarchy — The Composio reference uses bold serif/display fonts for headings with clean sans-serif for body. Adopt this contrast.
3. Purposeful Color — Near-white background (#F5F4F0 like Composio), near-black text (#1A1A1A), ONE accent color (cyan #00D4C8 carried from NexGen branding, used sparingly — progress bars, active states, CTAs only).
4. Generous Whitespace — Sections breathe. Cards have padding. Nothing feels cramped.

Typography System
Display/Hero:     Playfair Display or Fraunces — Serif, italic for course titles
Headings (H2-H3): Inter or DM Sans — Bold, tracked slightly
Body/Labels:      Inter — Regular 400, muted gray #6B6B6B
Monospace:        For module/lesson codes (1.2.1 style) — JetBrains Mono
This matches the Composio editorial feel — serif for emotion, sans-serif for function.

Color Palette
Background:       #F7F6F2  (warm off-white, like Composio)
Surface/Cards:    #FFFFFF  with subtle border #E8E6E0
Text Primary:     #1A1A1A
Text Secondary:   #6B6B6B
Text Muted:       #9A9A9A
Accent/Action:    #00D4C8  (NexGen cyan — progress bars, active lesson, CTAs)
Accent Secondary: #1A1A1A  (black buttons, like Composio's "SIGN IN")
Success:          #2D9F6E  (completed lessons checkmark)
Warning/Premium:  #E8A838  (premium badge)
No gradients except course thumbnail placeholders.

Layout & Structure
Overall Shell
- No navbar from main site
- Full viewport standalone app
- Two-column layout on lesson view (sidebar 280px fixed + main content fluid)
- Single column on dashboard
- Max content width: 1200px, centered
- Top bar: 56px height, minimal — just logo + user avatar + dark mode toggle
Top Bar (replacing current navbar)
Left:   NexGen Academy wordmark (small, refined)
Center: Breadcrumb — "Academics / Creating Viral Content / Module 1"  
Right:  [Studio Mode pill] + [notification bell] + [avatar]

Section-by-Section Design Guide
1. Dashboard / Welcome Page (Welcome Nikshay screen)
Current: Dark theme, blue accent, card layout
Updated: Light #F7F6F2 background
Welcome Header:
"Welcome back, Nikshay."  
— Playfair Display Italic, 40px, #1A1A1A
— Subtitle: "Pick up where you left off." — Inter 16px, #6B6B6B
— Remove the teal/blue color on name. Name in bold black only.
Current Progress Card:
- White card, 1px border #E8E6E0, 16px border-radius
- Subtle box-shadow: 0 2px 16px rgba(0,0,0,0.06)
- Course thumbnail left (320px wide, rounded corners 12px, dark gradient overlay)
- PREMIUM badge: small pill, black background, white text — not colored
- Course title: Playfair Display 28px bold
- Description: Inter 15px, #6B6B6B
- Progress bar: thin 3px line, cyan #00D4C8, with percentage in small mono font
- "UP NEXT" label: 10px uppercase tracked, muted gray
- Module/lesson text: Inter medium
- RESUME button: Black pill button, white text, no gradient, 44px height
Your Other Courses:
- Section label: 11px uppercase, tracked 2px, #9A9A9A — "YOUR OTHER COURSES"
- Cards: White, 12px radius, hover lifts with shadow transition
- Thumbnail: Top of card, 160px height, dark overlay with category pill
- Category pill: Black bg, white text, 10px uppercase (not colored)
- Course name: Inter Semibold 16px
- Progress bar: 2px height, colored by category (cyan default)
- Status text: "Resume" / "Start Module 2" — cyan text, no button

2. Lesson View Page (the Coursera-like interface)
Left Sidebar (280px, white, border-right 1px #E8E6E0):
Top:
- Course title: Inter Semibold 14px, black
- Progress: "33% Complete — 12/36 Lessons" in 12px muted + thin progress bar

Module groups:
- Module label: 10px uppercase, muted #9A9A9A — "MODULE 1"
- Module title: Inter Medium 15px, black
- Expand/collapse chevron: right aligned

Lesson items:
- 44px row height
- Left icon: ✓ circle (completed, green), ● filled (active, cyan), 🔒 (locked, muted)
- Lesson code: Mono 11px, muted — "1.2.1"
- Lesson title: Inter 14px
- Duration: 11px muted, right aligned
- Active lesson: Left border 3px cyan, light cyan background tint #F0FFFE
- Hover: subtle #F5F4F0 background
Main Content Area:
Video Player:
- Full width, 16:9 aspect ratio
- Minimal custom controls bar (not browser default)
- Clean play button overlay (white circle, no heavy styling)
- No border radius on video itself — edge to edge in its container
Below video:
- Lesson title: Playfair Display Italic 26px
- Description: Inter 15px, #6B6B6B, max-width 640px
- Tab bar: "Transcript / Notes & Highlights / Resources / Discussion"
  — Tabs: Inter 14px, inactive muted, active black with 2px cyan underline
  — No background pills on tabs

Transcript:
- Timestamp: Mono 12px, cyan #00D4C8, clickable
- Text: Inter 15px, line-height 1.7, #1A1A1A
- 16px gap between timestamp blocks
Lesson Resources (right sidebar panel):
- White card, border, 12px radius
- "Lesson Resources" — 12px uppercase, tracked, muted
- File items: icon + filename, 14px, hover underline
- Clean, no clutter
Next Lesson CTA:
- Fixed bottom-right or end of content
- Black pill button: "Next Lesson →"
- 48px height, Inter Semibold

Interaction & Motion
- Page transitions: 200ms fade (no slides, no bounces)
- Card hover: translateY(-2px) + shadow deepens — 150ms ease
- Progress bars: Animate width on mount, 600ms ease-out
- Sidebar lesson click: Instant, no animation delay
- Tab switching: 150ms fade content

What to Remove / Simplify

❌ No colored gradient backgrounds anywhere
❌ No multiple accent colors competing
❌ No heavy card shadows (keep them whisper-light)
❌ Remove the dark theme entirely from this section
❌ No navbar from main site
❌ No footer from main site
✅ Replace all colored category labels with black pill badges
✅ Make RESUME the only prominent CTA — everything else is secondary


Responsive Behavior
Desktop (1200px+): Full two-column lesson view
Tablet (768-1199px): Sidebar collapses to top sheet/drawer
Mobile (<768px): Sidebar hidden, accessible via hamburger; video full width

Implementation Notes for Antigravity

This is a route-level separation — load a completely different layout component when navigating to /academics or /courses. No shared layout with the main site shell.
Font loading: Add Playfair Display + Inter + JetBrains Mono via Google Fonts. Remove any existing font that conflicts.
The only colors that should appear in CSS are the 8 defined above. Enforce this with CSS custom properties:

css--bg-base: #F7F6F2;
--bg-surface: #FFFFFF;
--border: #E8E6E0;
--text-primary: #1A1A1A;
--text-secondary: #6B6B6B;
--text-muted: #9A9A9A;
--accent: #00D4C8;
--success: #2D9F6E;

Keep all existing content and sections exactly as-is — only update visual styling, fonts, colors, spacing, and component appearance.
Reference the Composio white-theme pages for spacing rhythm — notice how much empty space they use around cards and between sections. Match that breathing room.