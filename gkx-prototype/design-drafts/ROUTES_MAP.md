# gkx-prototype -> gkx-react route map

Top-level systems (ONLY 2)
- Strategic Consulting: "/strategy/*"
- Basic Research Decision: "/research/*"

Rules
- 1:1 HTML -> JSX migration; no iframes.
- Keep original HTML name as route suffix for traceability.
- Route pattern: `/<system>/<file>.html`.

## Strategic Consulting (战略咨询智能支持) => /strategy

### 研究需求分析
- 科技实体清单: `entity-list.html` -> `/strategy/entity-list.html`
- 颠覆性与前沿技术分析: `frontier-tech.html` -> `/strategy/frontier-tech.html`
- 媒体聚焦: `media-focus.html` -> `/strategy/media-focus.html`

### 技术体系分析
- 技术体系: `tech-system.html` -> `/strategy/tech-system.html`
- 论文分析: `paper-dashboard.html` -> `/strategy/paper-dashboard.html`
- 专利分析: `patent.html` -> `/strategy/patent.html`
- 科研项目分析: `project-stats.html` -> `/strategy/project-stats.html`
- 社会网络分析: `social-network-import.html` -> `/strategy/social-network-import.html`
- 社会网络分析(可视化): `social-network-visualize.html` -> `/strategy/social-network-visualize.html`
- 社会网络分析(指标): `social-network-metrics.html` -> `/strategy/social-network-metrics.html`

### 技术趋势分析
- 聚类分析(任务): `clustering-task.html` -> `/strategy/clustering-task.html`
- 聚类分析(结果): `clustering-results.html` -> `/strategy/clustering-results.html`
- 共性网络分析(任务): `common-network-task.html` -> `/strategy/common-network-task.html`
- 共性网络分析: `common-network.html` -> `/strategy/common-network.html`
- 技术趋势分析: `tech-trend.html` -> `/strategy/tech-trend.html`
- 技术动态预警: `tech-alert.html` -> `/strategy/tech-alert.html`

### 领域技术线路
- 德尔菲问卷: `delphi.html` -> `/strategy/delphi.html`
- 技术发展线路: `tech-roadmap.html` -> `/strategy/tech-roadmap.html`

### 战略咨询报告
- 研究报告管理: `report-generation.html` -> `/strategy/report-generation.html`
- 洞察报告发布: `insight-publish.html` -> `/strategy/insight-publish.html`
- 热点分析: `hot-analysis.html` -> `/strategy/hot-analysis.html`
- 战略咨询报告生成: `report-gen-ai.html` -> `/strategy/report-gen-ai.html`
- 战略咨询报告生成(旧版): `report-generation.html` -> `/strategy/report-generation.html`

### 战略咨询成果
- 战略咨询案例展示: `strategy-cases.html` -> `/strategy/strategy-cases.html`

### 智能问数
- 开始分析: `analysis-start.html` -> `/strategy/analysis-start.html`
- 案例分享: `case-share.html` -> `/strategy/case-share.html`
- 多源数据接入: `multi-source-data.html` -> `/strategy/multi-source-data.html`
- 数据看板显示: `data-dashboard.html` -> `/strategy/data-dashboard.html`
- 一键报告生成: `report-generation.html` -> `/strategy/report-generation.html`

### Other prototype pages (战略咨询相关，但尚未在你的清单里明确归属)
- 项目任务: `project-task.html` -> `/strategy/project-task.html`
- 技术体系(壳参考): `strategy-shell.html` -> (layout reference only; not a route page)

## Basic Research Decision (基础研究智能决策) => /research

### 基础研究问题清单
- 问题识别与清单研发: `problem-identification.html` -> `/research/problem-identification.html`
- 问题发展趋势分析: `problem-trend.html` -> `/research/problem-trend.html`
- 国内外竞争格局报告: `competition-report.html` -> `/research/competition-report.html`

### 基础研究部署清单
- 深圳市基础研究部署清单: `shenzhen-list.html` -> `/research/shenzhen-list.html`
- 基础研究组织实施分析: (prototype HTML not found yet)

### 基础研究成果评估
- 基础研究成果评估: (prototype HTML not found yet)

## Home (portal)
- `home.html` -> `/home`

## Unmapped / Special
- `analysis-start.raw.html` -> (raw reference only)
- `data-dashboard-new.html` -> (alternative version; decide later)
- `multi-source-data-new.html` -> (alternative version; decide later)
- `multi-source-data.raw2.html` -> (raw reference only)
