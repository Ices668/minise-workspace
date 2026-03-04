# Snake Score UI (React + Vite + Tailwind CSS)

本项目基于三份 Stitch 设计稿重构：
- `stitch-menu.html`（主菜单）
- `stitch-game.html`（游戏主界面）
- `stitch-gameover.html`（游戏结算）

技术栈：React + Vite + Tailwind CSS + React Router v6。

## 页面与路由

- `/` -> `MenuPage`，`START GAME` 按钮跳转到 `/game`
- `/game` -> `GamePage`，内含 `canvas` 贪吃蛇逻辑占位；`Pause` / `Home` 返回 `/`；`Trigger Game Over` 跳转 `/gameover`
- `/gameover` -> `GameOverPage`，`PLAY AGAIN` 跳转 `/game`，`MAIN MENU` 跳转 `/`

## 目录结构

```text
snake-score-ui/
├── stitch-menu.html
├── stitch-game.html
├── stitch-gameover.html
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    └── pages/
        ├── MenuPage.jsx
        ├── GamePage.jsx
        └── GameOverPage.jsx
```

## 主题与样式

- 主色：`#13ec80`（`primary`）
- 暗色背景：`#102219`（`background-dark`）
- 棋盘深色：`#0a1410`（`game-board`）
- 字体：`Space Grotesk`
- 图标：`Material Symbols Outlined`

## 启动

1. 安装依赖（按要求使用镜像）：

```bash
npm install --registry=https://registry.npmmirror.com
```

2. 启动开发环境：

```bash
npm run dev
```

3. 构建生产包：

```bash
npm run build
```
