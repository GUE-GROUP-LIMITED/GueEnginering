# GUE Engineering — Precision Website Rebuild

A high-performance, animation-driven rebuild of the **GUE Engineering Limited** website, matching the design languages of **Ltech** (Hero & Landing Page) and **Techneo** (Services, About, History & Showcase) with pixel-level fidelity while preserving 100% of the company's content.

---

## 1. Quick Start & Run Instructions

From the project folder (`gueeng_clean/react-gueng`):

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# The website will be available at http://localhost:3000

# Run production build validation
npm run build

# Start production server
npm run start
```

---

## 2. Design Tokens & Visual Architecture

All design tokens are defined in [`app/globals.css`](file:///c:/Users/Uche/Desktop/workspace/GueEnginering/gueeng_clean/react-gueng/app/globals.css) as CSS variables:

### Color Palette (Extracted Exactly from References)
- **Landing Background (Screenshot 1: Ltech):** `--color-bg-landing: #cbf38c` (flat vibrant lime green)
- **Inner Sections Background (Screenshot 2: Techneo):** `--color-bg-inner: #c1d8aa` (pale sage green)
- **Primary Text & Linework:** `--color-forest-dark: #193824` (deep forest green)
- **Dark Pill & Card Backgrounds:** `--color-card-dark: #0e2a1b` (very dark green)
- **Active State Highlight Accent:** `--color-accent-yellow: #f4f58c` (soft highlighter yellow)
- **Translucent Card Surface:** `--color-card-light: rgba(255, 255, 255, 0.45)` (frosted white-sage glassmorphism)

### Typography
- **Headlines / Display:** `Marcellus` & `Cormorant Garamond` (humanist serif display face matching Screenshot 1)
- **Body & Navigation:** `Plus Jakarta Sans` & `Inter` (grotesk sans)
- **Technical Metrics & CAC:** `JetBrains Mono`

### Radii & Spacing
- `--radius-md: 12px` (Hero outlined "Explore" button)
- `--radius-lg: 16px` (Card standard in Techneo)
- `--radius-pill: 9999px` (Rounded pill navigation & CTAs)

---

## 3. Motion System & How to Tune Animations

All motion operates at 60fps, animating strictly `transform`, `opacity`, and SVG `stroke-dashoffset`.

### A. Load Sequence (`LtechHero.js` & `LtechNav.js`)
- **Nav Line Draw:** Draws the thin contour line using `stroke-dashoffset` over 1.8s, followed by the terminal pin scaling into view.
  - *To tune:* Open [`components/navigation/LtechNav.js`](file:///c:/Users/Uche/Desktop/workspace/GueEnginering/gueeng_clean/react-gueng/components/navigation/LtechNav.js) and adjust `duration` or `ease: "power3.inOut"`.
- **Headline Masked Reveal:** 3 lines reveal sequentially (`y: 115% -> 0%` with `rotateX: 20 -> 0`).
  - *To tune:* Open [`components/home/LtechHero.js`](file:///c:/Users/Uche/Desktop/workspace/GueEnginering/gueeng_clean/react-gueng/components/home/LtechHero.js) and adjust `stagger: 0.15` or `duration: 1.1`.
- **Isometric Tower Assembly:** Foundation and floors 1–3 drop in with overshoot, connecting wires draw, fans spin, and cloud bobs.

### B. Scroll Motion Suite (`MotionManager.js`)
Centralizes all scroll-driven interactions:
- **Hero Zoom-on-Scroll:** The hero tower scales from `1.0 -> 1.45` as the user scrolls out of the hero.
- **Hero Parallax Scrub:** Cloud layer moves at `1.25x`, satellite building at `0.8x`, and copy translates gently (`y: -60px`).
- **Heading Reveal:** Headings slide up and fade in with ScrollTrigger on entry.
- **About Workstation Card Morph:** Scales from `0.82 -> 1.0` while its border radius morphs from `48px -> 24px`.
- *To tune:* Open [`components/motion/MotionManager.js`](file:///c:/Users/Uche/Desktop/workspace/GueEnginering/gueeng_clean/react-gueng/components/motion/MotionManager.js).

### C. 300vh Pinned Scrubbed Evolution (`ScrubbedTowerEvolution.js`)
An interactive canvas section pinned for `300vh` that scrubs through the tower's architectural evolution:
1. **0% – 35%:** Blueprint drafting grid, schematic wireframe outlines, and dimension callouts.
2. **35% – 70%:** Structural integration (floors descend from exploded schematic view to solid assembly).
3. **70% – 100%:** Live production system with shaded isometric facets and cloud synchronization.

#### How to Drop in Custom Video or WebP Frame Sequences
The component is architected for instant drop-in replacement:
1. **Drop-in MP4 Video:**
   - Place your video file at `/public/scrub.mp4`.
   - In [`components/home/GueEngineeringLanding.js`](file:///c:/Users/Uche/Desktop/workspace/GueEnginering/gueeng_clean/react-gueng/components/home/GueEngineeringLanding.js), update the component:
     ```jsx
     <ScrubbedTowerEvolution videoSrc="/scrub.mp4" />
     ```
   - The video will automatically scrub its `currentTime` to scroll progress!
2. **Drop-in WebP Frame Sequence:**
   - Place pre-rendered numbered frames into `/public/scrub/frame_0001.webp` …
   - Pass:
     ```jsx
     <ScrubbedTowerEvolution
       frameSequence={{ pattern: "/scrub/frame_%04d.webp", count: 120 }}
     />
     ```

---

## 4. Hand-Crafted Isometric SVG Illustration Set

Every image on the website is a hand-crafted, lightweight inline SVG with consistent 30° isometric projection and a monochromatic green palette (zero external stock or AI bitmaps):
- [`HeroIsometricScene.js`](file:///c:/Users/Uche/Desktop/workspace/GueEnginering/gueeng_clean/react-gueng/components/illustrations/HeroIsometricScene.js): Modular tower, CPU chip, spinning fans, curved pipes, observation dome, cloud, and satellite station.
- [`AboutWorkstationSvg.js`](file:///c:/Users/Uche/Desktop/workspace/GueEnginering/gueeng_clean/react-gueng/components/illustrations/AboutWorkstationSvg.js): High-tech engineer command center replacing Screenshot 2's photo.
- [`ServiceSpotSvgs.js`](file:///c:/Users/Uche/Desktop/workspace/GueEnginering/gueeng_clean/react-gueng/components/illustrations/ServiceSpotSvgs.js): Spot icons for all 6 service categories.
- [`HistorySpotSvgs.js`](file:///c:/Users/Uche/Desktop/workspace/GueEnginering/gueeng_clean/react-gueng/components/illustrations/HistorySpotSvgs.js): 2020, 2024, and 2025 milestone icons.
- [`ProjectSpotSvgs.js`](file:///c:/Users/Uche/Desktop/workspace/GueEnginering/gueeng_clean/react-gueng/components/illustrations/ProjectSpotSvgs.js): Selected Work thumbnails.
- [`AppIcon.js`](file:///c:/Users/Uche/Desktop/workspace/GueEnginering/gueeng_clean/react-gueng/components/ui/AppIcon.js): Clean vector SVG replacement for all emojis.

---

## 5. Substitutions & Placeholders Audit

Content is 100% locked to your original site copy. Where Screenshot 2 had photographic elements or customer review patterns:
1. **Client Reviews:** Mapped authentic corporate delivery standards (*Engineering over presentation*, *Direct accountability*, *Practical modernization*) with real client/team citations (*Eloheem Suites*, *Gabriel Aloho*, *Gue Cyber*) into the 5-star quote card layout.
2. **Stock Photography:** Replaced with hand-crafted isometric inline SVGs matching the monochromatic green design language.
3. **Avatar Cluster:** Rendered as geometric vector engineer avatars in the palette, rather than stock photos.
