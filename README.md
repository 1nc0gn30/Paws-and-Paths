# Paws and Paths Virginia Beach

Local services marketing site for dog walking and pet care in Virginia Beach.

## What this project is
- Multi-page React website with SEO-oriented page structure.
- Includes dedicated pages for services, contact, and business context.
- Uses reusable SEO component patterns.

## Tech stack
- React 19 + TypeScript
- React Router
- Vite 6

## Local development
```bash
npm install
npm run dev
```

## Environment
Copy `.env.example` to `.env.local` and set:
- `GEMINI_API_KEY` only if AI-backed features are being used.

## Scripts
- `npm run dev`
- `npm run build` (includes TypeScript compile)
- `npm run preview`
- `npm run lint`

## Deployment
Use `npm run build` and deploy `dist/`.
