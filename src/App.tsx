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
  ScoreVector,
  radarItems,
  radarPages,
} from "./data/radarData";

const initialFilters: FilterState = {
  category: "all",
  maturity: "all",
  query: "",
  sort: "score",
  view: "grid",
  minYear: 0,
  minSelfEvolution: 0,
};

type NavKey = PageKey | "insights";
type ScoreSortKey = keyof ScoreVector;

const scoreSortKeys: ScoreSortKey[] = [
  "clarity",
  "evidence",
  "reproducibility",
  "adoption",
  "selfEvolution",
];

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
  const [spotlightId, setSpotlightId] = useState<string | undefined>();

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
    setSpotlightId(undefined);
    window.history.replaceState(null, "", `#${page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openPaper = (item: RadarItem) => {
    setActivePage(item.page);
    setDetailId(item.id);
    setSpotlightId(item.id);
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
      const yearMatch = filters.minYear === 0 || item.year >= filters.minYear;
      const evolutionMatch = item.scores.selfEvolution >= filters.minSelfEvolution;
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
      return categoryMatch && maturityMatch && yearMatch && evolutionMatch && (!query || queryText.includes(query));
    });
    const sorted = [...list];
    if (filters.sort === "score") sorted.sort((a, b) => b.score - a.score);
    else if (filters.sort === "year") sorted.sort((a, b) => b.year - a.year);
    else if (scoreSortKeys.includes(filters.sort as ScoreSortKey)) {
      const sortKey = filters.sort as ScoreSortKey;
      sorted.sort((a, b) => b.scores[sortKey] - a.scores[sortKey]);
    } else sorted.sort((a, b) => a.title.localeCompare(b.title));
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
              <RadarChart
                page={page}
                items={filteredItems}
                selectedId={spotlightId}
                activeCategory={filters.category === "all" ? undefined : filters.category}
                onHover={setSpotlightId}
                onSelect={openPaper}
              />
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
          <PaperList
            page={page}
            items={filteredItems}
            selectedId={spotlightId}
            view={filters.view}
            onHover={setSpotlightId}
            onSelect={openPaper}
          />
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
  const researchQueues = [
    {
      label: "Top Mature",
      note: "优先引用或作为基线阅读",
      items: [...radarItems].filter((item) => item.maturity === "mature").sort((a, b) => b.score - a.score).slice(0, 5),
    },
    {
      label: "Fast Growing",
      note: "最值得跟踪后续工作的方向",
      items: [...radarItems]
        .filter((item) => item.maturity === "growing")
        .sort((a, b) => b.scores.selfEvolution - a.scores.selfEvolution)
        .slice(0, 5),
    },
    {
      label: "Emerging",
      note: "概念新但证据还在积累",
      items: [...radarItems]
        .filter((item) => item.maturity === "exploring")
        .sort((a, b) => b.scores.selfEvolution - a.scores.selfEvolution)
        .slice(0, 5),
    },
  ];

  return (
    <section className="overview">
      <header className="hero">
        <div className="hero-grid">
          <div>
            <p className="hero-tag">
              <i />
              实时追踪 · 结构化演化地图
            </p>
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

      <div className="research-queue-grid">
        {researchQueues.map((queue) => (
          <section className="research-queue panel" key={queue.label}>
            <div className="queue-head">
              <h3>{queue.label}</h3>
              <span>{queue.note}</span>
            </div>
            <div className="queue-list">
              {queue.items.map((item) => (
                <button key={item.id} onClick={() => onSelect(item)}>
                  <span>{item.page}</span>
                  <strong>{item.shortTitle}</strong>
                  <b>{item.score.toFixed(2)}</b>
                </button>
              ))}
            </div>
          </section>
        ))}
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
            <RadarChart page={page} items={items} compact onSelect={onSelect} />
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


function resolveAsset(src: string): string {
  if (/^(https?:)?\/\//.test(src) || src.startsWith("data:")) return src;
  const base = import.meta.env.BASE_URL || "/";
  return base.replace(/\/$/, "") + "/" + src.replace(/^\//, "");
}

function splitClauses(text: string): string[] {
  return (text || "")
    .split(/(?<=[。；;！!])/)
    .map((part) => part.trim())
    .filter((part) => part.length > 1);
}

const RICH = /([A-Za-z][A-Za-z0-9+\-./]{1,}(?:\s[A-Z0-9][A-Za-z0-9+\-./]*)*|\d+(?:\.\d+)?\s?[%×xKkMB]?(?:\+)?|「[^」]{1,24}」|"[^"]{1,24}"|'[^']{1,24}')/g;
const STOP = new Set(["a", "an", "the", "of", "to", "in", "on", "and", "or", "et", "al", "vs", "via"]);

function RichText({ text }: { text: string }) {
  const parts = (text || "").split(RICH);
  return (
    <>
      {parts.map((seg, i) => {
        if (i % 2 === 1) {
          const bare = seg.replace(/[「」"']/g, "").toLowerCase().trim();
          if (bare && !STOP.has(bare)) {
            return (
              <b className="kw" key={i}>
                {seg}
              </b>
            );
          }
        }
        return <span key={i}>{seg}</span>;
      })}
    </>
  );
}

function SectionHead({ icon, title, hint }: { icon: string; title: string; hint?: string }) {
  return (
    <div className="dsec-head">
      <span className="dsec-icon" aria-hidden>
        {icon}
      </span>
      <h2>{title}</h2>
      {hint && <span className="dsec-hint">{hint}</span>}
    </div>
  );
}

function ClauseList({ text, marker }: { text: string; marker?: "dot" | "check" | "warn" }) {
  const clauses = splitClauses(text);
  if (clauses.length <= 1) {
    return (
      <p className="dsec-body">
        <RichText text={text} />
      </p>
    );
  }
  return (
    <ul className={"clause-list " + (marker ?? "dot")}>
      {clauses.map((clause, i) => (
        <li key={i}>
          <RichText text={clause} />
        </li>
      ))}
    </ul>
  );
}

function StructuredProse({ text }: { text: string }) {
  const lines = (text || "").split("\n").map((line) => line.trim()).filter(Boolean);
  const blocks: { type: "h" | "p"; text: string }[] = lines.map((line) =>
    line.startsWith("## ") ? { type: "h", text: line.slice(3).trim() } : { type: "p", text: line },
  );

  return (
    <div className="prose-body">
      {blocks.map((block, i) =>
        block.type === "h" ? (
          <h3 key={i} className="prose-sub">
            {block.text}
          </h3>
        ) : (
          <p key={i} className="dsec-body">
            <RichText text={block.text} />
          </p>
        ),
      )}
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
  const [copied, setCopied] = useState(false);
  const copyCitation = async () => {
    await navigator.clipboard?.writeText(item.citation);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  const scoreDims: { label: string; value: number; weight: string }[] = [
    { label: "叙述清晰度", value: item.scores.clarity, weight: "20%" },
    { label: "实验证据", value: item.scores.evidence, weight: "25%" },
    { label: "可复现性", value: item.scores.reproducibility, weight: "20%" },
    { label: "采用广度", value: item.scores.adoption, weight: "20%" },
    { label: "演化相关", value: item.scores.selfEvolution, weight: "15%" },
  ];

  return (
    <article className="paper-detail">
      <div className="paper-detail-top">
        <button className="back-button" onClick={onBack}>
          ← 返回 {page.title}
        </button>
        <span className="detail-page-label">{page.eyebrow}</span>
      </div>

      <header className="paper-hero panel" style={{ "--cat": category?.color ?? "var(--teal)" } as CSSProperties}>
        <div>
          <div className="hero-meta-row">
            <span className="chip" style={{ "--chip": category?.color } as CSSProperties}>
              {category?.name}
            </span>
            <span className={"maturity-pill " + item.maturity}>
              <i />
              {maturityLabels[item.maturity]}
            </span>
            <span className="hero-family">{item.methodFamily}</span>
          </div>
          <h1>{item.title}</h1>
          <p className="paper-byline">
            {item.authors} · {item.venue} · {item.year}
          </p>
          <div className="paper-tags">
            {item.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="research-brief">
            <div>
              <span>TL;DR</span>
              <p>{item.summary}</p>
            </div>
            <div>
              <span>SEA Value</span>
              <p>{item.mainFinding}</p>
            </div>
            <div>
              <span>Use With Care</span>
              <p>{item.limitations}</p>
            </div>
          </div>
        </div>
        <aside className="paper-score-card">
          <span className="psc-label">综合评分</span>
          <b>{item.score.toFixed(2)}</b>
          <div className="psc-mini">
            {scoreDims.map((dim) => (
              <span key={dim.label}>
                <i style={{ height: 18 + dim.value * 26 + "px" }} />
              </span>
            ))}
          </div>
          <p>{maturityNotes[item.maturity]}</p>
        </aside>
      </header>

      <div className="paper-detail-grid">
        <main className="paper-reading">
          <section className="detail-section highlight">
            <div className="dsec-full">
              <SectionHead icon="❝" title="一句话概述" />
              <p className="lede">
                <RichText text={item.summary} />
              </p>
            </div>
          </section>

          <section className="detail-section">
            <div className="dsec-full">
              <SectionHead icon="◈" title="核心方法" hint="Method" />
              <StructuredProse text={item.methodCore} />
              {item.figures && item.figures.length > 0 ? (
                <div className="figure-notes">
                  {item.figures.map((fig, i) => (
                    <figure className="paper-figure" key={i}>
                      <img src={resolveAsset(fig.src)} alt={fig.caption} loading="lazy" />
                      <figcaption>
                        <span className="fig-tag">图 {i + 1}</span>
                        <RichText text={fig.caption} />
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ) : (
                <p className="dsec-note figure-empty">
                  ◧ 配图笔记：该条目暂未绑定论文原图。补充 figure 后，此处将展示框架图、算法图与关键流程图，并配图注解读。
                </p>
              )}
            </div>
          </section>

          <section className="detail-section">
            <div className="dsec-full">
              <SectionHead icon="▲" title="实验与评估" hint="Experiments" />
              <ClauseList text={item.evaluation} marker="dot" />
            </div>
          </section>

          <section className="detail-section">
            <div className="dsec-full">
              <SectionHead icon="✦" title="主要发现" hint="Key Findings" />
              <ClauseList text={item.mainFinding} marker="check" />
            </div>
          </section>

          <section className="detail-section">
            <div className="dsec-full">
              <SectionHead icon="⚠" title="局限与边界" hint="Limitations" />
              <ClauseList text={item.limitations} marker="warn" />
            </div>
          </section>

          <section className="detail-section">
            <div className="dsec-full">
              <SectionHead icon="◎" title="为什么在这个位置" hint="Reading Position" />
              <p className="dsec-body">
                该条目被放入 {category?.name ?? page.title}，因为其方法核心是 {item.methodFamily}。综合评分由清晰度 {item.scores.clarity.toFixed(2)}、实验证据 {item.scores.evidence.toFixed(2)}、可复现性 {item.scores.reproducibility.toFixed(2)}、采用度 {item.scores.adoption.toFixed(2)} 和演化相关性 {item.scores.selfEvolution.toFixed(2)} 共同决定。
              </p>
            </div>
          </section>
        </main>

        <aside className="paper-aside">
          <section className="panel paper-side-block">
            <h2>评分向量</h2>
            <div className="score-grid">
              {scoreDims.map((dim) => (
                <div className="score-metric" key={dim.label}>
                  <div className="sm-top">
                    <span>{dim.label}</span>
                    <b>{dim.value.toFixed(2)}</b>
                  </div>
                  <i>
                    <em style={{ width: dim.value * 100 + "%" }} />
                  </i>
                  <span className="sm-weight">weight {dim.weight}</span>
                </div>
              ))}
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
            <button className="copy-citation" type="button" onClick={copyCitation}>
              {copied ? "已复制" : "复制引用"}
            </button>
          </section>

          <section className="panel paper-side-block">
            <h2>Links</h2>
            <div className="ref-rows">
              {item.links.length > 0 ? (
                item.links.map((link) => (
                  <a className="ref-row" key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                    <em>↗</em>
                  </a>
                ))
              ) : (
                <span className="ref-empty">待补论文链接</span>
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
