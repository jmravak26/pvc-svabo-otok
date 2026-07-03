# Švabo-Otok d.o.o. — Web App

Official website for **Švabo-Otok d.o.o.** — a PVC and ALU joinery company based in Turjaci, Sinj, Croatia. The site presents the company's services, gallery of work, partners, and contact information, and is available in both Croatian and English.

## 🌐 Live Site

[https://pvcsvabowebapp.web.app/](https://pvcsvabowebapp.web.app/)

## 📁 Project Structure

```
svaboOtokApp/
├── frontend_svaboOtok/         # React frontend (Vite + TypeScript + Tailwind CSS)
│   ├── public/
│   │   └── images/             # Hero, gallery, and partner logo images
│   └── src/
│       ├── components/         # Page sections
│       │   ├── Header.tsx      # Fixed nav, scroll-driven bg transition, language toggle, mobile menu
│       │   ├── Hero.tsx        # Auto-sliding hero with 5 product images, bottom-left text overlay
│       │   ├── About.tsx       # 4 service cards with icons, clickable detail modals
│       │   ├── Gallery.tsx     # Image grid with lightbox, links to /gallery page
│       │   ├── Cooperations.tsx# 8 partner logos with links and hover effects
│       │   ├── Footer.tsx      # Contact info, quick links, working hours, easter egg
│       │   └── Lightbox.tsx    # Reusable lightbox (keyboard nav, scroll lock, fade-in)
│       ├── pages/
│       │   └── GalleryPage.tsx # Full gallery page with load-more, pagination, lightbox
│       ├── config/
│       │   └── images.ts       # Centralised image arrays (hero, gallery)
│       ├── App.tsx
│       └── main.tsx
├── .github/workflows/          # GitHub Actions for Firebase deployment
└── README.md
```

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router v7
- **Deployment**: Firebase Hosting
- **CI/CD**: GitHub Actions (auto-deploy on push to `main`)

## 📄 Page Sections

| Section | Description |
|---|---|
| Header | Fixed navigation with scroll-driven white-to-yellow background transition, HR/EN language switcher, mobile hamburger menu |
| Hero | Auto-sliding carousel (7s interval, 5 slides), bottom-left text overlay with gradient, real product names |
| About | 4 service cards (PVC, ALU, Rolete, Kompletna Usluga) with Lucide icons, centered layout, clickable — opens detail modal with bullet points and descriptions |
| Gallery | Masonry-style grid with lightbox, "Pogledaj sve radove" CTA linking to `/gallery` |
| Cooperations | 8 real partner logos with website links, yellow glow on hover (desktop), colored logos on mobile |
| Footer | amber-50 background, logo + tagline, quick links, contact info (email, phone, address), working hours, floating hearts easter egg, dynamic copyright year |

## 🖼️ Gallery Page (`/gallery`)

- Randomised image grid (3-column on desktop)
- Load more (6 at a time) with pagination for large collections
- Full lightbox with keyboard navigation (← → Escape)
- Image count badge in hero bar
- "Natrag na početnu" styled as a pill button
- No footer — clean focused layout

## 🌍 Internationalisation

Two languages managed via prop drilling (`lang` / `setLang`):

- **HR** — Croatian (default)
- **EN** — English

Language toggle is in the header and applies to all text across the site.

## 🎨 Theme

White/black/yellow alternating sections:

- "White" sections use `amber-50` for a warm yellowish tint
- Accent colour: `#FFC107` (defined as `--color-yellow` in `index.css`)
- Section order: Hero → About (black) → Gallery (amber-50) → Cooperations (black) → Footer (amber-50)

## 🏢 Company Info

- **Name**: Švabo-Otok d.o.o.
- **Address**: Turjaci 39b, 21230 Sinj
- **Email**: svabootok1@gmail.com
- **Phone**: +385 98 336 884
- **Working hours**: Mon–Fri 08:00–16:00
- **Services**: PVC windows & doors, ALU joinery, shutters, mosquito nets, complete installation service

## ⚡ Quick Start

### Prerequisites
- Node.js 18+ and npm

### Install & Run

```bash
cd frontend_svaboOtok
npm install
npm run dev
```

App runs on `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 🚀 Deployment

Deployment is automated via **GitHub Actions** and **Firebase Hosting**:

- Push to `main` branch → triggers build and deploy automatically
- Build command: `npm run build`
- Firebase project: `svabootokapp`
- Workflow config: `.github/workflows/firebase-hosting-merge.yml`
