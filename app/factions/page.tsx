import Link from "next/link";
import { characters, factions } from "@/app/data/characters";

export const metadata = {
  title: "Factions · Moe Codex",
};

export default function FactionsPage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <h1>势力档案</h1>
          <p>
            六大势力共同塑造霓虹梦境。切换视角，找出与你共振的阵营。
          </p>
          <div className="hero-actions">
            <Link className="button" href="/characters">
              查看角色
            </Link>
          </div>
        </div>
        <div className="card">
          <h3>势力统计</h3>
          <div className="tag-list">
            <span className="tag">势力 {factions.length}</span>
            <span className="tag">角色 {characters.length}</span>
          </div>
          <p className="muted">每个势力都拥有独特标签与代表角色。</p>
        </div>
      </section>

      <section className="grid">
        {factions.map((faction) => {
          const members = characters.filter((c) => c.factionId === faction.id);
          return (
            <article key={faction.id} className="card">
              <div
                className="faction-banner"
                style={{ background: faction.color }}
              >
                {faction.name}
              </div>
              <p className="muted">{faction.motto}</p>
              <div className="detail-list">
                <span>氛围：{faction.vibe}</span>
                <span>据点：{faction.base}</span>
                <span>成员：{members.length} 位</span>
              </div>
              <div className="stat-row">
                {faction.spotlight.map((tag) => (
                  <span key={tag} className="stat-pill">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="detail-list">
                {members.slice(0, 5).map((member) => (
                  <span key={member.id}>{member.name}</span>
                ))}
                {members.length > 5 && <span>…等</span>}
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
