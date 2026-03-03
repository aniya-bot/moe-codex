# Moe Codex

高动效梦幻霓虹风格的角色图鉴与势力档案站点，主打 Session-first 的沉浸体验。

## Features

- Home / Factions / Characters / Character Detail 完整路由
- 36+ 角色数据，覆盖御姐 / 萝莉 / 福瑞筛选
- 36+ 本地角色立绘（`public/characters`）
- 高动效霓虹氛围 + `prefers-reduced-motion` 降级
- 响应式布局，适配移动端（含 430/390/375 断点与折叠筛选）

## Routes

- `/` Home
- `/factions` 势力档案
- `/characters` 角色图鉴（含标签过滤）
- `/characters/[id]` 角色详情

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy (Vercel)

```bash
vercel --prod
```

> 首次部署请先 `vercel login`，并按提示选择项目。
