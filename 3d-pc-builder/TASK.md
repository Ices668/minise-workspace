# 任务：将 Stitch 设计稿转换为 React 工程化项目

## 输入设计稿（在 design-drafts/ 目录）
- stitch-homepage.html — 首页
- stitch-workbench.html — 3D装机工作台（核心页面）
- stitch-parts.html — 配件浏览页
- stitch-summary.html — 配置汇总页

## 要求
1. **框架**：React + Vite + TypeScript + Tailwind CSS
2. **依赖安装**：npm install --registry=https://registry.npmmirror.com
3. **目录结构**：
   - src/pages/Home.tsx
   - src/pages/Workbench.tsx
   - src/pages/Parts.tsx
   - src/pages/Summary.tsx
   - src/components/（公共组件）
   - src/App.tsx（路由配置）
4. **路由**：用 react-router-dom，首页→工作台→配件浏览→汇总可导航
5. **设计稿还原**：提取设计稿中的颜色变量（暗色主题，主色 #00aaff 科技蓝）、字体、布局，尽量还原
6. **3D工作台**：用 Three.js 或 @react-three/fiber 实现机箱3D占位展示（简单的旋转3D箱体即可，不需要真实模型）
7. **启动验证**：npm run dev 能在 localhost:5173 正常启动
8. **README.md**：包含项目结构和启动方式

## 完成后
输出：项目已可运行，入口 npm run dev
