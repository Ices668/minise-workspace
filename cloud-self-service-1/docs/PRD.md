# 云服务器自助申请系统 — 产品需求文档（PRD）

> **版本：** v1.0  
> **日期：** 2026-03-12  
> **作者：** minise  
> **状态：** 草稿

---

## 1. 背景与目标

### 1.1 背景

在拥有 Proxmox VE（PVE）集群的私有云环境中，服务器资源的申请与分配长期依赖人工操作，流程不透明、效率低。本系统旨在打通"用户申请 → 自动审批/人工审批 → 资源创建 → 全生命周期管理"的闭环，降低运维成本，提升用户体验。

### 1.2 产品目标

| 目标 | 描述 |
|------|------|
| 自助化 | 用户可自行提交申请、查看状态、操作服务器，无需人工介入常规流程 |
| 合规化 | 涉密数据访问须经管理员审批，自动记录申请理由与审批链路 |
| 可观测 | 服务器全生命周期状态同步自 PVE，管理员可随时掌握资源使用情况 |
| 安全 | 角色权限隔离、密码首次登录强制修改、邮件通知关键操作 |

### 1.3 目标用户

- **普通用户**：需要使用计算资源进行科研/开发的内部人员
- **管理员**：负责资源审批、用户管理、数据分类维护的运维/管理人员

---

## 2. 系统架构

### 2.1 技术选型

| 层级 | 技术 |
|------|------|
| 前端 | React 19 + Vite + TailwindCSS + Heroicons |
| 后端 | Node.js + Fastify |
| 数据库 | MySQL + Prisma ORM |
| 虚拟化 | Proxmox VE（PVE）API |
| 邮件 | 邮件服务（SMTP） |

### 2.2 角色模型

```
Role
├── USER       普通用户
└── ADMIN      管理员（拥有全部用户权限 + 管理权限）
```

### 2.3 保密级别

```
SecrecyLevel
├── PUBLIC       公开
├── INTERNAL     内部
├── CONFIDENTIAL 机密（需审批理由）
└── TOP_SECRET   绝密（必须人工审批）
```

---

## 3. 功能需求

### 3.1 用户端功能

#### 3.1.1 登录与密码管理

| ID | 需求 | 优先级 |
|----|------|--------|
| U-01 | 用户通过邮箱 + 密码登录 | P0 |
| U-02 | 首次使用系统随机密码登录时，强制重置密码 | P0 |
| U-03 | 登录后保持会话，支持登出 | P0 |

**首次登录流程：**
```
输入邮箱/密码 → 验证通过 → 检测 need_reset_password 字段
→ 1 → 弹出重置密码表单 → 修改成功（need_reset_password 置 0）→ 进入主页
→ 0 → 直接进入主页
```

#### 3.1.2 服务器申请

| ID | 需求 | 优先级 |
|----|------|--------|
| U-10 | 填写服务器规格：CPU（核）、内存（MB）、是否含 GPU、存储（GB）、时长（天） | P0 |
| U-11 | 在数据分类树中多选需要使用的数据 | P0 |
| U-12 | 选择含"机密"或"绝密"数据时，必须填写申请理由 | P0 |
| U-13 | 提交后可在申请记录中查看审批状态（待审批 / 已通过 / 已拒绝） | P0 |

**自动审批规则：**
```
条件 A：用户名下正在使用的服务器数量 ≤ 3
条件 B：用户名下正在使用的带 GPU 的服务器数量 ≤ 1
条件 C：未选择"机密"或"绝密"数据，或未选择任何数据

满足 A ∧ B ∧ C → 自动通过
否则 → 进入人工审批队列
```

#### 3.1.3 服务器管理

| ID | 需求 | 优先级 |
|----|------|--------|
| U-20 | 查看所有申请记录（包含状态、规格、创建时间） | P0 |
| U-21 | 对已通过的服务器执行：启动、关机、重启 | P0 |
| U-22 | 释放服务器（不可逆，释放后数据清除） | P0 |
| U-23 | 申请延长服务器过期时间，每次最多 +30 天 | P1 |

#### 3.1.4 到期提醒

| ID | 需求 | 优先级 |
|----|------|--------|
| U-30 | 服务器过期前 7 天发送首次邮件提醒 | P1 |
| U-31 | 过期前最后 3 天，每日发送一次邮件提醒 | P1 |
| U-32 | 通知内容包含服务器名称、到期时间、续期入口 | P1 |

#### 3.1.5 系统通知

| ID | 需求 | 优先级 |
|----|------|--------|
| U-40 | 站内通知中心，展示审批结果、系统消息 | P1 |
| U-41 | 未读消息数角标展示 | P2 |

#### 3.1.6 界面

| ID | 需求 | 优先级 |
|----|------|--------|
| U-50 | 支持浅色 / 深色模式切换，偏好本地持久化 | P1 |
| U-51 | 响应式布局，适配桌面端 | P1 |

---

### 3.2 管理员端功能

#### 3.2.1 用户管理

| ID | 需求 | 优先级 |
|----|------|--------|
| A-01 | 通过邮箱添加新用户，设置昵称（nickname，全局唯一）和角色（普通用户 / 管理员） | P0 |
| A-02 | 系统为新用户生成随机初始密码，通过邮件发送；`need_reset_password` 置 1 | P0 |
| A-03 | 查看用户列表（邮箱、昵称、角色、创建时间） | P1 |

#### 3.2.2 申请审批

| ID | 需求 | 优先级 |
|----|------|--------|
| A-10 | 查看所有待审批、已审批的申请记录 | P0 |
| A-11 | 对待审批申请执行：通过 / 拒绝，并可填写审批意见 | P0 |
| A-12 | 通过后自动触发 PVE 服务器创建流程 | P0 |
| A-13 | 审批结果通过邮件/站内通知告知用户 | P0 |

#### 3.2.3 服务器总览

| ID | 需求 | 优先级 |
|----|------|--------|
| A-20 | 查看所有用户的服务器列表及状态 | P1 |
| A-21 | 管理员可对任意服务器执行启动 / 关机 / 释放 | P1 |

#### 3.2.4 数据分类管理

| ID | 需求 | 优先级 |
|----|------|--------|
| A-30 | 维护数据分类树（添加、删除、修改节点） | P0 |
| A-31 | 每个分类节点可设置：名称、描述、保密级别、父节点 | P0 |
| A-32 | 分类树支持无限层级 | P1 |
| A-33 | 删除含子节点的分类时需要确认提示 | P1 |

---

## 4. 非功能需求

| 维度 | 要求 |
|------|------|
| 安全 | JWT 认证，Token 过期后重新登录；密码 bcrypt 加密存储 |
| 性能 | 页面首次加载 < 3s；服务器状态同步调用 PVE API 后返回 |
| 可靠性 | PVE 操作失败时回滚数据库状态，邮件发送失败不影响主流程 |
| 可维护性 | 前端分 pages/components/api 层；后端分 routes/service/prisma 层 |
| 兼容性 | Chrome / Edge 最新版本，暂不要求移动端 |

---

## 5. 数据模型概览

```
User ──── ServerApplication ──── ServerApplicationDataCategory ──── DataCategory
 │                │
 │            Server (PVE 实例)
 │
Notification
```

| 模型 | 关键字段 | 说明 |
|------|----------|------|
| User | email (unique)、nickname (unique)、need_reset_password、role | 用户账号，含角色 |
| ServerApplication | userId、cpu、memory、gpu、storage、duration、reason、status、extensionDays | 服务器申请记录 |
| Server | applicationId (unique)、userId、status、expireAt、**pveVmId、pveNode、pveType、pveName、gpuId**（需在 schema 中补充） | 已分配的 PVE 实例 |
| DataCategory | name、parentId（自引用树）、secrecyLevel | 数据分类树节点 |
| ServerApplicationDataCategory | serverApplicationId + dataCategoryId（联合主键） | 申请与数据分类的多对多关联表 |
| Notification | userId、content、isRead | 站内通知 |

> **⚠️ Schema 待补充**：`Server` 模型在 `server-service.js` 中写入了 `pveVmId / pveNode / pveType / pveName / pveConfig / gpuId` 字段，但当前 `prisma/schema.prisma` 尚未定义这些字段，需同步更新 Schema 并执行迁移。

---

## 6. 界面流程图

### 用户申请流程
```
登录 → 我的服务器 → 新建申请 → 填写规格 → 选择数据
                                              ↓
                              选了机密/绝密？ → 是 → 填写理由
                                              ↓
                                          提交申请
                                              ↓
                              自动审批通过？ → 是 → PVE 创建服务器 → 邮件通知
                                         → 否 → 进入审批队列 → 管理员审批 → 邮件通知
```

### 服务器生命周期
```
PENDING（申请中）
    ↓ 通过
RUNNING（运行中）
    ↓ 关机
STOPPED（已停止）
    ↓ 启动
RUNNING
    ↓ 释放/到期
DELETED（已释放）
```

---

## 7. API 接口清单

> 后端 Fastify 服务（`server/src/index.js`）默认运行在 **port 3001**。前端开发时通过 Vite 代理将 `/web-api/*` 转发到 `http://localhost:3001/api/*`（需在 `vite.config.js` 中配置 `server.proxy`）。

### 认证（`/api/auth`，无需 JWT）

| 方法 | 路径 | 说明 |
|------|------|------|
| POST | `/api/auth/login` | 邮箱+密码登录，返回 JWT token |
| POST | `/api/auth/reset-password` | 重置密码（需提供旧密码） |

### 用户端（`/api/user`，需 JWT）

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/user/applications` | 获取当前用户的申请列表 |
| POST | `/api/user/applications` | 提交服务器申请 |
| GET | `/api/user/servers` | 获取当前用户的服务器列表 |
| POST | `/api/user/servers/:id/:action` | 服务器操作（`shutdown` / `restart` / `release`） |
| POST | `/api/user/servers/:id/extend` | 申请续期（body: `extensionDays`，1-30） |

### 管理员端（`/api/admin`，需 JWT + ADMIN 角色）

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/admin/applications` | 获取所有申请记录 |
| POST | `/api/admin/applications/:id/approve` | 审批（body: `{ approved: true/false }`） |
| GET | `/api/admin/users` | 获取用户列表 |
| POST | `/api/admin/users` | 添加用户（body: `{ email, role, initialPassword }`） |
| GET | `/api/admin/data-categories` | 获取根分类列表（含一级子节点） |
| POST | `/api/admin/data-categories` | 添加分类节点 |
| PUT | `/api/admin/data-categories/:id` | 修改分类节点 |
| DELETE | `/api/admin/data-categories/:id` | 删除分类节点（含子节点时拒绝） |

### 服务器管理路由（Express，`server/routes/server.js`，含 PVE 操作）

| 方法 | 路径 | 说明 |
|------|------|------|
| POST | `/servers/vm` | 创建虚拟机（触发 PVE） |
| POST | `/servers/container` | 创建容器（触发 PVE） |
| POST | `/servers/:id/start` | 启动（PVE 启动 + GPU 重绑） |
| POST | `/servers/:id/stop` | 关机（PVE 关机 + GPU 解绑） |
| DELETE | `/servers/:id` | 释放（PVE 删除） |
| GET | `/servers/user` | 获取当前用户服务器列表（支持 PVE 状态同步） |
| GET | `/servers/host/:hostName` | 管理员查看物理机实例列表 |

---

## 8. 待确认事项

- [ ] GPU 分配策略：当前为"取第一个可用 GPU"，是否需要更复杂的调度策略？
- [ ] 续期审批：延长到期时间是否需要走审批流程，还是自助操作即可？
- [ ] 数据分类选择方式：是否支持整棵子树选择（选父节点即代表选所有子节点）？
- [ ] 操作日志：是否需要记录管理员的操作日志？
- [ ] 服务器规格限制：是否有 CPU/内存/存储的最大值限制？

---

---

## 变更记录

| 版本 | 日期 | 变更内容 |
|------|------|----------|
| v1.0 | 2026-03-12 | 初版 |
| v1.1 | 2026-03-12 | 修正首次登录字段名（`need_reset_password`）；添加 nickname 字段说明；补充 API 接口清单（第 7 节）；更新数据模型表格，标注 Server 模型中待补充的 PVE 字段 |

---

*文档由 minise 🦞 生成 · 如有调整请直接修改此文件*
