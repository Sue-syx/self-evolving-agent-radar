<div align="center">

# Self-Evolving Agent Radar

**自进化智能体研究雷达 · 一张可交互的技术演化地图**

追踪自进化 Agent 的四大能力方向——**Skill · Memory · Workflow · Evaluation**，
让每一项技术的成熟度、创新性与落地程度有迹可循。

[![Live Demo](https://img.shields.io/badge/Live-Demo-0f7d6e?style=for-the-badge)](https://sue-syx.github.io/self-evolving-agent-radar)
[![Deploy](https://img.shields.io/github/actions/workflow/status/Sue-syx/self-evolving-agent-radar/deploy.yml?branch=main&style=for-the-badge&label=Pages)](https://github.com/Sue-syx/self-evolving-agent-radar/actions)
![React](https://img.shields.io/badge/React-19-149eca?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646cff?style=for-the-badge&logo=vite&logoColor=white)

**🔗 在线访问 → [sue-syx.github.io/self-evolving-agent-radar](https://sue-syx.github.io/self-evolving-agent-radar)**

</div>

---

## 这是什么

Self-Evolving Agent Radar 是一个**纯前端、可交互的学术雷达站点**。它把「自进化智能体（Self-Evolving Agent）」这个快速演化的研究领域，拆成四张独立的雷达图，每一篇被收录的论文都是雷达上的一个点：**越靠外，代表该技术越成熟**；不同颜色对应不同的子方向。

与一次性的综述表格不同，本项目把每篇论文都做成了一页**深度解读**——包含核心方法的分段讲解（多数在 1000 字以上）、实验与评估设置、主要发现、局限与边界、评分向量、论文原图与完整参考链接，力求「读完这一页 = 读懂这篇论文的骨架」。

## 四大方向

| 方向 | 收录 | 子方向 | 关注的核心问题 |
|:---|:---:|:---|:---|
| 🧩 **Skill** | 104 | 生成 · 召回 · 执行 · 评测 · 优化 · 管理 | Agent 如何形成、复用、执行并治理可迁移的技能 |
| 🧠 **Memory** | 123 | 写入组织 · 检索召回 · 反思演化 · 记忆×技能 · 评测 | 长期记忆的写入、检索、反思与一致性 |
| 🔀 **Workflow** | 26 | 进化搜索 · 强化优化 · 成本效率 · 图结构生成 · 可控状态机 · 评测 | 智能体流程如何被自动搜索、生成与优化 |
| 📊 **Evaluation** | 20 | 任务基准 · 过程评估 · 轨迹匹配 · 自动评判 · 长期演化 | 如何度量 Agent 的能力与自我改进收益 |

> 每个方向都有专属的分类图标与主题色，四张雷达共用一套评分与成熟度体系，可横向对比。

## 核心特性

- **四张交互式雷达图** — 越靠外越成熟，点击圆点即进入单篇论文的深度解读页。
- **千字级论文解读** — 核心方法按 `## 小标题` 分段成文，配论文原图与图注，而非零散要点堆叠。
- **结构化评分体系** — 综合评分由叙述清晰度、实验证据、可复现性、采用广度、演化相关性五个维度加权得出，并以评分向量可视化。
- **成熟度分层** — 每篇论文标注成熟期 / 成长期 / 探索期，一眼看清技术所处阶段。
- **多维筛选** — 按子方向、成熟度阶段、关键词检索，支持网格 / 列表视图与多种排序。
- **演进洞察页** — 汇总各方向评分分布、研究问题与时间线，俯瞰整个领域的演化脉络。
- **技术图谱总览** — 首页把四个方向并置成图，配收录条目、成熟度分布等关键指标。
- **纯静态、零后端** — 数据即代码，构建产物直接托管于 GitHub Pages。

## 技术栈

- **React 19** + **TypeScript 5.7** — 组件化 UI 与类型安全的数据模型
- **Vite 6** — 极速开发与构建
- **纯手写 SVG** — 雷达图、分类图标与解读页图标均为原生 SVG，无图表库依赖
- **单文件 CSS 设计系统** — 全站样式集中于 `src/styles.css`，基于 CSS 变量的冷色调主题
- **GitHub Actions + Pages** — 推送到 `main` 即自动构建部署

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 生产构建（tsc 类型检查 + vite 打包）
npm run build

# 预览构建产物
npm run preview
```

## 项目结构

```
src/
├── App.tsx                        # 主渲染器：路由、总览页、论文详情页
├── styles.css                     # 单文件设计系统（冷色调主题 + 全部样式）
├── components/
│   ├── FilterBar.tsx              # 分类筛选 + 成熟度 + 视图/排序工具栏
│   ├── RadarChart.tsx             # 手写 SVG 雷达图
│   ├── PaperList.tsx              # 论文卡片 / 列表
│   ├── Insights.tsx               # 演进洞察页
│   └── ResearchDrawer.tsx
└── data/
    ├── radarData.ts               # 数据模型、分类定义、页面配置
    ├── importedSkillItems.ts      # Skill 方向论文数据
    ├── importedMemoryItems.ts     # Memory 方向论文数据
    ├── importedWorkflowItems.ts   # Workflow 方向论文数据
    └── importedEvaluationItems.ts # Evaluation 方向论文数据
public/
└── figures/                       # 论文原图（框架图、算法图、流程图）
```

## 数据模型

每篇论文是一个 `RadarItem`，主要字段：

| 字段 | 含义 |
|:---|:---|
| `page` / `category` | 所属方向与子方向 |
| `maturity` | 成熟度：`mature` / `growing` / `exploring` |
| `score` / `scores` | 综合评分与五维评分向量 |
| `methodCore` | 核心方法的分段长文解读（支持 `## 小标题`） |
| `evaluation` / `mainFinding` / `limitations` | 实验评估、主要发现、局限边界 |
| `figures` | 论文原图与图注 |
| `links` / `related` / `citation` | 参考链接、相关论文与引用信息 |

## 部署

站点通过 GitHub Actions 自动部署到 GitHub Pages：任何推送到 `main` 分支的提交都会触发 `deploy.yml`，完成类型检查、构建并发布，无需手动操作。

---

<div align="center">

用一张雷达，看清自进化智能体的每一步演化。

</div>
