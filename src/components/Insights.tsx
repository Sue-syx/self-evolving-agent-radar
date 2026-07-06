import { itemsByPage, maturityLabels, radarPages, RadarPageKey } from "../data/radarData";

const statusOf = (score: number) =>
  score > 0.6 ? "mature" : score >= 0.4 ? "growing" : "exploring";

const dims: { key: "clarity" | "evidence" | "reproducibility" | "adoption"; label: string; color: string }[] = [
  { key: "clarity", label: "技术成熟度", color: "#38e0ff" },
  { key: "evidence", label: "创新性", color: "#a78bfa" },
  { key: "reproducibility", label: "落地程度", color: "#2fd2c0" },
  { key: "adoption", label: "生态活跃度", color: "#f5b53d" },
];

interface TimelineEntry {
  year: string;
  badge: string;
  title: string;
  text: string;
}

const timeline: TimelineEntry[] = [
  {
    year: "2023",
    badge: "范式确立",
    title: "技能作为一等资产",
    text: "从一次性 prompt 转向可复用技能库，agent 开始把任务经验沉淀成可检索的能力单元。",
  },
  {
    year: "2024",
    badge: "检索与执行",
    title: "召回与执行分层",
    text: "技能召回、上下文预算控制、代码化执行成为主线，检索粒度与调用可靠性显著提升。",
  },
  {
    year: "2025",
    badge: "自优化",
    title: "技能库自我修订",
    text: "压缩、合并、失效清理与再训练形成闭环，工作流搜索与强化优化推动流程自演化。",
  },
  {
    year: "2026",
    badge: "评测与治理",
    title: "长期演化可度量",
    text: "过程评估、轨迹匹配、安全与漂移检测成为焦点，判断“真实改进 vs 过拟合”成为核心命题。",
  },
];

export function Insights() {
  const rows = radarPages.map((page) => {
    const items = itemsByPage(page.key);
    const avg = (get: (v: (typeof items)[number]) => number) =>
      items.length ? items.reduce((s, it) => s + get(it), 0) / items.length : 0;
    const overall = avg((it) => it.score);
    return {
      page,
      overall,
      cells: dims.map((d) => ({ ...d, value: avg((it) => it.scores[d.key]) })),
      status: statusOf(overall),
    };
  });

  return (
    <section className="insights">
      <div className="insights-hero">
        <p className="eyebrow">演进洞察 · Evolution Insights</p>
        <h1>各领域综合评分、演进时间线与成熟度模型</h1>
        <p>把四个方向放在同一把尺子下横向对比，观察 self-evolving agent 的能力分布与演化轨迹。</p>
      </div>

      <div className="panel score-table">
        <div className="section-title">
          <span className="badge-icon">◲</span>
          <h2>各领域综合评分</h2>
        </div>
        <div className="st-grid">
          <div className="st-head">
            <span>技术领域</span>
            <span>综合评分</span>
            {dims.map((d) => (
              <span key={d.key}>{d.label}</span>
            ))}
            <span>状态</span>
          </div>
          {rows.map(({ page, overall, cells, status }) => (
            <div className="st-row" key={page.key}>
              <div className="st-domain" style={{ ["--dc" as string]: page.categories[0].color }}>
                <i />
                {page.title.replace(" Radar", "")}
              </div>
              <div className="st-score" style={{ color: page.categories[0].color }}>
                {overall.toFixed(2)}
              </div>
              {cells.map((c) => (
                <div className="st-cell" key={c.key}>
                  <div className="st-bar">
                    <b style={{ width: `${c.value * 100}%`, background: c.color }} />
                  </div>
                  <em>{c.value.toFixed(2)}</em>
                </div>
              ))}
              <div>
                <span className={`status-pill ${status}`}>
                  <i />
                  {maturityLabels[status as keyof typeof maturityLabels]}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="score-legend">
          <span><i style={{ background: "#34d399" }} />成熟期 &gt; 0.6</span>
          <span><i style={{ background: "#f5b53d" }} />成长期 0.4 – 0.6</span>
          <span><i style={{ background: "#f2645a" }} />探索期 &lt; 0.4</span>
        </div>
      </div>

      <div className="panel timeline">
        <div className="section-title">
          <span className="badge-icon">◷</span>
          <h2>自进化 Agent 技术演进时间线</h2>
        </div>
        <div className="tl-track">
          {timeline.map((entry) => (
            <div className="tl-item" key={entry.year}>
              <div className="tl-year">{entry.year}</div>
              <div className="tl-card">
                <span className="tl-badge">{entry.badge}</span>
                <h4>{entry.title}</h4>
                <p>{entry.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export type { RadarPageKey };
