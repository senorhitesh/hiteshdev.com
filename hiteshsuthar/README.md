# ✨ Hitesh Suthar — Portfolio

A premium, ultra-interactive, and highly visual personal portfolio website built using a state-of-the-art web stack. This site acts as a professional resume, project showcase, and interactive canvas showcasing advanced front-end interaction, custom synthesis sound design, and premium UI animations.

Live site: [hiteshsuthar.xyz](https://hiteshsuthar.xyz)

---

## 🚀 Key Features

### 🌗 1. Persistent Theme Engine & Global Shortcut
* **Global Keyboard Shortcut (`Ctrl + D` / `Cmd + D`):** Seamlessly toggle between dark mode and light mode from anywhere across the entire website with an instantaneous keyboard shortcut.
* **Fully Persistent:** Uses `next-themes` to remember the user's selected theme across page visits, reloads, and route navigation.
* **System Preference Sync:** Automatically checks and defaults to the user's operating system preferences on first load.
* **Interactive Tooltip Hint:** The theme toggle button features an interactive tooltip with a keyboard shortcut badge and hover transition.
* **Class Variant Hook:** Configured Tailwind CSS v4's class variant `@variant dark (.dark &);` to cleanly toggle colors for background shapes, cards, text, and divider borders under a unified state.

### 🔊 2. Tactile Audio Interactions (Web Audio API)
Synthesized sound effects natively in code with **zero external assets**, ensuring instantaneous latency-free triggers:
* **Mechanical Switch Mode Click:** Toggling the light/dark mode switch (via button or `Ctrl + D`) produces an authentic mechanical switch click with tailored resonance (a warmer thock for dark mode, crisper snap for light mode).
* **Elastic Pull & Snap (Footer):** Grabbing and dragging the animated avatar GIF in the footer triggers a rising elastic pitch sweep (rubber band tension), followed by a snappy "boing" pitch wobble decay upon release.

### 🛠️ 3. Experience Timeline with Gliding Tech Tooltips
* **Year Grouping:** Experience positions sharing the same year are automatically grouped together, displaying the year label once on the left with all roles neatly stacked on the right.
* **Interactive Tech Stack Icons:** Roles feature brand tech stack icons (`Next.js`, `TypeScript`, `Socket.io`, `React`, `Figma`, `PostgreSQL`, etc.).
* **Non-Repeating Gliding Tooltip:** Moving across tech stack icons activates a shared gliding tooltip. The tooltip animates in on first entry, and smoothly slides across adjacent icons without blinking or repeating the entrance animation.

### 📊 4. GitHub Contribution Graph with 2D Continuous Tooltip
* **Live GitHub Activity:** Fetches and renders live GitHub contribution activity.
* **Continuous 2D Gliding Tooltip:** As you scrub across commit cells horizontally (weeks) and vertically (days), the tooltip smoothly glides across both axes using spring physics without flickering or re-animating opacity/scale.

### 📝 5. Blog with Floating Cover Image Previews
* **Hover Image Previews:** Hovering over article titles in the writing list smoothly reveals a floating cover card preview anchored to cursor movement using spring physics and backdrop blur.
* **One-Click Share & Copy:** Quick action buttons to share or copy article links directly to the clipboard.

### 🌀 6. Cinematic Page-Slide Transitions
* **Native View Transitions:** Harnesses the modern **View Transitions API** in standard CSS for buttery-smooth visual page switches.
* **Premium Overlay Slide:** The incoming layer slides in horizontally using custom cubic-bezier spring physics (`350ms cubic-bezier(0.16, 1, 0.3, 1)`), complete with an overlay drop-shadow for depth.

### 🎬 7. Dynamic Project Video Streamer
* **Dynamic Slugs:** Detail routes under `app/projects/[slug]/page.tsx` parse route parameters and automatically retrieve project metadata from the central database.
* **Static Streaming:** Resolves relative URLs into clean public root asset files in the browser (`/Project/ProjectVideos/...`), streaming corresponding project screencasts automatically on load.

### 🎨 8. Theme-Adaptive Vector Patterns
* **Dotted Grids & Gradients:** Dynamic variables bind dot patterns (`.dotted-background`), line grids (`.grid-background`), and repeats (`.divider-background`) to dark/light colors smoothly using pure CSS variables.
* **Canvas Dot Matrix:** Beautiful canvas grid drawings powered by custom mathematical spring physics.

---

## 🛠️ Technology Stack

* **Core Framework:** Next.js 16 (App Router) & React 19
* **Language:** TypeScript
* **Styling System:** Tailwind CSS v4, PostCSS, Vanilla CSS variables
* **Physics Animations:** Motion (Framer Motion v12)
* **Icon Sets:** Hugeicons, React Icons & Lucide React
* **Sound Engine:** Custom Web Audio API Synthesizer (`lib/click-sound.ts`)
* **Integrations:**
  * **Supabase:** Secure contact form database storage (`lib/supabase.ts`).
  * **Cal.com:** Direct booking meeting widgets embedded inside the Profile card.

---

## 📂 Project Directory Structure

```
hiteshsuthar/
├── app/                      # Next.js 16 App Router Routing and Pages
│   ├── component/            # Component showroom and component details
│   ├── blogs/                # Blog layout, lists, and articles
│   ├── projects/             # Projects routes and dynamic slug detail pages
│   ├── globals.css           # Core styling tokens, animation variants & CSS variables
│   ├── layout.tsx            # Global wrappers (RootLayout, metadata, fonts)
│   └── Provider.tsx          # Providers wrapper (ThemeProvider, Lenis, Analytics)
├── components/               # Atomic and decoupled UI components
│   ├── BlogPage/             # Blog layout, posts, writing lists with hover previews
│   ├── Experience.tsx        # Work experience with year grouping & gliding tooltips
│   ├── ThemeToggle.tsx       # Sun/Moon theme switcher with tooltip & click sound
│   ├── theme-provider.tsx    # Theme provider with Ctrl+D global shortcut listener
│   ├── ui/                   # Shared UI primitives (tooltip, spinner, github-activity)
│   └── NAVBAR.tsx            # Navigation header with active routes & theme toggle
├── lib/                      # Central logic and asset stores
│   ├── click-sound.ts        # Zero-latency Web Audio API mechanical switch synthesizer
│   ├── data/                 # Dynamic project metadata database (project.tsx)
│   └── utils.ts              # Styling utilities (cn helper)
└── public/                   # Public static media directory (sounds, PNGs, and MP4s)
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

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `Ctrl + D` / `Cmd + D` | Toggle Dark / Light Mode with tactile switch sound |

---

## 📝 Customization

* **Projects Data:** To add, remove, or modify featured projects, update the registry inside `lib/data/project.tsx`.
* **Experience:** To update career history or tech stack icons, configure items in `components/Experience.tsx`.
* **Blog Posts:** Add or edit MDX articles inside `blogs/` and metadata inside `components/BlogPage/Blogs.tsx`.
