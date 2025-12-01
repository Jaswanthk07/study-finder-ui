# 📚 StudyFinder - Modern Learning Platform

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwindcss)
![GSAP](https://img.shields.io/badge/GSAP-Animations-00D858?style=flat-square)
![Three.js](https://img.shields.io/badge/Three.js-3D-000000?style=flat-square&logo=three.js)
![Status](https://img.shields.io/badge/Status-Production%20Ready-green?style=flat-square)

> **A stunning, modern landing page for StudyFinder - connecting students with the best learning resources worldwide.**

---

## 🎯 Overview

StudyFinder is a high-performance, fully responsive landing page built with **Next.js**, **React**, and modern web technologies. It features smooth animations, beautiful design, interactive 3D globe, and works perfectly on all devices.

### Key Features

- ✨ **Smooth Animations** - GSAP ScrollTrigger animations on every section
- 🎨 **Modern Design** - Beautiful gradient meshes, neon effects, 3D transformations
- 🌍 **3D Globe** - Interactive Three.js globe showing global student network
- 📱 **Fully Responsive** - Optimized for phones (320px), tablets, laptops, desktops
- 🌙 **Dark/Light Mode** - Theme toggle with persistent preferences
- ⚡ **Production Ready** - TypeScript strict mode, ESLint validated, optimized build

---

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Development](#-development)
- [Deployment](#-deployment)
- [Responsive Design](#-responsive-design)
- [Components](#-components)
- [Performance](#-performance)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/Jaswanthk07/Study-Finder.git
cd Study-Finder/my-app

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Available Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run lint:fix   # Fix lint errors
```

---

## ✨ Features

### 🎨 Visual Excellence

- **Gradient Meshes** - Animated background with blur effects
- **Neon 3D Cards** - Hero card with tilt, perspective, glow effects
- **Modern Typography** - Responsive text scaling from 320px to 4K
- **Icon System** - Lucide React icons throughout

### 🎭 Interactions

- **Typing Animation** - Animated headline text reveal
- **Scroll Animations** - GSAP ScrollTrigger for section entrance
- **Floating Elements** - Smooth float animations on cards
- **Cursor Glow** - Dynamic cursor follow effect
- **Hover Effects** - Scale, shadow, and color transitions

### 🌐 Advanced Features

- **3D Globe** - Interactive Three.js globe with:
  - 16+ student markers at real locations
  - Connection arcs between students
  - Auto-rotation with user control
  - Smooth zoom/pan interactions
- **Dark Mode** - System preference detection + manual toggle
- **Responsive Grid** - Adapts from 1-5 columns based on screen

### 📊 Landing Page Sections

1. **Navbar** - Fixed navigation with dropdown menu
2. **Hero** - Main CTA with 3D card and trust indicators
3. **Features** - 5 key features with progress bars
4. **How It Works** - 4-step process with visual flow
5. **Pricing** - 3 tiers (Free, Pro, Premium)
6. **Testimonials** - 3 student reviews
7. **Globe** - 3D world map with 16+ locations
8. **Connections** - Partner integrations
9. **Vision** - Mission and values
10. **Footer** - Links, social, copyright

---

## 📁 Project Structure

```
my-app/
├── app/
│   ├── layout.tsx                 # Root layout + metadata
│   ├── page.tsx                   # Home page
│   └── globals.css                # Global styles + animations
│
├── components/
│   ├── ui/                        # Base UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── label.tsx
│   │
│   ├── hero-section.tsx           # Hero with 3D card
│   ├── features-section.tsx       # 5 features grid
│   ├── highlights-section.tsx     # 4-step process
│   ├── pricing-section.tsx        # 3 pricing plans
│   ├── testimonials-section.tsx   # Reviews
│   ├── globe-section.tsx          # 3D globe
│   ├── connections-glider.tsx     # Partners
│   ├── vision-section.tsx         # Mission
│   │
│   ├── navbar.tsx                 # Navigation
│   ├── footer.tsx                 # Footer
│   ├── auth-modal.tsx             # Login/Signup
│   │
│   ├── animated-counter.tsx       # Stats animation
│   ├── cursor-glow.tsx            # Cursor effect
│   ├── typing-effect.tsx          # Text typing
│   ├── dynamic-background.tsx     # BG animation
│   ├── theme-toggle.tsx           # Dark/Light toggle
│   ├── theme-provider.tsx         # Theme context
│   ├── scroll-to-top.tsx          # Scroll button
│   └── studyfinder-logo.tsx       # Logo
│
├── lib/
│   └── utils.ts                   # Helper functions
│
├── public/
│   ├── favicon.ico
│   ├── *.svg
│   └── *.jpg
│
├── package.json
├── tsconfig.json
├── tailwind.config.cjs
├── next.config.ts
├── eslint.config.mjs
└── README.md
```

---

## 🛠 Tech Stack

### Core Framework

| Technology | Version | Purpose                            |
| ---------- | ------- | ---------------------------------- |
| Next.js    | 15.2.4  | React framework with App Router    |
| React      | 19      | UI library                         |
| TypeScript | Latest  | Static type checking (strict mode) |

### Styling & Design

| Technology   | Purpose                       |
| ------------ | ----------------------------- |
| Tailwind CSS | Utility-first CSS framework   |
| PostCSS      | CSS processing pipeline       |
| next-themes  | Theme management (dark/light) |

### Animations & 3D

| Technology        | Purpose                        |
| ----------------- | ------------------------------ |
| GSAP              | Professional animation library |
| ScrollTrigger     | Scroll-based animation plugin  |
| Three.js          | 3D graphics engine             |
| React Three Fiber | React renderer for Three.js    |
| @react-three/drei | 3D utilities                   |

### UI & Icons

| Technology   | Purpose                    |
| ------------ | -------------------------- |
| shadcn/ui    | Pre-built React components |
| Lucide React | Icon library (200+ icons)  |
| CVA          | Component variants API     |

### Quality & Tools

| Technology        | Purpose                   |
| ----------------- | ------------------------- |
| ESLint            | Code linting & validation |
| Next.js Font Opt. | Auto font loading         |

---

## 💻 Development

### Getting Started

1. **Clone and setup**

   ```bash
   git clone https://github.com/Jaswanthk07/Study-Finder.git
   cd Study-Finder/my-app
   npm install
   ```

2. **Start dev server**

   ```bash
   npm run dev
   ```

3. **Edit files**
   - Modify files in `components/` and `app/`
   - Changes hot-reload in browser
   - TypeScript validates on save

### Best Practices

✅ **Always use TypeScript** for new components
✅ **Use Tailwind classes** instead of custom CSS
✅ **Use GSAP for animations** - don't use CSS transitions for complex effects
✅ **Test responsive design** at: 320px, 640px, 1024px, 1280px
✅ **Run linting** before commits: `npm run lint`
✅ **Keep components** under 300 lines
✅ **Add comments** for complex logic

### File Naming

- Components: `ComponentName.tsx`
- CSS: `globals.css` (global only)
- Types: Inside components or `types/`
- Utils: `lib/utils.ts`

---

## 🚀 Deployment

### Build for Production

```bash
# Build the project
npm run build

# Test production build locally
npm run start

# Visit http://localhost:3000
```

### Deploy to Vercel

**Option 1: Dashboard (Recommended)**

1. Go to https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Select "Study-Finder" repository
4. **Important: Set Root Directory to `.`** (not `./my-app`)
5. **Important: Project name must be lowercase** (e.g., `studyfinderui`)
6. Click "Deploy"
7. Wait 2-5 minutes for deployment

**Option 2: Vercel CLI**

```bash
npm install -g vercel
vercel
# Follow prompts to deploy
```

**Option 3: GitHub Auto-Deploy**

- Every push to `main` branch auto-deploys
- No additional setup needed after first deployment

### Environment Variables

Create `.env.local` file for local development (if needed):

```
NEXT_PUBLIC_VAR=value    # Public variables
PRIVATE_VAR=value        # Private variables
```

---

## 📱 Responsive Design

### Breakpoints

| Device        | Width           | Tailwind |
| ------------- | --------------- | -------- |
| Mobile        | 320px - 639px   | Default  |
| Small Tablet  | 640px - 767px   | `sm:`    |
| Tablet        | 768px - 1023px  | `md:`    |
| Laptop        | 1024px - 1279px | `lg:`    |
| Desktop       | 1280px - 1535px | `xl:`    |
| Large Desktop | 1536px+         | `2xl:`   |

### Mobile-First Approach

- Base styles for mobile (320px)
- Add breakpoint prefixes for larger screens: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Example: `text-2xl md:text-3xl lg:text-4xl`

### Testing

```bash
# Chrome DevTools
- Press F12
- Click device icon (top-left)
- Select mobile device or custom dimensions
- Test at: 320px, 768px, 1024px, 1536px
```

### Responsive Features Implemented

- ✅ Mobile hamburger menu
- ✅ Grid adapts: 1→2→3→4 columns
- ✅ Font scales: 14px mobile → 16px desktop
- ✅ Padding scales: 16px mobile → 24px desktop
- ✅ Touch-friendly buttons (44px minimum)
- ✅ No horizontal scrolling on any device

---

## 🎨 Components Guide

### Hero Section

**File:** `components/hero-section.tsx`

- Main CTA with gradient text
- 3D tilting card animation
- Trust indicators (ratings, user count)
- Floating notification and stats cards
- Scroll-triggered entrance

### Features Section

**File:** `components/features-section.tsx`

- 5 feature cards with icons
- Animated progress bars
- Leaderboard preview
- GSAP float animations

### Highlights Section

**File:** `components/highlights-section.tsx`

- 4-step "How It Works" process
- Numbered badges with gradients
- Arrow connectors (desktop only)
- Responsive layout

### Pricing Section

**File:** `components/pricing-section.tsx`

- 3 pricing tiers (Free, Pro, Premium)
- Feature comparison
- "Most Popular" badge
- CTA buttons

### Testimonials

**File:** `components/testimonials-section.tsx`

- 3 student reviews
- Avatar images
- Role and location
- Quote icons

### Globe Section

**File:** `components/globe-section.tsx`

- Interactive 3D globe (Three.js)
- 16+ student markers
- Connection arcs
- Auto-rotation + user control
- Stats below

### Navigation

**File:** `components/navbar.tsx`

- Fixed position
- Dropdown menu
- Mobile hamburger
- Theme toggle
- Auth buttons

### Footer

**File:** `components/footer.tsx`

- Multi-column layout
- Social media links
- GSAP entrance animations
- Copyright info

---

## 🎭 Animation Strategy

### GSAP ScrollTrigger

Used for scroll-triggered animations:

```typescript
gsap.registerPlugin(ScrollTrigger);
gsap.to(".card", {
  scrollTrigger: {
    trigger: ".card",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play none none reverse",
  },
  duration: 1,
  y: 0,
  opacity: 1,
});
```

### Tailwind Animations

Built-in animations for simple effects:

- `animate-pulse`
- `animate-bounce`
- `animate-spin`
- Custom: `float-icon`, `float-slow`, etc.

### CSS Transforms

For interactive effects:

- `hover:scale-105` - Scale on hover
- `hover:shadow-lg` - Shadow on hover
- `transition-all duration-300` - Smooth transitions

---

## ⚡ Performance

### Optimizations Implemented

✅ **Image Optimization** - WebP, lazy loading, responsive sizes
✅ **Code Splitting** - Route-based, dynamic imports for 3D
✅ **CSS Purging** - Tailwind removes unused classes
✅ **JS Minification** - SWC compiler reduces bundle
✅ **Font Loading** - Variable fonts with fallbacks
✅ **Lighthouse Score** - Target 90+ on all metrics

### Build Stats

```
Route (app)               / - 325 kB
First Load JS                   - 425 kB
Bundle Size             Optimized ✓
Performance                  High ✓
Accessibility               Good ✓
Best Practices              Good ✓
SEO                         Good ✓
```

### Metrics

- **FCP** (First Contentful Paint): < 1.5s
- **LCP** (Largest Contentful Paint): < 2.5s
- **CLS** (Cumulative Layout Shift): < 0.1
- **TTFB** (Time to First Byte): < 600ms

---

## 🌐 Browser Support

| Browser       | Support              | Notes            |
| ------------- | -------------------- | ---------------- |
| Chrome/Edge   | ✅ Latest 2 versions | Primary target   |
| Firefox       | ✅ Latest 2 versions | Full support     |
| Safari        | ✅ Latest 2 versions | iOS 14+ required |
| Mobile Chrome | ✅ Latest            | Android 8+       |
| Mobile Safari | ✅ Latest            | iOS 14+          |

### Feature Support

- ✅ CSS Grid & Flexbox
- ✅ CSS Variables
- ✅ CSS 3D Transforms
- ✅ WebGL (Three.js)
- ✅ LocalStorage (theme)
- ✅ Intersection Observer

---

## 🔐 Security

- ✅ TypeScript strict mode prevents type errors
- ✅ ESLint enforces best practices
- ✅ No hardcoded secrets or API keys
- ✅ Next.js security headers enabled
- ✅ CSRF protection built-in
- ✅ XSS prevention (React escaping)

---

## 📈 SEO

- ✅ Meta tags in `layout.tsx`
- ✅ Open Graph tags for sharing
- ✅ Semantic HTML structure
- ✅ Mobile-first responsive
- ✅ Fast page load times
- ✅ Structured data ready

---

## 🤝 Contributing

### Workflow

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Make changes following best practices
4. Run lint: `npm run lint`
5. Commit: `git commit -m 'Add amazing feature'`
6. Push: `git push origin feature/amazing-feature`
7. Open Pull Request

### Code Standards

- Use TypeScript everywhere
- Follow Tailwind conventions
- Add comments for complex logic
- Keep components focused
- Test on multiple devices
- Run `npm run lint` before commit

---

## 📚 Learning Resources

### Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [GSAP Docs](https://gsap.com/docs)
- [Three.js Docs](https://threejs.org/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

### Code Examples

- Hero animations: `components/hero-section.tsx`
- Responsive grid: `components/features-section.tsx`
- Global styles: `app/globals.css`
- Theme system: `components/theme-provider.tsx`

---

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
# Use different port
npm run dev -- -p 3001
```

### Build Fails with TypeScript Errors

```bash
# Run type check
npx tsc --noEmit

# Run linter
npm run lint
```

### Tailwind Classes Not Applied

```bash
# Rebuild Tailwind CSS
npm run build

# Restart dev server
npm run dev
```

### Theme Not Persisting

- Check browser localStorage is enabled
- Clear browser cache and try again

---

## 📄 License

MIT License - feel free to use this project for personal or commercial use.

---

## 👨‍💻 Author

**Jaswanth K**

- GitHub: [@Jaswanthk07](https://github.com/Jaswanthk07)
- Repository: [Study-Finder](https://github.com/Jaswanthk07/Study-Finder)

---

## 🙏 Acknowledgments

- **Next.js Team** - Excellent React framework
- **Tailwind Labs** - Amazing CSS utility framework
- **GSAP Team** - Professional animation library
- **Three.js Team** - Powerful 3D graphics engine
- **Vercel** - Easy deployment platform
- **shadcn/ui** - Beautiful pre-built components

---

## 📞 Support & Questions

- 🐛 **Issues**: [GitHub Issues](https://github.com/Jaswanthk07/Study-Finder/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/Jaswanthk07/Study-Finder/discussions)
- 📧 **Email**: [Add your email here]

---

## 🎯 Quick Checklist for Deployment

- [ ] Clone repository
- [ ] Run `npm install`
- [ ] Test locally with `npm run dev`
- [ ] Run `npm run lint` to check code
- [ ] Build with `npm run build`
- [ ] Deploy to Vercel with lowercase project name
- [ ] Set root directory to `.`
- [ ] Verify live site works on mobile/desktop
- [ ] Test dark/light mode toggle
- [ ] Check all animations work smoothly

---

**Built with ❤️ using Next.js, React, and modern web technologies**

_Last Updated: November 30, 2025_
_Status: Production Ready ✓_
