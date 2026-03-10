# GKX 智能决策平台 - React 工程

基于 Stitch 设计稿（33页）还原的 React 工程化项目。

## 技术栈

- **框架**: React 18 + TypeScript
- **构建**: Vite
- **样式**: Tailwind CSS（CDN）+ Material Symbols Outlined 图标
- **路由**: React Router DOM v7

## 页面结构

```
/                          # 系统选择首页
/strategy/*                # 战略咨询智能支持系统
  /strategy/entity-list    # 科技实体清单
  /strategy/tech-system    # 技术体系分析
  /strategy/consulting-report  # 战略咨询报告
  /strategy/report-generation  # 一键报告生成
  /strategy/cases          # 战略咨询案例
  /strategy/insight-publish # 洞察报告发布
/research/*                # 基础研究智能决策系统
  /research/paper-dashboard    # 论文分析总览
  /research/paper-task         # 论文分析任务
  /research/patent             # 专利分析
  /research/data-dashboard     # 数据看板
  /research/tech-trend         # 技术趋势分析
  /research/hot-analysis       # 热点分析
  /research/tech-alert         # 技术动态预警
  /research/media-focus        # 媒体聚焦
  /research/social-network*    # 社会网络分析（4个子页）
  /research/clustering*        # 聚类分析（2个子页）
  /research/common-network*    # 共性网络分析（2个子页）
  /research/project-*          # 科研项目分析（2个子页）
  /research/tech-roadmap       # 技术发展路线
  /research/problem-*          # 问题识别（2个子页）
  /research/delphi             # 德尔菲问卷
  /research/multi-source-data  # 多源数据接入
  /research/shenzhen-list      # 深圳研究部署清单
  /research/frontier-tech      # 颠覆性前沿技术分析
  /research/competition-report # 竞争格局报告
```

## 项目结构

```
src/
├── layouts/
│   ├── StrategyLayout.tsx   # 战略系统外壳（侧边栏+顶部栏）
│   └── ResearchLayout.tsx   # 研究系统外壳（侧边栏+顶部栏）
├── pages/
│   ├── HomePage.tsx         # 系统选择首页
│   ├── strategy/            # 战略咨询页面（6个）
│   └── research/            # 基础研究页面（26个）
design-drafts/               # Stitch 原始 HTML 设计稿（33个）
```

## 启动

```bash
npm install --registry=https://registry.npmmirror.com
npm run dev
```

## 构建

```bash
npm run build
```

## 设计稿来源

Stitch 项目：https://stitch.withgoogle.com/projects/16083068148308144470
