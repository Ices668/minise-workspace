# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A cloud server self-service portal where users can apply for VMs/containers provisioned on a Proxmox VE cluster. Features role-based access (USER/ADMIN), application approval workflow, data classification (secrecy levels), email notifications, and light/dark mode.

## Commands

```bash
# Frontend
npm run dev          # Vite dev server (frontend only)
npm run build        # Production build
npm run lint         # ESLint
npm run preview      # Preview production build

# Database
npm run db           # prisma db pull && prisma generate (sync schema from DB, regenerate client)

# Backend (no npm script — run directly)
node server/src/index.js   # Start Fastify API server on port 3001
```

## Architecture

### Frontend (`src/`)

**Page Widget Pattern** — every page follows the same structure:
- `pages/<name>/index.jsx` — calls `createWidget(Content, StoreContext, Store)` which instantiates the store once and wraps Content in the context provider
- `pages/<name>/components/index.jsx` — root UI component, consumes store via `useStore()`
- `pages/<name>/store/index.js` — MobX store class with `makeAutoObservable(this, null, { autoBind: true })`
- `pages/<name>/context.js` — generated via `createContextAndStore()` from `src/common/utils/widget-util.jsx`

Pages: `home` (user's servers), `admin` (admin panel), `notification`, `login`.

**API layer:**
- `src/api/api-client.js` — low-level `fetch` wrapper; supports GET/POST/PUT/DELETE; has an optional global error handler via `setErrorHandler`
- `src/api/sdk.js` — typed SDK methods over `api-client.js`; base URL is `/web-api`

**Theming:** CSS custom properties system defined in `src/index.css`. Default (`:root`) is **dark mode**. Light mode overrides are in `.light {}`. Toggle done by adding/removing `.light`/`.dark` classes on `document.documentElement`. Preference persisted to `localStorage('darkMode')`.

Reuse the CSS utility classes defined in `src/index.css`: `.card`, `.button`, `.button-primary`, `.button-ghost`, `.form-input`, `.stat-card-*`, `.status-badge`, `.section-title`, etc. Do not inline Tailwind for these patterns.

### Backend (`server/`)

There are **two parallel server implementations** at different stages of development:

| Path | Framework | Status | Notes |
|---|---|---|---|
| `server/src/index.js` | **Fastify** | Newer / active | Auth, user, admin routes; JWT via `@fastify/jwt`; standard `@prisma/client` |
| `server/routes/server.js` | Express | Legacy | VM/container CRUD routes wired to `server/service/` |

The Fastify server (`server/src/`) is the primary backend. It registers routes under:
- `POST /api/auth/login`, `POST /api/auth/reset-password`
- `GET|POST /api/user/applications`, `GET|POST /api/user/servers`, `POST /api/user/servers/:id/:action`, `POST /api/user/servers/:id/extend`
- `GET|POST /api/admin/applications`, `POST /api/admin/applications/:id/approve`, `GET|POST /api/admin/users`, `GET|POST|PUT|DELETE /api/admin/data-categories`

**Service layer** (`server/service/`) — used by the legacy Express routes but containing core business logic:
- `server-service.js` — VM/container lifecycle (create, start, stop, release, sync status with PVE)
- `pve-client.js` — Proxmox VE REST API client with token caching; singleton exported as `pveClient`
- `email-service.js` — nodemailer-based email notifications (creation success/failure, shutdown, expiry warnings)
- `prisma.js` — Prisma client using `@prisma/adapter-mariadb`, reads DB credentials from `server/config.js`

**Configuration** (`server/config.js`): reads env vars: `PORT` (default 8008), `API_PORTAL_URL`, `API_PORTAL_TOKEN`, `DATABASE_HOST/USER/PASSWORD/NAME`, `SMTP_HOST/PORT/SECURE/USER/PASSWORD`.

### Database

Prisma ORM with MySQL/MariaDB. Schema at `prisma/schema.prisma` (root — used for `npm run db`) and `server/prisma/schema.prisma`.

Key models: `User` (roles: USER/ADMIN) → `ServerApplication` (status: PENDING/APPROVED/REJECTED/EXPIRED) → `Server` (status: RUNNING/STOPPED/DELETED). `DataCategory` forms a self-referential tree with `SecrecyLevel` (PUBLIC/INTERNAL/CONFIDENTIAL/TOP_SECRET). Junction table `ServerApplicationDataCategory` links applications to data categories.

Auto-approval logic: approved without admin review if user has <3 active servers, ≤1 GPU server, selected data is not CONFIDENTIAL or TOP_SECRET, and has provided a reason when selecting any data category.

### Environment Variables (`.env`)

Required for production:
```
DATABASE_URL=mysql://...
DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME
JWT_SECRET
SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASSWORD
API_PORTAL_URL, API_PORTAL_TOKEN   # for the older Express server layer
```
PVE connection settings are read from `server/service/config.js` (separate from `server/config.js`).
