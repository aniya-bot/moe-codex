"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import RoleImage from "@/app/components/RoleImage";
import { characters, factions, tagOptions } from "@/app/data/characters";

const featuredFilters = ["全部", "御姐", "萝莉", "福瑞"];

export default function CharactersClient() {
  const [active, setActive] = useState("全部");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const tags = useMemo(() => {
    return [
      ...featuredFilters,
      ...tagOptions.filter((tag) => !featuredFilters.includes(tag)),
    ];
  }, []);

  const filtered = useMemo(() => {
    if (active === "全部") return characters;
    return characters.filter((character) => character.tags.includes(active));
  }, [active]);

  return (
    <div className="page">
      <section className="list-header">
        <h1 className="section-title">角色图鉴</h1>
        <p className="muted">
          当前 {filtered.length} 位角色 · 总计 {characters.length} 位
        </p>
        <div className="filters-shell">
          <button
            className="filters-toggle"
            type="button"
            aria-expanded={filtersOpen}
            aria-controls="filters-panel"
            onClick={() => setFiltersOpen((open) => !open)}
          >
            {filtersOpen ? "收起筛选" : "展开筛选"}
          </button>
          <div
            id="filters-panel"
            className={`filters-panel ${filtersOpen ? "open" : ""}`}
          >
            <div className="filters" role="tablist" aria-label="角色过滤">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className={`filter-pill ${active === tag ? "active" : ""}`}
                  onClick={() => {
                    setActive(tag);
                    setFiltersOpen(false);
                  }}
                  type="button"
                  role="tab"
                  aria-selected={active === tag}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="character-grid">
        {filtered.map((character) => {
          const faction = factions.find((item) => item.id === character.factionId);
          return (
            <Link
              key={character.id}
              href={`/characters/${character.id}`}
              className="character-card"
            >
              <div className="character-thumb">
                <RoleImage src={character.image} alt={character.name} />
              </div>
              <div className="character-meta">
                <span>{faction?.name}</span>
                <span>{character.role}</span>
              </div>
              <h3>{character.name}</h3>
              <p className="muted">{character.alias}</p>
              <p>{character.summary}</p>
              <div className="tag-list">
                {character.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
