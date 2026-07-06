import { categoryById, maturityLabels, RadarItem, RadarPage } from "../data/radarData";
import type { CSSProperties } from "react";

interface PaperListProps {
  page: RadarPage;
  items: RadarItem[];
  selectedId?: string;
  view: "grid" | "list";
  onSelect: (item: RadarItem) => void;
}

const miniDims: { key: keyof RadarItem["scores"]; label: string; color: string }[] = [
  { key: "clarity", label: "清晰", color: "#38e0ff" },
  { key: "evidence", label: "证据", color: "#a78bfa" },
  { key: "reproducibility", label: "复现", color: "#2fd2c0" },
  { key: "selfEvolution", label: "演化", color: "#f5b53d" },
];

export function PaperList({ page, items, selectedId, view, onSelect }: PaperListProps) {
  if (items.length === 0) {
    return <div className="empty-state">没有符合当前筛选条件的条目，试试放宽分类或成熟度。</div>;
  }

  return (
    <div className={`paper-list ${view === "list" ? "is-list" : ""}`}>
      {items.map((item) => {
        const category = categoryById(page, item.category);
        const isList = view === "list";
        return (
          <button
            key={item.id}
            className={`paper-card ${isList ? "is-list-item" : ""} ${selectedId === item.id ? "is-active" : ""}`}
            onClick={() => onSelect(item)}
            style={{ "--chip": category?.color } as CSSProperties}
          >
            <div style={{ minWidth: 0 }}>
              <div className="paper-card-top">
                <span className="chip" style={{ "--chip": category?.color } as CSSProperties}>
                  {category?.name}
                </span>
                <b>{item.score.toFixed(2)}</b>
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              {!isList && (
                <div className="paper-meta">
                  <span className={`status-pill ${item.maturity}`}>
                    <i />
                    {maturityLabels[item.maturity]}
                  </span>
                  <span>{item.year}</span>
                  <span>{item.methodFamily}</span>
                </div>
              )}
            </div>

            <div className="mini-scores">
              {miniDims.map((dim) => (
                <div key={dim.key}>
                  <div className="ms-track">
                    <span
                      className="ms-fill"
                      style={{ width: `${item.scores[dim.key] * 100}%`, background: dim.color }}
                    />
                  </div>
                  <em>{dim.label}</em>
                </div>
              ))}
            </div>
          </button>
        );
      })}
    </div>
  );
}
