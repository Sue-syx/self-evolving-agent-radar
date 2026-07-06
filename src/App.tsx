import { useEffect, useMemo, useState } from "react";
import { FilterBar, FilterState } from "./components/FilterBar";
import { PaperList } from "./components/PaperList";
import { RadarChart } from "./components/RadarChart";
import { ResearchDrawer } from "./components/ResearchDrawer";
import {
  categoryById,
  itemsByPage,
  maturityLabels,
  PageKey,
  pagesByKey,
  RadarItem,
  RadarPageKey,
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

function App() {
  const [activePage, setActivePage] = useState<PageKey>(() => {
    const hash = window.location.hash.replace("#", "");
    return pageTabs.some((tab) => tab.key === hash) ? (hash as PageKey) : "overview";
  });
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [selected, setSelected] = useState<RadarItem | undefined>();

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (pageTabs.some((tab) => tab.key === hash)) {
        setActivePage(hash as PageKey);
        setFilters(initialFilters);
        setSelected(undefined);
      }
    };
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const setPage = (page: PageKey) => {
    setActivePage(page);
    setFilters(initialFilters);
    setSelected(undefined);
    window.history.replaceState(null, "", `#${page}`);
  };

  const page = activePage === "overview" ? pagesByKey.skill : pagesByKey[activePage];
  const pageItems = activePage === "overview" ? [] : itemsByPage(activePage);

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

  const selectedPage = selected ? pagesByKey[selected.page] : page;

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
            <button key={tab.key} className={activePage === tab.key ? "is-active" : ""} onClick={() => setPage(tab.key)}>
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      {activePage === "overview" ? (
        <Overview onOpenPage={(key) => setPage(key)} />
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
              <RadarChart page={page} items={filteredItems} selectedId={selected?.id} onSelect={setSelected} />
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
          <PaperList page={page} items={filteredItems} selectedId={selected?.id} onSelect={setSelected} />
        </section>
      )}

      <ResearchDrawer page={selectedPage} item={selected} onClose={() => setSelected(undefined)} />
    </main>
  );
}

function Overview({ onOpenPage }: { onOpenPage: (key: RadarPageKey) => void }) {
  const totalItems = radarPages.reduce((count, page) => count + itemsByPage(page.key).length, 0);
  const matureItems = radarPages.reduce(
    (count, page) => count + itemsByPage(page.key).filter((item) => item.maturity === "mature").length,
    0,
  );

  return (
    <section className="overview">
      <div className="overview-hero">
        <p className="eyebrow">Self-Evolving Agent Research Map</p>
        <h1>四个方向，四张独立雷达</h1>
        <p>
          这个站点把 self-evolving agent 的研究拆成 Skill、Memory、Workflow、Evaluation 四个阅读入口。
          每个入口保留独立分类、论文列表、成熟度圈层和详情抽屉。
        </p>
        <div className="hero-stats">
          <Stat value={String(totalItems)} label="seed entries" />
          <Stat value={String(radarPages.length)} label="research pages" />
          <Stat value={String(matureItems)} label="mature items" />
        </div>
      </div>

      <div className="direction-grid">
        {radarPages.map((page) => {
          const items = itemsByPage(page.key);
          const top = [...items].sort((a, b) => b.score - a.score).slice(0, 3);
          return (
            <button key={page.key} className="direction-card" onClick={() => onOpenPage(page.key)}>
              <div className="direction-card-head">
                <span>{page.key}</span>
                <b>{items.length}</b>
              </div>
              <h2>{page.title}</h2>
              <p>{page.summary}</p>
              <div className="mini-bars">
                {page.categories.map((category) => {
                  const count = items.filter((item) => item.category === category.id).length;
                  return <i key={category.id} style={{ background: category.color, height: `${18 + count * 9}px` }} />;
                })}
              </div>
              <div className="top-items">
                {top.map((item) => (
                  <span key={item.id}>{item.shortTitle}</span>
                ))}
              </div>
            </button>
          );
        })}
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
