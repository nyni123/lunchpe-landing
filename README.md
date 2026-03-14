# LunchPe — Tiffin Management SaaS Landing Page

A modern Next.js 14 landing page for **LunchPe**, India's tiffin management platform.

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **React Hook Form** (waitlist form)

## 📁 Project Structure

```
lunchpe/
├── app/
│   ├── globals.css          # Global styles & Tailwind
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page (assembles sections)
├── components/
│   ├── Navbar.tsx           # Sticky navbar with mobile menu
│   ├── Hero.tsx             # Hero with dashboard mockup
│   ├── Problem.tsx          # Problem statement (dark bg)
│   ├── Solution.tsx         # Solution section with UI blocks
│   ├── Features.tsx         # 6 feature cards
│   ├── HowItWorks.tsx       # 4-step process timeline
│   ├── Screenshots.tsx      # App mockups (dark bg)
│   ├── Pricing.tsx          # 3-tier pricing cards
│   ├── WaitlistForm.tsx     # React Hook Form waitlist
│   ├── CTA.tsx              # Final CTA banner
│   └── Footer.tsx           # Footer with links
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind + custom theme
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## 🛠️ Setup & Run

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

### 3. Open in browser
```
http://localhost:3000
```

### 4. Build for production
```bash
npm run build
npm start
```

## 🎨 Color Theme

| Color     | Value     |
|-----------|-----------|
| Primary   | `#FF7A00` |
| Dark      | `#111111` |
| Background| `#FFFFFF` |

## 📦 Deploy

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Netlify / any static host
```bash
npm run build
# Upload the .next folder
```

## 📝 Notes

- Waitlist form logs to `console.log` — connect to your backend/Supabase/Firebase
- All section IDs match navbar links for smooth scroll
- Fully responsive: mobile-first design
- Animations use Framer Motion's `whileInView` for scroll-triggered reveals

---

Built by **Brahmastack Technologies Pvt. Ltd.**
contact@brahmastack.com
