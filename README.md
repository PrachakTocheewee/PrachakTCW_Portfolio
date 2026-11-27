# Prachak Tocheewee — Data Analyst Portfolio

**Turning data into decisions.**

[![React](https://img.shields.io/badge/React-18-087ea4?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white)](https://vite.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-f7df1e?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-f38020?logo=cloudflare&logoColor=white)](https://prachak.tcw.workers.dev/)

**[Living Portfolio (Cloudflare) ↗](https://prachak.tcw.workers.dev/)** · **[Original portfolio (Vercel) ↗](https://prachak-t-portfolio.vercel.app/)** · [LinkedIn](https://linkedin.com/in/prachak-tocheewee) · [GitHub](https://github.com/PrachakTocheewee)

## About me

I am a Statistics graduate from Thammasat University with software development training from Generation Thailand. I combine statistics, programming and business intelligence to uncover patterns and communicate actionable insights. I am interested in Data Analyst and Business Intelligence opportunities.

## Enchanted Garden

An illustrated, interactive portfolio that combines professional content with an imaginative garden. The experience changes between Day and Night, inviting visitors to explore without taking attention away from my work.

| Experience | Day | Night |
| --- | --- | --- |
| Sky | Sunshine, clouds and floating dandelions | Lunar phases, starfield, meteors and subtle aurora |
| Garden | Swaying grass, flowers and butterflies | Moonlit flowers, fireflies and water reflections |
| Click effects | Dandelion seeds | Star sparkles |
| Cursor trails | Pollen | Stardust |
| Atmosphere | Seasonal particles, simulated showers and rainbows | Midnight effects and floating visitors |

### Interactive features

- Manual Day/Night themes and Auto mode based on Bangkok local time, including sunrise and golden-hour palettes.
- Frosted-glass navigation, active-section indicator, reading progress and responsive menus.
- Theme transitions, animated typography, card depth, magnetic buttons and scroll reveals.
- Garden encounters throughout the About, Projects, Skills, Experience and Contact sections.
- Hidden wishes, interactive creatures, constellation puzzles and a garden journal with locally saved discoveries and achievements.
- Optional koi pond, garden trail and synthesized ambient sounds.
- Focus mode, animation pause controls, reduced-motion support, compact-screen effects and page visibility handling.

Some surprises are intentionally undocumented. Time bands and lunar phases are approximate; weather effects are simulated, not live forecasts.

## Selected projects

| Project | Technologies | Overview |
| --- | --- | --- |
| Electricity demand forecasting | Statistics, ARIMA, SARIMA, Modified SARIMA | University research into seasonal electricity demand. Modified SARIMA achieved a reported **1.566% MAPE** in the project evaluation. |
| [Find Your Hat](https://r35cpz.csb.app/) | JavaScript | Interactive terminal game using grid navigation and problem solving. |
| [Jammming](https://jammming-prachak-2026.surge.sh/) | React, Spotify API | Music search and custom playlist application. |
| [Infinity Health](https://infinity-health.vercel.app/) | MERN, team development | Full-stack exercise tracker with activity management and authentication. |

[Read research report](https://github.com/PrachakTocheewee/PrachakT_Portfolio/blob/00b413f066e7e8bbe9ab75d61ea1b7b87eb6e59a/public/Project-ST495.pdf)

MAPE is a forecast error metric, not a general accuracy guarantee. The portfolio's forecast sketch and project concept previews are illustrative, not original research data or application screenshots.

## Skills

| Area | Tools and knowledge |
| --- | --- |
| Analytics and statistics | Python, R, statistical analysis, data preparation, ARIMA/SARIMA |
| Business intelligence | Power BI, Looker Studio, Excel, Google Sheets, IBM SPSS |
| Databases and development | SQL, SQLite, MongoDB, JavaScript, C++, React |

## Technology stack

React 18, Vite 5, JavaScript, CSS, SVG, Canvas and browser APIs, with a static Vite build for Cloudflare Workers. The original Vercel repository is maintained separately.

## Run locally

Requirements: Node.js 24.x (as specified in package.json) and npm.

```bash
git clone https://github.com/PrachakTocheewee/PrachakTCW_Portfolio.git
cd PrachakTCW_Portfolio
npm ci
npm run dev
```

Open the local address printed by Vite.

| Command | Purpose |
| --- | --- |
| `npm ci` | Install locked dependencies |
| `npm run dev` | Start the development server |
| `npm run build` | Build production files in `dist/` |
| `npm run preview` | Preview the production build locally |

## Project structure

```text
src/
  main.jsx                  React entry point
  App.jsx                   Portfolio content and navigation
  App.css                   Base layout and styling
  SkyScene.jsx              Sun, lunar phases and sky effects
  SkyScene.css              Sky and responsive styles
  ExperienceExtras.jsx      Meadow, contact links and click effects
  GardenMagic.jsx           Theme transitions and wish interactions
  GardenMagic.css           Interaction styles
  GardenSeason.jsx          Seasonal effects and visibility utilities
  GardenSeason.css          Seasonal styles
  GardenTrail.jsx           Garden trail, weather and soundscape
  GardenTrail.css           Garden trail styles
  GardenWorld.jsx           Discoveries, journal and achievements
  GardenWorld.css           Garden world styles
  PortfolioDiscoveries.jsx  Counters, hidden details and forecast sketch
  LivingWorld.jsx           Experience modes, secret palettes and analytics lab
  LivingWorld.css           Responsive styles for Living World
public/                     Resume and static assets
```

## Deployment

- Cloudflare Workers (static assets): connect this repository in Workers & Pages. The existing Worker uses `wrangler.jsonc` to publish `dist`.
- Deploy command for Workers: `npx wrangler deploy`.
- Cloudflare Pages is also possible as a separate project using the Vite output folder.
- Original Vercel site: https://prachak-t-portfolio.vercel.app/ (separate deployment)
- Cloudflare Worker name: `prachak`
- Cloudflare URL: https://prachak.tcw.workers.dev/
- Node version: 24 (NODE_VERSION=24)
- Framework preset: React (Vite); root directory: repository root
- Production source branch: `main`
- Build command: `npm run build`
- Output directory: `dist`

This README describes the source code in the main branch. The public site may temporarily show an earlier revision while a deployment is queued or limited by the hosting quota.

## Contact

- Email: [prachak.toc@gmail.com](mailto:prachak.toc@gmail.com)
- LinkedIn: [Prachak Tocheewee](https://linkedin.com/in/prachak-tocheewee)
- [Download resume (text edition)](public/Resume_DataAnalyst_Prachak_Tocheewee_Eng.pdf)

---

Built with curiosity, analytical thinking and a little garden magic.

## Living Portfolio

Normal (default), Focus and Explore modes. Section-specific sky accents; scroll footsteps; occasional poppable bubbles, paper birds and simulated celestial events; secret messages; four unlockable palettes; locally saved flower bed; safe predefined terminal commands. Optional Analytics Lab includes synthetic time-series sliders, a filterable retail KPI dashboard, outlier quiz and pipeline walkthrough. Motion budget reduces effects if sustained frame delays are detected. All persistence is browser-local. No server or database required for Pages. Simulated events are not astronomical predictions. Device/browser testing is pending; Cloudflare build and live-site verification are pending.

Railway Docker configuration remains available as an alternative.
