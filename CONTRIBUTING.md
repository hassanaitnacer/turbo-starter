# Contributing to Nacer Codes

## Prerequisites

- Node.js 22+
- pnpm 10.0.0
- Git

## Setup

1. Fork and clone the repo
2. Install: `pnpm install`
3. Copy env files: `cp apps/web/.env.example apps/web/.env` etc.
4. Verify: `pnpm check-types && pnpm lint && pnpm test:run`

## Development

- Start all: `pnpm dev`
- Build: `pnpm build`
- Format: `pnpm format`

## Testing

- Unit: `pnpm test`
- E2E: `pnpm test:e2e`
- Coverage: `pnpm test:coverage`

## Workflow

1. Branch from `develop`
2. Make changes and add tests
3. Run checks: `pnpm test:run && pnpm lint && pnpm check-types`
4. Commit with conventional format
5. Push and PR

## Commit Guidelines

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `build`

Scopes: `ui`, `web`, `admin`, `storybook`, `e2e`, `tooling`, `deps`

Examples:

- `feat(ui): add Card component`
- `fix(web): resolve navigation issue`

Pre-commit hooks enforce linting, formatting, and tests.

## Pull Requests

- Rebase on `develop`
- Include description, type of change, testing details
- Add screenshots for UI changes
- Link related issues

## Troubleshooting

- Install fails: Clear cache `rm -rf node_modules pnpm-lock.yaml && pnpm install`
- Type errors: Run `pnpm check-types`
- Tests fail: Use `pnpm test:ui` for debugging
- Build errors: Clean `rm -rf apps/*/dist apps/*/.next apps/*/build && pnpm build`
