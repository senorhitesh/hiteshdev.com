# ✨ Hitesh Suthar — Portfolio & MemeCulture Hub

A premium, ultra-interactive, and highly visual personal portfolio website built using a state-of-the-art web stack. This site acts as a professional resume, project showcase, and interactive canvas showcasing advanced front-end interaction, custom synthesis sound design, and premium UI animations.

Live site: [hiteshdevcom.vercel.app](https://hiteshdevcom.vercel.app)

---

## 🚀 Key Features

### 🌗 1. Persistent Dark / Light Mode Theme Engine
*   **Fully Persistent:** Uses `next-themes` to remember the user's selected theme across page visits, reloads, and route navigation.
*   **System Preference Sync:** Automatically checks and defaults to the user's operating system preferences on first load.
*   **Class Variant Hook:** Configured Tailwind CSS v4's class variant `@variant dark (.dark &);` to cleanly toggle colors for background shapes, cards, text, and divider borders under a unified state.

### 🌀 2. Cinematic Page-Slide Transitions
*   **Native View Transitions:** Harnesses the modern **View Transitions API** in standard CSS for buttery-smooth visual page switches.
*   **Premium Overlay Slide:** The incoming theme layer slides in horizontally from the right over the preceding layer using custom cubic-bezier spring physics (`350ms cubic-bezier(0.16, 1, 0.3, 1)`), complete with a subtle overlay drop-shadow for depth.

### 🔊 3. Tactile Audio Interactions (Web Audio API)
Designed and synthesized premium sound effects natively in code with **zero external assets**, ensuring instantaneous latency-free triggers:
*   **Mechanical Switch Mode Click:** Toggling the light/dark mode switch produces a satisfying mechanical tactile contact sound.
*   **Elastic Pull & Snap (Footer):** Grabbing and dragging the animated avatar GIF in the footer triggers a rising elastic pitch sweep (rubber band tension), followed by a snappy "boing" pitch wobble decay upon release.

### 🎬 4. Dynamic Project Video Streamer
*   **Dynamic Slugs:** Detail routes under `app/projects/[slug]/page.tsx` parse route parameters and automatically retrieve project metadata from the central database.
*   **Static Streaming:** Resolves relative URLs into clean public root asset files in the browser (`/Project/ProjectVideos/...`), streaming corresponding project screencasts automatically on load.

### 🎨 5. Theme-Adaptive Vector Patterns
*   **Dotted Grids & Gradients:** Dynamic variables bind dot patterns (`.dotted-background`), line grids (`.grid-background`), and repeats (`.divider-background`) to dark/light colors smoothly using pure CSS variables.
*   **Canvas Dot Matrix:** Beautiful canvas grid drawings powered by custom mathematical spring physics.

---

## 🛠️ Technology Stack

*   **Core Framework:** Next.js 16 (App Router) & React 19
*   **Language:** TypeScript
*   **Styling System:** Tailwind CSS v4, PostCSS, Vanilla CSS variables
*   **Physics Animations:** Motion (Framer Motion v12)
*   **Icon Sets:** Lucide React & React Icons
*   **Integrations:**
    *   **Supabase:** Secure contact form database storage (`lib/supabase.ts`).
    *   **Cal.com:** Direct booking meeting widgets embedded inside the Profile card.

---

## 📂 Project Directory Structure

```
hiteshsuthar/
├── app/                      # Next.js 16 App Router Routing and Pages
│   ├── Component/            # Modular layouts and portfolio segments
│   │   ├── Profile/          # Avatar card, meet scheduler, live ticking clock
│   │   ├── HeroPage/         # Bio details, experience badges, and introductions
│   │   ├── Project/          # Projects grid layouts and custom cards
│   │   ├── Global/           # Navbar dockbar, dividers, below-blurs, back-to-top
│   │   └── Footer/           # Draggable coder GIF with pull/snap sounds
│   ├── blogs/                # Blog layout, lists, and articles
│   ├── projects/             # Projects routes and dynamic slug detail pages
│   ├── get-in-touch/         # Supabase-integrated contact forms
│   ├── globals.css           # Core styling tokens, animation variants & CSS variables
│   └── layout.tsx            # Global wrappers (RootLayout, theme providers)
├── components/               # Atomic and decoupled UI helpers
│   ├── ui/                   # Basic spinner, separator, tooltip components
│   ├── motion-primitives/    # Framer Motion utility springs (loops, custom accordions)
│   └── theme-provider.tsx    # next-themes hydration-safe layout hook wrapper
├── lib/                      # Central logic and asset stores
│   ├── data/                 # Dynamic project metadata database (project.tsx)
│   ├── assest/               # Aggregation files and image imports
│   └── supabase.ts           # Supabase DB client setup
└── public/                   # Public static media directory (GIFs, PNGs, and MP4s)
```

---

## 🏁 Getting Started

### 1. Clone & Install Dependencies

```bash
cd hiteshsuthar
npm install
```

### 2. Configure Environment Variables
Create a `.env.local` file inside the `hiteshsuthar` directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anonymous-key
```

### 3. Launch Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to interact with the portfolio!

---

## 📝 Customization

*   **Projects Data:** To add, remove, or modify featured projects, update the registry inside `lib/data/project.tsx`.
*   **Blog Listing:** To edit article metadata, configure the listing indexes inside `app/Components/Blogs.tsx`.
