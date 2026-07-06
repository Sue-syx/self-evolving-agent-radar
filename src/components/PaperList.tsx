import { categoryById, maturityLabels, RadarItem, RadarPage } from "../data/radarData";
import type { CSSProperties } from "react";

interface PaperListProps {
  page: RadarPage;
  items: RadarItem[];
  selectedId?: string;
  onSelect: (item: RadarItem) => void;
}

export function PaperList({ page, items, selectedId, onSelect }: PaperListProps) {
  return (
    <div className="paper-list">
      {items.map((item) => {
        const category = categoryById(page, item.category);
        return (
          <button
            key={item.id}
            className={`paper-card ${selectedId === item.id ? "is-active" : ""}`}
            onClick={() => onSelect(item)}
          >
            <div className="paper-card-top">
              <span style={{ "--chip": category?.color } as CSSProperties}>{category?.name}</span>
              <b>{item.score.toFixed(2)}</b>
            </div>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <div className="paper-meta">
              <span>{item.year}</span>
              <span>{item.methodFamily}</span>
              <span>{maturityLabels[item.maturity]}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
