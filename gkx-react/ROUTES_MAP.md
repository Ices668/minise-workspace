# gkx-prototype -> gkx-react route map

Rules
- 1:1 HTML -> JSX migration; no iframes.
- Keep original HTML name as route suffix for traceability.
- Route pattern: `/<system>/<file>.html`.

## Systems

### Home (portal)
- `home.html` -> `/home` (SPA home)

### Strategic Consulting (strategy)
- `entity-list.html` -> `/strategy/entity-list.html`
- `project-stats.html` -> `/strategy/project-stats.html`
- `project-task.html` -> `/strategy/project-task.html`
- `tech-roadmap.html` -> `/strategy/tech-roadmap.html`
- `tech-system.html` -> `/strategy/tech-system.html`
- `strategy-cases.html` -> `/strategy/strategy-cases.html`
- `case-share.html` -> `/strategy/case-share.html`
- `report-generation.html` -> `/strategy/report-generation.html`
- `report-gen-ai.html` -> `/strategy/report-gen-ai.html`

### Basic Research Decision (research)
- `problem-identification.html` -> `/research/problem-identification.html`
- `problem-trend.html` -> `/research/problem-trend.html`
- `competition-report.html` -> `/research/competition-report.html`
- `shenzhen-list.html` -> `/research/shenzhen-list.html`
- `frontier-tech.html` -> `/research/frontier-tech.html`
- `hot-analysis.html` -> `/research/hot-analysis.html`
- `multi-source-data.html` -> `/research/multi-source-data.html`
- `data-dashboard.html` -> `/research/data-dashboard.html`
- `paper-dashboard.html` -> `/research/paper-dashboard.html`
- `patent.html` -> `/research/patent.html`
- `tech-alert.html` -> `/research/tech-alert.html`
- `tech-trend.html` -> `/research/tech-trend.html`

### Social / Network Analysis (network)
- `common-network-task.html` -> `/network/common-network-task.html`
- `common-network.html` -> `/network/common-network.html`
- `social-network-import.html` -> `/network/social-network-import.html`
- `social-network-visualize.html` -> `/network/social-network-visualize.html`
- `social-network-metrics.html` -> `/network/social-network-metrics.html`

### Clustering / Delphi (analysis)
- `analysis-start.html` -> `/analysis/analysis-start.html`
- `clustering-task.html` -> `/analysis/clustering-task.html`
- `clustering-results.html` -> `/analysis/clustering-results.html`
- `delphi.html` -> `/analysis/delphi.html`

### Publishing / Media (insight)
- `insight-publish.html` -> `/insight/insight-publish.html`
- `media-focus.html` -> `/insight/media-focus.html`

## Unmapped / Special
- `strategy-shell.html` -> (layout reference only; not a route page)
- `analysis-start.raw.html` -> (raw reference only)
- `data-dashboard-new.html` -> (alternative version; decide later)
- `multi-source-data-new.html` -> (alternative version; decide later)
- `multi-source-data.raw2.html` -> (raw reference only)
