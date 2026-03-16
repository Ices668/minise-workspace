# Design System: GKX Prototype (gkx-prototype)

**Source:** Local HTML prototype pages in `gkx-prototype/` (39 pages)

This `DESIGN.md` is the shared design system reference for migrating the GKX prototype HTML pages into an engineered React app while keeping the visual language consistent across both top-level systems:
- Strategic Consulting (战略咨询智能支持)
- Basic Research Decision (基础研究智能决策)

## 1. Visual Theme & Atmosphere
A modern, government/enterprise-facing analytics UI: cool-toned, airy, and utilitarian. Surfaces are mostly white with soft blue-gray dividers, accented by saturated cyan/azure for emphasis and action. The overall density is medium-high (dashboard-like), but whitespace and subtle borders keep it readable.

## 2. Color Palette & Roles
Primary accents skew toward Cyan/Azure, with blue-gray neutrals for scaffolding.

### Core neutrals
- **Pure White (#ffffff):** Primary page and card backgrounds.
- **Ink Charcoal (#0f1e23 / #101e22 / #101a22):** Main text and deep nav backgrounds.
- **Slate Text (#333333):** Standard body text in lighter areas.
- **Border Mist (#e2e8f0 / #e5e8ed / #cbd5e1):** Dividers, table borders, input outlines.
- **Panel Wash (#f5f7fa / #f6f7f8 / #f6f8f8 / #f5f8f8):** Subtle section backgrounds and table header strips.

### Brand/action accents (cool)
- **Azure Action (#0078d4):** Primary action emphasis (buttons/links/active states).
- **Cyan Highlight (#00a3d9 / #00a4db / #00bfff):** Secondary emphasis, highlights, chart accents.
- **Sky Soft Fill (#e6f1ff / #f0f7ff / #e0f2fe / #e6f7ff):** Selected states, chips, hover backgrounds, info panels.

### Status colors
- **Success Green (#10b981):** Positive status, success tags.
- **Warning Amber (#f59e0b):** Warnings, attention tags.
- **Danger Red (#ef4444):** Errors, destructive actions.

### Secondary accent (rare)
- **Violet Signal (#7c3aed):** Occasional highlight; use sparingly to avoid fragmenting the visual language.

## 3. Typography Rules
- **Tone:** Professional, readable, dashboard-first.
- **Weights:** Use heavier weight for page titles/section headers; regular for body and table content.
- **Hierarchy:** Titles > section headers > table headers > body text; rely on size + weight, not color shifts.

(Implementation note for React: prefer one primary sans family across the app; keep numeric tables monospaced only if needed for alignment.)

## 4. Component Stylings

### Navigation / Shell
- **Left sidebar:** Deep ink/charcoal background, lighter text, with cyan/azure active indicator.
- **Top bars / header strips:** White or very light wash, separated by a thin border line.

### Buttons
- **Primary button:** Azure/Cyan background, white text, subtly rounded corners.
- **Secondary button:** White background, blue-gray border, ink text; hover uses soft sky fill.

### Cards / Panels
- **Cards:** White surface with soft border (mist) and occasional whisper-light shadow.
- **Section panels:** White on top of very light wash; separate with spacing rather than heavy lines.

### Tables
- **Table density:** Medium-high; table headers use a faint wash background.
- **Borders:** Use `Border Mist` tokens; avoid high-contrast gridlines.
- **Row hover/selection:** Use `Sky Soft Fill` tokens.

### Forms / Filters
- **Inputs:** White with mist border; focus state shifts toward azure/cyan.
- **Chips/tags:** Use soft fills for selection and status colors for semantic tags.

### Charts / Metrics
- **Chart accents:** Cyan/Azure variants; keep neutrals for axes and grid.

## 5. Layout Principles
- **Grid:** Dashboard-like columns, consistent gutters; left nav + main content is the dominant pattern.
- **Whitespace:** Use padding and section gaps to separate modules; prefer spacing over extra borders.
- **Dividers:** Thin, low-contrast borders; avoid strong separators.

## 6. Engineering Mapping (React)
This section is a practical bridge from prototype HTML to React engineering.

### Tokenization (recommended)
Create CSS variables (or Tailwind theme) from the palette above:
- `--color-bg`, `--color-surface`, `--color-border`, `--color-text`, `--color-muted`
- `--color-primary`, `--color-primary-2`, `--color-primary-soft`
- `--color-success`, `--color-warning`, `--color-danger`

### Component candidates for reuse
Prioritize extracting these early to reduce duplicated JSX/CSS:
- `AppShell` (sidebar + header layout)
- `PageHeader` (title + actions)
- `FilterBar` (inputs/selects + quick actions)
- `DataTable` (header + row hover + pagination placeholders)
- `StatCard` / `KpiStrip`
- `Tag` / `Badge`

### Fidelity rule
Migrate 1:1 from HTML to JSX first (structure + classes + spacing), then refactor into shared components only after multiple pages match and render identically.

---

## Appendix: Observed Color Values (raw)
Collected from prototype HTML/CSS:
`#0078d4, #00a3d9, #00a4db, #00bfff, #0ba6da, #109ccb, #1392ec, #13b6ec, #17b0cf, #0d9488, #10b981, #f59e0b, #ef4444, #7c3aed, #0f1e23, #101a22, #101d22, #101e22, #111e21, #333333, #64748b, #4c869a, #cbd5e1, #e2e8f0, #e5e8ed, #f5f7fa, #f5f8f8, #f6f7f8, #f6f8f8, #e6f1ff, #f0f7ff, #e0f2fe, #e6f7ff, #ffffff`
