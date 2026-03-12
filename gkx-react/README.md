# gkx-react

Engineered React version of `gkx-prototype`.

## Dev

```bash
npm install --registry=https://registry.npmmirror.com
npm run dev
```

## Routes

Routes are defined in `src/routesMap.ts` (derived from the provided route map).

## Migration rules

- 1:1 HTML -> JSX migration; no iframes.
- Keep original HTML filename as route suffix for traceability.
