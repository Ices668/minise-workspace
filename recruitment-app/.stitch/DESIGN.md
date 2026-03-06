# Design System: 招聘App-核心流程
**Project ID:** 16082751562364009398

## 1. Visual Theme & Atmosphere
A clean, mobile-first recruiting app with a calm, professional, "enterprise-friendly" feel. The interface is light and airy, with generous whitespace, clear information hierarchy, and a dependable blue accent used for primary actions.

## 2. Color Palette & Roles
- Primary Action Blue (#2563EB) — Primary buttons, key icons, active states, highlights.
- Ink Gray (#1F2937) — Primary text (titles, key labels), high-contrast readability.
- Muted Text Gray (#6B7280) — Secondary text (metadata, hints, helper labels).
- Page White (#FFFFFF) — Main page background for a clean, minimal canvas.
- Surface Gray (#F3F4F6) — Card backgrounds / section separators for subtle grouping.
- Border Gray (#E5E7EB) — Dividers, input borders, subtle outlines.

## 3. Typography Rules
- Use a modern sans-serif system font stack.
- Titles: medium to bold weight for strong hierarchy.
- Body: regular weight, comfortable line-height for dense lists.
- Numbers (salary, counts): slightly higher weight to improve scanability.

## 4. Component Stylings
- **Buttons:** Prominent primary button in Primary Action Blue (#2563EB), with white text. Corners are subtly rounded (8-12px). Secondary actions use outline or neutral surfaces.
- **Cards/Containers:** White cards on a light gray surface, subtle border and/or whisper-soft shadow. Rounded corners (10-14px) to keep a friendly, modern tone.
- **Inputs/Forms:** Rounded input fields with light border, clear placeholder text, and strong focus state using the primary blue.
- **Tags/Chips:** Small pill-like chips for job benefits (e.g., 五险一金 / 包吃住), using light background and medium-contrast text.
- **Bottom Navigation:** 5-tab bottom nav with clear icons and a stronger active state (primary blue).

## 5. Layout Principles
- Mobile-first layout centered around a 390px viewport.
- Use cards and sections to group content (search, categories, job list).
- Maintain consistent vertical rhythm: 12-16px spacing between major blocks.
- Keep CTAs sticky at the bottom on key conversion pages (e.g., 职位详情、投递).

## 6. Design System Notes for Stitch Generation (REQUIRED)
- Platform: Mobile-first (390px), iOS-like spacing and typography.
- Theme: Light, clean, professional, calm.
- Background: Page White (#FFFFFF) with occasional Surface Gray (#F3F4F6) sections.
- Primary Accent: Primary Action Blue (#2563EB) for primary buttons, active tabs, highlights.
- Text Primary: Ink Gray (#1F2937); Text Secondary: Muted Text Gray (#6B7280).
- Corners: Subtly rounded (8-14px); cards feel modern and friendly.
- Components: Card lists for job items, pill tags for benefits, sticky bottom CTA on conversion pages.
- Language: All labels and copy must be in Chinese.
