# StudyFinder UI - Landing Page

![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwindcss)
![React Three Fiber](https://img.shields.io/badge/R3F-3D-000?style=flat-square)
[![Live Demo](https://img.shields.io/badge/demo-live-success?style=flat-square)](https://study-finder-ui.vercel.app)

A modern landing page for StudyFinder - a platform that connects students with study partners. This project showcases interactive UI components, 3D visualizations, and smooth animations built with React and Next.js.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Components](#-components)
- [Responsive Design](#-responsive-design)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Browser Support](#-browser-support)

---

## 🎯 Overview

This is a frontend implementation focused on UI design and interactive web frontend experience. The landing page features custom animations, a 3D globe visualization, and modern design patterns. **Note:** This is a design showcase - no backend functionality or authentication system is included.

### Key Highlights

- **Interactive Components** - Custom cursor, magnetic buttons, typing animations
- **3D Graphics** - Interactive Three.js globe with university network visualization
- **Smooth Animations** - Scroll-triggered reveals and micro-interactions
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Modern Design** - Glassmorphism, gradients, and film grain effects

---

## ✨ Features

### Interactive Elements
- **Custom Cursor** - Animated trail that follows mouse movement with magnetic hover effects
- **Magnetic Buttons** - Buttons that respond to cursor proximity with smooth movement
- **Typing Effect** - Animated text that cycles through different search terms
- **Scroll Reveals** - Content fades in and slides up as you scroll

### 3D Visualization
- **Interactive Globe** - React Three Fiber globe showing global university network
- **Rotating Nodes** - University markers with hover interactions
- **Info Popups** - Details appear when hovering over universities
- **Auto-rotation** - Smooth continuous rotation with user control

### Design Features
- **Film Grain Overlay** - Subtle texture for added depth
- **Glassmorphism** - Backdrop blur effects on navigation
- **Gradient Backgrounds** - Dynamic color transitions
- **Hover Effects** - Scale, shadow, and color animations

### Page Sections
1. **Hero** - Main call-to-action with typing animation
2. **Product Highlights** - Feature showcase cards
3. **Connections** - University carousel with smooth transitions
4. **Features** - featuring capabilities overview
5. **3D Globe** - Interactive world map
6. **Vision** - Mission and values
7. **Testimonials** - Student reviews
8. **Pricing** - Three-tier pricing structure
9. **Contact** - Early access form
10. **Footer** - Links and social media

---

## 🛠 Tech Stack

### Core Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15+ | React framework with App Router |
| React | 18+ | UI library |
| TypeScript | 5.0+ | Type safety |

### Styling & Design
| Technology | Purpose |
|------------|---------|
| Tailwind CSS v4 | Utility-first styling |
| shadcn/ui | Pre-built components |
| Lucide React | Icon library |

### 3D & Animation
| Technology | Purpose |
|------------|---------|
| React Three Fiber | 3D graphics with React |
| Three.js | WebGL 3D engine |
| Framer Motion | Animation library |

### Typography
- **Plus Jakarta Sans** - Headings (200-800 weights)
- **Inter** - Body text (300-700 weights)
- **Geist Mono** - Monospace/code

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or higher
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/jaswanthk07/study-finder-ui.git
cd study-finder-ui

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 📁 Project Structure

```
study-finder-ui/
├── src/
│   ├── app/
│   │   ├── fonts/              # Custom font files
│   │   ├── favicon.ico         # Site favicon
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Main landing page
│   │
│   └── components/
│       ├── auth-modal.tsx           # Login/signup modal
│       ├── connections-glider.tsx   # University carousel
│       ├── contact-section.tsx      # Contact form
│       ├── custom-cursor.tsx        # Animated cursor
│       ├── features-section.tsx     # Features grid
│       ├── footer.tsx               # Footer
│       ├── globe-section.tsx        # 3D globe
│       ├── grain-overlay.tsx        # Texture overlay
│       ├── hero-section.tsx         # Hero section
│       ├── magnetic-button.tsx      # Interactive button
│       ├── navigation.tsx           # Header
│       ├── pricing-section.tsx      # Pricing cards
│       ├── product-highlights.tsx   # Feature cards
│       ├── reveal-wrapper.tsx       # Scroll animations
│       ├── testimonials-section.tsx # Reviews
│       └── vision-section.tsx       # Vision content
│
├── public/                     # Static assets
├── .eslintrc.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Components

### Custom Cursor
Smooth cursor trail that follows mouse movement with linear interpolation (lerp factor: 0.15). Scales to 1.5× on interactive elements.

```typescript
// Smooth following with RAF
requestAnimationFrame(() => {
  currentX = lerp(currentX, targetX, 0.15);
  currentY = lerp(currentY, targetY, 0.15);
});
```

### Magnetic Buttons
Buttons that move toward cursor on hover, creating an interactive magnetic effect with 15% movement range.

```typescript
// Calculate offset from center
const deltaX = (mouseX - centerX) * 0.15;
const deltaY = (mouseY - centerY) * 0.15;
element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
```

### 3D Globe
Interactive Three.js sphere with university nodes. Features auto-rotation, hover interactions, and info popups.

```typescript
<mesh>
  <sphereGeometry args={[2, 64, 64]} />
  <meshStandardMaterial wireframe transparent opacity={0.3} />
</mesh>
```

### Scroll Reveals
Content sections animate in using IntersectionObserver. Triggers at 30% viewport visibility with fade + slide-up effect.

```typescript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, { threshold: 0.3 });
```

---

## 📱 Responsive Design

### Breakpoints

| Device | Width | Tailwind Prefix |
|--------|-------|----------------|
| Mobile | 320px - 639px | Default |
| Tablet | 640px - 1023px | `sm:`, `md:` |
| Desktop | 1024px+ | `lg:`, `xl:`, `2xl:` |

### Mobile-First Approach
- Base styles target mobile (320px)
- Progressively enhance for larger screens
- Touch-friendly tap targets (44px minimum)
- No horizontal scrolling on any device

### Responsive Features
✅ Mobile hamburger menu
✅ Adaptive grid layouts (1→2→3 columns)
✅ Scaled typography (14px→16px)
✅ Optimized spacing and padding
✅ Stacked layouts on mobile

---

## 🚀 Deployment

### Build for Production

```bash
# Create optimized build
npm run build

# Test production build locally
npm start
```

### Deploy to Vercel (Recommended)

**Option 1: Dashboard**
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Configure project settings:
   - Framework: Next.js
   - Root Directory: `./` (leave as default)
4. Click "Deploy"

**Option 2: Vercel CLI**
```bash
npm install -g vercel
vercel --prod
```

### Other Platforms
Can be deployed to:
- Netlify
- Cloudflare Pages
- AWS Amplify
- Self-hosted with Node.js

---

## ⚡ Performance

### Optimizations

✅ **GPU Acceleration** - CSS transforms with `translate3d()` and `will-change`
✅ **Efficient Animations** - RequestAnimationFrame for 60fps
✅ **Lazy Loading** - Images and components load on demand
✅ **Code Splitting** - Route-based chunks with dynamic imports
✅ **Optimized Assets** - Next.js automatic image optimization
✅ **Reduced Bundle** - Tree-shaking removes unused code

### Metrics Target
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.5s

---

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest 2 | ✅ Full |
| Firefox | Latest 2 | ✅ Full |
| Safari | Latest 2 | ✅ Full |
| Edge | Latest 2 | ✅ Full |
| Mobile Safari | iOS 14+ | ✅ Full |
| Mobile Chrome | Android 8+ | ✅ Full |

### Required Features
- CSS Grid & Flexbox
- CSS 3D Transforms
- WebGL (for Three.js)
- IntersectionObserver
- RequestAnimationFrame

---

## 🎯 Design System

### Color Palette

```css
/* Primary Colors (OKLCH) */
--primary: oklch(0.5106 0.2301 276.9656);    /* Purple */
--secondary: oklch(0.7038 0.123 182.5025);   /* Teal */
--accent: oklch(0.7686 0.1647 70.0804);      /* Orange */

/* Backgrounds */
--background: oklch(0.9789 0.0082 121.6272); /* Cream */
--card: #ffffff;                              /* White */
```

### Animation Timing

```css
/* Durations */
--duration-fast: 200ms;
--duration-normal: 300ms;
--duration-slow: 600ms;

/* Easing */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
```

---

## ♿ Accessibility

- ✅ Semantic HTML structure
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus visible states
- ✅ Color contrast WCAG AA compliant
- ✅ Reduced motion support with `prefers-reduced-motion`
- ✅ Screen reader friendly

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### TypeScript Errors
```bash
npx tsc --noEmit
npm run lint
```

### Tailwind Not Working
```bash
npm run build
npm run dev
```

### 3D Globe Not Rendering
- Check browser WebGL support: `about:gpu` in Chrome
- Ensure Three.js is properly installed
- Clear browser cache

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-animation`
3. Make your changes
4. Run linting: `npm run lint`
5. Commit: `git commit -m 'Add new animation'`
6. Push: `git push origin feature/new-animation`
7. Open a Pull Request

### Code Standards
- Use TypeScript for all new components
- Follow existing code style
- Add comments for complex logic
- Test on multiple devices
- Keep components under 300 lines

---

## 📄 License

MIT License - Free to use for personal and commercial projects.

---

## 👨‍💻 Links

- GitHub: [@jaswanthk07](https://github.com/jaswanthk07)
- Project: [github.com/jaswanthk07/study-finder-ui](https://github.com/jaswanthk07/study-finder-ui)
- Live Demo: [study-finder-ui.vercel.app](https://study-finder-ui.vercel.app)

---

## 🙏 Acknowledgments

- Next.js team for the excellent framework
- Tailwind Labs for utility-first CSS
- Three.js community for 3D graphics tools
- shadcn for beautiful UI components
- Vercel for seamless deployment

---

**Built with Next.js, React, TypeScript, and Tailwind CSS**
