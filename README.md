# Prachak Tocheewee — Data Analyst Portfolio

**Turning data into decisions.**

[![React](https://img.shields.io/badge/React-18-087ea4?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white)](https://vite.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-f7df1e?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-f38020?logo=cloudflare&logoColor=white)](https://prachak.prachaktcw.workers.dev/)

**[Living Portfolio (Cloudflare) ↗](https://prachak.prachaktcw.workers.dev/)** · **[Original portfolio (Vercel) ↗](https://prachak-t-portfolio.vercel.app/)** · [LinkedIn](https://linkedin.com/in/prachak-tocheewee) · [GitHub](https://github.com/PrachakTocheewee)

[![Portfolio build check](https://github.com/PrachakTocheewee/PrachakTCW_Portfolio/actions/workflows/portfolio-build.yml/badge.svg?branch=main)](https://github.com/PrachakTocheewee/PrachakTCW_Portfolio/actions/workflows/portfolio-build.yml)

> **Canonical project:** `PrachakTCW_Portfolio` / `main`, deployed to Cloudflare Worker `prachak`. The original Vercel portfolio is a separate legacy project. Features below describe the source; the build badge and Cloudflare deployment history indicate actual release status.

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

### Experience controls

Open **Experience** from the hero or the floating bottom-left button. Normal, Focus and Explore modes, five selectable seasons plus Bangkok Auto, ambient sound, visual settings reset, and access to the observatories and labs. Settings and discoveries are stored in the current browser; there is no account or cross-device sync.

| Effects setting | Behaviour |
| --- | --- |
| Auto | Adapts to supported battery and performance signals |
| Balanced | Limits visual workload on smaller screens |
| Maximum | Enhanced effects; koi simulation target up to 240 FPS, limited by device/browser refresh rate |
| Battery Saver | Reduced particles and koi updates; pauses heavy decorative animation and sound |
| Focus / reduced motion | Reduces or removes decorative movement so portfolio content remains readable |

No FPS counter. Sound is opt-in. Wind chimes respond to left/right phone tilt after motion permission is granted, or horizontal desktop mouse drag; sensor support varies by browser.

### Calendar & Time Machine

The compact in-flow calendar and clock display the current Bangkok date/time (ICT). Select Edit to choose a date and time independently, Preview sky to enter a frozen simulated date/time, or Back to now to restore the live clock. Preview automatically selects the Auto sky mode; automatic seasons, moon phase, solar and constellation projections and time-of-day effects follow the selected instant. Manual season selections are respected. Actual elapsed-time events, saved discoveries, and the device clock are unchanged. The supported preview date range is 1900–2100; astronomical positions are approximate. Selected festival effects follow the shared Bangkok clock, including date previews. They are non-interactive decorative particles and a small in-flow label, not additional Easter eggs.

### Festival calendar (owner-approved selection)

24 enabled (including birthday and website milestones); original 22: Songkran, Loy Krathong, Yi Peng, Thai Children's Day, Makha Bucha, Visakha Bucha, Asalha Bucha, Valentine's Day, Easter, May Day, Halloween, Bonfire Night, Christmas, Boxing Day, Thanksgiving, Earth Day, New Year's Eve, New Year's Day, Pi Day, International Day of Mathematics, World Statistics Day and Programmer's Day. Custom International Programmers' Day (31) remains pending. The eight excluded IDs are 04, 05, 12, 16, 19, 21, 23, 24.

Fixed and rule-based dates recur automatically. Thai lunar dates are explicitly listed for 2026 and 2027 only; 2027 Loy Krathong/Yi Peng is a provisional lunar-date entry pending official event confirmation. World Statistics Day is 20 October every five years (UN). Sources: [BOT holidays](https://www.bot.or.th/en/financial-institutions-holiday.html), [SET holidays](https://www.set.or.th/en/about/event-calendar/holiday), [Lanna calendar 2027](https://blog.moradoklanna.com/en/lanna-calendar-2027/), [UN Statistics Day](https://www.un.org/en/observances/statistics-day). The site is not an official holiday calendar. Focus, Battery Saver and reduced motion suppress decorative festival animation.

### Explore the garden

- **Day:** Sun & Nature Explorer with a draggable/zoomable solar path, adjustable time and estimated Bangkok solar altitude/azimuth. Morning dew, butterflies, prism, hummingbird, sun dogs, fern and dragonfly illustrations.
- **Night:** Constellation Explorer with drag, zoom, search, English labels and connecting lines for 12 selected bright-star patterns; time offset and reset. Approximate J2000 coordinates projected for Bangkok, not a complete planetarium. Moonflowers, luminous koi trails, nebula, illustrative planets, moths, noctilucent clouds and spores.
- **Koi pond:** continuously moving fish when visible, feed interaction, water ripples, lotus bloom, miniature waterfall and garden camera.
- **Nature Observatory:** five day and five night artistic demos; not live observations or biological predictions.
- Seasonal particles, simulated weather, fractal trees, Fibonacci patterns, lanterns and mathematical wave illustrations. Responsive navigation, reading progress, scroll reveals and accessible motion controls.

### Timeline and milestones

Elapsed time is based on visible, non-Focus browsing; the schedule is session-local. Creator postcards begin at minute 2 and arrive every minute thereafter. Decorative events occur every 2 minutes until minute 60 (ordinary events do not interrupt a finale). Minute 3: lotus bloom or simulated Halley's Comet. Minute 13: simulated solar halo or lunar eclipse. Five-minute performances at minutes 20, 40 and 60 have Skip and Replay controls; unlocked replays are accessible in Experience and Garden Journal. The final performance is the most elaborate. Events are illustrations, not predicted astronomical events.

### Interactive labs

| Lab | Contents |
| --- | --- |
| Original Analytics Lab | Time series, simulated retail KPIs, outlier exercise and pipeline |
| Discovery Lab (20) | Probability, correlation, Monte Carlo, sampling, confidence intervals, Voronoi, orbital patterns, symmetry, Delaunay, Lissajous, weather API, bubble sort, debugging, React state, Git, SQL-style filter, data cleaning, anomalies, KPIs and moving-average forecast |
| Advanced Discovery Lab (10) | Bayes, Markov transitions, CLT, Fourier harmonics, Conway's Game of Life, A* pathfinding, fixed-weight neural network, ETL, K-means, decision tree |

Data is synthetic unless marked as a live Open-Meteo response. SQL is a constrained in-browser demonstration; model illustrations are not production-trained models.

### Garden Journal — 59 discoveries

45 original nature/seasonal/celestial discoveries + 12 analytical discoveries + Bayesian Compass and Cluster Crystal = **59**. Existing discoveries remain saved locally. No additional collection entries are planned for this feature freeze. Completion unlocks **Master of Curiosity / The Garden of Infinite Curiosity**, a replayable celebration and optional personalized SVG souvenir certificate (not an academic qualification). Hint and achievement panels are available without exposing all solutions here.

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

| Module | Responsibility |
| --- | --- |
| App.jsx / main.jsx | Portfolio content and React entry |
| FestivalAtmosphere, festivalCalendar | Selected calendar rules and lightweight festival visuals |
| ResponsiveStability.css | Small-screen, landscape and overflow safeguards |
| GardenClock | Shared Bangkok live/preview date and time controls |
| SkyScene, RealSky, SunExplorer | Sky rendering and day/night explorers |
| GardenSeason, SeasonExperience, GardenAtmosphere | Seasons, sound, wind and decorative effects |
| GardenTrail, KoiPond, NatureObservatory | Garden and nature interactions |
| GardenMagic, ExperienceExtras, PortfolioDiscoveries | Presentation and interaction details |
| GardenPerformance, LivingWorld | Effects preferences and Experience menu |
| CreatorPostcard, GardenFinale | Timed messages and milestone performances |
| GardenWorld, UltimateDiscovery | Journal, collection and completion reward |
| DiscoveryLab, AdvancedDiscoveryLab | Interactive analytics and computing labs |
| public/ | Static assets and resume |
| .github/workflows/portfolio-build.yml | Independent compilation and output checks |

## Deployment

- Cloudflare Workers (static assets): connect this repository in Workers & Pages. The existing Worker uses `wrangler.jsonc` to publish `dist`.
- Deploy command for Workers: `npx wrangler deploy`.
- Cloudflare Pages is also possible as a separate project using the Vite output folder.
- Original Vercel site: https://prachak-t-portfolio.vercel.app/ (separate deployment)
- Cloudflare Worker name: `prachak`
- Cloudflare URL: https://prachak.prachaktcw.workers.dev/
- Node version: 24 (NODE_VERSION=24)
- Framework preset: React (Vite); root directory: repository root
- Production source branch: `main`
- Build command: `npm run build`
- Output directory: `dist`

### Verification and maintenance

GitHub Actions runs \`npm ci\`, \`npm run build\` and verifies \`dist/index.html\` plus the Worker configuration on each push to main. A successful compilation does not prove successful Cloudflare publishing or real-device interaction testing. Check [CI history](https://github.com/PrachakTocheewee/PrachakTCW_Portfolio/actions/workflows/portfolio-build.yml) and [Cloudflare Build History](https://dash.cloudflare.com/c959097868f0b9bf060da3638484c645/workers/services/view/prachak/production/builds) separately. The earlier koi pond syntax fix passed GitHub Actions and Cloudflare build checks. Check the current commit's deployment result separately before treating new features as live. Update README alongside feature, configuration and compatibility changes. Keep the collection at 59 and prioritize stability, accessibility, mobile responsiveness and battery use.

## Contact

- Email: [prachak.toc@gmail.com](mailto:prachak.toc@gmail.com)
- LinkedIn: [Prachak Tocheewee](https://linkedin.com/in/prachak-tocheewee)
- [Download resume (text edition)](public/Resume_DataAnalyst_Prachak_Tocheewee_Eng.pdf)

---

Built with curiosity, analytical thinking and a little garden magic.


### Stability freeze

After the approved festival set, prioritize bug fixes, portrait/landscape responsiveness, battery use and performance. Calendar updates once per minute in live mode and stops while previewing or hidden; lab bodies mount on first expansion; automatic motion sampling is bounded; opening Experience or Journal closes the other. These are code-level safeguards; browser/device tests remain necessary. Easter egg count stays at 59.

### Actual-date personal celebrations

Birthday and website anniversary are evaluated against an independent actual Bangkok browser clock, even when the garden calendar previews another day. The clock checks on visibility changes and at midnight, with no polling in hidden tabs. Birthday: 20 February (no birth year stored). Website launch assumed 27 November 2026, monthly celebration on the 27th starting December 2026, annual on 27 November from 2027. Monthly 12-second growth animation; annual 60-second four-part mathematics, statistics, probability and data analytics illustration. Skip and replay; no additional Easter eggs. Personal celebrations use actual Bangkok time, not calendar preview. This is browser-clock based, not tamper-proof server time. Responsive smoke tests cover multiple viewport sizes, overflow, theme/clock controls, runtime exceptions and interactive panel reachability; real-device battery and touch testing remain separate.

The browser QA matrix includes 22 CSS viewport sizes for each of Chromium and WebKit (44 combinations), including 280px phones/foldables, landscape and portrait tablets, desktop, ultrawide, Full HD and 3840×2160 4K as representative 55-inch TV viewports. Native TV browsers and physical touch, battery and display quality are not certified by a viewport simulation. Large displays retain a capped reading width.
