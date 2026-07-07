import { useEffect } from "react";
import type { CSSProperties, ReactNode } from "react";
import { categoryById, maturityLabels, maturityNotes, RadarItem, RadarPage } from "../data/radarData";

interface ResearchDrawerProps {
  page: RadarPage;
  item?: RadarItem;
  onClose: () => void;
}

export function ResearchDrawer({ page, item, onClose }: ResearchDrawerProps) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const category = item ? categoryById(page, item.category) : undefined;

  return (
    <>
      <button
        className={`drawer-scrim ${item ? "is-open" : ""}`}
        aria-label="关闭详情"
        onClick={onClose}
        tabIndex={item ? 0 : -1}
      />
      <aside className={`research-drawer ${item ? "is-open" : ""}`} aria-hidden={!item}>
        {item && (
          <>
            <div className="drawer-head">
              <div>
                <div className="drawer-score">
                  <b>{item.score.toFixed(2)}</b>
                  <span className={`maturity-pill ${item.maturity}`}>{maturityLabels[item.maturity]}</span>
                </div>
                <p>{maturityNotes[item.maturity]}</p>
              </div>
              <button className="icon-button" onClick={onClose} aria-label="关闭">
                X
              </button>
            </div>

            <div className="drawer-title-block">
              <span className="category-chip" style={{ "--chip": category?.color } as CSSProperties}>
                {category?.name}
              </span>
              <h2>{item.title}</h2>
              <p>{item.authors} · {item.venue} · {item.year}</p>
            </div>

            <DrawerSection title="一句话贡献">{item.summary}</DrawerSection>
            <DrawerSection title="方法核心">{item.methodCore}</DrawerSection>
            <DrawerSection title="评测设置">{item.evaluation}</DrawerSection>
            <DrawerSection title="主要结论">{item.mainFinding}</DrawerSection>
            <DrawerSection title="局限性">{item.limitations}</DrawerSection>

            <section className="drawer-section">
              <h3>评分维度</h3>
              <div className="score-grid">
                <Score label="清晰度" value={item.scores.clarity} />
                <Score label="实验证据" value={item.scores.evidence} />
                <Score label="可复现性" value={item.scores.reproducibility} />
                <Score label="采用度" value={item.scores.adoption} />
                <Score label="演化相关" value={item.scores.selfEvolution} />
              </div>
            </section>

            <section className="drawer-section">
              <h3>相关线索</h3>
              <div className="tag-row">
                {item.related.map((related) => (
                  <span key={related}>{related}</span>
                ))}
              </div>
            </section>

            <section className="drawer-section">
              <h3>引用</h3>
              <p className="citation">{item.citation}</p>
              <div className="link-row">
                {item.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </section>
          </>
        )}
      </aside>
    </>
  );
}

function DrawerSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="drawer-section">
      <h3>{title}</h3>
      <p>{children}</p>
    </section>
  );
}

function Score({ label, value }: { label: string; value: number }) {
  return (
    <div className="score-row">
      <span>{label}</span>
      <i>
        <b style={{ width: `${value * 100}%` }} />
      </i>
      <em>{value.toFixed(2)}</em>
    </div>
  );
}
