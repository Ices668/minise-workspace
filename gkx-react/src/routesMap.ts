// Auto-derived from gkx-prototype route map.
// Keep HTML filename in path for traceability.

export type RouteEntry = {
  path: string;
  title: string;
  sourceHtml: string;
  system: "strategy" | "research" | "home";
};

export const ROUTES: RouteEntry[] = [
  { path: "/home", title: "Home", sourceHtml: "home.html", system: "home" },

  { path: "/strategy/entity-list.html", title: "科技实体清单", sourceHtml: "entity-list.html", system: "strategy" },
  { path: "/strategy/frontier-tech.html", title: "颠覆性与前沿技术分析", sourceHtml: "frontier-tech.html", system: "strategy" },
  { path: "/strategy/media-focus.html", title: "媒体聚焦", sourceHtml: "media-focus.html", system: "strategy" },

  { path: "/strategy/tech-system.html", title: "技术体系", sourceHtml: "tech-system.html", system: "strategy" },
  { path: "/strategy/paper-dashboard.html", title: "论文分析", sourceHtml: "paper-dashboard.html", system: "strategy" },
  { path: "/strategy/patent.html", title: "专利分析", sourceHtml: "patent.html", system: "strategy" },
  { path: "/strategy/project-stats.html", title: "科研项目分析", sourceHtml: "project-stats.html", system: "strategy" },
  { path: "/strategy/social-network-import.html", title: "社会网络分析", sourceHtml: "social-network-import.html", system: "strategy" },
  { path: "/strategy/social-network-visualize.html", title: "社会网络分析(可视化)", sourceHtml: "social-network-visualize.html", system: "strategy" },
  { path: "/strategy/social-network-metrics.html", title: "社会网络分析(指标)", sourceHtml: "social-network-metrics.html", system: "strategy" },

  { path: "/strategy/clustering-task.html", title: "聚类分析(任务)", sourceHtml: "clustering-task.html", system: "strategy" },
  { path: "/strategy/clustering-results.html", title: "聚类分析(结果)", sourceHtml: "clustering-results.html", system: "strategy" },
  { path: "/strategy/common-network-task.html", title: "共性网络分析(任务)", sourceHtml: "common-network-task.html", system: "strategy" },
  { path: "/strategy/common-network.html", title: "共性网络分析", sourceHtml: "common-network.html", system: "strategy" },
  { path: "/strategy/tech-trend.html", title: "技术趋势分析", sourceHtml: "tech-trend.html", system: "strategy" },
  { path: "/strategy/tech-alert.html", title: "技术动态预警", sourceHtml: "tech-alert.html", system: "strategy" },

  { path: "/strategy/delphi.html", title: "德尔菲问卷", sourceHtml: "delphi.html", system: "strategy" },
  { path: "/strategy/tech-roadmap.html", title: "技术发展线路", sourceHtml: "tech-roadmap.html", system: "strategy" },

  { path: "/strategy/report-generation.html", title: "研究报告管理", sourceHtml: "report-generation.html", system: "strategy" },
  { path: "/strategy/insight-publish.html", title: "洞察报告发布", sourceHtml: "insight-publish.html", system: "strategy" },
  { path: "/strategy/hot-analysis.html", title: "热点分析", sourceHtml: "hot-analysis.html", system: "strategy" },
  { path: "/strategy/report-gen-ai.html", title: "战略咨询报告生成", sourceHtml: "report-gen-ai.html", system: "strategy" },

  { path: "/strategy/strategy-cases.html", title: "战略咨询案例展示", sourceHtml: "strategy-cases.html", system: "strategy" },

  { path: "/strategy/analysis-start.html", title: "开始分析", sourceHtml: "analysis-start.html", system: "strategy" },
  { path: "/strategy/case-share.html", title: "案例分享", sourceHtml: "case-share.html", system: "strategy" },
  { path: "/strategy/multi-source-data.html", title: "多源数据接入", sourceHtml: "multi-source-data.html", system: "strategy" },
  { path: "/strategy/data-dashboard.html", title: "数据看板显示", sourceHtml: "data-dashboard.html", system: "strategy" },
  { path: "/strategy/project-task.html", title: "项目任务", sourceHtml: "project-task.html", system: "strategy" },

  { path: "/research/problem-identification.html", title: "问题识别与清单研发", sourceHtml: "problem-identification.html", system: "research" },
  { path: "/research/problem-trend.html", title: "问题发展趋势分析", sourceHtml: "problem-trend.html", system: "research" },
  { path: "/research/competition-report.html", title: "国内外竞争格局报告", sourceHtml: "competition-report.html", system: "research" },
  { path: "/research/shenzhen-list.html", title: "深圳市基础研究部署清单", sourceHtml: "shenzhen-list.html", system: "research" },
];
