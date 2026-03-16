# 云服务器自助申请系统 — 里程碑文档

> **版本：** v1.0  
> **日期：** 2026-03-12  
> **作者：** minise  
> **关联 PRD：** [PRD.md](./PRD.md)

---

## 总览

| 里程碑 | 目标 | 预计周期 | 状态 |
|--------|------|----------|------|
| M1 | 基础架构 + 认证体系 | 1 周 | 🔄 后端✅ 前端接入进行中 |
| M2 | 服务器申请 + 审批核心流程 | 1.5 周 | 🔄 后端✅ 前端接入进行中 |
| M3 | PVE 集成 + 生命周期管理 | 1.5 周 | 🔄 服务层✅ Schema 待补充 |
| M4 | 邮件通知 + 到期告警 | 1 周 | 🔄 事件邮件✅ 定时告警待开发 |
| M5 | 数据分类管理 + 涉密审批 | 1 周 | 🔄 后端 API✅ 前端组件待开发 |
| M6 | 管理员端完善 + 用户管理 | 1 周 | ⏳ 待开始 |
| M7 | UI 打磨 + 深浅色模式 + 测试 | 1 周 | ⏳ 待开始 |
| M8 | 部署上线 + 文档 | 0.5 周 | ⏳ 待开始 |

**总预计周期：约 8.5 周**

---

## M1 — 基础架构 + 认证体系

**目标：** 搭建可运行的全栈基础骨架，打通登录认证链路。

### 交付物

- [x] 项目初始化（React + Vite + TailwindCSS / Fastify + Prisma + MySQL）
- [x] 统一 `package.json`，前后端共享依赖
- [x] Prisma Schema 设计（User / Server / ServerApplication / DataCategory / Notification）
- [x] 用户登录接口（`POST /api/auth/login`，JWT 签发）
- [x] 重置密码接口（`POST /api/auth/reset-password`）
- [x] JWT preHandler 鉴权（Fastify `addHook`）
- [x] 管理员鉴权中间件（`adminOnly` hook）
- [x] 前端登录页面（邮箱 + 密码表单，组件在 `src/pages/login/`）
- [x] 前端页面骨架（home / admin / notification 三个 Widget）
- [x] 全局深色/浅色模式 CSS 变量体系（`:root` 深色，`.light` 浅色）
- [ ] 前端接入后端登录 API（当前 `App.jsx` 中 `isLoggedIn` 硬编码为 true）
- [ ] `need_reset_password` 首次登录强制重置弹窗（前端逻辑）
- [ ] JWT token 存储与请求头注入（`api-client.js` 需添加 Authorization header）
- [ ] Vite 开发代理配置（`/web-api` → `http://localhost:3001/api`）

### 验收标准

- 用户可使用邮箱/密码登录，首次登录跳转重置密码
- JWT token 随 API 请求自动携带
- 页面骨架正常渲染，导航可切换

---

## M2 — 服务器申请 + 审批核心流程

**目标：** 完成申请提交 → 自动/人工审批 → 状态更新的完整闭环。

### 交付物

- [x] 申请提交 API（`POST /api/user/applications`，含自动审批逻辑）
- [x] 自动审批逻辑（≤3 台服务器 ∧ ≤1 台 GPU ∧ 无涉密数据）
- [x] 用户申请列表 API（`GET /api/user/applications`）
- [x] 管理员查看全部申请 API（`GET /api/admin/applications`）
- [x] 管理员审批接口（`POST /api/admin/applications/:id/approve`）
- [x] 审批通过后自动创建 Server 记录（含 expireAt 计算）
- [x] 申请状态机（PENDING → APPROVED / REJECTED / EXPIRED）
- [ ] 服务器申请表单前端组件（`CreateServerModal`，需接入 API）
- [ ] 申请记录列表前端页面（用户端）
- [ ] 管理员审批列表前端页面（含通过/拒绝操作）
- [ ] 站内通知写入（审批结果 → Notification 表，接口待补充）

### 验收标准

- 用户提交申请后，满足自动审批条件时立即变为 APPROVED
- 不满足条件时，管理员在管理端可看到待审批条目并操作
- 审批后用户申请记录状态正确更新

---

## M3 — PVE 集成 + 生命周期管理

**目标：** 对接 Proxmox VE API，实现服务器创建、启停、释放全流程。

### 交付物

- [x] PVE API 客户端封装（`server/service/pve-client.js`）：Token 缓存、VM/CT CRUD、状态查询、GPU 绑定/解绑
- [x] 服务器管理服务（`server/service/server-service.js`）：createVm / createContainer / startServer / stopServer / releaseServer / syncServerStatuses / getHostServers
- [x] Express 服务器路由（`server/routes/server.js`）：完整 CRUD 含 PVE 操作
- [x] 用户服务器操作 API（`POST /api/user/servers/:id/:action`）
- [x] 用户续期 API（`POST /api/user/servers/:id/extend`）
- [ ] **⚠️ Schema 待补充**：`prisma/schema.prisma` 中 `Server` 模型需添加 `pveVmId / pveNode / pveType / pveName / pveConfig / gpuId` 字段，否则 `server-service.js` 的写入会失败
- [ ] 用户服务器列表前端页面（`ServerCard` 组件需接入 API）
- [ ] 管理员主机实例列表前端页面

### 验收标准

- 审批通过后触发 PVE 创建，Server 记录中 `pveVmId` 有值
- 关机/启动操作在 PVE 和数据库中状态一致
- 释放操作后服务器状态为 DELETED，PVE 中实例已删除

---

## M4 — 邮件通知 + 到期告警

**目标：** 完善邮件通知体系，实现到期前多阶段告警。

### 交付物

- [x] 邮件服务封装（`server/service/email-service.js`，nodemailer）：VM 创建成功/失败、关机、释放、启动失败通知模板
- [ ] 定时任务（Cron）：每日扫描即将到期的服务器
  - 过期前 7 天：发送首次提醒邮件
  - 过期前 3 天内：每日发送提醒
  - 到期当天：发送最终警告 + 自动释放（or 仅提醒，由配置决定）
- [ ] 邮件模板：到期提醒（含服务器信息、续期入口链接）
- [ ] 续期申请接口（`POST /api/applications/:id/extend`，最多 +30 天）
- [ ] 续期申请前端入口（服务器卡片上"申请续期"按钮）

### 验收标准

- 临近过期的服务器（可人工设置一个测试用的近期时间）收到邮件提醒
- 最后 3 天期间每日重复提醒，不重复发送同一天的邮件
- 用户点击续期后申请记录增加 extensionDays

---

## M5 — 数据分类管理 + 涉密审批

**目标：** 完善数据分类树的 CRUD，落地涉密数据的审批必达逻辑。

### 交付物

- [x] 数据分类树 API（`server/src/routes/admin.js`）：GET / POST / PUT / DELETE `/api/admin/data-categories`
- [x] 后端：删除含子节点的分类时返回 400 错误
- [x] 后端：涉密数据（CONFIDENTIAL / TOP_SECRET）跳过自动审批（在 `user.js` 中已实现）
- [ ] 管理员前端：数据分类树可视化管理页（树形结构展示）
- [ ] 用户申请表单中的数据分类选择器（TreeSelect 组件）
- [ ] 前端：选择"机密"/"绝密"节点时，自动显示"必须填写理由"校验提示
- [ ] 前端：删除含子节点的分类时二次确认对话框

### 验收标准

- 管理员可添加/修改/删除分类节点，树结构正确展示
- 用户选择含涉密节点时，理由字段必填且申请不会自动通过
- 申请记录中可看到关联的数据分类列表

---

## M6 — 管理员端完善 + 用户管理

**目标：** 完善管理员控制台，补全用户管理功能。

### 交付物

- [x] 用户列表 API（`GET /api/admin/users`）
- [x] 添加用户 API（`POST /api/admin/users`，含 bcrypt 初始密码哈希）
- [ ] 添加用户时自动生成随机密码并邮件发送（当前接口要求调用方传入 `initialPassword`，未自动生成）
- [ ] 修改用户角色接口（当前缺少 `PUT /api/admin/users/:id`）
- [ ] 用户管理前端页面（列表 + 添加用户表单）
- [ ] 管理员服务器总览前端：筛选（用户 / 状态 / 节点）、分页
- [ ] 管理员对任意服务器执行管理操作（前端）
- [ ] 审批记录前端支持搜索 / 筛选 / 分页
- [ ] 操作日志（可选，P2）

### 验收标准

- 管理员通过邮箱添加用户，用户收到初始密码邮件并能正常登录
- 管理员在总览页能看到所有用户的服务器状态并操作

---

## M7 — UI 打磨 + 深浅色模式 + 测试

**目标：** 优化用户体验，完成主要功能的测试。

### 交付物

- [x] 深色模式 CSS 变量体系（已完成，深色为默认，`.light` 切换）
- [x] 深色/浅色模式切换按钮 + localStorage 持久化（`App.jsx`）
- [x] 通用 UI 组件库（`src/common/components/`）：Button、Checkbox、Radio、Select、Toggle、Tabs、Popup、Info、Warning、Tip、CloseButton
- [ ] 前端各页面与后端 API 完整接入（MobX store 方法 + api-client 调用）
- [ ] Loading 状态、空状态、错误状态的统一处理
- [ ] 表单校验反馈（错误提示、字段高亮）
- [ ] 操作确认对话框（释放服务器等破坏性操作）
- [ ] Toast / 消息提示组件
- [ ] 前端核心流程端到端测试（手动 or Playwright）
- [ ] API 接口基本测试（可用 curl/Postman 脚本）
- [ ] 响应式布局检查

### 验收标准

- 切换深色/浅色模式，所有页面样式正常
- 操作成功/失败均有明确反馈
- 核心流程（申请 → 审批 → 创建 → 操作 → 释放）端到端可通

---

## M8 — 部署上线 + 文档

**目标：** 完成生产环境部署，输出使用文档。

### 交付物

- [ ] 生产环境配置（`.env.production`、数据库迁移脚本）
- [ ] Docker / PM2 部署方案
- [ ] Nginx 反向代理配置（前端静态文件 + API 代理）
- [ ] 数据库初始化脚本（初始管理员账号、默认数据分类树）
- [ ] 用户使用手册（README 或独立文档）
- [ ] 运维手册（环境变量说明、日志查看、常见问题）

### 验收标准

- 在目标服务器上部署后可正常访问
- 管理员账号可登录并完成首次配置（添加用户、配置数据分类）

---

## 风险与依赖

| 风险 | 影响 | 缓解措施 |
|------|------|----------|
| PVE API 变动或网络不稳定 | M3 进度 | 提供 mock 模式，离线可调试 |
| 邮件服务配置复杂（SMTP 限制） | M4 进度 | 先用 nodemailer + qq/163 邮箱测试 |
| GPU 资源有限，分配策略未定 | M3 验收 | 当前用"取第一个"先跑通，后续迭代调度策略 |
| 数据分类树层级过深，前端渲染性能 | M5 体验 | 懒加载树节点 |

---

## 变更记录

| 版本 | 日期 | 变更内容 |
|------|------|----------|
| v1.0 | 2026-03-12 | 初版，基于现有代码反推生成 |
| v1.1 | 2026-03-12 | 对比代码库实际进度，修正 M1-M5 完成状态；补充已完成的后端 API 和未完成的前端接入任务；标注 Schema 待补充的 PVE 字段 |

---

*文档由 minise 🦞 生成 · 如有调整请直接修改此文件*
