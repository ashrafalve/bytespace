# ByteSpace — Online Learning Platform

ByteSpace is a modern, fully responsive multi-page web application built with **Next.js 15** and **TypeScript**. It is designed as a professional online learning platform where learners can discover courses, track their progress, read community testimonials, and sign up or log in to their accounts.

The project includes a complete **landing page**, a **Sign In page**, and a **Register page** — all built with reusable components, clean code structure, and a polished UI.

🚀 **Live Demo**: [https://bytespace-zeta.vercel.app](https://bytespace-zeta.vercel.app)

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Landing Page | `/` | Full marketing page with hero, courses, growth, testimonials, CTA, and footer |
| Sign In | `/login` | Login form with email/password and social sign-in (Facebook, Google) |
| Register | `/register` | Registration form for new users |

---

## Sections (Landing Page)

| Section | Description |
|---------|-------------|
| **Navbar** | Responsive navigation with mobile hamburger menu |
| **Hero** | Animated hero with floating stat cards (UI/UX Design, Learning Progress 55%, Happy Students) and a slide-up student image |
| **Trusted Brands** | Auto-scrolling marquee of brand logos |
| **Courses** | Filterable grid of course cards with thumbnails, ratings, and instructor info |
| **Your Path to Professional Growth** | Two-row feature section with floating info cards and 3D decorative shapes |
| **Testimonials** | Three testimonial cards on a blue-to-lime gradient background |
| **CTA (Call to Action)** | Full-width promotional banner encouraging sign-up |
| **Footer** | Links, social icons, and company info |

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Vanilla CSS (custom animations, clamp() fluid sizing)
- **Fonts**: Poppins via Google Fonts
- **Deployment**: Vercel

---

## Features

- 🎨 Animated hero section — student image slides up, floating cards slide in from sides
- 📐 Fluid responsive design using `clamp()` — scales smoothly from mobile to desktop
- 📚 Courses section with category filter tabs
- 📈 Growth section with scroll-reveal animations
- 🌟 Testimonials with a soft blue-to-lime gradient background
- 🏷️ Trusted brands infinite marquee (pauses on hover)
- 🔐 Full Sign In & Register auth UI with Facebook and Google social buttons
- 📱 Mobile-optimized — hamburger nav, stacked layouts, hidden decorative assets on small screens

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/ashrafalve/bytespace.git
cd bytespace

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
bytespace/
├── app/
│   ├── components/              # Reusable UI components
│   │   ├── Navbar.tsx           # Top navigation bar
│   │   ├── HeroSection.tsx      # Hero with image + floating cards
│   │   ├── TrustedBrands.tsx    # Auto-scrolling brand marquee
│   │   ├── CoursesSection.tsx   # Filterable course grid
│   │   ├── GrowthSection.tsx    # Professional growth feature rows
│   │   ├── TestimonialsSection.tsx  # Community testimonials
│   │   ├── CTASection.tsx       # Call-to-action banner
│   │   ├── ScrollReveal.tsx     # Scroll-triggered reveal wrapper
│   │   └── Footer.tsx           # Site footer
│   ├── login/                   # Sign In page (/login)
│   ├── register/                # Register page (/register)
│   ├── globals.css              # Global styles, animations, responsive rules
│   ├── layout.tsx               # Root layout with font and metadata
│   └── page.tsx                 # Home page (landing)
├── public/
│   ├── assets/                  # Decorative 3D shape images (cones, frames)
│   ├── icons/                   # Brand logos and social icons
│   └── images/                  # Hero student image, course thumbnails
└── README.md
```

---

## Branch & PR

- Feature branch: `feature/bytespace-landing-page`
- Pull Request raised against `main` for review

---

## Reviewer Notes

All UI work is contained in the `feature/bytespace-landing-page` branch with a PR open against `main`. The live Vercel deployment is connected to `main` and reflects all latest changes including responsive fixes, animations, and icon updates.
