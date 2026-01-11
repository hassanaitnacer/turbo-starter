# Nacer Codes

A full-stack development learning platform focused on learning by doing through articles, tips, concepts, and interactive quizzes.

## What's Inside

- **Admin**: Next.js CMS for content management
- **Web**: React Router public site for articles and quizzes
- **UI**: Shared component library
- **Storybook**: Component documentation
- **E2E**: Playwright tests

## Quick Start

Prerequisites: Node.js 22+

Replace `<project-name>` with your desired project name:

```bash
git clone https://github.com/nacercodes/turbo-starter.git <project-name>
cd <project-name>
pnpm install
pnpm dev
```

Apps run at:

- Web: http://localhost:5173
- Admin: http://localhost:3000
- Storybook: http://localhost:6006

## Project Structure

```
<project-name>/
├── apps/
│   ├── admin/    # Next.js CMS
│   ├── web/      # React Router site
│   ├── storybook/# Component docs
│   └── e2e/      # E2E tests
├── packages/
│   └── ui/       # Component library
└── tooling/      # Configs
```

## Commands

```bash
pnpm dev          # Start all apps
pnpm build        # Build all
pnpm lint         # Lint code
pnpm test         # Run tests (watch mode)
pnpm test:run     # Run tests (CI mode)
pnpm test:e2e     # E2E tests
```

## Tech Stack

- Frontend: React 19, React Router v7, Next.js 16
- Styling: Tailwind CSS v4, CVA
- Testing: Vitest, Playwright, Storybook
- Quality: TypeScript, ESLint, Prettier
- Monorepo: Turborepo, pnpm

## About

Nacer Codes combines:

- **Articles**: In-depth technical deep-dives (e.g., React 19: New Features and Updates)
- **Tips**: Actionable development tricks (e.g., Swap Two Variables Without Using a Temporary Variable)
- **Concepts**: Core programming concepts (e.g., Latency, Single Source of Truth, Idempotency)
- **Quizzes**: Interactive tests attached to content for reinforcement

Learn by doing: read → learn → test yourself.

## Documentation

- [CONTRIBUTING.md](./CONTRIBUTING.md) - Development guidelines
- [Issues](https://github.com/nacercodes/turbo-starter/issues) - Bug reports
- [Discussions](https://github.com/nacercodes/turbo-starter/discussions) - Questions

---

Built with ❤️ by Hassan Ait Nacer
