# 云服务器自助申请系统 — 前后端全面接入设计文档

> **日期：** 2026-03-12
> **状态：** 已确认
> **关联里程碑：** M1（前端接入）、M2（前端接入）、M3（Schema）、M4（Cron）、M5（前端接入）、M6（前端接入）

---

## 背景

后端 API 已基本完整，但前端处于"UI 骨架未接线"状态：登录状态硬编码、MobX store 为空壳、JWT 未注入请求头、Vite 代理未配置。本设计覆盖将整个系统打通为可运行 MVP 所需的全部改动，采用"竖切片"方式逐步交付。

---

## 整体方案：Feature Slice（竖切片）

每个 slice 是从数据库到 UI 的完整功能垂直切片，按顺序实现，每完成一个可独立演示。

```
Slice 1: 认证
Slice 2: 服务器申请
Slice 3: 管理员审批
Slice 4: 服务器操作 + Schema 修复
Slice 5: 通知中心
Slice 6: 管理员控制台
Slice 7: Cron 到期告警
```

---

## 共享基础设施（在 Slice 1 中一次性建好）

### Vite 开发代理

`vite.config.js` 增加 `server.proxy`：

```js
server: {
  proxy: {
    '/web-api': {
      target: 'http://localhost:3001',
      rewrite: (path) => path.replace(/^\/web-api/, '/api')
    }
  }
}
```

`sdk.js` 的 `baseUrl = '/web-api'` 保持不变。

### JWT 持久化与请求注入

- Token 存储：`localStorage('auth_token')`
- `api-client.js` 每次请求自动注入 `Authorization: Bearer <token>`
- 收到 `401` 时清空 token，触发全局登出（通过 `setErrorHandler`）

### 全局 AuthStore

替换 `App.jsx` 中的 `useState` 登录态：

```
AuthStore (MobX, makeAutoObservable)
  state:   token, user { id, email, role, nickname }, needResetPassword
  actions: login(email, password), logout(), resetPassword(oldPwd, newPwd)
```

通过 `AuthContext` 向下传递，页面级 Store 通过 `useContext(AuthContext)` 访问用户信息。

### SDK 扩展原则

`sdk.js` 按 slice 逐步添加方法，所有方法通过 `api-client.js` 发请求，token 由 `api-client.js` 自动注入，SDK 层不感知 auth。

---

## Slice 1：认证流程

### 登录流程

```
用户输入邮箱/密码
  → sdk.login() → POST /web-api/login
  → 成功：token + user 存入 AuthStore + localStorage
  → 检查 needResetPassword
      → true  → 显示改密弹窗（全屏遮罩，强制，不可跳过）
      → false → 进入主页
  → 失败：表单显示错误提示
```

### 首次登录改密弹窗

复用 `Popup` 组件，字段：旧密码、新密码、确认新密码。
调用 `sdk.resetPassword()` → 成功后 `AuthStore.needResetPassword = false` → 弹窗关闭。

### 登出

`AuthStore.logout()` → 清空 localStorage token → 返回登录页。

### App.jsx 改造

| 改动 | 说明 |
|------|------|
| 引入 `AuthStore` + `AuthContext` | 替换 `useState(isLoggedIn)` |
| 渲染逻辑 | `!token` → `LoginPage`；`needResetPassword` → `ResetPasswordModal` |
| 导航栏用户名 | 读 `authStore.user.nickname` |

### SDK 新增

```js
sdk.login(email, password)
sdk.resetPassword(email, oldPassword, newPassword)
```

---

## Slice 2：服务器申请

### 功能

- 申请记录列表（用户自己的）
- 新建申请弹窗（`CreateServerModal`）

### HomeStore 状态

```
applications: []
servers: []
dataCategories: []
loading: false
submitting: false
```

### 数据流

```
HomeStore.init()
  → GET /web-api/applications
  → GET /web-api/servers
  → GET /web-api/data-categories

HomeStore.submitApplication(form)
  → POST /web-api/applications
  → 成功：刷新列表
```

### CreateServerModal 字段

| 字段 | 约束 |
|------|------|
| CPU（核） | ≥1 |
| 内存（MB） | ≥512 |
| 是否含 GPU | Toggle |
| 存储（GB） | ≥10 |
| 时长（天） | ≥1 |
| 数据分类 | 平铺多选列表（带层级缩进） |
| 申请理由 | 选了机密/绝密时前端必填校验 |

> TreeSelect 组件留待 M5 专项实现，本次用平铺多选列表替代。

### SDK 新增

```js
sdk.getApplications()
sdk.submitApplication(data)
sdk.getServers()
sdk.getDataCategories()   // 复用 /web-api/data-categories（需确认权限）
```

---

## Slice 3：管理员审批

### 功能

`VmAudit` 组件接入真实数据，支持通过/拒绝操作。

### AdminStore 状态（本 slice）

```
applications: []
filterStatus: 'PENDING' | 'ALL'
loading: false
processingId: null
```

### 数据流

```
AdminStore.fetchApplications() → GET /web-api/admin/applications
AdminStore.approve(id)         → POST /web-api/admin/applications/:id/approve { approved: true }
AdminStore.reject(id)          → POST /web-api/admin/applications/:id/approve { approved: false }
```

### 权限控制

`authStore.user.role !== 'ADMIN'` 时隐藏管理员 tab，直接访问渲染 403 提示。

### SDK 新增

```js
sdk.getAdminApplications()
sdk.approveApplication(id, approved)
```

---

## Slice 4：服务器操作 + Schema 修复

### Schema 修复

`prisma/schema.prisma` 的 `Server` 模型补充 PVE 字段（均为可选，兼容无 PVE 环境）：

```prisma
pveVmId  Int?
pveNode  String?
pveType  String?    // "qemu" | "lxc"
pveName  String?
gpuId    String?
```

同步更新 `server/prisma/schema.prisma`，执行 `npm run db` 生成 migration。

### 服务器操作

`ServerCard` 组件操作按钮：

| 操作 | 接口 | 触发条件 |
|------|------|----------|
| 关机 | `POST /web-api/servers/:id/shutdown` | RUNNING |
| 启动 | `POST /web-api/servers/:id/restart` | STOPPED |
| 释放 | `POST /web-api/servers/:id/release` | 任意，需二次确认弹窗 |
| 申请续期 | `POST /web-api/servers/:id/extend` | 非 DELETED |

### PVE 降级

PVE 操作失败时，数据库状态仍正常更新，错误只写日志，不向前端返回 500。

### HomeStore 补充

```
HomeStore.serverAction(id, action)   → POST /web-api/servers/:id/:action
HomeStore.extendServer(id, days)     → POST /web-api/servers/:id/extend
```

### SDK 新增

```js
sdk.serverAction(id, action)
sdk.extendServer(id, extensionDays)
```

---

## Slice 5：通知中心

### 功能

- 通知列表（审批结果、系统消息）
- 标记单条已读 / 全部已读
- 导航栏未读数角标

### NotificationStore 状态

```
notifications: []
loading: false
get unreadCount()   // 计算属性
```

### 数据流

```
NotificationStore.init()      → GET /web-api/notifications
NotificationStore.markRead(id) → PUT /web-api/notifications/:id/read
NotificationStore.markAllRead() → PUT /web-api/notifications/read-all
```

### 未读数角标

`unreadCount` 挂在 `AuthStore` 上（登录即初始化），`App.jsx` 订阅后驱动导航栏角标。

### 后端补充

在 `server/src/routes/user.js` 新增：

```
GET  /api/user/notifications
PUT  /api/user/notifications/:id/read
PUT  /api/user/notifications/read-all
```

### SDK 新增

```js
sdk.getNotifications()
sdk.markNotificationRead(id)
sdk.markAllNotificationsRead()
```

---

## Slice 6：管理员控制台

### 功能范围

| Tab | 组件 | 本 slice 改动 |
|-----|------|--------------|
| 申请审批 | `VmAudit` | Slice 3 已完成 |
| 用户管理 | `UserManagement` | 接入 API |
| 数据分类管理 | `DataDirectoryManagement` | 接入 API |
| 主机实例 | `HostInstancesModal` | 只读展示 |

### 用户管理

```
AdminStore.fetchUsers()         → GET  /web-api/admin/users
AdminStore.addUser(data)        → POST /web-api/admin/users  （后端自动生成密码并发邮件）
AdminStore.updateUserRole(id, role) → PUT /web-api/admin/users/:id
```

### 数据分类管理

平铺树列表（层级缩进），CRUD 操作：

```
AdminStore.fetchDataCategories()        → GET    /web-api/admin/data-categories
AdminStore.addCategory(data)            → POST   /web-api/admin/data-categories
AdminStore.updateCategory(id, data)     → PUT    /web-api/admin/data-categories/:id
AdminStore.deleteCategory(id)           → DELETE /web-api/admin/data-categories/:id
  有子节点 → 后端 400 → 显示错误提示
  无子节点 → 确认弹窗后删除
```

### 主机实例

```
AdminStore.fetchHostInstances(hostName) → GET /web-api/admin/servers/host/:hostName
```

无 PVE 时返回空列表，前端显示"暂无实例"。

### 后端补充

| 接口 | 说明 |
|------|------|
| `PUT /api/admin/users/:id` | 修改用户角色（新增） |
| `GET /api/admin/servers/host/:hostName` | 主机实例（新增，转发 server-service） |
| `POST /api/admin/users` | 改为后端自动生成随机密码并邮件发送 |

### SDK 新增

```js
sdk.getAdminUsers()
sdk.addUser(data)
sdk.updateUserRole(id, role)
sdk.getAdminDataCategories()
sdk.addDataCategory(data)
sdk.updateDataCategory(id, data)
sdk.deleteDataCategory(id)
sdk.getHostInstances(hostName)
```

---

## Slice 7：Cron 到期告警

### 告警规则

| 距到期天数 | 操作 |
|-----------|------|
| 7 天 | 首次提醒邮件 |
| 3、2、1 天 | 每日紧急提醒 |
| 0 天（当天） | 最终警告（不自动释放） |

### 实现方案

不引入新依赖，使用 Node.js 原生 `setInterval`：

```
server/service/expiry-service.js
  expiryService.scan()    主扫描入口
  expiryService.start()   注册 24h 定时器，启动时立即执行一次

server/src/index.js
  启动时调用 expiryService.start()
```

### 扫描逻辑

```
1. 查询 status ∈ {RUNNING, STOPPED} 且 expireAt 在 7 天内的 Server
2. 计算 daysLeft = ceil((expireAt - now) / 86400000)
3. daysLeft ∈ {7, 3, 2, 1, 0}：
   → 查今日是否已有该 serverId 的 EXPIRY_WARNING 通知
   → 无：发邮件 + 写 Notification 记录
   → 有：跳过
```

### 去重机制

复用 `Notification` 表，`content` 存储 JSON：

```json
{ "type": "EXPIRY_WARNING", "serverId": 123, "daysLeft": 3 }
```

`Notification` 模型新增 `serverId Int?` 字段（可选，兼容现有通知）。

### 后端改动

| 文件 | 改动 |
|------|------|
| `prisma/schema.prisma` | `Notification` 增加 `serverId Int?` |
| `server/service/expiry-service.js` | 新建 |
| `server/service/email-service.js` | 新增 `sendExpiryWarning()` |
| `server/src/index.js` | 启动时调用 `expiryService.start()` |

---

## 改动汇总

### 前端文件

| 文件 | 改动类型 |
|------|----------|
| `vite.config.js` | 新增 proxy 配置 |
| `src/api/api-client.js` | JWT 注入 + 401 处理 |
| `src/api/sdk.js` | 逐 slice 扩充方法 |
| `src/App.jsx` | 引入 AuthStore/AuthContext，替换硬编码状态 |
| `src/pages/login/store/index.js` | 填充登录逻辑 |
| `src/pages/home/store/index.js` | 填充服务器申请/操作逻辑 |
| `src/pages/admin/store.js` | 填充审批/用户/分类/主机逻辑 |
| `src/pages/notification/store.js` | 填充通知逻辑 |
| 各页面 components | 接入对应 store |

### 后端文件

| 文件 | 改动类型 |
|------|----------|
| `prisma/schema.prisma` | Server 补 PVE 字段，Notification 补 serverId |
| `server/prisma/schema.prisma` | 同步上述改动 |
| `server/src/routes/user.js` | 新增通知相关接口 |
| `server/src/routes/admin.js` | 新增修改角色、主机实例接口；修改添加用户接口 |
| `server/service/expiry-service.js` | 新建 |
| `server/service/email-service.js` | 新增 sendExpiryWarning |
| `server/src/index.js` | 注册 expiryService |

---

*文档由 brainstorming 流程生成 · 2026-03-12*
