import Link from "next/link";
import { notFound } from "next/navigation";
import { characters, factions } from "@/app/data/characters";

export const metadata = {
  title: "Character Detail · Moe Codex",
};

export default function CharacterDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const character = characters.find((item) => item.id === params.id);

  if (!character) {
    notFound();
  }

  const faction = factions.find((item) => item.id === character.factionId);

  return (
    <div className="page">
      <Link className="back-link" href="/characters">
        ← 返回角色图鉴
      </Link>

      <section className="detail-layout">
        <div
          className="portrait"
          style={{ background: character.palette }}
        >
          <img
            className="portrait-image"
            src={character.image}
            alt={character.name}
          />
          <div className="portrait-overlay">
            <span className="portrait-label">{character.alias}</span>
            <h1>{character.name}</h1>
            <p className="muted">{character.role}</p>
          </div>
        </div>

        <div className="detail-stack">
          <div className="detail-card">
            <h2 className="section-title">角色概览</h2>
            <p>{character.summary}</p>
            <div className="tag-list">
              {character.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            {faction && (
              <div className="faction-chip" style={{ background: faction.color }}>
                {faction.name}
              </div>
            )}
          </div>

          <div className="detail-card">
            <h3>性格标签</h3>
            <div className="detail-list">
              {character.traits.map((trait) => (
                <span key={trait}>{trait}</span>
              ))}
            </div>
          </div>

          <div className="detail-card">
            <h3>核心技能</h3>
            <div className="detail-list">
              {character.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="detail-card">
            <h3>关系网络</h3>
            <div className="detail-list">
              {character.relations.map((relation) => (
                <div key={relation.name} className="relation">
                  <span>{relation.name}</span>
                  <span>{relation.note}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-card">
            <h3>语音片段</h3>
            <p className="quote">“{character.voiceLine}”</p>
          </div>
        </div>
      </section>
    </div>
  );
}
