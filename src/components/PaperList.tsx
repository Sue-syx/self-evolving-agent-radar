import { categoryById, maturityLabels, RadarItem, RadarPage } from "../data/radarData";
import type { CSSProperties } from "react";

interface PaperListProps {
  page: RadarPage;
  items: RadarItem[];
  selectedId?: string;
  view: "grid" | "list";
  onHover?: (id: string | undefined) => void;
  onSelect: (item: RadarItem) => void;
}

const miniDims: { key: keyof RadarItem["scores"]; label: string }[] = [
  { key: "clarity", label: "清晰" },
  { key: "evidence", label: "证据" },
  { key: "reproducibility", label: "复现" },
  { key: "selfEvolution", label: "演化" },
];

function resolveAsset(src: string): string {
  if (/^(https?:)?\/\//.test(src) || src.startsWith("data:")) return src;
  const base = import.meta.env.BASE_URL || "/";
  return base.replace(/\/$/, "") + "/" + src.replace(/^\//, "");
}

export function PaperList({ page, items, selectedId, view, onHover, onSelect }: PaperListProps) {
  if (items.length === 0) {
    return <div className="empty-state">没有符合当前筛选条件的条目，试试放宽分类或成熟度。</div>;
  }

  return (
    <div className={`paper-list ${view === "list" ? "is-list" : ""}`}>
      {items.map((item) => {
        const category = categoryById(page, item.category);
        const isList = view === "list";
        const leadFigure = item.figures?.[0];
        return (
          <button
            key={item.id}
            className={`paper-card ${isList ? "is-list-item" : ""} ${leadFigure ? "has-figure" : ""} ${
              selectedId === item.id ? "is-active" : ""
            }`}
            onClick={() => onSelect(item)}
            onMouseEnter={() => onHover?.(item.id)}
            onMouseLeave={() => onHover?.(undefined)}
            onFocus={() => onHover?.(item.id)}
            onBlur={() => onHover?.(undefined)}
            style={{ "--chip": category?.color } as CSSProperties}
          >
            {leadFigure && (
              <div className="paper-thumb" aria-hidden>
                <img src={resolveAsset(leadFigure.src)} alt="" loading="lazy" />
              </div>
            )}
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
                      style={{ width: `${item.scores[dim.key] * 100}%` }}
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
