# ByteSpace — Online Learning Platform

A modern, fully responsive online learning platform landing page built with **Next.js 15**. ByteSpace allows learners to explore courses, track progress, and connect with a vibrant community.

🚀 **Live Demo**: [https://bytespace-ashrafalve.vercel.app](https://bytespace-ashrafalve.vercel.app)

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Vanilla CSS
- **Fonts**: Poppins (Google Fonts)
- **Deployment**: Vercel

---

## Features

- 🎨 Hero section with animated floating cards and slide-up student image
- 📚 Courses section with filterable course cards
- 🌟 Testimonials section with gradient background
- 📈 "Your Path to Professional Growth" section
- 🏷️ Trusted brands marquee animation
- 🔐 Sign In & Register auth pages
- 📱 Fully responsive — mobile, tablet, and desktop

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
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── TrustedBrands.tsx
│   │   ├── CoursesSection.tsx
│   │   ├── GrowthSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── CTASection.tsx
│   │   └── Footer.tsx
│   ├── login/               # Sign In page
│   ├── register/            # Register page
│   ├── globals.css          # Global styles & animations
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── assets/              # Decorative 3D shape images
│   ├── icons/               # Brand & social icons
│   └── images/              # Hero and course images
└── README.md
```

---

## Branch & PR

- Feature branch: `feature/bytespace-landing-page`
- Pull Request raised against `main` for review

---

## Reviewer Notes

All UI work is on the `feature/bytespace-landing-page` branch with a PR open against `main`. The live Vercel deployment is connected to `main` and reflects all latest changes.
