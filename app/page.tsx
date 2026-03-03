import Link from "next/link";
import { characters, factions } from "@/app/data/characters";

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <h1>梦幻霓虹 · Moe Codex</h1>
          <p>
            Session-first 的角色图鉴与势力档案。即时切换标签、沉浸式角色详情，
            每一次进入都像重启一场霓虹梦。
          </p>
          <div className="hero-actions">
            <Link className="button" href="/characters">
              探索角色
            </Link>
            <Link className="button secondary" href="/factions">
              查看势力
            </Link>
          </div>
        </div>
        <div className="card">
          <h3>实时统计</h3>
          <div className="tag-list">
            <span className="tag">角色 {characters.length}</span>
            <span className="tag">势力 {factions.length}</span>
            <span className="tag">标签 {new Set(characters.flatMap((c) => c.tags)).size}</span>
          </div>
          <p className="muted">
            御姐、萝莉、福瑞与多维人设同时收录，轻松切换过滤。
          </p>
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">Session-First 体验</h2>
        <div className="grid">
          {[
            "沉浸式角色详情：立绘、技能、关系、语音一次性呈现",
            "标签快速过滤：御姐 / 萝莉 / 福瑞 等一键筛选",
            "势力视角探索：每个阵营的氛围与代表角色",
          ].map((item) => (
            <div key={item} className="card">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
