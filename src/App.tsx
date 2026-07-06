import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { FilterBar, FilterState } from "./components/FilterBar";
import { PaperList } from "./components/PaperList";
import { RadarChart } from "./components/RadarChart";
import {
  categoryById,
  itemsByPage,
  maturityLabels,
  maturityNotes,
  PageKey,
  pagesByKey,
  RadarItem,
  RadarPageKey,
  radarItems,
  radarPages,
} from "./data/radarData";

const initialFilters: FilterState = {
  category: "all",
  maturity: "all",
  query: "",
};

const pageTabs: { key: PageKey; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "skill", label: "Skill" },
  { key: "memory", label: "Memory" },
  { key: "workflow", label: "Workflow" },
  { key: "evaluation", label: "Evaluation" },
];

const hashPage = () => {
  const hash = window.location.hash.replace("#", "");
  if (hash.startsWith("paper/")) {
    const item = radarItems.find((entry) => entry.id === hash.slice("paper/".length));
    return item?.page ?? "overview";
  }
  return pageTabs.some((tab) => tab.key === hash) ? (hash as PageKey) : "overview";
};

const hashPaperId = () => {
  const hash = window.location.hash.replace("#", "");
  return hash.startsWith("paper/") ? hash.slice("paper/".length) : undefined;
};

function App() {
  const [activePage, setActivePage] = useState<PageKey>(() => hashPage());
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [detailId, setDetailId] = useState<string | undefined>(() => hashPaperId());

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash.startsWith("paper/")) {
        const id = hash.slice("paper/".length);
        const item = radarItems.find((entry) => entry.id === id);
        setActivePage(item?.page ?? "overview");
        setFilters(initialFilters);
        setDetailId(id);
        return;
      }
      if (pageTabs.some((tab) => tab.key === hash)) {
        setActivePage(hash as PageKey);
        setFilters(initialFilters);
        setDetailId(undefined);
      }
    };
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const setPage = (page: PageKey) => {
    setActivePage(page);
    setFilters(initialFilters);
    setDetailId(undefined);
    window.history.replaceState(null, "", `#${page}`);
  };

  const openPaper = (item: RadarItem) => {
    setActivePage(item.page);
    setDetailId(item.id);
    window.history.replaceState(null, "", `#paper/${item.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const page = activePage === "overview" ? pagesByKey.skill : pagesByKey[activePage];
  const pageItems = activePage === "overview" ? [] : itemsByPage(activePage);
  const detailItem = detailId ? radarItems.find((item) => item.id === detailId) : undefined;

  const filteredItems = useMemo(() => {
    const query = filters.query.trim().toLowerCase();
    return pageItems.filter((item) => {
      const categoryMatch = filters.category === "all" || item.category === filters.category;
      const maturityMatch = filters.maturity === "all" || item.maturity === filters.maturity;
      const queryText = [
        item.title,
        item.shortTitle,
        item.summary,
        item.methodCore,
        item.methodFamily,
        item.venue,
        item.authors,
        ...item.tags,
      ]
        .join(" ")
        .toLowerCase();
      return categoryMatch && maturityMatch && (!query || queryText.includes(query));
    });
  }, [filters, pageItems]);

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">
          <span />
          <div>
            <strong>Self-Evolving Agent Radar</strong>
            <small>Skill · Memory · Workflow · Evaluation</small>
          </div>
        </div>
        <nav aria-label="Page navigation">
          {pageTabs.map((tab) => (
            <button
              key={tab.key}
              className={!detailItem && activePage === tab.key ? "is-active" : ""}
              onClick={() => setPage(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      {detailItem ? (
        <PaperDetail item={detailItem} onBack={() => setPage(detailItem.page)} onOpenPaper={openPaper} />
      ) : activePage === "overview" ? (
        <Overview onOpenPage={(key) => setPage(key)} onSelect={openPaper} />
      ) : (
        <section className="page-layout">
          <div className="page-head">
            <div>
              <p className="eyebrow">{page.eyebrow}</p>
              <h1>{page.title}</h1>
              <p>{page.summary}</p>
            </div>
            <div className="research-question">
              <span>Research Question</span>
              <p>{page.researchQuestion}</p>
            </div>
          </div>

          <div className="radar-grid">
            <section className="panel radar-panel">
              <div className="panel-title">
                <div>
                  <h2>Research Radar</h2>
                  <p>点击圆点查看方法细节、评测设置和局限性。</p>
                </div>
                <div className="count-pill">{filteredItems.length} / {pageItems.length}</div>
              </div>
              <RadarChart page={page} items={filteredItems} onSelect={openPaper} />
              <Legend pageKey={activePage} />
            </section>

            <aside className="panel side-panel">
              <h2>Taxonomy</h2>
              <div className="taxonomy-list">
                {page.categories.map((category) => (
                  <button
                    key={category.id}
                    className={filters.category === category.id ? "is-active" : ""}
                    onClick={() =>
                      setFilters({
                        ...filters,
                        category: filters.category === category.id ? "all" : category.id,
                      })
                    }
                  >
                    <i style={{ background: category.color }} />
                    <strong>{category.name}</strong>
                    <span>{category.note}</span>
                  </button>
                ))}
              </div>
            </aside>
          </div>

          <FilterBar page={page} filters={filters} onChange={setFilters} />
          <PaperList page={page} items={filteredItems} onSelect={openPaper} />
        </section>
      )}
    </main>
  );
}

function Overview({
  onOpenPage,
  onSelect,
}: {
  onOpenPage: (key: RadarPageKey) => void;
  onSelect: (item: RadarItem) => void;
}) {
  const totalItems = radarPages.reduce((count, page) => count + itemsByPage(page.key).length, 0);
  const matureItems = radarPages.reduce(
    (count, page) => count + itemsByPage(page.key).filter((item) => item.maturity === "mature").length,
    0,
  );
  const totalCategories = radarPages.reduce((count, page) => count + page.categories.length, 0);
  const overviewRows = radarPages.map((page) => {
    const items = itemsByPage(page.key);
    const mature = items.filter((item) => item.maturity === "mature").length;
    const growing = items.filter((item) => item.maturity === "growing").length;
    const exploring = items.filter((item) => item.maturity === "exploring").length;
    const top = [...items].sort((a, b) => b.score - a.score).slice(0, 4);
    return { page, items, mature, growing, exploring, top };
  });

  return (
    <section className="overview">
      <header className="overview-lab panel">
        <div>
          <p className="eyebrow">Self-Evolving Agent Research Radar</p>
          <h1>Skill · Memory · Workflow · Evaluation</h1>
          <p>四个方向分开读。雷达点进入单篇论文页；Open 进入完整方向页。</p>
        </div>
        <div className="overview-metrics" aria-label="Coverage summary">
          <Stat value={String(totalItems)} label="entries" />
          <Stat value={String(totalCategories)} label="taxonomy" />
          <Stat value={String(matureItems)} label="mature" />
          <Stat value="4" label="radars" />
        </div>
      </header>

      <div className="overview-radar-wall">
        {overviewRows.map(({ page, items, mature, growing, exploring, top }) => (
          <section key={page.key} className="overview-radar-card panel">
            <div className="overview-card-head">
              <div>
                <span>{page.key}</span>
                <h2>{page.title}</h2>
              </div>
              <button className="open-radar" onClick={() => onOpenPage(page.key)}>
                Open
              </button>
            </div>
            <div className="overview-card-meta">
              <strong>{items.length}</strong>
              <span className="stage-stack">
                <i className="mature" style={{ width: `${Math.max(8, mature * 7)}px` }} />
                <i className="growing" style={{ width: `${Math.max(8, growing * 7)}px` }} />
                <i className="exploring" style={{ width: `${Math.max(8, exploring * 7)}px` }} />
              </span>
            </div>
            <RadarChart page={page} items={items} onSelect={onSelect} />
            <div className="overview-paper-strip">
              {top.map((item) => (
                <button key={item.id} onClick={() => onSelect(item)}>
                  {item.shortTitle}
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat">
      <b>{value}</b>
      <span>{label}</span>
    </div>
  );
}

function PaperDetail({
  item,
  onBack,
  onOpenPaper,
}: {
  item: RadarItem;
  onBack: () => void;
  onOpenPaper: (item: RadarItem) => void;
}) {
  const page = pagesByKey[item.page];
  const category = categoryById(page, item.category);
  const relatedItems = item.related
    .map((id) => radarItems.find((entry) => entry.id === id))
    .filter((entry): entry is RadarItem => Boolean(entry));

  return (
    <article className="paper-detail">
      <div className="paper-detail-top">
        <button className="back-button" onClick={onBack}>
          返回 {page.title}
        </button>
        <span className="detail-page-label">{page.eyebrow}</span>
      </div>

      <header className="paper-hero panel">
        <div>
          <span className="category-chip" style={{ "--chip": category?.color } as CSSProperties}>
            {category?.name}
          </span>
          <h1>{item.title}</h1>
          <p className="paper-byline">
            {item.authors} · {item.venue} · {item.year}
          </p>
          <p className="paper-abstract">{item.summary}</p>
          <div className="paper-tags">
            {item.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <aside className="paper-score-card">
          <b>{item.score.toFixed(2)}</b>
          <span className={`maturity-pill ${item.maturity}`}>{maturityLabels[item.maturity]}</span>
          <p>{maturityNotes[item.maturity]}</p>
        </aside>
      </header>

      <div className="paper-detail-grid">
        <main className="paper-reading">
          <ReadingSection
            label="01"
            title="Introduction"
            text={`这篇工作放在 ${category?.name ?? page.title} 方向下阅读。它讨论的问题是：${item.summary} 对 self-evolving agent 来说，关键在于把一次任务中的经验转化为后续可复用的资产，并让系统能判断何时使用、何时修订。`}
          />
          <ReadingSection
            label="02"
            title="Method"
            text={item.methodCore}
          />
          <ReadingSection
            label="03"
            title="Experiments"
            text={item.evaluation}
          />
          <ReadingSection
            label="04"
            title="Main Findings"
            text={item.mainFinding}
          />
          <ReadingSection
            label="05"
            title="Limitations"
            text={item.limitations}
          />

          <section className="detail-section">
            <div className="section-index">06</div>
            <div>
              <h2>Figure Notes</h2>
              <p>
                这一块用于放论文截图、系统框图和实验表格。当前条目还没有绑定 PDF figure；补充素材后会显示原图、图注和对应段落解读。
              </p>
              <div className="figure-grid">
                <FigureSlot title="Problem Setting" text="建议放 intro 中的问题定义图或任务流程图。" />
                <FigureSlot title="System / Method" text="建议放 method 中的框架图、算法图或模块关系图。" />
                <FigureSlot title="Experiment Table" text="建议放主要结果表、消融表或 benchmark 对比图。" />
              </div>
            </div>
          </section>
        </main>

        <aside className="paper-aside">
          <section className="panel paper-side-block">
            <h2>Score Vector</h2>
            <Score label="清晰度" value={item.scores.clarity} />
            <Score label="实验证据" value={item.scores.evidence} />
            <Score label="可复现性" value={item.scores.reproducibility} />
            <Score label="采用度" value={item.scores.adoption} />
            <Score label="演化相关" value={item.scores.selfEvolution} />
          </section>

          <section className="panel paper-side-block">
            <h2>Reading Position</h2>
            <dl className="detail-facts">
              <div>
                <dt>Direction</dt>
                <dd>{page.title.replace(" Radar", "")}</dd>
              </div>
              <div>
                <dt>Taxonomy</dt>
                <dd>{category?.name}</dd>
              </div>
              <div>
                <dt>Method Family</dt>
                <dd>{item.methodFamily}</dd>
              </div>
              <div>
                <dt>Citation</dt>
                <dd>{item.citation}</dd>
              </div>
            </dl>
          </section>

          <section className="panel paper-side-block">
            <h2>Links</h2>
            <div className="link-row">
              {item.links.length > 0 ? (
                item.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))
              ) : (
                <span>待补论文链接</span>
              )}
            </div>
          </section>

          {relatedItems.length > 0 && (
            <section className="panel paper-side-block">
              <h2>Related Papers</h2>
              <div className="related-list">
                {relatedItems.map((related) => (
                  <button key={related.id} onClick={() => onOpenPaper(related)}>
                    <strong>{related.shortTitle}</strong>
                    <span>{related.title}</span>
                  </button>
                ))}
              </div>
            </section>
          )}
        </aside>
      </div>
    </article>
  );
}

function ReadingSection({ label, title, text }: { label: string; title: string; text: string }) {
  return (
    <section className="detail-section">
      <div className="section-index">{label}</div>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}

function FigureSlot({ title, text }: { title: string; text: string }) {
  return (
    <div className="figure-slot">
      <div />
      <strong>{title}</strong>
      <span>{text}</span>
    </div>
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

function Legend({ pageKey }: { pageKey: RadarPageKey }) {
  const page = pagesByKey[pageKey];
  return (
    <div className="legend-block">
      <div className="legend-row">
        {page.categories.map((category) => (
          <span key={category.id}>
            <i style={{ background: category.color }} />
            {category.name}
          </span>
        ))}
      </div>
      <div className="legend-row maturity-row">
        {(["exploring", "growing", "mature"] as const).map((maturity) => (
          <span key={maturity} className={`maturity-dot ${maturity}`}>
            <i />
            {maturityLabels[maturity]}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
