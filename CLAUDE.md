# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Foxi**, an Astro website template built with TailwindCSS components. It's a modern, responsive template designed for productivity-focused websites with features like dark/light mode switching, analytics integration, and a modular component architecture.

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site (includes `astro check` for TypeScript validation) |
| `npm run preview` | Preview production build locally |
| `astro check` | Run TypeScript and Astro diagnostics |

**Package Manager**: This project uses pnpm as specified in `package.json`. Use pnpm commands when installing dependencies.

## Architecture & Code Organization

### Core Framework
- **Astro 5.10.1**: Static site generator with hybrid rendering capabilities
- **TailwindCSS**: Utility-first CSS framework with custom design system
- **TypeScript**: Strict type checking enabled

### Directory Structure
```
src/
├── components/
│   ├── blocks/           # Page section components (Hero, CTA, Features, etc.)
│   ├── ui/              # Reusable UI components (Button, Modal, Card, etc.) 
│   └── scripts/         # Analytics and tracking scripts
├── config/              # TypeScript configuration files
├── content/             # Blog posts and collections (managed by Astro Content Collections)
├── data/                # JSON data files and markdown content
├── layouts/             # Page layout templates
└── pages/               # File-based routing
```

### Component Architecture
- **Blocks**: Large page sections in `src/components/blocks/` (modular, reusable sections)
- **UI Components**: Atomic components in `src/components/ui/` (buttons, forms, cards)
- **Layouts**: Page templates in `src/layouts/` (Layout.astro, PostLayout.astro)

### Configuration System
All site configuration is centralized in TypeScript files in `src/config/`:
- `config.ts`: Main site settings, SEO defaults, theme mode
- `navigationBar.ts`: Navigation menu structure
- `footerNavigation.ts`: Footer links
- `analytics.ts`: Google Analytics, Tag Manager, Search Console
- `socialLinks.ts`: Social media links

### Content Management
- **Blog**: Uses Astro Content Collections with markdown files in `src/content/blog/`
- **Static Data**: JSON files in `src/data/json-files/` for features, FAQ, pricing, etc.
- **Content Schema**: Defined in `src/content.config.ts` with Zod validation

### Styling System
- **Design Tokens**: Custom color palette (primary/neutral) and typography in `tailwind.config.mjs`
- **Dark Mode**: Selector-based dark mode with automatic/manual switching
- **Animations**: Custom keyframes for dropdowns, fade effects, and scroll animations
- **Fonts**: Inter Variable and Outfit Variable from Fontsource

### Key Features to Understand
- **Mode Switching**: Auto/light/dark themes controlled via CSS classes and config
- **Analytics Integration**: Google Analytics, Tag Manager, and Search Console support
- **Content Collections**: Type-safe blog content with tags and metadata
- **Modular Blocks**: Page sections can be easily rearranged and customized
- **SEO Optimization**: Built-in sitemap, canonical URLs, and meta tag management

## Development Notes
- Use existing UI components from `src/components/ui/` before creating new ones
- Follow the block-based architecture for page sections
- Configuration changes should be made in TypeScript files in `src/config/`
- The project uses strict TypeScript with null checks enabled
- Content updates can be made via JSON files in `src/data/` or markdown in `src/content/`