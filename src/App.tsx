import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { FilterBar, FilterState } from "./components/FilterBar";
import { PaperList } from "./components/PaperList";
import { RadarChart } from "./components/RadarChart";
import { Insights } from "./components/Insights";
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
  sort: "score",
  view: "grid",
};

type NavKey = PageKey | "insights";

const pageTabs: { key: NavKey; label: string }[] = [
  { key: "overview", label: "技术图谱" },
  { key: "skill", label: "Skill" },
  { key: "memory", label: "Memory" },
  { key: "workflow", label: "Workflow" },
  { key: "evaluation", label: "Evaluation" },
  { key: "insights", label: "演进洞察" },
];

const isPaperHash = (hash: string) => hash.startsWith("paper/");

const hashPage = (): NavKey => {
  const hash = window.location.hash.replace("#", "");
  if (isPaperHash(hash)) {
    const item = radarItems.find((entry) => entry.id === hash.slice("paper/".length));
    return item?.page ?? "overview";
  }
  if (hash === "insights") return "insights";
  return pageTabs.some((tab) => tab.key === hash) ? (hash as NavKey) : "overview";
};

const hashPaperId = () => {
  const hash = window.location.hash.replace("#", "");
  return isPaperHash(hash) ? hash.slice("paper/".length) : undefined;
};

const weights = [
  { pct: "30%", name: "技术成熟度", note: "从概念验证到大规模应用的演进程度", color: "#38e0ff" },
  { pct: "25%", name: "创新性", note: "技术的原创性与前沿程度", color: "#a78bfa" },
  { pct: "25%", name: "落地程度", note: "在实际产品 / 项目中的应用广度", color: "#2fd2c0" },
  { pct: "20%", name: "生态活跃度", note: "社区贡献者数量与更新频率", color: "#f5b53d" },
];

function App() {
  const [activePage, setActivePage] = useState<NavKey>(() => hashPage());
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [detailId, setDetailId] = useState<string | undefined>(() => hashPaperId());

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (isPaperHash(hash)) {
        const id = hash.slice("paper/".length);
        const item = radarItems.find((entry) => entry.id === id);
        setActivePage(item?.page ?? "overview");
        setFilters(initialFilters);
        setDetailId(id);
        return;
      }
      if (hash === "insights") {
        setActivePage("insights");
        setDetailId(undefined);
        return;
      }
      if (pageTabs.some((tab) => tab.key === hash)) {
        setActivePage(hash as NavKey);
        setFilters(initialFilters);
        setDetailId(undefined);
      }
    };
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const setPage = (page: NavKey) => {
    setActivePage(page);
    setFilters(initialFilters);
    setDetailId(undefined);
    window.history.replaceState(null, "", `#${page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openPaper = (item: RadarItem) => {
    setActivePage(item.page);
    setDetailId(item.id);
    window.history.replaceState(null, "", `#paper/${item.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isRadarPage = activePage !== "overview" && activePage !== "insights";
  const page = isRadarPage ? pagesByKey[activePage as RadarPageKey] : pagesByKey.skill;
  const pageItems = isRadarPage ? itemsByPage(activePage as RadarPageKey) : [];
  const detailItem = detailId ? radarItems.find((item) => item.id === detailId) : undefined;

  const categoryCounts = useMemo(() => {
    const byCategory: Record<string, number> = {};
    pageItems.forEach((it) => {
      byCategory[it.category] = (byCategory[it.category] ?? 0) + 1;
    });
    return { total: pageItems.length, byCategory };
  }, [pageItems]);

  const filteredItems = useMemo(() => {
    const query = filters.query.trim().toLowerCase();
    const list = pageItems.filter((item) => {
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
    const sorted = [...list];
    if (filters.sort === "score") sorted.sort((a, b) => b.score - a.score);
    else if (filters.sort === "year") sorted.sort((a, b) => b.year - a.year);
    else sorted.sort((a, b) => a.title.localeCompare(b.title));
    return sorted;
  }, [filters, pageItems]);

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" />
          <div>
            <strong>
              SEA<b>Radar</b>
            </strong>
            <small>Skill · Memory · Workflow · Evaluation</small>
          </div>
        </div>
        <nav aria-label="Page navigation">
          {pageTabs.map((tab) => (
            <button
              key={tab.key}
              className={!detailItem && activePage === tab.key ? "is-active" : ""}
              onClick={() => setPage(tab.key as NavKey)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="topbar-right">
          <a className="ghost-link" href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </header>

      {detailItem ? (
        <PaperDetail item={detailItem} onBack={() => setPage(detailItem.page)} onOpenPaper={openPaper} />
      ) : activePage === "insights" ? (
        <Insights onOpenPage={(key) => setPage(key)} />
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
                  <p>越靠外 = 越成熟；点击圆点查看方法细节、评测设置与局限。</p>
                </div>
                <div className="count-pill">
                  {filteredItems.length} / {pageItems.length}
                </div>
              </div>
              <RadarChart page={page} items={filteredItems} onSelect={openPaper} />
              <Legend pageKey={activePage as RadarPageKey} />
            </section>

            <aside className="panel side-panel">
              <h2>Taxonomy</h2>
              <div className="taxonomy-list">
                {page.categories.map((category) => (
                  <button
                    key={category.id}
                    className={filters.category === category.id ? "is-active" : ""}
                    style={{ ["--tx" as string]: category.color }}
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

          <FilterBar page={page} filters={filters} counts={categoryCounts} onChange={setFilters} />
          <PaperList page={page} items={filteredItems} view={filters.view} onSelect={openPaper} />
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
  const growingItems = radarPages.reduce(
    (count, page) => count + itemsByPage(page.key).filter((item) => item.maturity === "growing").length,
    0,
  );
  const exploringItems = totalItems - matureItems - growingItems;

  const overviewRows = radarPages.map((page) => {
    const items = itemsByPage(page.key);
    const mature = items.filter((item) => item.maturity === "mature").length;
    const growing = items.filter((item) => item.maturity === "growing").length;
    const exploring = items.filter((item) => item.maturity === "exploring").length;
    const top = [...items].sort((a, b) => b.score - a.score).slice(0, 4);
    return { page, items, mature, growing, exploring, top };
  });

  const metrics = [
    { value: totalItems, label: "收录条目", color: "#2fd2c0" },
    { value: matureItems, label: "成熟期", color: "#34d399" },
    { value: growingItems, label: "成长期", color: "#f5b53d" },
    { value: exploringItems, label: "探索期", color: "#f2645a" },
  ];

  return (
    <section className="overview">
      <header className="hero">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">实时追踪 · 结构化演化地图</p>
            <h1>
              Self-Evolving
              <br />
              <span className="accent">Agent Radar</span>
            </h1>
            <p className="hero-lead">
              追踪自进化 Agent 的四大能力方向——Skill、Memory、Workflow、Evaluation，
              让每一项技术的成熟度、创新性与落地程度有迹可循。
            </p>
            <div className="hero-chips">
              <span>Skill 生成 · 召回 · 执行</span>
              <span>长期记忆与一致性</span>
              <span>流程自搜索</span>
              <span>演化可度量</span>
            </div>
          </div>
          <div className="hero-metrics">
            {metrics.map((m) => (
              <div className="metric" key={m.label} style={{ ["--accent" as string]: m.color }}>
                <b>{m.value}</b>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="section-head">
        <h2>技术雷达全景图</h2>
        <p>四个方向分别成图，越靠外越成熟；点击雷达点进入单篇论文页，Open 进入完整方向页。</p>
      </div>

      <div className="overview-radar-wall">
        {overviewRows.map(({ page, items, mature, growing, exploring, top }) => (
          <section key={page.key} className="overview-radar-card panel">
            <div className="overview-card-head">
              <div>
                <span>{page.key}</span>
                <h2>{page.title}</h2>
              </div>
              <button className="open-radar" onClick={() => onOpenPage(page.key)}>
                Open →
              </button>
            </div>
            <div className="overview-card-meta">
              <strong>{items.length}</strong>
              <span className="stage-stack">
                <i className="mature" style={{ width: `${Math.max(8, mature * 6)}px` }} />
                <i className="growing" style={{ width: `${Math.max(8, growing * 6)}px` }} />
                <i className="exploring" style={{ width: `${Math.max(8, exploring * 6)}px` }} />
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

      <div className="section-head">
        <h2>评分维度说明</h2>
        <p>综合评分由四个维度加权计算，用于横向对比不同技术的整体成熟度。</p>
      </div>
      <div className="weight-grid">
        {weights.map((w) => (
          <div className="weight-card" key={w.name}>
            <div className="weight-pct" style={{ ["--wc" as string]: w.color }}>
              {w.pct}
            </div>
            <h3>{w.name}</h3>
            <p>{w.note}</p>
          </div>
        ))}
      </div>
    </section>
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
          ← 返回 {page.title}
        </button>
        <span className="detail-page-label">{page.eyebrow}</span>
      </div>

      <header className="paper-hero panel">
        <div>
          <span className="chip" style={{ "--chip": category?.color } as CSSProperties}>
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
          <span className={`maturity-pill ${item.maturity}`}>
            <i />
            {maturityLabels[item.maturity]}
          </span>
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
          <ReadingSection label="02" title="Method" text={item.methodCore} />
          <ReadingSection label="03" title="Experiments" text={item.evaluation} />
          <ReadingSection label="04" title="Main Findings" text={item.mainFinding} />
          <ReadingSection label="05" title="Limitations" text={item.limitations} />

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
            <div className="score-grid">
              <Score label="清晰度" value={item.scores.clarity} />
              <Score label="实验证据" value={item.scores.evidence} />
              <Score label="可复现性" value={item.scores.reproducibility} />
              <Score label="采用度" value={item.scores.adoption} />
              <Score label="演化相关" value={item.scores.selfEvolution} />
            </div>
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
                <dd className="citation">{item.citation}</dd>
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
      <div className="fs-canvas" />
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
