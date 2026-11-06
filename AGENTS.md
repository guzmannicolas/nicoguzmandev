# AGENTS.md — Nicolás Guzmán Dev (Engineering & Automation Studio)

Context specification guide for AI assistants and development agents working on the `nicoguzmandev` repository.

## 1. Project Overview
Production studio website and client acquisition platform for Nicolás Guzmán, offering 3 core commercial services:
1. **🌐 Branch 1: Web Solutions for Local Businesses** (`/webs` & `https://templates.nicoguzmandev.com`) — High-speed, responsive Astro websites for businesses that lack a web presence or rely solely on social media.
2. **🤖 Branch 2: Automation & AI Agents** (`/automatizacion`) — Intelligent 24/7 WhatsApp customer service bots and automatic appointment booking synchronized with Google Calendar.
3. **🏢 Branch 3: Software Consulting & Custom ERP** (`/erp`) — Tailored enterprise resource planning, multi-branch inventory control, and operational dashboards for growing SMEs.

- **Repository:** https://github.com/guzmannicolas/nicoguzmandev
- **Default Branch:** `main`
- **Live Production URL:** https://nicoguzmandev.com (also www.nicoguzmandev.com)
- **Deployment Platform:** Vercel (Production) + Cloudflare DNS

---

## 2. Tech Stack & Architecture
- **Framework:** Astro 5 (Static Site Generation).
- **Styling:** Tailwind CSS 4 with `@tailwindcss/vite` plugin.
- **UI Islands:** React 19 + Lucide React + Framer Motion.
- **Package Manager:** `pnpm` (v10+ / v12).

---

## 3. Directory Structure

```
nicoguzmandev/
├── public/
│   └── favicon.svg              # Studio brand SVG favicon
├── src/
│   ├── components/
│   │   ├── AiChatSimulator.tsx   # Interactive WhatsApp AI bot simulation
│   │   ├── ContactForm.tsx       # Multi-service diagnostic & lead capture form
│   │   ├── DiagnosticSelector.tsx# Interactive 3-branch diagnostic tabs
│   │   ├── ErpMetricsSimulator.tsx # Real-time multi-branch ERP dashboard demo
│   │   ├── Footer.astro          # Global site footer
│   │   ├── Navbar.astro          # Glassmorphic header with status badge
│   │   └── ShowroomGrid.astro    # Direct links to 8 commercial template demos
│   ├── layouts/
│   │   └── Layout.astro          # Root layout with SEO meta & ambient backgrounds
│   ├── pages/
│   │   ├── index.astro           # Main studio homepage
│   │   ├── webs.astro            # Branch 1 dedicated landing page
│   │   ├── automatizacion.astro  # Branch 2 dedicated landing page
│   │   ├── erp.astro             # Branch 3 dedicated landing page
│   │   └── contacto.astro        # Direct contact & scheduling route
│   └── styles/
│       └── global.css            # Tailwind 4 theme & lighting effects
├── astro.config.mjs
├── package.json
├── README.md
└── AGENTS.md
```

---

## 4. Key Commands

```bash
# Install dependencies
pnpm install

# Start local development server
pnpm run dev

# Production build
pnpm run build

# Preview production build
pnpm run preview
```

---

## 5. Development Guidelines
1. **Language Policy:** All documentation, commit messages, and internal notes must be in English. Client-facing copy is in Spanish (targeted to Argentina & LATAM commercial clients).
2. **Performance:** Maintain 100/100 Lighthouse performance scores. No heavy legacy libraries (avoid tsparticles or bloated analytics).
3. **Deployment:** Production builds are deployed via Vercel CLI (`vercel --prod --yes`) or automatic GitHub webhook pushes to `main`.
