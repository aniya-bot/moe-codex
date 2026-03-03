# Moe Codex · Project

## Goal
打造一个高动效梦幻霓虹风格的角色图鉴站点，支持势力与角色浏览、快速标签筛选、沉浸式角色详情。

## Stack
- Next.js App Router
- TypeScript
- CSS (globals)

## IA / Pages
- Home：核心信息与统计
- Factions：六大势力卡片 + 代表角色
- Characters：过滤 + 角色网格
- Character Detail：立绘 + 标签 + 技能 + 关系

## Data
- `app/data/characters.ts`：角色与势力数据，包含标签、配色与 `image` 路径
- `public/characters`：角色立绘素材（本地可控）

## Design
- 霓虹渐变背景与光晕动效
- 玻璃质感卡片 + 浮动/发光交互
- 移动端断点 430/390/375 + 筛选折叠抽屉
- `prefers-reduced-motion` 降级动画
