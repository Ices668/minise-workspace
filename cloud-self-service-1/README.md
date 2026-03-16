# cloud-self-service

前后端一体的云服务器自助申请系统，技术栈为 React + Vite + Fastify + Prisma + MySQL。

## 常用命令

```bash
npm run dev
npm run server
npm run build
npm run lint
```

## Smoke Data

用于本地联调的 smoke 夹具通过统一脚本维护：

```bash
npm run smoke-data -- seed
npm run smoke-data -- clean
npm run smoke-data -- reset
```

默认会维护以下测试数据：

- 用户：`smoke-admin@example.com`、`smoke-user@example.com`
- 分类：`Smoke Public Data`、`Smoke Confidential Data`
- 默认密码：`SmokeTest123!`

`seed` 只确保 smoke 用户和分类存在并更新到预期值，`clean` 会删除它们相关的通知、申请、实例和分类，`reset` 会先清理再重建。
