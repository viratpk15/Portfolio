# Virat P K Gupta — Portfolio

Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.

## Editing content

Everything editable lives in `src/data/` — never touch the components to update text:

- `profile.ts` — name, tagline, summary, contact links
- `skills.ts` — skill groups and tags
- `projects.ts` — project details (add a new object to add a new project)
- `education.ts` — education history and certifications
- `socials.ts` / `navigation.ts` — social links and nav items

Photos live in `public/assets/`. Swap a file and keep the same name to update an image with zero code changes.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

This project builds fully static (all routes prerendered) — verified clean with `tsc --noEmit`, `next lint`, and `next build`.

## Deploying to Vercel

From this folder, run:

```bash
npm i -g vercel
vercel login
vercel --prod
```

Follow the prompts (link to a new or existing project, keep the default build settings — Vercel auto-detects Next.js). Once linked, every subsequent `vercel --prod` redeploys to the same URL/domain.

To connect a custom domain afterward: Vercel dashboard → your project → Settings → Domains.

## Updating the resume PDF

Replace `public/assets/virat-gupta-resume.pdf` with the new file (same filename) and redeploy — the "Resume" button in the hero links to it directly.
