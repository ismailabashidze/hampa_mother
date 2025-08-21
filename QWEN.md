# Qwen Code Context for هم‌پای مادر (MamaTogether)

This file provides essential context for Qwen Code to understand and assist with the MamaTogether project.

## Project Overview

**هم‌پای مادر (MamaTogether)** is a hybrid platform that combines 24/7 AI guidance with oversight from child psychologists to support mothers in daily parenting challenges. It offers smart activities, education, and early screening, primarily targeting mothers in Iran. The platform supports both Persian (فارسی) and English with RTL/LTR layout considerations.

### Key Features

-   **24/7 AI Parenting Assistant**: Chat text/voice anytime for quick answers, age-aware tips, and activity ideas.
-   **Interactive Screening**: Short, standard questionnaires and weekly check-ins to flag risks early.
-   **Smart Education Library**: Bite-size articles, short videos, and podcasts tailored to your child's age.
-   **Human Psychologist Oversight**: Supervising child psychologist reviews progress and designs programs.
-   **Personalized Action Plans**: Two-week targeted plans delivered inside the app with follow-ups.

## Technology Stack

-   **Framework**: Astro (v5)
-   **Styling**: Tailwind CSS
-   **Languages**: Persian (فارسی) and English
-   **UI Components**: Custom Astro components, Preact for interactivity (via `@astrojs/preact`)
-   **Deployment**: Vercel (via `@astrojs/vercel`)
-   **Package Manager**: pnpm

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── blocks/         # Page-specific components (e.g., hero, features)
│   └── ui/             # Base UI components (e.g., Button, Card, Section)
├── pages/              # Astro pages (e.g., src/pages/[lang]/index.astro)
│   └── [lang]/         # Language-specific routes
├── config/             # Configuration files (e.g., i18n)
├── content/            # Markdown content files (if used)
└── styles/             # Global styles (if any beyond Tailwind)
```

## Development Workflow

### Prerequisites

-   Node.js 18+
-   pnpm

### Key Commands

-   `pnpm install`: Install dependencies.
-   `pnpm dev`: Start the development server.
-   `pnpm build`: Build the project for production (includes type checking).
-   `pnpm preview`: Preview the production build locally.

## Development Conventions

-   **Component Structure**: Components are built using Astro's component syntax (`.astro` files). They often include a script section for logic/data and an HTML-like template section.
-   **Internationalization (i18n)**:
    -   Language routing is handled via the `[lang]` dynamic route parameter (e.g., `/en/`, `/fa/`).
    -   Language-specific content is typically managed within components using objects keyed by language code.
    -   The `src/config/i18n.ts` file defines supported languages and utility functions.
-   **UI Components**: Reusable UI elements like buttons, cards, and layout grids are located in `src/components/ui/`.
-   **Page Blocks**: Larger sections of pages (like the hero section or feature list) are built as blocks in `src/components/blocks/` and composed within page files.
-   **Styling**: Uses Tailwind CSS for styling. Class names are applied directly in component templates.

## Important Files/Directories

-   `README.md`: Main project documentation.
-   `package.json`: Project dependencies and scripts.
-   `astro.config.mjs`: Astro configuration, including i18n settings and integrations.
-   `src/pages/[lang]/index.astro`: The main landing page for each language.
-   `src/config/i18n.ts`: Internationalization configuration and utilities.
-   `src/components/ui/`: Core reusable UI components.
-   `src/components/blocks/`: Larger page section components.