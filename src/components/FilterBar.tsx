import { maturityLabels, Maturity, RadarPage } from "../data/radarData";
import type { ReactNode } from "react";

export type SortKey =
  | "score"
  | "year"
  | "title"
  | "clarity"
  | "evidence"
  | "reproducibility"
  | "adoption"
  | "selfEvolution";

export interface FilterState {
  category: string;
  maturity: "all" | Maturity;
  query: string;
  sort: SortKey;
  view: "grid" | "list";
  minYear: number;
  minSelfEvolution: number;
}

interface ToolbarProps {
  page: RadarPage;
  filters: FilterState;
  counts: { total: number; byCategory: Record<string, number> };
  onChange: (filters: FilterState) => void;
}

const maturityOrder: ("all" | Maturity)[] = ["all", "mature", "growing", "exploring"];

const catGlyphs: Record<string, ReactNode> = {
  all: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.6" />
      <rect x="12" y="3" width="7" height="7" rx="1.6" />
      <rect x="3" y="12" width="7" height="7" rx="1.6" />
      <rect x="12" y="12" width="7" height="7" rx="1.6" />
    </>
  ),
  "skill-generation": <path d="M11 2.5 4 12h6l-1 7.5L18 10h-6l-1-7.5Z" />,
  "skill-retrieval": (
    <>
      <circle cx="9.2" cy="9.2" r="5.4" />
      <path d="M13.4 13.4 18 18" />
    </>
  ),
  "skill-execution": <path d="M6 4.2v13.6L17 11 6 4.2Z" />,
  "skill-evaluation": (
    <>
      <path d="M4 12a7 7 0 0 1 14 0" />
      <path d="M11 12l3.4-3" />
      <circle cx="11" cy="12" r="1" />
      <path d="M4 16.5h14" />
    </>
  ),
  "skill-optimization": (
    <>
      <path d="M4 6.5h9M17 6.5h-1M4 15.5h5M13 15.5h3" />
      <circle cx="15" cy="6.5" r="2" />
      <circle cx="11" cy="15.5" r="2" />
    </>
  ),
  "skill-governance": (
    <>
      <path d="M11 2.6 4 5.2v5.1c0 4.3 3 7.4 7 9 4-1.6 7-4.7 7-9V5.2L11 2.6Z" />
      <path d="M8 11l2 2 4-4.2" />
    </>
  ),
  "memory-write": (
    <>
      <path d="M13.5 3.5 17.5 7.5 8 17H4v-4l9.5-9.5Z" />
      <path d="M12 5l4 4" />
    </>
  ),
  "memory-retrieve": (
    <>
      <circle cx="9.2" cy="9.2" r="5.4" />
      <path d="M13.4 13.4 18 18" />
    </>
  ),
  "memory-reflect": (
    <>
      <path d="M17 6.5a7 7 0 1 0 1.4 5" />
      <path d="M17.5 2.8v3.9h-3.9" />
    </>
  ),
  "memory-skill": (
    <>
      <path d="M8 12a3 3 0 0 1 0-4l2-2a3 3 0 0 1 4 4l-1 1" />
      <path d="M13 9a3 3 0 0 1 0 4l-2 2a3 3 0 0 1-4-4l1-1" />
    </>
  ),
  "memory-eval": (
    <>
      <path d="M4 12a7 7 0 0 1 14 0" />
      <path d="M11 12l3.4-3" />
      <circle cx="11" cy="12" r="1" />
      <path d="M4 16.5h14" />
    </>
  ),
  "workflow-search": (
    <>
      <circle cx="9.2" cy="9.2" r="5.4" />
      <path d="M13.4 13.4 18 18" />
    </>
  ),
  "workflow-rl": (
    <>
      <circle cx="11" cy="11" r="7.5" />
      <circle cx="11" cy="11" r="4" />
      <circle cx="11" cy="11" r="1" />
    </>
  ),
  "workflow-cost": (
    <>
      <circle cx="11" cy="11" r="7.5" />
      <path d="M11 6.5v9M8.7 8.4c.5-.9 4.6-1.4 4.6.8 0 1.9-4.6 1.2-4.6 3.2 0 2.2 4.1 1.7 4.6.8" />
    </>
  ),
  "workflow-graph": (
    <>
      <circle cx="5" cy="6" r="2.2" />
      <circle cx="16" cy="6" r="2.2" />
      <circle cx="10.5" cy="16" r="2.2" />
      <path d="M7 7 9 14.4M14.5 7.6 12 14.4M7 6h7" />
    </>
  ),
  "workflow-fsm": (
    <>
      <circle cx="5" cy="11" r="2.4" />
      <circle cx="16.5" cy="11" r="2.4" />
      <path d="M7.4 11h6.7" />
      <path d="M12 8.7 14.1 11 12 13.3" />
    </>
  ),
  "workflow-benchmark": (
    <>
      <path d="M4 12a7 7 0 0 1 14 0" />
      <path d="M11 12l3.4-3" />
      <circle cx="11" cy="12" r="1" />
      <path d="M4 16.5h14" />
    </>
  ),
  "eval-task": (
    <>
      <rect x="4" y="3.5" width="14" height="15" rx="2" />
      <path d="M7.5 8l1.4 1.4 2.6-2.6M7.5 14l1.4 1.4 2.6-2.6M13.5 8h2.5M13.5 14h2.5" />
    </>
  ),
  "eval-process": (
    <>
      <circle cx="5" cy="6" r="1.8" />
      <circle cx="5" cy="15" r="1.8" />
      <path d="M8 6h9M8 15h6" />
    </>
  ),
  "eval-trajectory": (
    <>
      <circle cx="5" cy="16" r="1.8" />
      <circle cx="16" cy="6" r="1.8" />
      <path d="M6.2 14.6C9 11 8 9 11 8.5c2-.3 2.6-1.4 3.2-2.2" strokeDasharray="0.1 3" />
    </>
  ),
  "eval-judge": (
    <>
      <path d="M11 3v15M6 18h10" />
      <path d="M5 7h12" />
      <path d="M5 7 3 12h4L5 7ZM17 7l-2 5h4l-2-5Z" />
    </>
  ),
  "eval-long": (
    <>
      <path d="M3.5 15 8 9.5l3.2 3L17 6" />
      <path d="M17 6h-3M17 6v3" />
      <path d="M3.5 18.5h14" />
    </>
  ),
};

function CatIcon({ id }: { id: string }) {
  return (
    <svg
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {catGlyphs[id] ?? catGlyphs.all}
    </svg>
  );
}

export function FilterBar({ page, filters, counts, onChange }: ToolbarProps) {
  const resetAdvanced = () => onChange({ ...filters, minYear: 0, minSelfEvolution: 0 });

  return (
    <>
      {/* colored category tabs with counts */}
      <div className="cat-tabs">
        <button
          className={`cat-tab all ${filters.category === "all" ? "is-active" : ""}`}
          onClick={() => onChange({ ...filters, category: "all" })}
        >
          <span className="cat-ico">
            <CatIcon id="all" />
          </span>
          全部
          <b>{counts.total}</b>
        </button>
        {page.categories.map((category) => (
          <button
            key={category.id}
            className={`cat-tab ${filters.category === category.id ? "is-active" : ""}`}
            style={{ ["--dot" as string]: category.color }}
            onClick={() =>
              onChange({ ...filters, category: filters.category === category.id ? "all" : category.id })
            }
          >
            <span className="cat-ico">
              <CatIcon id={category.id} />
            </span>
            {category.name}
            <b>{counts.byCategory[category.id] ?? 0}</b>
          </button>
        ))}
      </div>

      {/* toolbar row */}
      <div className="toolbar">
        <div className="mat-tabs">
          {maturityOrder.map((m) => (
            <button
              key={m}
              className={`mat-tab ${m} ${filters.maturity === m ? "is-active" : ""}`}
              onClick={() => onChange({ ...filters, maturity: m })}
            >
              <i />
              {m === "all" ? "全部阶段" : maturityLabels[m]}
            </button>
          ))}
        </div>

        <div className="toolbar-spacer" />

        <div className="search-box">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.5" y2="16.5" />
          </svg>
          <input
            value={filters.query}
            onChange={(e) => onChange({ ...filters, query: e.target.value })}
            placeholder="搜索论文、方法、标签"
          />
        </div>

        <div className="view-toggle" role="group" aria-label="视图切换">
          <button
            className={filters.view === "grid" ? "is-active" : ""}
            onClick={() => onChange({ ...filters, view: "grid" })}
            aria-label="网格视图"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="8" height="8" rx="1.5" />
              <rect x="13" y="3" width="8" height="8" rx="1.5" />
              <rect x="3" y="13" width="8" height="8" rx="1.5" />
              <rect x="13" y="13" width="8" height="8" rx="1.5" />
            </svg>
          </button>
          <button
            className={filters.view === "list" ? "is-active" : ""}
            onClick={() => onChange({ ...filters, view: "list" })}
            aria-label="列表视图"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="4" width="18" height="3" rx="1.5" />
              <rect x="3" y="10.5" width="18" height="3" rx="1.5" />
              <rect x="3" y="17" width="18" height="3" rx="1.5" />
            </svg>
          </button>
        </div>

        <div className="sort-select">
          <span>排序</span>
          <select
            value={filters.sort}
            onChange={(e) => onChange({ ...filters, sort: e.target.value as SortKey })}
          >
            <option value="score">综合评分</option>
            <option value="year">发表年份</option>
            <option value="selfEvolution">演化相关</option>
            <option value="evidence">实验证据</option>
            <option value="reproducibility">可复现性</option>
            <option value="adoption">采用度</option>
            <option value="clarity">清晰度</option>
            <option value="title">名称</option>
          </select>
        </div>
      </div>

      <div className="advanced-filters" aria-label="高级筛选">
        <label>
          <span>年份下限</span>
          <div className="range-control">
            <input
              type="range"
              min="0"
              max="2026"
              step="1"
              value={filters.minYear}
              onChange={(e) => onChange({ ...filters, minYear: Number(e.target.value) })}
            />
            <b>{filters.minYear === 0 ? "不限" : filters.minYear}</b>
          </div>
        </label>
        <label>
          <span>演化相关性</span>
          <div className="range-control">
            <input
              type="range"
              min="0"
              max="0.9"
              step="0.05"
              value={filters.minSelfEvolution}
              onChange={(e) => onChange({ ...filters, minSelfEvolution: Number(e.target.value) })}
            />
            <b>{filters.minSelfEvolution === 0 ? "不限" : filters.minSelfEvolution.toFixed(2)}</b>
          </div>
        </label>
        <button
          type="button"
          className="reset-filters"
          onClick={resetAdvanced}
          disabled={filters.minYear === 0 && filters.minSelfEvolution === 0}
        >
          重置
        </button>
      </div>
    </>
  );
}
