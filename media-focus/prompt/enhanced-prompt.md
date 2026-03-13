# 媒体聚焦模块 - 增强后 Prompt

## 项目概述

一个专业的科技舆情媒体聚焦监控 dashboard，用于政府与科研机构的科技战略研判与舆情应对。界面风格需具备科技感、专业性、数据可视化主导的监控面板风格。

---

## DESIGN SYSTEM (REQUIRED)

- **Platform:** Web Dashboard, Desktop-first
- **Theme:** Dark theme with cyan/blue accents, professional surveillance/command center vibe
- **Background:** Deep Navy (#0a0e1a) for main background
- **Surface:** Dark Blue-Gray (#111827) for cards and panels
- **Primary Accent:** Electric Cyan (#00d4ff) for active states, key metrics
- **Secondary Accent:** Purple (#8b5cf6) for network graphs, coupling visualizations
- **Warning/Alert:** Amber (#f59e0b) for warnings
- **Danger/Negative:** Coral Red (#ef4444) for negative sentiment
- **Positive:** Emerald Green (#10b981) for positive indicators
- **Text Primary:** White (#ffffff) for headings
- **Text Secondary:** Cool Gray (#9ca3af) for labels and descriptions
- **Borders:** Subtle cyan glow (#00d4ff20) for active panels
- **Cards:** 16px border radius, subtle glow on hover

---

## Page Structure

### 1. Header Bar
- 模块标题 "媒体聚焦" 居左
- 右侧：时间范围选择器（近7天/30天/90天/自定义）、刷新按钮、导出按钮
- 底部：浅色分隔线带微光效果

### 2. 关键指标卡片区域 (4列)
- **总监测媒体数:** 大数字 + 趋势箭头
- **媒体关注热点数量:** 数字 + 增长率标签
- **情感偏向指标:** 三个小条形图（正/中/负占比），带颜色
- **媒体—技术耦合度总体评分:** 环形进度图 + 分数

**交互说明:**
- 点击"媒体关注热点"卡片：展开热点列表（按热度/增长率排序），支持将某热点加入监控清单
- 点击"耦合度评分"：弹出耦合分析摘要弹窗

### 3. 时间序列与趋势视图 (主图表区域)
- 多指标时间序列折线图：媒体提及数、情感分布、学术产出、投融资事件、政策关键词
- 底部时间轴支持拖拽选择范围
- 右侧图例支持点击切换显示/隐藏

**交互说明:**
- 鼠标悬停显示某时间点详细指标
- 支持"多序列对比"按钮
- 支持选择时间窗并导出

### 4. 媒体—技术耦合网络视图
- 左侧：网络图（节点=媒体/科技实体，节点大小=影响力，边=关联强度）
- 右侧：选中节点的详情面板（时间线、关键词云、代表性报道）

**交互说明:**
- 点击任一节点显示详情
- 支持"局部放大"和"路径查找"按钮
- 顶部筛选栏：地域、时间范围、情感

### 5. 热点检测与突发事件追踪
- 突发事件候选列表（按时间排序）
- 每条显示：触发原因、涉及实体、热度趋势
- 支持"加入突发监控"和"生成应对简报"按钮

### 6. 耦合度分析与解读面板
- 相关系数矩阵热力图
- 滞后效应图表（哪个指标领先）
- Granger 因果检验结果列表
- 耦合强度时间热力图

**交互说明:**
- 点击具体指标查看滞后分析详情
- 提供"可能机制解读"自动草稿按钮

### 7. 动态监控与预警规则配置
- 左侧：已配置规则列表（带启用/禁用开关）
- 右侧：规则配置表单（主题/实体/地域选择、指标选择、阈值设置、通知级别）

**交互说明:**
- "验证规则"按钮：基于历史数据回测
- 告警可触发自动化动作

### 8. 报告生成区
- 模板选择器（科技舆情短报/战略研判报告/舆情应对建议书）
- 时间范围选择
- 包含部分勾选（趋势/耦合/代表媒体/推荐）
- 导出按钮：PDF / Word / 共享链接

### 9. 智能推荐与溯源侧边栏
- 推荐卡片列表（相似度分值、主要理由）
- 每条推荐带"证据"展开按钮
- 溯源面板：原始文章、引用链、时间线

---

## 配色方案详细说明

| 元素 | 颜色 | Hex |
|------|------|-----|
| 主背景 | 深海军蓝 | #0a0e1a |
| 卡片背景 | 深蓝灰 | #111827 |
| 卡片悬停 | 浅蓝灰 | #1f2937 |
| 主强调色（科技青） | 电光青 | #00d4ff |
| 次强调（网络图） | 紫色 | #8b5cf6 |
| 正向情感 | 翠绿 | #10b981 |
| 中性情感 | 灰色 | #6b7280 |
| 负向情感 | 珊瑚红 | #ef4444 |
| 警告 | 琥珀 | #f59e0b |
| 文字主色 | 白色 | #ffffff |
| 文字次要 | 冷灰 | #9ca3af |
| 边框/分隔 | 暗青 | #00d4ff20 |

---

## 组件风格

- **卡片:** 16px 圆角，悬停时有青色微光边框
- **按钮:** 主按钮=青色填充，次按钮=透明+青色边框
- **图表:** 线条用青色/紫色/绿色，数据点带发光效果
- **网络图节点:** 媒体=圆形（青色），技术实体=六边形（紫色）
- **标签:** 小圆角胶囊形，不同颜色区分类型

---

## 响应式断点

- Desktop (>1200px): 完整 8 区布局
- Tablet (768-1200px): 2 列卡片，网络图下方折叠
- Mobile (<768px): 单列堆叠，Tab 切换各功能

---

💡 **Tip:** This is the first screen for the 媒体聚焦 module. Generate multiple related screens using consistent design tokens from this system.
