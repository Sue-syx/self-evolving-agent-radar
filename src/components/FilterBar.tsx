import { maturityLabels, Maturity, RadarPage } from "../data/radarData";

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
          <i />
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
            <i />
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
