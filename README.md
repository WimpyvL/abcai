# ABCAI

ABCAI is a practical AI learning and adoption platform built for South Africa first.

This repo contains the front-end product experience for `abcai.co.za`: a structured, outcome-driven site that helps people learn AI clearly, apply it to real work, choose tools sensibly, and move toward implementation without hype.

## Product Positioning

ABCAI is not a generic AI blog, tool dump, or trend-chasing landing page.

The product is designed around four pillars:

- `Learn` for plain-language AI understanding
- `Use` for workflows, use cases, and business application
- `Choose` for practical tool selection
- `Build` for technical implementation paths

The current experience also includes:

- adaptive user journeys for `beginner`, `business`, and `builder` visitors
- a prompt library grouped by outcome
- an AI readiness assessment
- training and consulting conversion paths
- smooth section-jump navigation across long-form pages

## Stack

- `React 19`
- `TypeScript`
- `Vite`
- `React Router`
- `Tailwind CSS v4`
- `motion`
- `react-helmet-async`

## Project Structure

```text
src/
  components/       Shared UI, navigation, journey, quick-nav, layout
  lib/              Small utilities like smooth section scrolling
  pages/            Route-level page components
  constants.ts      Core content/data for the product experience
  journeyData.ts    Adaptive journey definitions by profile
  types.ts          Shared TypeScript types
```

## Core Behavior

### Adaptive journeys

The site remembers the visitor’s active path:

- `beginner`
- `business`
- `builder`

That profile changes:

- the journey compass
- recommended next steps
- cross-page progression
- section-level navigation intent

### Section travel

Long pages expose quick-jump controls that scroll users to high-value sections with the correct fixed-header offset. This is handled in:

- `src/components/PageQuickNav.tsx`
- `src/lib/scroll.ts`
- `src/components/ScrollToTop.tsx`

## Local Development

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run the type check:

```bash
npm run lint
```

## Deployment

The project is configured for Vercel deployment.

Current linked Vercel project:

- project: `abcai-coza`
- team: `loop69`

Preview and production deploys can be run with the Vercel CLI once authenticated.

## Content and Brand Rules

When updating this product, keep these constraints intact:

- Use `ABCAI` consistently
- Keep the tone practical, clear, and non-hype
- Avoid generic “future of AI” marketing language
- Prefer use-case-first structure over blog-style sprawl
- Keep South African relevance grounded in actual constraints like budget, bandwidth, workflow pressure, and ROI
- Remove placeholder, scaffold, or template residue instead of layering over it

## Status

This codebase is no longer treated as a starter project.

It is the working front-end for a product-shaped platform with:

- a defined brand position
- a structured information architecture
- conversion paths
- scalable content categories
- deployment infrastructure

The next serious expansion areas are content systems, lead capture, and deeper commercialization layers.
