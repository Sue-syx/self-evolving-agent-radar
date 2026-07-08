import type { RadarItem } from "./radarData";

export const importedSkillItems: RadarItem[] = [
  {
    "id": "skill-source-trace2skill",
    "page": "skill",
    "title": "Trace2Skill：将轨迹局部经验蒸馏为可迁移技能",
    "shortTitle": "Trace2Skill",
    "category": "skill-generation",
    "maturity": "growing",
    "score": 0.53,
    "year": 2026,
    "venue": "arXiv 2026-03",
    "authors": "",
    "methodFamily": "skill generation",
    "tags": [
      "generation",
      "skill generation",
      "active"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.45,
      "reproducibility": 0.48,
      "adoption": 0.4,
      "selfEvolution": 0.78
    },
    "summary": "并行归纳大量执行轨迹，将局部经验蒸馏为可跨模型迁移的通用技能。",
    "methodCore": "Trace2Skill 采用全局并行分析 + 分层归纳整合的范式，通过三个阶段实现高质量技能的自动生成：\n## 阶段 1：轨迹批量生成（Trajectory Generation）\n使用初始技能（人工编写或 LLM 生成的草稿），让智能体在目标领域任务集上并行执行，生成带标注的成功轨迹（T⁺）和失败轨迹（T⁻，含推理、工具调用、结果），构成技能提炼的原始素材库。\n## 阶段 2：并行多智能体补丁提议（Parallel Multi-Agent Patch Proposal）\n调度一组专门的分析子智能体，并行处理每条轨迹，独立生成技能修改补丁：\n成功分析器：从成功轨迹中提炼可复用的有效行为模式，生成优化补丁；错误分析器：以 ReAct 多轮交互方式定位失败根因、验证修复方案，生成避坑补丁。\n## 阶段 3：无冲突补丁整合（Conflict-Free Consolidation）\n通过分层合并 + 归纳推理，把海量补丁整合成一套无冲突、通用的技能：\n分层合并：按批次逐层合成补丁，去重、解决冲突、保留核心洞察；归纳推理：优先保留多次出现的通用规则，丢弃单轨迹的个性化特例，确保技能可迁移；格式校验：通过三道确定性护栏保证技能格式合法、无冲突。\n## 关键设计\n所有子智能体基于同一版初始技能工作，保留轨迹经验的多样性，避免顺序更新带来的\"经验漂移\"。最终输出完整的 SKILL.md + 辅助资源，推理时直接加载，无需任何检索模块。支持两种工作模式：技能深化（优化现有技能）和从零创建（从 LLM 草稿开始迭代生成）。\n## 主要能力\n从成功轨迹中提炼可复用的有效行为模式；以 ReAct 多轮交互方式定位失败根因、验证修复方案；分层合并 + 归纳推理整合海量补丁为无冲突的通用技能。\n## 研究背景与贡献\nTrace2Skill 针对手工撰写技能不可扩展、而纯参数知识生成的技能常遗漏关键操作陷阱的问题，提出对智能体经验做归纳推理（inductive reasoning），把大量执行轨迹并行归并到统一的技能目录中。框架具双重能力：既能深化已有人工撰写技能，也能从较弱的 LLM 生成草稿创建有用技能。其核心机制是把反复出现的失败与规避手法压缩为标准操作流程（SoPs），使技能不再是训练轨迹的记忆性副本，而是可跨模型规模、跨模型家族、以及迁移到分布外设定的可移植资产。abstract 强调进化后技能无需参数更新、也无需测试时检索即可复用，并与顺序式技能编辑和 ReasoningBank 式检索记忆形成对比。整体把执行经验从零散轨迹提炼为组织化、可携带的过程性知识库，覆盖办公流程、数学推理、视觉问答等多样领域。\n## 实验与要点\nabstract 明确在办公流程、数学推理、视觉 QA 等多领域验证有效，并报告从 Qwen3.5-35B 轨迹进化出的技能可使 Qwen3.5-122B 智能体在 WikiTableQuestions 上最多提升 57.65 个百分点。进一步分析显示其优于顺序式技能编辑与 ReasoningBank 式检索记忆，技能可跨模型规模与家族迁移。除该项外的绝对数值需查原文。\n证明经归纳蒸馏、压缩为标准操作流程的技能可跨模型规模、跨模型家族与分布外设定迁移复用，无需任何参数更新或测试时检索，而非训练轨迹的记忆副本。",
    "evaluation": "abstract 明确在办公流程、数学推理、视觉 QA 等多领域验证有效，并报告从 Qwen3.5-35B 轨迹进化出的技能可使 Qwen3.5-122B 智能体在 WikiTableQuestions 上最多提升 57.65 个百分点。进一步分析显示其优于顺序式技能编辑与 ReasoningBank 式检索记忆，技能可跨模型规模与家族迁移。除该项外的绝对数值需查原文。",
    "mainFinding": "证明经归纳蒸馏、压缩为标准操作流程的技能可跨模型规模、跨模型家族与分布外设定迁移复用，无需任何参数更新或测试时检索，而非训练轨迹的记忆副本。",
    "limitations": "abstract 未详述归纳推理的算力开销与技能目录冲突消解机制；跨领域普适性主要以列举基准展示，长期维护与规模上界仍需原文佐证。需要足够多的执行轨迹才能提炼出高质量技能。跨领域迁移效果与领域结构相关性高。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2603.25158"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2020916672396051215"
      }
    ],
    "citation": "Trace2Skill. https://arxiv.org/pdf/2603.25158",
    "figures": [
      {
        "src": "figures/skill-trace2skill-trace2skill_architecture_overview.png",
        "caption": "Trace2Skill 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-d2skill",
    "page": "skill",
    "title": "D2Skill：面向 Agentic RL 的动态双粒度技能库",
    "shortTitle": "D2Skill",
    "category": "skill-generation",
    "maturity": "growing",
    "score": 0.505,
    "year": 2026,
    "venue": "arXiv 2026-03",
    "authors": "Songjun Tu, Chengdong Xu, Qichao Zhang, Yaocheng Zhang, Xiangyuan Lan, Linjing Li",
    "methodFamily": "skill generation",
    "tags": [
      "generation",
      "skill generation",
      "active"
    ],
    "scores": {
      "clarity": 0.55,
      "evidence": 0.4,
      "reproducibility": 0.43,
      "adoption": 0.35,
      "selfEvolution": 0.83
    },
    "summary": "以任务技能与步骤技能双粒度组织经验，实现策略与技能库协同进化。",
    "methodCore": "D2Skill 的核心是双粒度技能建模与策略-技能库协同进化的联合训练范式，整体框架由三大核心模块构成：\n## 带技能注入的 RL 联合训练\n在每一轮训练中，对每个任务同时采样两组平行轨迹——技能组轨迹的每一步检索并注入对应技能，基线组使用相同策略但不注入技能。基于两组性能差异，同时完成三个环节的计算：\n事后技能效用更新：技能组与基线组的成功率差值作为任务级技能效用信号；事后内在奖励塑形：技能注入轨迹表现优于基线组时获得额外奖励；策略优化：将内在奖励融入总回报，基于 GRPO 算法完成策略更新。\n## 反思驱动的技能生成\n当任务组表现低于阈值时自动触发反思机制，分析技能组的失败轨迹和成功轨迹，从中提炼出新的任务技能和步骤技能，经去重后加入技能库。\n## 技能检索与库管理\n设计两阶段检索流程：\n第一阶段：根据语义相似度检索 top-m 候选技能；第二阶段：结合归一化语义相似度、技能效用和 UCB 探索项的综合分数排序，选出 top-k 技能注入策略上下文。同时通过效用导向的定期剪枝防止技能库无限膨胀，新生成的技能享有保护期以确保充分评估。\n## 主要能力\n双粒度技能抽象：任务技能提供高层战略指导，步骤技能提供细粒度战术纠错；策略-技能库协同进化的联合训练范式；动态效用评估与技能库剪枝维护。\n## 研究背景与贡献\nD2Skill 针对现有技能方法多停留在轨迹级指导、缺乏演化式技能记忆维护机制的问题，提出面向 agentic RL 的动态双粒度技能库。其把可复用经验组织为两类粒度：任务技能（task skills）提供高层指导，步骤技能（step skills）提供细粒度决策支持与纠错。框架采用配对回合（paired rollouts）——在同一策略下分别执行基线回合与注入技能回合，用两者的性能差（performance gap）导出事后效用信号（hindsight utility signals），同时驱动技能更新与策略优化，实现策略与技能库联合训练。技能库完全从训练期经验构建，通过反思持续扩充，并以效用感知的检索与剪枝（utility-aware retrieval and pruning）维护。消融表明双粒度建模与动态维护对增益均属关键，学得技能效用更高、可跨评测设定迁移，且仅引入适度训练开销。\n## 实验与要点\nabstract 明确在 ALFWorld、WebShop 与 Search-Augmented QA 任务上验证，D2Skill 在不同规模模型上均大幅优于无技能基线。消融分析显示双粒度建模与动态维护缺一不可，学得技能效用更高、可跨评测设定迁移，且训练开销适中。abstract 未报告具体百分比，绝对数值需查原文。\n以任务技能与步骤技能双粒度组织经验，用基线与注入技能回合的性能差导出效用信号，实现策略与动态维护的技能库联合训练、协同进化。",
    "evaluation": "abstract 明确在 ALFWorld、WebShop 与 Search-Augmented QA 任务上验证，D2Skill 在不同规模模型上均大幅优于无技能基线。消融分析显示双粒度建模与动态维护缺一不可，学得技能效用更高、可跨评测设定迁移，且训练开销适中。abstract 未报告具体百分比，绝对数值需查原文。",
    "mainFinding": "以任务技能与步骤技能双粒度组织经验，用基线与注入技能回合的性能差导出效用信号，实现策略与动态维护的技能库联合训练、协同进化。",
    "limitations": "abstract 未给出量化增益数字，具体幅度需查原文；配对回合采样与效用剪枝阈值的敏感性、以及大规模技能库的检索延迟仍待考察。技能库管理机制仍有优化空间。跨领域迁移能力有限。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2603.28716"
      },
      {
        "label": "代码",
        "href": "https://github.com/TU2021/D2Skill-AgenticRL"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2022678212954657726"
      }
    ],
    "citation": "D2Skill. https://arxiv.org/pdf/2603.28716",
    "figures": [
      {
        "src": "figures/skill-d2skill-d2skill_architecture_overview.png",
        "caption": "D2Skill 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillx",
    "page": "skill",
    "title": "SkillX：为智能体自动构建技能知识库",
    "shortTitle": "SkillX",
    "category": "skill-generation",
    "maturity": "growing",
    "score": 0.443,
    "year": 2026,
    "venue": "arXiv 2026-04",
    "authors": "",
    "methodFamily": "skill generation",
    "tags": [
      "generation",
      "skill generation",
      "active"
    ],
    "scores": {
      "clarity": 0.5,
      "evidence": 0.35,
      "reproducibility": 0.38,
      "adoption": 0.3,
      "selfEvolution": 0.73
    },
    "summary": "全自动流水线构建即插即用、可跨智能体与环境复用的分层技能知识库。",
    "methodCore": "SkillX 的核心是将经验拆解为三层互补的技能体系，无需人工参与，通过三步闭环流程全自动构建并迭代技能库：\n## 三层技能架构\n规划技能（Planning Skills）：高层任务组织模块，将完整轨迹压缩为有序的核心执行步骤与依赖关系，过滤试错、回溯等无效操作，给出\"做什么\"的宏观方案。功能技能（Functional Skills）：工具化子任务模块，封装可复用的工具组合宏操作，每个技能包含名称、输入输出说明、工具调用模式，解决\"怎么完成子任务\"。原子技能（Atomic Skills）：单工具执行规范层，补充工具使用约束、参数配置、失败场景等信息，修正工具调用幻觉。\n## 三步闭环构建流程\n技能提取：骨干智能体对训练任务多轮滚动执行，仅保留成功轨迹；对轨迹\"降噪压缩\"后按三层架构自动提取对应技能。技能迭代优化：通过合并（语义相似度聚类、聚合优势、拆解复杂技能）与过滤（通用过滤 + 质量筛选）双操作迭代升级技能库，以\"新增/修改/保留\"三种操作完成更新，多轮执行直到性能不再提升。主动扩展：采用经验引导的探索策略——优先探索低利用率、高失败率的工具，从探索轨迹中合成新任务样本，自动发现并补充缺失技能，扩充覆盖场景。\n## 即插即用赋能\n先检索规划技能并重写为伪计划，再以伪计划每步为查询检索功能与原子技能，去重后一次性注入系统提示词，无需多轮交互。\n## 主要能力\n三层技能自动提取：从成功轨迹中自动提取规划、功能、原子三层技能；技能合并与过滤迭代优化：语义聚类合并 + 两轮质量筛选，技能库越用越好；即插即用跨模型赋能：弱模型接入后任务成功率平均提升约 10%。\n## 研究背景与贡献\nSkillX 针对自进化范式中智能体孤立学习、重复重新发现相似行为、导致冗余探索与泛化差的低效问题，提出全自动构建即插即用（plug-and-play）技能知识库的框架，可跨智能体与环境复用。其流水线建立在三项协同创新上：（i）多层次技能设计（Multi-Level Skills Design），将原始轨迹蒸馏为策略性计划、功能性技能、原子技能三层层级；（ii）迭代式技能精炼（Iterative Skills Refinement），基于执行反馈自动修订技能以持续提升库质量；（iii）探索式技能扩展（Exploratory Skills Expansion），主动生成并验证新技能，将覆盖范围扩展到种子训练数据之外。作者以强骨干智能体 GLM-4.6 自动构建可复用技能库，并在挑战性的长程、用户交互式基准上评估其可迁移性。abstract 强调结构化、层级化的经验表示对可泛化的智能体学习至关重要，代码将开源。",
    "evaluation": "abstract 明确在 AppWorld、BFCL-v3 与 τ²-Bench 三个长程、用户交互式基准上评估迁移性，实验显示 SkillKB 插入较弱基础智能体时能持续提升任务成功率与执行效率。abstract 未报告具体百分比数值，绝对数值需查原文；代码计划公开于 GitHub（zjunlp/SkillX）。",
    "mainFinding": "以全自动的三层设计、迭代精炼与探索式扩展流水线构建即插即用技能库，可跨智能体与环境复用，并稳定提升较弱基础智能体的成功率与执行效率。",
    "limitations": "abstract 未给出量化增益；三层蒸馏与探索式扩展依赖强骨干（GLM-4.6），在弱模型上自动构建质量、以及技能库规模膨胀后的检索效率仍待验证。依赖成功轨迹数据。复杂开放场景效果有限。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2604.04804"
      },
      {
        "label": "代码",
        "href": "https://github.com/zjunlp/SkillX"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2025670255108797209"
      }
    ],
    "citation": "SkillX. https://arxiv.org/pdf/2604.04804",
    "figures": [
      {
        "src": "figures/skill-skillx-skillx_architecture_overview.png",
        "caption": "SkillX 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-memento",
    "page": "skill",
    "title": "Memento-Skills：让智能体设计智能体",
    "shortTitle": "Memento-Skills",
    "category": "skill-generation",
    "maturity": "growing",
    "score": 0.467,
    "year": 2026,
    "venue": "arXiv 2026-03",
    "authors": "",
    "methodFamily": "skill generation",
    "tags": [
      "generation",
      "skill generation",
      "research"
    ],
    "scores": {
      "clarity": 0.45,
      "evidence": 0.3,
      "reproducibility": 0.33,
      "adoption": 0.25,
      "selfEvolution": 0.94
    },
    "summary": "以结构化技能为持续演化记忆的智能体设计智能体，实现无参数更新的持续学习。",
    "methodCore": "Memento-Skills 基于 Stateful Reflective Decision Process（有状态反思决策过程） 理论，核心运行逻辑是 Read-Write Reflective Learning（读写反思学习） 闭环：\n读取（Read）：面对新任务时，检索当前最相关的技能来指导冻结的大语言模型执行，Agent 不再依赖静态提示词或原始历史轨迹，而是靠一个不断主动优化的技能库来行动。\n写入（Write）：根据执行结果直接修改可复用的技能工件，而非被动记录日志：\n执行成功 → 提升对应技能的效用评分，增加后续被选中概率；执行失败 → 先进行失败归因，定位到具体技能的哪个环节出了问题，然后针对性优化（添加边界条件、修改执行逻辑、调整 Prompt 模板）；现有技能无法覆盖 → 自动生成全新技能，经过测试后加入技能库。\n技能路由器：优化目标从传统检索的\"语义匹配\"改为\"任务成功\"，采用多正例 InfoNCE 损失做硬负例对比学习，精准区分语义相似但执行逻辑不同的技能。混合检索架构结合稀疏 BM25 召回、稠密向量检索和分数感知的倒数秩融合，可选交叉编码器重排。\n自动单元测试关卡：每次技能更新后，系统自动生成相关测试用例，验证修改后的技能在历史任务上的表现，确保技能不会越改越差。\n## 主要能力\n读写反思学习闭环：从经验中学习，犯错后总结教训，提炼成可复用技能；失败归因与针对性技能优化：精准定位失败根因并修改对应技能工件；自动生成全新技能并通过单元测试验证，确保不会越改越差。\n## 研究背景与贡献\nMemento-Skills 是一个通用、可持续学习的 LLM 智能体系统，定位为“设计智能体的智能体”（agent-designing agent），通过经验自主构建、适配与改进面向任务的智能体。系统建立在带状态提示（stateful prompts）的记忆式强化学习框架上，可复用技能以结构化 markdown 文件存储，充当持久且不断演化的记忆，同时编码行为与上下文，使知识跨交互延续。系统从简单基础技能（如网页搜索、终端操作）起步，借助 Memento 2 的读-写反思学习机制持续改进：读阶段由行为可训练的技能路由器依当前状态提示选取最相关技能；写阶段基于新经验更新与扩展技能库。该闭环实现无需更新 LLM 参数的持续学习。与依赖人工设计智能体的既往方法不同，Memento-Skills 支持通用智能体端到端地为新任务设计智能体，并通过迭代式技能生成与精炼逐步提升自身能力。\n## 实验与要点\nabstract 明确在 General AI Assistants 基准与 Humanity's Last Exam 上验证获得持续增益，整体准确率分别取得 26.2% 与 116.2% 的相对提升（relative improvements）。代码已开源（Memento-Teams/Memento-Skills）。除上述两项相对提升外的绝对数值需查原文。\n以外部化、可演化的 markdown 技能作为持久记忆，实现无需更新模型参数的端到端持续学习与智能体自设计，让通用智能体能为新任务自主设计并迭代改进智能体。",
    "evaluation": "abstract 明确在 General AI Assistants 基准与 Humanity's Last Exam 上验证获得持续增益，整体准确率分别取得 26.2% 与 116.2% 的相对提升（relative improvements）。代码已开源（Memento-Teams/Memento-Skills）。除上述两项相对提升外的绝对数值需查原文。",
    "mainFinding": "以外部化、可演化的 markdown 技能作为持久记忆，实现无需更新模型参数的端到端持续学习与智能体自设计，让通用智能体能为新任务自主设计并迭代改进智能体。",
    "limitations": "abstract 报告的是相对提升而非绝对分数，实际基线水平需查原文；技能路由器选取质量、markdown 技能规模膨胀后的检索与冲突管理仍待考察。跨领域迁移能力有限。技能库收敛需要时间。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2603.18743"
      },
      {
        "label": "代码",
        "href": "https://github.com/Memento-Teams/Memento-Skills"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2027479618127405311"
      }
    ],
    "citation": "Memento-Skills. https://arxiv.org/pdf/2603.18743",
    "figures": [
      {
        "src": "figures/skill-memento-skills-memento_skills_architecture_overview.png",
        "caption": "Memento-Skills 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillrl",
    "page": "skill",
    "title": "SkillRL：经递归技能增强强化学习进化智能体",
    "shortTitle": "SKILLRL",
    "category": "skill-generation",
    "maturity": "growing",
    "score": 0.49,
    "year": 2026,
    "venue": "arXiv 2026-02",
    "authors": "",
    "methodFamily": "skill generation",
    "tags": [
      "generation",
      "skill generation",
      "active"
    ],
    "scores": {
      "clarity": 0.5,
      "evidence": 0.35,
      "reproducibility": 0.43,
      "adoption": 0.3,
      "selfEvolution": 0.88
    },
    "summary": "自动技能发现与递归进化，构建分层 SkillBank 与策略协同进化。",
    "methodCore": "SKILLRL 由三个核心组件构成：\n## 基于经验的技能蒸馏（Experience-based Skill Distillation）\n不同于先前方法仅保留成功轨迹，SKILLRL 刻意保留成功和失败两类轨迹，并进行差异化处理：\n成功轨迹：由教师模型识别关键决策点、正确行动背后的推理逻辑以及可泛化的行为模式，提取为策略性技能。失败轨迹：由教师模型分析失败点、错误推理/行动、应做之事以及预防类似失败的通用原则，合成为简洁的失败教训。\n## 层次化技能库（SKILLBANK）\n将蒸馏出的知识组织为两层结构，推理时，通用技能始终包含在上下文中，任务特定技能通过语义相似度动态检索：\n通用技能：跨任务类型的通用策略原则，如系统化探索（优先未访问位置）、状态管理（执行前验证前置条件）、目标跟踪启发式等，适用于所有任务。任务特定技能：针对特定任务类别的领域知识，包含领域特定行动序列、任务特定前置条件与约束、该任务类型特有的常见失败模式等。\n## 递归技能进化（Recursive Skill Evolution）\n技能库并非静态 —— 通过冷启动监督微调和 RL 期间的动态进化实现协同进化：\n冷启动监督微调：基础 Agent 未学会如何有效利用技能，通过教师模型生成技能增强推理轨迹，演示如何检索、理解和应用技能，对基础模型进行初始化。动态技能进化：每个验证轮次后监控各任务类别的成功率，对低于阈值的类别触发进化。采用多样性感知的分层采样策略收集失败轨迹，由教师模型识别当前技能未覆盖的失败模式，提出新技能或优化现有技能，更新技能库。\n## 主要能力\n基于经验的差异化技能蒸馏：从成功轨迹提取策略模式，从失败轨迹合成教训，10-20× Token 压缩；层次化技能库与自适应检索：通用技能始终生效，任务特定技能按语义相似度动态检索；递归技能进化：技能库随 RL 训练动态扩展，与 Agent 策略协同进化。\n---。\n## 研究背景与贡献\nSkillRL 针对现有记忆式方法主要存储冗余且噪声重的原始轨迹、难以提取高层可复用行为模式的问题，提出一个在原始经验与策略改进之间架桥的框架，核心是自动技能发现（automatic skill discovery）与递归进化（recursive evolution）。它引入基于经验的蒸馏机制（experience-based distillation）构建分层技能库 SkillBank；配以自适应检索策略（adaptive retrieval），区分通用启发式与任务特定启发式；并设计递归进化机制，使技能库在强化学习过程中与智能体策略协同演化（co-evolve）。这些创新在显著降低 token 占用（token footprint）的同时增强了推理效用。整体思路是把杂乱轨迹提炼为结构化、可复用的行为模式，让技能库随策略更新而自我扩充，从而缓解智能体孤立运行、无法从过往经验学习的局限，并在任务复杂度上升时保持鲁棒。",
    "evaluation": "abstract 明确在 ALFWorld、WebShop 与七个搜索增强任务上评估，SkillRL 取得 state-of-the-art，较强基线超出 15.3% 以上，并在任务复杂度增加时保持鲁棒性；同时显著降低 token 占用。代码已开源。除该 15.3% 外的绝对数值需查原文。",
    "mainFinding": "以经验蒸馏构建分层 SkillBank 并借递归进化机制与策略在强化学习中协同演化，在显著降低 token 占用的同时提升推理效用，且随任务复杂度上升保持鲁棒。",
    "limitations": "abstract 未细述递归进化的收敛性与技能库剪枝策略；15.3% 为相对超越幅度，跨更广泛领域与更大模型的可扩展性仍待原文佐证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2602.08234"
      },
      {
        "label": "代码",
        "href": "https://github.com/aiming-lab/SkillRL"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2015436383439847936"
      }
    ],
    "citation": "SKILLRL. https://arxiv.org/pdf/2602.08234",
    "figures": [
      {
        "src": "figures/skill-skillrl-skillrl_architecture_overview.png",
        "caption": "SKILLRL 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-w2s",
    "page": "skill",
    "title": "W2S (Workflow-to-Skill)",
    "shortTitle": "W2S",
    "category": "skill-generation",
    "maturity": "growing",
    "score": 0.5,
    "year": 2026,
    "venue": "arXiv 2026",
    "authors": "武汉大学 & 南昌大学",
    "methodFamily": "技能生成",
    "tags": [
      "generation",
      "技能生成"
    ],
    "scores": {
      "clarity": 0.65,
      "evidence": 0.7,
      "reproducibility": 0.73,
      "adoption": 0.65,
      "selfEvolution": 0.63
    },
    "summary": "W2S 将技能自动生成从文本摘要重新定义为工作流规范重构：不是把多条轨迹压缩成一段文章，而是将对齐到一张有节点、有分支、有语义、有操作上下文的可执行图。W2S 定义了技​​能中间表示 Skill-IR（路由头+工作流骨架。",
    "methodCore": "## Skill-IR 四层中间表示：从\"发生了什么\"到\"应该怎么做\"\n摘要追求语义显著性（挑重要内容、压掉细节），而技能需要的恰好是操作细节。W2S 定义 Skill-IR 将技能拆为四个正交组件：\n路由头：什么条件下调用；工作流骨架：节点间的有向跳转关系与宏观流程分支；节点级语义：局部目标、执行条件、成功/失败判定标准；运行时附件：工具、脚本、参考文档、模板、配置约束和状态管理规范。\n四层拆分使技能生成从\"把轨迹写成一段话\"变为\"从轨迹中为每一层填充该层需要的信息\"。\n## 五步重构管线：分段 → 起草 → 对齐与合并 → 分支协调 → 冗余压缩\n分段将每条轨迹按操作类型切分成过程单元。起草对每条路径单独诱导本地 Skill-IR 草案。对齐与合并在多条草案间做骨架层面对齐，识别共章节点、合并同构步骤、将路径差异收敛到同一骨架的不同分支。分支协调根据轨迹一致性和出现频率判断分支是通用规则还是偶然偏差，保留的分支标注证据来源和置信度。冗余压缩在保留关键验证/审批/回滚行为的前提下合并表述重复。\n## 主要能力\n将技能生成从文本摘要范式转换为工作流规范重构，解决摘要目标函数与技能优化方向错位；Skill-IR 四层正交表示让技能的不同组件（路由/骨架/语义/附件）各自独立可编辑；多轨迹对齐与合并：自动识别共章节点，将不同路径差异收敛到统一工作流骨架的不同分支上；分支协调按轨迹一致性+频率过滤偶然偏差，保留分支标注证据来源和置信度；行为重放一致性比 Anthropic Skill Creator 高 10.5%，在分支逻辑和恢复步骤方面漏项显著更少。\n## 实验与要点\n作为工程实践，其价值在于把领域专长模块化、可移植化：适用于需为智能体批量装配专业能力、跨宿主复用、并对技能进行检视与版本管理的场景。渐进式披露显著缓解上下文预算压力，人机协作闭环保证技能质量可控可纠正。本条目无论文，故无实验数字，工程收益需在具体部署中衡量。\n以人机协作与渐进式披露把专业能力封装为可审计、可移植、按需加载的标准化技能包，让智能体无需改动权重即可获得领域专长并被准确触发。\n## 研究背景与贡献\nW2S 将技能自动生成从文本摘要重新定义为工作流规范重构：不是把多条轨迹压缩成一段文章，而是将对齐到一张有节点、有分支、有语义、有操作上下文的可执行图。W2S 定义了技​​能中间表示 Skill-IR（路由头+工作流骨架+节点级语义+运行时附件），行为重放一致性比 Anthropic Skill Creator 高出 10.5%。\n## 局限与边界\n场景覆盖的完整性是未观测变量：技能质量受限于输入轨迹是否覆盖足够多执行场景，关键回退路径若从未出现则不会被补上。Skill-IR 四层结构预定义且固定：极简单步技能中两层几乎为空，复杂多 Agent 协作场景中四层可能不够，抽象粒度不可参数化。轨迹分段的粒度选择是启发式的：不同任务的\"一个自然步骤\"跨度差异巨大，同一套分段启发式可能切出尺度极不相同的步骤。",
    "evaluation": "W2S 将技能自动生成从文本摘要重新定义为工作流规范重构：不是把多条轨迹压缩成一段文章，而是将对齐到一张有节点、有分支、有语义、有操作上下文的可执行图。W2S 定义了技​​能中间表示 Skill-IR（路由头+工作流骨架+节点级语义+运行时附件），行为重放一致性比 Anthropic Skill Creator 高出 10.5%。",
    "mainFinding": "W2S 将技能自动生成从文本摘要重新定义为工作流规范重构：不是把多条轨迹压缩成一段文章，而是将对齐到一张有节点、有分支、有语义、有操作上下文的可执行图。",
    "limitations": "场景覆盖的完整性是未观测变量：技能质量受限于输入轨迹是否覆盖足够多执行场景，关键回退路径若从未出现则不会被补上。Skill-IR 四层结构预定义且固定：极简单步技能中两层几乎为空，复杂多 Agent 协作场景中四层可能不够，抽象粒度不可参数化。轨迹分段的粒度选择是启发式的：不同任务的\"一个自然步骤\"跨度差异巨大，同一套分段启发式可能切出尺度极不相同的步骤。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.06893"
      }
    ],
    "citation": "W2S. https://arxiv.org/abs/2606.06893",
    "figures": [
      {
        "src": "figures/skill-w2s-w2s_architecture_overview.png",
        "caption": "W2S 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillsynth",
    "page": "skill",
    "title": "TerminalTraj：从容器化环境大规模生成终端智能体轨迹",
    "shortTitle": "SkillSynth",
    "category": "skill-generation",
    "maturity": "growing",
    "score": 0.545,
    "year": 2026,
    "venue": "arXiv 2026-02",
    "authors": "Siwei Wu, Yizhi Li, Yuyang Song, Wei Zhang, Yang Wang, Riza Batista-Navarro",
    "methodFamily": "skill generation",
    "tags": [
      "generation",
      "skill generation",
      "active"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.45,
      "reproducibility": 0.43,
      "adoption": 0.4,
      "selfEvolution": 0.88
    },
    "summary": "以可执行、可验证的容器化流水线大规模合成终端智能体训练轨迹。",
    "methodCore": "SkillSynth 通过三个阶段将技能图谱转化为多样化训练数据：\n## 技能图谱构建（Skill Graph Construction）\n从 ClawHub 和 GitHub 收集并过滤技能，由 LLM 推断每个技能的前置场景（何时适用）和后置场景（执行后状态），经层次凝聚聚类去重、跨技能双向语义对齐、场景合并与过滤，构建以场景为节点、技能为有向边的统一图。最终图谱包含 82,073 个场景节点、57,214 条技能边、185,529 个 LLM 验证的桥接，85.6% 节点位于最大连通分量中，涵盖编码、文档处理、DevOps、安全及音频语音、3D 仿真等长尾领域。\n## 逆频率路径采样（Inverse-Frequency Path Sampling）\n从图中采样有向路径作为任务工作流抽象。采用逆频率加权策略——场景和技能被访问越少、被选中概率越高——避免路径集中在热门节点；路径内排除已访问节点以保证单调推进，长度 1~7 步，仅接受技能集未曾出现过的路径。该机制将采样分布逐步推向场景与技能空间的均匀覆盖。\n## 多 Agent 协作验证管线（Multi-Agent Harness）\n规划器将路径转化为子目标序列，构造器据此生成完整任务实例（指令、文件系统快照、Docker 环境、pytest 验证脚本、参考解法）。通过执行验证（确认可解）和评分验证（LLM 检查指令-测试对齐性）双重把关，失败则反馈重试（最多 3 轮），最终产出 3,560 个验证通过的任务实例，oracle 通过率 95.7%。\n## 主要能力\n图谱驱动的多样性控制：通过逆频率路径采样在\"场景 × 技能\"空间上实现均匀覆盖，合成轨迹的唯一场景-技能对比单技能基线高 31%，比随机多技能高 19%；全自动任务实例生成：单次运行产出 3,560 个验证通过的可执行任务，95.7% oracle 通过率，包含指令、环境、验证脚本和参考解法的完整任务包；小模型超越大模型的数据效率：Qwen3-32B + SkillSynth 在 Terminal-Bench 2.0 上（29.6%）超越 Qwen3 Coder 480B（23.9%），证明多样性优先于数量的数据策略。\n## 研究背景与贡献\n该工作面向终端类任务智能体的训练数据瓶颈，指出大规模构建高质量终端轨迹面临两大要求：可执行性（Executability，每个实例需一个合适且往往各异的 Docker 环境）与可验证性（Verifiability，异构任务输出难以统一标准化校验）。为此提出可扩展流水线 TerminalTraj，含三步：（i）筛选高质量代码仓库以构建容器化执行环境（Dockerized execution environments）；生成与 Docker 对齐的任务实例；合成带可执行校验代码的智能体轨迹，实现自动验证。基于该流水线，作者整理出 32K 个 Docker 镜像并生成 50,733 条经验证的终端轨迹，覆盖八个领域。以 Qwen2.5-Coder 为骨干在此数据上训练的模型在 TerminalBench 上持续提升，并展现更好的测试时扩展行为。整体用可执行、可验证的环境化流水线，把真实长程终端交互沉淀为可训练的高质量轨迹数据。",
    "evaluation": "abstract 明确整理 32K Docker 镜像、生成 50,733 条经验证终端轨迹覆盖八领域；以 Qwen2.5-Coder 训练后在 TerminalBench 上 TB 1.0 最多提升 20%、TB 2.0 提升 10%。TerminalTraj-32B 在百亿参数以下模型中表现强劲，TB 1.0 达 35.30%、TB 2.0 达 22.00%，并改善测试时扩展。代码数据已开源。",
    "mainFinding": "以容器化、可执行、可验证的流水线大规模合成 50,733 条终端智能体轨迹，显著提升终端任务能力，并使百亿参数以下模型展现更强的测试时扩展行为。",
    "limitations": "数据合成依赖高质量仓库与可写校验代码的任务，覆盖领域仍限于八类；轨迹质量受生成模型能力约束，跨骨干（非 Qwen2.5-Coder）的迁移效果需原文佐证。图谱质量依赖 ClawHub/GitHub 技能的质量和覆盖度。尚未开源，无法独立复现。仅验证了终端 Agent 场景，其他 Agent 范式的适用性待验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2604.25727"
      },
      {
        "label": "知乎详解",
        "href": "https://blog.csdn.net/weixin_58753619/article/details/160746726"
      }
    ],
    "citation": "SkillSynth. https://arxiv.org/abs/2604.25727",
    "figures": [
      {
        "src": "figures/skill-skillsynth-skillsynth_architecture_overview.png",
        "caption": "SkillSynth 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-adareasoner",
    "page": "skill",
    "title": "AdaReasoner：面向迭代式视觉推理的动态工具编排",
    "shortTitle": "AdaReasoner",
    "category": "skill-generation",
    "maturity": "growing",
    "score": 0.532,
    "year": 2026,
    "venue": "arXiv 2026-01",
    "authors": "",
    "methodFamily": "skill generation",
    "tags": [
      "generation",
      "skill generation",
      "active"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.45,
      "reproducibility": 0.43,
      "adoption": 0.4,
      "selfEvolution": 0.83
    },
    "summary": "把工具使用学成通用推理技能的多模态模型家族，7B 均值提升 24.9% 并超越前沿系统。",
    "methodCore": "AdaReasoner 将工具增强的多模态推理形式化为序列决策过程，基于三项核心创新构建：\n1. 高质量轨迹数据管线（TC）：三阶段生成训练轨迹——首先为每类任务设计抽象最优求解蓝图（VSP 按感知-规划-验证、Jigsaw 按迭代试错），刻意融入反思回溯和显式工具失败两种复杂场景；然后程序化执行工具调用填充输入输出；最后用强 LLM 生成连接每步的 Chain-of-Thought 推理文本，教会模型主动验证假设和从失败中恢复。\n2. Tool-GRPO 强化学习（TG）：扩展 GRPO 处理多轮工具调用轨迹。奖励由格式、工具调用质量和最终答案精度三部分加权组合，格式奖励单步错误即全轨迹归零，工具奖励按结构、名称、参数名、参数内容四维度层级评分（0-4 分）。采用不对称奖励设计——预测正确时无论是否使用工具均给满分，预测错误时按工具使用质量给部分分，使工具成为不确定性下的后备机制而非强制步骤。\n3. 自适应学习机制（ADL）：贯穿 TC 和 TG 两阶段，解耦工具使用逻辑与任务绑定。Token 级随机化将工具名和参数名替换为随机字符串，迫使模型从描述和上下文推断功能；语义级重述改写工具和参数描述，保持语义但改变措辞，防止过拟合。\n## 主要能力\n自主规划多步工具调用链：动态选择感知（POINT、OCR）、操作（DRAW2DPATH、CROP）、计算（ASTAR）三类视觉工具；自适应工具调节：自主学会采纳有益工具、抑制无关工具、根据任务需求动态调节使用频率，无需显式训练这些行为；跨工具跨任务泛化：在未见过的工具定义和全新任务分布上，保持高频率和高准确率的工具使用。\n## 研究背景与贡献\nAdaReasoner 是一族多模态模型，将工具使用（tool use）学习为一种通用推理技能，而非工具特定或显式监督的行为，从而应对“该用哪个工具、何时调用、如何多步组合”的核心挑战，即便面对新工具或新任务。它由三部分使能：（i）可扩展的数据整理流水线（scalable data curation pipeline），让模型接触长程、多步的工具交互；（ii）Tool-GRPO，一种基于终任务成功（end-task success）优化工具选择与排序的强化学习算法；（iii）自适应学习机制，动态调节工具使用。三者协同使模型能从任务上下文与中间结果推断工具效用，从而协调多个工具并泛化到未见工具。实验显示 AdaReasoner 展现强工具自适应与泛化行为：自主采用有益工具、抑制无关工具、按任务需求调整工具使用频率——尽管从未被显式训练如此行事。整体把工具编排内化为模型的通用推理能力。",
    "evaluation": "abstract 明确报告 AdaReasoner 在多项挑战性基准上取得 state-of-the-art：将 7B 基础模型平均提升 +24.9%，并在包括 VSP 与 Jigsaw 在内的多任务上超越 GPT-5 等强专有系统。abstract 未逐项列出单基准绝对分，具体数值需查原文。",
    "mainFinding": "把工具使用学成一种通用推理技能而非工具特定行为，7B 模型平均提升 24.9% 并在多任务上超越 GPT-5 等专有系统，且能自适应泛化到未见工具。",
    "limitations": "abstract 未给出各基准逐项绝对分与工具集规模细节；Tool-GRPO 对奖励设计与工具接口的依赖、在文本非视觉领域的迁移性仍待原文验证。当前仅验证了视觉推理领域，文本工具使用能力未评估。依赖预定义工具集，工具集扩展需要重新训练。Tool-GRPO 训练计算开销较大，需要多轮交互采样。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2601.18631"
      },
      {
        "label": "代码",
        "href": "https://github.com/ssmisya/AdaReasoner"
      },
      {
        "label": "模型与数据",
        "href": "https://huggingface.co/AdaReasoner"
      }
    ],
    "citation": "AdaReasoner. https://arxiv.org/abs/2601.18631",
    "figures": [
      {
        "src": "figures/skill-adareasoner-adareasoner_architecture_overview.png",
        "caption": "AdaReasoner 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillgen",
    "page": "skill",
    "title": "SkillGen：经验证的推理时智能体技能合成",
    "shortTitle": "SKILLGEN",
    "category": "skill-generation",
    "maturity": "growing",
    "score": 0.477,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "",
    "methodFamily": "skill generation",
    "tags": [
      "generation",
      "skill generation",
      "active"
    ],
    "scores": {
      "clarity": 0.5,
      "evidence": 0.4,
      "reproducibility": 0.43,
      "adoption": 0.35,
      "selfEvolution": 0.78
    },
    "summary": "多智能体框架通过对比归纳合成单一可审计技能，并以干预验证净效果。",
    "methodCore": "把技能定义为一种\"干预\"——加载技能等于对 Agent 做了一次处理，效果用配对实验衡量。三阶段流水线：采集基线 → 对比归纳 → 生成-验证-精炼循环。\n## Stage 1：基线采集\n让基础 Agent 在训练集上裸跑一轮，成功和失败的轨迹都保留。只看成功不知道缺口在哪，只看失败拿不到可复用的正确做法。\n## Stage 2：对比归纳\n归纳 Agent 生成结构化诊断报告，分四块——任务摘要（这类任务在干什么）、失败模式聚类（根因 + 典型出错点 + 正确做法）、成功模式聚类（可复用操作流程 + 检查点）、逐案例对比（对每个失败实例找到嵌入空间最近的同类成功实例，逐帧对比\"成功那次做了什么、失败那次没做\"）。第四块是 SKILLGEN 最特别的地方——它锚定的是 Agent 自己已经展示过但某些场景下遗漏了的能力。\n## Stage 3：生成-验证-精炼循环\n生成 Agent 写出候选技能（任务上下文 + 成功模式 + 失败规避）；验证 Agent 在验证集上跑配对评估——同一个输入分别用有技能和无技能的 Agent 执行，拉列联表算净收益 Gm = 修复数 − 回归数；精炼 Agent 据此提四类反馈（keep/remove/add/emphasize），生成 Agent 修改后进下一轮。最终不取最后一轮而是取 K 轮候选中 Gm 最大的——论文数据显示最新候选期望 Δ 是 -3.1pp，最佳候选是 +8.1pp，差了约 11 个百分点。\n## 验证门\n哪怕最佳候选，Gm 低于阈值就标记 deprecated，不部署。宁可什么都不做，也不装未经验证的技能。\n## 主要能力\n对比归纳不只从成功中提取经验，更从失败和成功的\"差集\"中定位能力缺口的精确位置；配对评估用列联表量化每个候选技能的真实净收益——不是修好几个 case 就认为有用，而是同时看它搞砸了几个原本能做对的 case；best-of-K 选择把精炼当搜索而非收敛，不假设最后一轮一定最好，效果更诚实；验证门是硬约束——τ-Bench 上多个模型生成的候选技能直接被挡掉，避免了对基线的负向干预。\n## 研究背景与贡献\nSkillGen 针对高质量技能仍多靠手写、且无需重训即可提升智能体能力的诉求，提出一个多智能体框架，从基础智能体生成的轨迹中合成单一可审计（auditable）、人类可读的技能产物，可在使用前先行检视。其关键并非简单总结轨迹，而是对成功与失败轨迹同时进行对比归纳（contrastive induction），以识别可复用的成功模式、反复出现的失败模式，以及那些出现在临近成功而缺席于失败中的行为；随后生成候选技能并迭代精炼。SkillGen 的核心创新在于把智能体技能建模为干预（interventions）以实证验证其对整体性能的净效果（net effect）：在相同实例上比较有技能与无技能的结果，从而同时核算修复（repairs，技能修正基线失败）与回退（regressions，技能破坏基线成功）两类影响，避免只看片面收益。整体流程强调可审计、可对比、可验证的技能生成路径。",
    "evaluation": "abstract 明确在广泛的智能体与数据集上评估，SkillGen 持续提升留出集（held-out）性能，优于既有技能生成基线，并产出可跨模型迁移的技能。abstract 未报告具体百分比数值，绝对数值需查原文。其“干预式”净效果验证同时核算修复与回退，是评估方法学上的亮点。",
    "mainFinding": "以成功与失败轨迹的对比归纳合成单一可审计技能，并将技能建模为干预、在相同实例上实证核算修复与回退的净效果，产出可跨模型迁移的技能。",
    "limitations": "abstract 未给出量化增益数字，需查原文；对比归纳依赖足量成功与失败轨迹，单一技能产物在多技能协同、复杂长程任务上的表达力可能受限。知识密集型任务（如 PubMedQA）提升有限——技能能教模型怎么做事，补不了它不知道的事实。验证门的阈值手工设的（g_abs、g_rel），不同任务可能需要不同阈值。归纳阶段依赖嵌入聚类发现行为模式，行为差异很细微时可能漏掉对比信号。多轮 rollout 做验证的 token 开销不小，论文未做成本横向对比。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2605.10999"
      },
      {
        "label": "代码",
        "href": "https://github.com/yccm/SkillGen"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2040842733053539665"
      }
    ],
    "citation": "SKILLGEN. https://arxiv.org/pdf/2605.10999",
    "figures": [
      {
        "src": "figures/skill-skillgen-skillgen_overview.png",
        "caption": "SKILLGEN 方法概览"
      },
      {
        "src": "figures/skill-skillgen-skillgen_architecture_overview.png",
        "caption": "SKILLGEN 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillevolver",
    "page": "skill",
    "title": "SkillEvolver：将技能学习视为一种元技能",
    "shortTitle": "SkillEvolver",
    "category": "skill-generation",
    "maturity": "growing",
    "score": 0.52,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "",
    "methodFamily": "skill generation",
    "tags": [
      "generation",
      "skill generation",
      "research"
    ],
    "scores": {
      "clarity": 0.55,
      "evidence": 0.45,
      "reproducibility": 0.38,
      "adoption": 0.4,
      "selfEvolution": 0.88
    },
    "summary": "单一元技能在线撰写、部署与精炼领域技能，SkillsBench 达 56.8% 超越人类的 43.6%。",
    "methodCore": "SkillEvolver 将自身定义为一项通用元技能，是标准化指导 AI 创作、修订、审核各类领域技能的程序性体系，轻量化、可插拔、无需模型微调，适配各类 CLI 智能体：\n1. 策略多样化探索（Strategy Diversification）：每轮迭代中，作者为执行者生成 4 条关键决策轴上必须有实质性差异的策略，每条策略由独立执行者运行，记录成功或失败轨迹。\n2. 对比式更新（Contrastive Update）：将成功轨迹与失败轨迹进行对比，提取差异作为技能需要补充或修改的内容，生成补丁式修订，仅修改被证据指向的内容而非整体重写。\n3. 独立审计（Independent Audit）：启动全新 AI 会话作为审计官，仅基于技能本身判断，共 9 条审计规则覆盖三类问题——过拟合检测（是否包含训练数据具体文件名或数值）、可执行性检测（是否声明主脚本但执行者从未调用，即\"静默绕过\"）、抽象程度检测（指令是否过于模糊或包含不可追溯断言）。\n## 关键设计\n角色分离：编写技能的 AI（作者）与执行技能的 AI（执行者）不同，利用信息不对称自然暴露技能缺陷；学习目标是技能文本与代码，而非模型权重，产出可直接插入任何 Agent 无需重训练；元技能本身也是一项技能，通过相同接口加载，任何协议兼容的 CLI-Agent 均可使用。\n## 主要能力\n超越人类专家：在 SkillsBench 83 项任务（覆盖 15+ 领域）上达到 56.8%，超越人类编写技能的 43.6% 和无技能基线的 29.9%；GPU 内核优化：在 KernelBench 三个 GPU 内核优化任务上，平均加速比从 1.16 提升至 1.51；低成本高效：单任务耗费 3.92 美元（相较单轮迭代仅上浮 8%），使下游 Agent token 消耗降低 19.4%，交互耗时缩减 23.8%。\n## 研究背景与贡献\nSkillEvolver 针对当前技能是“一次撰写、原样消费、无从改进”的静态产物这一痛点，提出轻量、即插即用的在线技能学习方案：由单一元技能（meta-skill）迭代地撰写、部署与精炼领域特定技能。其学习目标是技能的自然语言正文与代码（prose and code），而非模型权重，因而产物可无需重训直接落入任何智能体；且元技能本身也只是一个技能，通过同一接口被任何协议兼容的 CLI-agent 加载。与轨迹蒸馏（trace-distillation）不同，元技能仅在部署学得技能之后才精炼——学习信号来自另一个智能体在使用该技能时遭遇的失败，而非仅靠探索性轨迹。精炼迭代由一个新鲜智能体过拟合审计（fresh-agent overfit audit）管控，用以捕捉可能的泄漏，以及部署技能特有的失败，包括“静默旁路”模式——技能内容看似有效却在运行时从未被调用。整体形成部署驱动、审计约束的在线技能进化闭环。",
    "evaluation": "abstract 明确在 83 个 SkillsBench 任务（覆盖 15+ 领域）上，SkillEvolver 达 56.8% 准确率，高于人工精选技能的 43.6% 与无技能基线的 29.9%；在 KernelBench 的三个 GPU kernel 优化任务上，将平均加速比从 1.16 提升到平均 1.51。数据具体、来源明确。",
    "mainFinding": "把技能学习本身抽象为可复用的元技能，以部署后另一智能体遭遇的失败为信号在线精炼技能正文与代码，SkillsBench 上超越人工精选技能且无需重训。",
    "limitations": "学习信号依赖部署环境能暴露真实失败，冷启动或失败稀疏场景下进化可能缓慢；过拟合审计的召回率与元技能对不同 CLI-agent 协议的兼容边界仍待原文细化。仅验证了 CLI 数字工具场景，具身智能等物理场景未覆盖。两轮迭代后增益主要集中在高难度任务，基础简单任务效果与基线持平。独立审计依赖新会话的质量，审计规则为硬编码可能不适应所有领域。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.10500"
      },
      {
        "label": "知乎详解",
        "href": "https://new.qq.com/rain/a/20260525A09ONS00"
      }
    ],
    "citation": "SkillEvolver. https://arxiv.org/abs/2605.10500"
  },
  {
    "id": "skill-source-muse-autoskill-gen",
    "page": "skill",
    "title": "MUSE-Autoskill：经创建、记忆、管理与评估的自进化技能智能体",
    "shortTitle": "MUSE-Autoskill",
    "category": "skill-generation",
    "maturity": "growing",
    "score": 0.557,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "",
    "methodFamily": "skill generation",
    "tags": [
      "generation",
      "skill generation",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.5,
      "reproducibility": 0.43,
      "adoption": 0.45,
      "selfEvolution": 0.88
    },
    "summary": "以创建-记忆-管理-评估-精炼五阶段生命周期治理技能，SkillsBench 自建技能超越人类撰写。",
    "methodCore": "MUSE-Autoskill 将 Skill 生命周期定义为五个耦合阶段，在统一 Agent 循环中运转。\n## 五阶段生命周期\nSkill 创建（Creation）：内置 skill_create 在 Agent 的 ReAct 循环内发起创建，消除创建与执行的脱节。Skill 记忆（Memory）：构建三级记忆体系。短期记忆保存当前任务上下文并随增长自适应压缩，长期记忆跨会话持久化通用经验教训，Skill 级别记忆则为每项 Skill 维护独立的 .memory.md 文件，累积失败模式、输入陷阱和性能注意事项。Skill 管理（Management）：采用渐进式检索，启动时只注入 Skill 目录，Agent 决定使用后才加载完整内容。同时，辅以合并重叠 Skill 和裁剪失败或闲置 Skill 两层维护机制。Skill 评估（Evaluation）：单元测试充当质量守门人，创建时把关注册，复用中失败则自动触发精炼。Skill 精炼（Refinement）：基于错误反馈修订或重新生成 Skill，与评估耦合形成自动纠错闭环。\n## 关键设计\nSkill 级别记忆：采用 \"Skill 与经验分离\" 的设计：每个 Skill 对应一个 .memory.md 文件，用于存储 Agent 在使用过程中沉淀的所有经验教训。该文件被刻意隐藏且不随 Skill 打包导出，从机制上保证了 Skill 是可共享的公共资产，经验则是每个 Agent 独有的私有资产，彻底避免了经验的交叉污染。自适应上下文压缩：对话建模为 DAG 节点图，每节点为 plan-action-observation 三元组。Level-1 将超标节点压缩为摘要并保留链位置，Level-2 将中间连续节点合并为合成节点。\n## 主要能力\n版本化自进化：自生成 Skill 中位数 326 行（15.8KB），为人类 Skill 的 2.2 倍，包含详细的输入输出模式、失败模式和逐步操作流程；跨 Agent Skill 迁移：MUSE 生成的 Skill 注入 Hermes（完全不同设计的 Agent）后提升 +10.51pp，弥合 79% 与人类 Skill 的差距，验证 Skill 是真正外部化知识资产；跨会话能力积累：Skill 级别 .memory.md 机制使经验在每次使用时自动激活，无需重复推导；多域覆盖：SkillsBench 覆盖科学计算、数据分析、文档处理、运维规划四个超级领域。\n## 研究背景与贡献\nMUSE-Autoskill（Memory-Utilizing Skill Evolution）针对既有技能创建方法把技能当作孤立、静态产物、限制复用性、可靠性与长期改进的问题，提出以技能为中心的智能体框架，在统一生命周期下创建、复用与精炼技能，含五个阶段：创建、记忆、管理、评估与精炼。MUSE 按需创建技能，跨任务存储，通过技能目录（skill catalog）检索，并为每个技能累积经验（per-skill experience）以供后续复用与适配。其核心主张是把技能视为长生命周期、经验感知且可测试的资产，而非一次性提示。评估阶段检验技能有效性，管理阶段维护技能目录，记忆阶段沉淀 skill 级经验，从而让生命周期治理的技能把智能体经验蒸馏为高效可复用资产，并支持向其他智能体宿主迁移。",
    "evaluation": "abstract 明确在 SkillsBench 与 SkillLearnBench 主设定上 MUSE 优于 Hermes、Codex 与 Claude Code。在 SkillsBench 成功覆盖子集上，其自建技能超越人工撰写技能（85.24% vs. 81.17%）；MUSE 所建技能向 Hermes 迁移比 Codex 或 Claude 所建更有效，迁移准确率达 51.90%。",
    "mainFinding": "以创建-记忆-管理-评估-精炼五阶段生命周期治理技能并累积 skill 级经验，使自建技能在覆盖子集上超越人工撰写，并具更强的跨宿主可迁移性。",
    "limitations": "85.24% 的优势限于“成功覆盖子集”，未覆盖任务上的表现与整体成功率需查原文；生命周期各阶段的额外调用开销与技能目录规模扩张后的检索成本仍待评估。覆盖率瓶颈：仅 68.6%（35/51）任务成功生成 Skill，失败集中在科学计算和系统运维等 Phase 1 基线薄弱领域，呈现\"强者恒强\"的马太效应。单轨迹蒸馏泛化风险：每个 Skill 仅从一条成功轨迹蒸馏，可能包含源轨迹特化的噪声假设，hvac-control 从 80% 跌至 20% 即为典型翻车案例。跨 Agent 迁移验证不完整：仅验证 MUSE → Hermes 单向，其他方向和更多 Agent 组合未测试。评估覆盖不足：SkillsBench 94 个任务仅跑 51 个，排除的任务环境更复杂，报告数字可能高估系统表现。版本膨胀风险：缺乏 Skill 版本的自动裁剪和压缩机制，高频使用 Skill 的 .memory.md 和版本号可能持续增长。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.27366v1"
      }
    ],
    "citation": "MUSE-Autoskill. https://arxiv.org/abs/2605.27366v1",
    "figures": [
      {
        "src": "figures/skill-muse-autoskill-muse-autoskill_overview.png",
        "caption": "MUSE-Autoskill 方法概览"
      },
      {
        "src": "figures/skill-muse-autoskill-muse-autoskill_architecture_overview.png",
        "caption": "MUSE-Autoskill 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-reskill",
    "page": "skill",
    "title": "ReSkill：在 Agentic RL 中调和技能创建与策略优化",
    "shortTitle": "RESKILL",
    "category": "skill-generation",
    "maturity": "growing",
    "score": 0.457,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "",
    "methodFamily": "skill generation",
    "tags": [
      "generation",
      "skill generation",
      "research"
    ],
    "scores": {
      "clarity": 0.5,
      "evidence": 0.4,
      "reproducibility": 0.33,
      "adoption": 0.35,
      "selfEvolution": 0.78
    },
    "summary": "将技能创建嵌入 GRPO 训练循环，以极小开销实现技能与策略协同进化。",
    "methodCore": "## 三重身份 rollout：零额外开销的技能生成\n利用 GRPO 每条 rollout 独立采样的特性，RESKILL 让同一条 rollout 同时完成三件事：\n奖励信号按标准 GRPO 流程更新策略参数（策略优化）；完整轨迹存入 经验水库，LIFO 更新确保水库始终反映 Agent 最近行为分布（失败诊断）；rollout 所属技能版本的奖励更新 Thompson Sampling 后验（技能评测）。rollout 总数与标准 GRPO 完全一致，不额外消耗采样预算。\n## 经验水库驱动的技能生成管道\n水库存储的轨迹驱动四阶段技能创建管道。\n断言评分：规则化断言扫过水库所有轨迹，低通过率直接标注高发失败模式，断言由 LLM 诊断器动态更新——删掉不再触发的旧断言，添加针对新失败模式的新断言。对比分析：水库按任务分组，LLM 逐组对比成功与失败案例，区分技能是被正确遵循还是被无视。推荐 → 撰写 → 验证：推荐器提出 ADD/MODIFY/DELETE 操作，撰写器生成包含触发条件（general/beginning/action_pattern）的结构化技能，最后新技能必须在水库上触发率超 50% 否则打回重写（最多 3 次）。\n## Thompson Sampling + 自适应折扣：技能版本公平竞争\n新旧技能版本作为两臂 Bandit 问题处理。每个训练步 Thompson Sampling 从 Beta 后验中采样决定 rollout 分配比例，好的版本自然拿到更多 rollout。由于策略在持续进化，旧 rollout 数据随策略漂移而\"变质\"，RESKILL 引入 自适应折扣：合并新观察前伪计数先收缩一个与当前步 rollout 数量相关的因子，记忆参数 M 从已完成的 A/B 测试数据中通过预测似然准则自动估计，无需手动调节。周期结束时新版本后验均值超过旧版本则接受，否则回滚。\n## 主要能力\n训练内技能生成：技能在 RL 训练中随策略同步进化，策略学到的新能力即时沉淀为可复用技能，过时技能自动淘汰；零额外采样开销：一条 rollout 同时完成策略优化、失败诊断、技能评测，总计算量与标准 GRPO 持平；自适应版本竞争：Thompson Sampling 动态分配 rollout 给新旧技能版本，自适应折扣让评分随策略进化保持有效；全自动技能生命周期管理：ADD/MODIFY/DELETE 操作全程自动，训练早期补基础、中期做精做细，无人干预；跨域技能迁移：冻结策略后技能库可在新领域独立进化，Agent 学会了\"怎么从技能中受益\"的元能力。\n## 研究背景与贡献\nReSkill 受 Anthropic Skill Creator 启发，针对既有技能增强 RL 把技能创建与策略优化解耦、易采纳与演化中策略相冲突技能的问题，提出“RL-in-the-loop”的技能创建框架，调和技能演化与策略学习。它利用 GRPO 的组内结构，以极小额外开销嵌入三种机制：（1）断言驱动的技能创建器，从过往经验诊断失败并提出条件式、触发式修订；（2）组内回合采样，受控比较不同技能版本，捕捉哪一版本最能支撑策略当前的学习；（3）带自适应折扣的 Thompson 采样，在策略演化中于技能版本选择上平衡探索与利用。对技能生命周期的分析显示，技能随策略改进被自动创建、测试、精炼与剪枝，在近乎零额外采样开销下实现技能自生成、自评测与自进化。",
    "evaluation": "abstract 明确在多个领域上 ReSkill 持续优于既有记忆式与技能式 RL 方法，且在未见任务（unseen tasks）上增益最大。对技能生命周期的分析显示技能被自动创建、测试、精炼与剪枝，验证技能-策略协同进化。abstract 未报告具体百分比数值，绝对数值需查原文。",
    "mainFinding": "借 GRPO 组内结构以极小开销将断言驱动的技能创建嵌入策略优化循环，实现技能与策略调和式协同进化，在未见任务上增益最大。",
    "limitations": "abstract 未给出量化增益；三机制依赖 GRPO 的组结构，迁移到非 GRPO 算法的可行性、以及断言诊断在复杂失败上的准确性仍待原文验证。进化频率是固定超参数：目前每 5 步一次，不同领域需要不同频率，太密 Agent 来不及适应、太稀技能跟不上策略变化。小模型存在技能理解天花板：4B 模型偶尔把技能名当环境动作执行或在不该用时强行套用，技能当指令读还是当推理指引用的认知鸿沟未被解决。评测局限文本交互 + 特定模型：主要在 Qwen3-4B/8B 上验证，更大规模模型和更多模型族的泛化性未知。水库质量依赖断言设计：断言评分是技能生成管道的入口，断言质量不足会连锁影响诊断和技能推荐的有效性。",
    "related": [],
    "links": [
      {
        "label": "RESKILL 论文",
        "href": "https://arxiv.org/pdf/2606.01619"
      },
      {
        "label": "RESKILL 代码仓库",
        "href": "https://github.com/ZLHe0/ReSkill"
      }
    ],
    "citation": "RESKILL. https://arxiv.org/pdf/2606.01619",
    "figures": [
      {
        "src": "figures/skill-reskill-reskill_overview.png",
        "caption": "RESKILL 方法概览"
      },
      {
        "src": "figures/skill-reskill-reskill_architecture_overview.png",
        "caption": "RESKILL 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-optskills",
    "page": "skill",
    "title": "OptSkills：经聚类蒸馏从问题原型学习可泛化优化技能",
    "shortTitle": "OPTSKILLS",
    "category": "skill-generation",
    "maturity": "growing",
    "score": 0.477,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "",
    "methodFamily": "skill generation",
    "tags": [
      "generation",
      "skill generation",
      "research"
    ],
    "scores": {
      "clarity": 0.5,
      "evidence": 0.4,
      "reproducibility": 0.43,
      "adoption": 0.35,
      "selfEvolution": 0.78
    },
    "summary": "按问题原型聚类经验、蒸馏工作流级技能，NLCO 上 OOD 泛化显著提升。",
    "methodCore": "## 原型表示提取：剥离叙事的数学骨架\n对每个训练问题，LLM 提取\"优化成分\"——变量角色、约束机制、目标函数方向，同时生成一个\"脱敏版\"问题描述（将具体实体替换为抽象术语），数字和数学关系保留不变。两种嵌入加权融合得到原型嵌入。\n## 聚类蒸馏建库：从案例到原型技能的质变\nOPTSKILLS 不做逐样本技能生成（129 个技能中 62.8% 闲置），而是对原型嵌入做 DBSCAN 聚类（余弦距离，$\\epsilon=0.05$ 偏保守），同一簇内合并轨迹的正负分析结果蒸馏为一份技能文档（含元数据、工作流、常见陷阱），最终仅 46 个技能覆盖 11 个优化家族，闲置率仅 15.2%。\n## 增量学习：精炼 + 扩展双模式\n新问题匹配到已有技能时走精炼（成功经验灌入工作流、失败模式灌入陷阱），匹配不到时走扩展——只有至少一条正向轨迹存在才构建新技能入库。这个\"无正轨迹不入库\"的保守门槛保证可靠性。\n## 主要能力\n原型级抽象：按数学结构而非表面文本组织和复用经验，从根源上解决语言表述变化导致的泛化失败；聚类蒸馏防冗余：DBSCAN 聚类合并同原型的多元轨迹分析结果，闲置技能率从 62.8% 降至 15.2%；强 OOD 泛化：在 NLCO 基准上学习后达到 72.79%，比纯基线高 10.19 个百分点，新技能利用率达 41.2%；工业级规模适用：MIPLIB-NL 上求解了决策变量维度达 87,482 的问题，技能引导策略未被规模压垮；跨基座迁移：DeepSeek-V3.2 和 Qwen3-235B 两种基座上均有效，增益来自系统设计而非堆模型。\n## 研究背景与贡献\nOptSkills 针对 LLM 自动建模与求解优化问题时泛化受限（对表层叙述变化敏感、经验多停留在案例级、难适配漂移或新兴题型）的问题，提出以原型为中心（archetype-centric）的技能学习与推理智能体系统。为提升鲁棒泛化，系统按问题的底层原型（archetypes）而非表层叙述聚类问题；为提升分布内泛化，在每个簇内探索多样的建模范式与求解器配置，再将成功轨迹蒸馏为可复用的工作流级技能；为提升分布外泛化，用新获轨迹精炼已有技能或扩展技能库。整体把优化经验从零散案例上升为原型级、工作流级的可复用技能，使系统对叙述变体不敏感并能适配未见题型。（说明：输入概述提及 DBSCAN 聚类与并行探索，但 abstract 正文仅明确“按底层原型聚类”与“簇内探索多样范式”，故此处严格依据 abstract 表述，不写入具体聚类算法名。）\n## 实验与要点\nabstract 明确取得 68.27% 的微平均准确率（micro-averaged accuracy）覆盖多样题型；在高难大规模高维基准 MIPLIB-NL 上达 26.91%，较 DeepSeek-V3.2-Thinking 高 4.53%；在 Nano-CO 上技能学习后，于分布外 NLCO 基准达到 72.79%。代码与技能已开源。\n以问题底层原型而非表层叙述聚类经验、蒸馏工作流级技能，并用新轨迹精炼扩展技能库，显著改善优化建模的分布内与分布外泛化能力。",
    "evaluation": "abstract 明确取得 68.27% 的微平均准确率（micro-averaged accuracy）覆盖多样题型；在高难大规模高维基准 MIPLIB-NL 上达 26.91%，较 DeepSeek-V3.2-Thinking 高 4.53%；在 Nano-CO 上技能学习后，于分布外 NLCO 基准达到 72.79%。代码与技能已开源。",
    "mainFinding": "以问题底层原型而非表层叙述聚类经验、蒸馏工作流级技能，并用新轨迹精炼扩展技能库，显著改善优化建模的分布内与分布外泛化能力。",
    "limitations": "abstract 未点明具体聚类算法，实现细节需查原文；按原型聚类的效果依赖原型划分质量，面对全新原型或极端高维问题的适配能力仍有边界。级联错误风险：依赖 LLM 做成分提取和问题编辑，若关键约束丢失或目标函数抽象错误，后续全链偏差。聚类粒度固定：DBSCAN 参数固定，不同问题域的合理粒度可能不同，缺乏自适应调整机制。评测局限运筹优化场景：在组合优化和数学建模类任务上验证，通用 Agent 任务的泛化性未测试。",
    "related": [],
    "links": [
      {
        "label": "OPTSKILLS 论文",
        "href": "https://arxiv.org/pdf/2605.29829"
      },
      {
        "label": "OPTSKILLS 代码",
        "href": "https://github.com/fujiwaranoM0kou/OptSkills"
      }
    ],
    "citation": "OPTSKILLS. https://arxiv.org/pdf/2605.29829",
    "figures": [
      {
        "src": "figures/skill-optskills-optskills_architecture_overview.png",
        "caption": "OPTSKILLS 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-mindskill",
    "page": "skill",
    "title": "MIND-Skill：经多智能体归纳与演绎的质量保证技能生成",
    "shortTitle": "MIND-Skill",
    "category": "skill-generation",
    "maturity": "growing",
    "score": 0.488,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "",
    "methodFamily": "skill generation",
    "tags": [
      "generation",
      "skill generation",
      "research"
    ],
    "scores": {
      "clarity": 0.5,
      "evidence": 0.35,
      "reproducibility": 0.48,
      "adoption": 0.3,
      "selfEvolution": 0.83
    },
    "summary": "归纳-演绎双智能体配三重文本损失联合优化，为技能生成提供质量保证。",
    "methodCore": "## 归纳-演绎双智能体闭环\n归纳智能体的系统 Prompt 是整个框架唯一被优化的变量，输入任务描述 + 成功 ReAct 轨迹，输出结构化技能文档。演绎智能体的 Prompt 从头到尾冻结，唯一的战略输入是归纳智能体生成的技能 + 任务描述（无原轨迹信息），在真实环境中执行 ReAct 循环产出重建轨迹。冻结演绎方确保重建质量变化只能归因到技能本身的改进，形成纯净的控制实验。\n## 三层抽象分类法约束提炼粒度\n归纳智能体 Prompt 内置三层分类：\n程序惯例：跨任务通用但不易从指令推断的，如\"循环翻页直到返回为空\"，保留;；指令可推断：从任务描述就能想到的，删掉;；标准答案泄露：只有看过原轨迹才知道的，如具体参数值，删掉）。\n归纳智能体仅保留第一类，精确控制抽象程度。\n## 三重文本损失联合优化\n全部损失由 LLM Judge 或环境执行计算，走 TextGrad 文本优化。\n重建损失：比策略级等价性而非步骤级文字相似。结果损失：直接跑环境看任务过没过，是框架唯一的硬地面信号。量规损失：最巧妙，从标准答案独立性、可操作性、可迁移性、完整性、简洁性五个维度评估技能文档，充当抽象级别的正则化器。\n三者词典序最小化：结果损失第一优先，重建损失第二，量规损失第三。\n## 主要能力\n闭环质量保证：生成 → 验证 → 优化 → 再生，技能质量可测量、可优化，不再是\"生成了就不管了\"；自训练对齐：弱模型（Qwen3.5-122B）自训技能均分 59.1，强模型（GPT-5.4）代训仅 58.9——生成器与推理模型同分布比生成器原始能力更重要；紧凑技能产出：推理时仅检索 K=3 个技能，注入 Token 数为 ACE 的 1/3 到 1/6；策略级泛化：AppWorld-Challenge SGC 场景级完成率 39.6%，显著优于 ACE（34.5%），捕捉的是场景级程序模式而非任务特定捷径。\n## 研究背景与贡献\nMIND-Skill（Multi-agent INduction and Deduction for Skills）针对复杂多步真实任务需要领域过程性知识、而技能整理长期依赖人工的问题，提出从成功轨迹自动归纳可泛化技能并带鲁棒质量保证的框架。它含两个智能体：归纳智能体（induction agent）从成功轨迹抽象出可复用技能；演绎智能体（deduction agent）尝试遵循归纳出的技能重建轨迹。为保证生成技能质量，作者引入三重文本损失：重建损失（reconstruction loss）比较输入轨迹与重建轨迹；结果损失（outcome loss）强制重建轨迹的正确性；评分标准损失依预定义准则评估文档质量并规整技能的抽象层级。这些文本损失以 TextGrad 联合优化，生成技能在优化期未见的留出任务上评估。整体将技能质量从主观判断转化为可测量、可优化的目标，形成归纳-演绎闭环的质量保证式技能生成。",
    "evaluation": "abstract 明确在 AppWorld 与 BFCL-v3 上评估，MIND-Skill 持续优于同期技能生成方法。其以重建损失、结果损失、评分标准损失三重文本损失经 TextGrad 联合优化，并在留出任务上验证泛化。abstract 未报告具体百分比数值，绝对数值需查原文。",
    "mainFinding": "以归纳-演绎双智能体加重建、结果、评分标准三重文本损失经 TextGrad 联合优化，把技能质量从主观判断变为可测量、可优化的目标并给出保证。",
    "limitations": "abstract 未给出量化增益，需查原文；三重损失与 TextGrad 优化带来额外计算成本，演绎重建对轨迹可复现性要求较高，评分标准依赖预定义准则的合理性。依赖成功轨迹：重建损失需要参考轨迹，没有时可用 ground-truth 参考脚本兜底，但限制了生成技能的任务范围。抽象分类法依赖 Prompt 工程：三层分类法目前手动定义，跨领域迁移可能需要重新调整。TextGrad 优化天花板：8 轮迭代后性能仍在涨但明显变缓，更长时间的优化能否持续带来增益仍是开放问题。",
    "related": [],
    "links": [
      {
        "label": "MIND-Skill 论文",
        "href": "https://arxiv.org/pdf/2605.08670"
      }
    ],
    "citation": "MIND-Skill. https://arxiv.org/pdf/2605.08670",
    "figures": [
      {
        "src": "figures/skill-mindskill-mindskill_architecture_overview.png",
        "caption": "MIND-Skill 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillcomposer",
    "page": "skill",
    "title": "SkillComposer：面向规范化与泛化的智能体技能进化学习",
    "shortTitle": "SkillComposer",
    "category": "skill-generation",
    "maturity": "mature",
    "score": 0.625,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "",
    "methodFamily": "skill generation",
    "tags": [
      "generation",
      "skill generation",
      "active"
    ],
    "scores": {
      "clarity": 0.7,
      "evidence": 0.6,
      "reproducibility": 0.68,
      "adoption": 0.55,
      "selfEvolution": 0.73
    },
    "summary": "将技能构建拆为 create/improve/merge 三操作，经拒绝采样训练自进化技能。",
    "methodCore": "## Create 操作：从原始轨迹到可复用技能的初次提取\nAgent 在无技能指导下纯靠自身能力跑完任务轨迹作为输入。LLM 审视轨迹，从中抽取可复用的过程性知识：先做什么、再做什么、遇到什么情况如何处理。关键约束是区分\"这条轨迹特有的偶然操作\"和\"这类任务通用的有效策略\"，只抽出后者。每个技能包含三个不可变组件：名称（一经确定不可修改）、描述（触发条件和功能概要）、正文（markdown 格式的操作指令）。\n## Merge 操作：通过多视图语义识别驱动泛化\n技能库膨胀后，Merge 在名称、描述、正文三个维度上分别计算语义相似度并取均值，超过阈值 δ 的配对触发合并。合并后的技能需覆盖原有技能的全部有效指导，同时去除冗余和矛盾。这是框架中驱动泛化的核心机制。\n## Improve 操作：从新轨迹注入缺失模式驱动专化\nAgent 拿着已有技能执行新任务时，新轨迹会暴露原技能未覆盖的边界条件和错误模式。Improve 审视新轨迹与原技能的差异，找出\"轨迹里做到了但技能没写\"和\"轨迹里犯了错但技能没预警\"的部分，精准注入。内置防退化机制：若新轨迹没有提供有用改进信号，直接返回原技能。\n## Delta Pass Rate 拒绝采样：无需标注的自动化质量门\n三种操作的基线各不相同：Create 以\"不用技能\"为基线，Merge 以\"各自原技能\"为基线，Improve 以\"改进前原技能\"为基线。候选技能需在对应任务上的 pass@1 提升超过阈值才被保留。约 7000 条高质量样本 SFT 训练 Qwen3.5-4B 模型，让技能编排成为一种可跨任务类型迁移的元能力。\n## 主要能力\n从原始执行轨迹中自动提取可复用技能，区分偶然操作与通用策略；通过多视图语义相似度合并重复技能驱动泛化，压缩技能库规模；从新任务轨迹中增量注入缺失模式，驱动专化落地，内置防退化保护；三种部署模式覆盖不同场景：Offline（批量泛化）、Online（零先验迭代）、Hybrid（冷启动+专化）；技能编排能力跨领域、跨任务类型、跨模型规模可迁移。\n## 研究背景与贡献\nSkillComposer 针对当前技能构建被当作一次性抽取、忽视“规范化与泛化”内在张力（贴合具体任务的技能难迁移，而过度抽象的技能指导不足）的问题，提出将技能构建分解为三个可学习操作：创建（create）、改进（improve）、合并（merge）。框架通过系统化的拒绝采样配方（rejection sampling recipe）训练，使语言模型能在推理时自进化技能，并支持三种部署模式：离线构建通用技能库、在线做任务特定精炼、混合兼具两者。分析揭示 merge 与 improve 针对正交的质量维度，且技能组合是一种可迁移的元能力。整体把技能演化建模为可组合、可训练的操作序列，在规范化与泛化间取得平衡。（说明:输入概述提及 Delta Pass Rate，abstract 仅明确“系统化拒绝采样配方”，故此处依 abstract 表述。）",
    "evaluation": "abstract 明确在 τ²-Bench、LiveCodeBench v6 与 AppWorld 上评估，SkillComposer 持续优于基线；SkillComposer-4B 使 27B 执行器在智能体任务上最多提升 +4.5、代码任务上 +3.4，并可泛化到训练时未见的领域与任务类型。数据来源明确。",
    "mainFinding": "把技能构建拆为可学习的 create/improve/merge 三操作并经拒绝采样训练，实现推理时自进化，印证技能组合是一种可迁移的元能力。",
    "limitations": "拒绝采样训练需一定算力与标注反馈；+4.5/+3.4 的提升幅度相对温和，三操作对更长程、更强异构任务的组合上界与 merge 冲突消解仍待原文佐证。拒绝采样训练成本高：每个候选技能需多次推理计算 delta pass@1，数据收集计算开销大。实验仅覆盖 Qwen 系列模型，其他模型族的泛化性尚未验证。Pass@1 作为唯一质量信号可能忽略部分难以在单次执行中暴露的深层问题。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.06079"
      }
    ],
    "citation": "SkillComposer. https://arxiv.org/abs/2606.06079",
    "figures": [
      {
        "src": "figures/skill-skillcomposer-skillcomposer_architecture_overview.png",
        "caption": "SkillComposer 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-anything2skill",
    "page": "skill",
    "title": "Anything2Skill：把外部知识编译为智能体可复用技能",
    "shortTitle": "ANYTHING2SKILL",
    "category": "skill-generation",
    "maturity": "mature",
    "score": 0.625,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "",
    "methodFamily": "skill generation",
    "tags": [
      "generation",
      "skill generation",
      "active"
    ],
    "scores": {
      "clarity": 0.7,
      "evidence": 0.6,
      "reproducibility": 0.68,
      "adoption": 0.55,
      "selfEvolution": 0.73
    },
    "summary": "以分类树引导把异构知识编译为结构化技能约定，与 RAG 双通道检索。",
    "methodCore": "## 结构化技能合约：四要素的显式约定\n每个技能是一份包含八个字段的结构化合约，核心逻辑：可执行技能必须同时说清楚什么时候触发、怎么执行、注意什么、产出什么。包含触发条件与禁忌场景、具体步骤与动作序列、约束与注意事项、期望输出，以及指向原始证据的引用与置信度分数。\n## 五种资产类型：约束性分类体系防止提取偏差\n所有技能归入严格分类树：宏协议（跨任务全局流程）、会话技能（多步交互模式）、微技能（原子操作）、安全规则（危险动作和禁忌）、知识参考（事实性信息）。提取时每个候选必须能归入某个节点否则丢弃：这个约束让提取器产出过程性技能而非自由摘要，也为后续合并冲突检查提供类型安全。\n## 先规划再展开：防幻觉的两阶段提取\n长文档先切分成证据窗口（附带标题路径和位置锚点）。\n规划阶段：LLM 扫描窗口识别潜在技能候选，只产出轻量提纲。展开阶段：每个候选独立扩充为完整草案。\n防幻觉关键：窗口内容若不直接支撑规划中列出的步骤，展开器返回空草案而非硬编；草案必须包含至少一个过程性组件（步骤、动作、约束）才通过过滤。\n## 三层入库管理：从局部草案到可用技能库\n文档级编译将同源草案按分类键合并为规范技能；注册表级协调用混合检索（稠密语义+稀疏词汇+分类兼容）匹配已有技能，管理模型执行七种生命周期动作（CREATE、STRENGTHEN、REVISE、MERGE、SPLIT、UNCHANGED、DISCARD），更新类动作仅在类型和粒度一致时允许；可视技能树将活跃技能投影为可浏览、可检索的导航树。\n## 主要能力\n从文档、手册、日志等多种异构来源自动编译过程性技能，每个技能可追溯到原始证据；推理时提供 RAG + SkillBank 双通道检索，声明性知识与过程性技能互补覆盖；七种技能生命周期动作（含合并、拆分、强化、废弃）实现技能库的持续演化管理；五种资产类型的约束性分类体系确保提取产物是可执行过程知识而非自由摘要；可视化技能树为 Agent 提供可浏览、可检索的技能导航，底层有完整版本历史与证据链。\n## 研究背景与贡献\nAnything2Skill 针对 RAG 主要检索碎片化陈述性证据、迫使智能体反复从段落/手册/示例/日志/轨迹推断任务流程的问题，提出分类树引导（taxonomy-guided）的框架，把异构外部知识编译为可复用、可检索、可执行的技能。给定知识记录语料，框架先将每条记录分解为证据窗口（evidence windows），在技能树先验（skill-tree prior）下执行“计划-扩展”式技能抽取。候选技能随后被转为结构化技能约定，明确规定调用条件、禁忌、动作招式、工作流步骤、约束、输出规格、支撑证据与置信分。系统在持久化 SkillBank 中经分类感知编译、注册级协调、生命周期跟踪、版本化更新与可见的技能树投影来管理技能，构建可部署的过程性记忆。推理时智能体同时从原始知识库检索任务相关段落、从 SkillBank 检索相关过程性技能，形成 RAG 提供陈述性证据、编译技能提供可复用过程性指导的双通道。",
    "evaluation": "abstract 明确在 qsv 与 GitHub-CLI 上评估，Anything2Skill 结合 RAG 分别取得 98.85% 与 94.10% 的成功率，大幅优于仅用 RAG 的智能体。结果表明将潜在过程性知识编译为显式技能，可把检索增强智能体从“知识访问”扩展到“能力复用”。数据来源明确。",
    "mainFinding": "以分类树引导把异构外部知识编译为规定调用条件与工作流的结构化技能约定并入 SkillBank，与 RAG 双通道协同，把检索增强智能体从知识访问扩展到能力复用。",
    "limitations": "编译质量依赖分类树先验与证据窗口切分的合理性；两基准（qsv、GitHub-CLI）领域相对聚焦，向更开放、噪声更高的知识源泛化与约定维护成本仍待原文佐证。分类体系是手工定义的，新领域需人工扩展分类树，难以完全自动化适配。技能生命周期管理依赖 LLM 判断，长尾场景和边缘案例的决策可靠性尚未充分验证。当前实验覆盖的命令行工具场景（qsv、GitHub-CLI）相对结构化，更开放域的泛化性待验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.09316"
      },
      {
        "label": "代码",
        "href": "https://github.com/ECNU-ICALK/AutoSkill"
      }
    ],
    "citation": "ANYTHING2SKILL. https://arxiv.org/abs/2606.09316",
    "figures": [
      {
        "src": "figures/skill-anything2skill-anything2skill_overview.png",
        "caption": "ANYTHING2SKILL 方法概览"
      },
      {
        "src": "figures/skill-anything2skill-anything2skill_architecture_overview.png",
        "caption": "ANYTHING2SKILL 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-colleague-skill",
    "page": "skill",
    "title": "COLLEAGUE.SKILL：经专家知识蒸馏的自动化 AI 技能生成",
    "shortTitle": "COLLEAGUE.SKILL",
    "category": "skill-generation",
    "maturity": "mature",
    "score": 0.662,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "",
    "methodFamily": "skill generation",
    "tags": [
      "generation",
      "skill generation",
      "open-source"
    ],
    "scores": {
      "clarity": 0.75,
      "evidence": 0.65,
      "reproducibility": 0.73,
      "adoption": 0.6,
      "selfEvolution": 0.73
    },
    "summary": "以能力轨与行为轨双轨蒸馏把隐性经验转为可安装、可纠正的人格化技能包。",
    "methodCore": "## 双轨蒸馏：把\"做事\"和\"说话\"拆成独立可组合轨道\n技能包劈成两条独立轨道。\n能力轨：提取持久的工作方法、技术标准、审核准则、决策启发式：管\"做什么、怎么做\"。行为轨：提取表达模式、交互规则和风格边界：管\"怎么表达、怎么交互\"。两条轨道各自有独立可调用的入口点，可完整加载也可只加载其中一条。\n核心设计逻辑：把事实知识、过程性判断和表面语气拆成独立文件，避免 persona 系统中最常见的三者混淆。\n## 五步管线：从异质痕迹到标准化技能包\n痕迹摄入层：统一处理飞书、钉钉、Slack、微信 SQLite 导出、邮件存档、PDF、截图等异质格式。预设路由层：提供同事预设、公众人物预设、关系预设三套配置，共享同一蒸馏核心，仅在来源范围、证据要求和治理规则上做配置级区分。双轨蒸馏层：用不同 prompt 策略分别生成能力轨和行为轨内容。产物写入层：按 schema v3 渲染输出文件。分发层：支持安装到 Claude Code、OpenClaw、Codex、Hermes 等宿主。\n## 修正即一等公民：自然语言驱动的版本化修订\n修正入口是自然语言反馈：用户说\"他不会这么说\"、\"这个判断不对\"即可。能力修正生成 Markdown patch 匹配二级标题定位替换；行为修正生成标准化记录 {scene, wrong, correct}。每次修正触发版本管理：归档当前版本、应用 patch、递增版本号、重新生成派生产物，支持版本历史、备份、回滚。\n## 主要能力\n从异质痕迹（聊天记录、PR 评论、文档批注、PDF 等）自动蒸馏为结构化技能包；双轨独立架构：能力轨与行为轨可独立加载、独立修正，互不干扰；自然语言驱动的修正流程 + 完整版本管理（备份、回滚、历史记录）；三套预设覆盖不同治理场景（同事/公众人物/关系），共享蒸馏管线、配置级区分；产物兼容 AgentSkills 标准，支持跨宿主安装（Claude Code、Codex、Hermes 等）。\n## 研究背景与贡献\nCOLLEAGUE.SKILL 针对“以人为本”的智能体难以构建——与某人或角色相关的可操作知识通常嵌于异构痕迹（traces）而非干净指令中——提出一套自动化的轨迹到技能蒸馏系统（trace-to-skill distillation），经专家知识蒸馏生成人格化（person-grounded）AI 技能。给定目标人物或角色的素材，系统产出带版本的技能包，含两条协同轨道：能力轨（capability track）承载实践、心智模型与决策启发式；有界行为轨承载沟通风格、交互规则与纠正历史。技能包可被检视、调用、通过自然语言反馈更新、回滚、跨智能体宿主安装，并可选地准备受控分发。作者描述了产物约定、生成工作流、纠正生命周期、部署面与领域预设。整体主张把人格化技能表示为可移植、可纠正的包，而非不透明提示或隐藏记忆，弥补记忆/人格系统只捕捉片段、技能框架只提供打包格式而缺乏端到端蒸馏工作流的空白。",
    "evaluation": "abstract 明确以工程系统与生态数据佐证影响力：撰写时公开仓库约 18.5k GitHub stars，画廊列出来自 165 位贡献者的 215 个技能，列出技能卡累计超过 100k stars。系统兼容可移植的技能打包格式，可跨宿主安装并经自然语言反馈纠正。属工程系统类工作，未报告任务准确率基准。",
    "mainFinding": "以能力轨与有界行为轨双轨蒸馏把人格化隐性经验封装为可检视、可纠正、可跨宿主安装的技能包，并形成约 18.5k stars 的开源生态。",
    "limitations": "abstract 以生态指标（star、贡献者数）而非任务准确率佐证，缺乏标准基准量化；人格化技能的行为边界与隐私、纠正历史的可靠性在广泛部署下仍需审慎评估。不声称生成技能是对人的忠实模型，核心价值在可检查的包装格式而非行为保真度。蒸馏质量依赖输入痕迹的覆盖面和代表性，证据薄弱的区域需要主动声明\"此处证据不足\"而非填通用文本。关系预设场景存在情感过度依赖和非同意模拟的伦理风险，论文仅将其列为扩展能力而非推荐用例。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.31264"
      },
      {
        "label": "代码",
        "href": "https://github.com/titanwings/colleague-skill"
      },
      {
        "label": "项目",
        "href": "https://titanwings.github.io/colleague-skill-site/"
      }
    ],
    "citation": "COLLEAGUE.SKILL. https://arxiv.org/abs/2605.31264",
    "figures": [
      {
        "src": "figures/skill-colleague-skill-colleague-skill_architecture_overview.png",
        "caption": "COLLEAGUE.SKILL 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-mmg2skill",
    "page": "skill",
    "title": "MMG2Skill：智能体能否把野外教程蒸馏为自进化技能",
    "shortTitle": "MMG2Skill",
    "category": "skill-generation",
    "maturity": "growing",
    "score": 0.527,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "",
    "methodFamily": "skill generation",
    "tags": [
      "generation",
      "skill generation",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.5,
      "reproducibility": 0.53,
      "adoption": 0.45,
      "selfEvolution": 0.68
    },
    "summary": "把多模态人类教程编译为可编辑 SKILL 并经轨迹级根因反馈闭环修正。",
    "methodCore": "## 第一阶段：多模态教程到结构化技能的四层提取\nVLM 技能提取器将 HTML+截图教程标准化为可编辑的 SKILL.md，每条技能拆为四层：可复用操作步骤、适用条件、预期状态线索（操作完后环境应该长什么样）、恢复知识（偏离了怎么拉回来）。四层结构的关键价值不在格式而在可编辑：后续精炼时可精确修改某一层而不碰其他层。\n## 第二阶段：带着技能执行，模型冻结不动\n技能被注入 Agent 上下文，与最近 W-1 轮的观测-动作历史持久共存。每个动作在任务说明、近期历史和当前技能集的联合条件下采样。整个闭环中 VLM 模型全程冻结，只有技能文件被修改。\n## 第三阶段：基于轨迹反馈的闭环精炼\n每轮 rollout 后，分析器只看任务说明和 Agent 可见轨迹（没有 benchmark 分数、没有隐藏环境状态、没有 gold action 序列），输出轨迹级问题诊断$e_k$和自判结果 $r_k$（$likely_{success}$）。\n精炼器综合原始教程、当前技能和所有累积诊断更新技能：补上缺失的检查条件、写清模糊的状态线索、删掉教程抄来但跑不通的建议。闭环最多 N=5 轮，自判 l$likely_{success}$ 时可提前终止，节省 25% 到 53% 试次。\n## 主要能力\n从多模态人类教程（HTML+截图+Wiki）自动提取为结构化、可编辑的 SKILL.md 技能；闭环精炼：执行→诊断→修订→重跑，每次失败轨迹转化为对技能文件的一次精确修改；分析器仅依赖 Agent 可见轨迹判断 success，不依赖 benchmark 分数，自判信号可做部署停止条件；提前终止机制在任务达成率不降反升同时节省 25%-53% 试次；覆盖三类交互模式（桌面 GUI、开放世界游戏、回合制策略），18/18 组合全部正向。\n## 研究背景与贡献\nMMG2Skill 针对网络上丰富但多模态、异构、含噪且默认由人类执行的过程性知识难以直接作为智能体技能的问题，把该问题形式化为“教程到技能学习”（guide-to-skill learning）：将野外教程转为可执行技能，并从智能体可观察的轨迹中持续改进。为评估现有智能体在此任务上的能力，作者提出首个基准 MMG2Skill-Bench。进一步提出闭环框架 MMG2Skill：将教程编译为可编辑技能（editable skills），在执行时以这些技能约束一个固定的视觉-语言模型（VLM）智能体，并从轨迹级根因反馈修订技能——不使用基准分数作为信号。消融显示直接用原始教程提示智能体反而可能降低性能，而结构化技能构建与轨迹驱动修订二者均为增益所必需。在可推断成功的任务上，基于分析器的提前停止还能防止后期性能回退。整体形成“教程编译-技能约束执行-根因修订”的自进化闭环。",
    "evaluation": "abstract 明确覆盖 GUI 控制、开放式游戏与策略卡牌，使用六种 VLM 骨干，MMG2Skill 在每个模型-领域设定下均优于原始基线智能体，宏平均增益达 +12.8 至 +25.3 个百分点。消融证实结构化技能构建与轨迹驱动修订缺一不可；提前停止在成功信号校准良好时节省 25%-53% 的尝试。",
    "mainFinding": "将多模态野外教程编译为可编辑技能并以轨迹级根因反馈闭环修订，跨六种 VLM 骨干在每个领域上稳定获得 +12.8 至 +25.3 个百分点的宏平均增益。",
    "limitations": "修订信号依赖可观察轨迹与根因分析质量，成功信号校准不佳时提前停止收益受限；覆盖领域虽多样但仍限于三类任务，向更开放环境的泛化需原文佐证。教程质量是未观测变量：精炼器能修\"教程与运行时不匹配\"，修不了\"教程本身的知识就错了\"。四层结构是概念设计而非强约束，实际实现中四层塞在自由 Markdown 里，修订粒度仍受限于段落边界。success-inferable 边界限制自进化范围：无法从轨迹推断结果的任务（部分信息博弈、隐藏状态）上自进化链条断裂。当前实验环境均为模拟/游戏场景，真实生产环境中的效果有待验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.01993"
      },
      {
        "label": "代码",
        "href": "https://github.com/NJU-LINK/MMG2Skill"
      }
    ],
    "citation": "MMG2Skill. https://arxiv.org/abs/2606.01993",
    "figures": [
      {
        "src": "figures/skill-mmg2skill-mmg2skill_architecture_overview.png",
        "caption": "MMG2Skill 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-sapo",
    "page": "skill",
    "title": "SAPO：自适应过程优化让小推理器更强",
    "shortTitle": "SAPO",
    "category": "skill-generation",
    "maturity": "growing",
    "score": 0.527,
    "year": 2026,
    "venue": "arXiv 2026-01",
    "authors": "",
    "methodFamily": "skill generation",
    "tags": [
      "generation",
      "skill generation",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.5,
      "reproducibility": 0.53,
      "adoption": 0.45,
      "selfEvolution": 0.68
    },
    "summary": "受 ERN 启发的自适应过程监督，主动最小化推理器-验证器差距提升小模型。",
    "methodCore": "## 诊断发现：强模型生成 ≠ 好用，边际效用全程接近零\nSAPO 首先做了一项关键诊断：训练期间定期将 GPT-5.4 生成的技能取出测边际效用。结果：平均边际效用全程接近零。将技能分为 promoted（top 20%）和 discarded（其余 80%）后效用差距显著，说明确实有好技能但被淹没在大量\"水技能\"里。技能效用还是上下文条件化且随时间衰减的：同类已存在时完全冗余，随策略变强早期有用技能也会过时。\n## 预算分劈入库前验证：Split-Half A/B Testing\n核心操作是把每个任务的 rollout 预算 G 切成两半：前一半跑基线 rollout（仅用已有技能），后一半跑技能增强 rollout（多加一个候选技能）。两组共享同一任务和检索上下文，仅候选技能一个变量，奖励差距直接估计候选技能的边际贡献。正效用技能被 promote 进入长期库，效用在零附近的被丢弃。与入库后追踪的差异是质的：追踪方式下低效技能在被识别前已被多次检索和注入，策略梯度被一个\"不提供价值但系统以为提供了\"的技能所扭曲。\n## 策略自我训练为技能生成器 + 上下文条件化检索排序\n将效能信号升级为训练信号：promoted 技能作为正例训练策略提高生成类似技能的概率，discarded 技能作为负例降低概率。策略学到的生成概率作为检索时的上下文条件化附加排序信号，超越纯语义相似度。同样分数用于长期维护：策略认为生成概率很低的技能被标记为过时并删除。训练后期策略自身学会生成高质量技能，API 调用数在训练中段开始下降并最终归零。\n## 主要能力\n入库前 A/B 验证：用 split-half rollout 当场估计技能边际效用，阻止低效技能进入决策环路；技能效能信号反馈训练策略，让策略学会自行生成高质量技能，替代外部 LLM 调用；策略生成概率作为上下文条件化检索排序信号，超越纯语义相似度的匹配精度；基于策略生成概率的长期维护机制：自动检测并删除过时技能。\n## 研究背景与贡献\nSAPO（Self-Adaptive Process Optimization）针对现有自进化方法忽视细粒度推理步骤影响、导致推理器-验证器差距（reasoner-verifier gap），以及蒙特卡洛（MC）过程监督计算低效进一步加剧该差距的问题，面向小语言模型（SLMs）的自我改进提出自适应过程优化方法。其灵感来自错误相关负波（Error-Related Negativity, ERN）——推理器能在错误决策后定位错误并快速调整。SAPO 据此自适应且高效地引入过程监督信号，通过主动最小化推理器-验证器差距，而非依赖低效的 MC 估计。整体把过程级监督从昂贵的采样式估计转为主动、自适应的差距缩小，让小模型在无需大规模过程标注的情况下获得更细粒度的自我纠错能力，从而在推理密集任务上自我提升。作者还为过程奖励模型在数学与代码两类任务上引入两个新基准，以进一步考察 SAPO 对验证器性能的影响。",
    "evaluation": "abstract 明确在数学与代码两类挑战性任务上，SAPO 优于大多数现有自进化方法；并新引入数学与代码两个过程奖励模型（process reward models）基准，以进一步考察其对验证器性能的影响。abstract 未报告具体百分比数值，绝对数值需查原文。",
    "mainFinding": "受 ERN 启发以自适应过程监督主动最小化推理器-验证器差距，无需低效 MC 估计即在数学与代码任务上提升小模型的自我纠错与推理能力。",
    "limitations": "abstract 未给出量化增益，需查原文；方法聚焦小模型与数学/代码任务，向更大模型或开放域任务的适用性、以及新基准的公认度仍待验证。效能估计精度受奖励方差影响：高方差环境（如 WebShop）中相同预算下的估计误差更大，可能错判微正效能。策略自生成技能质量受 RL 学习曲线约束：早期策略未稳定时生成质量低，需中后期才能产出一致正效用技能。策略生成概率对分布外查询的可靠性未充分消融验证。当前仅在 ALFWorld 和 WebShop 两个经典基准及 Qwen2.5-7B 单底座上验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.08755"
      },
      {
        "label": "代码",
        "href": "https://github.com/zzwjames/skill_augmented_agent"
      }
    ],
    "citation": "SAPO. https://arxiv.org/abs/2606.08755",
    "figures": [
      {
        "src": "figures/skill-sapo-sapo_architecture_overview.png",
        "caption": "SAPO 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-evods",
    "page": "skill",
    "title": "EvoDS：具技能学习与上下文管理的自进化自主数据科学智能体",
    "shortTitle": "EvoDS",
    "category": "skill-generation",
    "maturity": "growing",
    "score": 0.542,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "",
    "methodFamily": "skill generation",
    "tags": [
      "generation",
      "skill generation",
      "research"
    ],
    "scores": {
      "clarity": 0.65,
      "evidence": 0.5,
      "reproducibility": 0.53,
      "adoption": 0.45,
      "selfEvolution": 0.68
    },
    "summary": "自主合成验证复用技能并把上下文压缩当作可学控制，超最强开源基线 28.9%。",
    "methodCore": "## 分层多智能体架构：Manager + 五个专业化 Sub-Agent\n顶层 Manager Agent 负责全局推理、任务分解和跨 Agent 协调。下层五个专业化 Sub-Agent 各维护独立局部技能空间：Cleaner（数据清洗）、Featurizer（特征工程）、Modeler（模型训练与调参）、Visualizer（可视化）、Debugger（错误诊断修复）。每个专业 Agent 的动作空间仅含其领域操作和培育的专属技能，Agent 间互不干扰。理论分析证明，工具分配到互斥专业空间后每个 Agent 的选择错误率低于统一大空间。\n## 自主技能获取（ASA）：从成功经验中长出可复用新工具\n当 Sub-Agent 执行了一段从未出现的成功操作序列，且满足条件（成功完成子任务、模式在库中无对应项、是流程级新模式而非简单参数变化），成功轨迹被送去合成候选技能。候选先在同类子任务上重跑验证真伪，通过后以\"名称+功能说明+可执行代码\"存入专属仓库。配套按使用频度淘汰：高频保留、长期未用退场，避免技能膨胀占用上下文。\n## 自适应上下文压缩（ACC）：把压缩做成可学习的 RL 动作\n不同于硬截断，ACC 将压缩作为 Manager Agent 的可选动作：对上下文中每段信息做保留、摘要或丢弃。压缩决策纳入 RL 目标：压缩错误导致后续失败被惩罚，压缩后仍高效完成任务且省 token 被奖励。ASA 和 ACC 呈现互补关系：ASA 往上下文加入新技能，ACC 控制上下文总量保证新技能不挤掉关键信息，两者联合使用增益最大。\n## 主要能力\n自主技能获取（ASA）：从成功经验中合成、验证、入库可复用技能，按频度淘汰，让工具空间随任务持续进化；自适应上下文压缩（ACC）：压缩做成可学习的 RL 动作而非被动截断，模型自行判断每段信息的保留/摘要/丢弃决策；分层多智能体解耦全局协调与专业执行，各 Sub-Agent 独立技能空间降低工具选择错误率；两阶段训练（SFT→Agentic RL）中技能空间和上下文预算同时动态变化，训练条件与部署条件一致。\n## 研究背景与贡献\nEvoDS 针对现有数据科学智能体受静态动作集与缺乏原则性长程上下文管理限制、难以跨任务累积可复用经验、在多阶段迭代管线中不可靠的问题，提出通过 agentic 强化学习学会扩展技能并自适应管理长期上下文的自进化自主数据科学智能体。它引入两项关键策略：（1）自主技能获取机制（Autonomous Skill Acquisition, ASA），使智能体能合成、验证并复用可执行技能；（2）自适应上下文压缩策略（Adaptive Context Compression, ACC），把上下文管理当作可学习的控制问题，而非被动截断（passive truncation）。两者被编排在一个两阶段多智能体训练方案中，使 EvoDS 能随时间自主改进。理论上，作者证明其层级化设计降低了工具选择误差，优化目标与信息瓶颈原则一致，保证高效的上下文使用。整体形成技能自生成-验证-复用与上下文自适应压缩相结合的自进化范式。",
    "evaluation": "abstract 明确在四个多样基准上，EvoDS 平均超越 state-of-the-art 开源数据科学智能体 28.9%，同时消除超 token（out-of-token）失败。理论侧证明层级设计降低工具选择误差、优化目标契合信息瓶颈原则。代码与数据已开源，逐基准绝对分需查原文。",
    "mainFinding": "以自主技能获取加把上下文压缩学成控制问题的自适应策略并经两阶段多智能体训练，平均超最强开源数据科学智能体 28.9% 且消除超 token 失败。",
    "limitations": "28.9% 为平均相对提升，逐基准表现需查原文;两阶段多智能体训练与 RL 依赖较高算力，向数据科学以外领域的迁移性仍待验证。ASA 验证依赖同类子任务重跑，若 同类子任务太少验证本身会比较脆弱，可能放过仅一次偶然匹配的伪技能。ACC 的压缩粒度由模型语言判断驱动，缺乏结构化信息度量，基座模型对信息价值的判断偏差可能导致关键推理被过度压缩。教师模型决定 SFT 上限，若教师生成的 ASA/ACC 决策有系统偏差，RL 可能无法在合理训练预算内纠偏。当前仅验证数据科学领域，分层架构和 ASA+ACC 联合优化在其他领域的泛化性待探索。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.03841"
      },
      {
        "label": "代码",
        "href": "https://github.com/usail-hkust/EvoDS"
      }
    ],
    "citation": "EvoDS. https://arxiv.org/abs/2606.03841",
    "figures": [
      {
        "src": "figures/skill-evods-evods_architecture_overview.png",
        "caption": "EvoDS 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-openclaw-skill",
    "page": "skill",
    "title": "OpenClaw-Skill：面向智能体大模型的集体技能树搜索",
    "shortTitle": "OpenClaw-Skill",
    "category": "skill-generation",
    "maturity": "growing",
    "score": 0.527,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "",
    "methodFamily": "skill generation",
    "tags": [
      "generation",
      "skill generation",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.5,
      "reproducibility": 0.53,
      "adoption": 0.45,
      "selfEvolution": 0.68
    },
    "summary": "以集体技能树搜索构建可迁移技能树，配集体技能强化学习增强长程能力。",
    "methodCore": "## CSTS：集体技能树搜索三阶段\n第一阶段复杂任务分解：将复杂任务按依赖关系分解为有序子任务序列。第二阶段 CSN-Gen（集体技能节点生成）：多个异构模型并行对同一子任务产生执行轨迹，共享技能合成器将每条轨迹总结为一个候选技能节点：每个节点是集体智慧的独立投票。第三阶段 CSN-Assess（集体技能节点评估）：双评分机制，集体质量评分（每个模型对自己的技能节点做多次 rollout 验证）+ 集体可迁移性评分（每个节点在 N-1 个其他模型上交叉测试，取平均成功率）。最终分 = 质量 + 可迁移性，每子任务选最高分节点。\n## CSRL：跨技能条件的对比策略优化\n扩展 GRPO 风格的截断优化。对每个子任务，在所有候选技能条件下分别采样 rollout，计算跨技能组的相对优势（cross-skill normalization）：不是比较同一技能下不同行动的好坏，而是比较同一子任务下不同技能条件导致的轨迹质量差异。这推动策略偏好更有效的技能条件化策略，同时避免策略坍缩到单一技能依赖。\n## 训练与规模效应\nCSTS 产出 2K SFT 样本，在 8 个 H100 GPU 上训练 2 个 epoch。消融显示每个组件独立贡献：基础 34.5，+CSN-Gen 39.8（+5.3），+CSN-Gen+CSN-Assess 42.8（+3.0），Full +CSRL 44.9（+2.1）。跨类别增益不均：SVM 类从 33.2 跳至 70.9（+37.7），CS 类从 30.2 跳至 78.4（+48.2），说明技能树搜索对原模型弱势领域的增益最显著。\n## 主要能力\nCSTS 集体技能树搜索：多异构模型并行产生候选技能，通过交叉验证筛选最优节点；CSRL 跨技能条件策略优化：比较同一子任务下不同技能条件的轨迹质量，驱动策略偏好更优技能；技能树作为结构化、可导航的技能组织方式，天然支持多步复杂任务的技能路由；以 9B 开源权重在 QwenClawBench 上逼近闭源模型的竞争力。\n## 研究背景与贡献\nOpenClaw-Skill 面向为 LLM 智能体装备有效技能以解决 OpenClaw 等真实系统复杂任务的需求，提出集体技能树搜索（Collective Skill Tree Search, CSTS）——一个基于树搜索的技能构建框架，构建结构化、多样且可泛化的技能树。CSTS 借集体智能经两个迭代阶段联合搜索、识别与组合有效技能：集体技能节点生成（CSN-Gen）利用多模型的集体知识为每个子任务探索多样候选技能；集体技能节点评估（CSN-Assess）以多模型作为评判，用两种评分机制筛选节点——集体质量评分（collective quality scoring）聚合独立评估得出稳健的有效性估计，集体可迁移性评分显式验证技能是否跨模型良好泛化。据此构建技能树与技能增强训练数据。此外引入集体技能强化学习，主动从树中选取多个相关技能以拓宽解空间探索，避免被单一技能困住而产生同质或次优解。",
    "evaluation": "abstract 明确训练所得模型 OpenClaw-Skill 在长程规划、工具使用与泛化的挑战性基准上展现出色的智能体能力。（输入概述提及 9B 小模型逼近闭源竞争力，abstract 未给出该规模与具体数字，故此处依 abstract 表述，具体数值与基准分数需查原文。）",
    "mainFinding": "以多模型集体智能的技能树搜索构建可迁移技能树，并用集体技能强化学习主动选取多技能拓宽解空间，提升长程规划、工具使用与泛化能力。",
    "limitations": "abstract 未报告具体基准分数与模型规模，需查原文；集体搜索需调用多个模型，构建成本与评判一致性、以及技能树规模膨胀后的检索开销仍待考察。多模型并行的计算开销是 CSTS 的固有成本，每子任务需多个模型同时 rollout。集体可迁移性评分在模型间能力差距过大时可能偏向中位数，而非识别最优技能。当前技能树是静态构建的，不支持生产部署后的持续进化更新。仅在 Qwen 系列模型上验证，非 Qwen 模型族的泛化性和集体智能的模型多样性效益待探索。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.16774"
      }
    ],
    "citation": "OpenClaw-Skill. https://arxiv.org/abs/2606.16774",
    "figures": [
      {
        "src": "figures/skill-openclaw-skill-openclaw-skill_architecture_overview.png",
        "caption": "OpenClaw-Skill 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillchain",
    "page": "skill",
    "title": "SkillChain：为图像电商 AI 助手闭合技能进化循环",
    "shortTitle": "SkillChain",
    "category": "skill-generation",
    "maturity": "mature",
    "score": 0.693,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "",
    "methodFamily": "skill generation",
    "tags": [
      "generation",
      "skill generation",
      "active"
    ],
    "scores": {
      "clarity": 0.8,
      "evidence": 0.75,
      "reproducibility": 0.68,
      "adoption": 0.7,
      "selfEvolution": 0.73
    },
    "summary": "生产级电商图像助手的三阶段技能自进化框架，线上 A/B 验证用户指标显著增益。",
    "methodCore": "## Stage 1 — Skill Creator：从任务规范和生产轨迹中引导技能\n从任务规范和用户交互轨迹中提取初始技能，每个技能是一个 (Description, Body) 元组：Description 管路由匹配，Body 管响应质量。技能创建后经人工反思门控（human reflection gating）过滤低质量产物，确保初始技能库达到生产基线。Description 和 Body 的架构解耦是整个链式设计的基石，后续两个阶段各自修改一个组件，互不干扰。\n## Stage 2 — Route Optimizer：挖掘路由失败并修复 Description\n线上流量持续变化导致意图到技能的映射退化（C2 路由漂移）。Stage 2 挖掘路由失败案例，对技能 Description 执行三种操作：Update（修正单个技能的 Description）、Merge（合并路由混淆的技能对）、Discard（移除不再匹配流量分布的技能）。路由修复是下游质量优化的前提：如果技能没被正确触发，Body 质量再高也用不上。\n## Stage 3 — Body Refiner：双路径评估 + 跨样本归因修复 Body\n单条轨迹的 LLM Judge 评分方差太高，直接按单样本修改有过拟合风险。Stage 3 改用跨样本归因：先对每个技能的所有生产响应跑双路径评估（规则路径检测结构性违规 + LLM Judge 在 TCR/CCC/CQ/CA 四维度打分），将分数离散化为 Good/Average/Poor 三档，按技能聚合计算各维度的 Poor 比例，仅当超过阈值 θ 时才触发定向修复。更新接受条件为 $J̄(B_{k+1}) ≥ J̄(B_k)$，构成单调质量保证。\n## 主要能力\n三阶段解耦闭环：Skill Creator（引导）、Route Optimizer（路由修复）、Body Refiner（质量迭代），各自修改技能的不同组件；单调质量保证：每个阶段仅在接受改进时才更新，确保技能质量不回退；跨五个视觉意图类别的严格递增加成：S1 62.5→S1+S2 67.2→Full 72.2（NoSkill 基线 59.1）；线上 A/B 验证用户行为指标全面正向：交互 UV +1.92pp，全文阅读率 +4.98pp，七日回访率 +1.15pp。\n## 研究背景与贡献\nSkillChain 面向已在电商平台生产规模部署的图像 AI 助手场景——一张上传图片可触发商品搜索、风格推荐、视觉百科或工具调用等根本不同的用户意图，各自要求不同的响应格式、工具调用与领域知识；缺乏按意图的行为约束会使 LLM 系统混淆这些异构模式而达不到领域质量标准，而意图空间的广度与动态性又使人工工程不可行。为此 SkillChain 闭合技能进化的生产反馈循环，通过三阶段自动化技能生命周期：技能创建器（Skill Creator）从任务规格与轨迹自举技能；路由优化器（Route Optimizer）做路由对齐（routing alignment），确保意图正确映射到技能；正文精炼器（Body Refiner）经双路 LLM-Judge 评估迭代精炼技能正文。整体把技能的创建、路由与正文精炼串成自动闭环，以应对广而动态的意图空间并保证按意图的行为质量，是面向真实生产部署的技能自进化框架。",
    "evaluation": "abstract 明确部署于生产规模电商图像助手，SkillChain 大幅提升总体响应质量，在结构合规性（structural compliance）与内容质量上增益最强；为期一周的线上 A/B 实验进一步确认在用户参与度、内容消费与长期留存上取得显著增益。abstract 未报告具体百分比数值，绝对数值需查原文。",
    "mainFinding": "在生产级电商图像助手上以创建-路由-精炼三阶段闭合技能进化循环，线上一周 A/B 实验验证用户参与度、内容消费与长期留存均获显著提升。",
    "limitations": "abstract 未给出量化数字，需查原文；框架针对电商图像意图空间设计，向其他垂直领域迁移需重构任务规格；双路 LLM-Judge 评估的成本与判定偏差仍需关注。基座 MLLM 固定为 Qwen3-VL-235B，跨模型泛化性未验证，Judge 为 Gemini-3.1-Pro-Preview。Body Refiner 的收敛需要足够的生产流量暴露，内容质量维度的长尾问题收敛慢于结构性维度。当前仅在图像电商领域验证，框架在其他垂直领域的可迁移性待确认。人工反思门控是 Stage 1 的质量保障但也是吞吐瓶颈，完全自动化可能引入级联错误。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.12984"
      }
    ],
    "citation": "SkillChain. https://arxiv.org/abs/2606.12984",
    "figures": [
      {
        "src": "figures/skill-skillchain-skillchain_architecture_overview.png",
        "caption": "SkillChain 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-visualskill",
    "page": "skill",
    "title": "VisualSkill：面向计算机使用智能体的多模态技能",
    "shortTitle": "VisualSkill",
    "category": "skill-generation",
    "maturity": "growing",
    "score": 0.555,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "",
    "methodFamily": "skill generation",
    "tags": [
      "generation",
      "skill generation",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.45,
      "reproducibility": 0.48,
      "adoption": 0.4,
      "selfEvolution": 0.88
    },
    "summary": "保留截图而非改写为文字的分层多模态技能，经 MCP 按需加载，优于纯文字版。",
    "methodCore": "## 两层技能结构与图文交错加载\n每个应用一套技能，顶层SKILL.md索引加底层话题文件夹（guide.md+PNG截图）。Agent推理时只持索引，按需调load_topic MCP工具拉取对应话题。关键设计：文字和图片按引用顺序交错推送——截图紧跟描述句子出现，Agent在同一上下文窗口同时看到描述和图像，不需自己匹配。纯文本对照版由同一LLM调用同源内容生成，唯一区别是视觉信息以图片还是文字呈现。\n## 两阶段技能构建\nStage 1挖文档：解析官方手册（PDF/HTML）目录结构复用为话题集合，提取文字和vendor配图原样保留。控制要点：继承维护者已有的结构比另起炉灶更省钱且更准确。\nStage 2跑真实应用，两种互补子模式：\nFree Explorer：Opus planner分8个区域，Sonnet worker逐控件操作、截图、记录状态转换行为；Trajectory-Targeted Explorer：reviewer agent读失败rollout找出系统性UI知识缺口，针对性派worker补截图和操作说明。\n控制要点：两个子阶段覆盖互补的UI表面——free覆盖静态可见区域（工具栏、侧边栏），targeted覆盖只有在任务交互中才出现的动态表面（两层深的模态对话框、状态转换行为）。\n## 配对对照与模态归因\n每个VISUALSKILL配一个从同源内容生成的纯文字对照版，共享话题结构和操作内容。任何性能差异只来自模态差异——不是内容差异。八个领域177个任务上验证。\n## MCP工具 vs 直接Read\n消融实验揭示加载方式决定技能能否被真正使用：MCP方式每任务读7.9张图、最后一次查阅在10.4步（边做边查）；直接Read只读0.8张图、最后一次查阅在1.5步（开头翻一下就再也不回去）。MCP把图文打包一次返回，直接Read每张图要单独调一次。\n## 主要能力\n截图作为一等公民：保留UI截图而非改写为文字，消除\"点击格式刷\"这类文字描述的歧义；MCP on-demand加载：Agent只持索引，边做边查，不是一次读完所有技能；两阶段互补覆盖：文档覆盖+真实UI探索，Free和Targeted各补不同的盲区；干净模态归因：配对纯文字版隔离模态贡献，差距可精确量化；视觉密集型应用受益最大：GIMP+16.6%，Tableau+15.0%，OpenToonz+8.9%。\n## 研究背景与贡献\nVisualSkill 针对计算机使用智能体（CUAs）在长程任务与未见软件上仍吃力、而既有技能库把技能产物仅表示为纯文本（忽视 GUI 交互的视觉本质）的问题，提出一种分层多模态技能（hierarchical multimodal skill）：针对每个目标应用定制，组织为一个中央索引（central index）之下的按主题文件（per-topic files），智能体通过 load_topic 这一 MCP 工具按需抓取相关主题的文本与图（figures）。每个技能以两阶段流水线构建，结合撰写的文档与实时应用 UI 探索。其关键主张是在技能产物中保留视觉图示、而非把它们“言语化抹除”，这既帮助智能体识别 UI 元素，也帮助其在每步动作后验证工作流状态。整体形成“中央索引 + 按主题多模态文件 + MCP 按需加载”的可复用技能组织方式，直接对比同源生成、仅模态不同的纯文本技能以隔离视觉信息的贡献。",
    "evaluation": "abstract 明确在 CUA-World 与 OSExpert-Eval 上，由 Claude Opus 4.6 支撑的 Claude Code CLI 智能体使用 VisualSkill 达平均 0.456，较无技能基线（0.303）绝对提升 +15.3 点；相较同源生成、仅模态不同的纯文本技能（0.373），再获 +8.3 点绝对增益。代码已开源。",
    "mainFinding": "证明在技能产物中保留截图而非改写为文字，能显著帮助 CUA 识别 UI 元素与验证工作流状态，较同源纯文本技能再增 8.3 个绝对点、较无技能基线增 15.3 点。",
    "limitations": "多模态技能构建需实时 UI 探索与图示维护，成本高于纯文本；评测集中于两个 CUA 基准且以强 VLM（Opus 4.6）为骨干，向更弱模型与更广软件的泛化仍待验证。当前模型不擅长从多张截图中筛选相关的那几张，一口气全返回在小模型上造成上下文压力。Qwen3.5-397B加多模态技能后反而退化，上下文被截图撑爆的问题没解决。Stage 2 explorer依赖Opus/Sonnet级强模型，构建成本对普通用户偏高。技能构建是离线pipeline，不支持Agent在线运行时自主更新截图。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.18448"
      },
      {
        "label": "GitHub仓库",
        "href": "https://github.com/XMHZZ2018/VisualSkills"
      }
    ],
    "citation": "VisualSkill. https://arxiv.org/abs/2606.18448",
    "figures": [
      {
        "src": "figures/skill-visualskill-visualskill_architecture_overview.png",
        "caption": "VisualSkill 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skill-router",
    "page": "skill",
    "title": "SkillRouter：面向大规模 LLM 智能体的技能路由",
    "shortTitle": "SkillRouter",
    "category": "skill-retrieval",
    "maturity": "mature",
    "score": 0.685,
    "year": 2026,
    "venue": "arXiv 2026-03",
    "authors": "",
    "methodFamily": "skill retrieval",
    "tags": [
      "recall",
      "skill retrieval",
      "active"
    ],
    "scores": {
      "clarity": 0.85,
      "evidence": 0.8,
      "reproducibility": 0.63,
      "adoption": 0.75,
      "selfEvolution": 0.63
    },
    "summary": "在约8万技能的注册表上证明技能全文是关键路由信号，并用1.2B全文检索-重排管线以更少参数取得最强Top-1路由。",
    "methodCore": "SkillRouter 采用两阶段检索-重排架构，两个阶段均以完整技能文本作为输入：\n阶段 1：双编码器检索（粗排）：微调 Qwen3-Emb-0.6B 作为嵌入模型，将用户查询与全量技能库进行向量嵌入，通过余弦相似度检索 Top-20 候选，将候选集从 8 万缩减至 20。训练数据包含 37,979 条（查询，技能）训练对，采用困难负例挖掘（语义负例 4 个 + 词汇负例 3 个 + 分类负例 2 个 + 随机负例 1 个），并通过三层假阴性过滤（名称去重、代码重叠、嵌入相似度）过滤约 10% 的负例。使用批内 InfoNCE 损失通过对比学习优化。\n阶段 2：交叉编码器重排（细排）：微调 Qwen3-Reranker-0.6B，将每个候选技能的\"名称+描述+代码\"平铺拼接后输入，通过交叉注意力机制对每个（候选技能，用户查询）对联合处理，生成精细化相关性得分后重排。采用列表式交叉熵损失对整个候选列表联合排序（比逐点方式 Hit@1 提升 30.7 个百分点）。\n推理流程：技能通过离线方式预编码，推理阶段仅需查询编码、近似最近邻搜索及对 20 个候选重排，实现高效在线服务。\n## 主要能力\n大规模技能库精准匹配：8 万技能库场景下端到端 Hit@1 达 74.0%；重排序修复：交叉编码器可修复 12.7% 的检索失败案例，仅造成 4.0% 性能下降；跨模型迁移：架构可针对不同垂直领域进行端到端微调，适配不同技能库特性。\n## 研究背景与贡献\nSkillRouter 针对技能生态膨胀至上万条目、推理时无法暴露全部技能的路由问题展开。作者先在源自 SkillsBench、含约 8 万候选技能且大量重叠的基准上审视主流的渐进式披露（progressive disclosure）设计——该做法只暴露技能名与描述而隐藏完整实现体。跨稀疏、稠密与重排三类代表性基线的实验发现，隐藏技能体会导致路由准确率下降 31–44 个百分点，说明技能全文并非可有可无的元数据细化，而是该场景下的关键路由信号。基于此结论，论文提出一个紧凑的 1.2B 全文「检索-重排」（retrieve-and-rerank）管线：先以全文检索召回候选，再经重排模块排序，从而在有限算力下利用完整技能文本这一强信号。整体流程强调用小模型承载全文语义，兼顾准确率与推理效率，避免依赖更大规模的基础管线。\n## 实验与要点\n在其基准上 SkillRouter 取得 74.0% Hit@1，为所评估基线中最强的平均 Top-1 路由表现，同时参数量少 13 倍、运行速度快 5.8 倍于最强基础管线。排序增益还在独立构建自三个技能来源的补充基准上得到泛化。此外在覆盖四个编码智能体的端到端研究中，路由增益可转化为任务成功率提升，且对更强的智能体收益更大。\n隐藏技能实现体会使路由准确率骤降 31–44 个百分点，证明技能全文是核心路由信号；小型全文检索-重排管线即可以更少参数取得最强 Top-1 路由。",
    "evaluation": "在其基准上 SkillRouter 取得 74.0% Hit@1，为所评估基线中最强的平均 Top-1 路由表现，同时参数量少 13 倍、运行速度快 5.8 倍于最强基础管线。排序增益还在独立构建自三个技能来源的补充基准上得到泛化。此外在覆盖四个编码智能体的端到端研究中，路由增益可转化为任务成功率提升，且对更强的智能体收益更大。",
    "mainFinding": "隐藏技能实现体会使路由准确率骤降 31–44 个百分点，证明技能全文是核心路由信号；小型全文检索-重排管线即可以更少参数取得最强 Top-1 路由。",
    "limitations": "结论基于 SkillsBench 派生的重度重叠大注册表场景，全文检索在极端规模或低重叠库上的表现仍需验证；端到端增益依赖底层编码智能体能力。基准测试仅来自有限数量的技能源，结论适用于大规模、存在大量重叠的注册表；在小型目录中，纯元数据路由可能更具竞争力。仅在四种编程 Agent 和单一执行预算下完成评估。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2603.22455"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2020593144639562073"
      }
    ],
    "citation": "SkillRouter. https://arxiv.org/pdf/2603.22455",
    "figures": [
      {
        "src": "figures/skill-skillrouter-skillrouter_architecture_overview.png",
        "caption": "SkillRouter 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillorchestra",
    "page": "skill",
    "title": "SkillOrchestra：通过技能迁移学习路由智能体",
    "shortTitle": "SkillOrchestra",
    "category": "skill-retrieval",
    "maturity": "mature",
    "score": 0.605,
    "year": 2026,
    "venue": "arXiv 2026-02",
    "authors": "",
    "methodFamily": "skill retrieval",
    "tags": [
      "recall",
      "skill retrieval",
      "research"
    ],
    "scores": {
      "clarity": 0.65,
      "evidence": 0.55,
      "reproducibility": 0.53,
      "adoption": 0.5,
      "selfEvolution": 0.88
    },
    "summary": "不端到端学路由策略，而是从执行经验中学习细粒度技能并刻画各智能体在技能上的能力与成本，在性能-成本权衡下选择智能体。",
    "methodCore": "## Skill Handbook 三层结构：模式洞察 + 技能注册表 + Agent 画像\n手册由三层可复用知识构成。\n模式层（Mode-level Insights）：从执行轨迹中蒸馏出的经验规则，指导何时搜索、编码或直接回答。技能注册表（Skill Registry）：自动挖掘的细粒度能力抽象，如\"符号逻辑推理\"、\"Pell 方程求解\"、\"约束配对计数\"——每个技能含自然语言描述、适用场景指示信号和典型样例，支持从粗到细的分层展开（如 data_processing → symbolic_logic）。Agent 画像（Agent Profiles）：每个 Agent 在每个技能上维护一个 Beta 分布估计的成功概率，附带成本统计、优劣势总结和使用注记，路由可直接查表决策。\n## 技能发现与精炼：轨迹对比 + 统计合并拆分\n技能不是专家标注的，而是从执行轨迹中自动挖掘。\nSkill Discovery 阶段：对同一查询和模式，取一条成功轨迹和一条失败轨迹做对比，两者间的能力差距由 LLM 抽象为可复用技能定义并加入注册表。Handbook Refinement 阶段：定期依据 Agent 表现统计——高方差技能触发拆分（标识多个底层能力），统计不可区分的技能对触发合并（消除冗余）。\n## Pareto 最优手册筛选 + 技能感知路由\n手册建完后不是全量使用。细粒度技能要求 orchestrator 具备足够的推理能力来准确识别当前激活的子技能，能力弱的 orchestrator 反而会因误判而选错 Agent。系统在验证集上评估候选手册子集，选出使目标 orchestrator 在性能和成本间达到 Pareto 最优的版本 —— 强者拿精细版，弱者拿粗粒度版。推理时，orchestrator 依次执行模式选择、技能识别，最后用 Bayesian 后验均值聚合 Agent 在所需技能上的能力得分，减去成本惩罚项，选分最高者执行。\n## 主要能力\n根治路由坍塌：将 RL 路由器的单模型集中度从 98% 降至均衡分布，各模型按能力特长被合理调用；极致数据效率：仅需几十条探索轨迹构建手册，训练样本比 Router-R1 少约 700 倍，比 ToolOrchestra 少约 300 倍；跨 orchestrator 零成本迁移：手册与 orchestrator 模型解耦，一次构建可复用至不同 backbone，全部涨点无例外；白盒可解释路由：每次路由决策有技能层面的明确理由，而非隐状态权重；Pareto 最优的性能-成本权衡：在模型路由和 Agent 编排双场景中均位于 Pareto 前沿，准确率更高、成本更低。\n## 研究背景与贡献\nSkillOrchestra 针对复合 AI 系统编排的两大局限:(1) 输入级路由器做粗粒度的查询级决策,忽略任务需求的动态演变;(2) 强化学习训练的编排器适配成本高,且在多轮场景中易出现路由坍塌(routing collapse)——反复调用某个强但昂贵的选项。框架不直接端到端学习路由策略,而是提出技能感知编排:先从执行经验中学习细粒度技能(skills),再对每个智能体在这些技能下的能力(competence)与成本(cost)建模。部署时,编排器推断当前交互的技能需求,并在显式的性能-成本权衡下选择最能满足需求的智能体。这种显式技能建模将路由从数据密集的 RL 策略学习,转为可解释、样本高效且可扩展的能力-成本匹配过程,并支持跨 orchestrator 迁移。",
    "evaluation": "在十个基准上的大量实验表明,SkillOrchestra 相对 SoTA 的 RL 编排器最高提升 22.5%,同时相比 Router-R1 与 ToolOrchestra 分别降低 700 倍与 300 倍的学习成本。结果显示显式技能建模可带来可扩展、可解释且样本高效的编排。代码已开源于 GitHub。",
    "mainFinding": "显式技能建模+能力-成本权衡可替代数据密集的 RL 编排,在十基准上最高提升 22.5%,并将学习成本降低 700 倍/300 倍,同时缓解路由坍塌。",
    "limitations": "细粒度技能需从执行经验中挖掘,依赖高质量轨迹积累;能力-成本建模的准确性影响选路,面对全新技能或分布漂移时的鲁棒性有待观察。探索性数据集依赖：手册构建需覆盖正负样本的探索性轨迹，新领域冷启动时如何高效获取尚未展开。持续更新机制缺失：新任务和新模型加入后手册的自动增量更新策略论文未涉及。技能粒度选择未全自动：当前通过验证集 Pareto 筛选，自适应粒度调整仍需进一步研究。Agent 编排场景验证有限：仅 FRAMES 一个 benchmark，多工具多模式场景的泛化性有待扩大验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2602.19672"
      },
      {
        "label": "代码",
        "href": "https://github.com/jiayuww/SkillOrchestra"
      }
    ],
    "citation": "SkillOrchestra. https://arxiv.org/abs/2602.19672",
    "figures": [
      {
        "src": "figures/skill-skillorchestra-skillorchestra_architecture_overview.png",
        "caption": "SkillOrchestra 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-graph-of-skills",
    "page": "skill",
    "title": "Graph-of-Skills：面向海量智能体技能的依赖感知结构化检索",
    "shortTitle": "Graph of Skills",
    "category": "skill-retrieval",
    "maturity": "mature",
    "score": 0.622,
    "year": 2026,
    "venue": "arXiv 2026-04",
    "authors": "",
    "methodFamily": "skill retrieval",
    "tags": [
      "recall",
      "skill retrieval",
      "active"
    ],
    "scores": {
      "clarity": 0.75,
      "evidence": 0.7,
      "reproducibility": 0.53,
      "adoption": 0.65,
      "selfEvolution": 0.68
    },
    "summary": "离线构建可执行技能图，推理时通过混合检索种子、反向感知个性化 PageRank 与预算受限填充，检索出有界且依赖完整的技能包。",
    "methodCore": "GoS 的核心设计是把所有 Skill 及其依赖关系组织成一张结构化的有向图，检索时不仅返回语义相关的 Skill，还会自动补全所有前置依赖。整套体系分为两个阶段，全程不需要人工标注依赖关系：\n## 离线建图：自动生成 Skill 依赖网络\n将所有本地 Skill 包解析成标准化节点（名称、能力描述、输入输出格式、依赖工具、脚本路径等），自动生成四种类型的边：\n依赖边：A 的输出格式匹配 B 的输入要求A → B，权重最高；工作流边：两个 Skill 经常在同一业务流程中先后使用；语义边：两个 Skill 能力高度相似，属同一功能领域；替代边：两个 Skill 可互相替换实现同一功能。\n## 在线检索：反向扩散生成完整可执行 Skill 包\n混合语义-词汇种子检索：将用户查询重写为结构化检索 schema，同时用语义向量和词汇匹配找到最相关的核心 Skill 作为种子；反向加权个性化 PageRank：以种子 Skill 为起点沿依赖边反向扩散评分，不同边类型分配不同权重（依赖边 1.0、工作流边 0.5、语义边 0.2、替代边 0.1），自动补全所有前置依赖；预算重排与水化：按上下文窗口预算限制重排候选 Skill，每个 Skill 附带本地路径和执行说明，Agent 可直接使用。\n## 主要能力\n自动生成 Skill 依赖网络（四种边类型，无需人工标注）；依赖感知的结构化检索（反向扩散算法自动补全前置依赖）；完整可执行 Skill 包返回（附带本地路径和执行说明）。\n## 研究背景与贡献\nGraph-of-Skills(GoS)针对技能库扩展至数千条时的两大挑战:(1) 加载全量技能会撑满上下文窗口,推高 token 成本、幻觉与延迟;(2) 单纯语义检索能召回主题相关技能,却遗漏其上下游前置依赖链,形成「前置缺口」(prerequisite gap),导致检索出的技能包无法执行完整。GoS 是一个面向大型技能库的推理时结构化检索层:离线阶段从技能包构建可执行技能图(executable skill graph);推理阶段通过三步检索出有界、依赖感知的技能包——混合语义-词法种子选取(hybrid semantic-lexical seeding)、反向感知个性化 PageRank(reverse-aware Personalized PageRank)扩散依赖关系,以及上下文预算受限的填充(context-budgeted hydration)。该设计将语义检索升级为结构感知检索,兼顾依赖完整性与上下文预算。\n## 实验与要点\n在 SkillsBench 与 ALFWorld 上,GoS 于 Claude Sonnet 4.5、MiniMax M2.7、GPT-5.2 Codex 三个模型族上持续带来奖励提升与 token 节省。以 GPT-5.2 Codex 为例,SkillsBench 峰值奖励提升 25.55%,较全量加载基线减少 56.72% 总 token,消融在 200 至 2000 技能规模验证该模式。\n结构化依赖感知检索弥补纯语义的前置缺口,GPT-5.2 Codex 在 SkillsBench 提升奖励 25.55%、省 56.72% token,并在 200–2000 上稳健",
    "evaluation": "在 SkillsBench 与 ALFWorld 上,GoS 于 Claude Sonnet 4.5、MiniMax M2.7、GPT-5.2 Codex 三个模型族上持续带来奖励提升与 token 节省。以 GPT-5.2 Codex 为例,SkillsBench 峰值奖励提升 25.55%,较全量加载基线减少 56.72% 总 token,消融在 200 至 2000 技能规模验证该模式。",
    "mainFinding": "结构化依赖感知检索弥补纯语义的前置缺口,GPT-5.2 Codex 在 SkillsBench 提升奖励 25.55%、省 56.72% token,并在 200–2000 上稳健",
    "limitations": "需离线从技能包构建可执行依赖图,依赖依赖关系的可解析性与准确性;PageRank 扩散与预算填充的超参对不同库规模的敏感性仍需关注。复杂开放场景下 Skill 提取和依赖识别效果不佳。跨领域迁移时依赖关系准确率有明显下降。多 Skill 执行流程仍需 Agent 自主判断，不能自动生成最优执行方案。自动提取的 Skill 可能隐藏恶意指令或安全漏洞。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2604.05333"
      },
      {
        "label": "代码",
        "href": "https://github.com/davidliuk/graph-of-skills"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2028146364282880663"
      }
    ],
    "citation": "Graph of Skills. https://arxiv.org/pdf/2604.05333",
    "figures": [
      {
        "src": "figures/skill-graph-of-skills-graph_of_skills_architecture_overview.png",
        "caption": "Graph of Skills 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-agentskillos",
    "page": "skill",
    "title": "AgentSkillOS：生态级的智能体技能组织、编排与基准",
    "shortTitle": "AgentSkillOS",
    "category": "skill-retrieval",
    "maturity": "growing",
    "score": 0.565,
    "year": 2026,
    "venue": "arXiv 2026-03",
    "authors": "Hao Li, Chunjiang Mu, Jianhao Chen, Siyue Ren, Zhiyao Cui, Yiqun Zhang",
    "methodFamily": "skill retrieval",
    "tags": [
      "recall",
      "skill retrieval",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.5,
      "reproducibility": 0.53,
      "adoption": 0.45,
      "selfEvolution": 0.83
    },
    "summary": "两阶段框架：先用能力树递归归类组织技能便于发现，再通过 DAG 管线检索、编排并执行多个技能。",
    "methodCore": "## 能力树构建：层次化技能组织与增量管理\n系统从根节点出发，采用广度优先策略逐层递归划分技能集。每层划分分两步：\nGroup Discovery：由 LLM 生成类别分组（名称+描述）；Skill Assignment：由 LLM 将各技能分配至最匹配类别。解耦两步骤可显著降低遗漏概率。\n根节点使用五个人工固定类别（内容创作、数据处理、软件开发、自动化、领域特定）保证顶层稳定。单技能类别直接合并至兄弟节点，未分配技能触发重试或兜底入最大类别。超大规模（超过阈值 K）时启用使用频率队列（按安装量排序）只取 Top-K 建树，其余进入休眠索引（向量语义检索，按需唤醒）。新技能加入支持增量更新——从根节点逐层分配至叶节点后，自底向上刷新路径节点描述。\n## 任务驱动技能检索：树遍历 + 向量补充 + 修剪排序\nLLM 从能力树根节点出发，逐层选择相关类别子节点直至叶节点，所有触及叶子构成候选技能集。树内未覆盖技能通过向量相似度搜索从休眠索引中补充。候选集经过去重、按任务相关性排序、丢弃无关项，最终保留 Top-M（实验中 M=8）的紧凑列表。用户可在此基础上手动增选私有技能。\n## DAG 技能编排与分层执行\n确定技能集后，LLM 将用户任务拆解为子任务、分配对应技能、明确子任务间依赖关系，产出一个有向无环图（DAG）。提供三种编排策略：\nQuality-First 最大化质量（最深、节点最多、依赖最密）；Efficiency-First 最大化并行度（宽而浅）；Simplicity-First 只保留必需节点（最紧凑）。执行时同层节点并行、跨层按依赖顺序串行。每个节点的执行 Prompt 包含任务描述、技能调用、上游制品、期望输出和下游消费方式。支持编排复用——相似任务可直接复用历史 DAG 方案。\n## 主要能力\n大规模技能生态系统组织：将 28 万+技能层次化组织为能力树，支持从粗到细的逐级定位；DAG 多技能协同编排：三种编排策略（质量/效率/简洁优先）产生拓扑结构根本不同的执行方案；增量树更新：新技能加入无需重建整棵树，沿路径插入并自底向上更新；使用频率队列 + 休眠索引：平衡树规模与覆盖度，高频技能进树，低频技能按需唤醒；编排方案复用：基于任务向量相似度匹配历史 DAG，跳过检索与编排阶段。\n## 研究背景与贡献\nAgentSkillOS 面向 Claude agent skills 快速增长带来的生态利用、管理与扩展难题,提出首个系统化的技能选择、编排与生态级管理框架。框架含两阶段:(i) Manage Skills——通过节点级递归归类(node-level recursive categorization)将技能组织为能力树(capability tree),以支持高效发现;(ii) Solve Tasks——基于 DAG 管线(DAG-based pipelines)检索、编排并执行多个技能。为评估智能体调用技能的能力,作者构建了含 30 个产物丰富(artifact-rich)任务的基准,覆盖数据计算、文档创建、动态视频、视觉设计与网页交互五类。任务输出质量用基于 LLM 的成对评估(pairwise evaluation),并经 Bradley-Terry 模型聚合为统一质量分。整体强调结构化组合是释放技能潜力的关键。",
    "evaluation": "在 200 至 200K 三种技能生态规模上的实验表明:基于树的检索能有效逼近 oracle(理想)技能选择;在给定相同技能集时,基于 DAG 的编排也显著优于原生扁平调用。结果确认结构化组合是释放技能潜力的关键。代码已开源于 GitHub。",
    "mainFinding": "能力树检索可逼近理想技能选择,DAG 编排在同一技能集下显著超越扁平调用,证明结构化组合而非单纯堆量是关键,并在 200–200K 规模上得到验证。",
    "limitations": "评估基准仅 30 个任务、五类领域,规模偏小;质量依赖 LLM 成对评估,可能引入评判偏差;能力树构建对递归归类质量较敏感。技能依赖预收集状态：框架假定技能已采集就绪，未覆盖从开放来源持续发现与自动采集新技能的流程。缺乏自动化质量控制：未内置技能质量的自动评估和筛选机制，对低质量或恶意技能的治理尚无方案。LLM 驱动的分类一致性：能力树构建依赖 LLM 的 Group Discovery 和 Skill Assignment，大规模下分类一致性和稳定性未充分验证。仅 30 任务基准：自建基准规模有限，五大类别各仅 6 个任务，泛化性有待更大规模验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2603.02176"
      },
      {
        "label": "代码",
        "href": "https://github.com/ynulihao/AgentSkillOS"
      }
    ],
    "citation": "AgentSkillOS. https://arxiv.org/abs/2603.02176",
    "figures": [
      {
        "src": "figures/skill-agentskillos-agentskillos_architecture_overview.png",
        "caption": "AgentSkillOS 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillnet",
    "page": "skill",
    "title": "SkillNet：创建、评估与连接 AI 技能",
    "shortTitle": "SkillNet",
    "category": "skill-retrieval",
    "maturity": "growing",
    "score": 0.58,
    "year": 2026,
    "venue": "arXiv 2026-02",
    "authors": "",
    "methodFamily": "skill retrieval",
    "tags": [
      "recall",
      "skill retrieval",
      "active"
    ],
    "scores": {
      "clarity": 0.7,
      "evidence": 0.65,
      "reproducibility": 0.58,
      "adoption": 0.6,
      "selfEvolution": 0.58
    },
    "summary": "统一本体组织技能，支持从异构来源创建、建立关联并做安全性/完整性/可执行性/可维护性/成本五维评估的开放基础设施。",
    "methodCore": "SkillNet 不只是一个技能仓库，更像一个技能操作系统——创建管线自动化、评估体系多维度、本体论三层组织、分发集成闭环。\n四源自动化创建：从执行轨迹/对话日志、GitHub 开源仓库、半结构化文档（PDF/PPT/Word）、自然语言描述四种来源，用 LLM 驱动自动提取结构化技能。生成后经过去重、过滤、分类、打标签、多维评估，只有通过质检的才入库。\n五维质检体系：每个技能从安全性（有无危险操作、抗注入能力）、完备性（流程步骤是否完整、前置条件是否写清）、可执行性（沙箱里能否实际跑通、有无幻觉工具调用）、可维护性（模块化程度、局部修改是否影响全局）、成本意识（延迟、算力、API 费用）五个维度量化打分。评估由 GPT-5o-mini 自动完成，可执行性维度还会在沙箱里实际跑。人类专家盲评验证：所有维度 MAE < 0.03，QWK 接近满分 1.000。\n三层技能本体论：分类层按功能领域分类（开发/AIGC/科研/安全等），关系图层定义四种类型化关系（similar_to/compose_with/belong_to/depend_on），技能包层将相关技能打包成模块化集合（如 data-science-visualization、e2e-browser-testing）。关系图谱用语义嵌入做候选匹配再用 LLM 确认关系类型。\n闭环集成：与 OpenClaw 集成后形成三种自动行为——遇到复杂任务自动搜索 SkillNet 下载匹配技能、定期分析本地技能库生成多维评估报告、完成任务后主动将成功经验打包入库。\n## 主要能力\n全链条覆盖：从创建到评估到连接到分发，其他平台更像技能市场，SkillNet 更像技能操作系统；四源自动炼制让技能库可以持续自我演化，不只是静态仓库；五维评估的自动化结果与人类专家几乎无差别，为大规模技能质量管理提供了可落地的方案；三层本体论把孤立技能变成有类型关系的知识网络，检索不再是纯语义匹配而是图结构上的导航。\n## 研究背景与贡献\nSkillNet 针对当前智能体缺乏系统化技能积累与迁移、频繁「重造轮子」的问题,提出一个用于大规模创建、评估与组织 AI 技能的开放基础设施。其核心是将技能纳入统一本体(unified ontology):支持从异构来源创建技能、建立丰富的关系连接,并进行多维度评估,涵盖安全性(Safety)、完整性(Completeness)、可执行性(Executability)、可维护性(Maintainability)与成本感知(Cost-awareness)五个维度。基础设施整合了一个逾 20 万技能的仓库、一个交互平台与一个通用 Python 工具包。通过将技能形式化为可演化、可组合的资产,SkillNet 让智能体从一次性经验走向持久掌握,为技能巩固提供统一机制。",
    "evaluation": "在 ALFWorld、WebShop 与 ScienceWorld 上的实验表明,SkillNet 显著提升智能体性能:跨多个骨干模型平均奖励提升 40%,执行步数减少 30%。基础设施集成了超过 20 万条技能的仓库、一个交互平台与一个 Python 工具包,支撑技能的规模化创建、评估与组织。",
    "mainFinding": "以统一本体与五维评估形式化技能为可演化资产,跨三个基准平均奖励提升 40%、执行步数减少 30%,为技能积累与迁移提供了基础设施。",
    "limitations": "五维评估与本体构建依赖既定标准与人工/自动标注质量;20 万技能仓库的关系连接完整性与跨领域泛化仍需持续维护验证。私有领域和低频、高度隐性的能力很难被收录——自动创建管线能抓到的知识有限。自动生成技能的恶意\"投毒\"虽然能检测一部分但无法彻底防御。从自然语言需求到全自动 Agent 部署的端到端管线还没打通。60万技能规模说小不小，但和真正的 Web 级别知识库比还有数量级的差距。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2603.04448"
      },
      {
        "label": "代码",
        "href": "https://github.com/zjunlp/SkillNet"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2014393687812110022"
      },
      {
        "label": "官网",
        "href": "http://skillnet.openkg.cn/"
      }
    ],
    "citation": "SkillNet. https://arxiv.org/pdf/2603.04448",
    "figures": [
      {
        "src": "figures/skill-skillnet-skillnet_overview.png",
        "caption": "SkillNet 方法概览"
      },
      {
        "src": "figures/skill-skillnet-skillnet_architecture_overview.png",
        "caption": "SkillNet 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-grasp",
    "page": "skill",
    "title": "GraSP：面向 LLM 智能体的图结构化技能组合",
    "shortTitle": "GraSP",
    "category": "skill-retrieval",
    "maturity": "growing",
    "score": 0.52,
    "year": 2026,
    "venue": "arXiv 2026-04",
    "authors": "Tianle Xia, Lingxiang Hu, Yiding Sun, Ming Xu, Lan Xu, Siying Wang",
    "methodFamily": "skill retrieval",
    "tags": [
      "recall",
      "skill retrieval",
      "active"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.5,
      "reproducibility": 0.43,
      "adoption": 0.45,
      "selfEvolution": 0.73
    },
    "summary": "在检索与执行之间引入编译层，将扁平技能集编译为带前置-效果边的类型化 DAG，节点级校验并用五类算子做局部修复。",
    "methodCore": "GraSP 不换检索器、不改执行器，在检索和执行之间插入四个模块：\n双维度检索：在语义相似度之外乘上历史成功率 —— 这个技能过去好不好使，加权融合后每个技能附带置信度分数，执行中低于阈值就降级。\nDAG 编译：将检索到的技能列表转成类型化有向无环图。状态边传递前置条件（\"找到苹果\"是\"拿起苹果\"的前提），数据边传递输入输出（\"读文件\"→\"解析 JSON\"），顺序边绑定不可颠倒的步骤。编译器通过前置匹配、输入输出匹配、历史共现三条规则自动建边，并做循环检测。遵循最小执行集原则，无关技能全部剪掉。\n局部修复：节点执行失败不重跑整条链路，修复限定在失败节点的 $h$ 跳邻居（默认 $h=2$），已成功节点不动。五种算子：REBIND（改参数重试）、INSERTPREREQ（补前置步骤）、SUBSTITUTE（换等效技能）、REWIRE（修正边方向）、BYPASS（跳过已满足节点）。重规划成本从 $O(N)$ 压到 $O(d^h)$。\n置信度路由：技能置信度太低时自动退回 ReAct 模式走传统推理路径，作为安全兜底。\n## 主要能力\n语义相似度 × 历史成功率联合打分，每个技能附带置信度分数，解决\"看着相关但实际没用\"的问题；将扁平技能列表转成带状态边/数据边/顺序边的有向无环图，技能间的依赖关系被显式编码为图结构，不再靠 LLM 自己猜；遵循最小执行集原则，DAG 只保留和当前任务直接相关的技能，无关的全部剔除——技能库再大，塞给 Agent 的始终是精简后的子集；执行失败时只修受影响子图（h 跳邻居），已成功节点不动，重规划复杂度从 $O(N)$ 压到 $O(d^h)$。\n## 研究背景与贡献\nGraSP 针对近期基准发现的反常现象:给智能体更多技能并不单调提升性能——聚焦的 2-3 个技能反而胜过完备文档,过多技能甚至有害;瓶颈已从技能可得性转向技能编排。GraSP 提出首个可执行技能图架构,在技能检索与执行之间引入编译层(compilation layer):将扁平技能集转化为带前置-效果边(precondition-effect edges)的类型化有向无环图(typed DAG),以节点级校验(node-level verification)执行,并通过五类类型化算子(five typed operators)进行局部受限修复(locality-bounded repair),把重规划复杂度从 O(N) 降至 O(d^h)。该设计以显式因果依赖组织技能的选择、组合与执行,强调结构化编排而非扩大技能库。",
    "evaluation": "在 ALFWorld、ScienceWorld、WebShop 与 InterCode 上、跨八个 LLM 骨干,GraSP 在每一种配置下均优于 ReAct、Reflexion、ExpeL 与扁平技能基线:相对最强基线奖励最高提升 +19 分,环境步数最多削减 41%。其优势随任务复杂度增长,且对技能过度检索与质量退化均具鲁棒性。",
    "mainFinding": "结构化编排而非更大技能库是可靠执行的关键;GraSP 以类型化 DAG 与局部修复在四基准八骨干上全面领先,奖励最高 +19 分、步数最多减 41%,并随任务变难而增益扩大。",
    "limitations": "需将扁平技能编译为带前置-效果边的类型化 DAG,依赖依赖关系可准确抽取;五类算子的修复能力面对复杂或错误依赖时边界仍待考察。DAG 编译依赖技能文档里显式声明输入输出和前置条件，SKILL.md 写得不清楚时编出的图容易缺边。类型化边的三分类（State/Data/Sequential）在多步骤深度嵌套场景下可能不够用。论文在 SkillsBench（87 个任务）上验证，规模有限，大规模技能池下编译效率未测试。局部修复的 h 值（默认 2）是手工设的，不同任务可能需要不同半径。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2604.17870"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2030329792248202507"
      }
    ],
    "citation": "GraSP. https://arxiv.org/pdf/2604.17870",
    "figures": [
      {
        "src": "figures/skill-grasp-grasp_architecture_overview.png",
        "caption": "GraSP 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-goskills",
    "page": "skill",
    "title": "SkillRet：面向 LLM 智能体技能检索的大规模基准",
    "shortTitle": "GOSKILLS",
    "category": "skill-retrieval",
    "maturity": "growing",
    "score": 0.532,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "Hongcheol Cho, Ryangkyung Kang, Youngeun Kim",
    "methodFamily": "skill retrieval",
    "tags": [
      "recall",
      "skill retrieval",
      "active"
    ],
    "scores": {
      "clarity": 0.65,
      "evidence": 0.55,
      "reproducibility": 0.48,
      "adoption": 0.5,
      "selfEvolution": 0.63
    },
    "summary": "构建含 17,810 条公开技能、带结构化语义标签与两级分类法的大规模技能检索基准，揭示现有检索器在真实库上远未解决问题。",
    "methodCore": "核心决策：不给 Agent 看原子技能列表，而是看带有明确角色的技能组。离线建组图，在线走五步流水线。\n## 离线阶段：从技能图中挖技能组\n把技能库表示成带类型标签的技能图（依赖、工作流、语义、替代等边类型），从中提取锚点中心技能组，每个组包含一个锚点技能（执行入口）、至多两个支撑成员（各有明确角色：预处理器/解析器/格式化器/检查器/回退方案）、适用性标签、可见需求线索。再在组之间建一张组图（support/artifact/visible-check/fallback/incompatibility 边），作为推理时的检索基板。\n## 在线阶段：五步流水线\n查询模式提取（7 个维度描述任务）→ 锚点组选择（固定权重线性评分，跨任务跨模型同一套权重）→ 支持组扩展（贪心，最多 1 锚点 + 2 支持）→ 瓶颈化（精筛原子技能负载，控 token 预算）→ 覆盖回填 + 约定渲染。覆盖回填是最后一道保险：计算查询中必须覆盖的高置信度特征减去已呈现的，剩余债务显式回填，而不是静默丢弃。\n## 执行约定格式\nSTART（入口 + 负责技能）、SUPPORT（辅助技能 + 何时用）、CHECK（必须满足的可见条件）、AVOID（绝对不能做的事）。Agent 看到的是有先后顺序和角色标注的执行参考，不用自己从一堆技能描述里推断\"从哪开始、谁是辅助、哪些约束不能碰\"。\n## 主要能力\n检索单元从技能升级为技能组，交付物从\"你可以用这些技能\"变成\"你应该这样用这些技能\"；执行约定中的角色标签（锚点/支撑/检查/禁止）省掉了 Agent 从技能描述里反向推断调用顺序的整段推理开销；覆盖回填在 token 预算紧张时显式兜底关键技能——去掉后 must-hit 从 1.00 暴跌到 0.73；固定权重评分策略不依赖学习，跨任务跨模型一致，行为可预测——出问题时能定位到是被检索层还是执行层。\n## 研究背景与贡献\nSkillRet 针对技能检索这一被低估却关键的系统挑战:小库中用户可按名显式调用技能,但随生态在紧张的上下文与延迟预算下增长,该假设失效,而技能检索缺乏基准与对真实库检索行为的理解。为填补空白,作者构建大规模技能检索基准 SkillRet:含 17,810 条公开智能体技能,以结构化语义标签(structured semantic tags)与两级分类法(two-level taxonomy)组织,跨 6 大类与 18 子类;提供 63,259 个训练样本与 4,997 条评估查询,且技能池互不相交(disjoint),既支持基准评测也支持面向检索的训练。作者在多种检索器上评测,并通过 SkillRet 上的任务专属微调(task-specific fine-tuning)提升性能,分析指出增益源于微调模型能更好聚焦长而嘈杂查询中的少量技能相关信号。",
    "evaluation": "跨多种检索器的评测显示技能检索远未解决:现成模型在真实大规模技能库上表现挣扎,先前技能检索模型仍有大量提升空间。在 SkillRet 上的任务专属微调显著提升性能——NDCG@10 相比最强先前检索器提升 +13.1 分,相比最强现成检索器提升 +16.9 分。",
    "mainFinding": "技能检索远未解决,现成检索器在真实大规模库上表现不佳;SkillRet 上的专属微调可将 NDCG@10 提升 +13.1/+16.9 分,增益源于聚焦长噪查询中的技能信号。",
    "limitations": "基准规模约 1.8 万技能、6 大类,可能未覆盖更极端生态;微调增益依赖 SkillRet 训练分布,跨域迁移与真实用户查询下的稳健性仍需验证。不训模型、不改环境，库里没有的能力只能写进 DEBT，不能无中生有。依赖离线阶段的 metadata 质量——技能没有 tag、类型标注、文档时建群效果打折。长链条交互任务（如 ALFWorld）上提升幅度比 SkillsBench 小，需要的不只是\"知道从哪开始\"而是多轮动态决策。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.06978"
      },
      {
        "label": "代码",
        "href": "https://anonymous.4open.science/r/Group-of-Skills-E861"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2038336476589597585"
      }
    ],
    "citation": "GOSKILLS. https://arxiv.org/abs/2605.06978",
    "figures": [
      {
        "src": "figures/skill-goskills-goskills_architecture_overview.png",
        "caption": "GOSKILLS 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillgraph",
    "page": "skill",
    "title": "SkillGraph：面向 LLM 智能体工具序列推荐的图基础先验",
    "shortTitle": "SKILLGRAPH",
    "category": "skill-retrieval",
    "maturity": "growing",
    "score": 0.508,
    "year": 2026,
    "venue": "arXiv 2026-04",
    "authors": "",
    "methodFamily": "skill retrieval",
    "tags": [
      "recall",
      "skill retrieval",
      "active"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.5,
      "reproducibility": 0.43,
      "adoption": 0.45,
      "selfEvolution": 0.68
    },
    "summary": "从近5万条成功轨迹挖掘有向加权执行转移图作为可复用图基础先验，配 GS-Hybrid 检索与学习式成对重排器解决工具排序。",
    "methodCore": "三阶段闭环：从轨迹中蒸馏技能建图 → 图感知检索输出有序技能序列 → 每轮验证后图自行演化（节点+边调整）。图和策略互相推动——策略变强产生更丰富轨迹，轨迹精炼图，更好的图提供更精准的检索，加速策略学习。\n## 技能图骨架\n节点是技能（标题 + 核心原则 + 适用条件 + 运行时统计），边分三种，每个节点有拓扑层级，0 级是地基技能，高层级站在低层级肩膀上：\nPrerequisite：A 必须在 B 前，有向；Enhancement：通用技能增强特定技能效果，有向；Co-occurrence：成功轨迹里反复共现，对称。\n## 图感知检索\n种子选择（匹配当前任务的通用 + 特定技能）→ 后向 BFS（找回种子依赖的前置技能，最大深度 2）→ 前向 Beam Search（发现后续技能，束宽 3，扩展分数 = 前驱分数 × 边权重乘积）→ 拓扑排序输出有序序列（上限 8 个）。Agent 拿到的不是一堆技能名，而是从基础到高级、尊重前置条件的执行参考。\n## 图演化：节点级\n四种操作，插入（新失败模式催生新技能，最多 3 个）、合并（邻居 Jaccard ≥ 0.85 合并为一个）、拆分（使用 ≥ 10 次但成功率 15-40% 的拆成 2-3 个子技能）、废弃（使用 ≥ 20 次且成功率 < 15% 移除）。\n## 图演化：边级\n路径强化（成功轨迹走过的边权重 +0.05）、共现发现（≥ 2 次自动加边）、衰减剪枝（每 checkpoint 乘以 0.99，低于 0.05 移除）。每次边更新后重算节点层级。\n## 渐进式解锁\n初始只开放 0 级技能，前 5 步热身期不解锁。之后每个 checkpoint 检查当前最高活跃层级平均成功率，超过 0.6 就解锁下一层，可跨级连续解锁。\n## 主要能力\n图感知检索用拓扑排序输出有序技能序列，直接解决扁平检索\"给你四个技能但不说先执行谁\"的组合性规划问题——Clean、Heat 类严格顺序任务吃到最大收益；节点四种操作 + 边三种操作构成技能质量自循环：差的淘汰、泛的细分、重复的压缩、新的失败催生新技能；边权重沉淀了跨轨迹的集体经验——被反复验证的路径权重高，长期不用的自动衰减，比静态规则或单次启发式推断更健壮；7B 模型靠图结构组织反超大规模闭源模型，知识组织方式的差距可以部分弥补参数量的差距。\n## 研究背景与贡献\nSkillGraph 针对 LLM 智能体从大型 API 库中选工具并正确排序的问题:现有方法对检索与排序都用语义相似度,但排序依赖工具间的数据依赖,而这在工具描述中缺失,导致纯语义方法在结构化工作流域产生负的 Kendall-τ。作者从 49,831 条成功的 LLM 智能体轨迹中挖掘出一个有向加权的执行转移图(directed weighted execution-transition graph),将工作流先后规律编码为可复用的图基础先验(graph foundation prior)。基于该先验,提出两阶段解耦框架:GS-Hybrid 检索(GS-Hybrid retrieval)负责候选选取,学习式成对重排器(learned pairwise reranker)负责排序。该设计把工具选择与顺序决策分离,用图先验补足描述中缺失的先后依赖信号。",
    "evaluation": "在 ToolBench(9,965 个测试实例、约 16,000 个工具)上,方法达到 Set-F1 = 0.271、Kendall-τ = 0.096;在 API-Bank 上 Kendall-τ 从 -0.433 提升至 +0.613。在相同的第一阶段输入下,该学习式重排器也优于 LLaMA-3.1-8B 的第二阶段重排器。",
    "mainFinding": "工具排序依赖描述缺失的数据依赖,纯语义产生负 Kendall-τ;近5万轨迹挖掘的执行转移图先验将 API-Bank 的 Kendall-τ 从 -0.433 升至 +0.613。",
    "limitations": "图先验依赖大量成功轨迹挖掘,对新工具或稀有工作流的覆盖受历史数据限制;结构化工作流之外的领域收益如何仍需验证。强依赖教师模型（o3）做技能蒸馏和图演化，推理开销不低。技能图在单一环境内闭环——ALFWorld 训出来的图能不能给 WebShop 用，没有实验验证。只验证了 7B 规模（Qwen2.5-7B-Instruct），更大基座模型（70B+）上的表现未知。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2605.12039"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2041200150153000299"
      }
    ],
    "citation": "SKILLGRAPH. https://arxiv.org/pdf/2605.12039",
    "figures": [
      {
        "src": "figures/skill-skillgraph-skillgraph_overview.png",
        "caption": "SKILLGRAPH 方法概览"
      },
      {
        "src": "figures/skill-skillgraph-skillgraph_architecture_overview.png",
        "caption": "SKILLGRAPH 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillrae",
    "page": "skill",
    "title": "SkillRAE：面向检索增强执行的技能式上下文编译",
    "shortTitle": "SkillRAE",
    "category": "skill-retrieval",
    "maturity": "growing",
    "score": 0.482,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "",
    "methodFamily": "skill retrieval",
    "tags": [
      "recall",
      "skill retrieval",
      "research"
    ],
    "scores": {
      "clarity": 0.55,
      "evidence": 0.45,
      "reproducibility": 0.38,
      "adoption": 0.4,
      "selfEvolution": 0.73
    },
    "summary": "两阶段检索增强执行框架，离线构建技能社区-技能-子单元多级图，在线做技能排序检索与救援感知的紧凑编译。",
    "methodCore": "离线建一张三层技能图（社区-技能-子单元），在线双方向检索后用四步编译器把结果组织成可执行上下文。编译器是 advisory 的——只改 Agent 看到什么，不改执行逻辑，可叠加在任何现有检索器或执行器上。\n离线三层图：L2 技能社区（KMeans 聚类，一个社区的技能解决同一类问题）、L1 技能节点（保留为执行器兼容单位，不拆碎）、L0 子单元节点（过程性代码行/文件模式/约束说明，标准化去重后通过提取边连回源技能）。子单元跨技能共享，同一子单元可以属于多个技能。\n双方向检索：自上而下——任务请求和技能社区做 embedding 匹配，得分最高社区里的技能获得社区加分，保证领域一致性。自下而上——任务请求和子单元做匹配，将子单元证据反向投射到源技能上，投射得分考虑子单元区分度（被越少技能共享，区分度越高）。最终技能得分 = 技能相似度 + 子单元证据 + 名称匹配 + 社区加分。\n四步编译：Rescue（打捞落选技能中高相关但被淹没的子单元，预算 384 tokens）→ Affiliate Attachment（把救援子单元挂到已选技能上，不独立暴露，避免引入新执行单元）→ 任务特定指导生成（再筛一次，要求具体、对齐、不冗余）→ 组织上下文（按任务优先格式打包——先明确要干什么，然后列出用哪些技能、每个技能里的关键子单元是什么、跨技能补充提示）。\n## 主要能力\n编译层不改源技能、不改规划器、不改执行器，只改变 Agent 在执行前看到的信息组织形式，可叠加到任何现有系统上；三层图同时支持粗粒度社区路由和细粒度子单元证据聚合，两个方向的信号在检索时交叉验证；救援子单元机制打捞了因整技能落选而被埋没的关键局部信息——在技能选对的前提下靠更好的上下文编译又提了 3 个点；编译器是 advisory 而非 planner——不改变执行过程本身，只优化输入信息的组织结构，风险可控。\n## 研究背景与贡献\nSkillRAE 针对检索增强执行(Retrieval-Augmented Execution, RAE)中被忽视的一环:现有工作多聚焦优化技能检索与任务执行,却很少关注如何把选出的技能证据组织成紧凑、有据(grounded)、可直接使用的形式供下游执行器完成任务。SkillRAE 是聚焦技能式上下文编译(skill-based context compilation)的两阶段方法,含离线与在线阶段:离线索引阶段在技能社区(skill communities)、技能(skills)与可复用子单元(reusable subunits)三个层级上构建多级技能图(multi-level skill graph)捕获其关系;在线检索阶段先做技能排序检索并导出选定子单元证据,再施加救援感知的紧凑编译(rescue-aware compact compilation)恢复关键证据,把粗排技能集编译为任务专属、紧凑、有据且可即用的上下文。",
    "evaluation": "在两个公开基准上,SkillRAE 相较基线取得显著提升。例如在 SkillsBench 上相比 SOTA 方法提升 11.7%。消融研究进一步表明其上下文编译至关重要,而非简单的 prompt 附加,验证了「如何组织检索证据」这一环节对下游执行的独立贡献。",
    "mainFinding": "检索之后如何编译上下文同样关键;SkillRAE 通过多级技能图与救援感知紧凑编译,在 SkillsBench 上较 SOTA 提升 11.7%,消融证实编译而非简单拼接是核心。",
    "limitations": "需离线构建社区-技能-子单元三级图,依赖关系抽取质量;救援感知编译的超参与子单元切分粒度对不同任务的适配性仍需观察。强依赖 SKILL.md 中显式的过程性文本——步骤、文件约定、约束声明必须写清楚，黑盒工具或无文档代码中的知识编译器提取不到。作为 advisory 编译器，不保证 Agent 一定会正确使用编译后的上下文，也不负责运行时失败。目前只在 117 个任务（SkillsBench 87 + AgentSkillOS 30）上验证，技能社区的 KMeans 聚类对技能数量和质量敏感。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2605.10114"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2041215811801571918"
      }
    ],
    "citation": "SkillRAE. https://arxiv.org/pdf/2605.10114",
    "figures": [
      {
        "src": "figures/skill-skillrae-skillrae_overview.png",
        "caption": "SkillRAE 方法概览"
      },
      {
        "src": "figures/skill-skillrae-skillrae_architecture_overview.png",
        "caption": "SkillRAE 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillsvote",
    "page": "skill",
    "title": "SkillsVote:从收集、推荐到演化的智能体技能生命周期治理",
    "shortTitle": "SkillsVote",
    "category": "skill-retrieval",
    "maturity": "growing",
    "score": 0.59,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "",
    "methodFamily": "skill retrieval",
    "tags": [
      "recall",
      "skill retrieval",
      "open-source"
    ],
    "scores": {
      "clarity": 0.7,
      "evidence": 0.65,
      "reproducibility": 0.38,
      "adoption": 0.6,
      "selfEvolution": 0.78
    },
    "summary": "覆盖收集、推荐、归因、演化的技能生命周期治理框架，对百万级开源语料画像，执行后按证据门控只纳入成功的可复用发现。",
    "methodCore": "## 百万级技能画像：三个维度把静态文档变成有执行证据的行为档案\n对百万级技能逐一构建三维护画像：\n运行时需求画像：OS、写入权限、sudo、网络、API Key、MCP Server 依赖；质量画像：描述与脚本一致性、引用完整性、任务是明确可执行还是开放式模糊描述；可验证性画像：是否可客观判断\"确实成功了\"，环境可否在沙箱中复现。\n通过验证的技能额外获取一组合成测试任务（含标准任务描述、可复现环境和可执行验证器），真实跑 Agent 记录成功率、Token 消耗和执行轨迹。偏好驱动或需特殊硬件的技能保留画像但不强行塞评测。\n## Agentic Library Search：推荐不是检索，是搜索\n推荐阶段独立于任务执行。Agent 不解决任务，只做一件事：在结构化技能库里像程序员一样 grep、glob、read，浏览技能目录、按需打开 SKILL.md 和资源文件、判断哪些技能覆盖当前任务需求、哪些适配目标环境、哪些互补。输出不是 Top-K 排序列表，而是一套紧凑的技能暴露集 + 简洁的使用指南，告诉执行 Agent\"这三份技能相关，它们这样配合，注意环境要求\"。推荐记录同时作为后续归属的锚——执行后回溯检查推荐技能是否被实际使用、效果如何，下一次推荐的依据是上一轮真实的执行证据而非语义相似度。\n## 子任务级归属：三道归因决定技能是帮了忙还是添了乱\n将整条执行轨迹拆解为最细的语义完整子任务（有独立目标、有主要评估信号、最多关联一份技能上下文），每个子任务过三道归因：\n结果证据：成败来自客观环境反馈还是主观判断还是无明确信号；责任归属：成功归功于技能指导还是 Agent 自己探索还是 Agent 看了技能后自行纠正，失败归咎于技能写错还是环境故障还是评估信号问题；可复用增量：提取技能中真正影响执行的那部分知识，缺失的前置条件、错误的步骤顺序、遗漏的恢复模式，丢弃随机试错和任务特定硬编码。\n只有成功子任务、且归因为技能贡献、且提取出可复用增量，才允许提出进化建议。\n## 证据门控的受控进化：离线 + 在线双模式\nOffline Evolution 在历史任务数据上离线优化技能库，在 Terminal-Bench 2.0 上帮 GPT-5.2 提升 7.9 个百分点。Online Evolution 在测试时任务流中边跑边进化，在 SWE-Bench Pro 上提升 2.6 个百分点。治理过的技能库比原始社区技能库、比不加归属直接进化、比仅靠语义检索——都要好。\n## 主要能力\n百万级技能画像：168 万+ Skills 收录，三维画像（运行时/质量/可验证性）将静态文档转为执行证据档案；Agentic Library Search：Agent 主动搜索而非被动排序，输出紧凑暴露集 + 使用指南 + 编排建议，推荐依据随执行证据迭代；子任务级归属：三道归因（结果证据 → 责任归属 → 可复用增量），精确区分技能贡献和 Agent 自主探索，防止错误归因污染技能库；证据门控进化：只有通过归属三道检验的可复用发现才写入技能库，离线 + 在线双模式验证（+7.9 / +2.6）；一行命令接入：npx skills add，支持 Codex/Claude Code/OpenClaw 等主流客户端，Playground 可可视化推理轨迹。\n## 研究背景与贡献\nSkillsVote 针对开放技能生态中的冗余、参差、环境敏感与「无差别更新污染未来上下文」问题,提出覆盖收集、推荐、归因与演化的生命周期治理框架。它先对百万级开源语料(million-scale corpus)按环境需求、质量与可验证性画像,并为可验证技能合成任务。执行前,进行结构化技能文件夹上的智能体式库搜索(agentic library search)以暴露指导性上下文;执行后,把轨迹分解为技能关联的子任务,将结果归因(attributes)到技能引导执行、智能体探索、环境与结果信号四类因素,并仅接纳成功且可复用的发现进入证据门控更新(evidence-gated updates)。该设计实现两条互补路径:测试时对任务流的在线演化,以及通过冻结库(frozen libraries)的离线迁移。",
    "evaluation": "在 Terminal-Bench 2.0 与 SWE-Bench Pro 上的实验表明,SkillsVote 提升了智能体在高难度智能体编码基准上的表现。增益源于两条互补路径:测试时对任务流的在线演化,以及基于历史轨迹或精选开源技能构建的冻结库的离线迁移。",
    "mainFinding": "以证据门控更新治理技能全生命周期,只接纳成功可复用发现以防污染;在 Terminal-Bench 2.0 与 SWE-Bench Pro 上经在线演化与离线迁移双路径提升编码表现。",
    "limitations": "百万级语料画像与四因素归因流程较重,依赖任务合成与可验证性判定质量;证据门控阈值设置影响演化速度与库纯净度的平衡。画像构建依赖 GPT-5.4 强模型，成本极高（20 万美元+），普通团队难以复现。子任务级归属的拆分和归因目前依赖 LLM 判断，跨模型迁移的归属一致性未验证。推荐仍以 LLM 驱动为主，缺乏可解释的规则层，推荐结果的稳定性受模型版本影响。反馈闭环中的在线进化在复杂多任务场景下的大规模量化验证尚不充分。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2605.18401"
      },
      {
        "label": "产品网站",
        "href": "https://skills.vote"
      },
      {
        "label": "GitHub 仓库",
        "href": "https://github.com/MemTensor/skills-vote"
      },
      {
        "label": "SkillsVote 深度解析",
        "href": "https://blog.csdn.net/MemTensor/article/details/159996412"
      }
    ],
    "citation": "SkillsVote. https://arxiv.org/pdf/2605.18401",
    "figures": [
      {
        "src": "figures/skill-skillsvote-skillsvote_architecture_overview.png",
        "caption": "SkillsVote 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skill-rag",
    "page": "skill",
    "title": "Skill-RAG:基于隐状态探测与技能路由的失败态感知检索增强",
    "shortTitle": "Skill-RAG (SRA)",
    "category": "skill-retrieval",
    "maturity": "growing",
    "score": 0.595,
    "year": 2026,
    "venue": "arXiv 2026-04",
    "authors": "Kai Wei, Raymond Li, Xi Zhu, Zhaoqian Xue, Jiaojiao Han, Jingcheng Niu",
    "methodFamily": "skill retrieval",
    "tags": [
      "recall",
      "skill retrieval",
      "academic"
    ],
    "scores": {
      "clarity": 0.7,
      "evidence": 0.55,
      "reproducibility": 0.53,
      "adoption": 0.5,
      "selfEvolution": 0.78
    },
    "summary": "用轻量隐状态探针门控检索、prompt 式技能路由器诊断失败原因，在四种检索技能间选择以修正查询-证据错位。",
    "methodCore": "## SRA vs RAG：可执行能力检索 vs 陈述性知识检索\nRAG 检索的是陈述性知识（这段文字在说什么），评估标准是语义相似度。SRA 检索的是 可执行能力（这个技能能不能被 Agent 加载、理解和实际用于完成任务），评判标准是下游效用——检索到的技能有没有真的帮 Agent 变强。技能生态爆炸到百万级时，全量塞入上下文不可能也不该做——SRA 走的是按需检索路线，只在需要时加载相关技能。\n## 三阶段管道拆解：检索 → 融合 → 应用\nSRA 将技能使用全链路拆为三段：\n检索，从海量外部技能库中找到相关候选技能，测的是 Top-K 里有没有黄金技能；融合，Agent 看到候选列表后能不能识别并正确加载真正有用的那几份，测的是 $loaded ∩ gold / gold$；应用，加载了的技能能不能实际在推理和执行中被使用从而提升任务表现，测的是端到端成功率提升）。三个阶段任何一个出问题，整个链路就断了。检索到了但 Agent 没加载 = 没用。加载了但 Agent 不知道怎么用 = 还是没用。\n## 四个关键实验发现\n发现一：Agent 根本不知道什么时候该加载技能，同一模型在\"检索结果里有黄金技能\"和\"检索结果里全是噪音\"两种情况下，加载技能的概率几乎完全一样。发现二：Agent 加载技能的意愿跟任务是否真需要技能无关，Agent 自己能做的任务和必须靠外部技能的任务，加载概率差不多，完全缺乏\"需求感知\"。发现三：不同模型加载行为差异巨大但没有一致规律，更大的模型并不比小模型更理性，\"知道何时用技能\"这一判断能力与模型规模无单调关系。发现四：只要检索对了技能确实能帮到 Agent，这验证了 SRA 路线正确，当前瓶颈在 Agent 的融合和应用能力跟不上检索的进步。\n## 主要能力\n三阶段独立诊断：将\"Agent 用不好技能\"的模糊直觉拆解为检索、融合、应用三个可分别测量和定位的瓶颈；SRA-Bench 首个技能检索增强评测基准：5400 测试实例 + 636 手工黄金技能 + 2.6 万网络干扰技能，模拟真实嘈杂技能库场景；按需技能检索范式：替代全量上下文注入，RAG 处理知识检索 + SRA 处理能力检索形成双轮驱动。\n## 研究背景与贡献\nSkill-RAG 针对现有 RAG 把检索后失败当作「重试」信号而非「诊断」信号、未解决查询-证据结构性错位(alignment gap)的问题。作者观察到大量持续失败并非缺乏相关证据,而是查询与证据空间之间存在对齐鸿沟。框架耦合一个轻量隐状态探针(hidden-state prober)与一个基于 prompt 的技能路由器(skill router):探针在管线的两个阶段门控(gate)检索;一旦检测到失败态,技能路由器诊断底层原因,并在四种检索技能中择一以在下次生成前修正错位——查询改写(query rewriting)、问题分解(question decomposition)、证据聚焦(evidence focusing),以及针对真正不可解情形的退出技能(exit skill)。该设计将失败视为可归类(typed)现象而非单一整体,按类型对症下药。",
    "evaluation": "在多个开放域 QA 与复杂推理基准上,Skill-RAG 显著提升多轮检索后仍持续存在的难例准确率,在分布外(OOD)数据集上增益尤为明显。表征空间分析进一步显示所提技能占据结构化、可分离的失败态空间区域,支持查询-证据错位是「分类型」而非单一整体的观点。",
    "mainFinding": "持续检索失败多源于查询-证据对齐鸿沟而非证据缺失;用隐状态探针门控+技能路由器按类型选择四种修正技能,可显著提升难例与分布外准确率。",
    "limitations": "隐状态探针的可迁移性与门控阈值依赖具体模型;四种检索技能覆盖的失败类型有限,面对未归入分类法的失败模式可能失效。Agent 缺乏\"需求感知\"能力，即使检索到正确 Skill 也无法判断是否需要，融合阶段是当前最大瓶颈。评测基准仅覆盖有限领域，更多 Agentic 任务类型的泛化性待验证。无开源代码仓库。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2604.24594"
      },
      {
        "label": "代码",
        "href": "https://github.com/oneal2000/SR-Agents"
      },
      {
        "label": "官网",
        "href": "https://sr-agents.github.io/"
      },
      {
        "label": "Hugging Face",
        "href": "https://huggingface.co/datasets/WeihangSu/SRA-Bench"
      },
      {
        "label": "CSDN解读",
        "href": "https://blog.csdn.net/qq_73472828/article/details/160699171"
      }
    ],
    "citation": "Skill-RAG (SRA). https://arxiv.org/pdf/2604.24594",
    "figures": [
      {
        "src": "figures/skill-skill-rag-skill-rag_architecture_overview.png",
        "caption": "Skill-RAG (SRA) 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skilldag",
    "page": "skill",
    "title": "SkillDAG:面向大规模技能选择的自演化类型化技能图",
    "shortTitle": "SkillDAG",
    "category": "skill-retrieval",
    "maturity": "growing",
    "score": 0.43,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "",
    "methodFamily": "skill retrieval",
    "tags": [
      "recall",
      "skill retrieval",
      "research"
    ],
    "scores": {
      "clarity": 0.45,
      "evidence": 0.4,
      "reproducibility": 0.33,
      "adoption": 0.35,
      "selfEvolution": 0.73
    },
    "summary": "将技能间关系建模为类型化有向图并作为推理时可被智能体调用的结构化检索接口，执行中查询、扩展并用提交协议回写边。",
    "methodCore": "## 五类型有向边：建模相似度看不见的关系\nSkillDAG 用五类有向边替代模糊的\"相关\"概念：depends_on（A 需要 B 作前提）、specializes（D 是 A 的特化版本）、composes_with（组合使用效果更优）、similar_to（功能重复可互换）、conflicts_with（同时使用会失败）。同一对技能可有多条边。有向性让 Agent 能区分\"我需要你\"和\"你跟我很像\"——这两者在 Embedding 空间里几乎不可区分。\n## 冷启动建图：双视图 + LLM 分类器\n冷启动采用 两视图策略补全互补技能的盲区：\ne_self：视图对技能自我描述做 Embedding，捕获话题相近的技能；e_needs：视图让 LLM 想象调用场景并总结共享前置条件（如\"需要物品在手中\"），捕获功能互补的技能 —— 一份技能需要的东西恰好是另一份的产出。两张视图各自拉候选、过自适应阈值，再由 LLM 分类器分配边类型。conflicts_with 被有意留空：冲突只有执行后才能发现，留给在线演化阶段处理。\n## Agent 可调用的图检索接口：三分路信号\nAgent 调用 search(query, K, D) 一次获得三个独立字段，不融合排序：matches（Top-K 余弦相似技能）、neighbors（沿正向边 BFS 深度 D 遍历的邻居技能，带边类型标注）、conflicts（一跳冲突边）。Agent 自行决定取舍——上下文紧张时可丢弃 neighbors，需要全局视野时展开，并在推理 Trace 中记录选择理由。另有 show(skill) 按需加载技能完整内容，不提前占满上下文。\n## 在线演化：Agent 执行中写回图\nAgent 发现新关系后通过两步动作写回图：\npropose-edge：预览提交后果，展示同对技能的历史边和编辑记录；edit-edge：正式提交，附带自然语言理由和执行 Trace 证据。提交时强制执行 无环性（depends_on/specializes 不能成环）、非矛盾性（正向边和 conflicts_with 互斥）、可回滚性（追加日志可按时间或任务 ID 回滚）。一次 Agent 判决即提交，不需要投票或人工 curator。\n## 主要能力\n结构化技能检索：将技能间关系从隐式语义相似度提升为显式的五类有向边，Agent 依结构而非分数做技能选择决策；双视图冷启动建图：e_self 捕获话题相近、e_needs 捕获功能互补，补全单一 Embedding 视角的盲区；Agent-in-the-loop 图推理：图不是离线预处理步骤，而是 Agent 执行中随时可查、可展开、可编辑的活工具；抗规模衰减：技能池从 200 扩至 2000（10×），Ret@5 仅降 3.5 个点（78.2→74.7），typed-graph embedding 排序天然比 PageRank 扩散更抗膨胀；在线自演化：Agent 发现新关系当场写回图，图随使用次数增长而持续完善。\n## 研究背景与贡献\nSkillDAG 认为在大型技能库中选子集是结构问题而非相似度匹配:技能之间存在依赖、冲突、特化(specialize)、重复(duplicate)等关系,这一结构对全量枚举与嵌入相似度都不可见。SkillDAG 将技能间关系建模为类型化有向图(typed directed graph),作为推理时、可被智能体调用的结构化检索接口暴露——图在执行中被查询与演化,而非固化进固定检索管线。每次搜索返回向量匹配、类型化边邻居(typed-edge neighbors)与冲突信号(conflict signals);「先提议后提交」(propose-then-commit)协议让智能体注册由执行支撑的边,使图跨回合累积结构。增益可追溯到候选排序在池扩大时保持稳健,以及集合单调(set-monotone)的在线编辑扩大真值召回而不驱逐既有命中。",
    "evaluation": "在 ALFWorld 与 SkillsBench 上、使用 MiniMax-M2.7,SkillDAG 达到 67.1% 成功率与 27.3% 奖励,超过最强的 Graph-of-Skills 基线 +12.8 与 +8.6 分;优势可移植到 gpt-5.2-codex;匹配查询下 SkillsBench 内在 Ret@K 从 65.5 升至 78.2,且候选排序在池扩大 10 倍时仍稳健。",
    "mainFinding": "技能选择是结构问题;将类型化技能图作为可调用、可演化检索接口,SkillDAG 在 ALFWorld/SkillsBench 超越 GoS +12.8/+8.6 分。",
    "limitations": "执行支撑的边需在交互中逐步积累,冷启动阶段图结构稀疏;提交协议注册的边质量依赖执行反馈的可靠性,噪声反馈可能引入错误结构。单次观察驱动演化：propose-then-commit 允许基于一次执行证据就提交边编辑，长期积累下的质量退化、噪声边累积效应仍是开放问题。跨模型迁移未验证：图结构在不同主干模型间迁移后的行为变化未被研究，一条边在模型 A 下有效不代表在模型 B 下同样成立。冷启动分类依赖特定模型：配对边分类使用 gpt-5-nano，弱模型下分类稳定性和准确率未测试。评测范围局限于文本交互任务：主要在 ALFWorld 和 SkillsBench 上验证，五类边对更复杂语义关系的覆盖能力有限。",
    "related": [],
    "links": [
      {
        "label": "SkillDAG 论文",
        "href": "https://arxiv.org/pdf/2606.03056"
      },
      {
        "label": "SkillDAG 代码仓库",
        "href": "https://github.com/Ericbai06/SkillDAG"
      },
      {
        "label": "详细解析",
        "href": "https://zhuanlan.zhihu.com/p/2045562414347949707"
      }
    ],
    "citation": "SkillDAG. https://arxiv.org/pdf/2606.03056",
    "figures": [
      {
        "src": "figures/skill-skilldag-skilldag_overview.png",
        "caption": "SkillDAG 方法概览"
      },
      {
        "src": "figures/skill-skilldag-skilldag_architecture_overview.png",
        "caption": "SkillDAG 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillpyramid",
    "page": "skill",
    "title": "SkillPyramid:面向自演化智能体的层级化技能巩固框架",
    "shortTitle": "SKILLPYRAMID",
    "category": "skill-retrieval",
    "maturity": "exploring",
    "score": 0.367,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "",
    "methodFamily": "skill retrieval",
    "tags": [
      "recall",
      "skill retrieval",
      "research"
    ],
    "scores": {
      "clarity": 0.4,
      "evidence": 0.3,
      "reproducibility": 0.28,
      "adoption": 0.25,
      "selfEvolution": 0.68
    },
    "summary": "在层级技能拓扑上巩固技能，并引入自演化机制让智能体在执行中组合、验证并纳入新技能，把静态技能池转为动态演化系统。",
    "methodCore": "## Relation Analyzer：从粗到细的两阶段关系分析\nAnalyzer 采用 粗分组 → 细分析 策略，避免全库逐对扫描的噪音和成本:。\n粗分组阶段：仅看技能名称和简短描述，将功能相近、有潜在复用可能的技能归入同组；细分析阶段：打开每组内技能的完整内容，深入识别具体关系类型，输出结构化的 关系构建任务，指定哪些技能之间存在什么关系及其证据。\n两阶段设计让分析成本随技能库增长的曲线显著平缓于全对扫描。\n## Relation Builder：向下原子提取 + 向上抽象归纳\nBuilder 执行两种互补的结构化操作。\n向下原子提取：从一组技能中提取共享的最小可复用能力（如\"定位并获取目标物体\"），作为原子技能放入金字塔更低层，同时重写原始技能，在关键步骤显式引用原子技能。向上抽象归纳：从一组技能中提取共享的高层解题模式（如\"获取→处理→验证→放置\"），作为抽象技能放入金字塔更高层，提供可泛化的任务框架而非僵化步骤。两种操作共同将平铺技能库重建为有层级、有引用、有方向的图结构。\n## Skill Creator：框架构建 → 细节实例化的两步组合\n遇到新任务时，Skill Creator 不检索匹配技能，而是两步组合：先用抽象技能勾勒高层解题结构、子目标、决策点和成功标准（框架构建）；再用原子技能填充每一步的具体操作、输入检查和输出验证（细节实例化）。新技能每层都显式引用金字塔中的已有技能，只有真正新增的部分才从零生成。\n## Self-Evolution：增量更新，技能长回金字塔\n每次任务执行结束后，新生成的技能作为新节点 增量长回金字塔。Analyzer 仅检索与新技能相关的已有技能，Builder 仅构建新技能与它们的关联，无需重建整个结构。Builder 还会检查新技能是否能被已有原子或抽象技能覆盖，若能则不重复构建，天然防止冗余膨胀。\n## 主要能力\n层级化技能重构：向下提取共享原子能力、向上归纳抽象任务框架，将平铺技能库重建为可复用的金字塔结构；组合式新技能生成：遇到新任务时从抽象框架 + 原子操作中组合出新技能，无需从零探索或生成；跨任务经验迁移：原子技能被多个上层技能共享引用，\"找苹果\"和\"找土豆\"共享同一个\"获取目标物体\"原子；增量自演化：每次任务执行后将新技能增量长回金字塔，系统随使用次数增长持续扩展且防止冗余；结构抗退化：金字塔层级结构天然区分稳定底层和灵活高层，模型升级或环境变化时仅需更新受影响层。\n## 研究背景与贡献\nSkillPyramid 针对智能体长期改进受限于缺乏系统化技能构建、积累与迁移的问题:没有统一的技能巩固框架,智能体会在不同任务间冗余构建相似能力,无法把经验有效转化为可复用资产,也难以将任务专属技能泛化到新场景。SkillPyramid 是一个复用已有技能经验以实现更广泛任务泛化的技能巩固框架,运行于层级技能拓扑(hierarchical skill topology)之上,并进一步引入自演化机制(self-evolution mechanism),使智能体能在任务执行过程中组合(compose)、验证(validate)并纳入(incorporate)新技能。整体思路是向下做原子提取、向上做抽象归纳,将平铺技能库重构为可组合、可演化的层级金字塔,把技能集合从静态资源池转变为动态演化系统。",
    "evaluation": "在 ALFWorld、WebShop 与 ScienceWorld 上、跨四个骨干模型的实验表明,SkillPyramid 将平均奖励显著提升 38.0%,并将执行步数减少 27.7%。结果显示层级巩固与执行时的自演化机制协同,把静态技能池转变为可持续积累与泛化的动态系统。",
    "mainFinding": "在层级技能拓扑上做巩固并引入执行时组合-验证-纳入的自演化机制,跨三基准四骨干平均奖励提升 38.0%、步数减少 27.7%,把静态技能池转为动态演化系统。",
    "limitations": "层级拓扑的构建与维护依赖抽象归纳质量;自演化中新技能的验证标准若不严,可能引入低质或冗余技能,长期演化稳定性仍需更多验证。首次建塔需全库扫描：Analyzer-Builder 管道遍历整个技能库，论文未探索更轻量的冷启动构建策略。依赖强主干模型：Analyzer 和 Builder 都需要能理解技能语义、识别复用关系的大模型，弱模型下金字塔质量退化情况未被研究。评测局限文本交互环境：ALFWorld、ScienceWorld、WebShop 均为文本场景，多模态和具身环境未验证。关系类型有限：金字塔目前仅有向下原子提取和向上抽象归纳两种复用关系，时序依赖、因果关联等复杂组合推理未被建模。",
    "related": [],
    "links": [
      {
        "label": "SKILLPYRAMID 论文",
        "href": "https://arxiv.org/pdf/2606.03692"
      },
      {
        "label": "详细解析",
        "href": "https://zhuanlan.zhihu.com/p/2045818007985845760"
      }
    ],
    "citation": "SKILLPYRAMID. https://arxiv.org/pdf/2606.03692",
    "figures": [
      {
        "src": "figures/skill-skillpyramid-skillpyramid_overview.png",
        "caption": "SKILLPYRAMID 方法概览"
      },
      {
        "src": "figures/skill-skillpyramid-skillpyramid_architecture_overview.png",
        "caption": "SKILLPYRAMID 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skill1",
    "page": "skill",
    "title": "Skill1:通过强化学习统一进化技能增强型智能体",
    "shortTitle": "Skill1",
    "category": "skill-retrieval",
    "maturity": "growing",
    "score": 0.505,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "",
    "methodFamily": "skill retrieval",
    "tags": [
      "recall",
      "skill retrieval",
      "research"
    ],
    "scores": {
      "clarity": 0.55,
      "evidence": 0.4,
      "reproducibility": 0.43,
      "adoption": 0.35,
      "selfEvolution": 0.83
    },
    "summary": "训练单一策略在共享任务结果目标下协同进化技能选择、利用与蒸馏，用奖励的低频趋势记功选择、高频变化记功蒸馏。",
    "methodCore": "## 三阶段统一架构：选择→利用→蒸馏\nSkill1 将技能选择、技能利用、技能蒸馏全部塞入一个策略模型 $\\pi_\\theta$，按顺序跑三阶段：\n先由 $\\pi_\\theta$ 生成自然语言查询并重排序 Top-K 候选技能、选择工具最优；再条件化于所选技能与环境交互最多 T 步；最后从成功轨迹中蒸馏出新技能并写入库。选择过程的查询生成和重排序都可被梯度优化，而非冻结的检索器。\n## 单信号分拆：低频趋势 vs 高频变化\n系统只有一个二元环境奖励 $r(\\tau)$，但三项能力处于不同时间尺度：\n利用信用直接用任务结果；选择信用对每个候选技能维护 EMA 效用分（$\\alpha=0.05$），用 NDCG 衡量重排序质量；蒸馏信用计算 $r(\\tau)$ 与当前候选最佳效用 $\\hat{U}_i$ 的差值——正差代表新技能有增量价值，负差代表冗余。\n三项损失加权求和一次梯度更新。\n## 技能库淘汰策略\n只有 $r(\\tau)=1$ 时新技能才入库。库满时按 $U(s) \\cdot \\log n(s)$ 分数淘汰末尾——长期高效用且使用频繁的技能保留，低效用且无人问津的淘汰。库上限为 5000 条。\n## 主要能力\n统一信号驱动：选择、利用、蒸馏全部使用同一个任务结果奖励，无需为不同阶段设计不同奖励函数；变化驱动蒸馏：蒸馏奖励为任务结果减去库中最佳已有效用，迫使策略探索库未覆盖的更优策略，防止技能冗余；可优化选择：查询生成和重排序由 $\\pi_\\theta$ 产生，选择过程本身可被梯度优化，而非依赖冻结检索器；多样性保持：t-SNE 可视化验证高频技能覆盖更广的策略空间且分布均匀，变化驱动蒸馏主动填补未覆盖场景。\n## 研究背景与贡献\nSkill1 针对维护持久技能库所需的三项耦合能力——选择相关技能、执行中利用技能、从经验中蒸馏新技能——现有方法孤立优化或用分离奖励源,导致进化片面且相互冲突。Skill1 训练单一策略(single policy),在共享的任务结果目标(shared task-outcome objective)下协同进化(co-evolve)选择、利用与蒸馏三种能力。策略的推理流程为:生成查询以搜索技能库、对候选重排以选出一个、在其条件下求解任务、并从轨迹中蒸馏出新技能。全部学习都源自单一任务结果信号(single task-outcome signal):其低频趋势(low-frequency trend)记功于选择,高频变化(high-frequency variation)记功于蒸馏。该信号拆解设计让单一奖励同时驱动三能力的协同进化,避免多奖励源冲突。\n## 实验与要点\n在 ALFWorld 与 WebShop 上的实验表明,Skill1 优于先前基于技能与基于强化学习的基线。训练动态确认了选择、利用、蒸馏三种能力的协同进化,消融实验显示移除任一记功信号(低频或高频)都会退化整体进化,验证信号拆解设计的必要性。\n用单一任务结果信号的低频趋势与高频变化分别记功选择与蒸馏,可让单一策略协同进化技能选择、利用、蒸馏三能力,在 ALFWorld/WebShop 上超越先前基线。",
    "evaluation": "在 ALFWorld 与 WebShop 上的实验表明,Skill1 优于先前基于技能与基于强化学习的基线。训练动态确认了选择、利用、蒸馏三种能力的协同进化,消融实验显示移除任一记功信号(低频或高频)都会退化整体进化,验证信号拆解设计的必要性。",
    "mainFinding": "用单一任务结果信号的低频趋势与高频变化分别记功选择与蒸馏,可让单一策略协同进化技能选择、利用、蒸馏三能力,在 ALFWorld/WebShop 上超越先前基线。",
    "limitations": "仅在 ALFWorld 与 WebShop 两基准验证,规模有限;信号拆解(低频/高频记功)的鲁棒性与在更复杂长程任务上的可扩展性有待检验。环境覆盖窄：仅在 ALFWorld 和 WebShop 两个纯文本环境上验证，视觉输入和深度搜索等更复杂场景的迁移性未测试。库容量瓶颈：5000 条上限在当前任务上够用，任务种类大幅增加后淘汰策略和层级化组织需要进一步改进。计算开销：比不带技能库的 GRPO 慢 1.3~1.7 倍，主要来自库上下文增长；蒸馏起压缩作用，不开蒸馏时库膨胀速度为 Skill1 的 2.4 倍。",
    "related": [],
    "links": [
      {
        "label": "Skill1 论文",
        "href": "https://arxiv.org/pdf/2605.06130"
      },
      {
        "label": "Skill1 代码",
        "href": "https://github.com/AlphaLab-USTC/Skill1"
      }
    ],
    "citation": "Skill1. https://arxiv.org/pdf/2605.06130",
    "figures": [
      {
        "src": "figures/skill-skill1-skill1_architecture_overview.png",
        "caption": "Skill1 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-sap",
    "page": "skill",
    "title": "Skill-as-Pseudocode:将技能库重构为伪代码供 LLM 智能体使用",
    "shortTitle": "Skill-as-Pseud...",
    "category": "skill-retrieval",
    "maturity": "growing",
    "score": 0.515,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "",
    "methodFamily": "skill retrieval",
    "tags": [
      "recall",
      "skill retrieval",
      "research"
    ],
    "scores": {
      "clarity": 0.55,
      "evidence": 0.4,
      "reproducibility": 0.48,
      "adoption": 0.35,
      "selfEvolution": 0.83
    },
    "summary": "自动把自由散文的 markdown 技能库转为带类型伪代码合约，经四重确定性校验并内联具体动作模板，剪断散文到动作的死循环。",
    "methodCore": "## 五阶段转换流水线\nParser 按 Markdown 标题将技能散文拆为程序单元 → 对每个单元提取框架元组（动词、宾语、代码语言、脚本）并做单链聚类（故意保持高召回，假阳性由后续验证滤掉）→ 对每个聚类调用一次 LLM 产出类型化合约 κ（触发条件、I/O schema、前后置条件、副作用）→ 四重确定性校验 → 通过验证的合约写回父技能，对应段落替换为 invoke(κ, {arg=value}) 占位符。\n## 四重确定性校验——全部基于规则\nCoverage：合约是否覆盖原段落 Token。Binding：每个输入参数在原文中是否有对应绑定。Replacement：原段落结构上是否允许被 invoke 占位符替换。Risk：AST 扫描附带资源是否含危险调用（裸 rm -rf、未声明网络出口等），加权风险分 ≥ 0.80 直接驳回。\n四条检查各有过滤重点且近乎互斥，用 30 个合成负样本标定决策阈值，确保零假阳性。\n## 三层级运行时呈现\nAgent 拿到三合一套餐：\n具体动作模板：环境直接接受的动词和参数格式，先看；重写的父技能骨架：段落被 invoke 替换保留结构位置，再看；内联子合约：类型签名，需要时看。\n消融证明子合约作为独立检索条目浮出而非内联嵌入——得分反掉 27%——说明 Agent 需要的是\"在父技能上下文中被替换好的类型化信息\"而非多一个检索条目。\n## 主要能力\n命中率突破：82/402 配对比分 win GoS（47/402），输入 Token 减少 22.8%，LLM 调用次数减少 14.5%；\"散文→动作\"死循环的剪断：类型签名的\"what\"和动作模板的\"how\"分开提供，Agent 不再反复重新推导同一段散文；确定性质量保证：四重规则校验确保 LLM 生成的合约不偏离原文、不制造幻觉；与 SkillSmith 互补：SkillSmith 优化技能加载后的执行效率，SaP 优化技能被 Agent 读取时的格式。\n## 研究背景与贡献\nSkill-as-Pseudocode(SaP)针对 markdown 技能库以自由散文(free-form prose)形式发布、迫使智能体每次检索都重新推导输入模式与具体调用语法的问题。作者观察到这常产生「困惑→重检索→仍困惑」的死循环:智能体发出部分正确的动作、收到无信息量的环境反馈、再重检索同一散文。SaP 自动将 markdown 技能库转换为带类型伪代码(typed pseudocode)并施加确定性质量控制:对来自一个或多个技能的相似过程性段落聚类,为每簇抽取类型化合约(typed contract),并通过四重确定性校验器(coverage、binding、replacement、risk 四项检查)过滤;通过校验的合约连同复原的具体动作模板(concrete action templates)一起内联进重写后的技能骨架,从而给智能体两个互补信号:说明「技能做什么」的类型化签名,与说明「如何调用」的具体模板。",
    "evaluation": "在 134 局的 ALFWorld unseen 划分、使用 gpt-4o-mini、跨三个随机种子汇总,SaP 在配对对局中赢得 82/402,而 Graph-of-Skills(GoS)基线为 47/402(汇总 McNemar p = 8.2e-5),同时每局输入 token 减少 22.8±6.4%、LLM 调用减少 14.5±4.1%。",
    "mainFinding": "散文式技能迫使智能体反复重推调用语法形成死循环;编译为带类型伪代码合约+具体动作模板后,ALFWorld 上配对胜局 82 对 47 显著领先,并降低 token 与调用。",
    "limitations": "四重校验依赖过程性段落可聚类且可抽取类型合约,面对高度非结构化或强创造性技能可能难以转换;实验仅用 gpt-4o-mini 在 ALFWorld 验证,规模有限。依赖 Markdown 结构：Parser 按标题拆分，非结构化或格式混乱的技能散文效果存疑。ALFWorld 单一环境验证：仅在 ALFWorld 的 skills_500 库上测试，更多环境和技能库未经验证。子合约调用点约 30% 被过滤：Binding Extraction 后处理中约 30% 候选 invoke 调用点被剔除。",
    "related": [],
    "links": [
      {
        "label": "代码",
        "href": "https://github.com/InternLM/Skill-as-Pseudocode"
      },
      {
        "label": "SaP 论文",
        "href": "https://arxiv.org/pdf/2605.27955"
      }
    ],
    "citation": "Skill-as-Pseud.... https://github.com/InternLM/Skill-as-Pseudocode",
    "figures": [
      {
        "src": "figures/skill-sap-sap_architecture_overview.png",
        "caption": "Skill-as-Pseud... 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillsinjector",
    "page": "skill",
    "title": "SkillsInjector:面向 LLM 智能体的动态技能上下文构建",
    "shortTitle": "SkillsInjector",
    "category": "skill-retrieval",
    "maturity": "growing",
    "score": 0.455,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "",
    "methodFamily": "skill retrieval",
    "tags": [
      "recall",
      "skill retrieval",
      "research"
    ],
    "scores": {
      "clarity": 0.5,
      "evidence": 0.35,
      "reproducibility": 0.38,
      "adoption": 0.3,
      "selfEvolution": 0.78
    },
    "summary": "两阶段自适应方法：上下文规划器学执行接地的技能偏好并自适应准入数量，集合感知渲染器按共注入邻居定制技能描述。",
    "methodCore": "## Context Planner：学习预测执行效用而非语义相似度\n训练一个打分器 $f_\\theta(t, s)$，监督信号来自真实执行效用 $\\Delta(t, s)$——在同一个任务上有技能和没技能的表现差异。训练数据从任务池中采样 Agent 的实际执行结果，用所有候选技能的 leave-one-out 评测标注执行效用的真实值。语义匹配和执行效用之间的相关性极弱（τ2-bench 上一份语义高度匹配的技能执行效用为 -0.20，而四份语义中等匹配的技能执行效用为 +0.40），学出来的打分器能区分\"看着像\"和\"真有用\"。\n## 自适应预算：阈值截断而非固定 K\n每个任务的每份候选技能由打分器给出效用分，通过验证集上调出的阈值截断——超过阈值的全要、低于的全部不要。预算 $B_t$ 自然涌现不预设。简单任务可能只需要 1 条技能，复杂任务可能需要 6 条，每个任务拿到恰好它需要的数量。\n## Set-Aware Renderer：技能描述互感知重写\n当选中的技能超过 1 条时，Renderer 读取每条技能的原始描述、当前任务和其他同时注入的技能描述，产出改写后的描述——在原描述基础上区分边界（\"这条管这个，那条管那个\"）和减少重叠（\"两条都提到退款，但权限范围不同\"）。Renderer 被蒸馏为小模型，每次 Agent 调用前仅推理一次。单条技能时直接跳过。\n## 主要能力\n执行效用驱动的技能选择：学会预测\"真的帮到 Agent\"而非\"文本看起来像\"，打破语义匹配和执行效用之间的弱相关；任务自适应预算：每个任务按实际需要自动决定注入几条技能，不需人工预设 K；技能互感知描述：多条技能同时注入时改写描述区分边界、减少重叠，防止 Agent 被互相矛盾的描述搞混；轻量推理开销：Renderer 被蒸馏为小模型，每次调用仅推理一次。\n## 研究背景与贡献\nSkillsInjector 针对注入更多技能未必提升、甚至可能损害任务完成的问题,指出现有方法把技能注入当作静态步骤——用固定标准选技能、预先固定预算、且不改描述。作者主张暴露哪些技能、包含多少、如何呈现都影响下游表现,因此提出两阶段自适应方法联合处理这三项决策。第一阶段:上下文规划器(context planner)学习执行接地(execution-grounded)的技能偏好,并为每个任务准入自适应数量(adaptive number)的技能,以替代固定 Top-K。第二阶段:集合感知渲染器(set-aware renderer)相对于其共注入邻居(co-injected neighbors)定制被选描述的呈现方式,以凸显技能间的边界差异。该设计将「选哪些、选多少、怎么呈现」统一优化,直接优化注入的上下文本身。",
    "evaluation": "在 tau2-bench、SkillsBench 与 ALFWorld 上,SkillsInjector 取得最高分,相较最强基线分别提升 3.9、6.1、7.3 个百分点。消融研究表明技能选择、自适应预算与集合感知渲染各自都对增益有贡献。代码将在发表后释放。",
    "mainFinding": "技能注入不应静态处理;联合优化选择、自适应预算与集合感知渲染,SkillsInjector 在三基准上较最强基线分别提升 3.9/6.1/7.3 个百分点,三组件均有贡献。",
    "limitations": "上下文规划器需执行接地的偏好学习,依赖训练信号质量;集合感知渲染的重写可能引入描述失真,跨新技能集的泛化仍需观察。打分器训练依赖执行效用标注：需要为每份候选技能跑 leave-one-out 评测，初始训练成本较高。阈值敏感：自适应预算的阈值在验证集上调出，不同领域可能需要重新调。Rewriter 的质量不恒定：描述改写质量依赖蒸馏模型的原始能力，极端改写可能引入新的语义偏差。",
    "related": [],
    "links": [
      {
        "label": "SkillsInjector 论文",
        "href": "https://arxiv.org/pdf/2605.29794"
      }
    ],
    "citation": "SkillsInjector. https://arxiv.org/pdf/2605.29794",
    "figures": [
      {
        "src": "figures/skill-skillsinjector-skillsinjector_architecture_overview.png",
        "caption": "SkillsInjector 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-r3-skill",
    "page": "skill",
    "title": "R3-Skill:面向智能体技能路由的查询条件化基准与两阶段检索器",
    "shortTitle": "R3-Skill",
    "category": "skill-retrieval",
    "maturity": "mature",
    "score": 0.68,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "Zifei Wang, Wei Wen, Qiang Ji, Ruizhi Qiao, Xing Sun",
    "methodFamily": "skill retrieval",
    "tags": [
      "recall",
      "skill retrieval",
      "academic"
    ],
    "scores": {
      "clarity": 0.75,
      "evidence": 0.7,
      "reproducibility": 0.63,
      "adoption": 0.65,
      "selfEvolution": 0.83
    },
    "summary": "把通常被丢弃的 LLM 拒绝决策作为技能兼容性监督，构建双语基准 R3-Skill 并训练 R3-Embedding+R3-Reranker 两阶段检索器。",
    "methodCore": "## 形式化定义：将技能兼容性分解为可操作的检索因子\n给定查询 q 和目标技能集 S*，联合检索概率被分解为两个因子：每个技能独立被检索的相关性概率乘积 + 查询条件化的技能兼容性修正项 C(q, S*)。C≈1 恢复文档检索的独立性假设；C<1 表示技能集在查询下存在冲突（功能重叠、生态系统不兼容）；C>1 表示技能相互增强。C 是查询条件化的，同一对技能在不同查询下兼容性完全相反。 这个分解将文档检索与技能检索的本质差异锁定在 C 项上。\n## 数据构建：将 LLM 拒绝信号从废料变为兼容性监督\n现有技能合成管线中，LLM 判断一组技能\"不自然可组合\"就将样本丢弃。R3-Skill 反向保留这些 SKIP 注释，作为 C 的二进制监督信号。数据生成管道对每个技能组先做两阶段评估（CoT 推理→WRITE/SKIP 判定），WRITE 分支生成 6 种风格×4 语言方向的查询，SKIP 分支归档进入 8 类拒绝原因分类体系（domain_mismatch 占 45.9%，forced_chaining 占 33.9%）。训练/测试集在技能池级别完全不相交，测试集由多位专家交叉验证。\n## 两阶段检索：Bi-encoder 粗召回 + Cross-encoder 兼容性重排\nR3-Embedding（bi-encoder，Qwen3-Embedding-0.6B 微调）用多正例 InfoNCE 目标做粗召回，将 GT 中的同辈技能从分母中掩码掉避免互相排斥。R3-Reranker（cross-encoder）在候选池中施加三级兼容性标签：GT 技能=3，SKIP 伙伴=1，其他=0，用 graded ListNet 优化 C 条件化的排序。梯度分析证明 bi-encoder 下双边平衡使兼容性信号被稀释，而 cross-encoder 因其对每个 (q,s) 独立评分的能力可有效利用该信号。\n## 主要能力\n查询条件化技能兼容性被形式化定义并作为可训练监督信号，从机制上区分于文档检索；R3-Skill 是首个双语（中英）四方向技能检索基准，测试查询使用 LLM 改写逼近真实用户请求；8 类拒绝原因分类体系提供精细化的兼容性失败分析，揭示跨语言方向间拒绝模式的结构性差异；R3-Embedding + R3-Reranker 两阶段流水线在 R3-Skill 和 SkillRet 两个基准上全面超越现有技能检索器；Set-Compat 指标直接衡量整个 GT 技能集是否被同时检索到 top-m 位置。\n## 研究背景与贡献\nR3-Skill 指出技能检索不同于文档检索:Top-K 正确性不仅取决于每个查询-技能对的相关性,还取决于检索出的技能能否在该查询下协同工作,这种查询条件化的「技能兼容性」(skill compatibility)无法仅从独立相关性恢复。作者发现 LLM 合成管线本身已产出有用信号——LLM 自身的拒绝决策(rejection decisions),指明哪些技能在给定查询下不应被一起检索,但通常被当作低质数据丢弃。论文提出 Reject-as-Resource Retriever(R3),把这一被丢弃的拒绝信号保留并用作兼容性监督(compatibility supervision),并构建双语(中英)技能路由基准 R3-Skill。作者训练由 R3-Embedding 与 R3-Reranker 组成的两阶段检索器;梯度分析解释为何该查询条件化信号在双编码器目标下较弱,而交叉编码器可将其用作分级排序监督。",
    "evaluation": "R3-Skill 覆盖四个语言方向,含 10,246 条技能(归入 8 个主题超域)、41,592 条被接受查询与 32,828 条 LLM 拒绝标注(细分 8 类拒绝原因),测试集真值经多位专家验证。R3-Embedding + R3-Reranker 管线达到 Hit@1 = 0.7521、NDCG@10 = 0.8173、Set-Compat = 0.3188,数据与权重将开源。",
    "mainFinding": "技能检索需查询条件化的兼容性判断;将被丢弃的 LLM 拒绝决策转为兼容性监督,两阶段 R3 在 R3-Skill 达 Hit@1 0.7521、NDCG@10 0.8173。",
    "limitations": "拒绝信号在双编码器目标下监督较弱,主要靠交叉编码器利用;Set-Compat 仅 0.3188 显示兼容性建模仍有较大提升空间。SKIP 信号来自 LLM 判断而非真实 Agent 执行反馈，LLM 系统性偏差可能传播为兼容性标注偏差。当前训练/测试技能池故意不相交确保了评估严谨性，但可能低估零样本泛化到全新技能族的表现。8 类拒绝分类体系中 domain_mismatch 和 forced_chaining 占近 80%，细粒度类别的训练样本稀疏。中文用户查询虽经 6 种风格改写但仍然是 LLM 模拟的而非真实用户采集的。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.03565"
      }
    ],
    "citation": "R3-Skill. https://arxiv.org/abs/2606.03565",
    "figures": [
      {
        "src": "figures/skill-r3-skill-r3-skill_architecture_overview.png",
        "caption": "R3-Skill 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-xskill",
    "page": "skill",
    "title": "XSkill:跨形态技能发现",
    "shortTitle": "XSkill",
    "category": "skill-retrieval",
    "maturity": "mature",
    "score": 0.662,
    "year": 2023,
    "venue": "arXiv 2023-07",
    "authors": "",
    "methodFamily": "skill retrieval",
    "tags": [
      "recall",
      "skill retrieval",
      "active"
    ],
    "scores": {
      "clarity": 0.8,
      "evidence": 0.6,
      "reproducibility": 0.53,
      "adoption": 0.55,
      "selfEvolution": 0.88
    },
    "summary": "从无标注人类与机器人视频中发现跨形态技能原型，用条件扩散策略迁移为机器人动作，并组合完成人类提示视频指定的新任务。",
    "methodCore": "## 双流知识架构：Skill + Experience\n传统Agent只用Skill（结构化工作流），XSkill首次引入Experience（动作级战术洞察）作为互补知识流。Skill是\"怎么做\"的模板（步骤、工具调用序列），Experience是\"在这种具体情况下该怎么调整\"的上下文敏感记录。两者从同一轨迹中自动提取，互相增强：Skill提供结构化框架，Experience填补执行细节。\n## Phase I 积累：视觉接地轨迹提炼\n每批rollout后，XSkill通过三个步骤提炼知识：\n轨迹摘要（Trajectory Summary）：视觉接地的方式将Agent行为序列压缩为可复用知识条目，保留关键视觉线索而非纯文本描述；跨rollout批评（Cross-Rollout Critique）：比较多次执行结果，识别成功vs失败的关键差异，提取经验教训；层次化整合（Hierarchical Consolidation）：将零散经验整合为结构化Skill文档，消除冗余，保持知识库精简。\n## Phase II 推理：分解-检索-适配-注入\n对每个测试任务：\n任务分解：将复杂任务拆解为子目标；知识检索：从双流记忆库中检索相关Skill和Experience；视觉适配：将检索到的知识适配到当前视觉上下文（而非简单文本拼接）；Prompt注入：将适配后的知识注入系统提示词，引导Agent执行。\n## 关键设计\n零参数训练：所有知识以文档形式存储和检索，不修改模型权重；视觉接地：知识提取和适配均以视觉信息为锚点，适配多模态Agent场景；在线积累：随执行批次持续积累，知识库动态增长。\n## 主要能力\n双流协同进化：Skill库提供\"怎么做的模板\" + Experience库提供\"具体怎么调的经验\"，两者从同一轨迹自动提取互相增强；零样本跨任务迁移：在一个任务上积累的知识可直接迁移到新任务，平均性能提升11%；多模态benchmark验证：在VisualToolBench、TIR-Bench、MMSearch-Plus、AgentVista、MMBrowseComp五个benchmark上超越强基线。\n## 研究背景与贡献\nXSkill 针对直接从非结构化人类视频中提取可复用机器人操作技能的难题:巨大的形态差异(embodiment gap)与未观测的动作参数使迁移困难。XSkill 是一个模仿学习框架,分三步弥合形态鸿沟:1) 纯粹从无标注的人类与机器人操作视频中发现称为技能原型(skill prototypes)的跨形态表征(cross-embodiment representation);2) 通过条件扩散策略(conditional diffusion policy)将该技能表征迁移为机器人动作;3) 组合(compose)已学技能以完成由人类提示视频(human prompt video)指定的未见任务。整体形成一个更通用、可扩展的模仿学习框架,以跨形态技能原型为枢纽,支撑技能的迁移与组合。",
    "evaluation": "在仿真与真实世界环境中的实验均表明,所发现的跨形态技能原型能够同时促进对未见任务的技能迁移与技能组合,从而带来一个更加通用、也更可扩展的模仿学习框架体系。论文摘要未给出具体的量化指标数值,基准、代码与定性结果见项目主页,具体数值需查阅原文。",
    "mainFinding": "从无标注人类与机器人视频中发现跨形态技能原型,配合条件扩散策略即可迁移为机器人动作并组合完成人类视频指定的未见任务,弥合形态鸿沟。",
    "limitations": "依赖无标注人类与机器人视频作为数据源,技能原型的质量受视频多样性影响;未见任务的组合能力在更复杂或长程操作上的可扩展性仍需验证。知识提取依赖高质量轨迹，失败轨迹过多时会引入噪声Experience。视觉接地机制需要多模态LLM支持，对纯文本Agent场景适配性待验证。记忆库规模增长后的检索效率问题未深入讨论。",
    "related": [],
    "links": [
      {
        "label": "论文 (arXiv:2603.12056)",
        "href": "https://arxiv.org/abs/2603.12056"
      },
      {
        "label": "代码 (GitHub)",
        "href": "https://github.com/XSkill-Agent/XSkill"
      },
      {
        "label": "项目主页",
        "href": "https://xskill-agent.github.io/xskill_page/"
      },
      {
        "label": "Hugging Face",
        "href": "https://huggingface.co/papers/2603.12056"
      }
    ],
    "citation": "XSkill. https://arxiv.org/abs/2603.12056"
  },
  {
    "id": "skill-source-skilljuror",
    "page": "skill",
    "title": "SkillJuror:度量智能体技能组织如何改变运行时行为",
    "shortTitle": "SkillJuror",
    "category": "skill-retrieval",
    "maturity": "growing",
    "score": 0.515,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "",
    "methodFamily": "skill retrieval",
    "tags": [
      "recall",
      "skill retrieval",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.5,
      "reproducibility": 0.53,
      "adoption": 0.45,
      "selfEvolution": 0.63
    },
    "summary": "把技能组织方式作为独立实验变量，通过语义受控变体与匹配多试验比较渐进式披露与扁平基线，发现结构先改行为再改结果。",
    "methodCore": "## 构造性控制实验设计：串行生成链条确保归因可靠\n先创建一个扁平 Baseline：将源技能中所有功能性内容压平到一个文件里。再从这个 Baseline 出发，把同样内容按结构拆分成轻量入口+多个按需加载的参考文件组成渐进式展开（PD）变体。PD 不是从原始源技能独立写出的：它是对 Baseline 的约束式重组。串行生成链条保证两组变体知识内容完全相同，让\"差异来自结构而非内容\"的归因牢固。82 个 SkillsBench 任务，每个任务跑 5 轮，总计 1,230 次试验，基座模型固定为 GPT-5.4。\n## 三层验证关卡 + 运行时控制\n构造完成的变体通过三层检查才进入执行评估：\n确定性门控程序化检查目录布局、文件路径、资源可达性和行为单元 diff；基于 Rubric 的语义审计自动扫描变体是否保留了任务范围、执行约束、输入输出约定；人工审核覆盖处理验证异常。运行时控制方面，所有任务-范式组合在同一 Harbor 沙箱、同一 Agent harness、同一超参数下执行，唯一变量是暴露给 Agent 的技能产物。\n## 行为层与结果层的分离发现\n行为层差异是数量级的：Agent 每个轨迹平均触达的独立技能资源从 1.18 跳到 3.85，有效资源吸收事件从 1.33 跳到 3.92。结果层仅有 +4.1% 增益且分布不均：核心障碍是\"不知道怎么做\"的任务 PD 优势明显，核心障碍是\"做出来必须精确匹配规范\"的任务 PD 边际收益有限。两层的分离意味着只看 pass rate 会丢失完整的信号层。\n## 主要能力\n首次将技能组织方式确立为可隔离、可控制、可测量的独立实验变量；构造性控制实验设计（串行生成 + 三层验证 + 运行时固定）实现高归因置信度；揭示行为层与结果层分离：行为层系统性变化（资源触达 3.85×、有效吸收 3.92×）仅部分转化为 pass rate；提供对技能作者的直接指导：PD 不是普适最优，任务属性决定组织方式何时有用。\n## 研究背景与贡献\nSkillJuror 针对当前基准很少区分「技能说了什么」与「技能如何组织」的问题,通过渐进式披露(Progressive Disclosure)这一范式来研究——简洁的根文件按需指向支撑资源——并与归一化的扁平基线(normalized flat baseline)对比。SkillJuror 是一个通过语义受控变体(semantically controlled variants)、匹配多试验评估(matched multi-trial evaluations)与轨迹证据(trajectory evidence)来评估技能写作范式的框架,同时保持任务知识固定。其方法论核心是把技能组织方式作为独立可控变量,在保持内容不变的前提下度量组织对运行时搜索与应用行为的影响,从而分离「呈现方式」与「知识本身」的效应。",
    "evaluation": "在 82 任务的 SkillsBench 研究中,渐进式披露先改变运行时行为再改变聚合结果:每条轨迹触及的不同技能资源从 1.18 升至 3.85,有效采纳事件从 1.33 升至 3.92;在 410 组匹配试验中额外带来 17 次通过验证的试验(+4.1%)。收益依任务而定——当支撑资源指导实现、检查或修复时有帮助,但成功依赖精确输出规范、数值阈值或长产物生成流程时则较弱。",
    "mainFinding": "技能组织并非单纯呈现:渐进式披露先改变智能体搜索与应用行为(资源触及 1.18→3.85),再带来 +4.1% 的通过率提升,且收益是否显现取决于暴露资源对任务是否可操作。",
    "limitations": "pass/fail 聚合指标对组织变化不敏感,行为改变未必转化为结果;研究限于 82 任务的 SkillsBench,收益高度任务依赖,难以一概推广。仅测了 Baseline vs PD 一组对照，其他组织维度（按操作类型分区、按执行阶段分区、混合扁平与渐进）在框架射程内但未实验。有效资源吸收（ERU）的判定依赖 LLM Judge，对\"有效\"的定义在语义模糊边界上可能产生偏差。组织方式效果可能依赖基座模型能力：论文固定 GPT-5.4，不擅长自主导航文件系统的模型在 PD 下可能退化。82 个任务全部来自 SkillsBench，更广泛的技能生态中组织方式效应的泛化性待验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.11543"
      },
      {
        "label": "代码",
        "href": "https://github.com/zhiyuchen-ai/skill-juror"
      }
    ],
    "citation": "SkillJuror. https://arxiv.org/abs/2606.11543",
    "figures": [
      {
        "src": "figures/skill-skilljuror-skilljuror_architecture_overview.png",
        "caption": "SkillJuror 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillpager",
    "page": "skill",
    "title": "SkillPager:通过语义节点检索实现查询自适应的技能内导航",
    "shortTitle": "SkillPager",
    "category": "skill-retrieval",
    "maturity": "growing",
    "score": 0.477,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "",
    "methodFamily": "skill retrieval",
    "tags": [
      "recall",
      "skill retrieval",
      "research"
    ],
    "scores": {
      "clarity": 0.55,
      "evidence": 0.45,
      "reproducibility": 0.48,
      "adoption": 0.4,
      "selfEvolution": 0.63
    },
    "summary": "将技能内检索定义为独立问题，离线把 markdown 技能解析为类型化语义节点，在线用 MMR 做全局查询条件化节点选择。",
    "methodCore": "## 离线解析：六种语义类型节点 + 四类边\n一条自动流水线将原始 Markdown 技能文档拆分为六种语义类型节点：\nstep：可执行操作或指令；example：使用演示和代码片段；param：可配置参数；precondition：执行前约束；error_handling：失败恢复步骤；concept：定义性背景段落。\n前五种为可执行节点，concept 保留在候选池中但不可执行。同时自动推断四种边（sequence、semantic、reference、condition）构建节点图，但在线检索阶段完全不依赖这张图：离线管线对 395 个技能一次性解析后永久缓存，在线只需查询嵌入和 MMR 循环。\n## 在线检索：全局 MMR 不打图遍历\n给定查询 q 和缓存的节点集合，MMR 从空已选集开始，每次迭代选一个节点最大化 $λ·sim(e_q, e_n) - (1-λ)·max sim(e_s, e_n)$，$λ=0.7$。第一项把与查询最相关的节点前推，第二项把已有高相似替代品的节点后压。当最佳剩余候选 MMR 转负时提前终止。选中节点按原文原始顺序重排后拼成上下文。预算分两档：节点 ≤100 取 20 个，更大取 60 个：来自 k 扫描分析。\n## 放弃图遍历的关键决策\n实验中自动解析出的图稀疏且不可靠：执行关键节点之间经常未被连接。局部图遍历上下文充分性仅 66.73%，全局 MMR 达 78.89%，差 12.16 个百分点。在 MMR 结果上加一阶图扩张反而让充分性从 69.8% 降到 67.4%、节点膨胀、token 节省率缩水。结论是图对这个场景是噪音源而非信号源：一旦节点被正确按语义类型标注，扁平化全局 MMR 比任何局部图遍历方案都更准也更省 token。\n## 主要能力\n技能内检索：在已知该用哪个技能的前提下按查询挑出最小够用上下文，填补生态空白；六种语义类型节点离线解析：step/example/param/precondition/error_handling/concept，一条流水线一次性缓存；全局 MMR 检索：仅依赖查询嵌入和数值计算，在线阶段不调用 LLM，中位数查询嵌入约 498 token；concept 节点动态保留在候选池中，让 MMR 在查询级别自适应判断是否需要，优于静态一刀切删除。\n## 研究背景与贡献\nSkillPager 针对基于技能的 LLM 智能体日益依赖长过程性文档、而全文档提示浪费 token 并稀释执行关键信息的问题,将此设定形式化为技能内检索(intra-skill retrieval):目标是在给定查询下,从一个已知技能文档中选出最小、执行充分(execution-sufficient)的上下文。SkillPager 是两阶段框架:离线阶段把每个 Markdown 技能解析为类型化语义节点(typed semantic nodes,含六种语义类型);在线阶段利用最大边际相关性(Maximal Marginal Relevance, MMR)执行全局、查询条件化的节点选择(global query-conditioned node selection)。粒度消融表明,对原始定长分块施加同一检索算法虽能达到相近充分性,但 token 成本更高,说明效率增益源于类型化语义粒度而非检索算法本身。",
    "evaluation": "在 395 个技能、1,975 条查询的基准上,SkillPager 达到 78.89% 的 LLM 判定上下文充分性,而穷举全文档基线为 82.23%,同时将 prompt token 减少 47.04%。粒度消融显示对原始定长分块用同一算法可达 81.77% 的相近充分性,但 token 成本增加 28.81%。在基于图的基线中,SkillPager 以 12.16% 的优势领先最强基线。",
    "mainFinding": "技能内检索是独立的访问问题;用类型化语义节点+MMR 全局选择,SkillPager 以接近全文档的充分性(78.89% vs 82.23%)节省 47.04% token。",
    "limitations": "上下文充分性 78.89% 略低于全文档 82.23%,存在少量执行信息损失;六种语义节点解析依赖 markdown 结构规整,对格式混乱的技能适配性有限。离线解析对 395 个技能耗时 9.83 小时（4 并行 worker），大规模技能库的解析成本不可忽略。仅覆盖 Markdown 格式的技能文档，其他格式（YAML、JSON schema）的解析未验证。离线解析和节点类型标注依赖 LLM 调用，标注质量直接影响检索效果。概念节点动态保留虽优于静态删除，但概念内容何时有用的精确边界仍未解决。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.00822"
      }
    ],
    "citation": "SkillPager. https://arxiv.org/abs/2606.00822",
    "figures": [
      {
        "src": "figures/skill-skillpager-skillpager_architecture_overview.png",
        "caption": "SkillPager 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillweaver",
    "page": "skill",
    "title": "SkillWeaver:网页智能体通过发现与打磨技能实现自我提升",
    "shortTitle": "SkillWeaver",
    "category": "skill-retrieval",
    "maturity": "growing",
    "score": 0.545,
    "year": 2025,
    "venue": "arXiv 2025-04",
    "authors": "",
    "methodFamily": "skill retrieval",
    "tags": [
      "recall",
      "skill retrieval",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.5,
      "reproducibility": 0.43,
      "adoption": 0.45,
      "selfEvolution": 0.83
    },
    "summary": "以技能为中心的框架，让网页智能体自主发现技能、练习执行并把经验蒸馏为健壮 API，迭代扩充轻量即插即用的技能库。",
    "methodCore": "## 三段式组合路由框架\n给定复杂查询和2209个真实技能库：\n拆：decomposer（Qwen2.5-7B）拆成原子子任务序列，每个子任务恰好配一个技能；检：对每个子任务用双编码器+FAISS做语义检索，仅用技能元数据，CatR@10达69.0%；组：按技能间兼容性（I/O类型匹配、类别Jaccard、关键词共现）选最优组合形成DAG。\n## SAD：检索增强的分解反馈回路\n标准分解→检索top-15候选技能名→作为提示词喂回decomposer→重新分解。控制要点：\nSAD是粒度修正器而非词汇对齐器：修好了75个vanilla步数错误的查询，DA都正确的查询上CatR@1完全一致（$p = 0.97$）；直接告诉vanilla decomposer ground truth步数，DA飙到99.3%，CatR@1到39.8%，跟SAD的DA=1条件下几乎一样；Qwen2.5-14B过度分解更严重（平均4.72步），SAD同样压回。\n## COMPSKILLBENCH基准与迁移验证\n从公开MCP生态构建，300个组合式查询、2209个真实技能、24个类别，分Easy/Medium/Hard三级。迁移实验验证SAD非模板记忆：\n类别级留出：+35.6%相对DA提升；技能级留出：+23.2%；人类查询DA_±1：+66%。\n控制要点：上下文从88.4万token降到约1,160 token，降低99.9%。\n## 主要能力\n组合式技能路由：支持一个查询需要多个技能串行协同，不再局限于单选；瓶颈定位与精准攻击：DA条件分析揭示分解是瓶颈（DA=1时CatR@1从34.2%跳到41.2%），SAD集中解决；跨模型粒度修正：14B过度分解比7B更严重，SAD同样压回有效；上下文压缩：将2209技能暴露压到平均2.9个/子任务，token从88.4万降到约1,160；表征层可扩展：listwise reranker +10.3%、BGE-base +14.5%，gap在表征层不在架构层。\n## 研究背景与贡献\nSkillWeaver 针对自主网页智能体缺乏关键自我提升能力——难以做过程性知识抽象、技能精炼与技能组合——提出以技能为中心(skill-centric)的框架,让智能体通过自主合成可复用技能为 API 实现自我提升。给定一个新网站,智能体自主发现技能(discover skills)、执行以练习(execute for practice),并把练习经验蒸馏(distill)为健壮的 API。迭代探索持续扩充一个轻量、即插即用(plug-and-play)的 API 库,显著增强智能体能力。该框架借鉴人类通过环境探索、把经验层级抽象为可复用技能、并协作构建不断增长的技能库来自我提升的机制,将多样的网站交互打磨成可在不同网页智能体间无缝共享的 API。",
    "evaluation": "在 WebArena 与真实世界网站上的实验证明 SkillWeaver 的有效性,分别取得 31.8% 与 39.8% 的相对成功率提升。此外,强智能体合成的 API 可通过可迁移技能显著增强弱智能体,在 WebArena 上带来最高 54.3% 的提升。",
    "mainFinding": "网页智能体可自主发现技能、练习并蒸馏为可复用 API 实现自我提升,WebArena 与真实网站相对成功率提升 31.8%/39.8%,API 迁移给弱智能体最高提升 54.3%。",
    "limitations": "技能发现与练习需在真实网站上迭代探索,成本与安全性受限;蒸馏出的 API 健壮性依赖练习经验覆盖度,面对网站改版或长尾交互的稳定性仍需验证。CatR@1徘徊在37-41%，@10到@1的gap靠reranker或更强encoder收窄。组合阶段缺ground-truth兼容性标注，仅在30条pilot上验证执行可行性。实验全用Qwen2.5系列作decomposer，跨家族模型的分解行为差异没测。SAD增加一次LLM推理（Pass-2），7B上可控但更大模型的trade-off未量化。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.18051"
      }
    ],
    "citation": "SkillWeaver. https://arxiv.org/abs/2606.18051",
    "figures": [
      {
        "src": "figures/skill-skillweaver-skillweaver_architecture_overview.png",
        "caption": "SkillWeaver 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-progressive-disclosure",
    "page": "skill",
    "title": "渐进式披露",
    "shortTitle": "渐进式披露",
    "category": "skill-execution",
    "maturity": "mature",
    "score": 0.74,
    "year": 2026,
    "venue": "Agent Skills 生态实践",
    "authors": "Agent Skills 社区/工程实践",
    "methodFamily": "skill execution",
    "tags": [
      "execution",
      "skill execution",
      "active"
    ],
    "scores": {
      "clarity": 0.8,
      "evidence": 0.7,
      "reproducibility": 0.73,
      "adoption": 0.65,
      "selfEvolution": 0.93
    },
    "summary": "Anthropic Agent Skills 的核心加载机制:用文件夹结构封装能力,按需分层加载,把通用模型转化为专业智能体。",
    "methodCore": "## 技能文件夹结构：知识封装层\n每个 Skill 是一个标准化的文件夹，包含三部分：\nYAML 元数据：定义技能名称与触发条件；Markdown 指令：描述工作流程与最佳实践；脚本和参考资料：作为可执行资源。该结构将分散的领域知识收敛为可复用、可组合的模块单元，Agent 在沙盒虚拟机内通过文件系统直接访问这些内容。\n## 渐进式披露：上下文加载控制层\nSkills 加载分为三个级别：\n元数据在智体启动时始终预加载至系统提示词，仅占用极少 Token；指令文本仅在 Claude 判定技能相关时，通过 Bash 工具读取加载；脚本与资源仅在指令明确引用或执行需要时才被调用。这种\"用多少读多少\"的策略从根本上解决了上下文窗口膨胀问题。\n## 沙盒执行模型：代码隔离层\n脚本在沙盒虚拟机中执行，LLM 通过 Bash 运行脚本并仅接收输出结果，脚本代码本身不进入上下文窗口。这使得技能可捆绑任意数量的 API 文档、代码脚本和数据集，未调用内容不产生任何 Token 消耗，实现了知识与执行的解耦。\n> 核心链路：技能文件夹封装知识 → 元数据预加载触发匹配 → 指令按需注入上下文 → 脚本沙盒执行返回结果。\n## 主要能力\n按需文件访问：仅加载任务实际需要的文件，未被引用的文档保留在文件系统中且不占用 Token；高效脚本执行：脚本代码本身不进入上下文，仅输出结果消耗 Token，比动态生成代码更高效；无限制内容捆绑：技能可捆绑大量文档与数据，未使用内容不产生上下文浪费，理论上无容量上限；MCP 互补协作：Skill 提供\"如何使用工具\"的指令，MCP 提供\"连接工具\"的管道，两者可组合使用；开源模板生态：Anthropic 已开源十几个技能模板，覆盖 PDF 处理、品牌指南等常见场景。\n## 研究背景与贡献\n渐进式披露(Progressive Disclosure)是 Agent Skills 生态的基础加载范式。其核心在于:一个 Skill 以文件夹形式封装,入口 SKILL.md 的 YAML frontmatter 仅暴露 name 与 description 等极少元信息,常驻于系统上下文;当模型判断任务与该 Skill 相关时,才把正文指令加载进上下文;正文中引用的脚本、参考文档、模板等资源(references、scripts、assets)则进一步延后到真正需要时才读取或执行。由此形成“元信息 → 正文 → 附属资源”的三层按需展开结构。这一设计直接回应了长上下文成本与注意力稀释问题:无关能力不占用 token,模型无需在海量指令中做检索式定位,从而可挂载大量 Skill 而不拖累单次推理。它同时把知识组织权交还给文件系统,使 Skill 可像代码仓一样被复用、版本化与共享,是当下把“通用助手”改造为“专业智能体”的主流工程约定。",
    "evaluation": "作为工程约定而非实验方法,其价值在于以极低边际成本扩展智能体能力边界:适用于需要挂载大量领域技能、控制上下文预算、且希望技能可独立维护与分发的场景。典型用途包括企业内部工具封装、文档处理流水线、专业领域助手构建等。它降低了新增能力的接入门槛,让能力扩展从改代码退化为放文件。",
    "mainFinding": "把能力封装为可按需分层加载的文件夹结构,既控制上下文成本,又让智能体能力像代码一样被复用与共享,成为技能生态的地基。",
    "limitations": "加载判定依赖模型对 description 的理解,描述写得含糊会导致该加载时不加载;分层越深,资源引用与路径管理的复杂度越高。脚本安全风险：沙盒虚拟机中执行脚本存在恶意代码风险，如非法文件访问或破坏性指令，当前缺乏细粒度的权限控制机制。技能规模管理挑战：随着技能库增长，如何高效发现、检索和去重技能，并保证触发精度，仍是待解决问题。",
    "related": [],
    "links": [
      {
        "label": "Claude Agent Skills 官方文档",
        "href": "https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview"
      },
      {
        "label": "Anthropic 工程博客：Equipping Agents for the Real World with Agent Skills",
        "href": "https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills"
      },
      {
        "label": "Anthropic Skills 开源模板仓库",
        "href": "https://github.com/anthropics/skills/tree/main"
      }
    ],
    "citation": "渐进式披露. https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview",
    "figures": [
      {
        "src": "figures/skill-progressive-disclosure-claude-agent-skills_architecture_overview.png",
        "caption": "渐进式披露 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skvm",
    "page": "skill",
    "title": "SkVM",
    "shortTitle": "SkVM",
    "category": "skill-execution",
    "maturity": "growing",
    "score": 0.497,
    "year": 2026,
    "venue": "arXiv 2026-04",
    "authors": "",
    "methodFamily": "skill execution",
    "tags": [
      "execution",
      "skill execution",
      "research"
    ],
    "scores": {
      "clarity": 0.55,
      "evidence": 0.4,
      "reproducibility": 0.33,
      "adoption": 0.35,
      "selfEvolution": 0.88
    },
    "summary": "把 Skill 当代码、把 LLM 当异构处理器,提出一套编译+运行时系统,实现技能的跨模型跨框架可移植与高效执行。",
    "methodCore": "SkVM 架构分为两大模块：AOT 编译器（安装时运行）和运行时系统（执行时优化）。\n## AOT编译——三个编译阶段解决三类不匹配\n基于能力的编译：从 1.5 万个高下载量 Skills 中提炼出 26 个基础能力（代码生成、工具执行、流程遵循等），分不同等级。先给目标模型和运行环境跑基准测试量化每项能力水平，再分析 Skills 需要哪些能力及等级，计算差距后执行适配变换——差距小的\"补偿\"（如把相对路径换成绝对路径），差距大的\"替换\"（如 pandas 换成 SQL 实现）。环境绑定：将依赖检查从运行时提前到编译阶段。从 Skills 中提取所需的库、工具、服务，检查当前环境是否具备；缺失则生成安装脚本在 Skills 运行前自动执行，环境变化导致脚本失败时把错误信息作为上下文注入模型。并发提取：将 Skills 拆解为步骤并构建依赖关系图，分三级挖掘并行性——数据级并行（多个同类文件并行处理）、指令级并行（独立工具调用合并批量执行）、线程级并行（独立子任务交由子 Agent 并行执行）。当前框架不支持某类并行时自动回退到串行，保证兼容性。\n## 运行时JIT优化\n自适应重编译：记录执行情况，同一问题反复失败时自动将失败日志传给编译器重新优化，优化后效果更差则回退到先前版本。3 轮重编译后，14 类 Skills 中有 10 类达到满分。代码固化：识别 Skills 中重复出现的代码模板，将其转成可调用函数。编译时识别模板生成签名和参数 schema，运行时多次匹配后实例化为函数，后续执行直接提取参数调用，失败则回退到 LLM 生成。PDF 提取任务延迟从 10~15 秒降至 200 毫秒。\n## 主要能力\n能力补偿与适配变换：基于 26 个基础能力量化差距，自动补偿或替换不匹配的能力；依赖预检测与安装：编译阶段自动检查并生成安装脚本，避免运行时 Token 浪费；并发提取与代码固化：三级并行挖掘（最高 3.2 倍加速）+ 重复模板函数化（最高 50 倍加速）。\n## 研究背景与贡献\nSkVM 借鉴传统编译器思想,提出“技能即代码、LLM 即异构处理器”的类比:同一 Skill 在不同 agent 平台上常被当作原始上下文直接注入,导致跨模型行为不一致,损害可移植性与执行效率。作者分析了 118,000 个 Skill,把一个 Skill 的需求分解为一组原语能力(primitive capabilities),并度量每个“模型-框架”组合对这些原语的支持程度,形成能力画像(capability profiles)。基于此,SkVM 在编译期执行三项操作:基于能力的编译(capability-based compilation)、环境绑定(environment binding)与并发抽取(concurrency extraction);在运行期则采用 JIT 代码固化(code solidification)与自适应重编译(adaptive recompilation)做性能优化。整体形成一条从离线编译到在线运行的技能执行链路,使同一份技能能针对不同模型与框架被“编译”到合适形态,兼顾可移植与效率。",
    "evaluation": "在 8 个不同规模 LLM、3 个 agent 框架上评测,覆盖 SkillsBench 与代表性技能任务。结果显示 SkVM 显著提升了跨模型跨环境的任务完成率,同时 token 消耗最多降低 40%;性能上通过增强并行获得最高 3.2 倍加速,并借助代码固化实现 19-50 倍的延迟下降。",
    "mainFinding": "把编译器方法论迁移到技能执行:通过能力画像做编译期适配、运行期固化,一份技能可在异构模型与框架间既可移植又高效运行。",
    "limitations": "能力画像需为每个“模型-框架”组合预先度量,新组合的接入成本与画像时效性存疑;编译与固化带来的额外工程复杂度在小规模任务上未必划算。目前仍在研究阶段。对框架的并行能力支持有要求。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2604.03088"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2025167123694002595"
      }
    ],
    "citation": "SkVM. https://arxiv.org/pdf/2604.03088",
    "figures": [
      {
        "src": "figures/skill-skvm-skvm_architecture_overview.png",
        "caption": "SkVM 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-aip",
    "page": "skill",
    "title": "AIP (Agent Instruction Protocol)",
    "shortTitle": "AIP",
    "category": "skill-execution",
    "maturity": "growing",
    "score": 0.44,
    "year": 2026,
    "venue": "arXiv 2026",
    "authors": "Neo4j 团队",
    "methodFamily": "技能执行",
    "tags": [
      "execution",
      "技能执行"
    ],
    "scores": {
      "clarity": 0.7,
      "evidence": 0.6,
      "reproducibility": 0.53,
      "adoption": 0.55,
      "selfEvolution": 0.68
    },
    "summary": "AIP 将 Agent 技能从自由文本 Markdown 重构为一张有向执行图：节点是离散的操作步骤（确定性脚本或自然语言描述），边是带类型的输入输出数据流，整体由 schema 校验的 YAML 规范严格约束，让技能从。",
    "methodCore": "AIP 将 Agent 技能从自由文本 Markdown 重构为一张有向执行图：节点是离散的操作步骤，边是带类型的输入输出数据流，整体由 schema 校验的 YAML 规范严格约束，让技能从每次重读重理解变成按图执行、按节点调试、按类型审计。\n## 节点层：离散操作步骤的二元分类\n每个节点是不可再分的操作步骤，分为两类：\n确定性脚本节点承载可运行代码；自然语言节点仅用于需要判断或交互的环节。\n这种分类本身标记了哪些步骤已被工程化固定、哪些仍依赖 Agent 实时推理。\n## 边层：带类型的输入输出数据流\n节点间通过显式类型标注的边连接，步骤 A 输出文件路径、步骤 B 期望接收文件路径，这个约定写在边的类型标签上而非依赖 prompt 的自然语言约定。类型系统在编译期即可捕获数据流不匹配。\n## Schema 校验层：YAML 规范的严格约束\n整个图结构由 schema 校验的 YAML 规范约束，类型错误、字段缺失、结构不一致在编译阶段被捕获。这层校验是自由文本技能不具备的结构化质量保障。\n## 编译器层：meta-skill 的自动化转换\n编译器本身是一个 meta-skill，输入任意形式的人类编写材料，输出符合 AIP schema 的执行图。编译过程是质量门：源材料中的模糊之处必须被解析才能产生有效图，自由文本中隐式的内容在图结构中被迫显式化。\n## 主要能力\n将自由文本技能编译为类型化、schema 校验的有向执行图；支持节点级可寻址调试：故障可精确追踪到具体节点，修复不波及其他部分；支持全库结构化审计：按节点类型或拓扑模式对技能库进行图查询；支持基于图结构的技能检索：可按节点类型或拓扑模式检索，而非仅依赖语义匹配；为技能优化提供类型化、有边界的 RL 动作空间，有向图拓扑天然构成动作掩码。\n## 实验与要点\n工程价值在于把不透明的智能体执行过程转为可审阅、可回放的证据链,适用于调试复杂技能编排、排查误召回与冲突、复盘失败任务、以及向使用者解释智能体为何这样做。在多 Skill、长链路、高风险(如涉及文件写入或外部调用)的场景下,执行流图是保障可控性与可信度的基础设施。\n通过记录并可视化技能执行的完整调用链,把智能体行为从黑盒转为可审计、可回放的过程,是调试与复盘复杂技能编排的关键支撑。\n## 研究背景与贡献\nAIP 将 Agent 技能从自由文本 Markdown 重构为一张有向执行图：节点是离散的操作步骤（确定性脚本或自然语言描述），边是带类型的输入输出数据流，整体由 schema 校验的 YAML 规范严格约束，让技能从\"每次重读重理解\"变成按图执行、按节点调试、按类型审计。\n## 局限与边界\n目前仅为 spec 阶段，运行时协议尚未实现，论文将其列为 future work。实验规模有限（27 个任务），需在更大规模任务和更多模型上验证泛化性。编译器本身是 meta-skill，编译质量依赖底层 LLM 的推理能力。对于简单或篇幅较短的技能，图结构的工程开销可能超过收益。",
    "evaluation": "AIP 将 Agent 技能从自由文本 Markdown 重构为一张有向执行图：节点是离散的操作步骤（确定性脚本或自然语言描述），边是带类型的输入输出数据流，整体由 schema 校验的 YAML 规范严格约束，让技能从\"每次重读重理解\"变成按图执行、按节点调试、按类型审计。",
    "mainFinding": "AIP 将 Agent 技能从自由文本 Markdown 重构为一张有向执行图：节点是离散的操作步骤（确定性脚本或自然语言描述），边是带类型的输入输出数据流，整体由 schema 校验的 YAML 规范严格约束，让技能从\"每次重读重理解\"变成按图执行、按节点调试、按类型审计。",
    "limitations": "目前仅为 spec 阶段，运行时协议尚未实现，论文将其列为 future work。实验规模有限（27 个任务），需在更大规模任务和更多模型上验证泛化性。编译器本身是 meta-skill，编译质量依赖底层 LLM 的推理能力。对于简单或篇幅较短的技能，图结构的工程开销可能超过收益。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.04781"
      },
      {
        "label": "代码",
        "href": "https://github.com/zach-blumenfeld/aip"
      }
    ],
    "citation": "AIP. https://arxiv.org/abs/2606.04781",
    "figures": [
      {
        "src": "figures/skill-aip-aip_architecture_overview.png",
        "caption": "AIP 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-rsa",
    "page": "skill",
    "title": "RSA (Runtime Skill Audit)",
    "shortTitle": "RSA",
    "category": "skill-execution",
    "maturity": "growing",
    "score": 0.52,
    "year": 2026,
    "venue": "arXiv 2026",
    "authors": "约翰霍普金斯大学",
    "methodFamily": "技能执行",
    "tags": [
      "execution",
      "技能执行"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.55,
      "reproducibility": 0.43,
      "adoption": 0.5,
      "selfEvolution": 0.73
    },
    "summary": "RSA 将技能安全评估从静态产物分析搬到运行时行为审计：不是读代码猜意图，而是造一个有敏感资产的环境让技能真的执行，然后用执行 trace 中的系统调用、文件访问和网络请求链条来做判决。准确率 90.0%（比最优静态基线。",
    "methodCore": "## 风险剖析：不判断好坏，推断潜在风险接口\nRSA 先用 LLM 扫描技能产物，不通盘判断好坏，而是推断该技能可能调用哪些平台工具、以什么方式与 Agent 环境交互。然后将这些工具映射到预定义安全能力组：文件访问、shell 执行、Web 交互、知识/记忆读写、会话控制。这个映射告诉后续探测阶段：该技能的潜在风险接口在哪些地方，应该设计什么样的任务来触达这些接口。\n## 定向探测：造敏感环境让它真的跑\n根据风险剖析输出，RSA 为每份技能生成一组定向探测任务。任务设计把该技能的风险相关接口放在一个包含真实敏感资产的本地环境中（如文件管理类技能旁放 auth.json、config.yml），Agent 被提示完成一个看似普通的任务，执行在隔离沙箱中完成。\n## 基于 trace 证据的安全判决：行为链替代文本模式\nRSA 不依赖技能内容文本做判断，而是读执行 trace：系统调用日志、工具调用序列、文件访问记录、网络请求、进程生成。\n一份 trace 显示\"工具A → 读取auth.json → 工具B → 网络外发包含文件内容的消息\"被标记为恶意，不是因为\"看起来可疑\"，而是因为 trace 显示了从文件读取到网络外发的完整行为链条。自进化攻击下静态检测器一两轮后全面失效（检出率跌至个位数），RSA 在所有轮次中持续检出 19-20 个（共 20 个）：词可以换，行为换不了。\n## 主要能力\n运行时行为审计：用执行 trace（系统调用、工具调用、文件访问、网络请求）替代代码文本分析做安全判决；风险剖析驱动的定向探测生成：每个技能用自己的风险接口映射定制探测任务，而非通用测试集；对自进化攻击免疫：攻击者改写文本后静态检测器失效，但 RSA 依赖行为 trace 持续检出；准确率 90.0%（+13pp vs 最优静态基线），假阳性 8.0%（-4pp）。\n## 实验与要点\n工程价值在于把“自动执行第三方技能”的风险控制在可接受范围,适用于运行来源不完全可信的社区 Skill、涉及文件写入或外部网络的敏感操作、以及多租户或企业合规场景。它是技能生态从“个人自用”走向“开放共享”的必要安全基础设施,配合权限声明可实现执行前审计与执行中拦截。\n以最小权限沙箱约束技能可触达的文件、网络与系统资源,把不可信技能的潜在损害限制在隔离环境内,是安全自动执行第三方技能的前提。\n## 研究背景与贡献\nRSA 将技能安全评估从静态产物分析搬到运行时行为审计：不是读代码猜意图，而是造一个有敏感资产的环境让技能真的执行，然后用执行 trace 中的系统调用、文件访问和网络请求链条来做判决。准确率 90.0%（比最优静态基线高 13 个百分点），在自进化攻击下静态检测器全面失效而 RSA 持续检出 19-20 个（共 20 个）。",
    "evaluation": "RSA 将技能安全评估从静态产物分析搬到运行时行为审计：不是读代码猜意图，而是造一个有敏感资产的环境让技能真的执行，然后用执行 trace 中的系统调用、文件访问和网络请求链条来做判决。准确率 90.0%（比最优静态基线高 13 个百分点），在自进化攻击下静态检测器全面失效而 RSA 持续检出 19-20 个（共 20 个）。",
    "mainFinding": "RSA 将技能安全评估从静态产物分析搬到运行时行为审计：不是读代码猜意图，而是造一个有敏感资产的环境让技能真的执行，然后用执行 trace 中的系统调用、文件访问和网络请求链条来做判决。",
    "limitations": "风险接口推断受 LLM 能力约束：对动态拼接、间接引用等 LLM 无法推断的接口可能被错误标为非关键。探测未覆盖风险接口之间的交互组合：两个单独无害组合起来有害的情况不在当前探测范围内。沙箱环境的现实性有天然边界：真实部署中恶意技能可能利用沙箱无法预料的业务特定敏感资产类型触发外泄。每个技能需要定制探测任务并实际执行，评估成本高于静态扫描。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.11671"
      },
      {
        "label": "代码",
        "href": "https://github.com/tu-tuing/Runtime-Skill-Audit"
      }
    ],
    "citation": "RSA. https://arxiv.org/abs/2606.11671",
    "figures": [
      {
        "src": "figures/skill-rsa-rsa_architecture_overview.png",
        "caption": "RSA 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillreact",
    "page": "skill",
    "title": "SkillReact",
    "shortTitle": "SkillReact",
    "category": "skill-execution",
    "maturity": "growing",
    "score": 0.48,
    "year": 2026,
    "venue": "arXiv 2026",
    "authors": "CMU、佐治亚理工、格拉斯哥大学、Corespeed 联合研究",
    "methodFamily": "技能执行",
    "tags": [
      "execution",
      "技能执行"
    ],
    "scores": {
      "clarity": 0.5,
      "evidence": 0.45,
      "reproducibility": 0.38,
      "adoption": 0.4,
      "selfEvolution": 0.63
    },
    "summary": "SkillReact 揭示了 Agent 技能安全的结构性盲区：1,520 个 ClawHub 技能逐个扫描通过后，两两配对产生 21 万对组合，其中 22.25% 的并集触发禁止模式候选，经人类审计校准后约 18.2%。",
    "methodCore": "## 三层证据架构：从候选到确认的递推测量\n第一层：个体标记，单个技能自身满足禁止模式，与现有扫描方案一致。第二层：结构性组合风险候选，两个技能单独通过安全检查，但能力并集触发禁止模式，这是 SkillReact 真正的测量对象。第三层：模型实际发出的工具调用尝试。\n三层递推让测量边界干净：静态候选是 recall-oriented 上限，人类审计将过报量校准为真实风险率。\n## 静态基准：确定性组合分析框架\n从 ClawHub 采集 1,520 个技能，正则抽取器扫描每个技能的 SKILL.md 和附带代码，归入 8 种能力标签。869 个（57.2%）单独触发禁止模式后，剩余 651 个组成 211,575 个配对。对每对计算能力并集，匹配来自四个来源交叉精炼的 10 种禁止组合模式。47,075 对被标为候选（22.25%）。\n## 人类审计校准管线：双 LLM 标注 + 人类终判\n47,075 个候选对按 10 种模式分层抽样，每模式 20 单元组成 200 单元黄金集。每个单元先由 Claude Sonnet 4.6 和 OpenAI Codex CLI + gpt-5.5 独立标注。人类审计员填九字段表单做出终判。各模式真实率从 5% 到 45%，总体人口加权有效率为 18.2%（95% CI [11.3%, 27.4%]）。\n## 安装时组合检查器\n将测量框架打包为双模式安装时组合检查器，对每次安装操作报告集合级违规和配对级证据，耗时亚毫秒级。判定边界限制在 10 种禁止模式内，不声称覆盖全部风险，不替代运行时沙箱。\n## 主要能力\n确定性静态组合分析：对技能库所有配对计算能力并集，与 10 种禁止组合模式匹配；三层证据架构（个体标记→组合候选→模型行为）提供边界清晰的递推测量；双 LLM + 人类终判的审计管线，将过报量校准为可置信的真实风险率；安装时组合检查器：亚毫秒级，对每次安装报告集合级和配对级违规证据。\n## 实验与要点\n工程价值在于把多技能协作固化为可复用、可并行的流程,适用于稳定重复的复合任务(数据处理链、文档生产链、多阶段分析等)。相比每次让模型即兴编排,流水线提升了执行确定性与可维护性,并通过识别独立分支的并行调度压缩端到端时延,是技能规模化落地的组织形态。\n把多个技能按数据流与依赖显式编排成可复用流水线,并对独立分支并行调度,使多技能协作从即兴决策升级为确定、可维护、可加速的可组合系统。\n## 研究背景与贡献\nSkillReact 揭示了 Agent 技能安全的结构性盲区：1,520 个 ClawHub 技能逐个扫描通过后，两两配对产生 21 万对组合，其中 22.25% 的并集触发禁止模式候选，经人类审计校准后约 18.2% 被确认为真实组合风险：但现有的按个扫描安全实践在设计前提上就漏掉了所有这些。",
    "evaluation": "SkillReact 揭示了 Agent 技能安全的结构性盲区：1,520 个 ClawHub 技能逐个扫描通过后，两两配对产生 21 万对组合，其中 22.25% 的并集触发禁止模式候选，经人类审计校准后约 18.2% 被确认为真实组合风险：但现有的按个扫描安全实践在设计前提上就漏掉了所有这些。",
    "mainFinding": "SkillReact 揭示了 Agent 技能安全的结构性盲区：1,520 个 ClawHub 技能逐个扫描通过后，两两配对产生 21 万对组合，其中 22.25% 的并集触发禁止模式候选，经人类审计校准后约 18.2% 被确认为真实组合风险：但现有的按个扫描安全实践在设计前提上就漏掉了所有这些。",
    "limitations": "10 种禁止模式的分类体系不声称覆盖所有可能风险，新型攻击模式需持续更新。静态分析是 recall-oriented，过报率高（22.25%→18.2%），仍需人类审计过滤。组合风险利用率高度依赖宿主模型的危险门槛：同一组合在不同模型上表现截然不同。不替代运行时沙箱，仅覆盖安装时检查。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.00448"
      }
    ],
    "citation": "SkillReact. https://arxiv.org/abs/2606.00448",
    "figures": [
      {
        "src": "figures/skill-skillreact-skillreact_architecture_overview.png",
        "caption": "SkillReact 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-fileasstate",
    "page": "skill",
    "title": "File-as-State",
    "shortTitle": "File-as-State",
    "category": "skill-execution",
    "maturity": "exploring",
    "score": 0.375,
    "year": 2026,
    "venue": "Agent Skills 生态实践",
    "authors": "Agent Skills 社区/工程实践",
    "methodFamily": "skill execution",
    "tags": [
      "execution",
      "skill execution",
      "research"
    ],
    "scores": {
      "clarity": 0.4,
      "evidence": 0.35,
      "reproducibility": 0.38,
      "adoption": 0.3,
      "selfEvolution": 0.58
    },
    "summary": "以文件系统作为智能体的状态载体,用读写文件替代重型编排框架,实现轻量、透明、可续跑的自动化。",
    "methodCore": "File-as-State 由两个互补层面构成：\n## 四层文件系统执行架构\n编译层（TaskCompiler）：将自然语言任务转换为标准化 YAML 任务包，解析为可执行的步骤定义；编排层（DAGOrchestrator）：将任务包解析为 DAG 有向无环图，按依赖关系调度执行，支持循环与分支；执行层（AgentRunner）：调用 Agent 执行单步任务，将结果写入状态文件；状态层（File System）：每步执行结果以文件形式持久化，天然支持断点恢复。\n## AGFS 聚合文件系统\nAGFS将异构后端统一为文件系统接口，开发者可用 Rust、C 或任意语言编写新的文件系统实现，编译为 WebAssembly 后动态挂载。多 Agent 可通过 QueueFS 分发任务、S3FS 收集结果、标准 grep 等工具过滤——无需额外应用层。\n核心模式凝练为一行管道：cat context.txt | llm > output.txt && exec action.sh——LLM 能理解、人类能理解，秒级即可验证。\n## 主要能力\n文件即状态：所有中间状态、执行结果、调度信息均通过文件持久化，任务中断后从状态文件恢复，无需额外检查点机制；零重型框架依赖：不依赖 LangGraph、Temporal 等编排框架，Shell 脚本 + cron 即可实现生产级调度，任何能读写文件的 Agent 均可直接接入；异构后端统一文件接口：通过 AGFS 将数据库、消息队列、对象存储、流式数据等统一为文件系统，Agent 间通信和协作通过标准文件操作完成。\n## 研究背景与贡献\nFile-as-State(文件即状态)是一种轻量级智能体自动化理念:不引入重型的状态机或编排框架,而是把任务的中间状态、待办、产出直接落到文件系统里,让文件本身成为智能体的记忆与协作媒介。智能体每一步读取相关文件了解当前进度,执行后把新状态写回文件,下一步再基于文件继续——状态在磁盘上持久化,而非驻留于易失的上下文窗口。这一做法带来几点直接收益:其一,状态天然可续跑,任务中断后可从文件恢复;其二,人可随时打开文件审阅与修改,人机协作透明;其三,与渐进式披露的文件夹哲学一致,复用现有文件工具即可,无需专用运行时。它与 Skill Pipeline、执行流图形成呼应:流水线描述流程,文件承载流经的状态,执行流图追溯状态如何演变。本质上,它主张用“最小机制”——文件——承担原本需要框架承担的状态管理职责。\n## 实验与要点\n工程价值在于以极低复杂度获得可持久化、可续跑、人可审阅的智能体状态管理,适用于长时任务、需要人机交替介入、或希望避免框架锁定的轻量自动化场景。相比重型编排框架,它降低了搭建与调试门槛,让状态一目了然;代价是牺牲了框架提供的结构化保障,更依赖约定。\n把智能体状态外置到文件系统,用读写文件替代重型编排框架,以最小机制换来可持久化、可续跑、人可审阅的透明自动化。",
    "evaluation": "工程价值在于以极低复杂度获得可持久化、可续跑、人可审阅的智能体状态管理,适用于长时任务、需要人机交替介入、或希望避免框架锁定的轻量自动化场景。相比重型编排框架,它降低了搭建与调试门槛,让状态一目了然;代价是牺牲了框架提供的结构化保障,更依赖约定。",
    "mainFinding": "把智能体状态外置到文件系统,用读写文件替代重型编排框架,以最小机制换来可持久化、可续跑、人可审阅的透明自动化。",
    "limitations": "缺乏框架级的状态一致性与并发保护,复杂或高并发任务下易出现文件竞争与状态错乱;强依赖命名与目录约定,规模变大后管理成本上升。不适合需要强一致性的分布式多节点场景。文件系统 I/O 性能瓶颈在高并发下可能显现。尚无开源实现，仅有技术文章描述（AGFS 亦处于早期阶段，正在寻求贡献者）。传统文件系统缺乏结构化数据支持和原生消息传递能力，AGFS 需要为每种后端单独实现。缺乏成熟的状态版本管理和回滚机制。",
    "related": [],
    "links": [
      {
        "label": "2026 生产级 AI Agent 自动化",
        "href": "https://cloud.tencent.com/developer/article/2669589"
      },
      {
        "label": "File System as Meta Tool: AI Agent 基础设施新思路",
        "href": "https://blog.csdn.net/weixin_43749777/article/details/156836191"
      }
    ],
    "citation": "File-as-State. https://cloud.tencent.com/developer/article/2669589"
  },
  {
    "id": "skill-source-skillsmith",
    "page": "skill",
    "title": "SkillSmith",
    "shortTitle": "SkillSmith",
    "category": "skill-execution",
    "maturity": "growing",
    "score": 0.532,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "",
    "methodFamily": "skill execution",
    "tags": [
      "execution",
      "skill execution",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.45,
      "reproducibility": 0.43,
      "adoption": 0.4,
      "selfEvolution": 0.83
    },
    "summary": "边界优先的编译-运行时框架,把技能包离线编译成最小可执行接口,只在运行时按需取用相关组件。",
    "methodCore": "## 源码形态分类：四类技能分别降级\n编译前先判断技能的\"源码形态\"：\nworkflow 型（有序步骤、明确控制流）编译为带依赖关系的步骤级工作流图；dispatcher 型（打包脚本和 API 描述）编译为类型化可调用算子；reference 型（表格和示例为主）索引化按需检索；insufficient 型（内容模糊）不编译、退回使用原始文档。\n分类基于结构性特征（标题层级、有序列表、代码块等）并由 LLM 最终判定，保守优先级：workflow > dispatcher > reference > insufficient。\n## 边界合约：编译产物的声明式 ABI\n编译产物不是工作流 IR，而是一份声明式的边界合约，包含七个字段：边界类型 τ、可调用算子 O（含输入/输出 schema、底层绑定、源码引用）、输入/输出合约、风险标记 + 验证级别、动作策略 + 选择策略、以及无损降级胶囊 F——当编译产物无法处理当前请求时，完整保留原始技能内容，Agent 可回退到原始材料。\n## 带护栏的运行时状态机\nAgent 使用编译技能时渐进式披露：先看到紧凑的 run_{skill} 操作柄和边界摘要，详细内容不占持久 Prompt。每次调用走三路径：执行路径（算子直接执行返回证据）、指引路径（返回参考指引让 Agent 自主推理）、阻塞路径（合约判断超出能力返回降级提示）。编译是非破坏性的——任何时候可从合约回到原始技能。\n## 主要能力\nToken 减半：推理和 LLM 调用次数减少 43%，解决时间缩短 51%（约 2 倍加速），按 Token 计费的成本减少 57%；强模型编译、弱模型跑：用强模型编译的产物给弱模型执行，某些任务上的准确率反优于弱模型直接解读原始技能；非破坏性编译：降级胶囊完整保留原始技能，Agent 可在编译器产出不足时无损失回退；跨平台适用：SkillsBench 七个任务、三个 Agent 平台、四个模型规模上验证。\n## 研究背景与贡献\nSkillSmith 针对现有框架中技能被作为上下文指导整体注入推理循环所带来的两类冗余——无关上下文注入(irrelevant context injection)与重复的技能特定推理与规划(repeated skill-specific reasoning and planning)——提出一套边界优先(boundary-first)的编译-运行时框架。其核心是把技能包离线编译成最小可执行接口(minimal executable interfaces):从技能中抽取细粒度的操作边界(fine-grained operational boundaries),使智能体在运行时能够动态地只访问并执行真正相关的组件,从而最小化不必要的上下文注入与冗余推理开销。此外,该框架具备跨模型复用特性:由更强模型产出的编译产物(compiled artifacts)可被更小或更高效的运行时模型复用,在原始技能解释失败的情形下提升任务准确率。整体思路与传统“编译一次、按需执行”一致,把技能从被整段喂给模型的原始文本,转化为带明确边界、可精确取用的运行时接口。代码与数据已在 GitHub 的 AetherHeart-AI/Aeloon 开源。",
    "evaluation": "在 SkillsBench 基准上,相比使用原始技能(raw-skills),SkillSmith 将求解阶段 token 使用降低 57.44%、思考迭代次数降低 42.99%、求解时间降低 50.57%(即 2.02 倍加速),按 token 比例计的货币成本同样降低 57.44%;同时验证了强模型编译产物可被弱模型复用以提升准确率。",
    "mainFinding": "通过抽取技能的细粒度操作边界并离线编译为最小可执行接口,SkillSmith 大幅削减无关上下文与重复推理,显著降低 token、时间与成本,且编译产物可跨模型复用。",
    "limitations": "离线抽取操作边界的质量决定运行时收益,边界划分不当可能漏掉必要上下文;评测集中于 SkillsBench,在更开放或强依赖临场推理的技能上的适用性仍需验证。覆盖范围有限：当前仅测试 7 份 SkillsBench 技能，扩展到全量基准仍需更大规模验证。分类边界模糊：source-shape 分类器的四类划分在某些边界模糊技能上可能需要更细粒度。降级路径过度保守风险：如果合约策略过于保守，可能导致过多回退到原始材料。",
    "related": [],
    "links": [
      {
        "label": "代码",
        "href": "https://github.com/AetherHeart-AI/Aeloon"
      },
      {
        "label": "SkillSmith 论文",
        "href": "https://arxiv.org/pdf/2605.15215"
      }
    ],
    "citation": "SkillSmith. https://github.com/AetherHeart-AI/Aeloon",
    "figures": [
      {
        "src": "figures/skill-skillsmith-skillsmith_architecture_overview.png",
        "caption": "SkillSmith 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-notes2skills",
    "page": "skill",
    "title": "Notes2Skills",
    "shortTitle": "Notes2Skills",
    "category": "skill-execution",
    "maturity": "growing",
    "score": 0.502,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "",
    "methodFamily": "skill execution",
    "tags": [
      "execution",
      "skill execution",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.45,
      "reproducibility": 0.53,
      "adoption": 0.4,
      "selfEvolution": 0.63
    },
    "summary": "把实验室笔记转化为保留作者确定性的可验证科学智能体技能,防止把不确定判断误当作确定结论或可执行动作。",
    "methodCore": "## Stage 1 — Epistemic Directive Extraction：从实验记录中提取带确定性标签的指令\n输入实验记录文本，LLM 提取指令并叠加两维标签：\n第一维：操作类型，FLAG_DATA、CONDITION_CHANGE、ANALYSIS_SUGGESTION、PROTOCOL_CHANGE、PARAMETER_SHIFT；第二维：确定性标签，FACT（作者确认的观测事实）、JUDGMENT（作者不确定的判断）、SUGGESTION（留给下次实验的建议）。这三个标签直接控制 Agent 后续执行权限：FACT 允许强操作（不可逆数据处理），JUDGMENT 默认退回审查保留模式，SUGGESTION 不触发任何文件级操作。\n## Stage 2 — 确定性 MetaSkill 编译：零 LLM 参与的确定性编译\n输入带标签的指令集，输出符合 SKILL.md 标准的技能胶囊文档。编译过程完全确定性：不是让 LLM 重新理解再写，胶囊的每个字段要么从 Stage 1 的 EDE 记录继承，要么由领域配置固定。让 LLM 做编译可能自行将不确定判断升级为指令，这个决定本身就引入新的不确定性源。每个胶囊还带原文片段的加密链接，Agent 执行强操作时可回溯到实验记录原文对应语句。\n## 执行时门控：确定性标签 + 信号证据联合检查\n每条胶囊的确定性标签与实际文件的信号证据做 joint check。FACT 胶囊且数据特征与作者描述一致时授权强操作。JUDGMENT 胶囊仅在文件信号证据完全独立支持同样结论时才执行，否则只能标为待人工复核。SUGGESTION 胶囊不触发任何永久修改。本质上是简化贝叶斯决策逻辑：在没有观察到独立验证信号之前，不对基于不确定判断的结论做不可逆操作。\n## 主要能力\n确定性三元标签体系：FACT/JUDGMENT/SUGGESTION，每个标签直接控制 Agent 的操作许可级别；零 LLM 参与的确定性编译：Stage 2 编译完全由规则驱动，不引入新的不确定性源；执行时 joint check 门控：确定性标签与实际信号证据双重验证后才授权强操作；在 JUDGMENT 主导和 FACT 主导的实验中，只有 Notes2Skills 同时避免了不确定性漂白和指令丢失。\n## 研究背景与贡献\nNotes2Skills 面向科学发现工作流:实验室笔记记录了观察、对不确定结果的解读以及后续实验计划,保留了演进中的科学推理与作者的不确定性(uncertainty),比论文中打磨过的最终结论更能支撑 AI 深入参与科学探索。然而以往对科学文本的研究多聚焦论文、协议或结构化数据库,把非正式的实验室笔记这一输入留待挖掘。关键难点在于:笔记常在同一段落里混杂已验证的观察、试探性判断与可能的下一步实验;若这些信号被混为一谈,AI 智能体可能把不确定的科学判断误当作已确认的结论或可执行动作。为此,Notes2Skills 提出一个两阶段框架(two-stage framework),把实验室笔记本转化为可验证的技能(verifiable skills),同时保留作者的确定性标注。其核心主张是:确定性保持(certainty preservation)正是连接实验室笔记与可靠智能体技能之间此前缺失的一环,由此指向更安全的 AI 协作科学家(co-scientist)系统。",
    "evaluation": "在七种配置(seven conditions)与三次湿实验(wet-lab)会话上评测,Notes2Skills 是唯一一种既不把不确定的笔记误当作确定指令、又不丢弃确定指令的配置。abstract 未给出更多定量指标,具体数值需查原文。",
    "mainFinding": "把实验室笔记转为技能时保留作者的确定性标注,是连接非正式笔记与可靠科学智能体技能的缺失一环,能同时避免”不确定性漂白“与”确定指令丢失“两类错误。",
    "limitations": "评测仅覆盖七种配置与三次湿实验会话,规模有限,跨学科与更大规模笔记上的泛化性未知;确定性标注的准确性仍依赖两阶段框架自身的判别质量。确定性分类为离散三元，实际实验推理中确定性是一个连续谱，混合型陈述被简化为 JUDGMENT。可审计性保证的是溯源性（FACT 胶囊确实来自原文被标记 FACT 的语句），但不保证准确性（原文那段语句是否真的应该是 FACT）。跨记录本迁移在初期：不同作者用语习惯差异大，确定性分类器跨作者风格的泛化性能未测量。当前仅在单一实验记录本的 split 评估上验证，科学工作流的多样性和规模有限。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.11897"
      }
    ],
    "citation": "Notes2Skills. https://arxiv.org/abs/2606.11897",
    "figures": [
      {
        "src": "figures/skill-notes2skills-notes2skills_architecture_overview.png",
        "caption": "Notes2Skills 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillsbench",
    "page": "skill",
    "title": "SkillsBench",
    "shortTitle": "SkillsBench",
    "category": "skill-evaluation",
    "maturity": "mature",
    "score": 0.632,
    "year": 2026,
    "venue": "arXiv 2026-02",
    "authors": "",
    "methodFamily": "skill evaluation",
    "tags": [
      "evaluation",
      "skill evaluation",
      "active"
    ],
    "scores": {
      "clarity": 0.75,
      "evidence": 0.65,
      "reproducibility": 0.58,
      "adoption": 0.6,
      "selfEvolution": 0.73
    },
    "summary": "以「配对评测」为核心的技能功效基准，在无技能与精选技能两种匹配条件下量化 Agent Skills 的真实增益。",
    "methodCore": "SkillsBench 通过三阶段管线构建基准并评估 Skills 效能：\n## 基准构建\n从三个来源聚合去重得到 47,150 个独立 Skills（开源仓库 12,847 + Claude Code 生态 28,412 + 企业 5,891）。并行地，105 位贡献者提交 322 个候选任务，每个任务包含指令、Docker 容器化环境、参考解法和确定性验证器。\n## 质量过滤\n自动化检查（结构验证、Oracle 100% 通过、GPTZero 人类撰写检测、Skill 泄漏审计）与人工审核（数据真实性、任务现实性、Oracle 质量、Skill 质量、反作弊）结合，精选 84 个任务横跨 11 个领域。\n## 评估协议\n每个任务在三种条件下运行：无 Skills、精选 Skills、自生成 Skills。在 Claude Code、Gemini CLI、Codex CLI 三个商业平台上使用七个前沿模型，pytest 确定性验证器产生二元 pass/fail，共生成 7,308 条有效轨迹。\n## 主要能力\n配对评估 Skills 效力：同一任务在三种条件下对比，直接测量 Skill 的边际贡献，而非评估 Agent 的绝对能力；跨领域跨模型分析：11 个领域 × 7 种 agent-model 配置的系统性实证证据，揭示 Skills 效力的领域异质性和 harness 差异；Skills 设计因素分析：量化 Skills 数量（2-3 个最优）、复杂度（Detailed/Compact 优于 Comprehensive）和模型规模（Skills 可部分替代模型容量）对性能的影响。\n## 研究背景与贡献\nSkillsBench 针对「技能是否真的有用」这一缺乏标准衡量方式的问题，构建了一个配对评测基准：当前清单包含横跨 8 个领域的 87 个任务，每个任务都配备了精选技能（curated Skills）与确定性验证器（deterministic verifiers）。其核心方法论是「配对评测」（paired evaluation）——在完全匹配的「无技能」与「精选技能」两种条件下对同一批任务运行，从而将技能带来的边际增益从模型底座本身的能力中剥离出来。最新的聚合评测覆盖了 18 种模型-脚手架（model-harness）配置，在这套 87 任务基准上以匹配条件运行。摘要还给出了关于技能设计的结论性观察：模块数不超过三个的聚焦型技能（focused Skills）表现优于更大或穷举式的技能捆绑包（exhaustive bundles），且配备技能的小模型可以匹敌不配技能的大模型。该工作将配对评测确立为严格衡量技能在高专业度智能体工作中功效的基础范式。",
    "evaluation": "abstract 给出明确数据：精选技能将平均通过率从 33.9% 提升至 50.5%，即 +16.6 个百分点、25.5% 的归一化增益；在 18 种模型-脚手架配置上，配置级增益区间为 +4.1 到 +25.7 个百分点。基准规模为 87 任务 / 8 领域，均配有精选技能与确定性验证器。",
    "mainFinding": "精选技能确实带来一致增益（平均 +16.6pp）；聚焦型（≤3 模块）技能优于穷举捆绑，小模型加技能可媲美大模型，配对评测是衡量功效的可靠基础。",
    "limitations": "当前清单仅 87 任务 / 8 领域，覆盖面有限；增益依赖「精选」技能与确定性验证器，能否推广到社区自发贡献的低质量技能仍待验证。覆盖与泛化：仅评估终端型容器化任务，结果可能不适用于 GUI Agent、多 Agent 协调或超长周期工作流；模型和 harness 集合有限，商业平台行为可能随时间变化。因果归因与控制：Skills 注入增加了上下文长度，观察到的增益可能部分反映\"更多上下文\"而非过程性结构；需要更强的长度匹配基线（如随机/无关文本、仅检索文档对照）。确定性与生态效度：容器化提供状态隔离但非完美确定性；应评估生态代表性设置，包括低质量 Skills 和自动选择 Skills 的场景。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2602.12670"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2014393687812110022"
      }
    ],
    "citation": "SkillsBench. https://arxiv.org/pdf/2602.12670",
    "figures": [
      {
        "src": "figures/skill-skillsbench-skillsbench_architecture_overview.png",
        "caption": "SkillsBench 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillprobe",
    "page": "skill",
    "title": "SkillProbe",
    "shortTitle": "SkillProbe",
    "category": "skill-evaluation",
    "maturity": "mature",
    "score": 0.608,
    "year": 2026,
    "venue": "arXiv 2026-03",
    "authors": "",
    "methodFamily": "skill evaluation",
    "tags": [
      "evaluation",
      "skill evaluation",
      "active"
    ],
    "scores": {
      "clarity": 0.7,
      "evidence": 0.6,
      "reproducibility": 0.53,
      "adoption": 0.55,
      "selfEvolution": 0.78
    },
    "summary": "面向新兴技能市场的多智能体协作安全审计框架，用「以技能审技能」范式检测语义-行为不一致与技能组合风险。",
    "methodCore": "SkillProbe 框架分为五层架构（输入层、编排层、技能层、输出层、基础设施层），核心是三阶段审计流水线：\n阶段 1：Gatekeeper（准入过滤）：采用\"解耦检查+集中聚合\"架构，将现有安全工具封装为独立执行器并行检测，覆盖合规性、恶意代码模式、风险依赖、权限声明合理性等维度。遵循保守原则，任一检查项不通过即全局拦截。\n阶段 2：Alignment Detector（语义-行为一致性检测）：将一致性问题形式化为文档声明能力集 D(s) 与代码实现能力集 C(s) 的匹配问题。通过文档提取器与代码提取器并行解析、语义归一化后，构建四类对齐矩阵实现风险分类——完全对齐（Match）、过度声明（Over-declaration）、影子功能（Under-declaration，高风险）、复杂偏差（Mixed）。\n阶段 3：Flow Simulator（组合风险模拟）：通过风险指纹标签化——为每个技能打上输出风险标签和输入敏感标签——将组合风险检测复杂度从指数级 O(2^N) 降至线性级 O(N×Rules)。基于 9 类核心风险链路策略（命令注入、间接提示词注入、数据泄露、意图劫持等）批量执行攻击路径模拟。引入证据强制机制，每个漏洞必须引用原始代码或文档片段作为证据。\n裁决机制：基于恶意模式、语义一致性、组合安全性三大维度构建安全评分卡，采用一票否决原则，将技能分为 REJECTED（存在关键漏洞）、CONDITIONAL（低风险偏差需人工复核）、APPROVED（全维度符合安全基线）三个等级。\n## 主要能力\n语义-行为一致性检测：识别\"文档合规、代码恶意\"的语义欺骗攻击；跨技能组合风险识别：通过风险指纹标签化，将组合爆炸从指数级降至线性级；结构化安全评分卡生成（REJECTED / CONDITIONAL / APPROVED 三级裁决）。\n## 研究背景与贡献\nSkillProbe 针对集中式技能市场面临的两类安全挑战——语义-行为不一致（semantic-behavioral inconsistency）以及技能间组合风险（inter-skill combinatorial risks，即单独看均无害的技能在协作调用时诱发恶意行为）——提出一个由多智能体协作驱动的多阶段安全审计框架。其核心创新是「Skills-for-Skills（以技能审技能）」设计范式：将审计流程本身封装为标准化的技能模块，驱动专门化的智能体走完一条严格流水线，包括准入过滤（admission filtering）、语义-行为对齐检测（semantic-behavioral alignment detection）与组合风险模拟（combinatorial risk simulation）。作者以来自 ClawHub 的 2500 个真实技能、跨 8 个主流 LLM 系列开展大规模评测。研究揭示了一个「流行度-安全悖论」：下载量并非安全质量的可靠代理。此外发现高风险技能在风险链维度上构成单一的巨型连通分量（giant connected component），说明级联风险是系统性的而非孤立事件。作者希望 SkillProbe 能为构建可信的 Agentic Web 提供可扩展的治理基础设施，系统已在 skillhub.holosai.io 公开体验。",
    "evaluation": "abstract 明确：评测使用来自 ClawHub 的 2500 个真实世界技能，横跨 8 个主流 LLM 系列。结果显示超过 90% 的高流行度技能未能通过严格审计；高风险技能在风险链维度构成单一巨型连通分量。系统在 skillhub.holosai.io 公开。",
    "mainFinding": "下载量不能代理安全质量——逾 90% 高流行技能审计不通过；高风险技能形成单一巨型连通分量，表明级联风险是系统性的，需要「以技能审技能」的治理设施。",
    "limitations": "评测数据源单一（ClawHub），结论对其它市场的普适性待检；「以技能审技能」审计本身依赖 LLM 判断，其自身可靠性与假阳/假阴率 abstract 未给出。严格度、细粒度、低延迟三者难以同时实现（审计的不可能三角）。误报率仍需进一步降低。当前组合风险模拟依赖预定义风险链路策略，对新型零日攻击模式存在检测盲区。面对大规模技能瞬时涌入（如 >10,000）时，审计严格度与延迟之间仍难以平衡。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2603.21019"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2020165820400054775"
      }
    ],
    "citation": "SkillProbe. https://arxiv.org/pdf/2603.21019",
    "figures": [
      {
        "src": "figures/skill-skillprobe-skillprobe_architecture_overview.png",
        "caption": "SkillProbe 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-tessl-skill-evaluation",
    "page": "skill",
    "title": "Tessl技能评测框架",
    "shortTitle": "Tessl技能评测框架",
    "category": "skill-evaluation",
    "maturity": "growing",
    "score": 0.65,
    "year": 2026,
    "venue": "arXiv 2026",
    "authors": "",
    "methodFamily": "技能评测",
    "tags": [
      "evaluation",
      "技能评测"
    ],
    "scores": {
      "clarity": 0.65,
      "evidence": 0.55,
      "reproducibility": 0.48,
      "adoption": 0.5,
      "selfEvolution": 0.63
    },
    "summary": "以技能对Agent行为的因果影响为评测目标，从500个真实技能自动生成约1000个评测任务，在19个Agent-模型配置上通过配对对比量化技能边际贡献。发现技能+便宜模型可逼近旗舰模型，成本压至1/3以下。",
    "methodCore": "## 环境工程与任务自动生成\n读入SKILL.md，分析16类环境依赖（工具/CLI、认证凭据、运行时等），由环境工程Agent逐一检查并自动满足。LLM从技能内容反推真实使用场景，每个技能最多生成三个任务。控制要点：任务描述不透露操作步骤和评分维度——防止Agent猜答案。质检Agent验证环境可达性、输入完整性和评分标准泄露。\n## 配对对比与双维度评分\n每个任务跑两遍——有技能和无技能——共享相同指令、输入、环境和评分标准。评判Agent（固定Sonnet 4.6）对照两套隐藏评分标准打分：\n目标完成度：产物对不对——衡量\"能不能做\"；指令遵循度：做法对不对——衡量\"是不是按你的方式做\"。\n控制要点：2026年前沿模型完成度已接近饱和，真正的差异全在遵循度。Opus 4.8遵循度88.0 vs Nemotron 3 Nano 30B仅25.2。\n## 单技能诊断\n框架不仅产出聚合分数，还能针对每个评分维度做精确诊断。以HuggingFace hf-cli技能为例，每个子命令的遵循情况有单独分数，技能作者能精确知道哪些指令被吸收、哪些被忽略、哪些写太模糊理解错了。\n## 成本-性能最优组合发现\n19个配置的对比揭示了技能加便宜模型可逼近旗舰模型。控制要点：效用和基线强度强负相关（$r = -0.90$），强模型基线高则技能边际价值被压缩。GLM 5.1加技能91.1分成本$0.89 vs Opus 4.8的$3.26。\n## 主要能力\n边际贡献剥离：通过基线对比，把技能增量和backbone自身能力分开，PRG只反映净增益；双维度评估区分：完成度衡量能不能做，遵循度衡量做法对不对，饱和的完成度已不是有效指标；单技能诊断：精确到评分维度的前后差异，定位技能中有效/冗余/模糊的指令；成本-性能最优组合发现：GLM 5.1加技能91.1分成本$0.89 vs Opus 4.8的$3.26；工作流型vs建议型技能区分：程序化技能（媒体处理+38.1）远好于建议型技能（测试+16.7）。\n## 实验与要点\n作为工程实践，其价值在于把技能评测从单点验证升级为可复用的横向对照矩阵，适用于技能市场选型、平台方能力对比、技能作者定位适用边界等场景。它降低了「底座强 vs 技能强」的混淆风险，为持续更新的横向榜单提供方法框架。具体规模与指标依赖各自实现。\n多技能、多模型、多任务的矩阵化横向对比，能把孤立的技能评测结果转化为可比、可持续的选型证据，并帮助剥离模型底座对功效判断的干扰。\n## 研究背景与贡献\n以技能对Agent行为的因果影响为评测目标，从500个真实技能自动生成约1000个评测任务，在19个Agent-模型配置上通过配对对比量化技能边际贡献。发现技能+便宜模型可逼近旗舰模型，成本压至1/3以下。",
    "evaluation": "以技能对Agent行为的因果影响为评测目标，从500个真实技能自动生成约1000个评测任务，在19个Agent-模型配置上通过配对对比量化技能边际贡献。发现技能+便宜模型可逼近旗舰模型，成本压至1/3以下。",
    "mainFinding": "以技能对Agent行为的因果影响为评测目标，从500个真实技能自动生成约1000个评测任务，在19个Agent-模型配置上通过配对对比量化技能边际贡献。",
    "limitations": "单评判模型（Sonnet 4.6），风格审美类指标上偏差难免。数据集偏软件工程，500个技能绝大多数是编程/DevOps/Web开发。有技能条件告知了Agent技能存在，但真实部署中技能选择是独立变量。约20%技能因环境依赖太复杂被过滤（数据库、MCP服务器等），覆盖受限。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.17819"
      },
      {
        "label": "数据集",
        "href": "https://huggingface.co/datasets/tesslio/task-evals-for-skills"
      }
    ],
    "citation": "Tessl技能评测框架. https://arxiv.org/abs/2606.17819",
    "figures": [
      {
        "src": "figures/skill-tessl-skill-evaluation-tessl_skill_evaluation_architecture_overview.png",
        "caption": "Tessl技能评测框架 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillflow",
    "page": "skill",
    "title": "SKILLFLOW",
    "shortTitle": "SKILLFLOW",
    "category": "skill-evaluation",
    "maturity": "growing",
    "score": 0.54,
    "year": 2026,
    "venue": "arXiv 2025-04",
    "authors": "",
    "methodFamily": "skill evaluation",
    "tags": [
      "evaluation",
      "skill evaluation",
      "active"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.5,
      "reproducibility": 0.53,
      "adoption": 0.45,
      "selfEvolution": 0.73
    },
    "summary": "首个面向 Agent 技能发现的多阶段检索流水线，把技能获取建模为信息检索问题，从约 36K 社区技能语料中选取最相关技能。",
    "methodCore": "SKILLFLOW 将技能终身演化评估拆为一条三阶段流水线，核心抽象是 DAEF（Domain Agnostic Execution Flow）和技能补丁（skill patch）机制。\nDAEF 执行流抽象：将每个技能定义为一组有序的执行步骤和对应的验证检查点，使不同领域、不同格式的技能可以在统一框架下被评估和比较。\n技能补丁机制：每次技能更新被视为对原始技能的一个补丁，系统追踪补丁链上的性能变化，量化每次修改带来的净收益——修了几个 bug、引入几个回归。\n三阶段演化协议：初始训练建立基线 → 技能更新注入变更 → 持续适应观察长期漂移，模拟真实部署中技能库不断被修改的场景。\n跨模型退化分析：在 ALFWorld、WebShop、ScienceWorld 三个环境上，对 GPT、Claude、Gemini、Qwen、DeepSeek 等 11 个模型做退化曲线追踪，区分\"技能本身退化\"和\"模型在执行中忽略技能\"两类根本原因。\n## 主要能力\n为 Agent 技能演化提供标准化的评测框架，把\"技能越改越差\"这个之前只能定性描述的问题变成可定量追踪的指标；用技能补丁链追踪每次技能更新的净效果——修了多少个 case、搞砸了多少个原本能对的 case；跨 11 个模型的退化曲线对比，揭示了一个反直觉发现：基座能力更强的模型，在技能持续更新中并不一定更稳定；区分两类退化根因——技能内容真的写坏了，还是模型在执行时没有正确遵循技能指令——直接指向不同的修复策略。\n## 研究背景与贡献\nSkillFlow 针对「加载过多、尤其是无关技能会拖累性能」的问题，把技能获取（skill acquisition）重新表述为一个信息检索问题——检索对象是从 GitHub 索引的约 36K 个社区贡献 SKILL.md 定义构成的语料库。它是首个专为 Agent 技能发现设计的多阶段检索流水线，通过四个阶段逐步收窄候选集：稠密检索（dense retrieval）、两轮交叉编码器重排（cross-encoder reranking），以及基于 LLM 的选择（LLM-based selection），在每一阶段平衡召回与精度。作者在两个编码基准上评测：SkillsBench（87 任务、229 个匹配技能）与 Terminal-Bench（89 任务、无匹配技能）。实验揭示了一个关键对比：检索本身只在语料具备高质量、可执行技能时才有效——当语料缺乏目标领域的可运行技能时，即便 Agent 乐于使用检索到的技能，也不会带来性能提升。作者强调技能增强 Agent 的实际影响取决于语料覆盖度与技能质量，尤其是可运行代码与打包产物（bundled artifacts）的密度。",
    "evaluation": "abstract 明确：语料约 36K 个 SKILL.md。在 SkillsBench（87 任务、229 匹配技能）上，SkillFlow 检索的技能将 Pass@1 从 9.2% 提升至 16.4%（+78.3%，p_adj=3.64×10⁻²），达到 oracle 上限的 84.1%；在 Terminal-Bench（89 任务、无匹配技能）上，技能使用率达 70.1% 却无性能增益。",
    "mainFinding": "把技能获取建模为信息检索是有效策略；但检索单独不足以奏效——技能增强的实际收益取决于语料覆盖度与技能质量，尤其是可运行代码与产物的密度。",
    "limitations": "增益强依赖语料是否含目标领域的可执行高质量技能（Terminal-Bench 上零增益即为例证）；仅在两个编码基准验证，泛化到非编码领域待考。评估环境限于文本模拟器（ALFWorld、WebShop、ScienceWorld），真实生产环境的技能退化模式可能更复杂。技能补丁的来源依赖人工标注，大规模自动化评测还需要额外工程。目前只关注了单一技能的纵向退化，多个技能同时演化时的交叉影响未覆盖。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2604.17308"
      },
      {
        "label": "代码",
        "href": "https://github.com/ZhangZi-a/SkillFlow"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2030587991689785774"
      },
      {
        "label": "项目",
        "href": "https://zhangzi-a.github.io/SkillFlow-project-page/"
      }
    ],
    "citation": "SKILLFLOW. https://arxiv.org/pdf/2604.17308",
    "figures": [
      {
        "src": "figures/skill-skillflow-skillflow_architecture_overview.png",
        "caption": "SKILLFLOW 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skilllens",
    "page": "skill",
    "title": "SkillLens",
    "shortTitle": "SkillLens",
    "category": "skill-evaluation",
    "maturity": "mature",
    "score": 0.602,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "",
    "methodFamily": "skill evaluation",
    "tags": [
      "evaluation",
      "skill evaluation",
      "research"
    ],
    "scores": {
      "clarity": 0.65,
      "evidence": 0.45,
      "reproducibility": 0.58,
      "adoption": 0.4,
      "selfEvolution": 0.93
    },
    "summary": "分层技能演化框架，将技能组织为策略/战略/流程/原语四层图，以混合粒度检索并局部适配，降低复用成本。",
    "methodCore": "## 三阶段拆解：把技能生成从黑盒变成白盒\nSkillLens 将技能全链路拆为三段并让每个阶段可以被独立诊断。\n阶段一：经验生成，目标模型 M 在训练任务上跑，产出包含成功和失败轨迹的经验池。阶段二：技能提取，提取器 E 从经验池中蒸馏技能，提取框架刻意最小化（仅逐轨迹分析 + 层级合并），不做任何领域特化或启发式过滤，所有抽象决策全留给提取器自己做。阶段三：技能消费，同一个目标模型 M 装上技能在留存测试任务上评估，技能效用 = 有技能时的分数减去没技能时的分数。这个设计让\"谁提得好\"和\"谁用得好\"可以被分开度量——提取效能（EE）衡量一个提取器跨不同目标模型的平均产出质量，目标可进化性（TE）衡量一个目标模型从不同提取器产出的技能中平均获益多少。\n## 六个关键实验发现\n发现一：模型生成的技能平均有用，但存在系统性负迁移，相当比例的技能装上后反而让模型表现变差，且不是偶然噪音。发现二：好的提取器不一定是好的消费者，A 模型帮别人提的技能比帮自己提的更好，但 A 模型自己使用技能时受益很少，提取能力和消费能力是两个独立维度。发现三：EE 和 TE 跟模型参数规模之间没有单调关系，一个中等规模的模型可能比一个大模型产出更有用的技能。发现四：经验池的成功轨迹比例、轨迹多样性、失败案例覆盖范围，比提取方法本身更能预测技能最终好不好用。发现五：好技能的共同特征，明确的触发条件、清晰的步骤顺序、标注的常见陷阱、可操作的具体指令；烂技能的共性——内容太抽象、过度依赖示例、缺少错误处理。发现六：技能跨模型迁移极不稳定，同一份技能装给不同模型效果天差地别，因为不同模型对同一份技能的解读方式完全不同。\n## Meta-Skill：从研究发现到可操作的技能生成指引\n论文将全部发现浓缩为一份 Meta-Skill：不是给 Agent 用的技能，是给技能提取器用的技能。它指导提取器在生成技能时：\n从成功轨迹提炼具体可操作的步骤而非泛泛原则；从失败轨迹提炼明确的触发条件和边界 case；给每个步骤标注前置条件、预期结果和常见陷阱；避免过长的示例段。加上这份 Meta-Skill 后提取器产出的技能在多领域上一致提升，负迁移大幅减少。\n## 主要能力\n三阶段白盒诊断：将技能生成从\"最终 Agent 变没变强\"的模糊信号拆解为经验池质量、提取器能力、消费者能力三个独立账本；EE/TE 双指标量化：分别度量提取器的跨模型泛化产出能力和目标模型吸收技能的潜力，两个维度相互独立且与模型规模无关；技能负迁移的系统性暴露：25% 的技能导致表现下降，且无法靠阅读技能文本判断哪个更好；Meta-Skill 实践指南：从研究发现中提炼可操作的技能生成指引，直接改善提取器产出质量并减少负迁移；经验池-技能质量因果关系揭示：经验池的多样性比提取方法本身更能预测最终技能质量。\n## 研究背景与贡献\nSkillLens 针对现有系统把技能当作扁平、单一分辨率提示块所导致的「相关性与成本」张力——注入粗粒度技能会引入无关或误导性上下文，而重写整个技能则昂贵且往往不必要。它是一个分层技能演化框架，将技能组织成策略（policies）、战略（strategies）、流程（procedures）与原语（primitives）四层图，并以混合粒度进行检索。给定任务时，SkillLens 先检索语义相关的技能种子（skill seeds），通过在技能图上的度校正随机游走（degree-corrected random walk）扩展，再用验证器（verifier）判定每个被访问的单元应被接受、分解、重写还是跳过，从而让 Agent 直接复用兼容的子技能、仅对局部不匹配的组件做适配。为随时间自我改进，SkillLens 进一步精炼多粒度技能与验证器以优化其路由决策。作者提供了理论分析：在稀疏不匹配假设下混合粒度适配的成本为亚线性（sublinear），且演化更新规则单调改进验证目标直至局部最优。评测在 MuLocbench 与 ALFWorld 上进行。",
    "evaluation": "abstract 明确：在 MuLocbench 与 ALFWorld 上，SkillLens 一致优于强技能基线，缺陷定位（bug localization）取得最高 6.31 个百分点的 Acc@1 增益，并将 Agent 成功率从 45.00% 提升至 51.31%。理论上在稀疏不匹配假设下混合粒度适配成本为亚线性，演化更新单调改进验证目标至局部最优。",
    "mainFinding": "把技能组织为四层图并做混合粒度检索与局部适配，能在缺陷定位与具身任务上一致超越扁平技能基线，同时以亚线性成本实现单调改进的技能演化。",
    "limitations": "增益幅度有限（成功率 45%→51.31%）；亚线性成本结论依赖「稀疏不匹配」假设，密集不匹配场景不适用；仅两个基准验证，跨域泛化待考。仅覆盖 Skill 生命周期的评测维度，不提供自动化优化方案（需搭配 SkillOpt）。EE/TE 指标计算成本较高，需多模型多任务组合评测。论文阶段，无公开代码/工具。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.23899"
      },
      {
        "label": "代码",
        "href": "https://github.com/microsoft/SkillLens"
      },
      {
        "label": "官网",
        "href": "https://microsoft.github.io/SkillLens/"
      },
      {
        "label": "深度剖析",
        "href": "https://blog.csdn.net/chendongqi2007/article/details/161570103"
      }
    ],
    "citation": "SkillLens. https://arxiv.org/abs/2605.23899",
    "figures": [
      {
        "src": "figures/skill-skilllens-skilllens_architecture_overview.png",
        "caption": "SkillLens 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillsafetybench",
    "page": "skill",
    "title": "SkillSafetyBench",
    "shortTitle": "SkillSafetyBench",
    "category": "skill-evaluation",
    "maturity": "growing",
    "score": 0.515,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "",
    "methodFamily": "skill evaluation",
    "tags": [
      "evaluation",
      "skill evaluation",
      "research"
    ],
    "scores": {
      "clarity": 0.55,
      "evidence": 0.45,
      "reproducibility": 0.48,
      "adoption": 0.4,
      "selfEvolution": 0.78
    },
    "summary": "可运行的技能介导安全评测基准，覆盖良性请求下由技能引导、本地产物或执行环境文件诱发的不安全行为。",
    "methodCore": "## 六风险域 × 五类别 × 八攻击手法的攻击矩阵\nSkillSafetyBench 将技能安全风险组织为六个域：上下文信任风险（检索结果被污染、示例被篡改）、权限越界风险（伪造审批信号、诱导扩大行动计划）、运行时劫持风险（解释器替换、沙箱边界绕过）、输出腐败风险（产出被篡改、敏感数据静默泄露）、状态持久化风险（后门存活于后续会话）、供应链和知识中毒风险（依赖版本替换、检索语料投毒）。每个域 5 个标准化类别，对应 8 种攻击手法。\n## 干净用户请求 + 有毒技能材料的攻击模型\n核心创新在于攻击面的划定：用户请求保持合法，模型推理无恶意，工具调用正常——但 Agent 加载的技能材料中含污染载荷。Agent 在忠实执行合法技能工作流时被误导，因为被替换的环节在其视角看来都是\"正常操作\"。每个案例配一个确定性 verify_attack.py 脚本，以执行产物中的实体证据（恶意痕迹、泄露载荷、污染记忆记录）而非主观判断为准。\n## 多 Agent 框架 + 多模型后端评估矩阵\n评估覆盖 Claude Code、Codex CLI、Cursor CLI、Qwen3 Coder 等主流 CLI Agent，分别搭配不同的底层模型。发现不同 Agent 在同一攻击类别上的失守模式有明显差异——Agent 框架如何加载技能、管理上下文、分配信任给本地文件，这些工程决策同样决定了安全边界。\n## 主要能力\n首个技能攻击面系统化评估：155 个案例、6 风险域、30 类别，提供了技能安全评估的标准化框架；供应链级攻击建模：攻击可隐藏于技能文档、辅助脚本、Docker 模板、检索语料、依赖包中的任一层；确定性证据验证：每个案例配备 verify_attack.py 脚本，以实体证据而非 LLM 主观判断确定攻击成功；跨框架安全差异面揭示：Claude Code 和 Codex CLI 在同一攻击上失守模式不同，暴露框架设计的工程决策影响安全。\n## 研究背景与贡献\nSkillSafetyBench 针对可复用技能作为 Agent 扩展接口所引入、却被现有安全评测大量忽略的攻击面：即便用户请求是良性的，不安全的影响仍可能藏在技能引导（skill guidance）、本地产物（local artifacts）或执行环境文件中，从而将 Agent 引向不安全的行为。它是一个可运行的（runnable）基准，专门评测这类「技能介导的安全失败」（skill-mediated safety failures）。基准包含 155 个对抗案例，横跨 47 个任务、6 个风险域（risk domains）与 30 个安全类别（safety categories），每个案例均由针对该案例的基于规则的验证器（rule-based verifier）评估。作者用多个 CLI Agent 与模型底座开展实验，结果表明非用户来源的攻击（non-user attacks）能够持续诱发不安全行为，且在不同领域、攻击方法与脚手架-模型配对（scaffold-model pairings）间呈现出各异的失败模式。研究据此指出：Agent 安全不仅取决于模型层面的对齐，还取决于 Agent 如何解读技能、信任工作流上下文，以及如何通过可执行环境采取行动。",
    "evaluation": "abstract 明确：基准含 155 个对抗案例，横跨 47 个任务、6 个风险域、30 个安全类别，每案例配有针对性的规则验证器。多个 CLI Agent 与模型底座实验显示非用户攻击能持续诱发不安全行为，失败模式在不同领域、攻击方法与脚手架-模型配对间各异。具体检测/失败率数值需查原文。",
    "mainFinding": "即便用户请求良性，藏于技能引导、本地产物或环境文件中的非用户攻击也能持续诱发不安全行为；Agent 安全不止取决于模型对齐，更取决于其如何解读技能与信任上下文。",
    "limitations": "规模仍偏小（155 案例 / 47 任务）；采用案例专属规则验证器，扩展到新攻击类别需额外人工构造；abstract 未给出各 Agent 的量化失败率。攻击覆盖不穷尽：155 个案例覆盖了主要风险域，但技能攻击面仍在快速扩展，新的本地表面类型不断出现。防御方案未评估：论文聚焦攻击面和脆弱性评估，未测试或提出系统的防御机制。静态案例分析：未涉及攻击随 Agent 多轮交互动态演化的场景。",
    "related": [],
    "links": [
      {
        "label": "代码",
        "href": "https://github.com/AI45Lab/skill-safety-bench"
      },
      {
        "label": "SkillSafetyBench 论文",
        "href": "https://arxiv.org/pdf/2605.12015"
      },
      {
        "label": "官网",
        "href": "https://jinchang1223.github.io/skill-safety-bench-website"
      }
    ],
    "citation": "SkillSafetyBench. https://github.com/AI45Lab/skill-safety-bench",
    "figures": [
      {
        "src": "figures/skill-skillsafetybench-skillsafetybench_architecture_overview.png",
        "caption": "SkillSafetyBench 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillgenbench",
    "page": "skill",
    "title": "SkillGenBench",
    "shortTitle": "SkillGenBench",
    "category": "skill-evaluation",
    "maturity": "growing",
    "score": 0.552,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "",
    "methodFamily": "skill evaluation",
    "tags": [
      "evaluation",
      "skill evaluation",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.5,
      "reproducibility": 0.53,
      "adoption": 0.45,
      "selfEvolution": 0.78
    },
    "summary": "首个将技能生成本身剥离为独立研究对象的基准，在统一受控协议下评测技能生成流水线，覆盖两种生成模式与两类知识源。",
    "methodCore": "## 生成与执行解耦的评估架构\nSkillGenBench 的核心设计是将生成器和执行器拆开。生成器负责从原始材料产出标准化技能包，执行器固定不变不参与比较，评测统一协议且以确定性执行验证为主。这消除了已有基准中\"方法 Backbone vs 执行 Backbone vs 检索策略\"的变量混淆，确保评测差异完全来自生成能力。\n## 两种生成模式 + 两类知识来源\n任务已知模式：生成器拿到原始材料 + 任务描述，测的是\"知道要干什么后能不能精准提炼\"。任务未知模式：生成器只拿到原始材料，不知道下游任务，测的是\"不看考题能不能写成好教材\"，目前这一模式几乎是空白，且实验显示该模式下生成技能在部分情况不如无技能。代码仓库类：程序知识隐藏在目录结构、调用关系和配置中，最佳 Backbone pass@3 仅 14.4%。长文档类：知识显式写出但散落各处，最佳 pass@3 为 25.0%。\n## 五阶段质量保证流水线\n任务不是手写的——经过知识图谱构建、场景生成、任务和测试生成、无技能验证（太简单或材料直抄都能搞定的打回）、参考技能验证（连参考技能都跑不通的打回），反复循环直到落入目标难度\"甜点\"，最后加人工审核。\n## 主要能力\n技能生成能力的独立标准化评估：首次将\"从材料到技能\"这一步从端到端评测中解耦，纯测生成质量；任务未知模式首次成体系评估：揭示不看考题写教材在代码仓库类几乎做不到的残酷现状；跨方法 × 跨 Backbone 矩阵对比：五种方法 × 六种 Backbone，目前最好方法 + 最强 Backbone 在代码仓库类仅 17.1%；静态技能质量六维分析：接口合约完整性、环境依赖覆盖等六维，揭示不同方法各有优缺、全优者为零。\n## 研究背景与贡献\nSkillGenBench 指出现有基准主要评测「给定技能的功效」或「Agent 从原始上下文解决下游任务的能力」，却没有把技能生成（skill generation）本身单独隔离为研究对象。它在统一且受控的协议下评测技能生成流水线：生成器接收原始语料并产出标准化的技能产物（standardized skill artifacts），随后在固定脚手架（fixed harnesses）下执行，并用统一的评测程序评估。基准覆盖两种生成模式（regimes）：任务条件生成（task-conditioned generation，任务揭示后再合成特定任务技能）与任务无关生成（task-agnostic generation，需在下游任务已知前先蒸馏出可复用技能库）。它还跨越两类互补的程序来源：以仓库为依据（repository-grounded，程序分散在代码、配置与脚本中）与以文档为依据（document-grounded，程序与约束需从长文本中蒸馏）。作者提供了标准化的任务规范、锁定环境（pinned environments），以及以确定性执行检查（deterministic execution-based checks）为中心、辅以诊断信号的评测协议。实验横跨多种技能生成方法与底座，显示出显著的性能差异，并揭示了从软件仓库与从长文档生成技能时各异的失败模式。",
    "evaluation": "abstract 说明基准覆盖两种生成模式（任务条件/任务无关）与两类程序来源（仓库依据/文档依据），采用确定性执行检查为中心的统一评测协议，并提供锁定环境。实验横跨多种技能生成方法与底座，显示显著性能差异及仓库 vs 长文档生成的不同失败模式。具体任务数、方法数与底座数等数值需查原文。",
    "mainFinding": "把技能生成从端到端评测中隔离为独立问题后，各方法性能差异显著，可复用技能蒸馏难度高，且从软件仓库与从长文档生成技能呈现出各异的失败模式。",
    "limitations": "abstract 未公开具体基准规模与量化结果；确定性执行检查对难以判定正误的开放式技能覆盖有限；两类来源之外的知识形态尚未纳入。187 个任务覆盖面仍有限：基准仍在扩展中，覆盖的领域和任务类型数量有限。统一执行器的代表性问题：评测使用固定执行器，其性能特征可能影响不同生成方法的相对排名。任务未知模式评估粒度较粗：未区分\"技能原子性\"\"技能组合方式\"等细粒度维度的差异。",
    "related": [],
    "links": [
      {
        "label": "代码",
        "href": "https://github.com/QuantaAlpha/SkillGenBench"
      },
      {
        "label": "SkillGenBench 论文",
        "href": "https://arxiv.org/pdf/2605.18693"
      }
    ],
    "citation": "SkillGenBench. https://github.com/QuantaAlpha/SkillGenBench",
    "figures": [
      {
        "src": "figures/skill-skillgenbench-skillgenbench_architecture_overview.png",
        "caption": "SkillGenBench 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillevolbench",
    "page": "skill",
    "title": "SkillEvolBench",
    "shortTitle": "SkillEvolBench",
    "category": "skill-evaluation",
    "maturity": "growing",
    "score": 0.563,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "",
    "methodFamily": "skill evaluation",
    "tags": [
      "evaluation",
      "skill evaluation",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.5,
      "reproducibility": 0.58,
      "adoption": 0.45,
      "selfEvolution": 0.78
    },
    "summary": "诊断性基准，评测 Agent 能否把情节式轨迹经验蒸馏为可复用程序技能，用冻结部署任务检验技能鲁棒性。",
    "methodCore": "## 完整的技能进化弧线评测设计\n六个环境（代码修改、API 编排、数据处理、文档转换、研究合成、沟通操作），每个五个任务家族，每个家族六个角色任务。\n三个学习任务：标准任务采集经验 → 升级版暴露缺失的子能力 → 变体版改变形式保持底层逻辑，每步 Agent 可选写/改/不改技能。三个冻结评估任务：上下文漂移（技能需正确识别但描述变了）、对抗性捷径（存在绕开正确流程的浅层方案）、组合（需与其他技能协同），评估时技能库冻结——测的是\"学到的能不能迁移\"而非\"现场再学\"。\n## 四组控制条件 + 原始轨迹复用对标\n裸跑（无技能）、零样本技能（任务前生成不更新）、自主生成（从空库自我归纳）、精炼种子（从有盲区的人工技能出发修补）。更重要的是把 raw-trajectory reuse（直接注入之前任务的经验轨迹作为上下文）跟 skill-based 条件做对比，暴露蒸馏的有损程度。\n## 多平台 × 多模型矩阵\n评估覆盖 Claude Code、Codex CLI、Gemini CLI 三个 Agent 框架和十个模型配置，测量技能形成能力在不同 Agent 平台和模型间的差异。\n## 主要能力\n技能进化标准化测试协议：首次将\"从经验到可复用技能\"的整条链条做成可量化评估的标准协议；迁移 vs 记忆的系统化区分：冻结评估任务（上下文漂移、对抗、组合）区分 Agent 是\"记住了\"还是\"学懂了\"；蒸馏有损性的量化证据：原始轨迹复用经常超过蒸馏技能，揭示当前技能生成本质上是一次有损压缩；跨平台能力差异暴露：不同 Agent 框架在\"从经验中提炼技能\"上表现差异显著，框架本身是变量。\n## 研究背景与贡献\nSkillEvolBench 针对「LLM Agent 在解题中积累了丰富的情节式轨迹（episodic trajectories），但这些经验能否被蒸馏为可复用的程序技能」这一未明问题，提出一个诊断性基准，评测从「经验复用」到「技能形成」这一步。它包含 180 个任务，横跨六个真实世界 Agent 环境，组织为共享潜在程序（shared latent procedures）的角色条件任务族（role-conditioned task families）。Agent 先从获取任务（acquisition tasks）中学习，使用压缩后的轨迹与验证器反馈更新一个外部技能库，随后面对冻结的部署任务（frozen deployment tasks），后者测试上下文迁移、对抗性捷径与组合能力。通过将自生成与精选起点（curated-start）的技能演化，与「无技能」和「原始轨迹」两种对照相比较，SkillEvolBench 得以把程序抽象（procedural abstraction）从基础能力、精选先验知识、以及对情节轨迹的直接复用中分离出来。评测横跨十个模型配置与三个 Agent 脚手架。此外作者还做了容量与成本分析，考察写入更多技能或更大 Tier-3 资源库的效果。",
    "evaluation": "abstract 明确：基准含 180 任务 / 六个真实环境，评测横跨十个模型配置与三个 Agent 脚手架。发现当前 Agent 常能局部适应但很少形成鲁棒可复用技能；技能条件可改善获取或回放，个别模型在特定部署轴上获益，但在冻结部署下增益不稳定；原始轨迹复用常优于蒸馏技能。容量分析显示多写技能或更大 Tier-3 库并不足够。",
    "mainFinding": "当前 Agent 大多只能局部适应、很少形成鲁棒可复用技能；原始轨迹复用常胜过蒸馏技能，说明现有抽象过程丢弃了仍有用的上下文与程序线索，写更多技能亦非解药。",
    "limitations": "结论为诊断性观察，未提供能形成鲁棒技能的解决方案；冻结部署下增益不稳定表明评测对随机性敏感；更大资源库反而引入情节漂移与程序冗余。环境覆盖仍有限：六个环境虽多但皆为文本交互任务，多模态和具身环境尚未覆盖。进化机制未深入对比：未分解不同技能提取/蒸馏策略的因果贡献。180 任务规模在基准中属中等：覆盖广度足够用于方法对比但不够用于统计显著性推断。",
    "related": [],
    "links": [
      {
        "label": "代码",
        "href": "https://github.com/AIoT-MLSys-Lab/SkillEvolBench"
      },
      {
        "label": "SkillEvolBench 论文",
        "href": "https://arxiv.org/pdf/2605.24117"
      },
      {
        "label": "官网",
        "href": "https://skillevolbench.github.io/"
      }
    ],
    "citation": "SkillEvolBench. https://github.com/AIoT-MLSys-Lab/SkillEvolBench",
    "figures": [
      {
        "src": "figures/skill-skillevolbench-skillevolbench_architecture_overview.png",
        "caption": "SkillEvolBench 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skill-rm",
    "page": "skill",
    "title": "Skill-RM",
    "shortTitle": "Skill-RM",
    "category": "skill-evaluation",
    "maturity": "growing",
    "score": 0.515,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "",
    "methodFamily": "skill evaluation",
    "tags": [
      "evaluation",
      "skill evaluation",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.45,
      "reproducibility": 0.53,
      "adoption": 0.4,
      "selfEvolution": 0.68
    },
    "summary": "将奖励建模重构为执行一项可复用的「奖励-评估技能」，统一整合规则验证、参考答案、清单与复杂 rubric 等异构证据。",
    "methodCore": "## Reward-Evaluation Skill：二元组架构\n核心形式为 $(M_{RM}, U_{RM})$ 二元组。\n$M_{RM}$：技能说明书，显式规定评估涉及的维度、资源调用协议、证据收集格式规范、以及输出约定（最终结构化判决由证据记录集 E 和结论字段 d 组成）。$U_{RM}$：资源库，将评估所需外部材料组织为五类可加载资源：Rubric & Criterion（评估维度和优先级权重）、Reference（答案标准和官方解法）、Checklist & Constraint（指令遵循逐项检查条件）、Verifier & Tool（可执行确定性工具：Python 沙箱、代码检查器、精确匹配器）、Calibration & Aggregation Rule（证据冲突解决和分数映射规则）。\n## 四步评估流程：诊断、选取、验证、汇总\n诊断阶段分析 (query, response) 对需要激活哪些评估维度：数学题激活参考答案和代码执行验证器，开放式写作只激活 rubric 和格式 checklist。选取阶段从资源库按类型标签和适用范围抽取对应资源加载。验证阶段逐条调用被激活的资源，每个验证步骤产出结构化证据记录 $e_m = (c_m, q_m, s_m)$。汇总阶段将所有维度证据记录按预定义 Aggregation Rule 合成为结论字段 d，再映射为最终奖励分。\n## 主要能力\n结构化证据记录让奖励分可追溯、可审计：每分背后都可翻出对应的被调用资源和局部判定；五类可加载资源在技能控制下按需调用，不在当前评估范围的资源不进入上下文；评估流程四步标准化：诊断→选取→验证→汇总，执行顺序和冲突解决规则由技能规格显式控制；在 best-of-N 选择和 RFT 等下游应用中，Skill-RM 作为训练信号训练出的策略优于传统 Judge 对照组。\n## 研究背景与贡献\nSkill-RM 针对当前奖励评估依赖异构标准——基于规则的验证器、真值参考、程序化清单（procedural checklists）与复杂 rubric——却缺乏统一机制整合所有类型证据的问题，提出一个统一框架，将奖励建模重新表述为执行一项可复用的「奖励-评估技能」（Reward-Evaluation Skill）。通过把奖励计算当作一个结构化的智能体任务（structured agentic task），Skill-RM 提供了一致的接口来编排（orchestrate）异构资源，针对每个输入的具体需求动态选择与聚合证据。这一做法使奖励模型超越静态评估，在多样任务间确保一致性与透明性。作者在奖励基准与下游应用上开展了大量实验，下游应用包括 best-of-N 选择与强化学习。结果显示 Skill-RM 一致优于传统的 judge 基线，作者据此认为其价值不仅在于为奖励建模提供统一方案，还在于通过对证据的策略性、动态化编排获得更优性能。代码开源于 GitHub（Qwen-Applications/Skill-RM）。",
    "evaluation": "abstract 表明：在多个奖励基准及下游应用（best-of-N 选择、强化学习）上，Skill-RM 一致优于传统 judge 基线，展现出通过动态编排证据取得的更优性能。具体基准名称、模型规模与提升幅度等数值需查原文。代码已开源。",
    "mainFinding": "把奖励建模重构为执行一项可复用的评估技能，能以统一一致的接口编排规则、参考、清单、rubric 等异构证据，动态选择聚合后一致超越传统 judge 基线。",
    "limitations": "abstract 未提供具体基准与量化提升；作为智能体化评估其推理开销与稳定性未量化说明；异构证据的动态编排质量仍受底座 judge 能力制约。技能本身需要构建和维护：资源库包含人工设计的 rubric、checklist 和参考答案，全新评估领域需要对应专业知识。证据记录的可审计性面向开发者：观测结果的表达形式因资源类型而异，自动转为人类可读审计摘要需额外翻译层。多维合成中的冲突解决规则完备性未穷举测试：规则边界情况可能在特定实例中被触发但未覆盖。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.03980"
      },
      {
        "label": "代码",
        "href": "https://github.com/Qwen-Applications/Skill-RM"
      }
    ],
    "citation": "Skill-RM. https://arxiv.org/abs/2606.03980",
    "figures": [
      {
        "src": "figures/skill-skill-rm-skill-rm_architecture_overview.png",
        "caption": "Skill-RM 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-eval-skill",
    "page": "skill",
    "title": "Eval-Skill",
    "shortTitle": "Eval-Skill",
    "category": "skill-evaluation",
    "maturity": "growing",
    "score": 0.515,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "Xing Yue, Linjuan Wu, Daoxin Zhang, Yongliang Shen, Weiming Lu",
    "methodFamily": "skill evaluation",
    "tags": [
      "evaluation",
      "skill evaluation",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.5,
      "reproducibility": 0.53,
      "adoption": 0.45,
      "selfEvolution": 0.63
    },
    "summary": "探索引导的方法，离线合成可复用领域评估技能替代在线逐查询 rubric，将奖励引导重构为上下文演化。",
    "methodCore": "## 故障归因：rubric 生成的三个系统性失败模式\nQwen3-8B 裸评准确率 57.04%，加上自生成 rubric 后跌到 50.63%（-6.4pp）。用 RIFT 分类法对 200 个失败案例归因发现三类模式：\n缺失判别标准（34.2%）：rubric 从查询文本生成，无法感知候选回答之间的实际差异；错位或僵化（24.1%）：rubric 过度指定表面要求，将 Judge 引向无区分度的维度；criterion-list 格式本身表达力瓶颈：无法表达条件化决策逻辑。根源一致：rubric 是从查询推断而非从实际候选回答差异分布中归纳。\n## Workflow + Principles 双组件技能结构\n将评估标准从\"每个查询一次\"改为\"每个领域一次\"。\nWorkflow：告诉 Judge 怎么做评估（先看什么、后看什么、维度不相上下时如何分岔、优先级和排名处理），不是一列\"检查要点\"而是一套\"操作流程\"。Principles：列出领域内反复出现的关键判别维度，每条从实际候选回答对的差异中提炼而非从查询推断。\nWorkflow 和 Principles 交叉迭代进化：Workflow 多分支搜索不同评估路径结构在进化集上评分选优，Principles 从最佳 Workflow 路径 rollout 中提取并再筛选。\n## 离线一次性计算 + 推理时零额外开销\n整个进化过程离线一次性完成，产出的 .md 技能文件本地缓存。推理时技能直接注入 Judge 的 prompt 上下文，每轮评估不需要额外 rubric 生成或额外模型调用。进化时间缩放行为显示增加进化样本数（50→100→200）技能质量持续提升，曲线未触顶：离线投入越多、推理收益越大，且推理成本完全不变。技能编码\"对一个领域的好评估标准\"而非\"某个模型的偏好\"，天然跨底座可迁移。\n## 主要能力\n领域级离线进化：100 个样本离线搜索和筛选，产出可复用的 Workflow+Principles 评估技能；Workflow（操作流程）替代 criterion-list（检查要点列表），支持条件化分岔决策逻辑；跨底座可迁移：一个模型进化出的技能注入另一个模型的推理上下文，效果优于目标模型裸评；下游 best-of-N 推理中 Eval-Skill 引导的选择在胜率、平局减少和质量一致性上均优于基线；进化时间缩放曲线未触顶，离线计算投入与在线收益呈持续正相关。\n## 研究背景与贡献\nEval-Skill 针对开放式奖励建模需要能遵循细微、领域特定偏好的 judge，而现有 rubric 方法为每个查询在线生成标准、带来额外推理开销并可能产生僵硬或错位引导的问题，提出一种探索引导（exploration-guided）方法：合成可复用的评估技能（evaluation skills）用于奖励建模，并把奖励引导重构为上下文演化（context evolution），而非参数训练或逐查询 rubric 生成。它每个领域仅用 100 个案例进行技能演化，通过两个渐进阶段合成可复用的领域级评估技能——先工作流生成（workflow generation），后原则生成（principle generation），并在两个阶段间交错进行探索与选择（exploration and selection interleaved）。一旦生成，技能被直接注入 judge 上下文。作者在多个奖励模型基准上评测，显示 Eval-Skill 一致改进多样的 judge 底座。作者进一步分析了演化时扩展（evolution-time scaling）、泛化性与可迁移性，论证紧凑的评估技能是一种高效的 LLM 评估新范式。代码开源于 GitHub。",
    "evaluation": "abstract 明确：每领域仅用 100 个案例演化技能。在多个 RM 基准上一致改进 judge 底座；在 RewardBench 2 上，相对原始 judging 对每个主要底座取得显著增益——Qwen3-8B +13.44%、DeepSeek-V4-Flash +18.51%。另有演化时扩展、泛化性与可迁移性分析支撑其高效性。",
    "mainFinding": "仅用每领域 100 案例离线演化出可复用评估技能并注入 judge 上下文，即可在 RewardBench 2 上对多个底座取得显著增益（最高 +18.51%），无需逐查询在线生成 rubric。",
    "limitations": "技能按领域级合成，跨域或长尾领域的覆盖与迁移仍受演化案例限制；增益在不同底座间幅度不一，评估技能质量仍依赖探索与选择阶段的有效性。每个领域仅用 100 个进化样本，若领域内子任务类型差异大，少数覆盖的子类型对应的 Workflow 分支和 Principles 偏稀疏。Workflow 候选分支数是手动设定的探索参数，未做系统性消融揭示\"多远的分支宽度对什么任务最优\"。技能跨领域泛化边界不清晰：从安全领域到对话质量评估等大跨度迁移的效果未测试。当前仅在 Reward Bench 类 RM 基准上验证，更广泛的下游应用场景（如 RLHF 训练流水线）待探索。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.07040"
      },
      {
        "label": "代码",
        "href": "https://github.com/xing-stellus-yue/Eval-Skill"
      }
    ],
    "citation": "Eval-Skill. https://arxiv.org/abs/2606.07040",
    "figures": [
      {
        "src": "figures/skill-eval-skill-eval-skill_architecture_overview.png",
        "caption": "Eval-Skill 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillvetbench",
    "page": "skill",
    "title": "SkillVetBench",
    "shortTitle": "SkillVetBench",
    "category": "skill-evaluation",
    "maturity": "mature",
    "score": 0.615,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "",
    "methodFamily": "skill evaluation",
    "tags": [
      "evaluation",
      "skill evaluation",
      "active"
    ],
    "scores": {
      "clarity": 0.7,
      "evidence": 0.6,
      "reproducibility": 0.63,
      "adoption": 0.55,
      "selfEvolution": 0.73
    },
    "summary": "以 LLM-as-Judge 对开源 Agent 技能做多维安全风险评测的 Hugging Face 实时榜单，提出五维 SARS 风险评分并整合 CVSS v4.0。",
    "methodCore": "## SARS 五维度 Agentic 风险评分\nSARS 定义五个独立维度，每维 0-3 分，由 LLM-as-Judge 评定。\nIFR（指令保真风险，权重 2×）：技能指令是否可能被 Agent 误执行或绕过；DG（数据引力，1.5×）：技能接触的敏感数据广度；AI（动作不可逆性，1.5×）：技能操作是否不可撤销；BR（爆炸半径，2×）：危害扩散范围；CA（链式放大，2×）：多智能体/多技能协作中风险的级联放大效应。\n## LLM-as-Judge 审查流程 + 多框架集成\n默认 Judge 为 Qwen2.5-14B-Instruct（T=0.2）。审查覆盖七类漏洞：命令/Shell 注入、RCE、不安全文件操作、提示注入、记忆投毒、数据暴露、供应链攻击和权限滥用。排行榜同时展示 SARS 评分、完整 CVSS v4.0 向量分解、以及 ClawHub 双视图（市场官方裁决 vs LLM 审查对比）。评估器敏感度分析中检测率从 35%（Mixtral-8x7B）到 95%（Qwen2.5-32B）不等，说明 Judge 选择是关键变量。\n## 指令层检测缺口量化\n对 Prompt Injection（19 个技能），VirusTotal 检出 0，ClawScan 检出 3，LLM-as-Judge 检出全部 19 个。对 Memory Poisoning（9 个技能），ClawScan 检出 1，VirusTotal 检出 3，CodeBERT 检出 0：传统工具漏检 89-100% 的指令层威胁。CA（链式放大）维度在所有恶意类别中均 ≥1.80，即使这些技能的 CVSS 基础分偏低（Data Exposure 1.84，Supply Chain 2.30）。\n## 主要能力\nSARS 五维度加权风险评分填补代码扫描器对指令层和多智能体风险的盲区；受控 100 技能检测中零假阴性、零假阳性，超过最佳静态基线 15% 的漏检率；活的公共排行榜（1,299 个技能，2026.05 快照）：39.2% 标记为存在漏洞，3 个 Critical，54 个 High；量化了代码扫描工具对指令层威胁的 89-100% 漏检率。\n## 研究背景与贡献\nSkillVetBench 针对现有扫描器只在代码层运作、对指令层与多智能体风险结构性失明的缺口——自然语言指令可劫持 Agent、经编码侧信道窃取数据或在流水线间链式扩散危害——主张需要语义化、多维度的审查系统，而非又一个特征签名匹配器。它是一个部署在 Hugging Face 上的实时公开榜单（live public leaderboard），用 LLM-as-Judge 审查 Agent 技能。其新提出的核心是 SARS（Skill Agentic Risk Score，技能智能体风险评分）——一个面向指令遵循系统、带有原则化加权公式的五维智能体风险度量。系统整合了完整的 CVSS v4.0 向量分解，以及 ClawHub 双视图（dual-view），把 LLM 生成的评审结果与官方市场判定并置。作者借助配套基准论文，展示 LLM-as-Judge 阶段在 78 个已确认恶意技能上实现零假阴性、在 22 个良性对照上实现零假阳性；同时最佳静态基线 SKILLSIEVE 仍漏检 15%。对提示注入、记忆投毒等指令层类别，传统工具漏检 89%–100%（例如 CODEBERT 检测不出九个记忆投毒技能中的任何一个）。四个 LLM 评估器间检测率介于 35%–95%，促使生产部署采用集成评分（ensemble scoring）。",
    "evaluation": "abstract 明确：LLM-as-Judge 阶段在 78 个已确认恶意技能上零假阴性、22 个良性对照上零假阳性；最佳静态基线 SKILLSIEVE 仍漏检 15%；提示注入与记忆投毒等指令层类别传统工具漏检 89%–100%（CODEBERT 对九个记忆投毒技能全部漏检）；四个 LLM 评估器检测率介于 35%–95%。",
    "mainFinding": "代码层扫描器对指令层与多智能体风险结构性失明；语义化 LLM-as-Judge 配合五维 SARS 评分可实现零假阴/假阳性，远超静态基线，但单一评估器波动大需集成评分。",
    "limitations": "零假阴/假阳性建立在 78+22 的小规模确认集上，扩展到大规模真实技能的表现待验；LLM-as-Judge 自身检测率在评估器间波动达 35%–95%，依赖集成以保稳定。SARS 权重公式是专家定义的固定权重，未经大规模经验校准。当前仅覆盖 七类预定义漏洞，对新型攻击向量的覆盖需人工扩展。排行榜技能来源于公开 ClawHub 生态，对私有技能库的代表性有限。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.15899"
      },
      {
        "label": "代码",
        "href": "https://huggingface.co/spaces/supreme-lab/AgentSkillBench"
      }
    ],
    "citation": "SkillVetBench. https://arxiv.org/abs/2606.15899",
    "figures": [
      {
        "src": "figures/skill-skillvetbench-skillvetbench_architecture_overview.png",
        "caption": "SkillVetBench 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillaudit-assessment",
    "page": "skill",
    "title": "SkillAudit",
    "shortTitle": "SkillAudit",
    "category": "skill-evaluation",
    "maturity": "mature",
    "score": 0.628,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "",
    "methodFamily": "skill evaluation",
    "tags": [
      "evaluation",
      "skill evaluation",
      "active"
    ],
    "scores": {
      "clarity": 0.7,
      "evidence": 0.6,
      "reproducibility": 0.63,
      "adoption": 0.55,
      "selfEvolution": 0.78
    },
    "summary": "以技能为中心的端到端评估审计框架，从技能包自动构建能力对齐任务，产出效用/成本/安全多维报告。",
    "methodCore": "## 技能为中心的任务自动生成\nLLM读SKILL.md提取核心能力，每个技能自动生成三个有代表性的使用场景。控制要点：任务随技能内容动态生成，固定基准的预设任务集做不到这一点。任务描述不透露操作步骤和评分维度，防止Agent猜答案。\n## 基线对比与配对任务设计\n每个效用场景编译成两个任务——带技能和不带技能——共享相同指令、输入、环境和评分标准，唯一区别是技能是否可用。引入pass-rate gain（PRG）指标算净增益，把backbone强度的影响剥掉。控制要点：发现PRG与no-skill基线pass rate之间r=-0.90，强模型基线高则技能边际贡献被压缩。\n## 两阶段安全风险检测\n静态扫描：覆盖21种风险模式、5大类（prompt注入、凭据访问、不安全文件/网络行为、隐藏指令、供应链），高/中严重级别召回率97.0%/96.0%；动态探针：对发现的每个风险生成探针，沙箱里实际执行并采集Agent轨迹和文件变更。\n控制要点：区分风险的存在性与可利用性——不同骨架动态触发率差异显著（Claude 23% vs GPT-5.4 53%）。\n## 审计报告与发现时展示\n所有任务在隔离沙箱运行，内置日志抓每一步工具调用、文件变更和网络请求。浏览器扩展把审计报告嵌进技能发现页面，评估从离线研究变成部署决策工具。\n## 主要能力\n任意技能即输即评：不限制来源或类别，有SKILL.md就能生成定制审计；基线剥离的效用归因：PRG算差值减基线，骨架强度不再污染技能效用；静态+动态双层安全检测：先扫存在性再测可利用性，不同骨架动态触发率差异显著；adoption-time决策辅助：浏览器扩展把审计嵌入发现页面，开发者下载前就能看到评级；多维度统一报告：效用、效率/成本、安全三维聚合，每项判断追溯到具体执行证据。\n## 研究背景与贡献\nSkillAudit 针对技能生态缺乏可靠方式判断「一个技能是否值得部署」的问题，指出现有评估仍主要锚定于固定任务套件（fixed task suites），这会把技能的边际贡献与底座强度混为一谈，并在任务落在技能预期范围之外时错判其价值。它是一个以技能为中心（skill-centered）的端到端框架，接收任意 Agent 技能作为输入，自动生成一份涵盖效用（utility）、效率/成本（efficiency/cost）与安全（safety）的多维评估报告。SkillAudit 聚焦技能产物本身，直接从技能包构建能力对齐（capability-aligned）的评估任务，任务在隔离沙盒环境中执行以收集执行证据，随后经自动检查与基于 LLM 的判定产出可审计结果。为解剖技能，作者提出「基线对比原则」（baseline comparison principle）来度量效用与效率/成本——即剥离 backbone 影响；并引入结合静态语义分析（static semantic analysis）与动态运行时验证（dynamic runtime verification）的两阶段检测范式来评估安全风险。作者扫描了跨 23 个职业类别的头部真实技能包。",
    "evaluation": "abstract 明确：作者扫描了跨 23 个职业类别（occupational categories）的头部排名真实技能包，发现超过 7% 的技能处于风险状态（at risky status）。框架采用基线对比原则度量效用与效率/成本，并用静态语义分析加动态运行时验证的两阶段检测评估安全。其它量化指标需查原文。",
    "mainFinding": "固定任务套件会混淆技能边际贡献与底座强度；以技能为中心、从技能包自动构建对齐任务并用基线对比剥离 backbone，可产出效用/成本/安全多维审计报告，逾 7% 头部技能有风险。",
    "limitations": "自动构建的能力对齐任务质量与安全判定均依赖 LLM，可能引入偏差；「7% 风险」仅基于头部技能扫描，覆盖面与阈值口径 abstract 未详述。226个技能23个类别，相对几十万技能生态仍是冰山一角。评测任务质量直接依赖LLM解析SKILL.md，模糊/不规范的技能包可能无法正确评估。效率/成本只含时间和token，没纳入沙箱基础设施和下载安装成本。浏览器扩展目前为原型，完整实现尚未发布。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.22613"
      },
      {
        "label": "项目主页",
        "href": "https://skillaudit.github.io/"
      },
      {
        "label": "GitHub仓库",
        "href": "https://github.com/SkillAudit/skillaudit"
      }
    ],
    "citation": "SkillAudit. https://arxiv.org/abs/2606.22613",
    "figures": [
      {
        "src": "figures/skill-skillaudit-assessment-skillaudit-assessment_architecture_overview.png",
        "caption": "SkillAudit 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skill-coverage",
    "page": "skill",
    "title": "Skill Coverage",
    "shortTitle": "Skill Coverage",
    "category": "skill-evaluation",
    "maturity": "growing",
    "score": 0.52,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "",
    "methodFamily": "skill evaluation",
    "tags": [
      "evaluation",
      "skill evaluation",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.45,
      "reproducibility": 0.43,
      "adoption": 0.4,
      "selfEvolution": 0.78
    },
    "summary": "借鉴代码覆盖率提出面向 Agent 技能的测试充分性度量，把技能指令译为半结构化行为约束并按轨迹判定覆盖与通过。",
    "methodCore": "## 技能行为约束（SBC）提取\n从自然语言技能文档中提取EARS风格归一化的条件-行为规则。每条SBC需满足四个条件：\n有明确源文本支撑；施加义务/禁止/工作流/交付标准；能从执行证据判断；表达单一独立行为约束。\nLLM提取候选后人类审计员审核，剔除背景介绍、元数据等非约束内容。控制要点：SBC把技能里可测试的部分投影到一个有限、可审计的分母上。\n## 覆盖判定：两道门\n一条SBC标记为Covered需同时满足：执行轨迹实例化了SBC的适用条件（applicable），且轨迹中有足够可观测证据让评判者判断约束是被满足还是被违反（evidence）。控制要点：Covered不要求Agent满足约束——违反了也算覆盖，只要证据充分。\n## 验证后扩展的评判协议\nDeepSeek V4 Flash作覆盖评判器。先在Claude Code+Opus 4.6轨迹集上采样350组约束-轨迹对做人类标注验证，一致率93.71%，Cohen's $κ = 0.874$。验证通过后冻结评判prompt和证据格式扩展到全量SkillsBench。\n## 主要能力\n技能测试充分性量化：把评估从\"好不好用\"推进到\"测到了多少\"，给出独立于任务成功的第二维信号；SBC可溯源分母：每条约束附带源文本位置，未覆盖部分可精确定位到技能的具体段落；证据驱动覆盖判定：applicable加evidence双门，约束必须被实例化且可判断，不是技能被加载就算覆盖；评判协议经人类验证：93.71%一致率保障大规模自动化的可信基础。\n## 研究背景与贡献\nSkill Coverage 针对「任务结果无法揭示可复用技能的哪些部分被执行、以及执行时 Agent 是否遵循了相关技能指令」的盲区，提出一个基于轨迹（trajectory-based）的技能测试充分性度量（test-adequacy metric）。其框架从每个技能中抽取技能行为约束（skill behavior constraints），把自然语言技能指令翻译为半结构化约束（semi-structured constraints），这些约束指定了在特定条件下 Agent 的预期行为；随后判定每条约束是否被某个 Agent 轨迹覆盖，并对被覆盖的约束按 Agent 实际行为给出 Pass 或 Fail 判定。作者将该框架应用于 SkillsBench：结果显示排行榜上的 Agent 轨迹平均只覆盖了所抽取技能行为约束的 38.66% 至 45.51%。随后作者利用 Fail 判定来强化对应技能内容——仅通过强调 Agent 未遵循的原始指令——并用强化后的技能重跑相同任务，在五个 Agent-模型行上带来失败任务的平均 16.0% 恢复率。这表明技能覆盖率既是测试充分性度量，也是观察技能使用行为的细粒度信号，失败约束标签为改进技能有效性提供可行动证据。",
    "evaluation": "abstract 明确：应用于 SkillsBench 时，排行榜 Agent 轨迹平均仅覆盖所抽取技能行为约束的 38.66%–45.51%；用 Fail 判定强化技能后重跑，在五个 Agent-模型行上带来失败任务平均 16.0% 的恢复率。summary 提及的人类一致率 93.71% 等其它指标 abstract 未给出，需查原文。",
    "mainFinding": "任务成败无法反映技能哪些部分被执行；基于轨迹的技能覆盖率把指令译为可判定的行为约束，揭示现有轨迹覆盖率仅约 39%–46%，且失败约束可指导技能强化恢复 16% 失败任务。",
    "limitations": "自然语言指令到半结构化约束的翻译及覆盖/通过判定质量依赖自动化流程，可能引入误差；结论仅基于 SkillsBench，跨基准与非编码技能的普适性待验。仅在SkillsBench上验证，其他技能生态的SBC提取质量和覆盖率未知。SBC提取依赖人类审计，流程无法全自动，人工成本是工程落地瓶颈。分母只含被认为\"可测试\"的约束，可能遗漏非EARS形式的隐含行为规范。覆盖与否是二值判断，不提供行为满足/违规的细粒度区分。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.20659"
      },
      {
        "label": "项目主页",
        "href": "https://shuaijiumei.github.io/skillcoverage/"
      }
    ],
    "citation": "Skill Coverage. https://arxiv.org/abs/2606.20659"
  },
  {
    "id": "skill-source-skillforge",
    "page": "skill",
    "title": "SkillForge",
    "shortTitle": "SkillForge",
    "category": "skill-optimization",
    "maturity": "growing",
    "score": 0.535,
    "year": 2026,
    "venue": "arXiv 2026-04",
    "authors": "",
    "methodFamily": "skill optimization",
    "tags": [
      "optimization",
      "skill optimization",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.45,
      "reproducibility": 0.38,
      "adoption": 0.4,
      "selfEvolution": 0.88
    },
    "summary": "让企业级 Agent Skills 实现自主进化",
    "methodCore": "SkillForge 采用五阶段流水线，围绕\"完全扎根业务\"和\"全程无需人工介入\"两个核心原则：\n1. 初始化：从历史工单中挖掘专家工作流、高频内部工具和领域专属知识，填充到预定义模板生成初始 Skills，全程使用内部大模型处理私有数据。\n2. 执行与监控：Agent 加载 Skills 处理业务请求，LLM 评判器对比输出与专家参考回复，低于阈值则标记为不良案例。\n3. 故障分析：从知识、工具、澄清、风格四个维度并行诊断不良案例，生成结构化故障记录。\n4. 聚合：按类别聚合故障，识别系统性问题并选取典型案例。\n5. 诊断与优化：基于 ReAct 的诊断器将故障映射到 Skills 具体缺陷位置，优化器通过虚拟文件系统执行最小化修改，生成新版本 Skills。\n为适配企业安全，SkillForge 采用约束型 Skills 结构：剔除可执行脚本，所有操作通过预定义系统工具完成，Agent 通过虚拟文件系统（VFS）与 Skills 资源交互。\n## 主要能力\n领域情境化 Skills 生成：从历史工单中挖掘工作流、工具和领域知识，冷启动质量显著优于通用生成器；多维度故障分析：从知识、工具、澄清、风格四维度并行诊断，自动聚合识别系统性问题；端到端自进化闭环：从故障诊断到 Skills 自动优化全程无需人工介入。\n## 研究背景与贡献\nSkillForge 面向云技术支持这类企业场景,针对现有技能生成器缺乏领域接地、产出技能与真实任务不匹配,且部署后无法把执行失败回溯到技能缺陷的问题,提出一个自进化框架,闭合“创建-评估-优化”的端到端循环。为产出对齐良好的初始技能,其 Domain-Contextualized Skill Creator 将技能合成锚定在知识库与历史工单之上;为实现持续自优化,一条三阶段流水线——Failure Analyzer、Skill Diagnostician、Skill Optimizer——自动批量诊断执行失败、定位底层技能缺陷并改写技能以消除缺陷。该循环迭代运行,使技能随每一轮部署反馈自我改进。整体思路是把运营中不断累积的失败证据转化为对技能的定向修订,而非停留在一次性生成。作者强调这一自动进化过程可从多种起点出发持续提升技能质量。\n## 实验与要点\n在五个真实云支持场景上评测,覆盖 1,883 条工单与 3,737 个任务。实验表明:领域上下文化的技能创建器相比通用创建器产出的初始技能更好,以与历史工单中专家撰写参考回复的一致性衡量;自进化循环则从专家撰写、领域生成、通用等不同起点出发,在连续轮次中逐步提升技能质量,显示自动进化可超越人工整理的专家知识。\n以领域接地的创建器加“分析-诊断-优化”三段自进化循环,把部署失败证据转化为定向修订,使技能质量随反馈持续提升并超越专家撰写。",
    "evaluation": "在五个真实云支持场景上评测,覆盖 1,883 条工单与 3,737 个任务。实验表明:领域上下文化的技能创建器相比通用创建器产出的初始技能更好,以与历史工单中专家撰写参考回复的一致性衡量;自进化循环则从专家撰写、领域生成、通用等不同起点出发,在连续轮次中逐步提升技能质量,显示自动进化可超越人工整理的专家知识。",
    "mainFinding": "以领域接地的创建器加“分析-诊断-优化”三段自进化循环,把部署失败证据转化为定向修订,使技能质量随反馈持续提升并超越专家撰写。",
    "limitations": "评测集中于云技术支持单一垂类,跨领域普适性未充分验证;自动诊断与改写依赖 LLM 判断,一致性指标以专家回复为参照,超越专家的结论仍需更广泛复核。依赖企业真实业务数据，缺乏历史数据的场景冷启动效果受限。知识类问题受底层知识库覆盖范围限制，迭代后期提升趋于平缓。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2604.08618"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2027332205161006631"
      }
    ],
    "citation": "SkillForge. https://arxiv.org/pdf/2604.08618",
    "figures": [
      {
        "src": "figures/skill-skillforge-skillforge_architecture_overview.png",
        "caption": "SkillForge 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-mcts",
    "page": "skill",
    "title": "双层MCTS",
    "shortTitle": "双层MCTS",
    "category": "skill-optimization",
    "maturity": "exploring",
    "score": 0.45,
    "year": 2026,
    "venue": "Agent Skills 生态实践",
    "authors": "将 Skills 优化建模为双层优化问题——外层用 MCTS 搜索最优技能结构（章节组织、文件拆分），内层用 LLM 精炼具体内容，在 ORQA 基准上自动优化的技能反超了人工手调版本（90.625% → 93.75%）。",
    "methodFamily": "技能优化",
    "tags": [
      "optimization",
      "技能优化"
    ],
    "scores": {
      "clarity": 0.7,
      "evidence": 0.6,
      "reproducibility": 0.53,
      "adoption": 0.55,
      "selfEvolution": 0.68
    },
    "summary": "将 Skills 优化建模为双层优化问题——外层用 MCTS 搜索最优技能结构（章节组织、文件拆分），内层用 LLM 精炼具体内容，在 ORQA 基准上自动优化的技能反超了人工手调版本（90.625% → 93.75%）。",
    "methodCore": "框架将技能抽象为 $S = (θ, φ)$，$θ$是结构配置（哪些文件、哪些章节），$φ$ 是内容实例（具体写了什么）。外层 MCTS 搜结构，内层 LLM 磨内容，两轮交替推进。\n技能的形式化定义：将技能拆为结构 $θ$ 和内容 $φ$ 两个独立变量，结构决定组件如何组织（章节增删、文件拆分合并），内容决定每个组件里写什么。两者解耦后才能各用各的工具来优化。外层 MCTS 结构搜索：用 UCB 策略在搜索树里选最有潜力的结构节点，LLM 根据历史性能数据生成结构修改建议（加/删/重排章节、移内容到不同文件），执行后把任务得分反向传播更新树。MCTS 天然适合这种改完结构才能知道好不好的延迟反馈场景。内层内容优化：收到新结构后分三步——对齐（把旧内容往新结构里搬，能复用就复用）、分类型优化（章节调整时重点磨文本，脚本改动时重点修代码跑测试）、保守选择（用下置信界 LCB 选最稳的版本，不选分数最高但可能只是运气好的）。为什么选 LCB 而不是最高分：测试有噪声，最高分可能只是运气好。论文数据显示最新候选的期望 $Δ$ 是 -3.1pp，而最佳候选是 +8.1pp。保守选择能大幅降低上线后性能回归的概率。\n## 主要能力\n自动搜索技能的最优结构配置——章节怎么排、内容放哪个文件、元数据怎么写——不再依赖人的经验和直觉；内容优化和结构优化联动：改了结构后内容自动适配，改了内容后结构同步调整，不会出现改了章节划分但文本还停留在旧布局的情况；保守选择策略用统计方法替代\"选最高分\"的直觉做法，减少因测试噪声导致的假优化，对生产环境更友好；一套固定流程覆盖技能优化的全链条：从结构草案到内容精炼到最终选优，不需要人工介入。\n## 实验与要点\n作为工程约定,其价值在于以低门槛把技能改进变为数据驱动的可验证过程,适用于已有稳定评测集、希望持续维护技能质量的场景。相比一次性撰写,它降低了改动引入回退的风险,让技能维护从主观判断转向以评测结果为准绳的迭代,是团队协作维护共享技能库的实用做法。\n把技能改进组织为“评测-优化-再评测”的多轮闭环,使每次修订都以可观测反馈为依据并被验证接受,让技能从一次性撰写走向持续可控打磨。\n## 研究背景与贡献\n将 Skills 优化建模为双层优化问题——外层用 MCTS 搜索最优技能结构（章节组织、文件拆分），内层用 LLM 精炼具体内容，在 ORQA 基准上自动优化的技能反超了人工手调版本（90.625% → 93.75%）。\n## 局限与边界\n只在 ORQA（运筹学问答）单一基准上验证，任务类型偏选择题，其他领域的结构搜索空间可能差异很大。MCTS 搜索每轮评估都需要多次 rollout，计算开销不小，技能库规模大了以后搜索效率是个问题。保守选择依赖 LCB 的统计假设，小样本下可能过于保守，错过真实的大幅提升。",
    "evaluation": "将 Skills 优化建模为双层优化问题——外层用 MCTS 搜索最优技能结构（章节组织、文件拆分），内层用 LLM 精炼具体内容，在 ORQA 基准上自动优化的技能反超了人工手调版本（90.625% → 93.75%）。",
    "mainFinding": "将 Skills 优化建模为双层优化问题——外层用 MCTS 搜索最优技能结构（章节组织、文件拆分），内层用 LLM 精炼具体内容，在 ORQA 基准上自动优化的技能反超了人工手调版本（90.625% → 93.75%）。",
    "limitations": "只在 ORQA（运筹学问答）单一基准上验证，任务类型偏选择题，其他领域的结构搜索空间可能差异很大。MCTS 搜索每轮评估都需要多次 rollout，计算开销不小，技能库规模大了以后搜索效率是个问题。保守选择依赖 LCB 的统计假设，小样本下可能过于保守，错过真实的大幅提升。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2604.15709"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2030972051096332121"
      }
    ],
    "citation": "双层MCTS. https://arxiv.org/abs/2604.15709",
    "figures": [
      {
        "src": "figures/skill-mcts-mcts_architecture_overview.png",
        "caption": "双层MCTS 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skill-reducer",
    "page": "skill",
    "title": "SkillReducer",
    "shortTitle": "SkillReducer",
    "category": "skill-optimization",
    "maturity": "growing",
    "score": 0.505,
    "year": 2026,
    "venue": "arXiv 2026-03",
    "authors": "",
    "methodFamily": "skill optimization",
    "tags": [
      "optimization",
      "skill optimization",
      "research"
    ],
    "scores": {
      "clarity": 0.55,
      "evidence": 0.5,
      "reproducibility": 0.43,
      "adoption": 0.45,
      "selfEvolution": 0.73
    },
    "summary": "为 Skills 瘦身 40%,破解 Token 低效难题",
    "methodCore": "SkillReducer 针对技能的双层结构特性设计了两阶段优化流程：\n## 阶段 1：路由层优化——最小充分的路由描述\n采用\"快速压缩 + 实体验证\"的两阶段设计：\n模拟预言的 Delta 调试：构建模拟路由 Oracle 接收测试查询集与候选技能池（含干扰技能和对抗性影子技能），将原始描述拆分为独立语义子句后，使用 DDMIN 算法递归分割与测试，丢弃非必要子句，得到 1-最小集合——每个保留子句均为正确路由不可或缺。真实环境验证：在实际 Agent 中验证压缩后描述，若存在触发失败则从已删除子句中贪婪恢复最能提升触发率的子句。对于描述缺失或过短的技能，从主体中提取核心能力、触发条件和唯一标识，自动生成合规描述。\n## 阶段 2：技能主体重构——渐进式披露\n将单体架构技能转换为分层架构，核心内容常驻上下文，补充内容按需加载：\n分类驱动的内容拆分：对段落级内容自动标注为核心规则、背景、示例、模板、冗余五类，仅核心规则保留在常驻模块，冗余直接删除。分类型定制化压缩：核心规则做语义合并与精简，示例/模板按概念去重仅保留代表性内容，背景做精准摘要，同时完成跨文件去重。双重质量门 + 自校正反馈循环：Gate1 忠实性验证确保核心操作概念完整保留；Gate2 任务化功能评估通过代码执行断言 + LLM 评审双机制验证，失败时自动将必要内容提升至常驻核心，最多 2 轮迭代。\n## 主要能力\n路由描述压缩：通过 Delta 调试实现最小充分描述，平均压缩率 48%；技能主体重构：分类驱动拆分 + 定制化压缩，平均压缩率 39%，单技能节省约 1000 token；功能保留验证：双重质量门确保 86% 技能压缩后表现不降低，部分技能反而提升。\n## 研究背景与贡献\nSkillReducer 针对基于 LLM 的编程智能体所依赖的技能:注入上下文窗口的每个 token 既带来费用又稀释注意力。作者对 55,315 个公开技能做大规模实证研究,发现系统性低效:26.4% 完全缺失路由描述,超过 60% 的正文内容不可执行,参考文件单次调用可注入数以万计的 token。据此提出一个两阶段优化框架:阶段一优化路由层,压缩冗长描述并通过对抗式 delta debugging 生成缺失描述;阶段二重构技能正文,采用分类法驱动的分类与渐进式披露,把可执行核心规则与按需加载的补充内容分离,并以忠实性检查和自纠正反馈循环加以验证。整体思路是“少即是多”:剔除非必要内容既降低成本,又减少上下文中的干扰,从而在压缩体量的同时不损甚至提升功能质量。\n## 实验与要点\n在 600 个技能与 SkillsBench 基准上评测,SkillReducer 实现 48% 的描述压缩与 39% 的正文压缩,同时功能质量提升 2.8%,揭示“少即是多”效应。这些收益可跨来自四个家族的五个模型迁移,平均保留率 0.965,并能推广到一个独立的 agent 框架。\n通过路由层压缩与正文分层重构剔除非可执行内容,在大幅压缩技能体量的同时提升功能质量,验证上下文中“少即是多”的减负效应。",
    "evaluation": "在 600 个技能与 SkillsBench 基准上评测,SkillReducer 实现 48% 的描述压缩与 39% 的正文压缩,同时功能质量提升 2.8%,揭示“少即是多”效应。这些收益可跨来自四个家族的五个模型迁移,平均保留率 0.965,并能推广到一个独立的 agent 框架。",
    "mainFinding": "通过路由层压缩与正文分层重构剔除非可执行内容,在大幅压缩技能体量的同时提升功能质量,验证上下文中“少即是多”的减负效应。",
    "limitations": "实证基于公开技能样本,压缩策略在私有或高度专业化技能上的适用性未知;忠实性检查依赖自动判定,压缩误删稀疏关键信息的风险需人工把关。真实压缩失败率约 4.7%。技能过时导致的问题无法通过压缩解决。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2603.29919"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2023452876459053941"
      }
    ],
    "citation": "SkillReducer. https://arxiv.org/pdf/2603.29919"
  },
  {
    "id": "skill-source-d2skill-opt",
    "page": "skill",
    "title": "D2Skill",
    "shortTitle": "D2Skill",
    "category": "skill-optimization",
    "maturity": "growing",
    "score": 0.505,
    "year": 2026,
    "venue": "arXiv 2026-03",
    "authors": "Songjun Tu, Chengdong Xu, Qichao Zhang, Yaocheng Zhang, Xiangyuan Lan, Linjing Li",
    "methodFamily": "skill optimization",
    "tags": [
      "optimization",
      "skill optimization",
      "active"
    ],
    "scores": {
      "clarity": 0.55,
      "evidence": 0.4,
      "reproducibility": 0.43,
      "adoption": 0.35,
      "selfEvolution": 0.83
    },
    "summary": "根据模型能力动态调整 Skill 策略",
    "methodCore": "D2Skill 的核心是双粒度技能建模与策略-技能库协同进化的联合训练范式，整体框架由三大核心模块构成：\n## 带技能注入的 RL 联合训练\n在每一轮训练中，对每个任务同时采样两组平行轨迹——技能组轨迹的每一步检索并注入对应技能，基线组使用相同策略但不注入技能。基于两组性能差异，同时完成三个环节的计算：\n事后技能效用更新：技能组与基线组的成功率差值作为任务级技能效用信号；事后内在奖励塑形：技能注入轨迹表现优于基线组时获得额外奖励；策略优化：将内在奖励融入总回报，基于 GRPO 算法完成策略更新。\n## 反思驱动的技能生成\n当任务组表现低于阈值时自动触发反思机制，分析技能组的失败轨迹和成功轨迹，从中提炼出新的任务技能和步骤技能，经去重后加入技能库。\n## 技能检索与库管理\n设计两阶段检索流程：\n第一阶段：根据语义相似度检索 top-m 候选技能；第二阶段：结合归一化语义相似度、技能效用和 UCB 探索项的综合分数排序，选出 top-k 技能注入策略上下文。同时通过效用导向的定期剪枝防止技能库无限膨胀，新生成的技能享有保护期以确保充分评估。\n## 主要能力\n双粒度技能抽象：任务技能提供高层战略指导，步骤技能提供细粒度战术纠错；策略-技能库协同进化的联合训练范式；动态效用评估与技能库剪枝维护。\n## 研究背景与贡献\n该条 summary 与标题写作“根据模型能力动态调整 Skill 策略”,但据 arxiv abstract,D2Skill 实为面向 agentic RL 的动态双粒度技能库,核心并非按模型能力调整策略,归类/映射可能有误。abstract 显示:agentic RL 可从可复用经验中获益,但现有基于技能的方法多只抽取轨迹级指导,缺乏维护演化技能记忆的原则性机制。D2Skill 把可复用经验组织为提供高层指导的任务技能(task skills)与提供细粒度决策支持与纠错的步骤技能(step skills)。它通过同一策略下配对的基线 rollout 与注入技能 rollout 联合训练策略与技能库,用二者表现差距导出用于技能更新与策略优化的事后效用(hindsight utility)信号。技能库完全由训练期经验构建,并通过反思持续扩展、以效用感知的检索与剪枝维护。\n## 实验与要点\n在 ALFWorld、WebShop 与检索增强 QA 任务上评测,D2Skill 在不同规模模型上均大幅超越无技能基线。消融与分析显示双粒度技能建模与动态技能维护对增益均关键;学得技能表现出更高效用、可跨评测设置迁移,且仅带来适度训练开销。summary 所述“按模型能力动态调整策略”缺乏 abstract 支撑,需查原文核实。\n以任务技能与步骤技能双粒度组织可复用经验,用配对 rollout 的效用差信号联合优化策略与技能库,并动态维护技能记忆,显著超越无技能基线。",
    "evaluation": "在 ALFWorld、WebShop 与检索增强 QA 任务上评测,D2Skill 在不同规模模型上均大幅超越无技能基线。消融与分析显示双粒度技能建模与动态技能维护对增益均关键;学得技能表现出更高效用、可跨评测设置迁移,且仅带来适度训练开销。summary 所述“按模型能力动态调整策略”缺乏 abstract 支撑,需查原文核实。",
    "mainFinding": "以任务技能与步骤技能双粒度组织可复用经验,用配对 rollout 的效用差信号联合优化策略与技能库,并动态维护技能记忆,显著超越无技能基线。",
    "limitations": "归类/映射可能有误:summary 描述的“按模型能力调整”与 abstract 不符,方法定位需以原文为准;技能库依赖训练期轨迹,离线经验多样性不足时收益可能受限。技能库管理机制仍有优化空间。跨领域迁移能力有限。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2603.28716"
      },
      {
        "label": "代码",
        "href": "https://github.com/TU2021/D2Skill-AgenticRL"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2022678212954657726"
      }
    ],
    "citation": "D2Skill. https://arxiv.org/pdf/2603.28716",
    "figures": [
      {
        "src": "figures/skill-d2skill-d2skill_architecture_overview.png",
        "caption": "D2Skill 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillclaw",
    "page": "skill",
    "title": "SkillClaw",
    "shortTitle": "SkillClaw",
    "category": "skill-optimization",
    "maturity": "growing",
    "score": 0.477,
    "year": 2026,
    "venue": "arXiv 2026-04",
    "authors": "",
    "methodFamily": "skill optimization",
    "tags": [
      "optimization",
      "skill optimization",
      "active"
    ],
    "scores": {
      "clarity": 0.5,
      "evidence": 0.4,
      "reproducibility": 0.43,
      "adoption": 0.35,
      "selfEvolution": 0.78
    },
    "summary": "Skill 自动优化与学习框架",
    "methodCore": "整个流程分白天和夜晚两个阶段。白天用户正常使用，系统在后台记录完整交互因果链；夜晚进化器分析轨迹、修正技能、跑验证，通过后部署给所有人。技能池只在验证通过的方向移动，不会退化。\n因果链追踪：不只是记对话内容，而是记录完整的\"用户提示 → Agent 动作（含工具调用）→ 中间反馈（工具结果、错误、用户回复）→ Agent 最终响应\"链路。大部分技能层面的失败是过程性的——参数格式错了、少了一步校验、调用顺序反了——这些问题不会出现在最终响应里，只有顺着动作-反馈链往回追溯才能定位到具体哪一步出错。\n按技能分组 + $G(∅)$挖掘：每条轨迹按引用了哪些技能分组，没引用任何技能的进$G(∅)$ 。同一个技能被不同用户在不同环境下调用，有的成功有的失败，技能本身就成了可控变量，不需要刻意设计对照实验，跨用户数据自然暴露了技能在什么条件下好使、什么条件下会崩。$G(∅)$用于识别反复出现但没被任何技能覆盖的操作模式。\n进化器——AI 进化 AI：进化器是 LLM Agent，不是手写规则。同时看成功和失败记录——成功定义\"不变量\"（绝对不能动的已验证有效部分），失败定义\"靶点\"（需要修正的行为）。三种动作：Refine（根据失败模式修正现有技能）、Create（从 $G(∅)$ 中创建新技能）、Skip（证据不够不动）。保守编辑原则：能改一行不改一段，不动 API 端口/输出路径/payload 格式除非多条会话明确证明信息已变，区分\"技能有问题\"和\"Agent 好好用技能\"。\n夜间验证 + 单调部署：所有候选更新在真实环境里用同样工具链跑新旧对比，验证成功率。只有确实更好的才部署，第二天所有人自动拿到升级。技能池不会退化。\n## 主要能力\n跨用户技能进化：每个人的踩坑经验自动贡献给整个生态，你踩过的坑后面的人不用再踩；因果链追踪让过程性失败可定位——不是只知道\"任务失败了\"，而是知道在哪个具体步骤、因为什么原因失败；保守编辑 + 单调部署确保技能池只会变好不会变差——验证通过的才合并，被拒的不部署；进化器同时看成功和失败，实现累积式进化——每次只修正识别出的缺陷，保留已验证有效的不动，避免修一个 bug 搞坏另一个流程。\n## 研究背景与贡献\nSkillClaw 针对 OpenClaw 类 LLM 智能体依赖可复用技能、但技能部署后基本保持静态的问题:相似的工作流、工具使用模式与失败模式在不同用户间被反复重新发现,系统无法随经验改进。不同用户的交互提供了关于某技能何时奏效或失败的互补信号,但现有系统缺乏把这类异构经验转化为可靠技能更新的机制。为此,SkillClaw 提出面向多用户智能体生态的集体技能进化框架,把跨用户与跨时间的交互作为改进技能的主要信号。它持续聚合使用中产生的轨迹,并交由一个自主进化器(autonomous evolver)处理,后者识别反复出现的行为模式,并将其转化为对技能集的更新——或精炼既有技能,或以新能力扩展技能。所得技能维护在共享仓库中并在用户间同步,使在某一情境中发现的改进能在系统范围内传播,且无需用户额外投入。",
    "evaluation": "通过把多用户经验整合进持续的技能更新,SkillClaw 实现跨用户知识迁移与累积式能力提升。在 WildClawBench 上的实验表明,在有限交互与反馈下,它显著提升了 Qwen3-Max 在真实智能体场景中的表现。abstract 仅报告“显著提升”而未给出具体数值,增益幅度需查原文核实。",
    "mainFinding": "把跨用户、跨时间的交互轨迹作为主要信号,由自主进化器提炼为对共享技能库的精炼或扩展并在用户间同步,实现集体式技能进化与知识传播。",
    "limitations": "abstract 未给出具体提升数值,增益幅度需查原文;多用户轨迹聚合可能引入隐私与噪声问题,自主进化器把异构经验转为更新的可靠性依赖模式识别质量。目前只是小规模测试（8 个并发用户、6 天周期），更大规模下的进化稳定性未验证。多个技能同时进化时的互相冲突问题（技能 A 改了会影响技能 B 的使用场景）没有处理。技能池越来越大后如何高效组织和检索未涉及。进化器本身的开销（LLM 推理成本）在论文中未量化分析。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2604.08377"
      },
      {
        "label": "代码",
        "href": "https://github.com/AMAP-ML/SkillClaw"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2015436383439847936"
      }
    ],
    "citation": "SkillClaw. https://arxiv.org/pdf/2604.08377",
    "figures": [
      {
        "src": "figures/skill-skillclaw-skillclaw_overview.png",
        "caption": "SkillClaw 方法概览"
      },
      {
        "src": "figures/skill-skillclaw-skillclaw_architecture_overview.png",
        "caption": "SkillClaw 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-embodiskill",
    "page": "skill",
    "title": "EmbodiSkill",
    "shortTitle": "EmbodiSkill",
    "category": "skill-optimization",
    "maturity": "growing",
    "score": 0.497,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "",
    "methodFamily": "skill optimization",
    "tags": [
      "optimization",
      "skill optimization",
      "research"
    ],
    "scores": {
      "clarity": 0.55,
      "evidence": 0.4,
      "reproducibility": 0.33,
      "adoption": 0.35,
      "selfEvolution": 0.88
    },
    "summary": "技能感知反思机制+双层技能结构,实现具身 Agent 技能靶向修订,ALFWorld 93.28% 超 frontier model",
    "methodCore": "EmbodiSkill 针对具身场景中单主体自执行、自复盘、自修改的闭环痛点，核心解决\"技能缺陷\"与\"执行失误\"的区分问题：\n1. 双层技能结构（Skill Body + Appendix）：将单一技能拆分为技能体（核心正文规则，存储标准正确的任务执行逻辑）和附录（动态提醒事项，记录执行偏差和操作疏漏），不改动主干规则，彻底解决误修改问题。\n2. 四类精细化反思（Skill-Aware Reflection）：将所有任务轨迹分为发现（新能力识别）、优化（已有技能改进）、技能缺陷（说明书写错）和执行失误（说明书正确但未照做）四类。前三类针对性修订技能体，执行失误严格保留原有技能体，仅在附录追加操作提醒并合并去重。\n3. 三段式闭环修订流程：第一步聚合多轮反思信号，对发现、优化、缺陷类信息去重消冲突；第二步仅针对信号指向的问题点位局部修订技能体，不全局重写；第三步利用执行失误信号更新附录提醒，形成差异化记录。\n## 关键设计\n不修改模型参数，全程无训练、外部化迭代；核心洞察：执行失误不应触发技能修改，否则正确内容被错误覆盖导致越迭代越退化；技能感知式靶向进化效果远高于粗粒度全局更新。\n## 主要能力\n具身场景突破：ALFWorld 任务成功率 93.28%，较 GPT-5.2 直接执行领先 31.58 个百分点，Puttwo 多物体子任务达到 100% 满分；跨基准验证：EmbodiedBench 上 EB-Habitat 52.33%，EB-Navigation 61.33%；快速收敛：10 轮修订中快速上升并稳定在高位，远优于无感知进化的波动和低收敛。\n## 研究背景与贡献\nEmbodiSkill 面向具身智能体:技能可指导物体搜索、动作执行与状态变化,但具身环境在布局、物体状态等执行因素上多变,技能须从任务执行产生的轨迹中自进化。现有技能自进化方法多在数字环境中开发,常把轨迹转为粗粒度技能更新;直接搬到具身场景有问题,因为一次失败可能不仅反映技能内容错误,也可能是执行失误——智能体未遵循本已有效的指导。为此提出一个免训练框架,通过技能感知反思与定向修订实现具身技能自进化。EmbodiSkill 针对当前技能解读每条轨迹,用“技能需改变”的证据更新技能正文,用“执行失误”的证据保留并强调有效指导,从而把两类失因区分开、避免错误地改写本正确的技能。summary 提到的“双层技能结构”在 abstract 中未明确表述,归类/映射可能有偏差,此处依据 abstract 以“技能感知反思+定向修订”为准。",
    "evaluation": "在 ALFWorld 与 EmbodiedBench 上评测,EmbodiSkill 一致提升具身任务成功率。在 ALFWorld 上,它使冻结的 Qwen3.5-27B 执行器达到 93.28% 任务成功率,比作为直接智能体、不带技能的 GPT-5.2 高出 31.58%,表明技能感知的自进化能帮助具身智能体从自身轨迹中积累可复用的程序性知识。",
    "mainFinding": "以技能感知反思区分“技能需改”与“执行失误”两类失因并做定向修订,免训练地让具身智能体从轨迹积累可复用程序知识,ALFWorld 达 93.28%。",
    "limitations": "summary 所称“双层技能结构”在 abstract 中无对应表述,该模块名归类/映射可能有误;免训练依赖 LLM 反思质量,失因归因错误会导致误修订。仅验证了具身智能场景（ALFWorld、EmbodiedBench），CLI 数字工具场景未覆盖。依赖较强的反思模型（GPT-5.2、Gemini-3-flash 作为进化模型），弱模型反思质量受限。附录持续增长可能导致上下文过载，缺乏自动裁剪机制。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.10010"
      },
      {
        "label": "知乎详解",
        "href": "https://new.qq.com/rain/a/20260525A09ONS00"
      }
    ],
    "citation": "EmbodiSkill. https://arxiv.org/abs/2605.10010"
  },
  {
    "id": "skill-source-autoskill",
    "page": "skill",
    "title": "AutoSkill",
    "shortTitle": "AutoSkill",
    "category": "skill-optimization",
    "maturity": "growing",
    "score": 0.497,
    "year": 2026,
    "venue": "arXiv 2026-03",
    "authors": "",
    "methodFamily": "skill optimization",
    "tags": [
      "optimization",
      "skill optimization",
      "active"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.45,
      "reproducibility": 0.38,
      "adoption": 0.4,
      "selfEvolution": 0.73
    },
    "summary": "双循环耦合架构实现技能增强响应生成与技能进化,SKILL.md 版本化自治,编程技能历经 34 轮迭代",
    "methodCore": "AutoSkill 由技能增强响应生成与技能进化两个耦合循环构成，辅以模块化组件与标准化流程，实现端到端终身学习：\n1. 技能增强响应生成循环（左环）：查询重写模型将用户查询与对话历史转化为检索导向的独立查询；混合检索结合稠密语义相关性得分与词法 BM25 得分加权求和（Rel = λŷd + (1-λ)ŷb），筛选 Top-K 相关技能；技能条件响应生成将技能渲染为紧凑上下文注入对话模型提示词。\n2. 技能进化循环（右环）：技能提取模型基于用户查询序列提取可复用技能候选，聚焦持久化约束和流程而非一次性请求；检索辅助技能管理将候选转化为检索查询匹配最相似已有技能，通过判断模型决策 add/merge/discard；版本化技能合并通过语义融合（非简单拼接）将新约束整合至已有技能，同步更新版本号。\n3. 四阶段技能生命周期：经验获取（收集对话消息和行为轨迹）→ 技能提取（抽象生成可复用能力）→ 技能维护与版本化（add/merge/discard 决策优化技能库）→ 技能复用（检索注入生成过程）。\n## 关键设计\n技能以标准化 SKILL.md 为载体，包含名称、描述、可执行指令提示、触发词集、标签集、示例集、版本 7 个核心字段；六大功能模块（查询重写、对话响应、技能提取、技能管理判断、技能合并、嵌入）均为提示词驱动；三大核心存储（用户专属技能库、共享技能库、向量缓存库）分层管理；模型无关性：作为插件层兼容现有 LLM，支持跨 Agent、用户、任务的技能共享与迁移。\n## 主要能力\n版本化自我进化：professional_text_rewrite 技能历经 34 轮迭代（v0.1.0→v0.1.34），编程与软件开发（482 个）和写作创作（363 个）是进化最活跃领域；跨会话能力积累：10,243 个对话（英文 GPT-3.5 子集）生成 631 个技能，热门标签 python（98 次）、javascript（38 次）、excel（36 次）；多端部署：Python SDK、Web UI、OpenAI 兼容反向代理三种接入方式。\n## 研究背景与贡献\nAutoSkill 面向实际 LLM 应用中用户反复表达稳定偏好与需求(如减少幻觉、遵循机构写作规范、避免过于技术化措辞)却很少被固化为可复用知识、导致智能体难以跨会话积累个性化能力的问题,提出一个经验驱动的终身学习框架。它使 LLM 智能体能自动从对话与交互轨迹中派生、维护并复用技能:从用户经验中抽象出技能,支持其持续自进化,并在不重训底层模型的情况下把相关技能动态注入未来请求。AutoSkill 被设计为与模型无关的插件层,兼容既有 LLM,并引入标准化的技能表示以便在智能体、用户与任务之间共享与迁移,从而把转瞬即逝的交互经验转化为显式、可复用、可组合的能力。summary 中“双循环耦合”“SKILL.md 版本化”“34 轮迭代”等具体表述在 abstract 中均无对应,归类/映射可能有误。",
    "evaluation": "该论文为框架性阐述,abstract 侧重动机、架构与技能生命周期设计,并相对既有记忆/检索/个性化工作做定位,未给出量化实验或基准结果。summary 所述“34 轮迭代”等具体数字无法据 abstract 佐证,需查原文核实;其价值主张在于把交互经验沉淀为可复用、可迁移的技能层。",
    "mainFinding": "提出与模型无关的插件式终身学习框架,从交互轨迹自动派生、维护并复用技能,免重训注入未来请求,把交互经验固化为可共享的个性化能力。",
    "limitations": "abstract 未含实验证据,summary“34 轮迭代”等数字无法佐证需查原文;“双循环耦合”“SKILL.md”等模块名与 abstract 不符,归类/映射可能有误。版本膨胀风险：高频使用技能版本号持续增长（如 v0.1.34），缺乏自动裁剪和压缩机制。冷门技能停滞：低频使用技能停留在 v0.1.0 无法获得进化信号。技能合并依赖判断模型质量，语义融合在长技能文档上可能出现信息丢失。",
    "related": [],
    "links": [
      {
        "label": "知乎详解",
        "href": "https://blog.csdn.net/no2454410/article/details/159537096"
      },
      {
        "label": "GitHub",
        "href": "https://github.com/ECNU-ICALK/AutoSkill"
      }
    ],
    "citation": "AutoSkill. https://blog.csdn.net/no2454410/article/details/159537096"
  },
  {
    "id": "skill-source-skillopt",
    "page": "skill",
    "title": "SkillOpt",
    "shortTitle": "SkillOpt",
    "category": "skill-optimization",
    "maturity": "mature",
    "score": 0.675,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "",
    "methodFamily": "skill optimization",
    "tags": [
      "optimization",
      "skill optimization",
      "active"
    ],
    "scores": {
      "clarity": 0.8,
      "evidence": 0.6,
      "reproducibility": 0.53,
      "adoption": 0.55,
      "selfEvolution": 0.93
    },
    "summary": "将 Skill 文档视为可训练权重,深度学习训练循环自动优化 Skill,52 组合全最优,平均 +23.5 分",
    "methodCore": "## 有界编辑预算（Textual Learning Rate）：每次最多改 3-4 条规则\n对应深度学习的\"学习率\"概念，每次迭代最多修改 L_t 条规则（默认 4 条），使用余弦调度（早期可多改、后期逐渐减量），防止一次性大幅修改导致的规则冲突和效果雪崩。消融实验证明：L_t=4 的限制编辑效果优于无限制重写 2-3 分——与神经网络学习率过大导致震荡同理。所有修改建议必须是通用规则，不能是针对具体 case 的硬编码。\n## 验证门禁（Validation Gate）：效果不涨直接丢弃修改\n每次修改后的新版本技能必须在完全独立的验证集上跑一遍，只有得分严格高于上一版本才接受——持平也不更新，否则直接丢弃并将本次修改记录到拒绝编辑缓冲区。这条门禁机制保证了优化过程永远不会出现越改越差的情况，是 SkillOpt 效果稳定的核心法宝。\n## 拒绝编辑缓冲区（Rejected-Edit Buffer）：踩过的坑不踩第二次\n所有被验证门禁打回的无效修改被记录到缓冲区，后续迭代时优化器会先检查哪些修改之前被证明无效，不再提出同样的建议。这加速了优化收敛速度，避免在同一个方向上反复尝试失败。\n## 跨纪元慢更新（Epoch-wise Slow/Meta Update）：沉淀长期有效规则\n每迭代 2-3 轮后做一次慢更新：把多轮验证都持续有效的核心规则写到技能文档的受保护区域，这些规则不会被后续的 step 级小修改覆盖，保证核心能力不会因后续迭代退化。这是 SkillOpt 最关键的组件——消融实验中去掉 slow/meta update 后，SpreadsheetBench 从 77.5 暴跌至 55.0（-22.5 分）。\n## 四步闭环流程\nRollout（前向传播）：目标模型携带当前技能文档执行一批任务，收集成功/失败轨迹作为训练信号，模型参数冻结不动。Reflection（梯度计算）：优化器模型分析失败轨迹的共性问题，提炼改进方向，生成结构化编辑建议——两个模型分工（target model 执行，optimizer model 观察分析，同一级别的优化器也可恢复强优化器 56%-74% 的增益）。Edit（权重更新）：对技能文档做 add/delete/replace 三种结构化编辑。Validation Gating（检查点保存）：修改后在验证集评估，分数不涨则不接受。\n## 主要能力\n52 场景全 SOTA：6 个基准测试 × 7 个模型 × 3 种执行环境共 52 个组合全部最优或并列最优，GPT-5.5 平均提升 23.5 分；跨模型迁移：在 GPT-5.4 上优化的技能直接用于 GPT-5.4-mini 和 GPT-5.4-nano，仍保留 80% 以上的提升效果；跨执行环境迁移：在 Codex 环境下优化的表格处理技能直接放到 Claude Code 环境下，直接提升 59.7 分；部署零额外成本：训练成本一次性离线付出，最终输出的技能为纯文本 md 文件（中位数约 920 tokens），人类可读可审计可修改，插入系统提示词即用；低门槛落地：不需要改模型权重，优化成本仅为微调的几十分之一，小团队手动跑都能跑通。\n## 研究背景与贡献\nSkillOpt 主张:当前技能要么手工撰写、一次性生成,要么经松散受控的自我修订演化,都不像针对技能的深度学习优化器,也无法在反馈下可靠地超越起点。作者提出应把技能当作冻结智能体的外部状态来训练,沿用使权重空间优化可复现的同一套纪律。SkillOpt 是据作者所知首个系统化、可控的技能文本空间优化器:一个独立的优化器模型把打分后的 rollout 转为对单个技能文档的有界 add/delete/replace 编辑,且仅当编辑严格提升留出验证集分数时才被接受。文本学习率预算、被拒编辑缓冲区与逐 epoch 的慢/元更新使技能训练稳定,同时在部署时不增加任何推理期模型调用。整体把“技能文档”类比为可训练参数,用可复现的训练循环持续优化,并保证部署零额外推理成本。",
    "evaluation": "跨六个基准、七个目标模型与三种执行框架(直接对话、Codex、Claude Code),SkillOpt 在全部 52 个评测单元上均最优或并列最优,击败 human、one-shot、TextGrad、GEPA、EvoSkill 等竞争者。GPT-5.5 上直接对话平均 +23.5 分、Codex 内 +24.8、Claude Code 内 +19.1;技能跨模型与环境仍保留价值。",
    "mainFinding": "把技能文档当作可训练参数,用受控的有界编辑+验证集接受的训练循环优化,部署零额外推理调用,在 52 个评测单元全最优,GPT-5.5 平均 +23.5 分。",
    "limitations": "优化依赖可打分的 rollout 与留出验证集,缺乏可靠验证信号的任务难以套用;逐 epoch 元更新与被拒编辑缓冲带来训练期额外开销与调参复杂度。依赖可自动评估的验证集，开放性任务暂不适用。训练需要两个模型（target + optimizer），同级别优化器效果打折扣。复杂轨迹类 benchmark 训练 token 消耗较高（37.9-46.4M），但仅需训练一次。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2605.23904"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2044004553406863336"
      },
      {
        "label": "GitHub",
        "href": "https://github.com/microsoft/SkillOpt"
      }
    ],
    "citation": "SkillOpt. https://arxiv.org/pdf/2605.23904",
    "figures": [
      {
        "src": "figures/skill-skillopt-skillopt_overview.png",
        "caption": "SkillOpt 方法概览"
      },
      {
        "src": "figures/skill-skillopt-skillopt_architecture_overview.png",
        "caption": "SkillOpt 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillmas",
    "page": "skill",
    "title": "SkillMAS",
    "shortTitle": "SkillMAS",
    "category": "skill-optimization",
    "maturity": "growing",
    "score": 0.465,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "",
    "methodFamily": "skill optimization",
    "tags": [
      "optimization",
      "skill optimization",
      "research"
    ],
    "scores": {
      "clarity": 0.5,
      "evidence": 0.35,
      "reproducibility": 0.43,
      "adoption": 0.3,
      "selfEvolution": 0.78
    },
    "summary": "识别并解决多 Agent 系统中技能进化与组织结构的适应解耦,效用学习+证据门控驱动双线协同进化",
    "methodCore": "## 适应解耦现象的系统化诊断\nSkillMAS 通过移植应激测试量化了适应解耦的代价：将最终版本技能库塞回初始 Agent 组织，成功率从 94.0% 崩至 68.7%（低于种子基线的 76.1%）；反之将最终 Agent 组织配初始技能库则崩至 50.0%。技能单独涨而组织不调，涨出来的技能不是在帮忙而是在添乱。\n## 效用学习：只给真正使用的技能记功劳\n维护 Skill Utility（技能在某种任务上的成功率）和 Executor Utility（Agent 在某种任务上的成功率）两张效用表，仅从验证过的执行轨迹更新。关键过滤规则：检索不等于使用——只有执行轨迹中实际出现了技能标识符或匹配模式，才算\"被使用\"。效用表用 Monte Carlo 规则更新，更新率随证据累积自动衰减。\n## 有界技能进化 + 证据门控 MAS 重构\n技能修复限定为四类手术级操作：加前置守卫、重排步骤、收紧检索范围、拆分过载技能，非重新生成。MAS 重构由结构化诊断工件驱动——通过分析 Agent 效用趋势、技能重叠度和当前修复效果来判断瓶颈在技能还是组织，每次只做一项变更（新增/删除/合并 Agent 或调整职责边界）。\n## 主要能力\n技能-组织协同进化：技能和 Agent 职责边界共享同一证据源、同步更新，消除适应解耦；精确信用分配：区分\"检索到\"和\"实际使用\"，只给真正起作用的技能记功劳，防止效用表被噪声污染；精确手术而非全量重写：技能修复限定四种有界操作，MAS 重构每次只做一项变更；结构自适应收敛：ALFWorld 收敛到多 Agent 结构，τ-Bench Retail 收敛到单 Agent 结构，系统根据领域特征自动收敛到最优组织形态。\n## 研究背景与贡献\nSkillMAS 指出 LLM 智能体系统被期望在部署后持续改进,但现有工作常把两个适应目标解耦:技能进化与多智能体系统(MAS)重构。这种分离会造成组织瓶颈、上下文压力与错误专业化。为此提出一个用于多智能体系统自适应专业化的非参数框架,把技能进化与 MAS 重构耦合起来。SkillMAS 使用 Utility Learning 从经验证的执行轨迹中分配信用(credit);使用有界的技能进化在不引发未经过滤的技能库膨胀的前提下精炼可复用流程;并在保留的失败与 Executor Utility 表明存在结构性不匹配时,进行证据门控的(evidence-gated)MAS 重构。整体思路是让技能层面的改进与组织结构层面的调整彼此感知、协同演化,从而澄清部署后专业化是如何被归因、更新与应用的。作为非参数框架,它不依赖对模型参数的更新。\n## 实验与要点\n在具身操作、命令行执行与零售工作流三类任务上评测,SkillMAS 在所报告的执行框架下具有竞争力,同时澄清了部署后专业化的归因、更新与应用方式。abstract 仅表述“competitive”而未给出具体量化提升数值,相对基线的增益幅度需查原文核实,summary 中的强度描述亦无法据 abstract 佐证。\n以非参数方式耦合技能进化与 MAS 重构,用效用学习分配信用、有界进化控膨胀、证据门控触发结构调整,协同处理部署后自适应专业化。",
    "evaluation": "在具身操作、命令行执行与零售工作流三类任务上评测,SkillMAS 在所报告的执行框架下具有竞争力,同时澄清了部署后专业化的归因、更新与应用方式。abstract 仅表述“competitive”而未给出具体量化提升数值,相对基线的增益幅度需查原文核实,summary 中的强度描述亦无法据 abstract 佐证。",
    "mainFinding": "以非参数方式耦合技能进化与 MAS 重构,用效用学习分配信用、有界进化控膨胀、证据门控触发结构调整,协同处理部署后自适应专业化。",
    "limitations": "abstract 表述“competitive”而未列具体提升数字,效果强度需查原文;证据门控重构依赖对结构性不匹配的判定,阈值设定与误判风险未详述。未做控制变量消融：没有策略冻结实验，无法精确量化每个组件（技能进化 vs MAS 重构 vs 效用学习）的因果贡献。诊断规则领域局部：判定规则目前是领域局部的启发式，跨领域迁移需重新定义。实验规模有限：每个领域一个基座模型、固定任务集，限制了泛化结论的范围。",
    "related": [],
    "links": [
      {
        "label": "SkillMAS 论文",
        "href": "https://arxiv.org/pdf/2605.09341"
      }
    ],
    "citation": "SkillMAS. https://arxiv.org/pdf/2605.09341",
    "figures": [
      {
        "src": "figures/skill-skillmas-skillmas_architecture_overview.png",
        "caption": "SkillMAS 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillgrad",
    "page": "skill",
    "title": "SkillGrad",
    "shortTitle": "SkillGrad",
    "category": "skill-optimization",
    "maturity": "growing",
    "score": 0.507,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "",
    "methodFamily": "skill optimization",
    "tags": [
      "optimization",
      "skill optimization",
      "research"
    ],
    "scores": {
      "clarity": 0.55,
      "evidence": 0.4,
      "reproducibility": 0.38,
      "adoption": 0.35,
      "selfEvolution": 0.88
    },
    "summary": "将梯度下降四核心概念用文本机制逐一模拟,让技能优化有方向有记忆有信号分解,平均超最强训练基线 6.7 个百分点",
    "methodCore": "## 三层结构化技能包作为可优化\"参数\"\n技能不再是平文本，而是三层结构：L1 元数据头（触发条件、技能名）、L2 SKILL.md 正文（始终加载的核心指引）、L3 资源文件（条件加载的详细过程和边缘案例）。优化时的关键子决策是\"新增内容放哪一层\"：放 L2 始终占上下文但保证被读到，放 L3 只在需要时加载但可能被遗漏。\n## 损失证据：对比成功轨迹 + 失败轨迹\n每轮收集的不仅是通过/失败结果，还有完整轨迹。关键创新是识别\"本轮成功但上轮失败\"的对比成功轨迹——这类轨迹揭示了当前技能到底学会了什么、哪些修改应该保留。纯失败驱动优化里这部分信息被完全丢弃。\n## 动量代理：模式记忆 + 覆盖层\n动量 Agent 维护两份状态：持久模式记忆累积跨轮反复出现的诊断模式（如\"分页处理三次出错\"，从模糊逐步精确化），当前覆盖层只反映本轮新出现的模式。两者共同输入给更新器，使优化不会每轮从零开始，而是带着\"什么根问题最应该改\"的累积证据。\n## 分层补丁手术\n更新器不重写技能，而是按分层逻辑做手术级修改——核心流程改 L2，长过程和边缘案例改 L3，触发条件改 L1。这个分层的价值在于不让一次性的任务细节污染核心指引，也不让核心工作流被放错位置导致找不到。\n## 主要能力\n梯度下降式技能优化：将优化分解为参数、损失、梯度、动量四个组件，每轮迭代系统性地朝更好方向更新；对比诊断：同时利用失败轨迹（缺什么）和跨轮对比成功轨迹（什么要保留），比纯失败驱动多一个正面的信号维度；跨轮记忆累积：动量机制让反复出现的修正模式从模糊变得越来越精确，优化器不做\"每轮从零开始\"的短视决策；自适应层级路由：新增内容根据性质自动落入 L1/L2/L3 三层，防止上下文被无关内容撑爆。\n## 研究背景与贡献\nSkillGrad 面向技能可靠性问题:无论第三方下载还是自生成,技能常不可靠、不完整或过时,而现有技能进化方法多用启发式反思、缺乏显式优化表述。为此提出一个受梯度下降启发的技能优化框架,把技能包当作要以梯度下降方式优化的结构化参数:任务执行提供轨迹级的损失证据,自动诊断继而提供指示修正方向的基于文本的梯度(text-based gradients)。为在多轮迭代间稳定优化,一个动量智能体(momentum agent)把反复出现的诊断模式累积为持久的记忆覆盖层(memory overlay);最后由一个基于 LLM 的 patcher 执行参数更新,对技能包施加分层感知的编辑(layer-aware edits)。整体把损失、梯度、动量、参数更新四个概念逐一以文本机制模拟,使技能优化具有方向性、记忆性与信号可分解性,而非无结构的反思。",
    "evaluation": "在 SpreadsheetBench Verified 与 WikiTableQuestions 上评测,SkillGrad 在两个骨干 LLM 上一致优于基于训练的技能进化基线,平均比最强的基于训练基线高 6.7 个百分点。消融进一步表明动量与对比式诊断均对最终技能质量有贡献。",
    "mainFinding": "把技能包视为可优化参数,用文本梯度指示修正方向、动量智能体累积诊断记忆、patcher 分层编辑更新,平均超最强训练基线 6.7 个百分点。",
    "limitations": "评测限于两个表格类基准与两个骨干模型,更广任务域的普适性未验证;文本梯度与诊断依赖 LLM 自动生成,诊断偏差会传导为错误的修正方向。优化范围依赖训练任务：梯度信号的质量取决于训练任务覆盖度，任务集不够全面时技能优化可能不完整。动量质量依赖累积轮次：初始轮次的模式记忆比较模糊，早期优化的效率受限。仅两个基准上验证：SpreadsheetBench 和 WikiTableQuestions，更多领域通用性未证。",
    "related": [],
    "links": [
      {
        "label": "代码",
        "href": "https://github.com/wwwhy725/SkillGrad"
      },
      {
        "label": "SkillGrad 论文",
        "href": "https://arxiv.org/pdf/2605.27760"
      }
    ],
    "citation": "SkillGrad. https://github.com/wwwhy725/SkillGrad",
    "figures": [
      {
        "src": "figures/skill-skillgrad-skillgrad_architecture_overview.png",
        "caption": "SkillGrad 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillc",
    "page": "skill",
    "title": "SKILLC",
    "shortTitle": "SKILLC",
    "category": "skill-optimization",
    "maturity": "growing",
    "score": 0.495,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "",
    "methodFamily": "skill optimization",
    "tags": [
      "optimization",
      "skill optimization",
      "research"
    ],
    "scores": {
      "clarity": 0.55,
      "evidence": 0.4,
      "reproducibility": 0.38,
      "adoption": 0.35,
      "selfEvolution": 0.83
    },
    "summary": "将技能内化升级为信用分配问题,CSCA 让 Agent 知道不带技能也能成功比靠技能成功更值得学,ALFWorld 超 SKILL0 5.5 个百分点",
    "methodCore": "## 对比技能信用分配（CSCA）：双流优势估计\n对每个活跃任务类型，同一策略参数同时采样两组 rollout——一组带技能注入、一组不带。标准 GRPO 将所有 rollout 混在一起归一化，导致不带技能但靠自己成功的 rollout 被人为压低优势。CSCA 将优势分解为两个互补流：全局质量流保持标准归一化维持稳定性，对比修正流基于任务级对比信号 $\\hat{\\Delta}(x)$ 对不带技能的 rollout 施加单向向上修正——独立成功比靠技能成功更值得优化器关注。\n## 验证驱动的自适应课程\n每隔 d 步在验证集上用\"有技能\"和\"无技能\"两种条件各跑一次，测量成功率差异，经 EMA 平滑和 Sigmoid 激活后联合控制三个课程参数：\n归属强度：内化差距越小修正力度越大；技能注入比例：从早期大部分带技能渐进到晚期仅保留少量探针预算；活跃技能集：对比信号持续为零则从活跃集中移除，单调收缩不恢复。\n三个参数全由同一验证对比信号驱动，无需人工调参。\n## 与 RESKILL 和 SKILL0 的定位差异\nSKILL0：用课程门控决定何时撤技能但优化时混在一起归一化，好的课程控制但不是好的优化。RESKILL：在同组内对比新旧技能版本，SKILLC 对比的是有技能 vs 没技能更进一步：技能不只要一起进化，进化到最后应被策略吸收、内化、可以被扔掉。\n## 主要能力\n内化盲区的系统性解决：通过双流优势估计让梯度\"看到\"独立成功的价值，填补 SKILL0 的优化盲区；无技能推理下超越技能增强方法：WebShop 上 SKILLC 无技能分数超过 SkillRL 带技能分数；自适应课程：三个课程参数全由验证对比信号自动驱动，无需人工干预；信号质量感知：对比信号弱的简单任务（如 Pick）CSCA 增益不大，信号强的任务（Heat/Cool/Pick2）提升达 +10% 到 +33%。\n## 研究背景与贡献\nSkillC 面向长时序 agentic 强化学习:结构化技能提示能改善探索,技能增强 RL 在推理时保留外部技能,而技能内化 RL 在训练时撤除技能以实现自主表现。但现有内化方法只用技能有用性对比做课程控制,策略更新本身不变,无法区分“依赖技能的成功”与“自主的成功”。SkillC 基于对比式技能信用分配(Contrastive Skill Credit Assignment,CSCA),把这种对比转化为直接的内化学习信号:在同一次策略更新内,为活跃技能类型的任务采样配对的注入技能与无技能 rollout,并通过一个双流优势估计器(dual-stream advantage estimator)把二者的任务级对比注入优化,在保持全局排名的同时,施加偏向无技能成功的单侧修正。一个平滑的验证级信号进一步驱动对归因强度、rollout 分配与单调活跃集剪枝的自适应课程,使智能体学会“不靠技能也能成功”比“靠技能成功”更值得内化。",
    "evaluation": "在 ALFWorld 与 WebShop 上的实验表明,在运行时不访问技能的前提下,SkillC 分别以 5.5% 与 4.4% 超越最强的先前技能内化 RL 基线,同时与技能增强 RL 方法保持竞争力。summary 中所称“超 SKILL0 5.5 个百分点”的对照对象名称在 abstract 中未点明,应理解为“最强先前内化基线”。",
    "mainFinding": "把技能内化转化为对比式信用分配问题,用双流优势估计偏向无技能成功、辅以自适应课程,运行时不用技能即在 ALFWorld/WebShop 超最强内化基线 5.5%/4.4%。",
    "limitations": "评测限于 ALFWorld 与 WebShop 两类交互任务,泛化性待验证;配对 rollout 采样与双流优势估计增加训练期采样与计算开销。对比信号质量关键：在 Pick 子任务上 CSCA 反而退步 11.5%，因为任务本身太简单、对比信号太弱、修正流引入噪声。单一环境验证：评测仅在 ALFWorld 和 WebShop 两个文本环境上，多任务类型场景更适合 CSCA 发挥。小模型上的技能理解天花板未深入分析：4B 模型是否能充分理解\"独立成功\"这一概念值得进一步验证。",
    "related": [],
    "links": [
      {
        "label": "SKILLC 论文",
        "href": "https://arxiv.org/pdf/2605.27899"
      }
    ],
    "citation": "SKILLC. https://arxiv.org/pdf/2605.27899",
    "figures": [
      {
        "src": "figures/skill-skillc-skillc_architecture_overview.png",
        "caption": "SKILLC 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skill0-5",
    "page": "skill",
    "title": "Skill0.5",
    "shortTitle": "Skill0.5",
    "category": "skill-optimization",
    "maturity": "growing",
    "score": 0.535,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "",
    "methodFamily": "skill optimization",
    "tags": [
      "optimization",
      "skill optimization",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.45,
      "reproducibility": 0.38,
      "adoption": 0.4,
      "selfEvolution": 0.88
    },
    "summary": "打破全外化 vs 全内化困局,通用技能内化打底+任务特定技能外挂调用,ALFWorld OOD 超最强基线 13.2 个百分点",
    "methodCore": "## 难度感知路由：按任务困难度分桶，各自走不同优化路径\n每个训练 step，Agent 先用标准配置（仅带任务特定技能）对每个任务跑 G 条轨迹，算出通过率 $p_i$ 后分三桶：困难任务（$p_i=0$，全零 reward）、中等任务（$ 0 < p_i < \\eta_t $）、简单任务（$ p_i > \\eta_t $）。门槛 $\\eta_t$ 是过去 W 个 step 的 batch 级通过率滑动均值，随 Agent 整体水平动态调整。三种损失互斥——一个任务只触发一条优化路径。\n## 特权蒸馏：打破全零 reward 的梯度死锁\n困难任务全零 reward 导致 GRPO 组内归一化方差为零、优势信号消失、训练卡死。Skill0.5 换思路：给 Agent 额外加上通用技能（特权提示），在\"开卷\"条件下收集成功轨迹，然后用 token 级 JSD 散度让学生策略（无通用技能）模仿教师策略（有通用技能）的每一步推理。教师侧 stop-gradient 不动，学生单向对齐。通用技能被蒸馏进参数不是死记硬背，而是作为推理能力内化。\n## 反事实捷径诊断：防止 Agent 背下 ID 映射、OOD 直接崩盘\n简单任务通过率高不一定是好事——Agent 可能完全没读技能，背下了\"任务指令→动作\"的直接映射。检测方法：对每个简单任务额外跑一组拆掉技能的轨迹，计算利用增益 = 有技能通过率 − 无技能通过率。增益小或为负说明 Agent 在走捷径。利用增益的滑动均值作为动态锚点，低于锚点的任务其 GRPO 优势被负调制分量拉低——在 batch 里被降权，不是因轨迹差，而是因没真正用技能。\n## 主要能力\n通用/特定技能解耦训练：通用技能内化进模型参数（管\"怎么思考\"），任务特定技能外挂检索注入（管\"这次做什么\"），打破全外化 prompt 爆炸和全内化新旧技能冲突的死局；OOD 泛化突破：ALFWorld OOD 超 SkillRL 13.2 个百分点，WebShop 上 OOD 反超 ID——这是在逼 Agent 走\"读技能→理解→执行\"这条更难但更可泛化的路；反捷径机制：通过反事实对照实验检测技能利用增益，防止 Agent 背诵 ID 捷径而在 OOD 崩盘；零梯度冷启动解决：特权蒸馏用教师成功轨迹打破全零 reward 梯度死锁，比靠随机探索硬扛冷启动快得多。\n## 研究背景与贡献\nSkill0.5 面向 agentic 强化学习:为 LLM 装备显式技能是让自主智能体解决复杂任务的有前景范式,技能可分为用于广泛认知迁移的通用技能(general skills)与用于动态执行的任务特定技能(task-specific skills)。但现有基于技能的 RL 通常在“全外化”(带来高昂上下文开销)与“全内化”(易过拟合与知识冲突)之间被迫二选一。为破解此困局,Skill0.5 显式区分技能处理方式,将通用技能内化与任务特定技能利用相结合。它由一个动态的、难度感知的路由器(difficulty-aware router)驱动,把任务分流到不同的掌握层级以施加定制的优化策略:对困难任务,通过特权蒸馏(privileged distillation)内化通用技能以构建认知基础;对简单任务,通过诊断式探测(diagnostic probing)惩罚捷径并强制任务特定技能的利用。整体在内化打底与外挂调用间取得平衡。",
    "evaluation": "在 ALFWorld 与 WebShop 上的实验表明,Skill0.5 同时优于基于记忆与基于技能的 RL 基线,在分布内(in-distribution)与分布外(out-of-distribution)场景下均带来性能提升。summary 所述“ALFWorld OOD 超最强基线 13.2 个百分点”的具体数值在 abstract 中无法佐证,需查原文核实。",
    "mainFinding": "以难度感知路由分流任务,对难任务特权蒸馏内化通用技能、对易任务诊断探测强制利用任务特定技能,兼顾内化与外化,在 ID 与 OOD 场景均超基线。",
    "limitations": "abstract 未给具体数字,summary“+13.2pp”无法据 abstract 佐证需查原文;评测限于 ALFWorld 与 WebShop,路由器难度阈值鲁棒性未详述。仅在 ALFWorld 和 WebShop 两个文本交互仿真环境上验证，代码生成、多模态、开放网页导航等复杂场景未覆盖。技能库需要预先手工定义，自动化技能发现和演进是另一回事。基座模型为 7B 规模，更大模型上的扩展行为和双阶段训练在大规模下的稳定性未知。",
    "related": [],
    "links": [
      {
        "label": "Skill0.5 论文",
        "href": "https://arxiv.org/abs/2605.28424"
      },
      {
        "label": "Skill0.5 代码仓库",
        "href": "https://github.com/JasonZhujp/Skill0_5"
      }
    ],
    "citation": "Skill0.5. https://arxiv.org/abs/2605.28424",
    "figures": [
      {
        "src": "figures/skill-skill0.5-skill0.5_overview.png",
        "caption": "Skill0.5 方法概览"
      },
      {
        "src": "figures/skill-skill0.5-skill0.5_architecture_overview.png",
        "caption": "Skill0.5 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skill-ee",
    "page": "skill",
    "title": "SkillEE",
    "shortTitle": "SkillEE",
    "category": "skill-optimization",
    "maturity": "mature",
    "score": 0.618,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "Qinghua Xing, Yinda Chen, Yaping Jin, Zhenhe Wu, Bohan Lin, Hang Zhou",
    "methodFamily": "skill optimization",
    "tags": [
      "optimization",
      "skill optimization",
      "academic"
    ],
    "scores": {
      "clarity": 0.7,
      "evidence": 0.6,
      "reproducibility": 0.58,
      "adoption": 0.55,
      "selfEvolution": 0.78
    },
    "summary": "成本感知的 Skill 重写框架,保留操作锚点降低下游执行成本,跨模型迁移平均减少 14.7%",
    "methodCore": "## 问题诊断：技能缩短 ≠ 成本降低，可能适得其反\n实验给了一个反直觉的数据点：均匀压缩缩短了技能文档，但下游 Agent token 使用量增至 1.14 倍原基线。 技能的有效性依赖稀疏分布的操作锚点：API 构造器、命令行标志、验证阈值、文件格式约定、恢复规则。删除周围解释可以减少技能自身的 token 成本，但误删了锚点会引发下游探索、调试、工具重试和恢复操作，总成本反而更高。技能重写的本质问题不是\"怎么更短\"，而是\"什么东西必须留下\"。\n## 受控评估框架：解耦技能、任务、环境和验证器\nSkillEE 构建了一个四组件解耦框架：(1) 技能结构分析器提取锚点类型和分布；(2) 多种信息保持重写策略（API/代码锚定、工作流守卫、规则/公式锚定等）；(3) 固定任务指令和环境保证可复现比较；(4) 独立验证器产出去耦的质量和成本信号。基于 SkillsBench 的实验揭示不同策略对不同任务族有显著性差异：实现密集型任务受益于 API/代码锚定，验证密集型任务需要工作流守卫，规则驱动任务依赖公式/阈值锚定。不存在普适的最优重写模板。\n## 策略学习：任务-技能条件化的锚点选择器\n基于诊断发现，SkillEE 训练一个任务-技能条件化选择器决定每对 (task, skill) 应用哪种保持策略。该策略在主要 held-out 评估中减少总执行成本 7.0%。跨模型迁移实验中，冻结的策略在不同 Agent 栈上部署，减少总成本 14.7%、下游 token 成本 13.7%，同时验证器质量保持或略微提升。这说明学到的是\"任务需要什么锚点\"的知识，而非特定模型的行为模式。\n## 主要能力\n将技能重写从文本压缩切换到成本感知的操作知识工程视角，点出均匀压缩的陷阱；定义经济指标体系（技能 token 成本、下游 Agent token 成本、总执行成本、执行超支），超越仅关注技能长度的分析；多策略对比揭示不同任务族需要不同的锚定策略，不存在普适模板；任务-技能条件化的选择策略在跨模型迁移中表现更强（14.7%/13.7%），表明学到的是一般任务知识。\n## 研究背景与贡献\nSkillEE 从经济学视角研究技能重写:LLM 智能体日益依赖技能(编码工作流、工具使用、实现模式、校验检查与领域规则的可复用程序性文档)。技能重写常被当作提示压缩,但更短的技能可能因移除防止盲目探索、调试与恢复的稀疏操作锚点(operational anchors),反而让智能体更昂贵。其受控框架先剖析技能结构,用信息保留策略重写技能,并在固定的任务指令、环境与验证器下评估重写结果。实验揭示不同策略间存在明显的质量-成本权衡:API/代码锚定、工作流护栏、规则/公式锚定分别惠及不同任务族,不存在普适最优模板。作者据此主张把技能设计视为成本感知的操作知识工程,而非提示压缩,强调保留而非一味删减关键操作锚点。",
    "evaluation": "在 SkillsBench 上实验。主留出评测中,学得策略使总成本降低 7.0%、下游 agent-token 成本降低 6.0%;在冻结的跨模型迁移中,对应降幅平均为 14.7% 与 13.7%,同时验证器质量得以保持。结果支持“技能设计应是成本感知的操作知识工程”这一定位。",
    "mainFinding": "从质量-成本权衡视角重写技能,保留稀疏操作锚点而非一味压缩,主评测降本 7.0%/6.0%,跨模型迁移平均降本 14.7%/13.7% 且质量不损。",
    "limitations": "实验限于 SkillsBench,不同策略惠及不同任务族且无普适模板,策略选择需按任务族人工权衡;成本度量以 token 为主,未涵盖端到端时延等其他成本维度。实验仅在 SkillsBench 上验证，更广泛的任务类型和环境范围下的泛化性待确认。当前重写策略固定为预定义的几类模板，策略空间受限于人工设计的锚定类型。跨模型迁移中的泛化增益来源未充分解析：是锚点选择的泛化还是迁移目标模型恰好兼容。成本计算聚焦于 token 层面的直接推理开销，未包含技能开发和维护的人力成本。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.09421"
      },
      {
        "label": "代码",
        "href": "https://github.com/1Reminding/Skill_EE"
      }
    ],
    "citation": "SkillEE. https://arxiv.org/abs/2606.09421",
    "figures": [
      {
        "src": "figures/skill-skill-ee-skill-ee_architecture_overview.png",
        "caption": "SkillEE 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillaxe",
    "page": "skill",
    "title": "SKILLAXE",
    "shortTitle": "SKILLAXE",
    "category": "skill-optimization",
    "maturity": "growing",
    "score": 0.515,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "",
    "methodFamily": "skill optimization",
    "tags": [
      "optimization",
      "skill optimization",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.45,
      "reproducibility": 0.53,
      "adoption": 0.4,
      "selfEvolution": 0.68
    },
    "summary": "完全无监督技能自改进框架,四维度自动诊断缺陷,SkillsBench 相对提升 28%",
    "methodCore": "## 质量影响维度：技能整体是否有正向贡献？\nLLM 裁判同时比对带技能和不带技能的两个输出（顺序随机化），先判断方向（更好/更差）再估计幅度。轻微退化说明大方向对、局部需修；灾难性退化说明技能可能包含根本性错误的指导。该维度是外环信号：告诉你\"有没有问题\"，后面三个维度告诉你\"问题在哪\"。\n## 触发精度维度：技能是否在正确的时机激活？\n从技能描述中自动抽取正向触发短语和负向排除短语，通过依赖解析和否定追踪实现。关键在语境化嵌入：同一词在不同句式含义完全不同。从正负短语的嵌入分布计算三个几何指标：覆盖广度（正向触发是否太窄）、负向特异性（排除区域是否与正向清晰分离）、边界锐度（最差情况下的正负混淆程度）。\n## 指令合规度与故障归因维度：是技能写得烂还是 Agent 没照做？\n先从技能文档自动提取可评估规则集，每条带严重程度权重。然后对每条规则同时评四个信号：是否适用当前任务、Agent 遵循得如何、规则本身是否精确可操作、故障该归到技能还是 Agent。故障归因是核心分叉：规则为\"使用黄色背景（#FFFF00）\"而 Agent 用了 #FFF2CC，是 Agent 没照做；规则仅为\"使用黄色背景\"而 Agent 用了合法黄色，是技能不够精确。同一种行为，归因不同，改进动作完全相反。\n## 解法路径覆盖维度：技能是否支持多种合法解法？\nLLM 先枚举所有合法解法路径，再计算技能内容与每条路径的嵌入对齐程度。分数低说明技能只支持很窄的行为空间：Agent 若选了一条技能完全未覆盖的合法路径，技能等于不存在。\n## 主要能力\n四维度无监督诊断：质量影响（有没有用）、触发精度（时机对不对）、指令合规+故障归因（写得烂还是没照做）、解法覆盖（路径窄不窄）；故障归因区分技能缺陷与 Agent 执行偏差，避免误修正确规则；技能库自动积累：SpreadsheetBench 上仅用 22 个技能达到 LLM 自写 69 个技能的同等效果，技能数量减少 68%；无需人工标注、测试套件或环境奖励，仅需任务描述和两次 Agent 输出。\n## 研究背景与贡献\nSkillAxe 针对技能文档(引导 LLM 智能体的结构化自然语言指令)对现代智能体框架至关重要、但 LLM 难以写出真正奏效技能的问题:在 SkillsBench 上,人写技能使通过率提升 16.2 个百分点,而 LLM 撰写的技能没有可测量的增益。为此提出一个完全无监督的框架,使 LLM 能迭代地诊断并精炼自己的技能。SkillAxe 把技能质量分解为四个可解释维度——质量影响(quality impact)、触发精度(trigger precision)、带故障归因的指令遵从(instruction compliance with fault attribution)、解法路径覆盖(solution-path coverage)——产出结构化的改进简报(improvement briefs),无需任何真值标签、测试套件或环境奖励。整体形成一个不依赖外部监督的自改进引擎,让 LLM 依据这四维诊断持续修订自身技能。",
    "evaluation": "在 SkillsBench 上,SkillAxe 相对未改进的 LLM 技能把通过率相对提升 28%,并弥合了到人写技能差距的 47–67%。作者进一步在 SpreadsheetBench 上验证其作为“持续改进引擎”的在野表现:一个由 SkillAxe 构建的技能库从过去的智能体轨迹中学习,仅用 22 个技能就把通过率从 16.0% 提升到 52.0%。",
    "mainFinding": "以四个可解释维度无监督诊断并迭代精炼自身技能,无需真值/测试/奖励,SkillsBench 相对提升 28%、弥合到人写技能差距的 47–67%。",
    "limitations": "四维诊断依赖 LLM 自我判断质量,无外部真值可能放大自身偏差;评测集中于 SkillsBench 与 SpreadsheetBench,更广任务域的可靠性待验证。技能内部自洽但策略根本错误的情况无法检测，四个维度均假设技能方向基本合理。多技能同时激活时的交互冲突未建模，当前仅处理单技能场景。单轮迭代设计，多轮迭代的收敛性和退化风险尚未验证。诊断质量依赖 LLM 裁判的可靠性，裁判系统性偏差可能传播到改进过程。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.10546"
      }
    ],
    "citation": "SKILLAXE. https://arxiv.org/abs/2606.10546",
    "figures": [
      {
        "src": "figures/skill-skillaxe-skillaxe_architecture_overview.png",
        "caption": "SKILLAXE 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-selskill",
    "page": "skill",
    "title": "SelSkill",
    "shortTitle": "SelSkill",
    "category": "skill-optimization",
    "maturity": "growing",
    "score": 0.527,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "Chishui Chen, Jiaye Lin, Te Sun, Junxi Wang, Yi Yang, Cong Qin",
    "methodFamily": "skill optimization",
    "tags": [
      "optimization",
      "skill optimization",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.5,
      "reproducibility": 0.53,
      "adoption": 0.45,
      "selfEvolution": 0.68
    },
    "summary": "技能调用独立优化目标,双粒度偏好学习,ALFWorld +10.9pp,策略可跨领域零样本迁移",
    "methodCore": "## 问题诊断：相关不等于必要，轨迹级信号信噪比太低\n反事实分析揭示：启用技能访问仅在约 14% 的配对轨迹中提升了最终结果，78% 轨迹无明显变化，约 8% 轨迹调用技能反而让结果变差。技能价值极度集中，只在特定状态窗口有效。轨迹级成败标签对局部 invoke/skip 决策的归因分辨力不够。\n## 决策点级偏好：通过预测熵筛选高价值分叉，构造因果对比信号\n记录每个 token 的 log-probability，计算每个技能决策点上的预测熵。高熵点表示模型不确定下一步，是最值得做 invoke/skip 对比的岔路口。在选定分叉点同时跑两条路径：一条强制调用技能，一条强制跳过，共享完全相同的前缀轨迹。两条路径的唯一差异是局部 invoke/skip 决策，效果差异可干净地因果归因。\n## 轨迹级偏好 + 局部窗口掩码：双粒度联合 DPO 优化\n轨迹级偏好将成功轨迹与失败轨迹组成偏好对，提供全局行为序列约束。决策点级偏好提供局部 invoke/skip 因果信号。两种偏好合并进同一个 DPO 目标联合优化，并施加局部窗口掩码：损失仅在分叉点后 n 个 assistant turn 上计算，不让下游无关环境动态稀释梯度。\n## 主要能力\n熵引导的决策点筛选：用预测熵定位模型不确定的决策点，优先做 invoke/skip 对比，比全量分叉有显著增益；invoke/skip 因果对比构造：共享前缀的两路径仅在一个决策上不同，干净归因调用因果效应；双粒度联合 DPO：轨迹级管整体效用，决策点级管局部必要性，联合训练同时提升调用质量和频率合理性；选择性调用策略跨领域零样本迁移：在 ALFWorld 上训练后直接部署到 Tau-bench 和 PopQA 有效。\n## 研究背景与贡献\nSelSkill 指出技能是为复杂 agentic 任务提供可复用知识与执行策略的可调用程序模块,但现有方法多关注选择相关技能或改进技能本身,忽略了“在当前决策点是否真的应当调用某个相关技能”。无益的调用会引入无关上下文、扰乱本已正确的执行过程。为此提出一个用于选择性技能调用(selective skill invocation)的双粒度偏好学习框架。SelSkill 把技能使用表述为“调用还是跳过”(skill-or-skip)的决策,利用预测不确定性(predictive uncertainty)来优先选取候选决策点,并从共享轨迹前缀构造受控的“调用-跳过”偏好对。它进一步把 episode 级的结果偏好与 step 级的调用偏好结合,以同时刻画整体轨迹质量与技能调用的局部有效性,从而把技能调用作为独立的优化目标来学习。\n## 实验与要点\n在 ALFWorld 上以 Qwen3-8B,SelSkill 把任务成功率提升 10.9 个百分点、执行精度提升 29.1 个百分点;在 BFCL 上分别提升 5.7 与 29.5 个百分点。Tau-bench 与 PopQA 上的零样本结果进一步表明,学得的调用策略能迁移到带有此前未见技能的新领域。\n把“调用还是跳过技能”作为独立优化目标,用不确定性优先与 episode/step 双粒度偏好学习,ALFWorld +10.9pp 且调用策略可跨领域零样本迁移。",
    "evaluation": "在 ALFWorld 上以 Qwen3-8B,SelSkill 把任务成功率提升 10.9 个百分点、执行精度提升 29.1 个百分点;在 BFCL 上分别提升 5.7 与 29.5 个百分点。Tau-bench 与 PopQA 上的零样本结果进一步表明,学得的调用策略能迁移到带有此前未见技能的新领域。",
    "mainFinding": "把“调用还是跳过技能”作为独立优化目标,用不确定性优先与 episode/step 双粒度偏好学习,ALFWorld +10.9pp 且调用策略可跨领域零样本迁移。",
    "limitations": "偏好对依赖共享轨迹前缀构造,采样与配对成本较高;评测主要在 ALFWorld、BFCL 等,跨更多复杂环境的稳定性仍需验证。固定技能库假设：不涉及技能内容本身的构建、维护或改进优化。实验仅在 Qwen3-4B/8B 上验证，更广泛模型族的泛化性有待确认。决策点级偏好构造依赖 rollout 采样和熵计算，训练数据采集成本较高。当前为单技能决策场景，多技能同时调用的交互效应尚未建模。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.00510"
      },
      {
        "label": "代码",
        "href": "https://github.com/Meituan-Dianping/SelSkill"
      }
    ],
    "citation": "SelSkill. https://arxiv.org/abs/2606.00510",
    "figures": [
      {
        "src": "figures/skill-selskill-selskill_architecture_overview.png",
        "caption": "SelSkill 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-masa",
    "page": "skill",
    "title": "MASA",
    "shortTitle": "MASA",
    "category": "skill-optimization",
    "maturity": "growing",
    "score": 0.542,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "Jianxiang Yu, Jiapeng Zhu, Bochen Lin, Qier Cui, Zichen Ding, Xiang Li",
    "methodFamily": "skill optimization",
    "tags": [
      "optimization",
      "skill optimization",
      "research"
    ],
    "scores": {
      "clarity": 0.65,
      "evidence": 0.5,
      "reproducibility": 0.53,
      "adoption": 0.45,
      "selfEvolution": 0.68
    },
    "summary": "模型条件化分层技能进化搜索+轻量改写器,打破一套技能适配所有模型假设",
    "methodCore": "## 模型条件化搜索：以能力档案为显式约束\nMASA 为每个目标模型维护一份能力档案（model card），包含架构元数据、训练来源和能力画像。教师模型在每次改写时以该档案为条件：不是\"教师觉得怎么写最好\"，而是\"教师判断对这个特定模型怎么写最可能有效\"。搜索在任务类型粒度上操作，同一模型内不同任务类型对同一组技能的反应差异可超 60 个百分点。\n## 分层技能进化：通用技能爬山 + 任务特定技能 UCB 树搜索\n技能库分两层独立优化。Stage 1 用爬山搜索优化通用技能：教师分析失败轨迹中系统性问题，结合能力档案和历史高奖励技能改写，全任务评估后只接受高于当前分数的改写。Stage 2 固定通用技能，每个任务类型跑独立 UCB 树搜索优化任务特定技能，节点选择用 UCB1 平衡开采与探索。奖励含 NHR（nothing-happens rate）惩罚，抑制\"无害但无用\"的技能表达。\n## 技能改写器：将搜索压缩为一次前向推理\n训练基于 Qwen3-4B 的轻量改写器，输入能力档案、技能和任务描述，一次前向传播输出适配技能。关键在训练数据的多样性暴露：输入来源覆盖进化管道各阶段中间产物、跨模型迁移结果、加噪截断变体，确保改写器学到\"不管输入多差都能改好\"而非仅对高质量输入有效。\n## 主要能力\n模型条件化技能适配：以能力档案为显式条件，让技能表达匹配目标模型的行为模式；分层技能进化：通用技能爬山搜索 + 任务特定 UCB 树搜索，两层独立避免归因混淆；NHR 惩罚机制：在奖励中扣除无环境反馈的\"空转\"步骤，引导搜索远离无用表达；轻量改写器（4B）在一次前向传播中完成适配，推理成本几乎可忽略，跨环境跨任务泛化；实验覆盖多种模型族（Qwen3、Gemma3）和三类环境，验证模型特异性技能的普遍需求。\n## 研究背景与贡献\nMASA(Model-Aware Skill Alignment)针对 LLM 智能体在决策时检索外部整理技能、而现有技能库通常被当作与模型无关、在能力差异很大的骨干间复用同一技能表述的问题。作者的受控实验跨多种模型规模显示技能有效性强烈依赖模型:惠及某骨干的技能可能损害另一骨干。为此 MASA 在不修改智能体权重的前提下把技能对齐到每个目标骨干,分两阶段:(1) 分层技能进化流水线,用爬山法(hill climbing)与 UCB 驱动的树搜索,在环境反馈与模型能力画像(model capability profiles)的引导下,迭代重写通用与任务特定技能;(2) 一个轻量的模型条件化技能改写器(model-conditioned skill rewriter),在进化轨迹上训练,以单次前向传播复现这种适配。整体打破“一套技能适配所有模型”的假设。",
    "evaluation": "跨三个交互环境与四个骨干模型的实验表明,MASA 一致取得最佳整体表现,较最强基线最高提升 25.8 分。学得的改写器进一步能泛化到未见任务与环境而无需额外搜索,并以远低于教师 LLM 的推理成本、持续优于一个大得多的教师 LLM,验证了模型条件化对齐的迁移价值。",
    "mainFinding": "证实技能有效性依赖模型,提出模型条件化的分层进化搜索+轻量改写器,不改权重把技能对齐到各骨干,较最强基线最高 +25.8 分且改写器可泛化。",
    "limitations": "进化阶段的树搜索与爬山需要多次环境反馈,搜索成本较高;能力画像需针对每个骨干构建,新模型接入的画像时效与开销未详述。进化管道计算成本高：全环境 rollout、教师模型调用、目标模型评估构成真实计算开销，限制迭代轮次。能力档案当前为静态预定义文档，进化过程中新发现的行为模式无法反向注入更新档案。实验仅在文本具身、Web 购物、检索 QA 三类环境上验证，更多领域有待覆盖。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2605.30723"
      },
      {
        "label": "代码",
        "href": "https://github.com/jianxiangyu/MASA_"
      }
    ],
    "citation": "MASA. https://arxiv.org/pdf/2605.30723",
    "figures": [
      {
        "src": "figures/skill-masa-masa_architecture_overview.png",
        "caption": "MASA 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skilladaptor",
    "page": "skill",
    "title": "SkillAdaptor",
    "shortTitle": "SkillAdaptor",
    "category": "skill-optimization",
    "maturity": "growing",
    "score": 0.515,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "",
    "methodFamily": "skill optimization",
    "tags": [
      "optimization",
      "skill optimization",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.45,
      "reproducibility": 0.53,
      "adoption": 0.4,
      "selfEvolution": 0.68
    },
    "summary": "归因-修改-审核三步闭环,定位首个故障步骤精确修订,免训练可插拔接入 Agent 框架",
    "methodCore": "## 归因层：从轨迹到具体步骤的技能责任链接\n输入失败轨迹后：\nLocalizer 直接预测最早的可操作故障步骤 t*，同时输出故障行为描述和改进建议，不简单找\"哪一步报了 error\"而是推理最早到哪一步时事情开始偏离正确路径。随后，Linker 将责任分配给候选技能，输出加权嫌疑技能集 ${(s_j, w_j)}$，同时做二元决策 $â$：REVISE 表示故障归因于某个技能内容不当、走定向修订；GENERATE 表示能力盲区、走新技能合成。\n## 修改层：只改目标技能，其余不动\n若 $â=REVISE$，Modifier 取权重最高的嫌疑技能做定向修改后替换回技能集 K。若 $â=GENERATE$，Modifier 从故障步骤上下文中合成新技能追加到 K，配套语义去重检测控制膨胀。\n整个过程只动一个技能或新增一个技能，其他技能保持原样。\n## 审核层：改完必须验证才能入库\n候选更新在正式并入前，系统用旧集合 K 和新集合 K+ 分别重跑任务集比较执行反馈。仅当 $∆≥0$（新集合不比旧集合差）时候选更新才被接受，否则丢弃。消融实验中拿掉 Qualifier 后标准差从 ±5.2 跳涨到 ±8.1，审核是稳定性的核心机制。\n## 主要能力\n步骤级故障归因：定位第一个可操作故障步骤，而非对整条轨迹做笼统反思；责任精确链接到具体技能，区分 REVISE（内容不当）vs GENERATE（能力盲区）；定向修改仅动目标技能，其余技能原样不变，改动小、稳定性高；资格审核门槛（∆≥0）压住有害更新，是稳定性的核心机制；免训练、可插拔接入 OpenClaw 类 Agent 框架。\n## 研究背景与贡献\nSkillAdaptor 面向 LLM 智能体日益依赖可复用外部技能解决长时序交互任务的场景。现有免训练技能适配流水线通常从完整轨迹或会话级反馈更新技能,使失败归因粗糙,常产生不稳定或过于宽泛的修订。为此提出一个带显式失败归因的免训练、步级(step-level)技能适配框架,可插入 OpenClaw 类智能体框架。给定一条失败轨迹,SkillAdaptor 识别第一个可操作的故障步骤(first actionable fault step),把责任关联到候选技能,并在显式的接受检查(acceptance checks)下施加定向更新,同时保持骨干冻结。整体形成“归因—修改—审核”的步级闭环,以更细的粒度定位故障、避免宽泛误改,实现更稳定、可审计的免训练技能维护。\n## 实验与要点\n在 WebShop、PinchBench 与 Claw-Eval 上,以 Kimi-K2.5、GLM-5、GPT-5.2 评测。SkillAdaptor 在三套基准上均优于无技能与技能适配基线,单指标最大提升为 PinchBench +1.5、Claw-Eval +1.8、WebShop 成功率 +1.7,表明步级归因支持更稳定、可审计的免训练技能维护。\n以显式失败归因定位首个可操作故障步骤,在接受检查下做步级定向更新且骨干冻结,免训练可插拔,三套基准均超基线并提升维护可审计性。",
    "evaluation": "在 WebShop、PinchBench 与 Claw-Eval 上,以 Kimi-K2.5、GLM-5、GPT-5.2 评测。SkillAdaptor 在三套基准上均优于无技能与技能适配基线,单指标最大提升为 PinchBench +1.5、Claw-Eval +1.8、WebShop 成功率 +1.7,表明步级归因支持更稳定、可审计的免训练技能维护。",
    "mainFinding": "以显式失败归因定位首个可操作故障步骤,在接受检查下做步级定向更新且骨干冻结,免训练可插拔,三套基准均超基线并提升维护可审计性。",
    "limitations": "报告的单指标提升幅度较小(约 +1.5~+1.8),整体增益有限;首故障步定位依赖 LLM 归因质量,归因错误会导致责任错配与误修订。效果分布不均：在数据和代码类任务中收益最大，研究/记忆/安全类任务中最弱。性能上限受限于底座模型内在能力：适应轮次后期瓶颈从技能覆盖转向模型能力天花板。归因和链接质量依赖 LLM 判断，长链推理场景下早期错误可能导致级联归因偏差。目前仅验证 Kimi-K2.5、GLM-5、GPT-5.2 三个底座，更多模型族覆盖待扩展。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.01311"
      },
      {
        "label": "代码",
        "href": "https://github.com/zjunlp/SkillAdaptor"
      }
    ],
    "citation": "SkillAdaptor. https://arxiv.org/abs/2606.01311",
    "figures": [
      {
        "src": "figures/skill-skilladaptor-skilladaptor_architecture_overview.png",
        "caption": "SkillAdaptor 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-federatedskill",
    "page": "skill",
    "title": "FederatedSkill",
    "shortTitle": "FederatedSkill",
    "category": "skill-optimization",
    "maturity": "growing",
    "score": 0.492,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "",
    "methodFamily": "skill optimization",
    "tags": [
      "optimization",
      "skill optimization",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.45,
      "reproducibility": 0.48,
      "adoption": 0.4,
      "selfEvolution": 0.63
    },
    "summary": "联邦学习隐私保护搬进技能进化,语义 patch+POMDP 个性化更新,成功率最高+44.4%",
    "methodCore": "## 客户端：轨迹不出门，只出语义技能 patch\n每个客户端用当前技能库执行任务生成轨迹后，本地 patcher 将轨迹压缩和反思转换为技能 patch δ。patch 仅含三类语义操作：ADD（加新技能）、EDIT（改已有技能）、DELETE（删过时技能），不包含任何原始交互文本。patcher 被提示产出可跨任务泛化的经验，task-specific 的具体值和一次性输出不准写入 patch。原始轨迹、验证器输出、中间文件全部留在本地。传输单元是语义级 patch 而非模型权重，天然跨异质模型和框架可复用。\n## 服务器端：从 patch 推断用户能力边界，生成个性化更新\n服务器每轮收到各客户端上传的 patch 和静态档案（基座模型、Agent 框架），从未见过任何原始轨迹。演化 Agent 将聚合建模为 POMDP：客户端真实任务环境是隐藏状态，通过每轮 patch 动态更新对各客户端能力边界的隐式模型：哪些任务频繁出 ADD 对应能力空白，哪些技能常被 EDIT 对应表述偏差，哪些正被 DELETE 对应过时操作。基于不断更新的理解，M 为每个客户端生成定向技能更新而非全局平均库。\n## 消融验证：个性化 vs 全局平均库差异显著\n把个性化模块拆掉，用统一全局库替代每个用户的个性化库，平均性能下降 12.2 个百分点。\n## 主要能力\n隐私保护构造性约束：仅语义 skill patch 离开本地，原始轨迹、截图、表格、私人对话永不传输；语义级 patch 天然跨异质模型和框架可复用，比参数级联邦学习更灵活；服务器端通过 POMDP 推断用户能力边界，生成个性化而非平均化技能更新；协作进化同时提升成功率（最高 +44.4%）和效率（成本节省 37.5%）。\n## 研究背景与贡献\nFederatedSkill 面向现代 LLM 智能体日益依赖技能库、技能进化成为自我改进主要驱动的现状:孤立的单用户任务流缺乏构建全面技能所需的多样性;而跨用户协作虽能突破数据瓶颈,现有轨迹共享方法会损害用户隐私并强加一个无法适应客户异质性的统一全局库。为此提出一个隐私保护的协作智能体进化框架。它超越原始轨迹共享,以语义技能差分(semantic skill diffs,即对本地库的结构化 patch)作为通信的基本单元。在服务器端,一个进化智能体聚合这些 patch,以动态建模客户特定的能力边界,从而促成严格个性化的技能进化,而非次优的全局平均。整体把联邦学习的隐私保护思路引入技能进化,只传 patch 不传轨迹。summary 中“POMDP 个性化更新”在 abstract 中无对应表述,归类/映射可能有误,此处按 abstract 以“客户特定能力边界建模”为准。\n## 实验与要点\n在 20 个不同的智能体任务族上评测,FederatedSkill 相较自进化基线取得显著增益,成功率最高提升 44.4%,计算成本降低 37.5%。summary 中“POMDP”这一机制描述无法据 abstract 佐证,需查原文核实。\n把联邦学习隐私保护引入技能进化,以语义技能 patch 而非原始轨迹通信,服务器端聚合建模客户能力边界实现个性化进化,成功率最高+44.4%。",
    "evaluation": "在 20 个不同的智能体任务族上评测,FederatedSkill 相较自进化基线取得显著增益,成功率最高提升 44.4%,计算成本降低 37.5%。summary 中“POMDP”这一机制描述无法据 abstract 佐证,需查原文核实。",
    "mainFinding": "把联邦学习隐私保护引入技能进化,以语义技能 patch 而非原始轨迹通信,服务器端聚合建模客户能力边界实现个性化进化,成功率最高+44.4%。",
    "limitations": "summary 所称“POMDP 个性化更新”在 abstract 中无对应,该机制名归类/映射可能有误,需查原文;patch 聚合对客户异质性建模的可扩展性与通信开销未详述。patch 质量绑定客户端模型反思能力：弱模型可能漏掉关键模式或将偶然成功提炼为不靠谱策略，服务器无轨迹无法交叉验证。安全路径验证为规则驱动，隐式信息泄露（文件名、目录结构）可能通过更隐蔽方式流入 patch，语义侧信道无防护。冷启动问题未讨论：完全新用户无技能无轨迹无 patch 可上传，初始种子机制缺失。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.03143"
      },
      {
        "label": "代码",
        "href": "https://github.com/UCSB-NLP-Chang/FederatedSkill"
      }
    ],
    "citation": "FederatedSkill. https://arxiv.org/abs/2606.03143",
    "figures": [
      {
        "src": "figures/skill-federatedskill-federatedskill_architecture_overview.png",
        "caption": "FederatedSkill 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-openskill",
    "page": "skill",
    "title": "OpenSkill",
    "shortTitle": "OpenSkill",
    "category": "skill-optimization",
    "maturity": "growing",
    "score": 0.515,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "",
    "methodFamily": "skill optimization",
    "tags": [
      "optimization",
      "skill optimization",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.5,
      "reproducibility": 0.53,
      "adoption": 0.45,
      "selfEvolution": 0.63
    },
    "summary": "开放世界自进化,无参考答案自己搜知识建验证锚点,比封闭基线高 8.9pp",
    "methodCore": "## 开放世界知识获取：检索执行知识和验证锚点两类信息\nOpenSkill 主动搜索公开文档、代码仓库、论文等开放资源。\n第一类检索执行知识 k，包含背景概念、最佳实践、API 文档等，用于生成结构化技能计划。第二类检索验证知识 kv，即不透露答案但可独立验证的锚点，如官方文档中的输出格式、公开数据集的行数列名、领域标准中的交叉验证流程。所有检索查询经信息隔离审计，排除包含基准名称或可能导向答案的标识符。\n## 无泄漏技能进化：虚拟测试替代 ground-truth 反馈\n核心挑战是在没有真实反馈的情况下判断技能好坏。OpenSkill 为每个任务生成一套虚拟 pytest 测试套件，每道断言锚定在验证知识上（检查输出行数匹配文档、列名正确、格式规范等），不检查可能泄露答案的中间计算结果。进化循环最多 3 轮：执行 → 跑虚拟测试 → 生成结构化故障诊断报告 → 诊断指出的知识缺口触发定向检索 → 技能原地编辑。全程评分仅来自虚拟测试，从未看过任务参考答案。\n## 零样本跨模型迁移：技能作为冻结产物\n进化产物是冻结的技能文件（非模型权重），可零样本部署到任何 Agent。用 GPT 构建的技能直接部署到 Claude 上性能几乎无损失，反之亦然。虚拟 verifier 覆盖 88.9% 真实任务意图，来自公开知识中可验证锚点的系统性提取。\n## 主要能力\n开放世界自进化：从零构建学习回路：搜知识、建验证锚点、自测试自打磨，全程隔离参考答案；虚拟测试套件替代 ground-truth：基于公开知识中的行列数、格式、标准范围等可验证锚点生成 pytest；跨模型零样本迁移：技能作为冻结产物文件，构建和部署可使用不同的模型家族；信息隔离审计确保检索查询不泄露任务答案，虚拟 verifier 覆盖 88.9% 真实意图。\n## 研究背景与贡献\nOpenSkill 研究开放世界自进化:自进化智能体需在部署后适应,但现有方法都假定存在可用的学习循环,如整理好的技能、成功轨迹或验证器信号;而真实的开放世界部署可能一样都没有,只给出一个任务提示。作者定义开放世界自进化问题——智能体必须从零构建自己的技能与自己的验证信号,使用开放世界资源但没有目标任务的监督。OpenSkill 通过引导来 bootstrap 这一循环:从文档、代码仓库与网络获取接地知识与验证锚点(verification anchors),把它们合成为可迁移技能,并针对以这些锚点(而非目标答案)为基础的自建虚拟任务来精炼技能。开放世界由此同时提供待学习的知识与一个与监督无关的练习环境,目标任务监督仅保留用于最终评估。整体在无参考答案的前提下自建验证信号闭环。\n## 实验与要点\n跨三个基准与两个目标智能体,OpenSkill 在满足无监督约束的同时取得最佳的自动通过率。分析显示其技能可跨模型迁移而无需模型特定适配,且其自建验证器尽管从不访问真值,却与真值结果保持一致。summary 中“比封闭基线高 8.9pp”的具体数值在 abstract 中无法佐证,需查原文核实。\n定义并解决开放世界自进化:仅凭任务提示,从文档/代码/网络自建知识与验证锚点合成可迁移技能并自我精炼,无监督下取得最佳自动通过率。",
    "evaluation": "跨三个基准与两个目标智能体,OpenSkill 在满足无监督约束的同时取得最佳的自动通过率。分析显示其技能可跨模型迁移而无需模型特定适配,且其自建验证器尽管从不访问真值,却与真值结果保持一致。summary 中“比封闭基线高 8.9pp”的具体数值在 abstract 中无法佐证,需查原文核实。",
    "mainFinding": "定义并解决开放世界自进化:仅凭任务提示,从文档/代码/网络自建知识与验证锚点合成可迁移技能并自我精炼,无监督下取得最佳自动通过率。",
    "limitations": "abstract 未给出具体数字,summary 中“+8.9pp”无法据 abstract 佐证,需查原文;自建验证锚点的可靠性依赖开放世界资源质量,锚点偏差会误导技能精炼方向。开放世界知识的密度是天花板：文档稀疏的小众领域缺少足够可验证锚点时，虚拟测试覆盖不足导致进化信号变弱。信息隔离是审计驱动而非构造性保证：没有形式化信息泄漏证明，间接推理路径可能绕过过滤规则逼近答案。统一 3 轮进化预算对不同任务可能非最优：复杂任务需更多轮次展开，简单任务一轮即到位却被迫多跑。当前实验选择知识覆盖面较广的基准任务，小众或冷门领域的泛化性未测试。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.06741"
      },
      {
        "label": "代码",
        "href": "https://github.com/OpenLAIR/OpenSkill"
      },
      {
        "label": "官网",
        "href": "https://openlair.github.io/openskill/"
      }
    ],
    "citation": "OpenSkill. https://arxiv.org/abs/2606.06741",
    "figures": [
      {
        "src": "figures/skill-openskill-openskill_architecture_overview.png",
        "caption": "OpenSkill 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillhone",
    "page": "skill",
    "title": "SkillHone",
    "shortTitle": "SkillHone",
    "category": "skill-optimization",
    "maturity": "growing",
    "score": 0.492,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "",
    "methodFamily": "skill optimization",
    "tags": [
      "optimization",
      "skill optimization",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.45,
      "reproducibility": 0.48,
      "adoption": 0.4,
      "selfEvolution": 0.63
    },
    "summary": "持久化决策历史继承完整决策链,GAIA 用公共 Web 访问比深度搜索 Agent 高 15.8pp",
    "methodCore": "## 角色隔离双线架构：优化线与评估线分离\nSkillHone 是架设在现有 Agent 运行时之上的 harness 层，用动态角色分派替代固定多 Agent 系统。\n优化线维护技能仓库，优化子 Agent 可检查当前技能、读取历史决策记录和失败摘要、形成诊断、提出修订并记录结果。评估线维护评估仓库（练习探针、验证套件、回归集、执行 trace 和评估报告），评估子 Agent 产生脱敏报告：探针的真实目标、验证器内部状态和完整执行轨迹被过滤，只有脱敏后的报告到达优化线。\n## 决策记录四元组：$h_t = (q_t, r_t, e_t, o_t)$\n每次开发步骤被表示为一个结构化决策记录：$q_t$（诊断）是技能在这一轮暴露了什么失效模式；$r_t$（候选修订）是修改方案；$e_t$（脱敏评估证据）是评估后返回的反馈；$o_t$（结果）是接受、拒绝、要求进一步修改或推迟诊断。一份 diff 只告诉你文件怎么变，一份决策记录告诉这次改变是冲着什么问题去、用什么证据评估、最终为什么被接受或拒绝。\n## 决策历史的长期价值函数\n进化早期历史短、决策记录检索和复用频率不高，SkillHone 相对基线优势不显著。当决策链积累到一定长度后，避免重复诊断和重复失败修改的收益才开始拉开差距。对于只需短期优化（三轮以内）的场景，决策历史边际价值有限：但在跨会话、跨环境变化、跨 Agent 接手的持续进化场景中是必要基础。\n## 主要能力\n持久化决策历史：诊断-修订-证据-结果的完整记录链，让技能进化从\"连续覆盖\"变成\"连续继承\"；角色隔离双线架构：优化线与评估线分离，探针答案经脱敏过滤不泄漏进技能修订；动态角色分派：运行时每步根据状态决定角色，不绑定固定多 Agent 框架，不依赖特定 LLM；GAIA 上 64.6%（+15.8pp vs 深度搜索 Agent），WebWalkerQA-EN 上 66.4%，仅用公共 Web 访问。\n## 研究背景与贡献\nSkillHone 面向持续的技能进化:技能以任务特定的程序、脚本与参考扩展语言模型智能体,但其针对的任务与环境不断变化。现有方法只在有界的运行中改进技能、且只保留最终产物,丢弃了后续智能体解读先前修订、评估与被否决备选方案所需的决策历史。为此提出一个以持久决策历史为根基的持续技能进化框架(harness)。SkillHone 把技能修订与评估侧证据配对,后者提供练习反馈,记录诊断、修订、证据与结果的结构化历史。角色分离的子智能体(role-separated subagents)在练习探针上运行候选技能、进行去标识化(redacted)报告,并依据先前决策提出修订,从而在跨会话精炼时无需重新发现过往理据。整体让完整决策链而非仅最终产物得以继承。",
    "evaluation": "在深度研究基准上,SkillHone 无需预集成的搜索栈即可运行,在 GAIA 上比商业支持的深度研究智能体高 15.8 分、在 WebWalkerQA-EN 上高 3.2 分,并超越先前技能进化方法。作者进一步将其部署于内部工具中介的分析场景,在七个设置上平均提升准确率 18.8 分。",
    "mainFinding": "以持久决策历史为根基做持续技能进化,继承完整决策链与被否备选,GAIA 比商业深度研究智能体高 15.8pp,内部七场景平均 +18.8 分。",
    "limitations": "持久记录完整决策历史带来存储与管理开销,历史规模增长后的检索效率未详述;评测偏深度研究与内部分析场景,更广任务域普适性待验证。决策历史价值是长期函数：短跑不重要，长跑是必需：三轮以内边际价值有限。脱敏反馈强度与进化效率存在 trade-off：脱敏太强则报告太模糊，优化线可能多轮猜测修复方向；脱敏力度当前为固定策略非自适应。不同 LLM 在诊断和修订生成上的表现差异直接影响进化质量，论文未展开模型敏感度分析。当前仅验证 GAIA 和 WebWalkerQA-EN 两个开放域基准，更多任务类型和生产环境的长期进化效应待验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.08671"
      }
    ],
    "citation": "SkillHone. https://arxiv.org/abs/2606.08671",
    "figures": [
      {
        "src": "figures/skill-skillhone-skillhone_architecture_overview.png",
        "caption": "SkillHone 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillaudit",
    "page": "skill",
    "title": "SKILLAUDIT",
    "shortTitle": "SKILLAUDIT",
    "category": "skill-optimization",
    "maturity": "growing",
    "score": 0.555,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "",
    "methodFamily": "skill optimization",
    "tags": [
      "optimization",
      "skill optimization",
      "research"
    ],
    "scores": {
      "clarity": 0.65,
      "evidence": 0.5,
      "reproducibility": 0.53,
      "adoption": 0.45,
      "selfEvolution": 0.73
    },
    "summary": "无 ground-truth 配对轨迹审计自进化,PACE 12 评估器四维行为对比,SkillsBench +33.0pp",
    "methodCore": "## PACE（过程对齐对比评估）：12 个评估器 × 4 个维度的行为对比\n配对轨迹审计的核心操作：同一任务分别在有技能和无技能条件下各执行一次。PACE 集群包含 12 个评估器，分布在四个维度上：\nProcess Adherence：技能规定的步骤是否被遵循；Artifact Evidence：产出的文件/数据是否达标；Consistency：行为模式与技能意图是否一致；Effectiveness Delta：带技能比不带技能好了还是差了）。\n每个评估器输出锚定到具体技能段落的行动信号和受保护提示（protected hints），确保编辑有据可查。\n## 锚点验证器 + 双策略路由\n锚点验证器从任务说明中编译一次后锁定（文件存在性、格式合规、可从工作区数据重新计算的值），提供硬结构约束。双策略路由根据技能问题类型分流：\nRefine 管道（减法优先）：处理大体有用但含噪声段落的技能，中位数 +19 行、均值 -260 行；Repair 管道（诊断驱动替换）：处理核心逻辑与任务冲突的技能，中位数 +16 行、均值 -165 行。\n## 三态裁决：单评估器否决即阻止有害更新\n每条审计输出三种裁决之一：技能有帮助（commit）、技能有害（rollback）、技能中性（defer）。任何一个评估器输出\"有害\"报告即否决该次更新。在 89 个任务的进化中，92% 的已正常工作技能保持或提升，43% 的失败技能被拉回及格线，所有初始技能比无技能更差的 3 个任务全部恢复至奖励 1.0。\n## 主要能力\n零 ground-truth 自进化：不需要隐藏测试、参考答案、oracle 信号或环境奖励；PACE 配对轨迹审计从行为对比中提取编辑信号，锚定到具体技能段落；锚点验证器提供不参与进化的硬结构约束，防止技能漂移；跨 8 个专业领域的 89 个容器化任务验证，整体奖励 +33.0pp。\n## 研究背景与贡献\n该条 summary 与标题写作“无 ground-truth 配对轨迹审计自进化,PACE 12 评估器四维行为对比”,但据 arxiv abstract,SkillAudit 实为面向技能评估(assessment)而非自进化的框架,未见“PACE 12 评估器”“配对轨迹”等表述,归类/映射可能有误。abstract 显示:技能生态缺乏可靠判断某技能是否值得部署的方法,现有评估多锚定固定任务套件,会把技能的边际贡献与骨干强度混淆、并在任务超出技能预期范围时漏判其价值。SkillAudit 是以技能为中心评估的端到端框架:输入任意智能体技能,自动生成涵盖效用、效率/成本与安全的多维评估报告;它聚焦技能产物本身,直接从技能包构建能力对齐的评估任务,在隔离沙箱中执行以收集执行证据,再以基于 LLM 的判定做自动检查。它提出基线比较原则度量效用与效率/成本,并引入静态语义分析+动态运行时验证的两阶段检测评估安全风险。",
    "evaluation": "在扫描覆盖 23 个职业类别的头部真实世界技能包后,作者发现超过 7% 的技能处于风险状态。abstract 未报告 summary 所称“SkillsBench +33.0pp”等提升数字,该数值无法据 abstract 佐证,需查原文核实;SkillAudit 定位为评估审计工具而非性能优化方法。",
    "mainFinding": "提出以技能为中心的端到端评估框架,从技能包自建任务在沙箱执行、以基线比较度量效用成本、静态+动态两阶段检测安全,扫描发现超 7% 技能存在风险。",
    "limitations": "归类/映射可能有误:该工作是评估审计而非自进化,summary“PACE 12”“+33.0pp”均无 abstract 支撑需查原文;安全检测依赖 LLM 判定,存在漏判风险。领域过程类技能（domain-procedure）是可观察性边界：数学方法类技能达 80.7% 奖励而领域过程类仅 69.2%，77% 卡在奖励 0 的任务带有领域过程标签。进化发生在隔离的 stub 容器中，无法访问 pytest 验证器或测试内容，但这也意味着生产环境噪声未被模拟。锚点验证器的覆盖范围受限于能从任务说明中确定性编译的约束，隐式约束未被捕获。当前仅在 Claude Opus 4.8 单一底座上验证进化效果。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.14239"
      }
    ],
    "citation": "SKILLAUDIT. https://arxiv.org/abs/2606.14239",
    "figures": [
      {
        "src": "figures/skill-skillaudit-skillaudit_architecture_overview.png",
        "caption": "SKILLAUDIT 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillcat",
    "page": "skill",
    "title": "SkillCAT",
    "shortTitle": "SkillCAT",
    "category": "skill-optimization",
    "maturity": "growing",
    "score": 0.542,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "",
    "methodFamily": "skill optimization",
    "tags": [
      "optimization",
      "skill optimization",
      "research"
    ],
    "scores": {
      "clarity": 0.65,
      "evidence": 0.5,
      "reproducibility": 0.53,
      "adoption": 0.45,
      "selfEvolution": 0.68
    },
    "summary": "CCE 因果分叉提取+AAE 回放验证+TTE 拓扑编译,SpreadsheetBench +25.83pp",
    "methodCore": "## CCE（对比因果提取）：在成功/失败分叉点提取技能证据\n现有方法从单条轨迹中提取技能容易引入偶然噪声。CCE 对同一任务通过多种子执行采样多条轨迹（最优 5 种子），构建同一任务的成功/失败对比对，提取点在因果分叉水线（causal watershed）：即两条轨迹开始出现结果分化的位置。从该点附近的决策差异中提取技能证据，而非概括整条轨迹。消融中去掉 CCE 后性能从 55.50 跌至 32.50。\n## AAE（评估增强进化）：将 patch 作为可验证假设\n每个候选技能 patch 被视为一个假设，需在源任务克隆上回放验证。校准评分赋予差异化权重：失败 → 成功=3.0（最佳），成功 → 失败=0.0（最差）。仅评分 ≥2.0 的 patch 通过阈值进入分层合并。消融中去掉 AAE 后性能跌至 26.00：低于无技能基线，说明未经验证的 patch 合并可能有害。Trace2Skill+Error 变体在 DocVQA 上 ANLS 跌至 0.6223（低于 No-Skill 基线），直接印证了这一风险。\n## TTE（拓扑感知执行）：编译技能为可路由图以控制上下文膨胀\n进化后的技能库可能比原始技能更庞大。TTE 将技能编译为一个有向拓扑图，用 LLM 图路由器在 top_k=7 的候选节点中选择，达到 41.6% 上下文缩减同时性能几乎不降。消融中去掉 TTE 后性能降至 46.50。跨模型验证中，gemma-4-31B-it 使用 SkillCAT 技能达到 61.00% Vrf（+22.00），gpt-5.4-mini 达到 37.00%（+6.00）。\n## 主要能力\nCCE 对比因果提取：在多轨迹分叉点提取技能证据，比单轨迹摘要更干净；AAE 回放验证合并：每个 patch 作为假设在源任务克隆上回放，校准评分做阈值过滤；TTE 拓扑感知执行：技能编译为可路由图，41.6% 上下文缩减，性能保持；跨任务（电子表格→WikiTableQuestions OOD +72.53pp）、跨模态（DocVQA ANLS +0.2316）、跨模型全部正向。\n## 研究背景与贡献\nSkillCAT 面向技能自进化把执行轨迹转为可复用技能文档的目标,指出现有流水线通常每任务只从一条轨迹学习、在检查前就合并候选技能 patch、且推理前加载完整技能语料。为此提出一个免训练框架,把过程分为三阶段。对比因果提取(Contrastive Causal Extraction,CCE)为每个任务采样多条轨迹,比较同任务的成功/失败对,识别解释结果差异的证据。评估增强进化(Assessment-Augmented Evolution,AAE)在源任务克隆上回放每个候选 patch,只保留能提升或保持任务结果的 patch,然后再做分层技能 patch 合并。拓扑感知任务执行(Topology-Aware Task Execution,TTE)把进化后的技能编译为可路由的子技能拓扑,使推理时只加载与任务相关的能力节点。整体在提取、验证、编译三环节分别解决单轨迹、先合并后检查与全量加载三大问题。",
    "evaluation": "在 SpreadsheetBench、WikiTableQuestions 与 DocVQA 等基准上评测,并测试跨模型与分布外泛化。这些设置中 SkillCAT 把相较基线的平均分数最高提升 40.40%,展现无需模型训练的可靠进化。summary 中“SpreadsheetBench +25.83pp”的单基准数值无法据 abstract 佐证,需查原文核实。",
    "mainFinding": "免训练三阶段:CCE 从成功/失败对提取因果证据、AAE 回放验证候选 patch、TTE 编译为可路由子技能拓扑按需加载,平均分数相较基线最高提升 40.40%。",
    "limitations": "summary 所称“+25.83pp”无法据 abstract 佐证需查原文;CCE 需为每任务多轨迹采样、AAE 需回放验证,带来额外采样与执行开销。多种子执行的采样成本是 CCE 的固有开销，最优种子数可能随任务复杂度变化。当前仅在结构化较强的任务上验证，开放式对话和创意类任务的效果未知。AAE 回放验证依赖 LLM 作为 Judge，Judge 的标定偏差可能影响 patch 评分准确性。TTE 的图路由 top_k=7 是固定参数，不同技能库规模下的最优 k 值未探索。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.13317"
      }
    ],
    "citation": "SkillCAT. https://arxiv.org/abs/2606.13317",
    "figures": [
      {
        "src": "figures/skill-skillcat-skillcat_architecture_overview.png",
        "caption": "SkillCAT 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skill-mas-opt",
    "page": "skill",
    "title": "Skill-MAS",
    "shortTitle": "Skill-MAS",
    "category": "skill-optimization",
    "maturity": "growing",
    "score": 0.555,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "",
    "methodFamily": "skill optimization",
    "tags": [
      "optimization",
      "skill optimization",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.45,
      "reproducibility": 0.48,
      "adoption": 0.4,
      "selfEvolution": 0.88
    },
    "summary": "进化式 Meta-Skill 驱动的自动多智能体系统,多轨迹采样+选择性反思闭环,不修改模型参数",
    "methodCore": "## Meta-Skill三层结构化编排知识\n将Meta-agent的多智能体编排能力编码为一份三层自然语言文档：\nTask Decomposition：规定如何拆解用户查询为原子子任务；Agent Engineering：规定如何为每个子任务设计专门的子Agent（角色、指令、上下文）；Workflow Orchestration：规定如何选架构拓扑（顺序/路由/层次/黑板）并定义I/O映射。\n控制要点：初始版从Anthropic的MAS构建指南提取，自然语言写就，任何LLM都能读。换底层Meta-agent不丢编排经验。\n## 闭环进化：多轨迹采样+选择性反思\n第一阶段Multi-Trajectory Rollout：对验证集每项任务用当前Meta-Skill独立采样K条轨迹，计算两个分布量——uncertainty（同任务分数标准差，反映指令模糊度）和difficulty（负平均分数）。\n第二阶段Selective Reflection：\n将两者归一化合成为优先级分数；二阶差分自动检测肘点，只选最易变最困难的顶部子集；先做任务内对比（高低分轨迹找分歧点），再做跨任务综合（提取系统性模式）；输出结构化证据包E。\n## Skill Optimizer文档级更新\n用证据包E驱动LLM更新Meta-Skill。强制约束：修改必须基于反思证据、必须抽象为可泛化原则而非任务特定补丁、严格保持三层模块结构。R轮后选验证集最优S*。推理时Meta-Skill就是一段system prompt前缀，生成MAS一次性，不迭代搜索。\n## 主要能力\n经验-参数解耦：编排经验存在文档中而非模型权重中，Meta-agent可随时切换（DeepSeek→Qwen→GPT）；跨任务跨模型迁移：进化后的Meta-Skill在同任务跨LLM和跨任务同LLM下均保持竞争力；成本-性能平衡：卡在高成本推理时方法和低成本训练时方法之间，找到第三条路；领域自适应进化：不同基准进化出不同策略（DeepResearchBench加结构约束，BrowseComp-Plus加平行检索，HLE-Math加强制解释登记）；完全可解释：diff两份Meta-Skill文档就能看到每条编排原则怎么演化的。\n## 研究背景与贡献\nSkill-MAS 面向基于 LLM 的自动多智能体系统(MAS)生成,指出现有方法在模型能力与经验保留间陷入两难:推理时 MAS 利用冻结的前沿 LLM,却重复相同搜索、不从过往经验学习;训练时 MAS 通过梯度更新内化经验,却受限于小模型较低的能力上限、难以扩展到大型前沿 LLM。为弥合此鸿沟,Skill-MAS 提出第三条路径,把高层编排能力概念化为一个可进化的 Meta-Skill,从而将经验保留与参数更新解耦。它通过一个闭合优化循环精炼这一架构性知识:(1) 多轨迹 Rollout(Multi-Trajectory Rollout)在当前 Meta-Skill 下为每个任务采样一个行为分布;(2) 选择性反思(Selective Reflection)自适应地选取优先任务,并施加分层对比分析,把系统性经验蒸馏为可泛化的策略级原则。整体在不修改模型参数的前提下让编排能力持续进化。",
    "evaluation": "跨四个复杂基准与四个不同 LLM 的大量实验表明,Skill-MAS 不仅取得显著性能增益,还保持了有利的成本-性能权衡。进一步分析显示进化出的 Meta-Skill 高度鲁棒,并在未见任务与不同 LLM 间表现出强迁移性。abstract 未给出具体提升数值,增益幅度需查原文核实。",
    "mainFinding": "把 MAS 高层编排能力概念化为可进化 Meta-Skill,以多轨迹采样+选择性反思闭环蒸馏策略级原则,不改参数即持续进化且跨任务跨模型强迁移。",
    "limitations": "abstract 表述“显著增益”而未列具体数字,提升幅度需查原文;多轨迹 Rollout 为每任务采样行为分布,采样成本较高,复杂任务上的扩展性未详述。依赖ground-truth标签驱动选择性反思，弱监督/无监督场景下性能退化。多任务联合学习消融喜忧参半，缺乏自适应域隔离机制。每轮进化需要LLM推理多个步骤，token成本累积。实验均使用同家族Qwen系列作Meta-agent，跨家族异构模型组合验证缺位。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.18837"
      },
      {
        "label": "代码",
        "href": "https://github.com/linhh29/Skill_MAS"
      },
      {
        "label": "项目网站",
        "href": "https://linhh29.github.io/blog/Skill-MAS/index.html"
      },
      {
        "label": "Gallery & Live Demo",
        "href": "https://skill-mas-demo.hehailin.life/gallery"
      }
    ],
    "citation": "Skill-MAS. https://arxiv.org/abs/2606.18837",
    "figures": [
      {
        "src": "figures/skill-skill-mas-skill-mas_overview.png",
        "caption": "Skill-MAS 方法概览"
      },
      {
        "src": "figures/skill-skill-mas-skill-mas_architecture_overview.png",
        "caption": "Skill-MAS 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-agentskillos-mgmt",
    "page": "skill",
    "title": "AgentSkillOS",
    "shortTitle": "AgentSkillOS",
    "category": "skill-governance",
    "maturity": "growing",
    "score": 0.46,
    "year": 2026,
    "venue": "arXiv 2026-03",
    "authors": "Hao Li, Chunjiang Mu, Jianhao Chen, Siyue Ren, Zhiyao Cui, Yiqun Zhang",
    "methodFamily": "skill governance",
    "tags": [
      "management",
      "skill governance",
      "active"
    ],
    "scores": {
      "clarity": 0.5,
      "evidence": 0.45,
      "reproducibility": 0.53,
      "adoption": 0.4,
      "selfEvolution": 0.58
    },
    "summary": "面向生态规模的技能选择、编排与全生命周期管理框架。",
    "methodCore": "## 能力树构建：层次化技能组织与增量管理\n系统从根节点出发，采用广度优先策略逐层递归划分技能集。每层划分分两步：\nGroup Discovery：由 LLM 生成类别分组（名称+描述）；Skill Assignment：由 LLM 将各技能分配至最匹配类别。解耦两步骤可显著降低遗漏概率。\n根节点使用五个人工固定类别（内容创作、数据处理、软件开发、自动化、领域特定）保证顶层稳定。单技能类别直接合并至兄弟节点，未分配技能触发重试或兜底入最大类别。超大规模（超过阈值 K）时启用使用频率队列（按安装量排序）只取 Top-K 建树，其余进入休眠索引（向量语义检索，按需唤醒）。新技能加入支持增量更新——从根节点逐层分配至叶节点后，自底向上刷新路径节点描述。\n## 任务驱动技能检索：树遍历 + 向量补充 + 修剪排序\nLLM 从能力树根节点出发，逐层选择相关类别子节点直至叶节点，所有触及叶子构成候选技能集。树内未覆盖技能通过向量相似度搜索从休眠索引中补充。候选集经过去重、按任务相关性排序、丢弃无关项，最终保留 Top-M（实验中 M=8）的紧凑列表。用户可在此基础上手动增选私有技能。\n## DAG 技能编排与分层执行\n确定技能集后，LLM 将用户任务拆解为子任务、分配对应技能、明确子任务间依赖关系，产出一个有向无环图（DAG）。提供三种编排策略：\nQuality-First 最大化质量（最深、节点最多、依赖最密）；Efficiency-First 最大化并行度（宽而浅）；Simplicity-First 只保留必需节点（最紧凑）。执行时同层节点并行、跨层按依赖顺序串行。每个节点的执行 Prompt 包含任务描述、技能调用、上游制品、期望输出和下游消费方式。支持编排复用——相似任务可直接复用历史 DAG 方案。\n## 主要能力\n大规模技能生态系统组织：将 28 万+技能层次化组织为能力树，支持从粗到细的逐级定位；DAG 多技能协同编排：三种编排策略（质量/效率/简洁优先）产生拓扑结构根本不同的执行方案；增量树更新：新技能加入无需重建整棵树，沿路径插入并自底向上更新；使用频率队列 + 休眠索引：平衡树规模与覆盖度，高频技能进树，低频技能按需唤醒；编排方案复用：基于任务向量相似度匹配历史 DAG，跳过检索与编排阶段。\n## 研究背景与贡献\nAgentSkillOS 面向 Claude 智能体技能爆发式增长带来的规模化治理问题，提出首个原则化的技能选择、编排与生态级管理框架，分为两个阶段。其一「管理技能」，通过节点级递归归类把海量技能组织成能力树（capability tree），支撑高效发现与检索；其二「求解任务」，基于 DAG 有向无环图流水线对多个技能进行检索、编排与执行，用结构化组合替代原生扁平调用。为衡量智能体调用技能的能力，作者构建了涵盖数据计算、文档创作、动态视频、视觉设计、Web 交互五大类别、共 30 个「重产物」（artifact-rich）任务的基准，输出质量用基于 LLM 的成对比较评估，并借助 Bradley-Terry 模型聚合为统一质量分。实验横跨从 200 到 200K 三个数量级的技能生态规模，验证树形检索能有效逼近 oracle 技能选择、DAG 编排在相同技能集下显著优于扁平调用，指向「结构化组合是释放技能潜力的关键」这一核心主张。",
    "evaluation": "在 30 个重产物任务基准上，用 LLM 成对比较 + Bradley-Terry 聚合出统一质量分。跨 200 至 200K 三个技能规模的实验表明：树形检索可有效逼近 oracle 技能选择；在相同技能集下，DAG 编排显著优于原生扁平调用。abstract 未给出具体分数与 baseline 数值，精确指标需查原文。",
    "mainFinding": "结构化组合（能力树检索 + DAG 编排）是在生态规模下释放技能潜力的关键，二者均带来明显收益。",
    "limitations": "基准仅 30 个任务、五类场景，规模化实验依赖 LLM 成对评判，abstract 未披露绝对指标；真实生态治理的稳定性仍待验证。技能依赖预收集状态：框架假定技能已采集就绪，未覆盖从开放来源持续发现与自动采集新技能的流程。缺乏自动化质量控制：未内置技能质量的自动评估和筛选机制，对低质量或恶意技能的治理尚无方案。LLM 驱动的分类一致性：能力树构建依赖 LLM 的 Group Discovery 和 Skill Assignment，大规模下分类一致性和稳定性未充分验证。仅 30 任务基准：自建基准规模有限，五大类别各仅 6 个任务，泛化性有待更大规模验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2603.02176"
      },
      {
        "label": "代码",
        "href": "https://github.com/ynulihao/AgentSkillOS"
      }
    ],
    "citation": "AgentSkillOS. https://arxiv.org/abs/2603.02176",
    "figures": [
      {
        "src": "figures/skill-agentskillos-agentskillos_architecture_overview.png",
        "caption": "AgentSkillOS 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillnet-mgmt",
    "page": "skill",
    "title": "SkillNet",
    "shortTitle": "SkillNet",
    "category": "skill-governance",
    "maturity": "growing",
    "score": 0.58,
    "year": 2026,
    "venue": "arXiv 2026-02",
    "authors": "具体作者信息需查原文",
    "methodFamily": "skill governance",
    "tags": [
      "management",
      "skill governance",
      "active"
    ],
    "scores": {
      "clarity": 0.7,
      "evidence": 0.65,
      "reproducibility": 0.58,
      "adoption": 0.6,
      "selfEvolution": 0.58
    },
    "summary": "面向规模化技能创建、评估与连接的开放基础设施，已集成超 20 万技能。",
    "methodCore": "SkillNet 不只是一个技能仓库，更像一个技能操作系统——创建管线自动化、评估体系多维度、本体论三层组织、分发集成闭环。\n四源自动化创建：从执行轨迹/对话日志、GitHub 开源仓库、半结构化文档（PDF/PPT/Word）、自然语言描述四种来源，用 LLM 驱动自动提取结构化技能。生成后经过去重、过滤、分类、打标签、多维评估，只有通过质检的才入库。\n五维质检体系：每个技能从安全性（有无危险操作、抗注入能力）、完备性（流程步骤是否完整、前置条件是否写清）、可执行性（沙箱里能否实际跑通、有无幻觉工具调用）、可维护性（模块化程度、局部修改是否影响全局）、成本意识（延迟、算力、API 费用）五个维度量化打分。评估由 GPT-5o-mini 自动完成，可执行性维度还会在沙箱里实际跑。人类专家盲评验证：所有维度 MAE < 0.03，QWK 接近满分 1.000。\n三层技能本体论：分类层按功能领域分类（开发/AIGC/科研/安全等），关系图层定义四种类型化关系（similar_to/compose_with/belong_to/depend_on），技能包层将相关技能打包成模块化集合（如 data-science-visualization、e2e-browser-testing）。关系图谱用语义嵌入做候选匹配再用 LLM 确认关系类型。\n闭环集成：与 OpenClaw 集成后形成三种自动行为——遇到复杂任务自动搜索 SkillNet 下载匹配技能、定期分析本地技能库生成多维评估报告、完成任务后主动将成功经验打包入库。\n## 主要能力\n全链条覆盖：从创建到评估到连接到分发，其他平台更像技能市场，SkillNet 更像技能操作系统；四源自动炼制让技能库可以持续自我演化，不只是静态仓库；五维评估的自动化结果与人类专家几乎无差别，为大规模技能质量管理提供了可落地的方案；三层本体论把孤立技能变成有类型关系的知识网络，检索不再是纯语义匹配而是图结构上的导航。\n## 研究背景与贡献\nSkillNet 针对智能体缺乏系统化技能积累与迁移、频繁「重复造轮子」的问题，提出一套开放式技能基础设施，支持规模化地创建、评估与组织 AI 技能。它在统一本体（ontology）下结构化技能：可从异构来源创建技能、在技能间建立丰富的关系连接，并沿安全性（Safety）、完整性（Completeness）、可执行性（Executability）、可维护性（Maintainability）与成本意识（Cost-awareness）五个维度做多维评估。基础设施由三部分组成——收录超过 200,000 个技能的仓库、一个交互式平台，以及一套通用 Python 工具包。其核心理念是把技能形式化为「可演化、可组合的资产」，使智能体从一次性的临时经验走向可长期沉淀的持久能力，从而为自进化提供稳固底座。",
    "evaluation": "在 ALFWorld、WebShop、ScienceWorld 三个基准上评估，跨多种骨干模型显示 SkillNet 显著提升智能体表现：平均奖励提升 40%，执行步数减少 30%。技能仓库规模超 200,000。abstract 未给出各基准单项数值与对比 baseline 细节。",
    "mainFinding": "将技能形式化为可演化、可组合资产并统一评估，能显著提升多模型表现（平均奖励 +40%、步数 -30%）。",
    "limitations": "评估集中于三类交互式基准，五维评估的一致性与技能质量把控依赖平台机制；超大规模仓库的长期可维护性仍需观察。私有领域和低频、高度隐性的能力很难被收录——自动创建管线能抓到的知识有限。自动生成技能的恶意\"投毒\"虽然能检测一部分但无法彻底防御。从自然语言需求到全自动 Agent 部署的端到端管线还没打通。60万技能规模说小不小，但和真正的 Web 级别知识库比还有数量级的差距。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2603.04448"
      },
      {
        "label": "代码",
        "href": "https://github.com/zjunlp/SkillNet"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2014393687812110022"
      },
      {
        "label": "官网",
        "href": "http://skillnet.openkg.cn/"
      }
    ],
    "citation": "SkillNet. https://arxiv.org/pdf/2603.04448",
    "figures": [
      {
        "src": "figures/skill-skillnet-skillnet_overview.png",
        "caption": "SkillNet 方法概览"
      },
      {
        "src": "figures/skill-skillnet-skillnet_architecture_overview.png",
        "caption": "SkillNet 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-scr",
    "page": "skill",
    "title": "SCR (Skill Composition Risk)",
    "shortTitle": "SCR",
    "category": "skill-governance",
    "maturity": "growing",
    "score": 0.54,
    "year": 2026,
    "venue": "arXiv 2026",
    "authors": "华东师大 & A*STAR 新加坡 & 上海创新研究院",
    "methodFamily": "技能治理",
    "tags": [
      "governance",
      "技能治理"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.7,
      "reproducibility": 0.73,
      "adoption": 0.65,
      "selfEvolution": 0.68
    },
    "summary": "SCR 形式化了技能生态中的一个路径级安全盲区：技能在隔离评估下表现为良性，但其输出、信任信号或授权线索在组合执行路径中被下游技能复用时产生危害。SCR-Bench 通过三种风险机制（Capability Flow、Tr。",
    "methodCore": "## 形式化框架：技能组合图 $Gh = (V, Eh)$\n将 Agent 技能生态建模为上下文依赖的组合图。节点 V 是技能，边 Eh 表示技能间的输出→输入依赖关系。风险产生于图的路径层面而非单个节点层面：上游技能产出的上下文、信任判断或授权声明沿着边流向下游，下游技能无条件接受这些信号时触发危害行为。三种风险机制分别对应三种信号类型：操作上下文（能力流）、信任背书（信任传递）、授权边界的语言模糊（授权混淆）。\n## SCR-CapFlow：能力流动攻击\n上游发现类技能（如网络扫描、设备发现）输出目标 IP、端口或设备 ID，下游执行类技能（如配置修改、安装）将这些输出作为操作目标而非用户意图执行。150 对技能组合在 10 个模型上测试：组合条件 ASR 均值 33.6%，而隔离基线（单技能执行）接近零。DeepSeek-V4 在两种组合条件下均超 90% ASR，MiniMax-M2.7 达 75.5%/74.9%。\n## SCR-TrustLift + SCR-AuthBlur：信任和授权的语言层攻击\nTrustLift：上游审查/推荐类技能输出正面评价，下游安装技能将评价视为可信授权。401 次安装试验中，控制组 ASR 均值 1.10%，背书组 ASR 均值 83.89%（+82.79pp）。Opus-4.5 和 MiniMax-M2.7 达到 100% ASR。AuthBlur：上游输出包含\"建议执行 X\"的咨询性语言，改变了人类审批者的授权边界。118 个案例中，L0（无关控制）审批风险 15.7%，L1（相关任务上下文）升至 27.0%（+71.8%），L3（完整授权式建议）升至 34.0%（+116.6%）。\n## 主要能力\n首次形式化路径级技能组合安全风险，区分于现有按个扫描的隔离评估范式；三种风险机制覆盖了从代码层到语言层的完整攻击面：能力流、信任传递、授权混淆；SCR-Bench 在 10 个模型后端上系统性测量，揭示模型安全性在组合场景下的显著退化；Opus-4.6 在所有机制上表现最保守，但仍显示 +25.19pp 的信任传递提升。\n## 实验与要点\n工程价值在于提供跨平台一致的技能封装约定，降低技能在不同宿主间迁移与复用的摩擦，并为权限声明、静态审查、版本控制与检索编排提供统一语义基础。适用于多智能体平台协同、技能市场分发、以及企业内部技能资产统一治理的场景。\n统一的 Skill 格式与协议是技能生态可流通、可治理的前提，让能力从单平台解耦为可迁移资产。\n## 研究背景与贡献\nSCR 形式化了技能生态中的一个路径级安全盲区：技能在隔离评估下表现为良性，但其输出、信任信号或授权线索在组合执行路径中被下游技能复用时产生危害。SCR-Bench 通过三种风险机制（Capability Flow、Trust Transfer、Authorization Confusion）在 10 个模型后端上揭示：组合攻击成功率均值达 33.6%，信任传递使安装攻击率从 1.10% 飙升至 83.89%。",
    "evaluation": "SCR 形式化了技能生态中的一个路径级安全盲区：技能在隔离评估下表现为良性，但其输出、信任信号或授权线索在组合执行路径中被下游技能复用时产生危害。SCR-Bench 通过三种风险机制（Capability Flow、Trust Transfer、Authorization Confusion）在 10 个模型后端上揭示：组合攻击成功率均值达 33.6%，信任传递使安装攻击率从 1.10% 飙升至 83.89%。",
    "mainFinding": "SCR 形式化了技能生态中的一个路径级安全盲区：技能在隔离评估下表现为良性，但其输出、信任信号或授权线索在组合执行路径中被下游技能复用时产生危害。",
    "limitations": "当前 SCR-Bench 使用固定的成对技能组合，任意长度的多跳组合链未覆盖。授权混淆实验中人类审批者的行为在模拟环境中测量，可能与真实生产环境存在差距。防御侧完全空白：论文聚焦于测量和形式化风险，未提出缓解方案。实验技能集来源于研究环境构建，真实 ClawHub 等公开技能库的组合风险扫描尚未进行。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.15242"
      }
    ],
    "citation": "SCR. https://arxiv.org/abs/2606.15242",
    "figures": [
      {
        "src": "figures/skill-scr-scr_architecture_overview.png",
        "caption": "SCR 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skill-collision",
    "page": "skill",
    "title": "技能碰撞描述优化",
    "shortTitle": "技能碰撞描述优化",
    "category": "skill-governance",
    "maturity": "growing",
    "score": 0.58,
    "year": 2026,
    "venue": "arXiv 2026",
    "authors": "A Single Rewrite Suffices: Empirical Lessons from Production Skill Description Optimization",
    "methodFamily": "技能治理",
    "tags": [
      "governance",
      "技能治理"
    ],
    "scores": {
      "clarity": 0.4,
      "evidence": 0.35,
      "reproducibility": 0.33,
      "adoption": 0.3,
      "selfEvolution": 0.48
    },
    "summary": "微软在生产环境中发现，当 Agent 技能数量膨胀到几十个时，技能描述的语义重叠会导致路由决策混乱，即 Skill Collision（技能碰撞）。他们提出了一套基于 LLM 单次重写的自动化描述优化流水线，将人工调优一。",
    "methodCore": "将技能描述优化视为一个基于错误反馈的 LLM 改写任务，分为两步：\n## LLM 初始化\n给定技能名称，由 LLM 直接生成候选路由描述，无需复杂 prompt engineering。\n## 错误反馈精炼\n将初始描述在标注训练查询上做路由评估，收集三类信号：\nFP（误路由）：不该路由到此技能的查询被错误路由过来；FN（漏路由）：应该路由到此技能的查询被漏掉；TP（正确路由）：正确路由的查询，用于平衡 prompt 中的正负例。\n将当前描述、最多 5 个 FP 和 5 个 FN 案例、等量 TP 案例一并喂给 LLM，让其分析路由失败模式并重写描述。论文对比了两种模式：\n单次重写（Single-Shot）：将所有 FP/FN 案例一次性输入，LLM 直接产出一版改写描述；迭代精炼：重复评估-反馈-改写循环最多 N 次。\n## 实验数据\n消融实验的关键发现：三种反馈信号（FP+FN+TP 全集 vs 仅 FP vs 仅 FN）之间的 F1 差距全在 0.1% 以内；迭代 vs 单次的差距约 0.2%；训练集大小（5/10/20 例）差距不超过 0.5%。真正驱动优化的是错误反馈信号本身，而非其形式或轮次。\n实操层面给出两个关键诊断指标：\niter-0 训练 F1：低于 65% 的技能才是描述优化的主战场，优化增益平均 +6.27%；高于 65% 的技能优化空间仅 +0.63%；训练/验证 F1 差距：差距大说明是技能功能范围本身重叠（真性碰撞），需架构调整而非继续修改描述。\n## 主要能力\n自动化描述优化：替代人工逐技能调优，将 120 分钟的工程工作压缩到 3.8 分钟；单次重写即达可用水平：在所有反馈信号中，单次 LLM 重写是性价比最高的选项，迭代收益边际递减；区分真假碰撞：通过 iter-0 训练 F1 和训练/验证 F1 差距两个指标，快速判断问题是措辞层面的还是架构层面的；生产环境验证：在微软企业群聊 Agent（9 技能、372 回归用例）和 ToolBench（约 16000 工具）上完成了系统性消融。\n## 实验与要点\n工程价值在于为技能调用提供可集中管理、可审计、可回收的权限模型，契合企业多租户、多信任等级的部署需求，并支持最小权限落地。适用于需要按职责隔离技能与资源、满足合规审计的组织级智能体平台；作为治理探索方向，其在动态技能生态中的粒度设计仍在打磨。\n以角色为中间层收敛技能授权，使权限可集中声明、审计与回收，是组织级技能治理的基础控制面。\n## 研究背景与贡献\n微软在生产环境中发现，当 Agent 技能数量膨胀到几十个时，技能描述的语义重叠会导致路由决策混乱，即 Skill Collision（技能碰撞）。他们提出了一套基于 LLM 单次重写的自动化描述优化流水线，将人工调优一个技能所需的 120 分钟压缩到 3.8 分钟，提速 32 倍，而路由 F1 仅比人工基线低 0.12%。",
    "evaluation": "微软在生产环境中发现，当 Agent 技能数量膨胀到几十个时，技能描述的语义重叠会导致路由决策混乱，即 Skill Collision（技能碰撞）。他们提出了一套基于 LLM 单次重写的自动化描述优化流水线，将人工调优一个技能所需的 120 分钟压缩到 3.8 分钟，提速 32 倍，而路由 F1 仅比人工基线低 0.12%。",
    "mainFinding": "微软在生产环境中发现，当 Agent 技能数量膨胀到几十个时，技能描述的语义重叠会导致路由决策混乱，即 Skill Collision（技能碰撞）。",
    "limitations": "仅针对路由描述优化，无法解决技能功能范围本身重叠导致的真性碰撞——这类问题需要技能边界重构或架构调整。closed-world 与 open-world 路由优化不可混用：LLM 初始化在 open-world 中有帮助（+1.5-2.1% F1），在 closed-world 中反而有害（-0.8-1.4% F1），两个 regime 需分开处理。实验规模有限：生产环境中仅 9 个技能，更大规模技能库下的表现尚待验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.30775v1"
      }
    ],
    "citation": "技能碰撞描述优化. https://arxiv.org/abs/2606.30775v1",
    "figures": [
      {
        "src": "figures/skill-skill-collision-skill-collision_architecture_overview.png",
        "caption": "技能碰撞描述优化 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-ssl",
    "page": "skill",
    "title": "SSL",
    "shortTitle": "SSL",
    "category": "skill-governance",
    "maturity": "exploring",
    "score": 0.49,
    "year": 2026,
    "venue": "Agent Skills 生态实践",
    "authors": "北大团队提出 SSL（Scheduling-Structural-Logical）三层表示法，把 SKILL.md 中纠缠在一起的调度信号、结构信号和逻辑信号解耦成一张类型化 JSON 图——技能发现 MRR@50 从 0.649 提升到 0.729，风险识别 F1 从 0.409 提升到 0.509。",
    "methodFamily": "技能治理",
    "tags": [
      "governance",
      "技能治理"
    ],
    "scores": {
      "clarity": 0.65,
      "evidence": 0.6,
      "reproducibility": 0.63,
      "adoption": 0.55,
      "selfEvolution": 0.43
    },
    "summary": "北大团队提出 SSL（Scheduling-Structural-Logical）三层表示法，把 SKILL.md 中纠缠在一起的调度信号、结构信号和逻辑信号解耦成一张类型化 JSON 图——技能发现 MRR@50 从 。",
    "methodCore": "SSL 将一份 SKILL.md 映射为三层独立表示，用 LLM 提取后用硬验证流水线保证质量，关键原则是只提取不发明——每个字段必须有源文档证据。\nScheduling 层——技能名片：提取技能名称、目标描述、标签、意图签名、控制流特征（长时运行？有副作用？需人工确认？）。这一层回答调度问题：技能干什么、何时调用、输入输出长什么样，不用展开全文就能快速比较。\nStructural 层——执行剧本：将技能分解为有序场景序列（prepare → acquire → act → verify → finish），节点是场景，边是阶段转移类型。阶段类型使用受控词汇表，跨技能可比，执行引擎能据此知道\"当前在哪、下一步去哪、异常回退到哪\"。\nLogical 层——原子动作链：最细粒度。每个节点是逻辑步（READ、WRITE、CALL、EXPORT、CHECK），边是步间转移。每步标注参数、效果和资源边界，风险评估器直接看到\"这个技能会读本地文件、写本地文件、导出结果\"，不用从自然语言里推断。\n硬验证流水线：LLM 提取后过五道校验——结构完整性、标识符一致性、枚举值合法性、包含关系、转移目标指向——不通过就重试，直到输出合法。83% 的 SSL 输出经人工审计确认有源文档支撑。\n技能发现用浓缩信号，风险评估用双信号：检索靠 Scheduling 层就够了，源文档里的旁白反而是噪音；风险评估必须 SSL + 源文档搭配使用——SSL 浮现线索（\"有 WRITE 操作\"），源文档提供上下文（\"这个写操作严重吗\"）。\n## 主要能力\n将 SKILL.md 中三种性质完全不同的信号——调度/结构/逻辑——从单一文本面解耦为三层结构化 JSON，每个下游系统只消费自己需要的层；技能发现中，浓缩的结构信号反超完整 SKILL.md 全文的效果——信号纯度胜过信息量，检索不需要旁白；风险评估中，Logic 层的原子动作标记（READ/WRITE/CALL/EXPORT/CHECK）让审查器直接看到资源边界，F1 从 0.409 拉到 0.509；硬验证保证输出合法性，不通过就重试，避免 LLM 提取幻觉污染下游。\n## 实验与要点\n工程价值在于以成熟、普及的 Git 工具链为技能提供可追溯的变更历史、协作评审、稳定版本发布与快速回滚，天然对接 CI 中的测试与安全扫描。适用于技能协作生产、市场分发前把关、以及需要来源溯源与审计的治理场景，是自进化智能体技能沉淀的实用基础设施。\n把 Git 的版本、分支与审计范式迁移到技能资产，为技能演化提供来源溯源、协作评审与回滚能力。\n## 研究背景与贡献\n北大团队提出 SSL（Scheduling-Structural-Logical）三层表示法，把 SKILL.md 中纠缠在一起的调度信号、结构信号和逻辑信号解耦成一张类型化 JSON 图——技能发现 MRR@50 从 0.649 提升到 0.729，风险识别 F1 从 0.409 提升到 0.509。",
    "evaluation": "北大团队提出 SSL（Scheduling-Structural-Logical）三层表示法，把 SKILL.md 中纠缠在一起的调度信号、结构信号和逻辑信号解耦成一张类型化 JSON 图——技能发现 MRR@50 从 0.649 提升到 0.729，风险识别 F1 从 0.409 提升到 0.509。",
    "mainFinding": "北大团队提出 SSL（Scheduling-Structural-Logical）三层表示法，把 SKILL.md 中纠缠在一起的调度信号、结构信号和逻辑信号解耦成一张类型化 JSON 图——技能发现 MRR@50 从 0.649 提升到 0.729，风险识别 F1 从 0.409 提升到 0.509。",
    "limitations": "仅支持静态技能分析，不处理执行时的动态行为，复杂控制流（条件分支、循环）会被线性化。标准化结果依赖 LLM 提取质量，原文写得模糊时可能丢失信息或过度正则化。评估只覆盖技能发现和风险评估两个下游任务，执行、规划、监控等场景未测试。风险标签来自三模型投票而非安全专家独立审计，标注精度有上限。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2604.24026v4"
      },
      {
        "label": "代码",
        "href": "https://github.com/COOLPKU/SSL"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2035408399135928879"
      }
    ],
    "citation": "SSL. https://arxiv.org/abs/2604.24026v4",
    "figures": [
      {
        "src": "figures/skill-ssl-ssl_architecture_overview.png",
        "caption": "SSL 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillos",
    "page": "skill",
    "title": "SkillOS",
    "shortTitle": "SkillOS",
    "category": "skill-governance",
    "maturity": "growing",
    "score": 0.5,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "具体作者信息需查原文",
    "methodFamily": "skill governance",
    "tags": [
      "management",
      "skill governance",
      "active"
    ],
    "scores": {
      "clarity": 0.55,
      "evidence": 0.5,
      "reproducibility": 0.53,
      "adoption": 0.45,
      "selfEvolution": 0.63
    },
    "summary": "以强化学习学习技能策展（curation）的自进化智能体框架。",
    "methodCore": "架构分两个角色：执行器（冻结）只管干活，策展人（可训练）只管管技能。每完成一个任务，策展人观察完整轨迹后决定 insert/update/delete 三种操作之一，形成\"执行→观察→更新技能库→下次执行受影响\"的闭环。\n分组任务流替代随机排列：策展人在第 3 个任务改了一个技能，效果要等第 10 个相关任务才体现——延迟反馈是最大挑战。SkillOS 用软 Jaccard 相似度把相关任务聚成\"任务组\"，组内前面的决策在后面的任务上就见效，把延迟反馈转化成了即时可优化的信号。\n复合奖励函数：四维奖励驱动——$r_{task}$（任务成功率，核心信号）、$r_{fc}$（操作有效性，不能产出格式错误或不存在的东西）、$r_{cnt}$（内容质量，用 Qwen3-32B 做外部评判器打分）、$r_{comp}$（压缩奖励，鼓励精炼惩罚照抄轨迹）。GRPO 优化，每组任务跑 8 条独立 rollout 算优势函数。\n技能库从\"堆砌\"到\"精炼\"的演化路径：训练早期策展人只会不停 insert，后来 update_skill 占比持续上升——开始合并重复、提取共性、修正描述。技能内容从泛泛的\"Tips\"演化出失败处理逻辑、条件分支、状态验证、系统化搜索、回退规划等真正有操作性的结构。元策略技能（怎么思考问题）逐渐取代任务-物体专有技能（怎么处理水杯），形成可组合的元认知框架。\n## 主要能力\n分离式架构让策展能力可以独立升级，不碰执行器本身——冻结底层 Agent 模型，策展人单独训、单独部署；分组任务流把延迟反馈变成即时信号，解决了技能管理中最棘手的\"改了才知道好不好、知道了已经过了好几个任务\"的问题；复合奖励中的压缩奖励迫使策展人做减法而非照抄轨迹，产出的技能精炼、可复用；跨模型泛化：在 Qwen3-8B 执行器上训出来的策展人，换到 Qwen3-32B 甚至 Gemini-2.5-Pro 执行时性能照样往上走。\n## 研究背景与贡献\nSkillOS 针对 LLM 智能体常沦为「一次性问题求解器」、难以从历史交互中学习的问题，提出一套经验驱动的强化学习训练配方来学习技能策展（skill curation）。它把系统解耦为两部分:一个冻结的智能体执行器（executor）负责检索并应用技能，一个可训练的技能策展器（curator）负责根据累积经验更新外部技能库 SkillRepo。为给策展提供学习信号，作者设计复合奖励，并按「技能相关的任务依赖」把任务组织成分组任务流（grouped task streams）——较早的轨迹更新 SkillRepo，其后相关任务再来评估这些更新的效果，从而在间接、延迟的反馈下学习复杂的长程策展策略。相比依赖人工策展、启发式技能操作或只训练短程操作的既有方法，SkillOS 直面「如何从延迟反馈学习长期策展」这一瓶颈。分析显示，学到的策展器会产生更有针对性的技能使用，SkillRepo 中的技能随时间演化为结构更丰富、编码更高层元技能的 Markdown 文件。",
    "evaluation": "在多轮智能体任务与单轮推理任务上，SkillOS 在有效性与效率两方面均持续优于无记忆基线和强记忆基线；学到的策展器能跨不同执行器骨干与任务域泛化。abstract 未给出具体分数、基准名称与提升幅度，精确数值需查原文。",
    "mainFinding": "将技能策展建模为可用 RL 学习的长程策略，能在延迟反馈下学出可泛化的策展器，并使技能库演化出高层元技能。",
    "limitations": "abstract 未披露具体基准与数值；复合奖励与分组任务流设计较复杂，训练成本与在开放域生态的适配性仍待验证。训练成本不低——16 张 H100，ALFWorld 上 3 天，推理任务 2.5 天。技能库初始状态影响收敛速度和质量，冷启动到一个全新领域是未知数。复合奖励的四个权重是手工设的，不同领域可能需要重新调。目前只在两套任务（多轮交互 + 单轮推理）上验证，更长的演化周期（数万次交互）策展人能进化出什么尚未探索。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/pdf/2605.06614"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2036102058797946620"
      }
    ],
    "citation": "SkillOS. https://arxiv.org/pdf/2605.06614",
    "figures": [
      {
        "src": "figures/skill-skillos-skillos_architecture_overview.png",
        "caption": "SkillOS 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-slim",
    "page": "skill",
    "title": "SLIM",
    "shortTitle": "SLIM",
    "category": "skill-governance",
    "maturity": "growing",
    "score": 0.455,
    "year": 2026,
    "venue": "Agent Skills 生态实践",
    "authors": "Agent Skills 社区/工程实践",
    "methodFamily": "skill governance",
    "tags": [
      "management",
      "skill governance",
      "research"
    ],
    "scores": {
      "clarity": 0.5,
      "evidence": 0.45,
      "reproducibility": 0.38,
      "adoption": 0.4,
      "selfEvolution": 0.68
    },
    "summary": "轻量级 Skill 管理框架。",
    "methodCore": "核心逻辑：活跃技能集不是训练前写死的配置，而是训练过程中持续优化的变量。每 10 步 GRPO 更新触发一次技能审计，三步交替——层级检索 → MEC 估算 → 生命周期管理。\n层级式技能检索：通用技能全量注入所有任务，任务特定技能按类型分池存放，用嵌入余弦相似度匹配（阈值 0.45），最多取 3 个。检索只发生在任务特定层，把全库组合搜索压到任务范围内的候选筛选。\nMEC 边际贡献估算：对活跃技能 $s$，在用到它的验证任务上跑带 $s$ 和不带 $s$ 的对照实验。$∆t(s)$ = 带 $s$ 的表现 − 不带 $s$ 的表现。差值大说明策略还在依赖这个外部技能，差值为零或负说明已内化或开始制造噪音。用 EMA 平滑（系数 0.9）降噪。\n耐心退役机制：不是一次低贡献就移除，技能得攒够 30 次曝光，且连续 3 轮审计低贡献，才真正退役。保护低频但关键的长尾技能不被误杀。论文的理论分析证明耐心能指数级降低\"错杀\"概率。\n动态生命周期三条规则：保留（平滑 $MEC ≥ 0.03$）、退役（平滑 $ MEC < 0.001 $ 且满足曝光和连续性条件）、扩展（覆盖区域持续翻车时，从失败轨迹中生成新任务特定技能，通用技能不在扩展范围）。训练过程中活跃技能数从 38 涨到 46 然后波动到 21——系统在同时做两件事：训练策略变强，保留仍有边际价值的外部技能。\n## 主要能力\n用 MEC 量化每个技能在当前策略下的真实贡献，退役决策跟着数据走而非拍脑袋；耐心退役保护长尾关键技能——低频不代表不重要，连续低贡献才是真该退的信号；动态生命周期形成闭环：有用留着、没用退掉、不够就造，技能库在质量而非数量上优化；消融显示去掉退役机制最伤（-14.1），随机审计最惨（-18.7）——证明贡献感知的决策不可替代，扰动技能集本身不带来收益。\n## 研究背景与贡献\nSLIM 代表面向技能生态的轻量级管理取向:在不引入重型系统的前提下，以尽量精简的机制完成技能的组织、检索与调用治理。其工程语义强调「轻」——低侵入、低配置成本、易嵌入现有智能体运行时，避免为技能管理背上过重的框架与依赖，从而适合个人开发者、边缘部署或快速原型场景。轻量框架通常聚焦最核心的治理动作，如技能索引与发现、按需加载、基本的元数据与版本追踪，而把复杂的编排、权限与安全审查留给可选插件或外部组件。作为治理光谱上与 AgentSkillOS、SkillNet 等「重基础设施」相对的一端，SLIM 体现了「用最小机制换取可用治理」的务实思路，其价值在于降低技能管理的门槛与运行开销。",
    "evaluation": "工程价值在于以最小机制、低配置与低运行开销提供可用的技能管理，降低接入门槛。适用于个人开发者、快速原型、资源受限或边缘部署场景，以及不需要重型编排/权限体系的轻量智能体。作为治理光谱的轻量一端，其能力覆盖有限，复杂治理需求需另配组件。",
    "mainFinding": "以最小机制换取可用治理，用低侵入、低开销的方式满足技能组织、发现与按需加载的核心需求。",
    "limitations": "轻量意味着能力边界受限，缺乏完善的编排、权限与安全审查；在大规模或高安全要求生态中需依赖外部组件补足。审计有额外计算成本，ALFWorld 完整训练约 20 小时，技能库更大时审计开销怎么控是真实问题。退役/保留阈值手工设的，不同场景需要调整。MEC 是局部信号——当前\"没用\"的技能不等于以后也没用，训练早期被退役的永久丢失机会。扩展只覆盖任务特定技能，通用技能池空白时冷启动是硬伤。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.10923"
      },
      {
        "label": "代码",
        "href": "https://github.com/ejhshen/SLIM"
      },
      {
        "label": "知乎详解",
        "href": "https://zhuanlan.zhihu.com/p/2041216739745194889"
      }
    ],
    "citation": "SLIM. https://arxiv.org/abs/2605.10923",
    "figures": [
      {
        "src": "figures/skill-slim-slim_overview.png",
        "caption": "SLIM 方法概览"
      },
      {
        "src": "figures/skill-slim-slim_architecture_overview.png",
        "caption": "SLIM 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-muse-autoskill-mgmt",
    "page": "skill",
    "title": "MUSE-Autoskill",
    "shortTitle": "MUSE-Autoskill",
    "category": "skill-governance",
    "maturity": "growing",
    "score": 0.557,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "具体作者信息需查原文",
    "methodFamily": "skill governance",
    "tags": [
      "management",
      "skill governance",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.5,
      "reproducibility": 0.43,
      "adoption": 0.45,
      "selfEvolution": 0.88
    },
    "summary": "以统一生命周期创建、复用与精炼技能的技能中心化智能体框架。",
    "methodCore": "MUSE-Autoskill 将 Skill 生命周期定义为五个耦合阶段，在统一 Agent 循环中运转。\n## 五阶段生命周期\nSkill 创建（Creation）：内置 skill_create 在 Agent 的 ReAct 循环内发起创建，消除创建与执行的脱节。Skill 记忆（Memory）：构建三级记忆体系。短期记忆保存当前任务上下文并随增长自适应压缩，长期记忆跨会话持久化通用经验教训，Skill 级别记忆则为每项 Skill 维护独立的 .memory.md 文件，累积失败模式、输入陷阱和性能注意事项。Skill 管理（Management）：采用渐进式检索，启动时只注入 Skill 目录，Agent 决定使用后才加载完整内容。同时，辅以合并重叠 Skill 和裁剪失败或闲置 Skill 两层维护机制。Skill 评估（Evaluation）：单元测试充当质量守门人，创建时把关注册，复用中失败则自动触发精炼。Skill 精炼（Refinement）：基于错误反馈修订或重新生成 Skill，与评估耦合形成自动纠错闭环。\n## 关键设计\nSkill 级别记忆：采用 \"Skill 与经验分离\" 的设计：每个 Skill 对应一个 .memory.md 文件，用于存储 Agent 在使用过程中沉淀的所有经验教训。该文件被刻意隐藏且不随 Skill 打包导出，从机制上保证了 Skill 是可共享的公共资产，经验则是每个 Agent 独有的私有资产，彻底避免了经验的交叉污染。自适应上下文压缩：对话建模为 DAG 节点图，每节点为 plan-action-observation 三元组。Level-1 将超标节点压缩为摘要并保留链位置，Level-2 将中间连续节点合并为合成节点。\n## 主要能力\n版本化自进化：自生成 Skill 中位数 326 行（15.8KB），为人类 Skill 的 2.2 倍，包含详细的输入输出模式、失败模式和逐步操作流程；跨 Agent Skill 迁移：MUSE 生成的 Skill 注入 Hermes（完全不同设计的 Agent）后提升 +10.51pp，弥合 79% 与人类 Skill 的差距，验证 Skill 是真正外部化知识资产；跨会话能力积累：Skill 级别 .memory.md 机制使经验在每次使用时自动激活，无需重复推导；多域覆盖：SkillsBench 覆盖科学计算、数据分析、文档处理、运维规划四个超级领域。\n## 研究背景与贡献\nMUSE-Autoskill（Memory-Utilizing Skill Evolution）针对既有方法把技能当作孤立、静态工件、限制复用与长期改进的问题，提出以技能为中心的智能体框架，在统一生命周期下管理技能:创建（creation）、记忆（memory）、管理（management）、评估（evaluation）与精炼（refinement）。MUSE 按需创建技能、跨任务存储、通过技能目录（skill catalog）检索，并为每个技能累积经验以供后续复用与适配——即用 Skill 级记忆把使用过程中的经验沉淀回技能本身。其核心主张是把技能视为「长生命周期、经验感知、可测试」的资产，而非一次性产物，从而在多任务流中不断提升复用性、可靠性与长期表现。这一生命周期化设计使自生成技能能够持续吸收执行反馈并迭代改进，是「让智能体自己养技能」这一自进化路线的代表。",
    "evaluation": "在 SkillsBench 与 SkillLearnBench 的主报告设置下，MUSE-Autoskill 优于 Hermes、Codex 与 Claude Code。在 SkillsBench 成功覆盖子集上，其自建技能超过人工撰写技能（85.24% 对 81.17%）;MUSE 生成的技能迁移到 Hermes 的效果也优于 Codex 或 Claude 生成的技能，迁移下达到 51.90% 准确率。",
    "mainFinding": "在统一生命周期下管理并经验化技能，可使自生成技能在覆盖子集上超越人工撰写（85.24% vs 81.17%）且更易迁移复用。",
    "limitations": "优势基于「成功覆盖子集」等特定报告设置，覆盖范围外表现未充分展开；生命周期五阶段编排较重，泛化与成本仍待验证。覆盖率瓶颈：仅 68.6%（35/51）任务成功生成 Skill，失败集中在科学计算和系统运维等 Phase 1 基线薄弱领域，呈现\"强者恒强\"的马太效应。单轨迹蒸馏泛化风险：每个 Skill 仅从一条成功轨迹蒸馏，可能包含源轨迹特化的噪声假设，hvac-control 从 80% 跌至 20% 即为典型翻车案例。跨 Agent 迁移验证不完整：仅验证 MUSE → Hermes 单向，其他方向和更多 Agent 组合未测试。评估覆盖不足：SkillsBench 94 个任务仅跑 51 个，排除的任务环境更复杂，报告数字可能高估系统表现。版本膨胀风险：缺乏 Skill 版本的自动裁剪和压缩机制，高频使用 Skill 的 .memory.md 和版本号可能持续增长。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.27366v1"
      }
    ],
    "citation": "MUSE-Autoskill. https://arxiv.org/abs/2605.27366v1",
    "figures": [
      {
        "src": "figures/skill-muse-autoskill-muse-autoskill_overview.png",
        "caption": "MUSE-Autoskill 方法概览"
      },
      {
        "src": "figures/skill-muse-autoskill-muse-autoskill_architecture_overview.png",
        "caption": "MUSE-Autoskill 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-codeskill",
    "page": "skill",
    "title": "CODESKILL",
    "shortTitle": "CODESKILL",
    "category": "skill-governance",
    "maturity": "growing",
    "score": 0.505,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "具体作者信息需查原文",
    "methodFamily": "skill governance",
    "tags": [
      "management",
      "skill governance",
      "research"
    ],
    "scores": {
      "clarity": 0.55,
      "evidence": 0.45,
      "reproducibility": 0.43,
      "adoption": 0.4,
      "selfEvolution": 0.78
    },
    "summary": "把技能提取与技能库维护重构为可学习的管理策略，服务编码智能体自进化。",
    "methodCore": "CODESKILL 的核心想法是把\"管技能\"这件事本身当成一个可优化的问题——不是硬编码何时提取、何时合并、何时删除，而是让一个 LLM（skill manager，基于 Qwen3.5-4B）学会做这些决策，通过强化学习让它在真实的下游 coding agent 身上试出最优策略。\n1. 技能管理循环：skill manager 拿到 coding agent 的任务轨迹，从当前技能库里捡出相关上下文，输出一个操作。操作类型五选一（extract、evolve、add、merge、drop），内容可能是一条新技能，也可能是一个维护决策。执行后技能库原地更新。优化的目标很简单：更新后的技能库能不能让下游 agent 在未来任务上拿到更高的 pass rate。\n## 双粒度技能库\n任务级技能（task-level）：捕获跨任务族的高层策略，比如怎么检查仓库结构、怎么定位问题、怎么验证修复——通常从解决同类问题的多条轨迹中蒸馏出来。事件驱动级技能（event-driven）：提供局部执行事件的即时指引，比如命令失败、特定错误信息、测试输出模式出现时 agent 该怎么反应——由于同类执行事件跨任务反复出现，这类技能的可迁移性很强。\n3. 混合奖励设计：纯靠下游任务成功与否来给信号太稀疏，纯靠 LLM-as-judge 打分又可能跟真实效果脱节。CODESKILL 的做法是把两者拼在一起：\n质量奖励 RQ：rubric-based LLM-as-judge 从 grounding、reusability、specificity、format、actionability 五个维度打分；执行奖励 RE：在反向检索匹配的评估实例上，比较加载技能前后的 pass rate 差值；对齐因子 RA：判断 agent 的 rollout 是否真的匹配了技能的触发条件和指引内容——解决\"执行奖励到底该归功于谁\"的 attribution 问题。\n最终奖励：R = RQ + RA × RE。\n## 三阶段课程训练\nPhase 1：纯技能提取训练，让模型学会从轨迹中生成可复用的技能或跳过；Phase 2：加入技能进化，基于新的或失败的轨迹证据修编已有技能；Phase 3：加入技能库维护，对候选技能执行 add/merge/drop 操作。\n## 关键设计\nSFT 预热阶段用 teacher model（GPT-5.4-mini）从轨迹证据 + 技能库上下文中生成 12,856 条监督信号；GRPO 优化：每组采样 G 个操作，组内归一化 advantage，带 KL 惩罚项防止偏离 reference model；技能检索基于 sentence-transformers/all-MiniLM-L6-v2 构建稠密索引，任务级技能匹配任务目标，事件级技能匹配当前执行上下文。\n## 主要能力\n跨任务泛化：仅在 EnvBench + SWE-Bench Verified 上训练，在 Terminal-Bench 2（OOD benchmark）上同样提升 pass rate（25.88 → 34.12），证明学到的管理策略不是过拟合；跨 coding agent 泛化：用 Qwen3.5-35B-A3B 训练的策略，部署到 GPT-5.4-mini 下游 agent 上同样有效（+8.93 over no-skill），说明管理能力是 agent-agnostic 的；技能库自动精简：full lifecycle（含 maintenance）相比 extraction-only 把技能库从 1,252 个压缩到 676 个，几乎砍半，而 pass rate 仅下降约 2%——证明 merge/drop 操作有效去除了冗余；推理效率提升：技能引导使已解决实例的平均推理步数从 44.12 降至 35.15，说明程序性知识不仅提高成功率，还让 agent 更快找到正确路径。\n## 研究背景与贡献\nCODESKILL 面向编码智能体在求解软件工程任务时产生的丰富轨迹，主张把这些轨迹蒸馏为可复用的程序性技能（procedural skills）以支持自进化。针对既有方法依赖固定提示与启发式更新规则、不清楚知识该如何选择/抽象/维护的问题，CODESKILL 把「技能提取与技能库维护」重新表述为一个可学习的管理策略:它从编码智能体轨迹中提取多粒度程序性技能，用新经验演化技能，并维护一个紧凑的技能库供后续任务使用。训练采用强化学习，并用混合奖励——既有基于评分细则（rubric-based）的稠密技能质量反馈，又有来自冻结的下游智能体、可验证的稀疏执行反馈——共同驱动技能的选择、抽象与维护决策。其目标是在迭代构建中保持技能库规模稳定，避免无节制膨胀，同时让沉淀的技能真正提升下游编码任务表现。",
    "evaluation": "在 EnvBench、SWE-Bench Verified 与 Terminal-Bench 2 上，CODESKILL 相对无技能基线平均通过率提升 9.69，相对最强的基于提示或记忆的基线提升 4.01，且在迭代构建中保持技能库规模稳定。",
    "mainFinding": "将技能提取与维护重构为 RL 可学习的管理策略，用双粒度混合奖励驱动，平均通过率较无技能基线提升 9.69。",
    "limitations": "聚焦编码/软件工程领域，跨域泛化未展开；RL + 混合奖励训练依赖可执行验证环境，工程成本与稳定性仍需考量。技能表示形式受限：当前仅支持自然语言指令技能，不支持可执行脚本、API 定义、工具扩展等结构化技能——在 agent 可以自行扩展工具链的场景下会吃亏。单步操作粒度：每次只能对一个候选技能做一个操作（add/merge/drop 三选一），无法像\"同时修改多个相关技能\"或\"拆分一个过宽技能\"这种更复杂的维护决策。训练代价不低：GRPO 训练需要 4×H100 80GB、210 小时、500 RL step + 下游 coding agent 大量 rollout——对小团队或个人研究者门槛偏高。环境奖励噪声大：技能效果要经过\"技能→检索→注入→agent 在长程任务中遵循→成功\"这条长链才能体现，中间任何一个环节出问题都会污染奖励信号。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.25430"
      }
    ],
    "citation": "CODESKILL. https://arxiv.org/abs/2605.25430",
    "figures": [
      {
        "src": "figures/skill-codeskill-codeskill_architecture_overview.png",
        "caption": "CODESKILL 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillmaster",
    "page": "skill",
    "title": "SKILLMASTER",
    "shortTitle": "SKILLMASTER",
    "category": "skill-governance",
    "maturity": "growing",
    "score": 0.552,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "具体作者信息需查原文",
    "methodFamily": "skill governance",
    "tags": [
      "management",
      "skill governance",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.45,
      "reproducibility": 0.53,
      "adoption": 0.4,
      "selfEvolution": 0.83
    },
    "summary": "把技能的创建、精炼与选择内化为智能体自身能力的训练框架。",
    "methodCore": "## 两阶段轨迹设计：执行 → 技能掌握\n每条训练 episode 分两阶段：\n执行阶段与标准 Agent 相同，检索技能、注入 Prompt、逐步执行并收到环境奖励；技能掌握阶段将任务描述、检索技能、完整轨迹和最终反馈汇总为技能回顾 Prompt，Agent 必须输出恰好一个工具调用，propose_skill（新建）、update_skill（修改）或 keep_skill（保留）。技能管理被建模为可优化的 RL 动作，而非固定规则。\n## 反事实技能效用奖励\n当 Agent 调用 propose_skill 或 update_skill 时，系统选取 K 个语义相关的探针任务，每个跑两遍（原库 vs 临时修改库），比较表现。评分考虑失败变成功和成功变更快两种效果，只有多探针任务上效果一致正向的修改才拿高分。技能质量不再是主观判断，而是可量化的下游效果。\n## DualAdv-GRPO：双流优势估计\n执行阶段和技能掌握阶段的奖励尺度和语义完全不同。DualAdv-GRPO 将两个阶段的奖励分别归一化，执行 Token 走执行优势流、技能管理 Token 走技能优势流，用可调权重控制比例。二者同时训练，互不干扰。\n## 主要能力\nAgent 自主技能管理：技能创建、修改、选择全部由 Agent 自己决策，而非外部辅助系统；反事实效用评估：用探针任务的下游效果变化评估技能质量，区分\"靠技能成功\"和\"靠自己成功\"；技能内化：训练结束关掉技能检索后 Agent 从 98.7% 仅掉至 93.9%，技能已内化为 Agent 的自主行为模式；高效修改：整个训练过程仅约 20 次有效技能编辑，就把 7B 小模型送到 98.7%；跨模型碾压：7B 模型学会技能管理后，超越 GPT-4o（48.0%）和 Gemini-2.5-Pro（60.3%）。\n## 研究背景与贡献\nSkillMaster 针对既有框架中技能的创建、精炼与选择多由外部教师、手工规则或辅助模块掌控、技能始终是「被调用的外部资源」而非智能体可内化能力的问题，提出一套训练框架，教会智能体在解题过程中自主创建新技能、精炼已有技能并选择累积技能。它有三项关键设计:其一，轨迹知情的技能复盘（trajectory-informed skill review），让智能体基于已完成回合的证据来提议、更新或保留技能;其二，每个候选技能编辑都由其在相关探针任务（probe tasks）上的反事实效用（counterfactual utility）来评估，为技能编辑决策提供直接学习信号;其三，提出 DualAdv-GRPO，分别估计「任务求解动作」与「技能编辑决策」的优势（advantage），以稳定任务求解与技能管理的联合训练。总体上，SkillMaster 把 LLM 智能体从「会用技能」推进到能自我发展、适配并应用自身技能库的「自我改进智能体」。",
    "evaluation": "在 ALFWorld 与 WebShop 上，SkillMaster 相对 SOTA 基线的总体成功率分别提升 8.8% 与 9.3%，在所有对比方法中取得最佳表现。进一步分析显示，训练后的智能体能识别技能失败、从轨迹证据精炼程序性知识，并以有限的技能库编辑把改进迁移到未来任务。",
    "mainFinding": "通过 DualAdv-GRPO 分离执行与管理优势，把技能管理内化为智能体自身能力，在 ALFWorld/WebShop 提升 8.8%/9.3% 达最佳。",
    "limitations": "验证集中于 ALFWorld、WebShop 两类交互任务，更广领域泛化未展开；联合训练机制较复杂，对训练稳定性与算力有一定要求。依赖初始种子技能：技能库需要初始种子（论文使用 SKILLRL 蒸馏的技能）。反事实评估额外开销：探针任务评估需要额外 rollout 预算（默认 K=3）。探针任务选取依赖任务家族定义：更通用的选取策略仍是开放问题。",
    "related": [],
    "links": [
      {
        "label": "代码",
        "href": "https://github.com/sduyangmin/Skill-Master"
      },
      {
        "label": "SKILLMASTER 论文",
        "href": "https://arxiv.org/pdf/2605.08693"
      }
    ],
    "citation": "SKILLMASTER. https://github.com/sduyangmin/Skill-Master",
    "figures": [
      {
        "src": "figures/skill-skillmaster-skillmaster_architecture_overview.png",
        "caption": "SKILLMASTER 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillbrew",
    "page": "skill",
    "title": "SkillBrew",
    "shortTitle": "SkillBrew",
    "category": "skill-governance",
    "maturity": "growing",
    "score": 0.488,
    "year": 2026,
    "venue": "arXiv 2026-05",
    "authors": "具体作者信息需查原文",
    "methodFamily": "skill governance",
    "tags": [
      "management",
      "skill governance",
      "research"
    ],
    "scores": {
      "clarity": 0.5,
      "evidence": 0.35,
      "reproducibility": 0.48,
      "adoption": 0.3,
      "selfEvolution": 0.83
    },
    "summary": "将技能库策展形式化为带约束的多目标优化问题。",
    "methodCore": "## 全库级多目标优化形式化\n技能库质量有三个互相制约的维度：\n效用：技能有没有帮 Agent 提升表现；多样性：库里有多少冗余和重复；覆盖率：技能能不能覆盖各种不同任务）。\n三者互相拉扯——加技能扩覆盖通常引入冗余降低多样性；删技能保多样性通常牺牲覆盖。无法糅成一个标量而不引入偏差。SkillBrew 形式化为带约束的多目标优化：最大化三者同时效用不跌破门槛 $\\eta$，目标是求帕累托前沿。\n## Leave-One-Out 反事实信用分配\n要评估单份技能的边际贡献，不靠\"检索次数\"这种表面指标，而是把这份技能从库里临时移除，在同一批任务上跑 Agent，看表现变了多少。变差说明有用、没变说明可有可无、变好说明在帮倒忙。这种反事实评测比检索统计准确得多——被检索不等于被用到，被用到不等于起了正面作用。\n## 双层 Propose-then-Verify 循环\nPropose层：在 Support Set 上利用轨迹证据提出候选编辑（新增、改写、删除）。Verify 层：在 Query Set 上跑多目标评估，仅非支配配置进入下一轮。\n两层数据分离防止过拟合。采用帕累托感知选择——保留所有互不支配的候选配置，让优化器在\"有用 vs 多样 vs 覆盖\"的三角张力中自寻平衡，而非人工预设权重强行糅成单标量。\n## 主要能力\n全库级多目标优化：从\"单份技能好不好\"升级为\"库作为一个整体的效用、多样性、覆盖率是否健康\"；Leave-One-Out 反事实评测：精确量化每份技能的边际贡献，区分\"检索到\"和\"真正起了作用\"；帕累托感知技能库管理：不预设各维度权重，让优化器在三角张力中自动找到平衡点；与 SKILLPYRAMID/SkillDAG 互补：它们解决\"技能是什么结构\"，SkillBrew 解决\"结构里的内容怎么管理\"。\n## 研究背景与贡献\nSkillBrew 针对检索增强型 LLM 智能体所依赖的技能库（skill bank，即可复用文本原则的集合）常以「只增不删」的追加方式扩张、不断堆入冗余、过时或有害技能、导致仓库低效且策展不良的问题，把技能库策展形式化为一个带约束的多目标问题:理想的技能库应当对智能体有用（useful）、内容多样（diverse）、并对查询分布有良好覆盖（coverage）。为此，SkillBrew 将策展刻画为「在效用约束下的帕累托感知（Pareto-aware）优化」，并通过一个双层的「提议—验证」（propose-then-verify）循环求解，从而在保证效用的前提下权衡多样性与覆盖率，识别出该删除、该修改、该保留的技能。其核心立场是:应把技能库当作需要有原则地策展的对象，而非无限增长的追加式日志，这被视为迈向自我改进 LLM 智能体的重要一步。",
    "evaluation": "作者在两个公开基准上评估该方法，结果支持其核心观点:把技能库当作需有原则策展的对象、而非只增不删的追加式日志，是构建自我改进 LLM 智能体的重要一步。abstract 未给出具体基准名称与数值指标，精确结果需查原文。",
    "mainFinding": "将技能库策展形式化为效用约束下的多目标（有用/多样/覆盖）帕累托优化，用双层提议-验证循环替代只增不删的膨胀。",
    "limitations": "abstract 仅在两个公开基准上定性验证、未披露数值;多目标优化的调参与「提议-验证」循环开销、有害技能判定标准的可靠性仍待观察。反事实评测计算成本高：Leave-one-out 需要为每份技能跑多次 rollout，大规模技能库下成本随库大小线性增长。双层优化的 Support/Query 划分对结果敏感：数据划分不合适可能导致验证偏差。评测环境有限：论文未详细给出多领域实验数据。",
    "related": [],
    "links": [
      {
        "label": "SkillBrew 论文",
        "href": "https://arxiv.org/pdf/2605.29440"
      }
    ],
    "citation": "SkillBrew. https://arxiv.org/pdf/2605.29440",
    "figures": [
      {
        "src": "figures/skill-skillbrew-skillbrew_architecture_overview.png",
        "caption": "SkillBrew 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillguard",
    "page": "skill",
    "title": "SkillGuard",
    "shortTitle": "SkillGuard",
    "category": "skill-governance",
    "maturity": "growing",
    "score": 0.502,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "具体作者信息需查原文",
    "methodFamily": "skill governance",
    "tags": [
      "management",
      "skill governance",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.45,
      "reproducibility": 0.53,
      "adoption": 0.4,
      "selfEvolution": 0.63
    },
    "summary": "以技能为中心的权限框架，联合治理上下文影响与动作副作用。",
    "methodCore": "## Skill Manifest DSL：三层权限声明体系\n核心概念是 capability：将每类被保护行为抽象为独立于工具名称的能力标签（文件读/写、网络外发、凭证访问、进程生成、技能间委托）。DSL 分三个层级：\n底层 workspace baseline policy 为新会话设定默认权限种子；中间层每个技能的 manifest 列出所需能力、执行效果（允许/拒绝/询问用户）和约束条件；顶层 session-state document 记录当前活跃的运行时策略状态。\n## Permission Access Control：每次操作独立授权\nAgent 执行过程中每次尝试访问受保护资源，访问控制模块做一次完整检查：当前技能是否拥有该操作的权限？是否在允许的上下文范围内？若操作标记为敏感，是否已通过用户授权？对应 Android 的\"完整中介\"原则：权限不是加载时验一次就永远有效，每次实际调用都是独立授权点。\n## User Consent + Policy Enforcement：用户在场 + 默认拒绝\n对高敏感权限（网络外发、文件写入、进程生成），用户可给一次授权、会话级授权或拒绝。运行时策略引擎将 workspace 默认、skill manifest、持久授权和会话审批合并为统一策略管线。默认行为是拒绝：只有当四层中至少有一层提供正面授权时才放行。对 shell 类执行，额外启动一个权限生成 mini-agent 在命令执行前分析文本和脚本，推断所需底层能力。\n## 自动 Manifest 生成 + Runtime Monitoring\n自动生成器在 SkillInject 基准达到 91.0% F1，召回率尤其高。同时维护完整审计日志，记录每次被中介操作的关键字段，支持事后追溯和归因。\n## 主要能力\n五层权限架构：Skill Manifest → Access Control → User Consent → Policy Enforcement → Runtime Monitoring；能力标签 DSL 对 315 个真实技能实现 99.76% 对象覆盖率和 100% 组级覆盖率；自动 Manifest 生成达到 91.0% F1，降低技能作者权限声明的人为成本；默认拒绝 + 会话级动态策略，兼顾安全与可用性，正常任务完成率无显著下降；全量审计日志确保每次被中介操作可追溯、可归因。\n## 研究背景与贡献\nSkillGuard 针对当前技能生态大多依赖「信任式加载」与静态检查、在「技能能向智能体上下文注入什么」与「运行时能让智能体做什么」之间存在治理缺口、由此带来安全与隐私风险的问题，提出以技能为中心的权限框架，把技能视为「携带权限的可执行工件」。它引入双平面（dual-plane）治理模型，联合规制「上下文影响」与「动作副作用」两个层面，具体机制包括:技能清单（skill manifests）声明意图与能力、运行时访问控制、用户中介授权（user-mediated authorization）、默认拒绝（deny-by-default）执行、能力推断（capability inference）与行为监控。相比只做静态文件检查或只管单次工具调用的既有防御，SkillGuard 系统性地把技能「声明的意图」与其「运行时行为」连接起来，为技能生态的隐私与安全提供实用底座。",
    "evaluation": "在 315 个真实世界技能与 SkillInject 上评估:权限分类法覆盖 99.76% 的受保护对象，自动清单生成达到 91.0% F1。对抗评估中，SkillGuard 将上下文注入攻击成功率从 32.37% 降至 23.02%、明显注入从 25.56% 降至 16.67%，同时保持良性任务效用。",
    "mainFinding": "以「技能=携带权限的可执行工件」构建双平面权限框架，权限分类覆盖 99.76% 对象、清单生成 91.0% F1，并显著压低注入攻击成功率。",
    "limitations": "对抗攻击成功率仅被压低而未消除（仍有约 17%–23% 残余）；清单生成非完美，且依赖运行时监控，部署与性能开销需权衡。Shell 命令的权限推断是精度瓶颈：mini-agent 静态分析复杂管道、动态变量替换和脚本间依赖时可能出错，漏报或误报均有代价。技能间委托链未完全覆盖：多级委托的权限传递和衰减规则尚未完整形式化。自动 Manifest 生成剩余的 9% 漏报在实际部署中是最危险的盲区：安全攻击倾向于选择边缘情况入手。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.03024"
      },
      {
        "label": "代码",
        "href": "https://github.com/Dianshu-Liao/SkilLGuard"
      }
    ],
    "citation": "SkillGuard. https://arxiv.org/abs/2606.03024",
    "figures": [
      {
        "src": "figures/skill-skillguard-skillguard_architecture_overview.png",
        "caption": "SkillGuard 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-malskillbench",
    "page": "skill",
    "title": "MalSkillBench",
    "shortTitle": "MalSkillBench",
    "category": "skill-governance",
    "maturity": "growing",
    "score": 0.502,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "具体作者信息需查原文",
    "methodFamily": "skill governance",
    "tags": [
      "management",
      "skill governance",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.45,
      "reproducibility": 0.53,
      "adoption": 0.4,
      "selfEvolution": 0.63
    },
    "summary": "首个经运行时验证的恶意智能体技能基准。",
    "methodCore": "## 混合攻击面建模：技能同时承载代码注入和提示注入\nAgent 技能包同时装了自然语言指令、可执行脚本和工具权限，构成不属于任何现有防御范式范围的混合攻击面。代码注入和提示注入两类攻击可在同一技能中交叉出现，现有检测工具均未训练或测试过这种交叉模式。\n## 108 格三维分类体系 + 闭环生成-验证-反馈管线\n分类体系覆盖两个攻击向量、15 种恶意行为和 8 种插入策略，共 108 个攻击单元。3,214 个样本经闭环管线双重验证：生成器产出候选恶意技能→验证器在 Docker 沙箱中实际执行→用 strace 和 inotifywait 抓系统调用行为→LLM Judge 判断实际行为与标签匹配→失败样本连结构化反馈一起送回生成器。关键设计：验证从\"数据标注了恶意\"改为\"沙箱确认运行时确实执行了恶意行为\"。\n## 检测工具全面测量：单一工具无法跨两类攻击\n实测 12 个工具分三类：技能专用检测器代码注入召回最高 98.4%，但提示注入全线崩塌，最好 F1 仅 88.6%。天真拼接两类工具输出在 4,000 良性样本上产生 3,979 个误报：代码证据和指令证据不能简单用\"或\"逻辑合并。用野生样本和全量 benchmark 测同一检测器，召回率可差 66 个百分点。\n## 主要能力\n首个覆盖三维攻击分类体系的恶意技能基准：3,944 个恶意技能 + 4,000 配对良性样本；Docker 沙箱运行时双重验证（strace syscall trace + LLM Judge），验证从标签升级为行为证据；12 个检测工具在同尺度下系统测量，揭示代码注入和提示注入之间检测能力的结构性分裂；703 个野生技能分析揭示当前实际攻击生态：86.3% 为依赖冒充变体，81% 来自仅两个账户；发现新型攻击目标：劫持 Agent 控制平面（伪造身份声明、注入会话指令），对当前所有检测工具是盲区。\n## 研究背景与贡献\nMalSkillBench 面向 Claude Code、Gemini CLI 等 AI 编码智能体加载第三方技能（捆绑自然语言指令、可执行脚本与工具权限的 Markdown 包）所引入的供应链风险——技能既是代码又是面向智能体的指令，其风险既非纯代码亦非纯提示。针对检测工具从未在覆盖这一混合空间的可验证 ground truth 上被度量、有效性未知且「仅野外样本」评估存在偏差的问题，作者构建首个经运行时验证的恶意技能基准:3,944 个恶意技能，沿三维分类法标注为 108 个单元（cell）。其中 3,214 个来自「生成—验证—反馈」闭环流水线，仅接纳在 Docker 沙箱中经系统调用监控与 LLM 裁判确认「恶意行为确实触发」的样本;另加入 703 个野外样本与 4,000 个匹配的良性技能。度量显示:代码注入验证成功率达 94.5%，提示注入仅 75.8%;野外样本狭窄，被单一加密货币盗窃活动主导（86.6% 为一种行为、81% 来自两个账户），并有一小撮攻击智能体控制平面的新型长尾。",
    "evaluation": "度量表明:最强的技能专用检测器在代码注入上召回达 98.4%，却在提示注入与智能体控制攻击上崩溃;仅用野外样本评分会使排名波动最多达 66 个召回点。供应链扫描器与提示注入防御各自只看到技能的一半，任何组合都无法恢复「代码—指令」关系，因此检测须联合推理任务意图、代码与指令。",
    "mainFinding": "首个运行时验证恶意技能基准（3944 技能/108 单元）揭示现有检测器在提示注入与控制平面攻击上全线崩溃，须联合推理意图、代码与指令。",
    "limitations": "野外样本狭窄且被单一盗币活动主导，代表性受限;基准由生成-验证流水线构造，可能与真实攻击分布存在偏差。沙箱环境和真实 Agent 运行环境之间存在 gap：沙箱中验证通过的恶意行为模式在生产中可能表现不同。闭环生成的知识库有时间滞后：代码注入种子来自恶意包知识库，提示注入来自公开 jailbreak 语料，对全新攻击模式覆盖有延迟。良性技能配对为同类匹配，误报率在同领域对比中测得，跨领域对比下表现可能不同。当前仅覆盖 12 个检测工具，更广泛的工具生态覆盖待扩展。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.07131"
      }
    ],
    "citation": "MalSkillBench. https://arxiv.org/abs/2606.07131",
    "figures": [
      {
        "src": "figures/skill-malskillbench-malskillbench_architecture_overview.png",
        "caption": "MalSkillBench 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillwiki",
    "page": "skill",
    "title": "SkillWiki",
    "shortTitle": "SkillWiki",
    "category": "skill-governance",
    "maturity": "growing",
    "score": 0.48,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "具体作者信息需查原文",
    "methodFamily": "skill governance",
    "tags": [
      "management",
      "skill governance",
      "research"
    ],
    "scores": {
      "clarity": 0.55,
      "evidence": 0.4,
      "reproducibility": 0.43,
      "adoption": 0.35,
      "selfEvolution": 0.73
    },
    "summary": "面向智能体技能的「活的」知识基础设施。",
    "methodCore": "## 知识层与技能层解耦\n原始知识材料（执行轨迹、文档、API规范、脚本、历史技能）作为长期资产保存，技能在知识之上持续构建。从知识源抽取可复用的操作模式和工作流模式，技能始终与知识来源保持可追溯链接。控制要点：不是把文档直接转成prompt，而是提取结构化的能力表示。\n## 技能溯源图谱\n系统维护一张异构图，将知识来源、技能、工具、验证记录、执行历史和版本沿革全连在一起。每条技能可追溯完整履历——从哪个文档/轨迹产生、经过哪些验证、被哪些Agent调用、每个版本改了什么。控制要点：图谱为大规模仓库的治理、维护和演化提供关系骨架。\n## Git风格治理与闭环演化\n所有技能变更以候选变更形式提交，经过快照 → 差异分析 → 审查 → 发布四阶段。内置元技能和自管理Agent自动识别接口、实现、依赖和评估合约的变化，检测破坏性变更并生成维护提案。控制要点：执行反馈驱动闭环——运行时监控（成功率、故障模式聚类） → 自动修复提案 → 治理审查 → 版本发布。人的决策永远覆盖自主行为。\n## 主要能力\n完整生命周期管理：S0原始经验→S7归档八状态全覆盖，各状态间有明确转换条件和验证门禁；Git风格可审计治理：所有变更可追溯、可审查、可回滚，人工可随时介入任何阶段；异构知识转化：125件制品中99件（79.2%）成功转化，覆盖轨迹、文档、API、脚本、历史技能五类；执行驱动闭环演化：监测成功率、聚类故障模式、自动生成修复方案和版本更新；三层技能分类：原子技能（基础操作）、功能技能（可复用任务）、战略技能（高层规划协作）。\n## 研究背景与贡献\nSkillWiki 从「知识由 Wikipedia 管理、软件由 GitHub 管理，而智能体技能仍缺乏规模化生产、治理与演化的基础设施」这一观察出发，提出一套「活的」（living）知识基础设施:通过把异构知识转化为可复用的技能资产、并与其原始证据（originating evidence）相链接，来支持技能的组织、grounding 与持续演化。其演示覆盖完整的技能生命周期——从知识摄取（ingestion）、技能生产（production），到来源感知的探索（provenance-aware exploration）、治理（governance）与执行驱动的演化（execution-driven evolution）。核心理念是让知识、技能与执行经验在同一共享基础设施内协同演化(co-evolve):技能不再是无源的孤立文本，而是可追溯到证据、可被治理、并在执行反馈中不断迭代的资产。这把技能管理从「算法优化问题」重新定位为「基础设施问题」，强调 provenance 与治理闭环。",
    "evaluation": "作为一项 demonstration（演示）工作，其价值在于呈现从知识摄取、技能生产到来源感知探索、治理与执行驱动演化的完整技能生命周期，并将技能与其原始证据链接以支持溯源治理。适用场景为需要大规模生产、审计与持续演化技能资产的生态平台;abstract 未提供量化基准，具体指标需查原文。",
    "mainFinding": "把技能管理重定位为基础设施问题，让知识、技能与执行经验在同一平台内溯源关联、协同演化，形成治理闭环。",
    "limitations": "本文为演示/基础设施工作，abstract 未给出量化评测;溯源链接与治理闭环在超大规模、异构知识源下的一致性与维护成本仍待验证。规模验证严重不足：仅百级技能仓库测试，数万级别下的依赖爆炸、图谱性能、并发治理冲突均未评估。下游任务影响未测：治理后的技能仓库是否真正提升Agent任务完成率未验证。长期演化稳定性未知：持续演化的技能生态会收敛还是漂移，版本滚动下的兼容性保证是开放问题。偏向治理框架本身，技能内容质量的自动评估和优化机制较弱。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.16523"
      },
      {
        "label": "GitHub仓库",
        "href": "https://github.com/Huangdingcheng/SkillWiki"
      }
    ],
    "citation": "SkillWiki. https://arxiv.org/abs/2606.16523",
    "figures": [
      {
        "src": "figures/skill-skillwiki-skillwiki_architecture_overview.png",
        "caption": "SkillWiki 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-locate-and-judge",
    "page": "skill",
    "title": "Locate-and-Judge",
    "shortTitle": "Locate-and-Judge",
    "category": "skill-governance",
    "maturity": "growing",
    "score": 0.568,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "Bacem Etteib, Daniele Lunghi, Tégawendé F. Bissyandé",
    "methodFamily": "skill governance",
    "tags": [
      "management",
      "skill governance",
      "research"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.55,
      "reproducibility": 0.48,
      "adoption": 0.5,
      "selfEvolution": 0.83
    },
    "summary": "用注意力信号定位可疑片段、再判定的市场级恶意技能检测器。",
    "methodCore": "## 威胁建模：技能作为新攻击面\nAgent Skill通过第三方市场分发，Agent运行时加载不认识的人写的指令并执行。传统prompt注入防御靠\"受信任指令\"和\"不可信数据\"之间的边界来区分，但技能本身就是整篇第三方指令，恶意注入多出的几行和合法指令走同一个通道、继承同等权威。这条边界在技能场景下直接失效。\n## 结构化分段与注意力定位\n将技能文件按Markdown结构切成span（标题、段落、列表、代码块、元数据字段），喂给0.5B小模型。prompt不直接问\"有没有恶意\"，只引导模型关注\"可执行、强制性、操作相关\"的内容。读最后四层注意力权重，聚合到span上取top-K。控制要点：\npost-softmax sum：快速扫描；logit-z：加了log变换和z-score归一化，精度更高；注入要被执行，就得抓住模型的注意力。\n## 零样本判定与成本控制\nDeepSeek-V4-Flash对locator筛出来的top-K片段做零样本判定，不用标注数据。任一span分数超阈值τ就标记。控制要点：便宜的小模型跑全量，贵的judge只看K个片段。输入token省了2.84倍，总judge成本约$34 vs 全文$76。K=3时F1达0.955，高于全文扫描的0.921。\n## 市场级部署验证\nLobehub（10.2万）、Clawhub（3万）、Skills.sh三个市场全量扫描，359个标记，131个确认恶意（precision 83%），82个HMS（隐藏）。对比现有扫描器：SkillSpector recall 20%，Cisco 15.4%，L&J 95.4%。发现五组跨\"作者\"共享攻击者控制域名的协调攻击集群。\n## 主要能力\n注意力定位：小模型注意力权重筛span，Hit@K=0.95，不靠关键词所以没正则匹配的召回天花板；零样本判定：DeepSeek-V4-Flash直接判，不需要针对技能恶意做训练或微调；隐藏攻击检出：82个HMS检出68个（83%），全文仅45%，locator把可疑片段拎出来解决信号稀释；市场级部署：三个真实市场全量扫描总成本$34，检测到有组织的协调攻击集群；精确率可控：K=3时F1=0.955高于全文，三段超过全文的效果说明locator改善了judge判断质量。\n## 研究背景与贡献\nLocate-and-Judge 针对 LLM 智能体加载第三方技能（以用户权限执行的文件式指令包）所形成的新攻击面——单个恶意技能即可窃取数据、劫持智能体或作为供应链据点长期潜伏，而传统提示注入防御在此失效:它们依赖「可信指令 vs 不可信数据」的边界，但技能本身就是一大堆指令，被注入的命令混在众多合法指令中并继承其权限。为此，作者提出两阶段检测器:一个轻量「定位器」（locator）按每个结构化片段（span）所吸引的「指令跟随注意力」（instruction-following attention）打分，只保留 Top-K 高注意力片段;随后「判定器」（judge）对保留片段做细致审查。把昂贵的判定集中在少数高注意力片段上，使检测器能审计整个市场而非仅抽样。相比直接用 LLM 全量扫描，该方法带来约一个数量级的成本下降，以较小的召回代价大幅提升可扩展性，并在同等开销下优于关键词与正则基线。",
    "evaluation": "该方法以近乎可忽略的成本部署于市场级规模，以高 precision 标记技能，作者人工确认其中多数确为恶意，发现了数十个在线活跃恶意技能——包括数个伪装成良性功能者，以及许多 SkillSpector 与 Cisco Skill Scanner 未能检出的技能;作者并释出所得标注数据集。abstract 未给出统一的整体 precision/recall 数值。",
    "mainFinding": "用指令跟随注意力先定位、再判定，以约一个数量级更低成本实现市场级全量扫描，检出数十个连现有扫描器都漏掉的活跃恶意技能。",
    "limitations": "以较小召回代价换取成本与可扩展性，可能漏检低注意力隐匿攻击;判定质量依赖底层 LLM 与人工确认，precision 报告偏定性。注意力pattern在不同reader模型上是否一致没验证，攻击者可能用对抗样本绕开。segment parser切分粒度是硬依赖，单行base64 payload没切成独立span就漏。阈值在Skill-Inject上校准的zero-FP，实地跑出27个假阳（约7.5%），模式固定但还没自动过滤。漏的22个里大多是judge判无罪，召回天花板在judge能力上不在locator。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.23416"
      }
    ],
    "citation": "Locate-and-Judge. https://arxiv.org/abs/2606.23416",
    "figures": [
      {
        "src": "figures/skill-locate-and-judge-locate_and_judge_architecture_overview.png",
        "caption": "Locate-and-Judge 架构总览"
      }
    ]
  },
  {
    "id": "skill-source-skillspector",
    "page": "skill",
    "title": "SkillSpector",
    "shortTitle": "SkillSpector",
    "category": "skill-governance",
    "maturity": "mature",
    "score": 0.662,
    "year": 2026,
    "venue": "arXiv 2026-06",
    "authors": "Tu Lan, Chaowei Xiao",
    "methodFamily": "skill governance",
    "tags": [
      "management",
      "skill governance",
      "open-source"
    ],
    "scores": {
      "clarity": 0.75,
      "evidence": 0.7,
      "reproducibility": 0.73,
      "adoption": 0.65,
      "selfEvolution": 0.68
    },
    "summary": "面向技能安全的针对性运行时探测审计方法（Runtime Skill Audit, RSA）。",
    "methodCore": "## 两阶段检测管道\nStage 1 静态分析：11个分析器基于正则做快速模式匹配，AST行为分析检测exec/eval/subprocess等危险调用，YARA签名匹配恶意软件和webshell。SC4模块实时查OSV.dev获取依赖项CVE，缓存1小时，离线自动回退到内置列表。高召回，大多数问题能抓到。\nStage 2 LLM语义分析：评估上下文和意图，滤掉静态阶段的误报，给人类可读的解释。精确度提到约87%。支持openai/anthropic/本地Ollama，prompt带反越狱保护。--no-llm可完全本地跑。\n## 17类漏洞模式\nPrompt注入、Anti-Refusal、数据外泄、权限提升、供应链攻击、过度代理、输出处理、系统提示泄露、记忆投毒、工具滥用、Rogue Agent、触发器滥用、行为AST、污点追踪、YARA签名、MCP最小权限、MCP工具投毒。带可执行脚本的技能漏洞概率是纯文档的2.12倍，风险评分乘1.3倍。\n## MCP Server嵌入式护栏\n作为MCP服务器跑，注册到Claude Code等Agent：claude mcp add skillspector -- skillspector mcp。stdio和HTTP/SSE都支持。把安全扫描从安装前检查变成了运行时持续护栏。\n## 风险评分与多格式输出\n0-100分制：CRITICAL +50、HIGH +25、MEDIUM +10、LOW +5。≤50 SAFE/CAUTION，>50 DO_NOT_INSTALL。终端、JSON、Markdown、SARIF四种输出。基线管理用glob规则或指纹过滤已知误报。\n## 主要能力\n68种漏洞模式17个类别：从Prompt注入到MCP工具投毒，覆盖面广；两阶段检测：静态快速筛查加可选LLM语义，兼顾速度和精度（精确度87%）；多输入多输出：Git/URL/zip/目录/文件入，终端/JSON/Markdown/SARIF出；MCP Server嵌入式护栏：注册到Agent运行时，从离线检查变运行时持续防护；实时CVE查询：SC4查OSV.dev覆盖PyPI和npm数万条通告，离线自动回退。\n## 研究背景与贡献\n本条目对应论文《Runtime Skill Audit: Targeted Runtime Probing for Agent Skill Security》，提出 RSA（Runtime Skill Audit）动态分析方法。其出发点是:技能让 LLM 智能体复用指令、资源、工具与工作流，同时也成为恶意行为的新藏身处——一个技能在文档或代码中看似无害，却可能只在被特定用户请求、本地资产、持久状态或多步工具交互调用时才变得有害，这使纯静态审查变得脆弱。RSA 不用同一批通用任务测试所有技能，而是「审查技能中介的智能体在受控运行条件下实际做了什么」:它对风险相关接口做画像（profile risk-relevant interfaces）、准备触发这些接口所需的执行上下文，再依据由此产生的轨迹证据（trace evidence）赋予安全标签。作者在 OpenClaw 上实例化 RSA，并针对代表性静态基线做评测，验证动态审计相较静态审查在面对条件触发型与自进化攻击时的优势。（注:本条目 title 标为 SkillSpector，而输入所附论文实为 RSA;二者在文中被作为可比较对象出现。）",
    "evaluation": "在 OpenClaw 上对 100 个技能评测，RSA 达到 90.0% 准确率、88.0% 真阳性率与 8.0% 假阳性率，较最佳静态基线准确率提升 13.0 个百分点。在自进化攻击下，静态检测器在一两轮后即崩溃，而 RSA 跨多轮持续检出 20 个恶意技能中的 19–20 个。",
    "mainFinding": "以针对性运行时探测取代脆弱静态审查，在 100 技能上达 90.0% 准确率(较最佳静态基线 +13.0pp)，并在自进化攻击下持续检出 19–20/20。",
    "limitations": "评测规模为 100 技能、单一 OpenClaw 环境;运行时探测需构造执行上下文与画像风险接口，成本较高，且条目 title(SkillSpector)与所附论文(RSA)存在名实差异。纯静态分析，不执行技能，跑不了运行时触发的漏洞。非英语内容的恶意模式可能漏。图像中文本攻击、编译/加密内容搞不了。LLM分析会发文件内容到配置的提供商，隐私场景用--no-llm。",
    "related": [],
    "links": [
      {
        "label": "GitHub仓库",
        "href": "https://github.com/nvidia/skillspector"
      },
      {
        "label": "OSV.dev漏洞数据库",
        "href": "https://osv.dev"
      }
    ],
    "citation": "SkillSpector. https://github.com/nvidia/skillspector"
  }
];
