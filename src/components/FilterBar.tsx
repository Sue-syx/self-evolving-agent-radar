import { maturityLabels, Maturity, RadarPage } from "../data/radarData";

export interface FilterState {
  category: string;
  maturity: "all" | Maturity;
  query: string;
}

interface FilterBarProps {
  page: RadarPage;
  filters: FilterState;
  onChange: (filters: FilterState) => void;
}

export function FilterBar({ page, filters, onChange }: FilterBarProps) {
  return (
    <div className="filter-bar">
      <label>
        <span>分类</span>
        <select value={filters.category} onChange={(event) => onChange({ ...filters, category: event.target.value })}>
          <option value="all">全部分类</option>
          {page.categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>阶段</span>
        <select
          value={filters.maturity}
          onChange={(event) => onChange({ ...filters, maturity: event.target.value as FilterState["maturity"] })}
        >
          <option value="all">全部阶段</option>
          <option value="exploring">{maturityLabels.exploring}</option>
          <option value="growing">{maturityLabels.growing}</option>
          <option value="mature">{maturityLabels.mature}</option>
        </select>
      </label>
      <label className="filter-search">
        <span>检索</span>
        <input
          value={filters.query}
          onChange={(event) => onChange({ ...filters, query: event.target.value })}
          placeholder="论文、方法、标签"
        />
      </label>
    </div>
  );
}
