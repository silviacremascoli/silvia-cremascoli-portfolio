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
- Vite
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

- `index.html`, `work.html`, `contact.html` — page entry points
- `scripts/index.js`, `scripts/work.js`, `scripts/contact.js` — page modules loaded directly by their HTML pages
- `scripts/shared.js` — shared styles, Bootstrap behavior, and navigation setup
- `scripts/projects.js` — project data shared by the home and work pages
- `assets/images/` — project screenshots, logos, and portrait assets
- `assets/styles/portfolio.scss` — Sass entry point imported by Vite
- `assets/styles/_*.scss` — modular styles for shared layout and page sections
- `vite.config.mjs` — multi-page build configuration and static image copying
- `core-ui-library` — local component library dependency, expected at `../core-ui-library`
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

The project uses the [Core UI Library](https://github.com/silviacremascoli/core-ui-library) as a local npm dependency. Its stylesheet is imported site-wide from `scripts/shared.js`; existing page markup has not yet been replaced with library components.

Because the dependency uses `file:../core-ui-library`, clone or place that repository next to this one before running `npm install`. The library package exposes React, Vue, and Twig component entry points for future integration.

## Run locally

With the Core UI Library repository available at `../core-ui-library`, install dependencies and start the Vite development server from the project root:

```bash
npm install
npm run dev
```

Vite prints the local URL in the terminal. To create and preview a production build:

```bash
npm run build
npm run preview
```

## Build custom styles

Vite bundles Bootstrap, AOS, Font Awesome, Core UI Library styles, and the portfolio Sass locally. Build the complete multi-page site with:

```bash
npm run build
```

`npm run build:css` remains available to compile only the portfolio Sass to `assets/styles/portfolio.css`.

## License

This project is open-source and intended to showcase personal work and professional experience.

---

Built with passion for user-centered design and modern front-end development.
