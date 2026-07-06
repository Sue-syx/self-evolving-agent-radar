import { useState } from "react";
import { itemsByPage, maturityLabels, radarPages, RadarPageKey } from "../data/radarData";

const statusOf = (score: number) =>
  score > 0.6 ? "mature" : score >= 0.4 ? "growing" : "exploring";

const dims: { key: "clarity" | "evidence" | "reproducibility" | "adoption"; label: string; color: string }[] = [
  { key: "clarity", label: "技术成熟度", color: "#16a394" },
  { key: "evidence", label: "创新性", color: "#7c6cf0" },
  { key: "reproducibility", label: "落地程度", color: "#2aa9d6" },
  { key: "adoption", label: "生态活跃度", color: "#e79c1a" },
];

const objectives: Record<RadarPageKey, string> = {
  skill: "让 agent 把任务经验沉淀为可检索、可复用、可自我修订的技能资产,并在合适时机准确召回与执行。",
  memory: "构建可写入、可遗忘、可反思的长期记忆机制,让 agent 跨会话保留关键上下文并从历史中持续学习。",
  workflow: "让 agent 自主编排、搜索并优化多步工作流,从固定流水线转向可自演化的任务图与协作策略。",
  evaluation: "建立面向长期演化的过程级评测体系,区分“真实能力提升”与“过拟合/漂移”,并覆盖安全与可靠性。",
};

interface TimelineEntry {
  year: string;
  badge: string;
  title: string;
  text: string;
  tags: string[];
  color: string;
}

const timeline: TimelineEntry[] = [
  {
    year: "2023",
    badge: "范式确立",
    title: "技能作为一等资产",
    text: "从一次性 prompt 转向可复用技能库,agent 开始把任务经验沉淀成可检索的能力单元。",
    tags: ["Skill Library", "Tool Use", "ReAct"],
    color: "#16a394",
  },
  {
    year: "2024",
    badge: "检索与执行",
    title: "召回与执行分层",
    text: "技能召回、上下文预算控制、代码化执行成为主线,检索粒度与调用可靠性显著提升。",
    tags: ["Retrieval", "Code Execution", "Context Budget"],
    color: "#2aa9d6",
  },
  {
    year: "2025",
    badge: "自优化",
    title: "技能库自我修订",
    text: "压缩、合并、失效清理与再训练形成闭环,工作流搜索与强化优化推动流程自演化。",
    tags: ["Self-Refine", "Workflow Search", "RL Optimize"],
    color: "#7c6cf0",
  },
  {
    year: "2026",
    badge: "评测与治理",
    title: "长期演化可度量",
    text: "过程评估、轨迹匹配、安全与漂移检测成为焦点,判断“真实改进 vs 过拟合”成为核心命题。",
    tags: ["Process Eval", "Trajectory", "Safety & Drift"],
    color: "#e79c1a",
  },
];

export function Insights({ onOpenPage }: { onOpenPage?: (key: RadarPageKey) => void }) {
  const [expanded, setExpanded] = useState<RadarPageKey | null>(null);

  const rows = radarPages.map((page) => {
    const items = itemsByPage(page.key);
    const avg = (get: (v: (typeof items)[number]) => number) =>
      items.length ? items.reduce((s, it) => s + get(it), 0) / items.length : 0;
    const overall = avg((it) => it.score);
    const stages = { mature: 0, growing: 0, exploring: 0 };
    items.forEach((it) => {
      stages[statusOf(it.score) as keyof typeof stages] += 1;
    });
    return {
      page,
      overall,
      count: items.length,
      stages,
      cells: dims.map((d) => ({ ...d, value: avg((it) => it.scores[d.key]) })),
      status: statusOf(overall),
    };
  });

  return (
    <section className="insights">
      <div className="insights-hero">
        <p className="eyebrow">演进洞察 · Evolution Insights</p>
        <h1>各领域综合评分、演进时间线与成熟度模型</h1>
        <p>把四个方向放在同一把尺子下横向对比,观察 self-evolving agent 的能力分布与演化轨迹。点击任意领域展开领域概述、核心目标与研究问题。</p>
      </div>

      <div className="panel score-table">
        <div className="section-title">
          <span className="badge-icon">◲</span>
          <h2>各领域综合评分</h2>
        </div>
        <p className="section-hint">点击行首箭头展开该领域的研究脉络与目标</p>
        <div className="st-grid">
          <div className="st-head">
            <span />
            <span>技术领域</span>
            <span>综合评分</span>
            {dims.map((d) => (
              <span key={d.key}>{d.label}</span>
            ))}
            <span>状态</span>
          </div>
          {rows.map(({ page, overall, count, stages, cells, status }) => {
            const open = expanded === page.key;
            return (
              <div className="st-block" key={page.key}>
                <button
                  type="button"
                  className={`st-row ${open ? "open" : ""}`}
                  onClick={() => setExpanded(open ? null : page.key)}
                  aria-expanded={open}
                >
                  <span className={`st-caret ${open ? "open" : ""}`}>›</span>
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
                </button>

                {open && (
                  <div className="st-detail">
                    <div className="st-detail-grid">
                      <div className="st-overview">
                        <h5>领域概述</h5>
                        <p>{page.summary}</p>
                      </div>
                      <div className="st-objective">
                        <h5>核心目标</h5>
                        <p>{objectives[page.key]}</p>
                      </div>
                    </div>
                    <div className="st-rq">
                      <h5>核心研究问题</h5>
                      <p>{page.researchQuestion}</p>
                    </div>
                    <div className="st-detail-foot">
                      <div className="st-stagebar" title={`共 ${count} 篇`}>
                        <span className="stage mature"><i />{stages.mature} 成熟</span>
                        <span className="stage growing"><i />{stages.growing} 成长</span>
                        <span className="stage exploring"><i />{stages.exploring} 探索</span>
                        <span className="stage total">共 {count} 篇</span>
                      </div>
                      {onOpenPage && (
                        <button type="button" className="st-jump" onClick={() => onOpenPage(page.key)}>
                          查看该领域技术 →
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="score-legend">
          <span><i style={{ background: "#16a34a" }} />成熟期 &gt; 0.6</span>
          <span><i style={{ background: "#e79c1a" }} />成长期 0.4 – 0.6</span>
          <span><i style={{ background: "#e5544b" }} />探索期 &lt; 0.4</span>
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
              <div className="tl-year" style={{ color: entry.color }}>{entry.year}</div>
              <div className="tl-card" style={{ ["--tc" as string]: entry.color }}>
                <div className="tl-card-head">
                  <span className="tl-badge" style={{ background: entry.color }}>{entry.badge}</span>
                  <h4>{entry.title}</h4>
                </div>
                <p>{entry.text}</p>
                <div className="tl-tags">
                  {entry.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export type { RadarPageKey };
