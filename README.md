## Brenden Edwards – Frontend Portfolio

This repository contains my personal frontend portfolio, built with **React** and **Vite**.  
The goal of this project is to showcase my design sense, animation work, and ability to build interactive, production‑ready UI components.

### Key Features

- **Hero section with smooth scrolling**  
  Powered by Lenis for buttery scroll, a dark radial‑gradient hero introduces the site and anchors navigation.

- **Interactive “Explore” bento grid**  
  - Custom audio player for a book excerpt with play, progress, and time controls.  
  - Spotify playlist embed connected to the global volume control.  
  - A GitHub contribution calendar styled to match the portfolio’s green highlight theme.  
  - Ambient quote and layout designed as a modern bento grid.

- **Projects vertical showcase**  
  - Scroll‑driven gallery of projects (Partiva, Sidious, Portfolio, Epic RPG Adventure, Star Wars Battle Simulator).  
  - Sticky “My Curated work” panel that updates with project title, description, feature list, and tech stack as you scroll.  
  - Project screenshots with subtle hover effects and a custom cursor, plus a modal for future deep‑dive content.

- **Contact / “From Concept to Creation” footer**  
  - Branded call‑to‑action with gradient typography.  
  - Modal contact form with social links, styled inputs, and responsive layout for smaller screens.

### Tech Stack

- **Frontend**: React 19, Vite  
- **Styling & Animation**: Hand‑crafted CSS, Framer Motion, Lenis (smooth scroll)  
- **Markdown & Docs**: `react-markdown`, `remark-gfm`, `rehype-raw` for project documentation rendering  
- **Icons**: React Icons for consistent iconography

### Running the Project

```bash
npm install
npm run dev
```

The app runs on `http://localhost:5173` by default.

### Building for Production

```bash
npm run build
```

The production build will be output to the `dist` directory.

### Deployment

This project is configured for GitHub Pages deployment at `https://pickledire.github.io/Portfolio/`.

**Automatic Deployment:**
- The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys to GitHub Pages when changes are pushed to the `main` branch.
- Make sure GitHub Pages is enabled in your repository settings (Settings → Pages → Source: GitHub Actions).

**Manual Deployment:**
1. Build the project: `npm run build`
2. Push the `dist` folder to the `gh-pages` branch, or use a tool like `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   npm run build
   npx gh-pages -d dist
   ```

### Purpose

This portfolio is an evolving playground where I refine my UI/UX, animation, and frontend architecture skills while presenting my work in a way that feels cohesive, performant, and on‑brand.
