# Silvia Cremascoli | Front-End Developer Portfolio

A modern personal portfolio website built to showcase my front-end development work, technical skills, and professional profile.

## About me

This portfolio reflects my combination of:

- clean and maintainable front-end code
- attention to visual detail and user experience
- accessibility-first development for inclusive digital experiences
- strong communication skills from previous professional experience
- curiosity for learning modern web technologies

## Why this project exists

This portfolio serves as a digital CV and a showcase of the work I have built across multiple projects. It is designed to help recruiters and hiring managers quickly understand:

- my technical strengths
- the type of projects I enjoy building
- my design sensibility and problem-solving approach
- my commitment to building accessibility-friendly websites and applications
- how to get in touch for opportunities or collaborations

## Portfolio highlights

- Professional introduction and personal branding
- Responsive design optimized for desktop and mobile
- Accessibility-friendly interfaces designed with usability in mind
- Showcase of multiple front-end projects and case studies
- Skills and tools section highlighting my technical stack
- Contact page for hiring or collaboration inquiries

## Key technologies

- HTML5
- CSS3 / SASS
- JavaScript
- Astro
- Bootstrap 5
- Core UI Library
- React.js
- Vue.js
- TypeScript
- Twig templates
- REST APIs
- Storybook
- Git and GitHub

## Project structure

- `src/pages/` — the home, work, and contact pages (`index.astro`, `work.astro`, `contact.astro`)
- `src/layouts/Layout.astro` — shared `<head>`, global styles, navigation, footer, and client script
- `src/components/` — reusable pieces: `Nav`, `Footer`, `Curve` (section dividers), and `ContactCta`
- `src/data/` — projects, skills, and languages rendered by the pages
- `src/scripts/nav.js` — hide-on-scroll behavior for the navigation bar
- `src/styles/portfolio.scss` — Sass entry point; `_*.scss` partials hold the modular styles
- `public/assets/images/` — project screenshots, logos, and portrait assets, served as-is
- `astro.config.mjs` — Astro configuration
- `netlify.toml` — Netlify build and caching configuration
- `styles/bootstrap-5.3.2/` — original Bootstrap source tree, retained for reference

## Featured work

The project includes examples of work across different stack combinations, including:

- Storybook component library
- Personal portfolio builds
- Personal finance application
- Weather application
- Dictionary application
- World clock application
- Travel landing page

These projects demonstrate my ability to work with reusable UI components, APIs, responsive layouts, and clean front-end architecture.

## Component library

The project installs the [Core UI Library](https://github.com/silviacremascoli/core-ui-library) from GitHub (`github:silviacremascoli/core-ui-library#main`); its `prepare` script builds the package during `npm install`. Its stylesheet is imported site-wide from `src/layouts/Layout.astro`; existing page markup has not yet been replaced with library components.

The library package exposes React, Vue, and Twig component entry points for future integration.

## Run locally

Install dependencies and start the Astro development server from the project root (Node.js 22.23.4 or newer is required):

```bash
npm install
npm run dev
```

Astro prints the local URL in the terminal (`http://localhost:4321` by default). To create and preview a production build:

```bash
npm run build
npm run preview
```

## Styles and assets

Astro bundles Bootstrap, AOS, Font Awesome, the Core UI Library styles, and the portfolio Sass locally, so no CDN links are needed. The production site is written to `dist/`.

Internal links use Astro's `ClientRouter` for client-side page transitions, including a fallback animation in browsers without native cross-document view transitions. The contact form opts out so Netlify receives a normal form submission.

## License

This project is open-source and intended to showcase personal work and professional experience.

---

Built with passion for user-centered design and modern front-end development.
