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
    "methodCore": "Trace2Skill 针对手工撰写技能不可扩展、而纯参数知识生成的技能常遗漏关键操作陷阱的问题，提出对智能体经验做归纳推理（inductive reasoning），把大量执行轨迹并行归并到统一的技能目录中。框架具双重能力：既能深化已有人工撰写技能，也能从较弱的 LLM 生成草稿创建有用技能。其核心机制是把反复出现的失败与规避手法压缩为标准操作流程（SoPs），使技能不再是训练轨迹的记忆性副本，而是可跨模型规模、跨模型家族、以及迁移到分布外设定的可移植资产。abstract 强调进化后技能无需参数更新、也无需测试时检索即可复用，并与顺序式技能编辑和 ReasoningBank 式检索记忆形成对比。整体把执行经验从零散轨迹提炼为组织化、可携带的过程性知识库，覆盖办公流程、数学推理、视觉问答等多样领域。",
    "evaluation": "abstract 明确在办公流程、数学推理、视觉 QA 等多领域验证有效，并报告从 Qwen3.5-35B 轨迹进化出的技能可使 Qwen3.5-122B 智能体在 WikiTableQuestions 上最多提升 57.65 个百分点。进一步分析显示其优于顺序式技能编辑与 ReasoningBank 式检索记忆，技能可跨模型规模与家族迁移。除该项外的绝对数值需查原文。",
    "mainFinding": "证明经归纳蒸馏、压缩为标准操作流程的技能可跨模型规模、跨模型家族与分布外设定迁移复用，无需任何参数更新或测试时检索，而非训练轨迹的记忆副本。",
    "limitations": "abstract 未详述归纳推理的算力开销与技能目录冲突消解机制；跨领域普适性主要以列举基准展示，长期维护与规模上界仍需原文佐证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2603.25158"
      }
    ],
    "citation": "Trace2Skill：将轨迹局部经验蒸馏为可迁移技能. arXiv:2603.25158."
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
    "methodCore": "D2Skill 针对现有技能方法多停留在轨迹级指导、缺乏演化式技能记忆维护机制的问题，提出面向 agentic RL 的动态双粒度技能库。其把可复用经验组织为两类粒度：任务技能（task skills）提供高层指导，步骤技能（step skills）提供细粒度决策支持与纠错。框架采用配对回合（paired rollouts）——在同一策略下分别执行基线回合与注入技能回合，用两者的性能差（performance gap）导出事后效用信号（hindsight utility signals），同时驱动技能更新与策略优化，实现策略与技能库联合训练。技能库完全从训练期经验构建，通过反思持续扩充，并以效用感知的检索与剪枝（utility-aware retrieval and pruning）维护。消融表明双粒度建模与动态维护对增益均属关键，学得技能效用更高、可跨评测设定迁移，且仅引入适度训练开销。",
    "evaluation": "abstract 明确在 ALFWorld、WebShop 与 Search-Augmented QA 任务上验证，D2Skill 在不同规模模型上均大幅优于无技能基线。消融分析显示双粒度建模与动态维护缺一不可，学得技能效用更高、可跨评测设定迁移，且训练开销适中。abstract 未报告具体百分比，绝对数值需查原文。",
    "mainFinding": "以任务技能与步骤技能双粒度组织经验，用基线与注入技能回合的性能差导出效用信号，实现策略与动态维护的技能库联合训练、协同进化。",
    "limitations": "abstract 未给出量化增益数字，具体幅度需查原文；配对回合采样与效用剪枝阈值的敏感性、以及大规模技能库的检索延迟仍待考察。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2603.28716"
      }
    ],
    "citation": "D2Skill：面向 Agentic RL 的动态双粒度技能库. arXiv:2603.28716."
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
    "methodCore": "SkillX 针对自进化范式中智能体孤立学习、重复重新发现相似行为、导致冗余探索与泛化差的低效问题，提出全自动构建即插即用（plug-and-play）技能知识库的框架，可跨智能体与环境复用。其流水线建立在三项协同创新上：（i）多层次技能设计（Multi-Level Skills Design），将原始轨迹蒸馏为策略性计划、功能性技能、原子技能三层层级；（ii）迭代式技能精炼（Iterative Skills Refinement），基于执行反馈自动修订技能以持续提升库质量；（iii）探索式技能扩展（Exploratory Skills Expansion），主动生成并验证新技能，将覆盖范围扩展到种子训练数据之外。作者以强骨干智能体 GLM-4.6 自动构建可复用技能库，并在挑战性的长程、用户交互式基准上评估其可迁移性。abstract 强调结构化、层级化的经验表示对可泛化的智能体学习至关重要，代码将开源。",
    "evaluation": "abstract 明确在 AppWorld、BFCL-v3 与 τ²-Bench 三个长程、用户交互式基准上评估迁移性，实验显示 SkillKB 插入较弱基础智能体时能持续提升任务成功率与执行效率。abstract 未报告具体百分比数值，绝对数值需查原文；代码计划公开于 GitHub（zjunlp/SkillX）。",
    "mainFinding": "以全自动的三层设计、迭代精炼与探索式扩展流水线构建即插即用技能库，可跨智能体与环境复用，并稳定提升较弱基础智能体的成功率与执行效率。",
    "limitations": "abstract 未给出量化增益；三层蒸馏与探索式扩展依赖强骨干（GLM-4.6），在弱模型上自动构建质量、以及技能库规模膨胀后的检索效率仍待验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2604.04804"
      }
    ],
    "citation": "SkillX：为智能体自动构建技能知识库. arXiv:2604.04804."
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
    "methodCore": "Memento-Skills 是一个通用、可持续学习的 LLM 智能体系统，定位为“设计智能体的智能体”（agent-designing agent），通过经验自主构建、适配与改进面向任务的智能体。系统建立在带状态提示（stateful prompts）的记忆式强化学习框架上，可复用技能以结构化 markdown 文件存储，充当持久且不断演化的记忆，同时编码行为与上下文，使知识跨交互延续。系统从简单基础技能（如网页搜索、终端操作）起步，借助 Memento 2 的读-写反思学习机制持续改进：读阶段由行为可训练的技能路由器依当前状态提示选取最相关技能；写阶段基于新经验更新与扩展技能库。该闭环实现无需更新 LLM 参数的持续学习。与依赖人工设计智能体的既往方法不同，Memento-Skills 支持通用智能体端到端地为新任务设计智能体，并通过迭代式技能生成与精炼逐步提升自身能力。",
    "evaluation": "abstract 明确在 General AI Assistants 基准与 Humanity's Last Exam 上验证获得持续增益，整体准确率分别取得 26.2% 与 116.2% 的相对提升（relative improvements）。代码已开源（Memento-Teams/Memento-Skills）。除上述两项相对提升外的绝对数值需查原文。",
    "mainFinding": "以外部化、可演化的 markdown 技能作为持久记忆，实现无需更新模型参数的端到端持续学习与智能体自设计，让通用智能体能为新任务自主设计并迭代改进智能体。",
    "limitations": "abstract 报告的是相对提升而非绝对分数，实际基线水平需查原文；技能路由器选取质量、markdown 技能规模膨胀后的检索与冲突管理仍待考察。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2603.18743"
      }
    ],
    "citation": "Memento-Skills：让智能体设计智能体. arXiv:2603.18743."
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
    "methodCore": "SkillRL 针对现有记忆式方法主要存储冗余且噪声重的原始轨迹、难以提取高层可复用行为模式的问题，提出一个在原始经验与策略改进之间架桥的框架，核心是自动技能发现（automatic skill discovery）与递归进化（recursive evolution）。它引入基于经验的蒸馏机制（experience-based distillation）构建分层技能库 SkillBank；配以自适应检索策略（adaptive retrieval），区分通用启发式与任务特定启发式；并设计递归进化机制，使技能库在强化学习过程中与智能体策略协同演化（co-evolve）。这些创新在显著降低 token 占用（token footprint）的同时增强了推理效用。整体思路是把杂乱轨迹提炼为结构化、可复用的行为模式，让技能库随策略更新而自我扩充，从而缓解智能体孤立运行、无法从过往经验学习的局限，并在任务复杂度上升时保持鲁棒。",
    "evaluation": "abstract 明确在 ALFWorld、WebShop 与七个搜索增强任务上评估，SkillRL 取得 state-of-the-art，较强基线超出 15.3% 以上，并在任务复杂度增加时保持鲁棒性；同时显著降低 token 占用。代码已开源。除该 15.3% 外的绝对数值需查原文。",
    "mainFinding": "以经验蒸馏构建分层 SkillBank 并借递归进化机制与策略在强化学习中协同演化，在显著降低 token 占用的同时提升推理效用，且随任务复杂度上升保持鲁棒。",
    "limitations": "abstract 未细述递归进化的收敛性与技能库剪枝策略；15.3% 为相对超越幅度，跨更广泛领域与更大模型的可扩展性仍待原文佐证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2602.08234"
      }
    ],
    "citation": "SkillRL：经递归技能增强强化学习进化智能体. arXiv:2602.08234."
  },
  {
    "id": "skill-source-skill-creator",
    "page": "skill",
    "title": "Skill Creator 2.0",
    "shortTitle": "Skill Creator ...",
    "category": "skill-generation",
    "maturity": "mature",
    "score": 0.62,
    "year": 2026,
    "venue": "Agent Skills 生态实践",
    "authors": "Agent Skills 社区/工程实践",
    "methodFamily": "skill generation",
    "tags": [
      "generation",
      "skill generation",
      "active"
    ],
    "scores": {
      "clarity": 0.65,
      "evidence": 0.7,
      "reproducibility": 0.73,
      "adoption": 0.65,
      "selfEvolution": 0.63
    },
    "summary": "Anthropic 以人机协作方式持续打造与优化技能，让智能体按需加载专业能力。",
    "methodCore": "Skill Creator 是 Anthropic Agent Skills 生态的核心工程实践：将专业能力封装为独立、可复用的技能包（通常以含 YAML frontmatter 的 SKILL.md 及配套脚本、资源组成），供智能体运行时按需加载。其公认工程语义含几项要点：一是渐进式披露，智能体先看到技能名称与简短描述，仅当任务相关时才加载完整正文与附带文件，从而在有限上下文中挂载大量技能而不臃肿；二是人机协作的创建与迭代闭环，由人给出任务规格与示例，工具辅助起草描述、正文与触发条件，再经真实使用反馈持续修订；三是标准化的可移植封装格式，使技能可跨智能体宿主安装、检视、版本化与纠正。它强调技能是显式、可审计、可复用的产物。",
    "evaluation": "作为工程实践，其价值在于把领域专长模块化、可移植化：适用于需为智能体批量装配专业能力、跨宿主复用、并对技能进行检视与版本管理的场景。渐进式披露显著缓解上下文预算压力，人机协作闭环保证技能质量可控可纠正。本条目无论文，故无实验数字，工程收益需在具体部署中衡量。",
    "mainFinding": "以人机协作与渐进式披露把专业能力封装为可审计、可移植、按需加载的标准化技能包，让智能体无需改动权重即可获得领域专长并被准确触发。",
    "limitations": "技能质量与触发准确性高度依赖描述撰写与人工反馈；缺乏统一自动化质控与量化评测，大规模技能库的命名冲突与维护成本随规模上升。",
    "related": [],
    "links": [],
    "citation": "Skill Creator 2.0, Agent Skills 生态实践条目。"
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
    "methodCore": "该工作面向终端类任务智能体的训练数据瓶颈，指出大规模构建高质量终端轨迹面临两大要求：可执行性（Executability，每个实例需一个合适且往往各异的 Docker 环境）与可验证性（Verifiability，异构任务输出难以统一标准化校验）。为此提出可扩展流水线 TerminalTraj，含三步：（i）筛选高质量代码仓库以构建容器化执行环境（Dockerized execution environments）；生成与 Docker 对齐的任务实例；合成带可执行校验代码的智能体轨迹，实现自动验证。基于该流水线，作者整理出 32K 个 Docker 镜像并生成 50,733 条经验证的终端轨迹，覆盖八个领域。以 Qwen2.5-Coder 为骨干在此数据上训练的模型在 TerminalBench 上持续提升，并展现更好的测试时扩展行为。整体用可执行、可验证的环境化流水线，把真实长程终端交互沉淀为可训练的高质量轨迹数据。",
    "evaluation": "abstract 明确整理 32K Docker 镜像、生成 50,733 条经验证终端轨迹覆盖八领域；以 Qwen2.5-Coder 训练后在 TerminalBench 上 TB 1.0 最多提升 20%、TB 2.0 提升 10%。TerminalTraj-32B 在百亿参数以下模型中表现强劲，TB 1.0 达 35.30%、TB 2.0 达 22.00%，并改善测试时扩展。代码数据已开源。",
    "mainFinding": "以容器化、可执行、可验证的流水线大规模合成 50,733 条终端智能体轨迹，显著提升终端任务能力，并使百亿参数以下模型展现更强的测试时扩展行为。",
    "limitations": "数据合成依赖高质量仓库与可写校验代码的任务，覆盖领域仍限于八类；轨迹质量受生成模型能力约束，跨骨干（非 Qwen2.5-Coder）的迁移效果需原文佐证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2602.01244"
      }
    ],
    "citation": "TerminalTraj：从容器化环境大规模生成终端智能体轨迹. arXiv:2602.01244."
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
    "methodCore": "AdaReasoner 是一族多模态模型，将工具使用（tool use）学习为一种通用推理技能，而非工具特定或显式监督的行为，从而应对“该用哪个工具、何时调用、如何多步组合”的核心挑战，即便面对新工具或新任务。它由三部分使能：（i）可扩展的数据整理流水线（scalable data curation pipeline），让模型接触长程、多步的工具交互；（ii）Tool-GRPO，一种基于终任务成功（end-task success）优化工具选择与排序的强化学习算法；（iii）自适应学习机制，动态调节工具使用。三者协同使模型能从任务上下文与中间结果推断工具效用，从而协调多个工具并泛化到未见工具。实验显示 AdaReasoner 展现强工具自适应与泛化行为：自主采用有益工具、抑制无关工具、按任务需求调整工具使用频率——尽管从未被显式训练如此行事。整体把工具编排内化为模型的通用推理能力。",
    "evaluation": "abstract 明确报告 AdaReasoner 在多项挑战性基准上取得 state-of-the-art：将 7B 基础模型平均提升 +24.9%，并在包括 VSP 与 Jigsaw 在内的多任务上超越 GPT-5 等强专有系统。abstract 未逐项列出单基准绝对分，具体数值需查原文。",
    "mainFinding": "把工具使用学成一种通用推理技能而非工具特定行为，7B 模型平均提升 24.9% 并在多任务上超越 GPT-5 等专有系统，且能自适应泛化到未见工具。",
    "limitations": "abstract 未给出各基准逐项绝对分与工具集规模细节；Tool-GRPO 对奖励设计与工具接口的依赖、在文本非视觉领域的迁移性仍待原文验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2601.18631"
      }
    ],
    "citation": "AdaReasoner：面向迭代式视觉推理的动态工具编排. arXiv:2601.18631."
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
    "methodCore": "SkillGen 针对高质量技能仍多靠手写、且无需重训即可提升智能体能力的诉求，提出一个多智能体框架，从基础智能体生成的轨迹中合成单一可审计（auditable）、人类可读的技能产物，可在使用前先行检视。其关键并非简单总结轨迹，而是对成功与失败轨迹同时进行对比归纳（contrastive induction），以识别可复用的成功模式、反复出现的失败模式，以及那些出现在临近成功而缺席于失败中的行为；随后生成候选技能并迭代精炼。SkillGen 的核心创新在于把智能体技能建模为干预（interventions）以实证验证其对整体性能的净效果（net effect）：在相同实例上比较有技能与无技能的结果，从而同时核算修复（repairs，技能修正基线失败）与回退（regressions，技能破坏基线成功）两类影响，避免只看片面收益。整体流程强调可审计、可对比、可验证的技能生成路径。",
    "evaluation": "abstract 明确在广泛的智能体与数据集上评估，SkillGen 持续提升留出集（held-out）性能，优于既有技能生成基线，并产出可跨模型迁移的技能。abstract 未报告具体百分比数值，绝对数值需查原文。其“干预式”净效果验证同时核算修复与回退，是评估方法学上的亮点。",
    "mainFinding": "以成功与失败轨迹的对比归纳合成单一可审计技能，并将技能建模为干预、在相同实例上实证核算修复与回退的净效果，产出可跨模型迁移的技能。",
    "limitations": "abstract 未给出量化增益数字，需查原文；对比归纳依赖足量成功与失败轨迹，单一技能产物在多技能协同、复杂长程任务上的表达力可能受限。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.10999"
      }
    ],
    "citation": "SkillGen：经验证的推理时智能体技能合成. arXiv:2605.10999."
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
    "methodCore": "SkillEvolver 针对当前技能是“一次撰写、原样消费、无从改进”的静态产物这一痛点，提出轻量、即插即用的在线技能学习方案：由单一元技能（meta-skill）迭代地撰写、部署与精炼领域特定技能。其学习目标是技能的自然语言正文与代码（prose and code），而非模型权重，因而产物可无需重训直接落入任何智能体；且元技能本身也只是一个技能，通过同一接口被任何协议兼容的 CLI-agent 加载。与轨迹蒸馏（trace-distillation）不同，元技能仅在部署学得技能之后才精炼——学习信号来自另一个智能体在使用该技能时遭遇的失败，而非仅靠探索性轨迹。精炼迭代由一个新鲜智能体过拟合审计（fresh-agent overfit audit）管控，用以捕捉可能的泄漏，以及部署技能特有的失败，包括“静默旁路”模式——技能内容看似有效却在运行时从未被调用。整体形成部署驱动、审计约束的在线技能进化闭环。",
    "evaluation": "abstract 明确在 83 个 SkillsBench 任务（覆盖 15+ 领域）上，SkillEvolver 达 56.8% 准确率，高于人工精选技能的 43.6% 与无技能基线的 29.9%；在 KernelBench 的三个 GPU kernel 优化任务上，将平均加速比从 1.16 提升到平均 1.51。数据具体、来源明确。",
    "mainFinding": "把技能学习本身抽象为可复用的元技能，以部署后另一智能体遭遇的失败为信号在线精炼技能正文与代码，SkillsBench 上超越人工精选技能且无需重训。",
    "limitations": "学习信号依赖部署环境能暴露真实失败，冷启动或失败稀疏场景下进化可能缓慢；过拟合审计的召回率与元技能对不同 CLI-agent 协议的兼容边界仍待原文细化。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.10500"
      }
    ],
    "citation": "SkillEvolver：将技能学习视为一种元技能. arXiv:2605.10500."
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
    "methodCore": "MUSE-Autoskill（Memory-Utilizing Skill Evolution）针对既有技能创建方法把技能当作孤立、静态产物、限制复用性、可靠性与长期改进的问题，提出以技能为中心的智能体框架，在统一生命周期下创建、复用与精炼技能，含五个阶段：创建、记忆、管理、评估与精炼。MUSE 按需创建技能，跨任务存储，通过技能目录（skill catalog）检索，并为每个技能累积经验（per-skill experience）以供后续复用与适配。其核心主张是把技能视为长生命周期、经验感知且可测试的资产，而非一次性提示。评估阶段检验技能有效性，管理阶段维护技能目录，记忆阶段沉淀 skill 级经验，从而让生命周期治理的技能把智能体经验蒸馏为高效可复用资产，并支持向其他智能体宿主迁移。",
    "evaluation": "abstract 明确在 SkillsBench 与 SkillLearnBench 主设定上 MUSE 优于 Hermes、Codex 与 Claude Code。在 SkillsBench 成功覆盖子集上，其自建技能超越人工撰写技能（85.24% vs. 81.17%）；MUSE 所建技能向 Hermes 迁移比 Codex 或 Claude 所建更有效，迁移准确率达 51.90%。",
    "mainFinding": "以创建-记忆-管理-评估-精炼五阶段生命周期治理技能并累积 skill 级经验，使自建技能在覆盖子集上超越人工撰写，并具更强的跨宿主可迁移性。",
    "limitations": "85.24% 的优势限于“成功覆盖子集”，未覆盖任务上的表现与整体成功率需查原文；生命周期各阶段的额外调用开销与技能目录规模扩张后的检索成本仍待评估。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.27366"
      }
    ],
    "citation": "MUSE-Autoskill：经创建、记忆、管理与评估的自进化技能智能体. arXiv:2605.27366."
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
    "methodCore": "ReSkill 受 Anthropic Skill Creator 启发，针对既有技能增强 RL 把技能创建与策略优化解耦、易采纳与演化中策略相冲突技能的问题，提出“RL-in-the-loop”的技能创建框架，调和技能演化与策略学习。它利用 GRPO 的组内结构，以极小额外开销嵌入三种机制：（1）断言驱动的技能创建器，从过往经验诊断失败并提出条件式、触发式修订；（2）组内回合采样，受控比较不同技能版本，捕捉哪一版本最能支撑策略当前的学习；（3）带自适应折扣的 Thompson 采样，在策略演化中于技能版本选择上平衡探索与利用。对技能生命周期的分析显示，技能随策略改进被自动创建、测试、精炼与剪枝，在近乎零额外采样开销下实现技能自生成、自评测与自进化。",
    "evaluation": "abstract 明确在多个领域上 ReSkill 持续优于既有记忆式与技能式 RL 方法，且在未见任务（unseen tasks）上增益最大。对技能生命周期的分析显示技能被自动创建、测试、精炼与剪枝，验证技能-策略协同进化。abstract 未报告具体百分比数值，绝对数值需查原文。",
    "mainFinding": "借 GRPO 组内结构以极小开销将断言驱动的技能创建嵌入策略优化循环，实现技能与策略调和式协同进化，在未见任务上增益最大。",
    "limitations": "abstract 未给出量化增益；三机制依赖 GRPO 的组结构，迁移到非 GRPO 算法的可行性、以及断言诊断在复杂失败上的准确性仍待原文验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.01619"
      }
    ],
    "citation": "ReSkill：在 Agentic RL 中调和技能创建与策略优化. arXiv:2606.01619."
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
    "methodCore": "OptSkills 针对 LLM 自动建模与求解优化问题时泛化受限（对表层叙述变化敏感、经验多停留在案例级、难适配漂移或新兴题型）的问题，提出以原型为中心（archetype-centric）的技能学习与推理智能体系统。为提升鲁棒泛化，系统按问题的底层原型（archetypes）而非表层叙述聚类问题；为提升分布内泛化，在每个簇内探索多样的建模范式与求解器配置，再将成功轨迹蒸馏为可复用的工作流级技能；为提升分布外泛化，用新获轨迹精炼已有技能或扩展技能库。整体把优化经验从零散案例上升为原型级、工作流级的可复用技能，使系统对叙述变体不敏感并能适配未见题型。（说明：输入概述提及 DBSCAN 聚类与并行探索，但 abstract 正文仅明确“按底层原型聚类”与“簇内探索多样范式”，故此处严格依据 abstract 表述，不写入具体聚类算法名。）",
    "evaluation": "abstract 明确取得 68.27% 的微平均准确率（micro-averaged accuracy）覆盖多样题型；在高难大规模高维基准 MIPLIB-NL 上达 26.91%，较 DeepSeek-V3.2-Thinking 高 4.53%；在 Nano-CO 上技能学习后，于分布外 NLCO 基准达到 72.79%。代码与技能已开源。",
    "mainFinding": "以问题底层原型而非表层叙述聚类经验、蒸馏工作流级技能，并用新轨迹精炼扩展技能库，显著改善优化建模的分布内与分布外泛化能力。",
    "limitations": "abstract 未点明具体聚类算法，实现细节需查原文；按原型聚类的效果依赖原型划分质量，面对全新原型或极端高维问题的适配能力仍有边界。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.29829"
      }
    ],
    "citation": "OptSkills：经聚类蒸馏从问题原型学习可泛化优化技能. arXiv:2605.29829."
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
    "methodCore": "MIND-Skill（Multi-agent INduction and Deduction for Skills）针对复杂多步真实任务需要领域过程性知识、而技能整理长期依赖人工的问题，提出从成功轨迹自动归纳可泛化技能并带鲁棒质量保证的框架。它含两个智能体：归纳智能体（induction agent）从成功轨迹抽象出可复用技能；演绎智能体（deduction agent）尝试遵循归纳出的技能重建轨迹。为保证生成技能质量，作者引入三重文本损失：重建损失（reconstruction loss）比较输入轨迹与重建轨迹；结果损失（outcome loss）强制重建轨迹的正确性；评分标准损失依预定义准则评估文档质量并规整技能的抽象层级。这些文本损失以 TextGrad 联合优化，生成技能在优化期未见的留出任务上评估。整体将技能质量从主观判断转化为可测量、可优化的目标，形成归纳-演绎闭环的质量保证式技能生成。",
    "evaluation": "abstract 明确在 AppWorld 与 BFCL-v3 上评估，MIND-Skill 持续优于同期技能生成方法。其以重建损失、结果损失、评分标准损失三重文本损失经 TextGrad 联合优化，并在留出任务上验证泛化。abstract 未报告具体百分比数值，绝对数值需查原文。",
    "mainFinding": "以归纳-演绎双智能体加重建、结果、评分标准三重文本损失经 TextGrad 联合优化，把技能质量从主观判断变为可测量、可优化的目标并给出保证。",
    "limitations": "abstract 未给出量化增益，需查原文；三重损失与 TextGrad 优化带来额外计算成本，演绎重建对轨迹可复现性要求较高，评分标准依赖预定义准则的合理性。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.08670"
      }
    ],
    "citation": "MIND-Skill：经多智能体归纳与演绎的质量保证技能生成. arXiv:2605.08670."
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
    "methodCore": "SkillComposer 针对当前技能构建被当作一次性抽取、忽视“规范化与泛化”内在张力（贴合具体任务的技能难迁移，而过度抽象的技能指导不足）的问题，提出将技能构建分解为三个可学习操作：创建（create）、改进（improve）、合并（merge）。框架通过系统化的拒绝采样配方（rejection sampling recipe）训练，使语言模型能在推理时自进化技能，并支持三种部署模式：离线构建通用技能库、在线做任务特定精炼、混合兼具两者。分析揭示 merge 与 improve 针对正交的质量维度，且技能组合是一种可迁移的元能力。整体把技能演化建模为可组合、可训练的操作序列，在规范化与泛化间取得平衡。（说明:输入概述提及 Delta Pass Rate，abstract 仅明确“系统化拒绝采样配方”，故此处依 abstract 表述。）",
    "evaluation": "abstract 明确在 τ²-Bench、LiveCodeBench v6 与 AppWorld 上评估，SkillComposer 持续优于基线；SkillComposer-4B 使 27B 执行器在智能体任务上最多提升 +4.5、代码任务上 +3.4，并可泛化到训练时未见的领域与任务类型。数据来源明确。",
    "mainFinding": "把技能构建拆为可学习的 create/improve/merge 三操作并经拒绝采样训练，实现推理时自进化，印证技能组合是一种可迁移的元能力。",
    "limitations": "拒绝采样训练需一定算力与标注反馈；+4.5/+3.4 的提升幅度相对温和，三操作对更长程、更强异构任务的组合上界与 merge 冲突消解仍待原文佐证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.06079"
      }
    ],
    "citation": "SkillComposer：面向规范化与泛化的智能体技能进化学习. arXiv:2606.06079."
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
    "summary": "以分类树引导把异构知识编译为结构化技能契约，与 RAG 双通道检索。",
    "methodCore": "Anything2Skill 针对 RAG 主要检索碎片化陈述性证据、迫使智能体反复从段落/手册/示例/日志/轨迹推断任务流程的问题，提出分类树引导（taxonomy-guided）的框架，把异构外部知识编译为可复用、可检索、可执行的技能。给定知识记录语料，框架先将每条记录分解为证据窗口（evidence windows），在技能树先验（skill-tree prior）下执行“计划-扩展”式技能抽取。候选技能随后被转为结构化技能契约，明确规定调用条件、禁忌、动作招式、工作流步骤、约束、输出规格、支撑证据与置信分。系统在持久化 SkillBank 中经分类感知编译、注册级协调、生命周期跟踪、版本化更新与可见的技能树投影来管理技能，构建可部署的过程性记忆。推理时智能体同时从原始知识库检索任务相关段落、从 SkillBank 检索相关过程性技能，形成 RAG 提供陈述性证据、编译技能提供可复用过程性指导的双通道。",
    "evaluation": "abstract 明确在 qsv 与 GitHub-CLI 上评估，Anything2Skill 结合 RAG 分别取得 98.85% 与 94.10% 的成功率，大幅优于仅用 RAG 的智能体。结果表明将潜在过程性知识编译为显式技能，可把检索增强智能体从“知识访问”扩展到“能力复用”。数据来源明确。",
    "mainFinding": "以分类树引导把异构外部知识编译为规定调用条件与工作流的结构化技能契约并入 SkillBank，与 RAG 双通道协同，把检索增强智能体从知识访问扩展到能力复用。",
    "limitations": "编译质量依赖分类树先验与证据窗口切分的合理性；两基准（qsv、GitHub-CLI）领域相对聚焦，向更开放、噪声更高的知识源泛化与契约维护成本仍待原文佐证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.09316"
      }
    ],
    "citation": "Anything2Skill：把外部知识编译为智能体可复用技能. arXiv:2606.09316."
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
    "methodCore": "COLLEAGUE.SKILL 针对“以人为本”的智能体难以构建——与某人或角色相关的可操作知识通常嵌于异构痕迹（traces）而非干净指令中——提出一套自动化的轨迹到技能蒸馏系统（trace-to-skill distillation），经专家知识蒸馏生成人格化（person-grounded）AI 技能。给定目标人物或角色的素材，系统产出带版本的技能包，含两条协同轨道：能力轨（capability track）承载实践、心智模型与决策启发式；有界行为轨承载沟通风格、交互规则与纠正历史。技能包可被检视、调用、通过自然语言反馈更新、回滚、跨智能体宿主安装，并可选地准备受控分发。作者描述了产物契约、生成工作流、纠正生命周期、部署面与领域预设。整体主张把人格化技能表示为可移植、可纠正的包，而非不透明提示或隐藏记忆，弥补记忆/人格系统只捕捉片段、技能框架只提供打包格式而缺乏端到端蒸馏工作流的空白。",
    "evaluation": "abstract 明确以工程系统与生态数据佐证影响力：撰写时公开仓库约 18.5k GitHub stars，画廊列出来自 165 位贡献者的 215 个技能，列出技能卡累计超过 100k stars。系统兼容可移植的技能打包格式，可跨宿主安装并经自然语言反馈纠正。属工程系统类工作，未报告任务准确率基准。",
    "mainFinding": "以能力轨与有界行为轨双轨蒸馏把人格化隐性经验封装为可检视、可纠正、可跨宿主安装的技能包，并形成约 18.5k stars 的开源生态。",
    "limitations": "abstract 以生态指标（star、贡献者数）而非任务准确率佐证，缺乏标准基准量化；人格化技能的行为边界与隐私、纠正历史的可靠性在广泛部署下仍需审慎评估。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.31264"
      }
    ],
    "citation": "COLLEAGUE.SKILL：经专家知识蒸馏的自动化 AI 技能生成. arXiv:2605.31264."
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
    "methodCore": "MMG2Skill 针对网络上丰富但多模态、异构、含噪且默认由人类执行的过程性知识难以直接作为智能体技能的问题，把该问题形式化为“教程到技能学习”（guide-to-skill learning）：将野外教程转为可执行技能，并从智能体可观察的轨迹中持续改进。为评估现有智能体在此任务上的能力，作者提出首个基准 MMG2Skill-Bench。进一步提出闭环框架 MMG2Skill：将教程编译为可编辑技能（editable skills），在执行时以这些技能约束一个固定的视觉-语言模型（VLM）智能体，并从轨迹级根因反馈修订技能——不使用基准分数作为信号。消融显示直接用原始教程提示智能体反而可能降低性能，而结构化技能构建与轨迹驱动修订二者均为增益所必需。在可推断成功的任务上，基于分析器的提前停止还能防止后期性能回退。整体形成“教程编译-技能约束执行-根因修订”的自进化闭环。",
    "evaluation": "abstract 明确覆盖 GUI 控制、开放式游戏与策略卡牌，使用六种 VLM 骨干，MMG2Skill 在每个模型-领域设定下均优于原始基线智能体，宏平均增益达 +12.8 至 +25.3 个百分点。消融证实结构化技能构建与轨迹驱动修订缺一不可；提前停止在成功信号校准良好时节省 25%-53% 的尝试。",
    "mainFinding": "将多模态野外教程编译为可编辑技能并以轨迹级根因反馈闭环修订，跨六种 VLM 骨干在每个领域上稳定获得 +12.8 至 +25.3 个百分点的宏平均增益。",
    "limitations": "修订信号依赖可观察轨迹与根因分析质量，成功信号校准不佳时提前停止收益受限；覆盖领域虽多样但仍限于三类任务，向更开放环境的泛化需原文佐证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.01993"
      }
    ],
    "citation": "MMG2Skill：智能体能否把野外教程蒸馏为自进化技能. arXiv:2606.01993."
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
    "methodCore": "SAPO（Self-Adaptive Process Optimization）针对现有自进化方法忽视细粒度推理步骤影响、导致推理器-验证器差距（reasoner-verifier gap），以及蒙特卡洛（MC）过程监督计算低效进一步加剧该差距的问题，面向小语言模型（SLMs）的自我改进提出自适应过程优化方法。其灵感来自错误相关负波（Error-Related Negativity, ERN）——推理器能在错误决策后定位错误并快速调整。SAPO 据此自适应且高效地引入过程监督信号，通过主动最小化推理器-验证器差距，而非依赖低效的 MC 估计。整体把过程级监督从昂贵的采样式估计转为主动、自适应的差距缩小，让小模型在无需大规模过程标注的情况下获得更细粒度的自我纠错能力，从而在推理密集任务上自我提升。作者还为过程奖励模型在数学与代码两类任务上引入两个新基准，以进一步考察 SAPO 对验证器性能的影响。",
    "evaluation": "abstract 明确在数学与代码两类挑战性任务上，SAPO 优于大多数现有自进化方法；并新引入数学与代码两个过程奖励模型（process reward models）基准，以进一步考察其对验证器性能的影响。abstract 未报告具体百分比数值，绝对数值需查原文。",
    "mainFinding": "受 ERN 启发以自适应过程监督主动最小化推理器-验证器差距，无需低效 MC 估计即在数学与代码任务上提升小模型的自我纠错与推理能力。",
    "limitations": "abstract 未给出量化增益，需查原文；方法聚焦小模型与数学/代码任务，向更大模型或开放域任务的适用性、以及新基准的公认度仍待验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2601.20312"
      }
    ],
    "citation": "SAPO：自适应过程优化让小推理器更强. arXiv:2601.20312."
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
    "methodCore": "EvoDS 针对现有数据科学智能体受静态动作集与缺乏原则性长程上下文管理限制、难以跨任务累积可复用经验、在多阶段迭代管线中不可靠的问题，提出通过 agentic 强化学习学会扩展技能并自适应管理长期上下文的自进化自主数据科学智能体。它引入两项关键策略：（1）自主技能获取机制（Autonomous Skill Acquisition, ASA），使智能体能合成、验证并复用可执行技能；（2）自适应上下文压缩策略（Adaptive Context Compression, ACC），把上下文管理当作可学习的控制问题，而非被动截断（passive truncation）。两者被编排在一个两阶段多智能体训练方案中，使 EvoDS 能随时间自主改进。理论上，作者证明其层级化设计降低了工具选择误差，优化目标与信息瓶颈原则一致，保证高效的上下文使用。整体形成技能自生成-验证-复用与上下文自适应压缩相结合的自进化范式。",
    "evaluation": "abstract 明确在四个多样基准上，EvoDS 平均超越 state-of-the-art 开源数据科学智能体 28.9%，同时消除超 token（out-of-token）失败。理论侧证明层级设计降低工具选择误差、优化目标契合信息瓶颈原则。代码与数据已开源，逐基准绝对分需查原文。",
    "mainFinding": "以自主技能获取加把上下文压缩学成控制问题的自适应策略并经两阶段多智能体训练，平均超最强开源数据科学智能体 28.9% 且消除超 token 失败。",
    "limitations": "28.9% 为平均相对提升，逐基准表现需查原文;两阶段多智能体训练与 RL 依赖较高算力，向数据科学以外领域的迁移性仍待验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.03841"
      }
    ],
    "citation": "EvoDS：具技能学习与上下文管理的自进化自主数据科学智能体. arXiv:2606.03841."
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
    "methodCore": "OpenClaw-Skill 面向为 LLM 智能体装备有效技能以解决 OpenClaw 等真实系统复杂任务的需求，提出集体技能树搜索（Collective Skill Tree Search, CSTS）——一个基于树搜索的技能构建框架，构建结构化、多样且可泛化的技能树。CSTS 借集体智能经两个迭代阶段联合搜索、识别与组合有效技能：集体技能节点生成（CSN-Gen）利用多模型的集体知识为每个子任务探索多样候选技能；集体技能节点评估（CSN-Assess）以多模型作为评判，用两种评分机制筛选节点——集体质量评分（collective quality scoring）聚合独立评估得出稳健的有效性估计，集体可迁移性评分显式验证技能是否跨模型良好泛化。据此构建技能树与技能增强训练数据。此外引入集体技能强化学习，主动从树中选取多个相关技能以拓宽解空间探索，避免被单一技能困住而产生同质或次优解。",
    "evaluation": "abstract 明确训练所得模型 OpenClaw-Skill 在长程规划、工具使用与泛化的挑战性基准上展现出色的智能体能力。（输入概述提及 9B 小模型逼近闭源竞争力，abstract 未给出该规模与具体数字，故此处依 abstract 表述，具体数值与基准分数需查原文。）",
    "mainFinding": "以多模型集体智能的技能树搜索构建可迁移技能树，并用集体技能强化学习主动选取多技能拓宽解空间，提升长程规划、工具使用与泛化能力。",
    "limitations": "abstract 未报告具体基准分数与模型规模，需查原文；集体搜索需调用多个模型，构建成本与评判一致性、以及技能树规模膨胀后的检索开销仍待考察。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.16774"
      }
    ],
    "citation": "OpenClaw-Skill：面向智能体大模型的集体技能树搜索. arXiv:2606.16774."
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
    "methodCore": "SkillChain 面向已在电商平台生产规模部署的图像 AI 助手场景——一张上传图片可触发商品搜索、风格推荐、视觉百科或工具调用等根本不同的用户意图，各自要求不同的响应格式、工具调用与领域知识；缺乏按意图的行为约束会使 LLM 系统混淆这些异构模式而达不到领域质量标准，而意图空间的广度与动态性又使人工工程不可行。为此 SkillChain 闭合技能进化的生产反馈循环，通过三阶段自动化技能生命周期：技能创建器（Skill Creator）从任务规格与轨迹自举技能；路由优化器（Route Optimizer）做路由对齐（routing alignment），确保意图正确映射到技能；正文精炼器（Body Refiner）经双路 LLM-Judge 评估迭代精炼技能正文。整体把技能的创建、路由与正文精炼串成自动闭环，以应对广而动态的意图空间并保证按意图的行为质量，是面向真实生产部署的技能自进化框架。",
    "evaluation": "abstract 明确部署于生产规模电商图像助手，SkillChain 大幅提升总体响应质量，在结构合规性（structural compliance）与内容质量上增益最强；为期一周的线上 A/B 实验进一步确认在用户参与度、内容消费与长期留存上取得显著增益。abstract 未报告具体百分比数值，绝对数值需查原文。",
    "mainFinding": "在生产级电商图像助手上以创建-路由-精炼三阶段闭合技能进化循环，线上一周 A/B 实验验证用户参与度、内容消费与长期留存均获显著提升。",
    "limitations": "abstract 未给出量化数字，需查原文；框架针对电商图像意图空间设计，向其他垂直领域迁移需重构任务规格；双路 LLM-Judge 评估的成本与判定偏差仍需关注。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.12984"
      }
    ],
    "citation": "SkillChain：为图像电商 AI 助手闭合技能进化循环. arXiv:2606.12984."
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
    "methodCore": "VisualSkill 针对计算机使用智能体（CUAs）在长程任务与未见软件上仍吃力、而既有技能库把技能产物仅表示为纯文本（忽视 GUI 交互的视觉本质）的问题，提出一种分层多模态技能（hierarchical multimodal skill）：针对每个目标应用定制，组织为一个中央索引（central index）之下的按主题文件（per-topic files），智能体通过 load_topic 这一 MCP 工具按需抓取相关主题的文本与图（figures）。每个技能以两阶段流水线构建，结合撰写的文档与实时应用 UI 探索。其关键主张是在技能产物中保留视觉图示、而非把它们“言语化抹除”，这既帮助智能体识别 UI 元素，也帮助其在每步动作后验证工作流状态。整体形成“中央索引 + 按主题多模态文件 + MCP 按需加载”的可复用技能组织方式，直接对比同源生成、仅模态不同的纯文本技能以隔离视觉信息的贡献。",
    "evaluation": "abstract 明确在 CUA-World 与 OSExpert-Eval 上，由 Claude Opus 4.6 支撑的 Claude Code CLI 智能体使用 VisualSkill 达平均 0.456，较无技能基线（0.303）绝对提升 +15.3 点；相较同源生成、仅模态不同的纯文本技能（0.373），再获 +8.3 点绝对增益。代码已开源。",
    "mainFinding": "证明在技能产物中保留截图而非改写为文字，能显著帮助 CUA 识别 UI 元素与验证工作流状态，较同源纯文本技能再增 8.3 个绝对点、较无技能基线增 15.3 点。",
    "limitations": "多模态技能构建需实时 UI 探索与图示维护，成本高于纯文本；评测集中于两个 CUA 基准且以强 VLM（Opus 4.6）为骨干，向更弱模型与更广软件的泛化仍待验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.18448"
      }
    ],
    "citation": "VisualSkill：面向计算机使用智能体的多模态技能. arXiv:2606.18448."
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
    "methodCore": "SkillRouter 针对技能生态膨胀至上万条目、推理时无法暴露全部技能的路由问题展开。作者先在源自 SkillsBench、含约 8 万候选技能且大量重叠的基准上审视主流的渐进式披露（progressive disclosure）设计——该做法只暴露技能名与描述而隐藏完整实现体。跨稀疏、稠密与重排三类代表性基线的实验发现，隐藏技能体会导致路由准确率下降 31–44 个百分点，说明技能全文并非可有可无的元数据细化，而是该场景下的关键路由信号。基于此结论，论文提出一个紧凑的 1.2B 全文「检索-重排」（retrieve-and-rerank）管线：先以全文检索召回候选，再经重排模块排序，从而在有限算力下利用完整技能文本这一强信号。整体流程强调用小模型承载全文语义，兼顾准确率与推理效率，避免依赖更大规模的基础管线。",
    "evaluation": "在其基准上 SkillRouter 取得 74.0% Hit@1，为所评估基线中最强的平均 Top-1 路由表现，同时参数量少 13 倍、运行速度快 5.8 倍于最强基础管线。排序增益还在独立构建自三个技能来源的补充基准上得到泛化。此外在覆盖四个编码智能体的端到端研究中，路由增益可转化为任务成功率提升，且对更强的智能体收益更大。",
    "mainFinding": "隐藏技能实现体会使路由准确率骤降 31–44 个百分点，证明技能全文是核心路由信号；小型全文检索-重排管线即可以更少参数取得最强 Top-1 路由。",
    "limitations": "结论基于 SkillsBench 派生的重度重叠大注册表场景，全文检索在极端规模或低重叠库上的表现仍需验证；端到端增益依赖底层编码智能体能力。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2603.22455"
      }
    ],
    "citation": "SkillRouter：面向大规模 LLM 智能体的技能路由. arXiv:2603.22455."
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
    "methodCore": "SkillOrchestra 针对复合 AI 系统编排的两大局限:(1) 输入级路由器做粗粒度的查询级决策,忽略任务需求的动态演变;(2) 强化学习训练的编排器适配成本高,且在多轮场景中易出现路由坍塌(routing collapse)——反复调用某个强但昂贵的选项。框架不直接端到端学习路由策略,而是提出技能感知编排:先从执行经验中学习细粒度技能(skills),再对每个智能体在这些技能下的能力(competence)与成本(cost)建模。部署时,编排器推断当前交互的技能需求,并在显式的性能-成本权衡下选择最能满足需求的智能体。这种显式技能建模将路由从数据密集的 RL 策略学习,转为可解释、样本高效且可扩展的能力-成本匹配过程,并支持跨 orchestrator 迁移。",
    "evaluation": "在十个基准上的大量实验表明,SkillOrchestra 相对 SoTA 的 RL 编排器最高提升 22.5%,同时相比 Router-R1 与 ToolOrchestra 分别降低 700 倍与 300 倍的学习成本。结果显示显式技能建模可带来可扩展、可解释且样本高效的编排。代码已开源于 GitHub。",
    "mainFinding": "显式技能建模+能力-成本权衡可替代数据密集的 RL 编排,在十基准上最高提升 22.5%,并将学习成本降低 700 倍/300 倍,同时缓解路由坍塌。",
    "limitations": "细粒度技能需从执行经验中挖掘,依赖高质量轨迹积累;能力-成本建模的准确性影响选路,面对全新技能或分布漂移时的鲁棒性有待观察。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2602.19672"
      }
    ],
    "citation": "SkillOrchestra：通过技能迁移学习路由智能体. arXiv:2602.19672."
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
    "methodCore": "Graph-of-Skills(GoS)针对技能库扩展至数千条时的两大挑战:(1) 加载全量技能会撑满上下文窗口,推高 token 成本、幻觉与延迟;(2) 单纯语义检索能召回主题相关技能,却遗漏其上下游前置依赖链,形成「前置缺口」(prerequisite gap),导致检索出的技能包无法执行完整。GoS 是一个面向大型技能库的推理时结构化检索层:离线阶段从技能包构建可执行技能图(executable skill graph);推理阶段通过三步检索出有界、依赖感知的技能包——混合语义-词法种子选取(hybrid semantic-lexical seeding)、反向感知个性化 PageRank(reverse-aware Personalized PageRank)扩散依赖关系,以及上下文预算受限的填充(context-budgeted hydration)。该设计将语义检索升级为结构感知检索,兼顾依赖完整性与上下文预算。",
    "evaluation": "在 SkillsBench 与 ALFWorld 上,GoS 于 Claude Sonnet 4.5、MiniMax M2.7、GPT-5.2 Codex 三个模型族上持续带来奖励提升与 token 节省。以 GPT-5.2 Codex 为例,SkillsBench 峰值奖励提升 25.55%,较全量加载基线减少 56.72% 总 token,消融在 200 至 2000 技能规模验证该模式。",
    "mainFinding": "结构化依赖感知检索弥补纯语义的前置缺口,GPT-5.2 Codex 在 SkillsBench 提升奖励 25.55%、省 56.72% token,并在 200–2000 上稳健",
    "limitations": "需离线从技能包构建可执行依赖图,依赖依赖关系的可解析性与准确性;PageRank 扩散与预算填充的超参对不同库规模的敏感性仍需关注。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2604.05333"
      }
    ],
    "citation": "Graph-of-Skills：面向海量智能体技能的依赖感知结构化检索. arXiv:2604.05333."
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
    "methodCore": "AgentSkillOS 面向 Claude agent skills 快速增长带来的生态利用、管理与扩展难题,提出首个系统化的技能选择、编排与生态级管理框架。框架含两阶段:(i) Manage Skills——通过节点级递归归类(node-level recursive categorization)将技能组织为能力树(capability tree),以支持高效发现;(ii) Solve Tasks——基于 DAG 管线(DAG-based pipelines)检索、编排并执行多个技能。为评估智能体调用技能的能力,作者构建了含 30 个产物丰富(artifact-rich)任务的基准,覆盖数据计算、文档创建、动态视频、视觉设计与网页交互五类。任务输出质量用基于 LLM 的成对评估(pairwise evaluation),并经 Bradley-Terry 模型聚合为统一质量分。整体强调结构化组合是释放技能潜力的关键。",
    "evaluation": "在 200 至 200K 三种技能生态规模上的实验表明:基于树的检索能有效逼近 oracle(理想)技能选择;在给定相同技能集时,基于 DAG 的编排也显著优于原生扁平调用。结果确认结构化组合是释放技能潜力的关键。代码已开源于 GitHub。",
    "mainFinding": "能力树检索可逼近理想技能选择,DAG 编排在同一技能集下显著超越扁平调用,证明结构化组合而非单纯堆量是关键,并在 200–200K 规模上得到验证。",
    "limitations": "评估基准仅 30 个任务、五类领域,规模偏小;质量依赖 LLM 成对评估,可能引入评判偏差;能力树构建对递归归类质量较敏感。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2603.02176"
      }
    ],
    "citation": "AgentSkillOS：生态级的智能体技能组织、编排与基准. arXiv:2603.02176."
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
    "methodCore": "SkillNet 针对当前智能体缺乏系统化技能积累与迁移、频繁「重造轮子」的问题,提出一个用于大规模创建、评估与组织 AI 技能的开放基础设施。其核心是将技能纳入统一本体(unified ontology):支持从异构来源创建技能、建立丰富的关系连接,并进行多维度评估,涵盖安全性(Safety)、完整性(Completeness)、可执行性(Executability)、可维护性(Maintainability)与成本感知(Cost-awareness)五个维度。基础设施整合了一个逾 20 万技能的仓库、一个交互平台与一个通用 Python 工具包。通过将技能形式化为可演化、可组合的资产,SkillNet 让智能体从一次性经验走向持久掌握,为技能巩固提供统一机制。",
    "evaluation": "在 ALFWorld、WebShop 与 ScienceWorld 上的实验表明,SkillNet 显著提升智能体性能:跨多个骨干模型平均奖励提升 40%,执行步数减少 30%。基础设施集成了超过 20 万条技能的仓库、一个交互平台与一个 Python 工具包,支撑技能的规模化创建、评估与组织。",
    "mainFinding": "以统一本体与五维评估形式化技能为可演化资产,跨三个基准平均奖励提升 40%、执行步数减少 30%,为技能积累与迁移提供了基础设施。",
    "limitations": "五维评估与本体构建依赖既定标准与人工/自动标注质量;20 万技能仓库的关系连接完整性与跨领域泛化仍需持续维护验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2603.04448"
      }
    ],
    "citation": "SkillNet：创建、评估与连接 AI 技能. arXiv:2603.04448."
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
    "methodCore": "GraSP 针对近期基准发现的反常现象:给智能体更多技能并不单调提升性能——聚焦的 2-3 个技能反而胜过完备文档,过多技能甚至有害;瓶颈已从技能可得性转向技能编排。GraSP 提出首个可执行技能图架构,在技能检索与执行之间引入编译层(compilation layer):将扁平技能集转化为带前置-效果边(precondition-effect edges)的类型化有向无环图(typed DAG),以节点级校验(node-level verification)执行,并通过五类类型化算子(five typed operators)进行局部受限修复(locality-bounded repair),把重规划复杂度从 O(N) 降至 O(d^h)。该设计以显式因果依赖组织技能的选择、组合与执行,强调结构化编排而非扩大技能库。",
    "evaluation": "在 ALFWorld、ScienceWorld、WebShop 与 InterCode 上、跨八个 LLM 骨干,GraSP 在每一种配置下均优于 ReAct、Reflexion、ExpeL 与扁平技能基线:相对最强基线奖励最高提升 +19 分,环境步数最多削减 41%。其优势随任务复杂度增长,且对技能过度检索与质量退化均具鲁棒性。",
    "mainFinding": "结构化编排而非更大技能库是可靠执行的关键;GraSP 以类型化 DAG 与局部修复在四基准八骨干上全面领先,奖励最高 +19 分、步数最多减 41%,并随任务变难而增益扩大。",
    "limitations": "需将扁平技能编译为带前置-效果边的类型化 DAG,依赖依赖关系可准确抽取;五类算子的修复能力面对复杂或错误依赖时边界仍待考察。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2604.17870"
      }
    ],
    "citation": "GraSP：面向 LLM 智能体的图结构化技能组合. arXiv:2604.17870."
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
    "methodCore": "SkillRet 针对技能检索这一被低估却关键的系统挑战:小库中用户可按名显式调用技能,但随生态在紧张的上下文与延迟预算下增长,该假设失效,而技能检索缺乏基准与对真实库检索行为的理解。为填补空白,作者构建大规模技能检索基准 SkillRet:含 17,810 条公开智能体技能,以结构化语义标签(structured semantic tags)与两级分类法(two-level taxonomy)组织,跨 6 大类与 18 子类;提供 63,259 个训练样本与 4,997 条评估查询,且技能池互不相交(disjoint),既支持基准评测也支持面向检索的训练。作者在多种检索器上评测,并通过 SkillRet 上的任务专属微调(task-specific fine-tuning)提升性能,分析指出增益源于微调模型能更好聚焦长而嘈杂查询中的少量技能相关信号。",
    "evaluation": "跨多种检索器的评测显示技能检索远未解决:现成模型在真实大规模技能库上表现挣扎,先前技能检索模型仍有大量提升空间。在 SkillRet 上的任务专属微调显著提升性能——NDCG@10 相比最强先前检索器提升 +13.1 分,相比最强现成检索器提升 +16.9 分。",
    "mainFinding": "技能检索远未解决,现成检索器在真实大规模库上表现不佳;SkillRet 上的专属微调可将 NDCG@10 提升 +13.1/+16.9 分,增益源于聚焦长噪查询中的技能信号。",
    "limitations": "基准规模约 1.8 万技能、6 大类,可能未覆盖更极端生态;微调增益依赖 SkillRet 训练分布,跨域迁移与真实用户查询下的稳健性仍需验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.05726"
      }
    ],
    "citation": "SkillRet：面向 LLM 智能体技能检索的大规模基准. arXiv:2605.05726."
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
    "methodCore": "SkillGraph 针对 LLM 智能体从大型 API 库中选工具并正确排序的问题:现有方法对检索与排序都用语义相似度,但排序依赖工具间的数据依赖,而这在工具描述中缺失,导致纯语义方法在结构化工作流域产生负的 Kendall-τ。作者从 49,831 条成功的 LLM 智能体轨迹中挖掘出一个有向加权的执行转移图(directed weighted execution-transition graph),将工作流先后规律编码为可复用的图基础先验(graph foundation prior)。基于该先验,提出两阶段解耦框架:GS-Hybrid 检索(GS-Hybrid retrieval)负责候选选取,学习式成对重排器(learned pairwise reranker)负责排序。该设计把工具选择与顺序决策分离,用图先验补足描述中缺失的先后依赖信号。",
    "evaluation": "在 ToolBench(9,965 个测试实例、约 16,000 个工具)上,方法达到 Set-F1 = 0.271、Kendall-τ = 0.096;在 API-Bank 上 Kendall-τ 从 -0.433 提升至 +0.613。在相同的第一阶段输入下,该学习式重排器也优于 LLaMA-3.1-8B 的第二阶段重排器。",
    "mainFinding": "工具排序依赖描述缺失的数据依赖,纯语义产生负 Kendall-τ;近5万轨迹挖掘的执行转移图先验将 API-Bank 的 Kendall-τ 从 -0.433 升至 +0.613。",
    "limitations": "图先验依赖大量成功轨迹挖掘,对新工具或稀有工作流的覆盖受历史数据限制;结构化工作流之外的领域收益如何仍需验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2604.19793"
      }
    ],
    "citation": "SkillGraph：面向 LLM 智能体工具序列推荐的图基础先验. arXiv:2604.19793."
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
    "methodCore": "SkillRAE 针对检索增强执行(Retrieval-Augmented Execution, RAE)中被忽视的一环:现有工作多聚焦优化技能检索与任务执行,却很少关注如何把选出的技能证据组织成紧凑、有据(grounded)、可直接使用的形式供下游执行器完成任务。SkillRAE 是聚焦技能式上下文编译(skill-based context compilation)的两阶段方法,含离线与在线阶段:离线索引阶段在技能社区(skill communities)、技能(skills)与可复用子单元(reusable subunits)三个层级上构建多级技能图(multi-level skill graph)捕获其关系;在线检索阶段先做技能排序检索并导出选定子单元证据,再施加救援感知的紧凑编译(rescue-aware compact compilation)恢复关键证据,把粗排技能集编译为任务专属、紧凑、有据且可即用的上下文。",
    "evaluation": "在两个公开基准上,SkillRAE 相较基线取得显著提升。例如在 SkillsBench 上相比 SOTA 方法提升 11.7%。消融研究进一步表明其上下文编译至关重要,而非简单的 prompt 附加,验证了「如何组织检索证据」这一环节对下游执行的独立贡献。",
    "mainFinding": "检索之后如何编译上下文同样关键;SkillRAE 通过多级技能图与救援感知紧凑编译,在 SkillsBench 上较 SOTA 提升 11.7%,消融证实编译而非简单拼接是核心。",
    "limitations": "需离线构建社区-技能-子单元三级图,依赖关系抽取质量;救援感知编译的超参与子单元切分粒度对不同任务的适配性仍需观察。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.10114"
      }
    ],
    "citation": "SkillRAE：面向检索增强执行的技能式上下文编译. arXiv:2605.10114."
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
    "methodCore": "SkillsVote 针对开放技能生态中的冗余、参差、环境敏感与「无差别更新污染未来上下文」问题,提出覆盖收集、推荐、归因与演化的生命周期治理框架。它先对百万级开源语料(million-scale corpus)按环境需求、质量与可验证性画像,并为可验证技能合成任务。执行前,进行结构化技能文件夹上的智能体式库搜索(agentic library search)以暴露指导性上下文;执行后,把轨迹分解为技能关联的子任务,将结果归因(attributes)到技能引导执行、智能体探索、环境与结果信号四类因素,并仅接纳成功且可复用的发现进入证据门控更新(evidence-gated updates)。该设计实现两条互补路径:测试时对任务流的在线演化,以及通过冻结库(frozen libraries)的离线迁移。",
    "evaluation": "在 Terminal-Bench 2.0 与 SWE-Bench Pro 上的实验表明,SkillsVote 提升了智能体在高难度智能体编码基准上的表现。增益源于两条互补路径:测试时对任务流的在线演化,以及基于历史轨迹或精选开源技能构建的冻结库的离线迁移。",
    "mainFinding": "以证据门控更新治理技能全生命周期,只接纳成功可复用发现以防污染;在 Terminal-Bench 2.0 与 SWE-Bench Pro 上经在线演化与离线迁移双路径提升编码表现。",
    "limitations": "百万级语料画像与四因素归因流程较重,依赖任务合成与可验证性判定质量;证据门控阈值设置影响演化速度与库纯净度的平衡。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.18401"
      }
    ],
    "citation": "SkillsVote:从收集、推荐到演化的智能体技能生命周期治理. arXiv:2605.18401."
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
    "methodCore": "Skill-RAG 针对现有 RAG 把检索后失败当作「重试」信号而非「诊断」信号、未解决查询-证据结构性错位(alignment gap)的问题。作者观察到大量持续失败并非缺乏相关证据,而是查询与证据空间之间存在对齐鸿沟。框架耦合一个轻量隐状态探针(hidden-state prober)与一个基于 prompt 的技能路由器(skill router):探针在管线的两个阶段门控(gate)检索;一旦检测到失败态,技能路由器诊断底层原因,并在四种检索技能中择一以在下次生成前修正错位——查询改写(query rewriting)、问题分解(question decomposition)、证据聚焦(evidence focusing),以及针对真正不可解情形的退出技能(exit skill)。该设计将失败视为可归类(typed)现象而非单一整体,按类型对症下药。",
    "evaluation": "在多个开放域 QA 与复杂推理基准上,Skill-RAG 显著提升多轮检索后仍持续存在的难例准确率,在分布外(OOD)数据集上增益尤为明显。表征空间分析进一步显示所提技能占据结构化、可分离的失败态空间区域,支持查询-证据错位是「分类型」而非单一整体的观点。",
    "mainFinding": "持续检索失败多源于查询-证据对齐鸿沟而非证据缺失;用隐状态探针门控+技能路由器按类型选择四种修正技能,可显著提升难例与分布外准确率。",
    "limitations": "隐状态探针的可迁移性与门控阈值依赖具体模型;四种检索技能覆盖的失败类型有限,面对未归入分类法的失败模式可能失效。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2604.15771"
      }
    ],
    "citation": "Skill-RAG:基于隐状态探测与技能路由的失败态感知检索增强. arXiv:2604.15771."
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
    "methodCore": "SkillDAG 认为在大型技能库中选子集是结构问题而非相似度匹配:技能之间存在依赖、冲突、特化(specialize)、重复(duplicate)等关系,这一结构对全量枚举与嵌入相似度都不可见。SkillDAG 将技能间关系建模为类型化有向图(typed directed graph),作为推理时、可被智能体调用的结构化检索接口暴露——图在执行中被查询与演化,而非固化进固定检索管线。每次搜索返回向量匹配、类型化边邻居(typed-edge neighbors)与冲突信号(conflict signals);「先提议后提交」(propose-then-commit)协议让智能体注册由执行支撑的边,使图跨回合累积结构。增益可追溯到候选排序在池扩大时保持稳健,以及集合单调(set-monotone)的在线编辑扩大真值召回而不驱逐既有命中。",
    "evaluation": "在 ALFWorld 与 SkillsBench 上、使用 MiniMax-M2.7,SkillDAG 达到 67.1% 成功率与 27.3% 奖励,超过最强的 Graph-of-Skills 基线 +12.8 与 +8.6 分;优势可移植到 gpt-5.2-codex;匹配查询下 SkillsBench 内在 Ret@K 从 65.5 升至 78.2,且候选排序在池扩大 10 倍时仍稳健。",
    "mainFinding": "技能选择是结构问题;将类型化技能图作为可调用、可演化检索接口,SkillDAG 在 ALFWorld/SkillsBench 超越 GoS +12.8/+8.6 分。",
    "limitations": "执行支撑的边需在交互中逐步积累,冷启动阶段图结构稀疏;提交协议注册的边质量依赖执行反馈的可靠性,噪声反馈可能引入错误结构。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.03056"
      }
    ],
    "citation": "SkillDAG:面向大规模技能选择的自演化类型化技能图. arXiv:2606.03056."
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
    "methodCore": "SkillPyramid 针对智能体长期改进受限于缺乏系统化技能构建、积累与迁移的问题:没有统一的技能巩固框架,智能体会在不同任务间冗余构建相似能力,无法把经验有效转化为可复用资产,也难以将任务专属技能泛化到新场景。SkillPyramid 是一个复用已有技能经验以实现更广泛任务泛化的技能巩固框架,运行于层级技能拓扑(hierarchical skill topology)之上,并进一步引入自演化机制(self-evolution mechanism),使智能体能在任务执行过程中组合(compose)、验证(validate)并纳入(incorporate)新技能。整体思路是向下做原子提取、向上做抽象归纳,将平铺技能库重构为可组合、可演化的层级金字塔,把技能集合从静态资源池转变为动态演化系统。",
    "evaluation": "在 ALFWorld、WebShop 与 ScienceWorld 上、跨四个骨干模型的实验表明,SkillPyramid 将平均奖励显著提升 38.0%,并将执行步数减少 27.7%。结果显示层级巩固与执行时的自演化机制协同,把静态技能池转变为可持续积累与泛化的动态系统。",
    "mainFinding": "在层级技能拓扑上做巩固并引入执行时组合-验证-纳入的自演化机制,跨三基准四骨干平均奖励提升 38.0%、步数减少 27.7%,把静态技能池转为动态演化系统。",
    "limitations": "层级拓扑的构建与维护依赖抽象归纳质量;自演化中新技能的验证标准若不严,可能引入低质或冗余技能,长期演化稳定性仍需更多验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.03692"
      }
    ],
    "citation": "SkillPyramid:面向自演化智能体的层级化技能巩固框架. arXiv:2606.03692."
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
    "methodCore": "Skill1 针对维护持久技能库所需的三项耦合能力——选择相关技能、执行中利用技能、从经验中蒸馏新技能——现有方法孤立优化或用分离奖励源,导致进化片面且相互冲突。Skill1 训练单一策略(single policy),在共享的任务结果目标(shared task-outcome objective)下协同进化(co-evolve)选择、利用与蒸馏三种能力。策略的推理流程为:生成查询以搜索技能库、对候选重排以选出一个、在其条件下求解任务、并从轨迹中蒸馏出新技能。全部学习都源自单一任务结果信号(single task-outcome signal):其低频趋势(low-frequency trend)记功于选择,高频变化(high-frequency variation)记功于蒸馏。该信号拆解设计让单一奖励同时驱动三能力的协同进化,避免多奖励源冲突。",
    "evaluation": "在 ALFWorld 与 WebShop 上的实验表明,Skill1 优于先前基于技能与基于强化学习的基线。训练动态确认了选择、利用、蒸馏三种能力的协同进化,消融实验显示移除任一记功信号(低频或高频)都会退化整体进化,验证信号拆解设计的必要性。",
    "mainFinding": "用单一任务结果信号的低频趋势与高频变化分别记功选择与蒸馏,可让单一策略协同进化技能选择、利用、蒸馏三能力,在 ALFWorld/WebShop 上超越先前基线。",
    "limitations": "仅在 ALFWorld 与 WebShop 两基准验证,规模有限;信号拆解(低频/高频记功)的鲁棒性与在更复杂长程任务上的可扩展性有待检验。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.06130"
      }
    ],
    "citation": "Skill1:通过强化学习统一进化技能增强型智能体. arXiv:2605.06130."
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
    "methodCore": "Skill-as-Pseudocode(SaP)针对 markdown 技能库以自由散文(free-form prose)形式发布、迫使智能体每次检索都重新推导输入模式与具体调用语法的问题。作者观察到这常产生「困惑→重检索→仍困惑」的死循环:智能体发出部分正确的动作、收到无信息量的环境反馈、再重检索同一散文。SaP 自动将 markdown 技能库转换为带类型伪代码(typed pseudocode)并施加确定性质量控制:对来自一个或多个技能的相似过程性段落聚类,为每簇抽取类型化合约(typed contract),并通过四重确定性校验器(coverage、binding、replacement、risk 四项检查)过滤;通过校验的合约连同复原的具体动作模板(concrete action templates)一起内联进重写后的技能骨架,从而给智能体两个互补信号:说明「技能做什么」的类型化签名,与说明「如何调用」的具体模板。",
    "evaluation": "在 134 局的 ALFWorld unseen 划分、使用 gpt-4o-mini、跨三个随机种子汇总,SaP 在配对对局中赢得 82/402,而 Graph-of-Skills(GoS)基线为 47/402(汇总 McNemar p = 8.2e-5),同时每局输入 token 减少 22.8±6.4%、LLM 调用减少 14.5±4.1%。",
    "mainFinding": "散文式技能迫使智能体反复重推调用语法形成死循环;编译为带类型伪代码合约+具体动作模板后,ALFWorld 上配对胜局 82 对 47 显著领先,并降低 token 与调用。",
    "limitations": "四重校验依赖过程性段落可聚类且可抽取类型合约,面对高度非结构化或强创造性技能可能难以转换;实验仅用 gpt-4o-mini 在 ALFWorld 验证,规模有限。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.27955"
      }
    ],
    "citation": "Skill-as-Pseudocode:将技能库重构为伪代码供 LLM 智能体使用. arXiv:2605.27955."
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
    "methodCore": "SkillsInjector 针对注入更多技能未必提升、甚至可能损害任务完成的问题,指出现有方法把技能注入当作静态步骤——用固定标准选技能、预先固定预算、且不改描述。作者主张暴露哪些技能、包含多少、如何呈现都影响下游表现,因此提出两阶段自适应方法联合处理这三项决策。第一阶段:上下文规划器(context planner)学习执行接地(execution-grounded)的技能偏好,并为每个任务准入自适应数量(adaptive number)的技能,以替代固定 Top-K。第二阶段:集合感知渲染器(set-aware renderer)相对于其共注入邻居(co-injected neighbors)定制被选描述的呈现方式,以凸显技能间的边界差异。该设计将「选哪些、选多少、怎么呈现」统一优化,直接优化注入的上下文本身。",
    "evaluation": "在 tau2-bench、SkillsBench 与 ALFWorld 上,SkillsInjector 取得最高分,相较最强基线分别提升 3.9、6.1、7.3 个百分点。消融研究表明技能选择、自适应预算与集合感知渲染各自都对增益有贡献。代码将在发表后释放。",
    "mainFinding": "技能注入不应静态处理;联合优化选择、自适应预算与集合感知渲染,SkillsInjector 在三基准上较最强基线分别提升 3.9/6.1/7.3 个百分点,三组件均有贡献。",
    "limitations": "上下文规划器需执行接地的偏好学习,依赖训练信号质量;集合感知渲染的重写可能引入描述失真,跨新技能集的泛化仍需观察。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.29794"
      }
    ],
    "citation": "SkillsInjector:面向 LLM 智能体的动态技能上下文构建. arXiv:2605.29794."
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
    "methodCore": "R3-Skill 指出技能检索不同于文档检索:Top-K 正确性不仅取决于每个查询-技能对的相关性,还取决于检索出的技能能否在该查询下协同工作,这种查询条件化的「技能兼容性」(skill compatibility)无法仅从独立相关性恢复。作者发现 LLM 合成管线本身已产出有用信号——LLM 自身的拒绝决策(rejection decisions),指明哪些技能在给定查询下不应被一起检索,但通常被当作低质数据丢弃。论文提出 Reject-as-Resource Retriever(R3),把这一被丢弃的拒绝信号保留并用作兼容性监督(compatibility supervision),并构建双语(中英)技能路由基准 R3-Skill。作者训练由 R3-Embedding 与 R3-Reranker 组成的两阶段检索器;梯度分析解释为何该查询条件化信号在双编码器目标下较弱,而交叉编码器可将其用作分级排序监督。",
    "evaluation": "R3-Skill 覆盖四个语言方向,含 10,246 条技能(归入 8 个主题超域)、41,592 条被接受查询与 32,828 条 LLM 拒绝标注(细分 8 类拒绝原因),测试集真值经多位专家验证。R3-Embedding + R3-Reranker 管线达到 Hit@1 = 0.7521、NDCG@10 = 0.8173、Set-Compat = 0.3188,数据与权重将开源。",
    "mainFinding": "技能检索需查询条件化的兼容性判断;将被丢弃的 LLM 拒绝决策转为兼容性监督,两阶段 R3 在 R3-Skill 达 Hit@1 0.7521、NDCG@10 0.8173。",
    "limitations": "拒绝信号在双编码器目标下监督较弱,主要靠交叉编码器利用;Set-Compat 仅 0.3188 显示兼容性建模仍有较大提升空间。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.03565"
      }
    ],
    "citation": "R3-Skill:面向智能体技能路由的查询条件化基准与两阶段检索器. arXiv:2606.03565."
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
    "methodCore": "XSkill 针对直接从非结构化人类视频中提取可复用机器人操作技能的难题:巨大的形态差异(embodiment gap)与未观测的动作参数使迁移困难。XSkill 是一个模仿学习框架,分三步弥合形态鸿沟:1) 纯粹从无标注的人类与机器人操作视频中发现称为技能原型(skill prototypes)的跨形态表征(cross-embodiment representation);2) 通过条件扩散策略(conditional diffusion policy)将该技能表征迁移为机器人动作;3) 组合(compose)已学技能以完成由人类提示视频(human prompt video)指定的未见任务。整体形成一个更通用、可扩展的模仿学习框架,以跨形态技能原型为枢纽,支撑技能的迁移与组合。",
    "evaluation": "在仿真与真实世界环境中的实验均表明,所发现的跨形态技能原型能够同时促进对未见任务的技能迁移与技能组合,从而带来一个更加通用、也更可扩展的模仿学习框架体系。论文摘要未给出具体的量化指标数值,基准、代码与定性结果见项目主页,具体数值需查阅原文。",
    "mainFinding": "从无标注人类与机器人视频中发现跨形态技能原型,配合条件扩散策略即可迁移为机器人动作并组合完成人类视频指定的未见任务,弥合形态鸿沟。",
    "limitations": "依赖无标注人类与机器人视频作为数据源,技能原型的质量受视频多样性影响;未见任务的组合能力在更复杂或长程操作上的可扩展性仍需验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2307.09955"
      }
    ],
    "citation": "XSkill:跨形态技能发现. arXiv:2307.09955."
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
    "methodCore": "SkillJuror 针对当前基准很少区分「技能说了什么」与「技能如何组织」的问题,通过渐进式披露(Progressive Disclosure)这一范式来研究——简洁的根文件按需指向支撑资源——并与归一化的扁平基线(normalized flat baseline)对比。SkillJuror 是一个通过语义受控变体(semantically controlled variants)、匹配多试验评估(matched multi-trial evaluations)与轨迹证据(trajectory evidence)来评估技能写作范式的框架,同时保持任务知识固定。其方法论核心是把技能组织方式作为独立可控变量,在保持内容不变的前提下度量组织对运行时搜索与应用行为的影响,从而分离「呈现方式」与「知识本身」的效应。",
    "evaluation": "在 82 任务的 SkillsBench 研究中,渐进式披露先改变运行时行为再改变聚合结果:每条轨迹触及的不同技能资源从 1.18 升至 3.85,有效采纳事件从 1.33 升至 3.92;在 410 组匹配试验中额外带来 17 次通过验证的试验(+4.1%)。收益依任务而定——当支撑资源指导实现、检查或修复时有帮助,但成功依赖精确输出规范、数值阈值或长产物生成流程时则较弱。",
    "mainFinding": "技能组织并非单纯呈现:渐进式披露先改变智能体搜索与应用行为(资源触及 1.18→3.85),再带来 +4.1% 的通过率提升,且收益是否显现取决于暴露资源对任务是否可操作。",
    "limitations": "pass/fail 聚合指标对组织变化不敏感,行为改变未必转化为结果;研究限于 82 任务的 SkillsBench,收益高度任务依赖,难以一概推广。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.11543"
      }
    ],
    "citation": "SkillJuror:度量智能体技能组织如何改变运行时行为. arXiv:2606.11543."
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
    "methodCore": "SkillPager 针对基于技能的 LLM 智能体日益依赖长过程性文档、而全文档提示浪费 token 并稀释执行关键信息的问题,将此设定形式化为技能内检索(intra-skill retrieval):目标是在给定查询下,从一个已知技能文档中选出最小、执行充分(execution-sufficient)的上下文。SkillPager 是两阶段框架:离线阶段把每个 Markdown 技能解析为类型化语义节点(typed semantic nodes,含六种语义类型);在线阶段利用最大边际相关性(Maximal Marginal Relevance, MMR)执行全局、查询条件化的节点选择(global query-conditioned node selection)。粒度消融表明,对原始定长分块施加同一检索算法虽能达到相近充分性,但 token 成本更高,说明效率增益源于类型化语义粒度而非检索算法本身。",
    "evaluation": "在 395 个技能、1,975 条查询的基准上,SkillPager 达到 78.89% 的 LLM 判定上下文充分性,而穷举全文档基线为 82.23%,同时将 prompt token 减少 47.04%。粒度消融显示对原始定长分块用同一算法可达 81.77% 的相近充分性,但 token 成本增加 28.81%。在基于图的基线中,SkillPager 以 12.16% 的优势领先最强基线。",
    "mainFinding": "技能内检索是独立的访问问题;用类型化语义节点+MMR 全局选择,SkillPager 以接近全文档的充分性(78.89% vs 82.23%)节省 47.04% token。",
    "limitations": "上下文充分性 78.89% 略低于全文档 82.23%,存在少量执行信息损失;六种语义节点解析依赖 markdown 结构规整,对格式混乱的技能适配性有限。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.00822"
      }
    ],
    "citation": "SkillPager:通过语义节点检索实现查询自适应的技能内导航. arXiv:2606.00822."
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
    "methodCore": "SkillWeaver 针对自主网页智能体缺乏关键自我提升能力——难以做过程性知识抽象、技能精炼与技能组合——提出以技能为中心(skill-centric)的框架,让智能体通过自主合成可复用技能为 API 实现自我提升。给定一个新网站,智能体自主发现技能(discover skills)、执行以练习(execute for practice),并把练习经验蒸馏(distill)为健壮的 API。迭代探索持续扩充一个轻量、即插即用(plug-and-play)的 API 库,显著增强智能体能力。该框架借鉴人类通过环境探索、把经验层级抽象为可复用技能、并协作构建不断增长的技能库来自我提升的机制,将多样的网站交互打磨成可在不同网页智能体间无缝共享的 API。",
    "evaluation": "在 WebArena 与真实世界网站上的实验证明 SkillWeaver 的有效性,分别取得 31.8% 与 39.8% 的相对成功率提升。此外,强智能体合成的 API 可通过可迁移技能显著增强弱智能体,在 WebArena 上带来最高 54.3% 的提升。",
    "mainFinding": "网页智能体可自主发现技能、练习并蒸馏为可复用 API 实现自我提升,WebArena 与真实网站相对成功率提升 31.8%/39.8%,API 迁移给弱智能体最高提升 54.3%。",
    "limitations": "技能发现与练习需在真实网站上迭代探索,成本与安全性受限;蒸馏出的 API 健壮性依赖练习经验覆盖度,面对网站改版或长尾交互的稳定性仍需验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2504.07079"
      }
    ],
    "citation": "SkillWeaver:网页智能体通过发现与打磨技能实现自我提升. arXiv:2504.07079."
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
    "methodCore": "渐进式披露(Progressive Disclosure)是 Agent Skills 生态的基础加载范式。其核心在于:一个 Skill 以文件夹形式封装,入口 SKILL.md 的 YAML frontmatter 仅暴露 name 与 description 等极少元信息,常驻于系统上下文;当模型判断任务与该 Skill 相关时,才把正文指令加载进上下文;正文中引用的脚本、参考文档、模板等资源(references、scripts、assets)则进一步延后到真正需要时才读取或执行。由此形成“元信息 → 正文 → 附属资源”的三层按需展开结构。这一设计直接回应了长上下文成本与注意力稀释问题:无关能力不占用 token,模型无需在海量指令中做检索式定位,从而可挂载大量 Skill 而不拖累单次推理。它同时把知识组织权交还给文件系统,使 Skill 可像代码仓一样被复用、版本化与共享,是当下把“通用助手”改造为“专业智能体”的主流工程约定。",
    "evaluation": "作为工程约定而非实验方法,其价值在于以极低边际成本扩展智能体能力边界:适用于需要挂载大量领域技能、控制上下文预算、且希望技能可独立维护与分发的场景。典型用途包括企业内部工具封装、文档处理流水线、专业领域助手构建等。它降低了新增能力的接入门槛,让能力扩展从改代码退化为放文件。",
    "mainFinding": "把能力封装为可按需分层加载的文件夹结构,既控制上下文成本,又让智能体能力像代码一样被复用与共享,成为技能生态的地基。",
    "limitations": "加载判定依赖模型对 description 的理解,描述写得含糊会导致该加载时不加载;分层越深,资源引用与路径管理的复杂度越高。",
    "related": [],
    "links": [],
    "citation": "渐进式披露, Agent Skills 生态实践条目。"
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
    "methodCore": "SkVM 借鉴传统编译器思想,提出“技能即代码、LLM 即异构处理器”的类比:同一 Skill 在不同 agent 平台上常被当作原始上下文直接注入,导致跨模型行为不一致,损害可移植性与执行效率。作者分析了 118,000 个 Skill,把一个 Skill 的需求分解为一组原语能力(primitive capabilities),并度量每个“模型-框架”组合对这些原语的支持程度,形成能力画像(capability profiles)。基于此,SkVM 在编译期执行三项操作:基于能力的编译(capability-based compilation)、环境绑定(environment binding)与并发抽取(concurrency extraction);在运行期则采用 JIT 代码固化(code solidification)与自适应重编译(adaptive recompilation)做性能优化。整体形成一条从离线编译到在线运行的技能执行链路,使同一份技能能针对不同模型与框架被“编译”到合适形态,兼顾可移植与效率。",
    "evaluation": "在 8 个不同规模 LLM、3 个 agent 框架上评测,覆盖 SkillsBench 与代表性技能任务。结果显示 SkVM 显著提升了跨模型跨环境的任务完成率,同时 token 消耗最多降低 40%;性能上通过增强并行获得最高 3.2 倍加速,并借助代码固化实现 19-50 倍的延迟下降。",
    "mainFinding": "把编译器方法论迁移到技能执行:通过能力画像做编译期适配、运行期固化,一份技能可在异构模型与框架间既可移植又高效运行。",
    "limitations": "能力画像需为每个“模型-框架”组合预先度量,新组合的接入成本与画像时效性存疑;编译与固化带来的额外工程复杂度在小规模任务上未必划算。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2604.03088"
      }
    ],
    "citation": "SkVM. arXiv:2604.03088."
  },
  {
    "id": "skill-source-execution-trace",
    "page": "skill",
    "title": "执行流图",
    "shortTitle": "执行流图",
    "category": "skill-execution",
    "maturity": "growing",
    "score": 0.583,
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
      "clarity": 0.7,
      "evidence": 0.6,
      "reproducibility": 0.53,
      "adoption": 0.55,
      "selfEvolution": 0.68
    },
    "summary": "对 Skill 执行路径做可视化追踪,把智能体调用技能、读文件、跑脚本的过程还原为可审阅的流程图。",
    "methodCore": "执行流图(Execution Trace)是 Agent Skills 生态中面向可观测性的工程概念。其核心是把智能体一次任务中“何时匹配到哪个 Skill、加载了哪些正文与资源、调用了哪些脚本或工具、产生了哪些中间文件与状态转移”完整记录下来,并还原成一张可视化的执行路径图。相比只看最终输出,执行流图暴露了中间决策链:哪一步触发了错误分支、哪个 Skill 被误召回、哪次工具调用消耗了大量 token。它通常以结构化事件流为底座,按时间与调用层级组织成节点与边,支持逐步回放。这一能力对调试多 Skill 协作、定位技能间冲突、复盘失败任务尤为关键,也是让“技能执行”从黑盒变为可审计过程的前提。它与渐进式披露、Skill Pipeline 等概念互补:前者提供加载与调度机制,执行流图则提供事后追溯的证据链。",
    "evaluation": "工程价值在于把不透明的智能体执行过程转为可审阅、可回放的证据链,适用于调试复杂技能编排、排查误召回与冲突、复盘失败任务、以及向使用者解释智能体为何这样做。在多 Skill、长链路、高风险(如涉及文件写入或外部调用)的场景下,执行流图是保障可控性与可信度的基础设施。",
    "mainFinding": "通过记录并可视化技能执行的完整调用链,把智能体行为从黑盒转为可审计、可回放的过程,是调试与复盘复杂技能编排的关键支撑。",
    "limitations": "全量追踪会带来存储与性能开销;若记录粒度不当,要么信息过载淹没关键节点,要么过粗而漏掉真正的故障点。",
    "related": [],
    "links": [],
    "citation": "执行流图, Agent Skills 生态实践条目。"
  },
  {
    "id": "skill-source-sandbox",
    "page": "skill",
    "title": "Permission Sandboxing",
    "shortTitle": "Permission San...",
    "category": "skill-execution",
    "maturity": "growing",
    "score": 0.532,
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
      "clarity": 0.6,
      "evidence": 0.55,
      "reproducibility": 0.43,
      "adoption": 0.5,
      "selfEvolution": 0.73
    },
    "summary": "为 Skill 执行提供权限沙箱隔离,按最小权限约束技能可访问的文件、网络与系统调用。",
    "methodCore": "Permission Sandboxing(权限沙箱)是 Agent Skills 生态中面向安全的执行机制。由于 Skill 常携带可执行脚本并被智能体自动调用,一旦技能来源不可信或被污染,就可能读写敏感文件、发起外部网络请求或执行破坏性命令。权限沙箱的核心是把每个 Skill 的执行置于受限环境中,依据最小权限原则显式声明并约束其可触达的资源边界:可访问的目录与文件、允许的网络出口、可调用的系统能力等,越界操作被拦截或需显式授权。它通常与渐进式披露、执行流图配合——加载技能前先审阅其声明的权限,执行时在隔离环境内运行,过程再由追踪机制留痕。这样即便技能行为异常,损害也被限制在沙箱内,不会外溢到宿主系统。对于共享、公开分发且“隐式受信”的技能,这一隔离层是让智能体敢于自动执行第三方技能的安全前提。",
    "evaluation": "工程价值在于把“自动执行第三方技能”的风险控制在可接受范围,适用于运行来源不完全可信的社区 Skill、涉及文件写入或外部网络的敏感操作、以及多租户或企业合规场景。它是技能生态从“个人自用”走向“开放共享”的必要安全基础设施,配合权限声明可实现执行前审计与执行中拦截。",
    "mainFinding": "以最小权限沙箱约束技能可触达的文件、网络与系统资源,把不可信技能的潜在损害限制在隔离环境内,是安全自动执行第三方技能的前提。",
    "limitations": "沙箱粒度与可用性之间存在张力:限制过严会破坏正常技能功能,过松则失去防护意义;跨平台的一致隔离实现与配置维护成本较高。",
    "related": [],
    "links": [],
    "citation": "Permission Sandboxing, Agent Skills 生态实践条目。"
  },
  {
    "id": "skill-source-skill-pipeline",
    "page": "skill",
    "title": "Skill Pipeline",
    "shortTitle": "Skill Pipeline",
    "category": "skill-execution",
    "maturity": "growing",
    "score": 0.443,
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
      "clarity": 0.5,
      "evidence": 0.45,
      "reproducibility": 0.38,
      "adoption": 0.4,
      "selfEvolution": 0.63
    },
    "summary": "面向多 Skill 协同的编排与并行调度,把若干技能串/并联成一条可复用的执行流水线。",
    "methodCore": "Skill Pipeline(技能流水线)是 Agent Skills 生态中面向编排的执行概念。当一个复杂任务需要多个 Skill 协同——例如先抽取、再分析、再生成报告——朴素做法是让模型在推理循环里逐个临时召回技能,既低效又难以复用。Skill Pipeline 的核心是把技能之间的依赖与数据流显式组织成流水线:定义各技能的输入输出契约,识别彼此独立的分支从而并行调度,存在依赖的环节则按序串联,中间结果在环节间传递。这样多技能协作从一次次即兴决策变为可预先编排、可复用的流程模板。它与执行流图天然互补:流水线定义“应当如何跑”,执行流图记录“实际如何跑”;与渐进式披露互补:后者管单个技能的加载,前者管多个技能的组合与并发。并行化则直接缩短端到端时延,是把技能从孤立能力升级为可组合系统的关键一环。",
    "evaluation": "工程价值在于把多技能协作固化为可复用、可并行的流程,适用于稳定重复的复合任务(数据处理链、文档生产链、多阶段分析等)。相比每次让模型即兴编排,流水线提升了执行确定性与可维护性,并通过识别独立分支的并行调度压缩端到端时延,是技能规模化落地的组织形态。",
    "mainFinding": "把多个技能按数据流与依赖显式编排成可复用流水线,并对独立分支并行调度,使多技能协作从即兴决策升级为确定、可维护、可加速的可组合系统。",
    "limitations": "流水线一旦固化,面对需要动态改变步骤的开放式任务会显得僵硬;编排契约的定义与维护本身需要人工投入,且并行调度对环节幂等性有要求。",
    "related": [],
    "links": [],
    "citation": "Skill Pipeline, Agent Skills 生态实践条目。"
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
    "methodCore": "File-as-State(文件即状态)是一种轻量级智能体自动化理念:不引入重型的状态机或编排框架,而是把任务的中间状态、待办、产出直接落到文件系统里,让文件本身成为智能体的记忆与协作媒介。智能体每一步读取相关文件了解当前进度,执行后把新状态写回文件,下一步再基于文件继续——状态在磁盘上持久化,而非驻留于易失的上下文窗口。这一做法带来几点直接收益:其一,状态天然可续跑,任务中断后可从文件恢复;其二,人可随时打开文件审阅与修改,人机协作透明;其三,与渐进式披露的文件夹哲学一致,复用现有文件工具即可,无需专用运行时。它与 Skill Pipeline、执行流图形成呼应:流水线描述流程,文件承载流经的状态,执行流图追溯状态如何演变。本质上,它主张用“最小机制”——文件——承担原本需要框架承担的状态管理职责。",
    "evaluation": "工程价值在于以极低复杂度获得可持久化、可续跑、人可审阅的智能体状态管理,适用于长时任务、需要人机交替介入、或希望避免框架锁定的轻量自动化场景。相比重型编排框架,它降低了搭建与调试门槛,让状态一目了然;代价是牺牲了框架提供的结构化保障,更依赖约定。",
    "mainFinding": "把智能体状态外置到文件系统,用读写文件替代重型编排框架,以最小机制换来可持久化、可续跑、人可审阅的透明自动化。",
    "limitations": "缺乏框架级的状态一致性与并发保护,复杂或高并发任务下易出现文件竞争与状态错乱;强依赖命名与目录约定,规模变大后管理成本上升。",
    "related": [],
    "links": [],
    "citation": "File-as-State, Agent Skills 生态实践条目。"
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
    "methodCore": "SkillSmith 针对现有框架中技能被作为上下文指导整体注入推理循环所带来的两类冗余——无关上下文注入(irrelevant context injection)与重复的技能特定推理与规划(repeated skill-specific reasoning and planning)——提出一套边界优先(boundary-first)的编译-运行时框架。其核心是把技能包离线编译成最小可执行接口(minimal executable interfaces):从技能中抽取细粒度的操作边界(fine-grained operational boundaries),使智能体在运行时能够动态地只访问并执行真正相关的组件,从而最小化不必要的上下文注入与冗余推理开销。此外,该框架具备跨模型复用特性:由更强模型产出的编译产物(compiled artifacts)可被更小或更高效的运行时模型复用,在原始技能解释失败的情形下提升任务准确率。整体思路与传统“编译一次、按需执行”一致,把技能从被整段喂给模型的原始文本,转化为带明确边界、可精确取用的运行时接口。代码与数据已在 GitHub 的 AetherHeart-AI/Aeloon 开源。",
    "evaluation": "在 SkillsBench 基准上,相比使用原始技能(raw-skills),SkillSmith 将求解阶段 token 使用降低 57.44%、思考迭代次数降低 42.99%、求解时间降低 50.57%(即 2.02 倍加速),按 token 比例计的货币成本同样降低 57.44%;同时验证了强模型编译产物可被弱模型复用以提升准确率。",
    "mainFinding": "通过抽取技能的细粒度操作边界并离线编译为最小可执行接口,SkillSmith 大幅削减无关上下文与重复推理,显著降低 token、时间与成本,且编译产物可跨模型复用。",
    "limitations": "离线抽取操作边界的质量决定运行时收益,边界划分不当可能漏掉必要上下文;评测集中于 SkillsBench,在更开放或强依赖临场推理的技能上的适用性仍需验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.15215"
      }
    ],
    "citation": "SkillSmith. arXiv:2605.15215."
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
    "methodCore": "Notes2Skills 面向科学发现工作流:实验室笔记记录了观察、对不确定结果的解读以及后续实验计划,保留了演进中的科学推理与作者的不确定性(uncertainty),比论文中打磨过的最终结论更能支撑 AI 深入参与科学探索。然而以往对科学文本的研究多聚焦论文、协议或结构化数据库,把非正式的实验室笔记这一输入留待挖掘。关键难点在于:笔记常在同一段落里混杂已验证的观察、试探性判断与可能的下一步实验;若这些信号被混为一谈,AI 智能体可能把不确定的科学判断误当作已确认的结论或可执行动作。为此,Notes2Skills 提出一个两阶段框架(two-stage framework),把实验室笔记本转化为可验证的技能(verifiable skills),同时保留作者的确定性标注。其核心主张是:确定性保持(certainty preservation)正是连接实验室笔记与可靠智能体技能之间此前缺失的一环,由此指向更安全的 AI 协作科学家(co-scientist)系统。",
    "evaluation": "在七种配置(seven conditions)与三次湿实验(wet-lab)会话上评测,Notes2Skills 是唯一一种既不把不确定的笔记误当作确定指令、又不丢弃确定指令的配置。abstract 未给出更多定量指标,具体数值需查原文。",
    "mainFinding": "把实验室笔记转为技能时保留作者的确定性标注,是连接非正式笔记与可靠科学智能体技能的缺失一环,能同时避免”不确定性漂白“与”确定指令丢失“两类错误。",
    "limitations": "评测仅覆盖七种配置与三次湿实验会话,规模有限,跨学科与更大规模笔记上的泛化性未知;确定性标注的准确性仍依赖两阶段框架自身的判别质量。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.11897"
      }
    ],
    "citation": "Notes2Skills. arXiv:2606.11897."
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
    "methodCore": "SkillsBench 针对「技能是否真的有用」这一缺乏标准衡量方式的问题，构建了一个配对评测基准：当前清单包含横跨 8 个领域的 87 个任务，每个任务都配备了精选技能（curated Skills）与确定性验证器（deterministic verifiers）。其核心方法论是「配对评测」（paired evaluation）——在完全匹配的「无技能」与「精选技能」两种条件下对同一批任务运行，从而将技能带来的边际增益从模型底座本身的能力中剥离出来。最新的聚合评测覆盖了 18 种模型-脚手架（model-harness）配置，在这套 87 任务基准上以匹配条件运行。摘要还给出了关于技能设计的结论性观察：模块数不超过三个的聚焦型技能（focused Skills）表现优于更大或穷举式的技能捆绑包（exhaustive bundles），且配备技能的小模型可以匹敌不配技能的大模型。该工作将配对评测确立为严格衡量技能在高专业度智能体工作中功效的基础范式。",
    "evaluation": "abstract 给出明确数据：精选技能将平均通过率从 33.9% 提升至 50.5%，即 +16.6 个百分点、25.5% 的归一化增益；在 18 种模型-脚手架配置上，配置级增益区间为 +4.1 到 +25.7 个百分点。基准规模为 87 任务 / 8 领域，均配有精选技能与确定性验证器。",
    "mainFinding": "精选技能确实带来一致增益（平均 +16.6pp）；聚焦型（≤3 模块）技能优于穷举捆绑，小模型加技能可媲美大模型，配对评测是衡量功效的可靠基础。",
    "limitations": "当前清单仅 87 任务 / 8 领域，覆盖面有限；增益依赖「精选」技能与确定性验证器，能否推广到社区自发贡献的低质量技能仍待验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2602.12670"
      }
    ],
    "citation": "SkillsBench. arXiv:2602.12670."
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
    "methodCore": "SkillProbe 针对集中式技能市场面临的两类安全挑战——语义-行为不一致（semantic-behavioral inconsistency）以及技能间组合风险（inter-skill combinatorial risks，即单独看均无害的技能在协作调用时诱发恶意行为）——提出一个由多智能体协作驱动的多阶段安全审计框架。其核心创新是「Skills-for-Skills（以技能审技能）」设计范式：将审计流程本身封装为标准化的技能模块，驱动专门化的智能体走完一条严格流水线，包括准入过滤（admission filtering）、语义-行为对齐检测（semantic-behavioral alignment detection）与组合风险模拟（combinatorial risk simulation）。作者以来自 ClawHub 的 2500 个真实技能、跨 8 个主流 LLM 系列开展大规模评测。研究揭示了一个「流行度-安全悖论」：下载量并非安全质量的可靠代理。此外发现高风险技能在风险链维度上构成单一的巨型连通分量（giant connected component），说明级联风险是系统性的而非孤立事件。作者希望 SkillProbe 能为构建可信的 Agentic Web 提供可扩展的治理基础设施，系统已在 skillhub.holosai.io 公开体验。",
    "evaluation": "abstract 明确：评测使用来自 ClawHub 的 2500 个真实世界技能，横跨 8 个主流 LLM 系列。结果显示超过 90% 的高流行度技能未能通过严格审计；高风险技能在风险链维度构成单一巨型连通分量。系统在 skillhub.holosai.io 公开。",
    "mainFinding": "下载量不能代理安全质量——逾 90% 高流行技能审计不通过；高风险技能形成单一巨型连通分量，表明级联风险是系统性的，需要「以技能审技能」的治理设施。",
    "limitations": "评测数据源单一（ClawHub），结论对其它市场的普适性待检；「以技能审技能」审计本身依赖 LLM 判断，其自身可靠性与假阳/假阴率 abstract 未给出。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2603.21019"
      }
    ],
    "citation": "SkillProbe. arXiv:2603.21019."
  },
  {
    "id": "skill-source-cross-eval",
    "page": "skill",
    "title": "Cross-Evaluation",
    "shortTitle": "Cross-Evaluation",
    "category": "skill-evaluation",
    "maturity": "growing",
    "score": 0.532,
    "year": 2026,
    "venue": "Agent Skills 生态实践",
    "authors": "Agent Skills 社区/工程实践",
    "methodFamily": "skill evaluation",
    "tags": [
      "evaluation",
      "skill evaluation",
      "active"
    ],
    "scores": {
      "clarity": 0.65,
      "evidence": 0.55,
      "reproducibility": 0.48,
      "adoption": 0.5,
      "selfEvolution": 0.63
    },
    "summary": "在多技能、多模型、多任务维度上做横向对比的工程实践，将技能功效评测从单点验证扩展为矩阵化对照。",
    "methodCore": "Cross-Evaluation 是 Agent Skills 生态中的一种工程实践思路：不满足于单个技能在单个模型、单个任务上的孤立结果，而是把评测组织成「多技能 × 多模型 × 多任务」的横向对比矩阵。其工程价值在于三点：一是通过对照同一任务在不同模型底座上的表现，帮助区分「技能贡献」与「模型自身能力」，避免把底座强度误记为技能功效；二是通过让多个候选技能在同一任务集合上竞赛，为技能选型与市场排名提供横向可比的证据；三是通过跨任务铺开，暴露某个技能的适用边界——它在哪些领域生效、在哪些领域反而拖累表现。这种矩阵化对照通常以配对/对照条件（有技能 vs 无技能）为基础单元，配合确定性或可复现的验证方式，把零散的评测结果沉淀为可持续更新的横向榜单。它面向的是技能市场治理者、Agent 平台方与技能作者，帮助他们在众多技能与模型组合中快速定位「值得部署」的组合。",
    "evaluation": "作为工程实践，其价值在于把技能评测从单点验证升级为可复用的横向对照矩阵，适用于技能市场选型、平台方能力对比、技能作者定位适用边界等场景。它降低了「底座强 vs 技能强」的混淆风险，为持续更新的横向榜单提供方法框架。具体规模与指标依赖各自实现。",
    "mainFinding": "多技能、多模型、多任务的矩阵化横向对比，能把孤立的技能评测结果转化为可比、可持续的选型证据，并帮助剥离模型底座对功效判断的干扰。",
    "limitations": "作为工程实践缺乏统一基准与公开数据支撑，横向可比性依赖各方口径一致；矩阵规模增长带来的评测成本与结果可复现性是主要工程约束。",
    "related": [],
    "links": [],
    "citation": "Cross-Evaluation, Agent Skills 生态实践条目。"
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
    "methodCore": "SkillFlow 针对「加载过多、尤其是无关技能会拖累性能」的问题，把技能获取（skill acquisition）重新表述为一个信息检索问题——检索对象是从 GitHub 索引的约 36K 个社区贡献 SKILL.md 定义构成的语料库。它是首个专为 Agent 技能发现设计的多阶段检索流水线，通过四个阶段逐步收窄候选集：稠密检索（dense retrieval）、两轮交叉编码器重排（cross-encoder reranking），以及基于 LLM 的选择（LLM-based selection），在每一阶段平衡召回与精度。作者在两个编码基准上评测：SkillsBench（87 任务、229 个匹配技能）与 Terminal-Bench（89 任务、无匹配技能）。实验揭示了一个关键对比：检索本身只在语料具备高质量、可执行技能时才有效——当语料缺乏目标领域的可运行技能时，即便 Agent 乐于使用检索到的技能，也不会带来性能提升。作者强调技能增强 Agent 的实际影响取决于语料覆盖度与技能质量，尤其是可运行代码与打包产物（bundled artifacts）的密度。",
    "evaluation": "abstract 明确：语料约 36K 个 SKILL.md。在 SkillsBench（87 任务、229 匹配技能）上，SkillFlow 检索的技能将 Pass@1 从 9.2% 提升至 16.4%（+78.3%，p_adj=3.64×10⁻²），达到 oracle 上限的 84.1%；在 Terminal-Bench（89 任务、无匹配技能）上，技能使用率达 70.1% 却无性能增益。",
    "mainFinding": "把技能获取建模为信息检索是有效策略；但检索单独不足以奏效——技能增强的实际收益取决于语料覆盖度与技能质量，尤其是可运行代码与产物的密度。",
    "limitations": "增益强依赖语料是否含目标领域的可执行高质量技能（Terminal-Bench 上零增益即为例证）；仅在两个编码基准验证，泛化到非编码领域待考。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2504.06188"
      }
    ],
    "citation": "SKILLFLOW. arXiv:2504.06188."
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
    "methodCore": "SkillLens 针对现有系统把技能当作扁平、单一分辨率提示块所导致的「相关性与成本」张力——注入粗粒度技能会引入无关或误导性上下文，而重写整个技能则昂贵且往往不必要。它是一个分层技能演化框架，将技能组织成策略（policies）、战略（strategies）、流程（procedures）与原语（primitives）四层图，并以混合粒度进行检索。给定任务时，SkillLens 先检索语义相关的技能种子（skill seeds），通过在技能图上的度校正随机游走（degree-corrected random walk）扩展，再用验证器（verifier）判定每个被访问的单元应被接受、分解、重写还是跳过，从而让 Agent 直接复用兼容的子技能、仅对局部不匹配的组件做适配。为随时间自我改进，SkillLens 进一步精炼多粒度技能与验证器以优化其路由决策。作者提供了理论分析：在稀疏不匹配假设下混合粒度适配的成本为亚线性（sublinear），且演化更新规则单调改进验证目标直至局部最优。评测在 MuLocbench 与 ALFWorld 上进行。",
    "evaluation": "abstract 明确：在 MuLocbench 与 ALFWorld 上，SkillLens 一致优于强技能基线，缺陷定位（bug localization）取得最高 6.31 个百分点的 Acc@1 增益，并将 Agent 成功率从 45.00% 提升至 51.31%。理论上在稀疏不匹配假设下混合粒度适配成本为亚线性，演化更新单调改进验证目标至局部最优。",
    "mainFinding": "把技能组织为四层图并做混合粒度检索与局部适配，能在缺陷定位与具身任务上一致超越扁平技能基线，同时以亚线性成本实现单调改进的技能演化。",
    "limitations": "增益幅度有限（成功率 45%→51.31%）；亚线性成本结论依赖「稀疏不匹配」假设，密集不匹配场景不适用；仅两个基准验证，跨域泛化待考。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.08386"
      }
    ],
    "citation": "SkillLens. arXiv:2605.08386."
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
    "methodCore": "SkillSafetyBench 针对可复用技能作为 Agent 扩展接口所引入、却被现有安全评测大量忽略的攻击面：即便用户请求是良性的，不安全的影响仍可能藏在技能引导（skill guidance）、本地产物（local artifacts）或执行环境文件中，从而将 Agent 引向不安全的行为。它是一个可运行的（runnable）基准，专门评测这类「技能介导的安全失败」（skill-mediated safety failures）。基准包含 155 个对抗案例，横跨 47 个任务、6 个风险域（risk domains）与 30 个安全类别（safety categories），每个案例均由针对该案例的基于规则的验证器（rule-based verifier）评估。作者用多个 CLI Agent 与模型底座开展实验，结果表明非用户来源的攻击（non-user attacks）能够持续诱发不安全行为，且在不同领域、攻击方法与脚手架-模型配对（scaffold-model pairings）间呈现出各异的失败模式。研究据此指出：Agent 安全不仅取决于模型层面的对齐，还取决于 Agent 如何解读技能、信任工作流上下文，以及如何通过可执行环境采取行动。",
    "evaluation": "abstract 明确：基准含 155 个对抗案例，横跨 47 个任务、6 个风险域、30 个安全类别，每案例配有针对性的规则验证器。多个 CLI Agent 与模型底座实验显示非用户攻击能持续诱发不安全行为，失败模式在不同领域、攻击方法与脚手架-模型配对间各异。具体检测/失败率数值需查原文。",
    "mainFinding": "即便用户请求良性，藏于技能引导、本地产物或环境文件中的非用户攻击也能持续诱发不安全行为；Agent 安全不止取决于模型对齐，更取决于其如何解读技能与信任上下文。",
    "limitations": "规模仍偏小（155 案例 / 47 任务）；采用案例专属规则验证器，扩展到新攻击类别需额外人工构造；abstract 未给出各 Agent 的量化失败率。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.12015"
      }
    ],
    "citation": "SkillSafetyBench. arXiv:2605.12015."
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
    "methodCore": "SkillGenBench 指出现有基准主要评测「给定技能的功效」或「Agent 从原始上下文解决下游任务的能力」，却没有把技能生成（skill generation）本身单独隔离为研究对象。它在统一且受控的协议下评测技能生成流水线：生成器接收原始语料并产出标准化的技能产物（standardized skill artifacts），随后在固定脚手架（fixed harnesses）下执行，并用统一的评测程序评估。基准覆盖两种生成模式（regimes）：任务条件生成（task-conditioned generation，任务揭示后再合成特定任务技能）与任务无关生成（task-agnostic generation，需在下游任务已知前先蒸馏出可复用技能库）。它还跨越两类互补的程序来源：以仓库为依据（repository-grounded，程序分散在代码、配置与脚本中）与以文档为依据（document-grounded，程序与约束需从长文本中蒸馏）。作者提供了标准化的任务规范、锁定环境（pinned environments），以及以确定性执行检查（deterministic execution-based checks）为中心、辅以诊断信号的评测协议。实验横跨多种技能生成方法与底座，显示出显著的性能差异，并揭示了从软件仓库与从长文档生成技能时各异的失败模式。",
    "evaluation": "abstract 说明基准覆盖两种生成模式（任务条件/任务无关）与两类程序来源（仓库依据/文档依据），采用确定性执行检查为中心的统一评测协议，并提供锁定环境。实验横跨多种技能生成方法与底座，显示显著性能差异及仓库 vs 长文档生成的不同失败模式。具体任务数、方法数与底座数等数值需查原文。",
    "mainFinding": "把技能生成从端到端评测中隔离为独立问题后，各方法性能差异显著，可复用技能蒸馏难度高，且从软件仓库与从长文档生成技能呈现出各异的失败模式。",
    "limitations": "abstract 未公开具体基准规模与量化结果；确定性执行检查对难以判定正误的开放式技能覆盖有限；两类来源之外的知识形态尚未纳入。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.18693"
      }
    ],
    "citation": "SkillGenBench. arXiv:2605.18693."
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
    "methodCore": "SkillEvolBench 针对「LLM Agent 在解题中积累了丰富的情节式轨迹（episodic trajectories），但这些经验能否被蒸馏为可复用的程序技能」这一未明问题，提出一个诊断性基准，评测从「经验复用」到「技能形成」这一步。它包含 180 个任务，横跨六个真实世界 Agent 环境，组织为共享潜在程序（shared latent procedures）的角色条件任务族（role-conditioned task families）。Agent 先从获取任务（acquisition tasks）中学习，使用压缩后的轨迹与验证器反馈更新一个外部技能库，随后面对冻结的部署任务（frozen deployment tasks），后者测试上下文迁移、对抗性捷径与组合能力。通过将自生成与精选起点（curated-start）的技能演化，与「无技能」和「原始轨迹」两种对照相比较，SkillEvolBench 得以把程序抽象（procedural abstraction）从基础能力、精选先验知识、以及对情节轨迹的直接复用中分离出来。评测横跨十个模型配置与三个 Agent 脚手架。此外作者还做了容量与成本分析，考察写入更多技能或更大 Tier-3 资源库的效果。",
    "evaluation": "abstract 明确：基准含 180 任务 / 六个真实环境，评测横跨十个模型配置与三个 Agent 脚手架。发现当前 Agent 常能局部适应但很少形成鲁棒可复用技能；技能条件可改善获取或回放，个别模型在特定部署轴上获益，但在冻结部署下增益不稳定；原始轨迹复用常优于蒸馏技能。容量分析显示多写技能或更大 Tier-3 库并不足够。",
    "mainFinding": "当前 Agent 大多只能局部适应、很少形成鲁棒可复用技能；原始轨迹复用常胜过蒸馏技能，说明现有抽象过程丢弃了仍有用的上下文与程序线索，写更多技能亦非解药。",
    "limitations": "结论为诊断性观察，未提供能形成鲁棒技能的解决方案；冻结部署下增益不稳定表明评测对随机性敏感；更大资源库反而引入情节漂移与程序冗余。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.24117"
      }
    ],
    "citation": "SkillEvolBench. arXiv:2605.24117."
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
    "methodCore": "Skill-RM 针对当前奖励评估依赖异构标准——基于规则的验证器、真值参考、程序化清单（procedural checklists）与复杂 rubric——却缺乏统一机制整合所有类型证据的问题，提出一个统一框架，将奖励建模重新表述为执行一项可复用的「奖励-评估技能」（Reward-Evaluation Skill）。通过把奖励计算当作一个结构化的智能体任务（structured agentic task），Skill-RM 提供了一致的接口来编排（orchestrate）异构资源，针对每个输入的具体需求动态选择与聚合证据。这一做法使奖励模型超越静态评估，在多样任务间确保一致性与透明性。作者在奖励基准与下游应用上开展了大量实验，下游应用包括 best-of-N 选择与强化学习。结果显示 Skill-RM 一致优于传统的 judge 基线，作者据此认为其价值不仅在于为奖励建模提供统一方案，还在于通过对证据的策略性、动态化编排获得更优性能。代码开源于 GitHub（Qwen-Applications/Skill-RM）。",
    "evaluation": "abstract 表明：在多个奖励基准及下游应用（best-of-N 选择、强化学习）上，Skill-RM 一致优于传统 judge 基线，展现出通过动态编排证据取得的更优性能。具体基准名称、模型规模与提升幅度等数值需查原文。代码已开源。",
    "mainFinding": "把奖励建模重构为执行一项可复用的评估技能，能以统一一致的接口编排规则、参考、清单、rubric 等异构证据，动态选择聚合后一致超越传统 judge 基线。",
    "limitations": "abstract 未提供具体基准与量化提升；作为智能体化评估其推理开销与稳定性未量化说明；异构证据的动态编排质量仍受底座 judge 能力制约。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.03980"
      }
    ],
    "citation": "Skill-RM. arXiv:2606.03980."
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
    "methodCore": "Eval-Skill 针对开放式奖励建模需要能遵循细微、领域特定偏好的 judge，而现有 rubric 方法为每个查询在线生成标准、带来额外推理开销并可能产生僵硬或错位引导的问题，提出一种探索引导（exploration-guided）方法：合成可复用的评估技能（evaluation skills）用于奖励建模，并把奖励引导重构为上下文演化（context evolution），而非参数训练或逐查询 rubric 生成。它每个领域仅用 100 个案例进行技能演化，通过两个渐进阶段合成可复用的领域级评估技能——先工作流生成（workflow generation），后原则生成（principle generation），并在两个阶段间交错进行探索与选择（exploration and selection interleaved）。一旦生成，技能被直接注入 judge 上下文。作者在多个奖励模型基准上评测，显示 Eval-Skill 一致改进多样的 judge 底座。作者进一步分析了演化时扩展（evolution-time scaling）、泛化性与可迁移性，论证紧凑的评估技能是一种高效的 LLM 评估新范式。代码开源于 GitHub。",
    "evaluation": "abstract 明确：每领域仅用 100 个案例演化技能。在多个 RM 基准上一致改进 judge 底座；在 RewardBench 2 上，相对原始 judging 对每个主要底座取得显著增益——Qwen3-8B +13.44%、DeepSeek-V4-Flash +18.51%。另有演化时扩展、泛化性与可迁移性分析支撑其高效性。",
    "mainFinding": "仅用每领域 100 案例离线演化出可复用评估技能并注入 judge 上下文，即可在 RewardBench 2 上对多个底座取得显著增益（最高 +18.51%），无需逐查询在线生成 rubric。",
    "limitations": "技能按领域级合成，跨域或长尾领域的覆盖与迁移仍受演化案例限制；增益在不同底座间幅度不一，评估技能质量仍依赖探索与选择阶段的有效性。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.07040"
      }
    ],
    "citation": "Eval-Skill. arXiv:2606.07040."
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
    "methodCore": "SkillVetBench 针对现有扫描器只在代码层运作、对指令层与多智能体风险结构性失明的缺口——自然语言指令可劫持 Agent、经编码侧信道窃取数据或在流水线间链式扩散危害——主张需要语义化、多维度的审查系统，而非又一个特征签名匹配器。它是一个部署在 Hugging Face 上的实时公开榜单（live public leaderboard），用 LLM-as-Judge 审查 Agent 技能。其新提出的核心是 SARS（Skill Agentic Risk Score，技能智能体风险评分）——一个面向指令遵循系统、带有原则化加权公式的五维智能体风险度量。系统整合了完整的 CVSS v4.0 向量分解，以及 ClawHub 双视图（dual-view），把 LLM 生成的评审结果与官方市场判定并置。作者借助配套基准论文，展示 LLM-as-Judge 阶段在 78 个已确认恶意技能上实现零假阴性、在 22 个良性对照上实现零假阳性；同时最佳静态基线 SKILLSIEVE 仍漏检 15%。对提示注入、记忆投毒等指令层类别，传统工具漏检 89%–100%（例如 CODEBERT 检测不出九个记忆投毒技能中的任何一个）。四个 LLM 评估器间检测率介于 35%–95%，促使生产部署采用集成评分（ensemble scoring）。",
    "evaluation": "abstract 明确：LLM-as-Judge 阶段在 78 个已确认恶意技能上零假阴性、22 个良性对照上零假阳性；最佳静态基线 SKILLSIEVE 仍漏检 15%；提示注入与记忆投毒等指令层类别传统工具漏检 89%–100%（CODEBERT 对九个记忆投毒技能全部漏检）；四个 LLM 评估器检测率介于 35%–95%。",
    "mainFinding": "代码层扫描器对指令层与多智能体风险结构性失明；语义化 LLM-as-Judge 配合五维 SARS 评分可实现零假阴/假阳性，远超静态基线，但单一评估器波动大需集成评分。",
    "limitations": "零假阴/假阳性建立在 78+22 的小规模确认集上，扩展到大规模真实技能的表现待验；LLM-as-Judge 自身检测率在评估器间波动达 35%–95%，依赖集成以保稳定。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.15899"
      }
    ],
    "citation": "SkillVetBench. arXiv:2606.15899."
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
    "methodCore": "SkillAudit 针对技能生态缺乏可靠方式判断「一个技能是否值得部署」的问题，指出现有评估仍主要锚定于固定任务套件（fixed task suites），这会把技能的边际贡献与底座强度混为一谈，并在任务落在技能预期范围之外时错判其价值。它是一个以技能为中心（skill-centered）的端到端框架，接收任意 Agent 技能作为输入，自动生成一份涵盖效用（utility）、效率/成本（efficiency/cost）与安全（safety）的多维评估报告。SkillAudit 聚焦技能产物本身，直接从技能包构建能力对齐（capability-aligned）的评估任务，任务在隔离沙盒环境中执行以收集执行证据，随后经自动检查与基于 LLM 的判定产出可审计结果。为解剖技能，作者提出「基线对比原则」（baseline comparison principle）来度量效用与效率/成本——即剥离 backbone 影响；并引入结合静态语义分析（static semantic analysis）与动态运行时验证（dynamic runtime verification）的两阶段检测范式来评估安全风险。作者扫描了跨 23 个职业类别的头部真实技能包。",
    "evaluation": "abstract 明确：作者扫描了跨 23 个职业类别（occupational categories）的头部排名真实技能包，发现超过 7% 的技能处于风险状态（at risky status）。框架采用基线对比原则度量效用与效率/成本，并用静态语义分析加动态运行时验证的两阶段检测评估安全。其它量化指标需查原文。",
    "mainFinding": "固定任务套件会混淆技能边际贡献与底座强度；以技能为中心、从技能包自动构建对齐任务并用基线对比剥离 backbone，可产出效用/成本/安全多维审计报告，逾 7% 头部技能有风险。",
    "limitations": "自动构建的能力对齐任务质量与安全判定均依赖 LLM，可能引入偏差；「7% 风险」仅基于头部技能扫描，覆盖面与阈值口径 abstract 未详述。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.22613"
      }
    ],
    "citation": "SkillAudit. arXiv:2606.22613."
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
    "methodCore": "Skill Coverage 针对「任务结果无法揭示可复用技能的哪些部分被执行、以及执行时 Agent 是否遵循了相关技能指令」的盲区，提出一个基于轨迹（trajectory-based）的技能测试充分性度量（test-adequacy metric）。其框架从每个技能中抽取技能行为约束（skill behavior constraints），把自然语言技能指令翻译为半结构化约束（semi-structured constraints），这些约束指定了在特定条件下 Agent 的预期行为；随后判定每条约束是否被某个 Agent 轨迹覆盖，并对被覆盖的约束按 Agent 实际行为给出 Pass 或 Fail 判定。作者将该框架应用于 SkillsBench：结果显示排行榜上的 Agent 轨迹平均只覆盖了所抽取技能行为约束的 38.66% 至 45.51%。随后作者利用 Fail 判定来强化对应技能内容——仅通过强调 Agent 未遵循的原始指令——并用强化后的技能重跑相同任务，在五个 Agent-模型行上带来失败任务的平均 16.0% 恢复率。这表明技能覆盖率既是测试充分性度量，也是观察技能使用行为的细粒度信号，失败约束标签为改进技能有效性提供可行动证据。",
    "evaluation": "abstract 明确：应用于 SkillsBench 时，排行榜 Agent 轨迹平均仅覆盖所抽取技能行为约束的 38.66%–45.51%；用 Fail 判定强化技能后重跑，在五个 Agent-模型行上带来失败任务平均 16.0% 的恢复率。summary 提及的人类一致率 93.71% 等其它指标 abstract 未给出，需查原文。",
    "mainFinding": "任务成败无法反映技能哪些部分被执行；基于轨迹的技能覆盖率把指令译为可判定的行为约束，揭示现有轨迹覆盖率仅约 39%–46%，且失败约束可指导技能强化恢复 16% 失败任务。",
    "limitations": "自然语言指令到半结构化约束的翻译及覆盖/通过判定质量依赖自动化流程，可能引入误差；结论仅基于 SkillsBench，跨基准与非编码技能的普适性待验。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.20659"
      }
    ],
    "citation": "Skill Coverage. arXiv:2606.20659."
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
    "methodCore": "SkillForge 面向云技术支持这类企业场景,针对现有技能生成器缺乏领域接地、产出技能与真实任务不匹配,且部署后无法把执行失败回溯到技能缺陷的问题,提出一个自进化框架,闭合“创建-评估-优化”的端到端循环。为产出对齐良好的初始技能,其 Domain-Contextualized Skill Creator 将技能合成锚定在知识库与历史工单之上;为实现持续自优化,一条三阶段流水线——Failure Analyzer、Skill Diagnostician、Skill Optimizer——自动批量诊断执行失败、定位底层技能缺陷并改写技能以消除缺陷。该循环迭代运行,使技能随每一轮部署反馈自我改进。整体思路是把运营中不断累积的失败证据转化为对技能的定向修订,而非停留在一次性生成。作者强调这一自动进化过程可从多种起点出发持续提升技能质量。",
    "evaluation": "在五个真实云支持场景上评测,覆盖 1,883 条工单与 3,737 个任务。实验表明:领域上下文化的技能创建器相比通用创建器产出的初始技能更好,以与历史工单中专家撰写参考回复的一致性衡量;自进化循环则从专家撰写、领域生成、通用等不同起点出发,在连续轮次中逐步提升技能质量,显示自动进化可超越人工整理的专家知识。",
    "mainFinding": "以领域接地的创建器加“分析-诊断-优化”三段自进化循环,把部署失败证据转化为定向修订,使技能质量随反馈持续提升并超越专家撰写。",
    "limitations": "评测集中于云技术支持单一垂类,跨领域普适性未充分验证;自动诊断与改写依赖 LLM 判断,一致性指标以专家回复为参照,超越专家的结论仍需更广泛复核。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2604.08618"
      }
    ],
    "citation": "SkillForge. arXiv:2604.08618."
  },
  {
    "id": "skill-source-iterative-optimizer",
    "page": "skill",
    "title": "Iterative Optimizer",
    "shortTitle": "Iterative Opti...",
    "category": "skill-optimization",
    "maturity": "growing",
    "score": 0.583,
    "year": 2026,
    "venue": "Agent Skills 生态实践",
    "authors": "Agent Skills 社区/工程实践",
    "methodFamily": "skill optimization",
    "tags": [
      "optimization",
      "skill optimization",
      "active"
    ],
    "scores": {
      "clarity": 0.7,
      "evidence": 0.6,
      "reproducibility": 0.53,
      "adoption": 0.55,
      "selfEvolution": 0.68
    },
    "summary": "多次评测-优化-再评测闭环",
    "methodCore": "Iterative Optimizer(迭代优化器)是 Agent Skills 生态中面向技能质量提升的工程范式。其核心是把技能改进组织成一个可重复运行的闭环:先在代表性任务上评测当前技能的表现,收集失败与低效证据;再据此对技能文档做针对性优化;随后在同一评测集上重新评测,验证改动是否真正带来提升而非引入回退。这一“评测-优化-再评测”的循环可多轮迭代,每一轮都以上一轮的量化结果作为下一轮修订的依据,从而让技能从一次性撰写走向持续打磨。相比凭直觉一次性写好技能,该范式把改进建立在可观测的反馈之上,使每次修订都有据可依、可被验证接受或拒绝,让任何技能只要有可复现评测与明确优化动作即可纳入循环持续演进。",
    "evaluation": "作为工程约定,其价值在于以低门槛把技能改进变为数据驱动的可验证过程,适用于已有稳定评测集、希望持续维护技能质量的场景。相比一次性撰写,它降低了改动引入回退的风险,让技能维护从主观判断转向以评测结果为准绳的迭代,是团队协作维护共享技能库的实用做法。",
    "mainFinding": "把技能改进组织为“评测-优化-再评测”的多轮闭环,使每次修订都以可观测反馈为依据并被验证接受,让技能从一次性撰写走向持续可控打磨。",
    "limitations": "效果高度依赖评测集的代表性与覆盖度,评测偏窄会把技能过拟合到测试任务;循环需要反复评测,时间与算力成本随轮次累积。",
    "related": [],
    "links": [],
    "citation": "Iterative Optimizer, Agent Skills 生态实践条目。"
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
    "methodCore": "SkillReducer 针对基于 LLM 的编程智能体所依赖的技能:注入上下文窗口的每个 token 既带来费用又稀释注意力。作者对 55,315 个公开技能做大规模实证研究,发现系统性低效:26.4% 完全缺失路由描述,超过 60% 的正文内容不可执行,参考文件单次调用可注入数以万计的 token。据此提出一个两阶段优化框架:阶段一优化路由层,压缩冗长描述并通过对抗式 delta debugging 生成缺失描述;阶段二重构技能正文,采用分类法驱动的分类与渐进式披露,把可执行核心规则与按需加载的补充内容分离,并以忠实性检查和自纠正反馈循环加以验证。整体思路是“少即是多”:剔除非必要内容既降低成本,又减少上下文中的干扰,从而在压缩体量的同时不损甚至提升功能质量。",
    "evaluation": "在 600 个技能与 SkillsBench 基准上评测,SkillReducer 实现 48% 的描述压缩与 39% 的正文压缩,同时功能质量提升 2.8%,揭示“少即是多”效应。这些收益可跨来自四个家族的五个模型迁移,平均保留率 0.965,并能推广到一个独立的 agent 框架。",
    "mainFinding": "通过路由层压缩与正文分层重构剔除非可执行内容,在大幅压缩技能体量的同时提升功能质量,验证上下文中“少即是多”的减负效应。",
    "limitations": "实证基于公开技能样本,压缩策略在私有或高度专业化技能上的适用性未知;忠实性检查依赖自动判定,压缩误删稀疏关键信息的风险需人工把关。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2603.29919"
      }
    ],
    "citation": "SkillReducer. arXiv:2603.29919."
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
    "methodCore": "该条 summary 与标题写作“根据模型能力动态调整 Skill 策略”,但据 arxiv abstract,D2Skill 实为面向 agentic RL 的动态双粒度技能库,核心并非按模型能力调整策略,归类/映射可能有误。abstract 显示:agentic RL 可从可复用经验中获益,但现有基于技能的方法多只抽取轨迹级指导,缺乏维护演化技能记忆的原则性机制。D2Skill 把可复用经验组织为提供高层指导的任务技能(task skills)与提供细粒度决策支持与纠错的步骤技能(step skills)。它通过同一策略下配对的基线 rollout 与注入技能 rollout 联合训练策略与技能库,用二者表现差距导出用于技能更新与策略优化的事后效用(hindsight utility)信号。技能库完全由训练期经验构建,并通过反思持续扩展、以效用感知的检索与剪枝维护。",
    "evaluation": "在 ALFWorld、WebShop 与检索增强 QA 任务上评测,D2Skill 在不同规模模型上均大幅超越无技能基线。消融与分析显示双粒度技能建模与动态技能维护对增益均关键;学得技能表现出更高效用、可跨评测设置迁移,且仅带来适度训练开销。summary 所述“按模型能力动态调整策略”缺乏 abstract 支撑,需查原文核实。",
    "mainFinding": "以任务技能与步骤技能双粒度组织可复用经验,用配对 rollout 的效用差信号联合优化策略与技能库,并动态维护技能记忆,显著超越无技能基线。",
    "limitations": "归类/映射可能有误:summary 描述的“按模型能力调整”与 abstract 不符,方法定位需以原文为准;技能库依赖训练期轨迹,离线经验多样性不足时收益可能受限。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2603.28716"
      }
    ],
    "citation": "D2Skill. arXiv:2603.28716."
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
    "methodCore": "SkillClaw 针对 OpenClaw 类 LLM 智能体依赖可复用技能、但技能部署后基本保持静态的问题:相似的工作流、工具使用模式与失败模式在不同用户间被反复重新发现,系统无法随经验改进。不同用户的交互提供了关于某技能何时奏效或失败的互补信号,但现有系统缺乏把这类异构经验转化为可靠技能更新的机制。为此,SkillClaw 提出面向多用户智能体生态的集体技能进化框架,把跨用户与跨时间的交互作为改进技能的主要信号。它持续聚合使用中产生的轨迹,并交由一个自主进化器(autonomous evolver)处理,后者识别反复出现的行为模式,并将其转化为对技能集的更新——或精炼既有技能,或以新能力扩展技能。所得技能维护在共享仓库中并在用户间同步,使在某一情境中发现的改进能在系统范围内传播,且无需用户额外投入。",
    "evaluation": "通过把多用户经验整合进持续的技能更新,SkillClaw 实现跨用户知识迁移与累积式能力提升。在 WildClawBench 上的实验表明,在有限交互与反馈下,它显著提升了 Qwen3-Max 在真实智能体场景中的表现。abstract 仅报告“显著提升”而未给出具体数值,增益幅度需查原文核实。",
    "mainFinding": "把跨用户、跨时间的交互轨迹作为主要信号,由自主进化器提炼为对共享技能库的精炼或扩展并在用户间同步,实现集体式技能进化与知识传播。",
    "limitations": "abstract 未给出具体提升数值,增益幅度需查原文;多用户轨迹聚合可能引入隐私与噪声问题,自主进化器把异构经验转为更新的可靠性依赖模式识别质量。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2604.08377"
      }
    ],
    "citation": "SkillClaw. arXiv:2604.08377."
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
    "methodCore": "EmbodiSkill 面向具身智能体:技能可指导物体搜索、动作执行与状态变化,但具身环境在布局、物体状态等执行因素上多变,技能须从任务执行产生的轨迹中自进化。现有技能自进化方法多在数字环境中开发,常把轨迹转为粗粒度技能更新;直接搬到具身场景有问题,因为一次失败可能不仅反映技能内容错误,也可能是执行失误——智能体未遵循本已有效的指导。为此提出一个免训练框架,通过技能感知反思与定向修订实现具身技能自进化。EmbodiSkill 针对当前技能解读每条轨迹,用“技能需改变”的证据更新技能正文,用“执行失误”的证据保留并强调有效指导,从而把两类失因区分开、避免错误地改写本正确的技能。summary 提到的“双层技能结构”在 abstract 中未明确表述,归类/映射可能有偏差,此处依据 abstract 以“技能感知反思+定向修订”为准。",
    "evaluation": "在 ALFWorld 与 EmbodiedBench 上评测,EmbodiSkill 一致提升具身任务成功率。在 ALFWorld 上,它使冻结的 Qwen3.5-27B 执行器达到 93.28% 任务成功率,比作为直接智能体、不带技能的 GPT-5.2 高出 31.58%,表明技能感知的自进化能帮助具身智能体从自身轨迹中积累可复用的程序性知识。",
    "mainFinding": "以技能感知反思区分“技能需改”与“执行失误”两类失因并做定向修订,免训练地让具身智能体从轨迹积累可复用程序知识,ALFWorld 达 93.28%。",
    "limitations": "summary 所称“双层技能结构”在 abstract 中无对应表述,该模块名归类/映射可能有误;免训练依赖 LLM 反思质量,失因归因错误会导致误修订。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.10332"
      }
    ],
    "citation": "EmbodiSkill. arXiv:2605.10332."
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
    "methodCore": "AutoSkill 面向实际 LLM 应用中用户反复表达稳定偏好与需求(如减少幻觉、遵循机构写作规范、避免过于技术化措辞)却很少被固化为可复用知识、导致智能体难以跨会话积累个性化能力的问题,提出一个经验驱动的终身学习框架。它使 LLM 智能体能自动从对话与交互轨迹中派生、维护并复用技能:从用户经验中抽象出技能,支持其持续自进化,并在不重训底层模型的情况下把相关技能动态注入未来请求。AutoSkill 被设计为与模型无关的插件层,兼容既有 LLM,并引入标准化的技能表示以便在智能体、用户与任务之间共享与迁移,从而把转瞬即逝的交互经验转化为显式、可复用、可组合的能力。summary 中“双循环耦合”“SKILL.md 版本化”“34 轮迭代”等具体表述在 abstract 中均无对应,归类/映射可能有误。",
    "evaluation": "该论文为框架性阐述,abstract 侧重动机、架构与技能生命周期设计,并相对既有记忆/检索/个性化工作做定位,未给出量化实验或基准结果。summary 所述“34 轮迭代”等具体数字无法据 abstract 佐证,需查原文核实;其价值主张在于把交互经验沉淀为可复用、可迁移的技能层。",
    "mainFinding": "提出与模型无关的插件式终身学习框架,从交互轨迹自动派生、维护并复用技能,免重训注入未来请求,把交互经验固化为可共享的个性化能力。",
    "limitations": "abstract 未含实验证据,summary“34 轮迭代”等数字无法佐证需查原文;“双循环耦合”“SKILL.md”等模块名与 abstract 不符,归类/映射可能有误。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2603.01145"
      }
    ],
    "citation": "AutoSkill. arXiv:2603.01145."
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
    "methodCore": "SkillOpt 主张:当前技能要么手工撰写、一次性生成,要么经松散受控的自我修订演化,都不像针对技能的深度学习优化器,也无法在反馈下可靠地超越起点。作者提出应把技能当作冻结智能体的外部状态来训练,沿用使权重空间优化可复现的同一套纪律。SkillOpt 是据作者所知首个系统化、可控的技能文本空间优化器:一个独立的优化器模型把打分后的 rollout 转为对单个技能文档的有界 add/delete/replace 编辑,且仅当编辑严格提升留出验证集分数时才被接受。文本学习率预算、被拒编辑缓冲区与逐 epoch 的慢/元更新使技能训练稳定,同时在部署时不增加任何推理期模型调用。整体把“技能文档”类比为可训练参数,用可复现的训练循环持续优化,并保证部署零额外推理成本。",
    "evaluation": "跨六个基准、七个目标模型与三种执行框架(直接对话、Codex、Claude Code),SkillOpt 在全部 52 个评测单元上均最优或并列最优,击败 human、one-shot、TextGrad、GEPA、EvoSkill 等竞争者。GPT-5.5 上直接对话平均 +23.5 分、Codex 内 +24.8、Claude Code 内 +19.1;技能跨模型与环境仍保留价值。",
    "mainFinding": "把技能文档当作可训练参数,用受控的有界编辑+验证集接受的训练循环优化,部署零额外推理调用,在 52 个评测单元全最优,GPT-5.5 平均 +23.5 分。",
    "limitations": "优化依赖可打分的 rollout 与留出验证集,缺乏可靠验证信号的任务难以套用;逐 epoch 元更新与被拒编辑缓冲带来训练期额外开销与调参复杂度。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.23904"
      }
    ],
    "citation": "SkillOpt. arXiv:2605.23904."
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
    "methodCore": "SkillMAS 指出 LLM 智能体系统被期望在部署后持续改进,但现有工作常把两个适应目标解耦:技能进化与多智能体系统(MAS)重构。这种分离会造成组织瓶颈、上下文压力与错误专业化。为此提出一个用于多智能体系统自适应专业化的非参数框架,把技能进化与 MAS 重构耦合起来。SkillMAS 使用 Utility Learning 从经验证的执行轨迹中分配信用(credit);使用有界的技能进化在不引发未经过滤的技能库膨胀的前提下精炼可复用流程;并在保留的失败与 Executor Utility 表明存在结构性不匹配时,进行证据门控的(evidence-gated)MAS 重构。整体思路是让技能层面的改进与组织结构层面的调整彼此感知、协同演化,从而澄清部署后专业化是如何被归因、更新与应用的。作为非参数框架,它不依赖对模型参数的更新。",
    "evaluation": "在具身操作、命令行执行与零售工作流三类任务上评测,SkillMAS 在所报告的执行框架下具有竞争力,同时澄清了部署后专业化的归因、更新与应用方式。abstract 仅表述“competitive”而未给出具体量化提升数值,相对基线的增益幅度需查原文核实,summary 中的强度描述亦无法据 abstract 佐证。",
    "mainFinding": "以非参数方式耦合技能进化与 MAS 重构,用效用学习分配信用、有界进化控膨胀、证据门控触发结构调整,协同处理部署后自适应专业化。",
    "limitations": "abstract 表述“competitive”而未列具体提升数字,效果强度需查原文;证据门控重构依赖对结构性不匹配的判定,阈值设定与误判风险未详述。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.09341"
      }
    ],
    "citation": "SkillMAS. arXiv:2605.09341."
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
    "methodCore": "SkillGrad 面向技能可靠性问题:无论第三方下载还是自生成,技能常不可靠、不完整或过时,而现有技能进化方法多用启发式反思、缺乏显式优化表述。为此提出一个受梯度下降启发的技能优化框架,把技能包当作要以梯度下降方式优化的结构化参数:任务执行提供轨迹级的损失证据,自动诊断继而提供指示修正方向的基于文本的梯度(text-based gradients)。为在多轮迭代间稳定优化,一个动量智能体(momentum agent)把反复出现的诊断模式累积为持久的记忆覆盖层(memory overlay);最后由一个基于 LLM 的 patcher 执行参数更新,对技能包施加分层感知的编辑(layer-aware edits)。整体把损失、梯度、动量、参数更新四个概念逐一以文本机制模拟,使技能优化具有方向性、记忆性与信号可分解性,而非无结构的反思。",
    "evaluation": "在 SpreadsheetBench Verified 与 WikiTableQuestions 上评测,SkillGrad 在两个骨干 LLM 上一致优于基于训练的技能进化基线,平均比最强的基于训练基线高 6.7 个百分点。消融进一步表明动量与对比式诊断均对最终技能质量有贡献。",
    "mainFinding": "把技能包视为可优化参数,用文本梯度指示修正方向、动量智能体累积诊断记忆、patcher 分层编辑更新,平均超最强训练基线 6.7 个百分点。",
    "limitations": "评测限于两个表格类基准与两个骨干模型,更广任务域的普适性未验证;文本梯度与诊断依赖 LLM 自动生成,诊断偏差会传导为错误的修正方向。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.27760"
      }
    ],
    "citation": "SkillGrad. arXiv:2605.27760."
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
    "methodCore": "SkillC 面向长时序 agentic 强化学习:结构化技能提示能改善探索,技能增强 RL 在推理时保留外部技能,而技能内化 RL 在训练时撤除技能以实现自主表现。但现有内化方法只用技能有用性对比做课程控制,策略更新本身不变,无法区分“依赖技能的成功”与“自主的成功”。SkillC 基于对比式技能信用分配(Contrastive Skill Credit Assignment,CSCA),把这种对比转化为直接的内化学习信号:在同一次策略更新内,为活跃技能类型的任务采样配对的注入技能与无技能 rollout,并通过一个双流优势估计器(dual-stream advantage estimator)把二者的任务级对比注入优化,在保持全局排名的同时,施加偏向无技能成功的单侧修正。一个平滑的验证级信号进一步驱动对归因强度、rollout 分配与单调活跃集剪枝的自适应课程,使智能体学会“不靠技能也能成功”比“靠技能成功”更值得内化。",
    "evaluation": "在 ALFWorld 与 WebShop 上的实验表明,在运行时不访问技能的前提下,SkillC 分别以 5.5% 与 4.4% 超越最强的先前技能内化 RL 基线,同时与技能增强 RL 方法保持竞争力。summary 中所称“超 SKILL0 5.5 个百分点”的对照对象名称在 abstract 中未点明,应理解为“最强先前内化基线”。",
    "mainFinding": "把技能内化转化为对比式信用分配问题,用双流优势估计偏向无技能成功、辅以自适应课程,运行时不用技能即在 ALFWorld/WebShop 超最强内化基线 5.5%/4.4%。",
    "limitations": "评测限于 ALFWorld 与 WebShop 两类交互任务,泛化性待验证;配对 rollout 采样与双流优势估计增加训练期采样与计算开销。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.27899"
      }
    ],
    "citation": "SKILLC. arXiv:2605.27899."
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
    "methodCore": "Skill0.5 面向 agentic 强化学习:为 LLM 装备显式技能是让自主智能体解决复杂任务的有前景范式,技能可分为用于广泛认知迁移的通用技能(general skills)与用于动态执行的任务特定技能(task-specific skills)。但现有基于技能的 RL 通常在“全外化”(带来高昂上下文开销)与“全内化”(易过拟合与知识冲突)之间被迫二选一。为破解此困局,Skill0.5 显式区分技能处理方式,将通用技能内化与任务特定技能利用相结合。它由一个动态的、难度感知的路由器(difficulty-aware router)驱动,把任务分流到不同的掌握层级以施加定制的优化策略:对困难任务,通过特权蒸馏(privileged distillation)内化通用技能以构建认知基础;对简单任务,通过诊断式探测(diagnostic probing)惩罚捷径并强制任务特定技能的利用。整体在内化打底与外挂调用间取得平衡。",
    "evaluation": "在 ALFWorld 与 WebShop 上的实验表明,Skill0.5 同时优于基于记忆与基于技能的 RL 基线,在分布内(in-distribution)与分布外(out-of-distribution)场景下均带来性能提升。summary 所述“ALFWorld OOD 超最强基线 13.2 个百分点”的具体数值在 abstract 中无法佐证,需查原文核实。",
    "mainFinding": "以难度感知路由分流任务,对难任务特权蒸馏内化通用技能、对易任务诊断探测强制利用任务特定技能,兼顾内化与外化,在 ID 与 OOD 场景均超基线。",
    "limitations": "abstract 未给具体数字,summary“+13.2pp”无法据 abstract 佐证需查原文;评测限于 ALFWorld 与 WebShop,路由器难度阈值鲁棒性未详述。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.28424"
      }
    ],
    "citation": "Skill0.5. arXiv:2605.28424."
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
    "methodCore": "SkillEE 从经济学视角研究技能重写:LLM 智能体日益依赖技能(编码工作流、工具使用、实现模式、校验检查与领域规则的可复用程序性文档)。技能重写常被当作提示压缩,但更短的技能可能因移除防止盲目探索、调试与恢复的稀疏操作锚点(operational anchors),反而让智能体更昂贵。其受控框架先剖析技能结构,用信息保留策略重写技能,并在固定的任务指令、环境与验证器下评估重写结果。实验揭示不同策略间存在明显的质量-成本权衡:API/代码锚定、工作流护栏、规则/公式锚定分别惠及不同任务族,不存在普适最优模板。作者据此主张把技能设计视为成本感知的操作知识工程,而非提示压缩,强调保留而非一味删减关键操作锚点。",
    "evaluation": "在 SkillsBench 上实验。主留出评测中,学得策略使总成本降低 7.0%、下游 agent-token 成本降低 6.0%;在冻结的跨模型迁移中,对应降幅平均为 14.7% 与 13.7%,同时验证器质量得以保持。结果支持“技能设计应是成本感知的操作知识工程”这一定位。",
    "mainFinding": "从质量-成本权衡视角重写技能,保留稀疏操作锚点而非一味压缩,主评测降本 7.0%/6.0%,跨模型迁移平均降本 14.7%/13.7% 且质量不损。",
    "limitations": "实验限于 SkillsBench,不同策略惠及不同任务族且无普适模板,策略选择需按任务族人工权衡;成本度量以 token 为主,未涵盖端到端时延等其他成本维度。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.09421"
      }
    ],
    "citation": "SkillEE. arXiv:2606.09421."
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
    "methodCore": "SkillAxe 针对技能文档(引导 LLM 智能体的结构化自然语言指令)对现代智能体框架至关重要、但 LLM 难以写出真正奏效技能的问题:在 SkillsBench 上,人写技能使通过率提升 16.2 个百分点,而 LLM 撰写的技能没有可测量的增益。为此提出一个完全无监督的框架,使 LLM 能迭代地诊断并精炼自己的技能。SkillAxe 把技能质量分解为四个可解释维度——质量影响(quality impact)、触发精度(trigger precision)、带故障归因的指令遵从(instruction compliance with fault attribution)、解法路径覆盖(solution-path coverage)——产出结构化的改进简报(improvement briefs),无需任何真值标签、测试套件或环境奖励。整体形成一个不依赖外部监督的自改进引擎,让 LLM 依据这四维诊断持续修订自身技能。",
    "evaluation": "在 SkillsBench 上,SkillAxe 相对未改进的 LLM 技能把通过率相对提升 28%,并弥合了到人写技能差距的 47–67%。作者进一步在 SpreadsheetBench 上验证其作为“持续改进引擎”的在野表现:一个由 SkillAxe 构建的技能库从过去的智能体轨迹中学习,仅用 22 个技能就把通过率从 16.0% 提升到 52.0%。",
    "mainFinding": "以四个可解释维度无监督诊断并迭代精炼自身技能,无需真值/测试/奖励,SkillsBench 相对提升 28%、弥合到人写技能差距的 47–67%。",
    "limitations": "四维诊断依赖 LLM 自我判断质量,无外部真值可能放大自身偏差;评测集中于 SkillsBench 与 SpreadsheetBench,更广任务域的可靠性待验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.10546"
      }
    ],
    "citation": "SKILLAXE. arXiv:2606.10546."
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
    "methodCore": "SelSkill 指出技能是为复杂 agentic 任务提供可复用知识与执行策略的可调用程序模块,但现有方法多关注选择相关技能或改进技能本身,忽略了“在当前决策点是否真的应当调用某个相关技能”。无益的调用会引入无关上下文、扰乱本已正确的执行过程。为此提出一个用于选择性技能调用(selective skill invocation)的双粒度偏好学习框架。SelSkill 把技能使用表述为“调用还是跳过”(skill-or-skip)的决策,利用预测不确定性(predictive uncertainty)来优先选取候选决策点,并从共享轨迹前缀构造受控的“调用-跳过”偏好对。它进一步把 episode 级的结果偏好与 step 级的调用偏好结合,以同时刻画整体轨迹质量与技能调用的局部有效性,从而把技能调用作为独立的优化目标来学习。",
    "evaluation": "在 ALFWorld 上以 Qwen3-8B,SelSkill 把任务成功率提升 10.9 个百分点、执行精度提升 29.1 个百分点;在 BFCL 上分别提升 5.7 与 29.5 个百分点。Tau-bench 与 PopQA 上的零样本结果进一步表明,学得的调用策略能迁移到带有此前未见技能的新领域。",
    "mainFinding": "把“调用还是跳过技能”作为独立优化目标,用不确定性优先与 episode/step 双粒度偏好学习,ALFWorld +10.9pp 且调用策略可跨领域零样本迁移。",
    "limitations": "偏好对依赖共享轨迹前缀构造,采样与配对成本较高;评测主要在 ALFWorld、BFCL 等,跨更多复杂环境的稳定性仍需验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.00510"
      }
    ],
    "citation": "SelSkill. arXiv:2606.00510."
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
    "methodCore": "MASA(Model-Aware Skill Alignment)针对 LLM 智能体在决策时检索外部整理技能、而现有技能库通常被当作与模型无关、在能力差异很大的骨干间复用同一技能表述的问题。作者的受控实验跨多种模型规模显示技能有效性强烈依赖模型:惠及某骨干的技能可能损害另一骨干。为此 MASA 在不修改智能体权重的前提下把技能对齐到每个目标骨干,分两阶段:(1) 分层技能进化流水线,用爬山法(hill climbing)与 UCB 驱动的树搜索,在环境反馈与模型能力画像(model capability profiles)的引导下,迭代重写通用与任务特定技能;(2) 一个轻量的模型条件化技能改写器(model-conditioned skill rewriter),在进化轨迹上训练,以单次前向传播复现这种适配。整体打破“一套技能适配所有模型”的假设。",
    "evaluation": "跨三个交互环境与四个骨干模型的实验表明,MASA 一致取得最佳整体表现,较最强基线最高提升 25.8 分。学得的改写器进一步能泛化到未见任务与环境而无需额外搜索,并以远低于教师 LLM 的推理成本、持续优于一个大得多的教师 LLM,验证了模型条件化对齐的迁移价值。",
    "mainFinding": "证实技能有效性依赖模型,提出模型条件化的分层进化搜索+轻量改写器,不改权重把技能对齐到各骨干,较最强基线最高 +25.8 分且改写器可泛化。",
    "limitations": "进化阶段的树搜索与爬山需要多次环境反馈,搜索成本较高;能力画像需针对每个骨干构建,新模型接入的画像时效与开销未详述。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.30723"
      }
    ],
    "citation": "MASA. arXiv:2605.30723."
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
    "methodCore": "SkillAdaptor 面向 LLM 智能体日益依赖可复用外部技能解决长时序交互任务的场景。现有免训练技能适配流水线通常从完整轨迹或会话级反馈更新技能,使失败归因粗糙,常产生不稳定或过于宽泛的修订。为此提出一个带显式失败归因的免训练、步级(step-level)技能适配框架,可插入 OpenClaw 类智能体框架。给定一条失败轨迹,SkillAdaptor 识别第一个可操作的故障步骤(first actionable fault step),把责任关联到候选技能,并在显式的接受检查(acceptance checks)下施加定向更新,同时保持骨干冻结。整体形成“归因—修改—审核”的步级闭环,以更细的粒度定位故障、避免宽泛误改,实现更稳定、可审计的免训练技能维护。",
    "evaluation": "在 WebShop、PinchBench 与 Claw-Eval 上,以 Kimi-K2.5、GLM-5、GPT-5.2 评测。SkillAdaptor 在三套基准上均优于无技能与技能适配基线,单指标最大提升为 PinchBench +1.5、Claw-Eval +1.8、WebShop 成功率 +1.7,表明步级归因支持更稳定、可审计的免训练技能维护。",
    "mainFinding": "以显式失败归因定位首个可操作故障步骤,在接受检查下做步级定向更新且骨干冻结,免训练可插拔,三套基准均超基线并提升维护可审计性。",
    "limitations": "报告的单指标提升幅度较小(约 +1.5~+1.8),整体增益有限;首故障步定位依赖 LLM 归因质量,归因错误会导致责任错配与误修订。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.01311"
      }
    ],
    "citation": "SkillAdaptor. arXiv:2606.01311."
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
    "methodCore": "FederatedSkill 面向现代 LLM 智能体日益依赖技能库、技能进化成为自我改进主要驱动的现状:孤立的单用户任务流缺乏构建全面技能所需的多样性;而跨用户协作虽能突破数据瓶颈,现有轨迹共享方法会损害用户隐私并强加一个无法适应客户异质性的统一全局库。为此提出一个隐私保护的协作智能体进化框架。它超越原始轨迹共享,以语义技能差分(semantic skill diffs,即对本地库的结构化 patch)作为通信的基本单元。在服务器端,一个进化智能体聚合这些 patch,以动态建模客户特定的能力边界,从而促成严格个性化的技能进化,而非次优的全局平均。整体把联邦学习的隐私保护思路引入技能进化,只传 patch 不传轨迹。summary 中“POMDP 个性化更新”在 abstract 中无对应表述,归类/映射可能有误,此处按 abstract 以“客户特定能力边界建模”为准。",
    "evaluation": "在 20 个不同的智能体任务族上评测,FederatedSkill 相较自进化基线取得显著增益,成功率最高提升 44.4%,计算成本降低 37.5%。summary 中“POMDP”这一机制描述无法据 abstract 佐证,需查原文核实。",
    "mainFinding": "把联邦学习隐私保护引入技能进化,以语义技能 patch 而非原始轨迹通信,服务器端聚合建模客户能力边界实现个性化进化,成功率最高+44.4%。",
    "limitations": "summary 所称“POMDP 个性化更新”在 abstract 中无对应,该机制名归类/映射可能有误,需查原文;patch 聚合对客户异质性建模的可扩展性与通信开销未详述。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.03143"
      }
    ],
    "citation": "FederatedSkill. arXiv:2606.03143."
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
    "methodCore": "OpenSkill 研究开放世界自进化:自进化智能体需在部署后适应,但现有方法都假定存在可用的学习循环,如整理好的技能、成功轨迹或验证器信号;而真实的开放世界部署可能一样都没有,只给出一个任务提示。作者定义开放世界自进化问题——智能体必须从零构建自己的技能与自己的验证信号,使用开放世界资源但没有目标任务的监督。OpenSkill 通过引导来 bootstrap 这一循环:从文档、代码仓库与网络获取接地知识与验证锚点(verification anchors),把它们合成为可迁移技能,并针对以这些锚点(而非目标答案)为基础的自建虚拟任务来精炼技能。开放世界由此同时提供待学习的知识与一个与监督无关的练习环境,目标任务监督仅保留用于最终评估。整体在无参考答案的前提下自建验证信号闭环。",
    "evaluation": "跨三个基准与两个目标智能体,OpenSkill 在满足无监督约束的同时取得最佳的自动通过率。分析显示其技能可跨模型迁移而无需模型特定适配,且其自建验证器尽管从不访问真值,却与真值结果保持一致。summary 中“比封闭基线高 8.9pp”的具体数值在 abstract 中无法佐证,需查原文核实。",
    "mainFinding": "定义并解决开放世界自进化:仅凭任务提示,从文档/代码/网络自建知识与验证锚点合成可迁移技能并自我精炼,无监督下取得最佳自动通过率。",
    "limitations": "abstract 未给出具体数字,summary 中“+8.9pp”无法据 abstract 佐证,需查原文;自建验证锚点的可靠性依赖开放世界资源质量,锚点偏差会误导技能精炼方向。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.06741"
      }
    ],
    "citation": "OpenSkill. arXiv:2606.06741."
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
    "methodCore": "SkillHone 面向持续的技能进化:技能以任务特定的程序、脚本与参考扩展语言模型智能体,但其针对的任务与环境不断变化。现有方法只在有界的运行中改进技能、且只保留最终产物,丢弃了后续智能体解读先前修订、评估与被否决备选方案所需的决策历史。为此提出一个以持久决策历史为根基的持续技能进化框架(harness)。SkillHone 把技能修订与评估侧证据配对,后者提供练习反馈,记录诊断、修订、证据与结果的结构化历史。角色分离的子智能体(role-separated subagents)在练习探针上运行候选技能、进行去标识化(redacted)报告,并依据先前决策提出修订,从而在跨会话精炼时无需重新发现过往理据。整体让完整决策链而非仅最终产物得以继承。",
    "evaluation": "在深度研究基准上,SkillHone 无需预集成的搜索栈即可运行,在 GAIA 上比商业支持的深度研究智能体高 15.8 分、在 WebWalkerQA-EN 上高 3.2 分,并超越先前技能进化方法。作者进一步将其部署于内部工具中介的分析场景,在七个设置上平均提升准确率 18.8 分。",
    "mainFinding": "以持久决策历史为根基做持续技能进化,继承完整决策链与被否备选,GAIA 比商业深度研究智能体高 15.8pp,内部七场景平均 +18.8 分。",
    "limitations": "持久记录完整决策历史带来存储与管理开销,历史规模增长后的检索效率未详述;评测偏深度研究与内部分析场景,更广任务域普适性待验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.08671"
      }
    ],
    "citation": "SkillHone. arXiv:2606.08671."
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
    "methodCore": "该条 summary 与标题写作“无 ground-truth 配对轨迹审计自进化,PACE 12 评估器四维行为对比”,但据 arxiv abstract,SkillAudit 实为面向技能评估(assessment)而非自进化的框架,未见“PACE 12 评估器”“配对轨迹”等表述,归类/映射可能有误。abstract 显示:技能生态缺乏可靠判断某技能是否值得部署的方法,现有评估多锚定固定任务套件,会把技能的边际贡献与骨干强度混淆、并在任务超出技能预期范围时漏判其价值。SkillAudit 是以技能为中心评估的端到端框架:输入任意智能体技能,自动生成涵盖效用、效率/成本与安全的多维评估报告;它聚焦技能产物本身,直接从技能包构建能力对齐的评估任务,在隔离沙箱中执行以收集执行证据,再以基于 LLM 的判定做自动检查。它提出基线比较原则度量效用与效率/成本,并引入静态语义分析+动态运行时验证的两阶段检测评估安全风险。",
    "evaluation": "在扫描覆盖 23 个职业类别的头部真实世界技能包后,作者发现超过 7% 的技能处于风险状态。abstract 未报告 summary 所称“SkillsBench +33.0pp”等提升数字,该数值无法据 abstract 佐证,需查原文核实;SkillAudit 定位为评估审计工具而非性能优化方法。",
    "mainFinding": "提出以技能为中心的端到端评估框架,从技能包自建任务在沙箱执行、以基线比较度量效用成本、静态+动态两阶段检测安全,扫描发现超 7% 技能存在风险。",
    "limitations": "归类/映射可能有误:该工作是评估审计而非自进化,summary“PACE 12”“+33.0pp”均无 abstract 支撑需查原文;安全检测依赖 LLM 判定,存在漏判风险。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.22613"
      }
    ],
    "citation": "SKILLAUDIT. arXiv:2606.22613."
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
    "methodCore": "SkillCAT 面向技能自进化把执行轨迹转为可复用技能文档的目标,指出现有流水线通常每任务只从一条轨迹学习、在检查前就合并候选技能 patch、且推理前加载完整技能语料。为此提出一个免训练框架,把过程分为三阶段。对比因果提取(Contrastive Causal Extraction,CCE)为每个任务采样多条轨迹,比较同任务的成功/失败对,识别解释结果差异的证据。评估增强进化(Assessment-Augmented Evolution,AAE)在源任务克隆上回放每个候选 patch,只保留能提升或保持任务结果的 patch,然后再做分层技能 patch 合并。拓扑感知任务执行(Topology-Aware Task Execution,TTE)把进化后的技能编译为可路由的子技能拓扑,使推理时只加载与任务相关的能力节点。整体在提取、验证、编译三环节分别解决单轨迹、先合并后检查与全量加载三大问题。",
    "evaluation": "在 SpreadsheetBench、WikiTableQuestions 与 DocVQA 等基准上评测,并测试跨模型与分布外泛化。这些设置中 SkillCAT 把相较基线的平均分数最高提升 40.40%,展现无需模型训练的可靠进化。summary 中“SpreadsheetBench +25.83pp”的单基准数值无法据 abstract 佐证,需查原文核实。",
    "mainFinding": "免训练三阶段:CCE 从成功/失败对提取因果证据、AAE 回放验证候选 patch、TTE 编译为可路由子技能拓扑按需加载,平均分数相较基线最高提升 40.40%。",
    "limitations": "summary 所称“+25.83pp”无法据 abstract 佐证需查原文;CCE 需为每任务多轨迹采样、AAE 需回放验证,带来额外采样与执行开销。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.13317"
      }
    ],
    "citation": "SkillCAT. arXiv:2606.13317."
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
    "methodCore": "Skill-MAS 面向基于 LLM 的自动多智能体系统(MAS)生成,指出现有方法在模型能力与经验保留间陷入两难:推理时 MAS 利用冻结的前沿 LLM,却重复相同搜索、不从过往经验学习;训练时 MAS 通过梯度更新内化经验,却受限于小模型较低的能力上限、难以扩展到大型前沿 LLM。为弥合此鸿沟,Skill-MAS 提出第三条路径,把高层编排能力概念化为一个可进化的 Meta-Skill,从而将经验保留与参数更新解耦。它通过一个闭合优化循环精炼这一架构性知识:(1) 多轨迹 Rollout(Multi-Trajectory Rollout)在当前 Meta-Skill 下为每个任务采样一个行为分布;(2) 选择性反思(Selective Reflection)自适应地选取优先任务,并施加分层对比分析,把系统性经验蒸馏为可泛化的策略级原则。整体在不修改模型参数的前提下让编排能力持续进化。",
    "evaluation": "跨四个复杂基准与四个不同 LLM 的大量实验表明,Skill-MAS 不仅取得显著性能增益,还保持了有利的成本-性能权衡。进一步分析显示进化出的 Meta-Skill 高度鲁棒,并在未见任务与不同 LLM 间表现出强迁移性。abstract 未给出具体提升数值,增益幅度需查原文核实。",
    "mainFinding": "把 MAS 高层编排能力概念化为可进化 Meta-Skill,以多轨迹采样+选择性反思闭环蒸馏策略级原则,不改参数即持续进化且跨任务跨模型强迁移。",
    "limitations": "abstract 表述“显著增益”而未列具体数字,提升幅度需查原文;多轨迹 Rollout 为每任务采样行为分布,采样成本较高,复杂任务上的扩展性未详述。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.18837"
      }
    ],
    "citation": "Skill-MAS. arXiv:2606.18837."
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
    "methodCore": "AgentSkillOS 面向 Claude 智能体技能爆发式增长带来的规模化治理问题，提出首个原则化的技能选择、编排与生态级管理框架，分为两个阶段。其一「管理技能」，通过节点级递归归类把海量技能组织成能力树（capability tree），支撑高效发现与检索；其二「求解任务」，基于 DAG 有向无环图流水线对多个技能进行检索、编排与执行，用结构化组合替代原生扁平调用。为衡量智能体调用技能的能力，作者构建了涵盖数据计算、文档创作、动态视频、视觉设计、Web 交互五大类别、共 30 个「重产物」（artifact-rich）任务的基准，输出质量用基于 LLM 的成对比较评估，并借助 Bradley-Terry 模型聚合为统一质量分。实验横跨从 200 到 200K 三个数量级的技能生态规模，验证树形检索能有效逼近 oracle 技能选择、DAG 编排在相同技能集下显著优于扁平调用，指向「结构化组合是释放技能潜力的关键」这一核心主张。",
    "evaluation": "在 30 个重产物任务基准上，用 LLM 成对比较 + Bradley-Terry 聚合出统一质量分。跨 200 至 200K 三个技能规模的实验表明：树形检索可有效逼近 oracle 技能选择；在相同技能集下，DAG 编排显著优于原生扁平调用。abstract 未给出具体分数与 baseline 数值，精确指标需查原文。",
    "mainFinding": "结构化组合（能力树检索 + DAG 编排）是在生态规模下释放技能潜力的关键，二者均带来明显收益。",
    "limitations": "基准仅 30 个任务、五类场景，规模化实验依赖 LLM 成对评判，abstract 未披露绝对指标；真实生态治理的稳定性仍待验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2603.02176"
      }
    ],
    "citation": "AgentSkillOS. arXiv:2603.02176."
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
    "methodCore": "SkillNet 针对智能体缺乏系统化技能积累与迁移、频繁「重复造轮子」的问题，提出一套开放式技能基础设施，支持规模化地创建、评估与组织 AI 技能。它在统一本体（ontology）下结构化技能：可从异构来源创建技能、在技能间建立丰富的关系连接，并沿安全性（Safety）、完整性（Completeness）、可执行性（Executability）、可维护性（Maintainability）与成本意识（Cost-awareness）五个维度做多维评估。基础设施由三部分组成——收录超过 200,000 个技能的仓库、一个交互式平台，以及一套通用 Python 工具包。其核心理念是把技能形式化为「可演化、可组合的资产」，使智能体从一次性的临时经验走向可长期沉淀的持久能力，从而为自进化提供稳固底座。",
    "evaluation": "在 ALFWorld、WebShop、ScienceWorld 三个基准上评估，跨多种骨干模型显示 SkillNet 显著提升智能体表现：平均奖励提升 40%，执行步数减少 30%。技能仓库规模超 200,000。abstract 未给出各基准单项数值与对比 baseline 细节。",
    "mainFinding": "将技能形式化为可演化、可组合资产并统一评估，能显著提升多模型表现（平均奖励 +40%、步数 -30%）。",
    "limitations": "评估集中于三类交互式基准，五维评估的一致性与技能质量把控依赖平台机制；超大规模仓库的长期可维护性仍需观察。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2603.04448"
      }
    ],
    "citation": "SkillNet. arXiv:2603.04448."
  },
  {
    "id": "skill-source-skills-standard",
    "page": "skill",
    "title": "Agent Skills 标准",
    "shortTitle": "Agent Skills 标准",
    "category": "skill-governance",
    "maturity": "mature",
    "score": 0.618,
    "year": 2026,
    "venue": "Agent Skills 生态实践",
    "authors": "Agent Skills 社区/工程实践",
    "methodFamily": "skill governance",
    "tags": [
      "management",
      "skill governance",
      "active"
    ],
    "scores": {
      "clarity": 0.6,
      "evidence": 0.7,
      "reproducibility": 0.73,
      "adoption": 0.65,
      "selfEvolution": 0.68
    },
    "summary": "跨平台的 Skill 格式与协议标准。",
    "methodCore": "Agent Skills 标准是围绕 Claude Code、Gemini CLI 等智能体生态逐步形成的技能封装与互操作约定：一个技能通常是以 Markdown 为核心的文件包，捆绑自然语言指令、可执行脚本、工具绑定与上下文依赖，并配以描述其名称、用途与触发条件的元数据（frontmatter/manifest）。标准化的目标是让技能在不同宿主（host）与运行时之间可被一致地发现、加载、路由与复用，从而把「能力」从单一平台解耦为可迁移的公共资产。它同时是治理的基础契约：清晰的格式边界让静态审查、权限声明、版本管理与检索编排得以在统一语义上工作。作为治理体系的地基，格式与协议标准决定了技能生态能否规模化流通，也决定了安全策略（如权限清单、能力声明）能否被普遍执行。",
    "evaluation": "工程价值在于提供跨平台一致的技能封装契约，降低技能在不同宿主间迁移与复用的摩擦，并为权限声明、静态审查、版本控制与检索编排提供统一语义基础。适用于多智能体平台协同、技能市场分发、以及企业内部技能资产统一治理的场景。",
    "mainFinding": "统一的 Skill 格式与协议是技能生态可流通、可治理的前提，让能力从单平台解耦为可迁移资产。",
    "limitations": "标准仍在演进、各宿主实现存在差异；格式统一并不自动带来安全，仍需权限与审查机制配套。",
    "related": [],
    "links": [],
    "citation": "Agent Skills 标准, Agent Skills 生态实践条目。"
  },
  {
    "id": "skill-source-rbac",
    "page": "skill",
    "title": "RBAC Permission",
    "shortTitle": "RBAC Permission",
    "category": "skill-governance",
    "maturity": "exploring",
    "score": 0.34,
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
      "clarity": 0.4,
      "evidence": 0.35,
      "reproducibility": 0.33,
      "adoption": 0.3,
      "selfEvolution": 0.48
    },
    "summary": "基于角色的 Skill 权限管控。",
    "methodCore": "RBAC Permission 将成熟的基于角色的访问控制（Role-Based Access Control）思想引入技能生态：不再对每个技能逐一授权，而是把权限收敛到「角色」这一中间层，用户/智能体通过被赋予角色获得对应技能与资源的调用能力。典型做法是定义角色—权限、用户—角色两级映射，为不同信任等级或职责的智能体划定可加载的技能范围、可访问的文件与工具、可触发的副作用边界，并遵循最小权限原则。相比信任式加载，RBAC 让技能调用权限可集中声明、审计与回收，便于在企业与多租户环境下做统一策略管理与合规追溯。在技能治理语境中，它是把「谁能用哪些技能、能做到什么程度」显式化的基础机制，可与技能清单、运行时访问控制等能力配合形成纵深防护。",
    "evaluation": "工程价值在于为技能调用提供可集中管理、可审计、可回收的权限模型，契合企业多租户、多信任等级的部署需求，并支持最小权限落地。适用于需要按职责隔离技能与资源、满足合规审计的组织级智能体平台；作为治理探索方向，其在动态技能生态中的粒度设计仍在打磨。",
    "mainFinding": "以角色为中间层收敛技能授权，使权限可集中声明、审计与回收，是组织级技能治理的基础控制面。",
    "limitations": "静态角色难以贴合动态生成、频繁演化的技能；粒度过粗会失效、过细则管理成本高，落地实践仍处探索期。",
    "related": [],
    "links": [],
    "citation": "RBAC Permission, Agent Skills 生态实践条目。"
  },
  {
    "id": "skill-source-git-versioning",
    "page": "skill",
    "title": "Git-based Versioning",
    "shortTitle": "Git-based Vers...",
    "category": "skill-governance",
    "maturity": "growing",
    "score": 0.525,
    "year": 2026,
    "venue": "Agent Skills 生态实践",
    "authors": "Agent Skills 社区/工程实践",
    "methodFamily": "skill governance",
    "tags": [
      "management",
      "skill governance",
      "active"
    ],
    "scores": {
      "clarity": 0.65,
      "evidence": 0.6,
      "reproducibility": 0.63,
      "adoption": 0.55,
      "selfEvolution": 0.43
    },
    "summary": "基于 Git 的 Skill 版本控制。",
    "methodCore": "Git-based Versioning 借助 Git 的分布式版本控制能力管理技能的演化：技能作为文本/文件包天然适配 Git 的差异比对、提交历史、分支与合并、标签发布等机制，使每一次技能的创建、修订与废弃都留痕可追溯。通过提交历史可回答「某个技能何时、由谁、为何变更」，通过分支与 Pull Request 可支持技能的协作评审与灰度发布，通过 tag/release 可锁定稳定版本供智能体可靠加载，出问题时可快速回滚。它把软件工程成熟的协作与审计范式迁移到技能资产，为技能治理提供 provenance（来源溯源）与变更控制的底座，并可与自动化测试、安全扫描（CI）结合，在技能进入生态前完成把关。",
    "evaluation": "工程价值在于以成熟、普及的 Git 工具链为技能提供可追溯的变更历史、协作评审、稳定版本发布与快速回滚，天然对接 CI 中的测试与安全扫描。适用于技能协作生产、市场分发前把关、以及需要来源溯源与审计的治理场景，是自进化智能体技能沉淀的实用基础设施。",
    "mainFinding": "把 Git 的版本、分支与审计范式迁移到技能资产，为技能演化提供来源溯源、协作评审与回滚能力。",
    "limitations": "Git 面向人类协作流程，对智能体高频自动生成/修改技能的场景可能产生噪声提交；版本控制本身不判定技能质量与安全。",
    "related": [],
    "links": [],
    "citation": "Git-based Versioning, Agent Skills 生态实践条目。"
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
    "methodCore": "SkillOS 针对 LLM 智能体常沦为「一次性问题求解器」、难以从历史交互中学习的问题，提出一套经验驱动的强化学习训练配方来学习技能策展（skill curation）。它把系统解耦为两部分:一个冻结的智能体执行器（executor）负责检索并应用技能，一个可训练的技能策展器（curator）负责根据累积经验更新外部技能库 SkillRepo。为给策展提供学习信号，作者设计复合奖励，并按「技能相关的任务依赖」把任务组织成分组任务流（grouped task streams）——较早的轨迹更新 SkillRepo，其后相关任务再来评估这些更新的效果，从而在间接、延迟的反馈下学习复杂的长程策展策略。相比依赖人工策展、启发式技能操作或只训练短程操作的既有方法，SkillOS 直面「如何从延迟反馈学习长期策展」这一瓶颈。分析显示，学到的策展器会产生更有针对性的技能使用，SkillRepo 中的技能随时间演化为结构更丰富、编码更高层元技能的 Markdown 文件。",
    "evaluation": "在多轮智能体任务与单轮推理任务上，SkillOS 在有效性与效率两方面均持续优于无记忆基线和强记忆基线；学到的策展器能跨不同执行器骨干与任务域泛化。abstract 未给出具体分数、基准名称与提升幅度，精确数值需查原文。",
    "mainFinding": "将技能策展建模为可用 RL 学习的长程策略，能在延迟反馈下学出可泛化的策展器，并使技能库演化出高层元技能。",
    "limitations": "abstract 未披露具体基准与数值；复合奖励与分组任务流设计较复杂，训练成本与在开放域生态的适配性仍待验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.06614"
      }
    ],
    "citation": "SkillOS. arXiv:2605.06614."
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
    "methodCore": "SLIM 代表面向技能生态的轻量级管理取向:在不引入重型系统的前提下，以尽量精简的机制完成技能的组织、检索与调用治理。其工程语义强调「轻」——低侵入、低配置成本、易嵌入现有智能体运行时，避免为技能管理背上过重的框架与依赖，从而适合个人开发者、边缘部署或快速原型场景。轻量框架通常聚焦最核心的治理动作，如技能索引与发现、按需加载、基本的元数据与版本追踪，而把复杂的编排、权限与安全审查留给可选插件或外部组件。作为治理光谱上与 AgentSkillOS、SkillNet 等「重基础设施」相对的一端，SLIM 体现了「用最小机制换取可用治理」的务实思路，其价值在于降低技能管理的门槛与运行开销。",
    "evaluation": "工程价值在于以最小机制、低配置与低运行开销提供可用的技能管理，降低接入门槛。适用于个人开发者、快速原型、资源受限或边缘部署场景，以及不需要重型编排/权限体系的轻量智能体。作为治理光谱的轻量一端，其能力覆盖有限，复杂治理需求需另配组件。",
    "mainFinding": "以最小机制换取可用治理，用低侵入、低开销的方式满足技能组织、发现与按需加载的核心需求。",
    "limitations": "轻量意味着能力边界受限，缺乏完善的编排、权限与安全审查；在大规模或高安全要求生态中需依赖外部组件补足。",
    "related": [],
    "links": [],
    "citation": "SLIM, Agent Skills 生态实践条目。"
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
    "methodCore": "MUSE-Autoskill（Memory-Utilizing Skill Evolution）针对既有方法把技能当作孤立、静态工件、限制复用与长期改进的问题，提出以技能为中心的智能体框架，在统一生命周期下管理技能:创建（creation）、记忆（memory）、管理（management）、评估（evaluation）与精炼（refinement）。MUSE 按需创建技能、跨任务存储、通过技能目录（skill catalog）检索，并为每个技能累积经验以供后续复用与适配——即用 Skill 级记忆把使用过程中的经验沉淀回技能本身。其核心主张是把技能视为「长生命周期、经验感知、可测试」的资产，而非一次性产物，从而在多任务流中不断提升复用性、可靠性与长期表现。这一生命周期化设计使自生成技能能够持续吸收执行反馈并迭代改进，是「让智能体自己养技能」这一自进化路线的代表。",
    "evaluation": "在 SkillsBench 与 SkillLearnBench 的主报告设置下，MUSE-Autoskill 优于 Hermes、Codex 与 Claude Code。在 SkillsBench 成功覆盖子集上，其自建技能超过人工撰写技能（85.24% 对 81.17%）;MUSE 生成的技能迁移到 Hermes 的效果也优于 Codex 或 Claude 生成的技能，迁移下达到 51.90% 准确率。",
    "mainFinding": "在统一生命周期下管理并经验化技能，可使自生成技能在覆盖子集上超越人工撰写（85.24% vs 81.17%）且更易迁移复用。",
    "limitations": "优势基于「成功覆盖子集」等特定报告设置，覆盖范围外表现未充分展开；生命周期五阶段编排较重，泛化与成本仍待验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.27366"
      }
    ],
    "citation": "MUSE-Autoskill. arXiv:2605.27366."
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
    "methodCore": "CODESKILL 面向编码智能体在求解软件工程任务时产生的丰富轨迹，主张把这些轨迹蒸馏为可复用的程序性技能（procedural skills）以支持自进化。针对既有方法依赖固定提示与启发式更新规则、不清楚知识该如何选择/抽象/维护的问题，CODESKILL 把「技能提取与技能库维护」重新表述为一个可学习的管理策略:它从编码智能体轨迹中提取多粒度程序性技能，用新经验演化技能，并维护一个紧凑的技能库供后续任务使用。训练采用强化学习，并用混合奖励——既有基于评分细则（rubric-based）的稠密技能质量反馈，又有来自冻结的下游智能体、可验证的稀疏执行反馈——共同驱动技能的选择、抽象与维护决策。其目标是在迭代构建中保持技能库规模稳定，避免无节制膨胀，同时让沉淀的技能真正提升下游编码任务表现。",
    "evaluation": "在 EnvBench、SWE-Bench Verified 与 Terminal-Bench 2 上，CODESKILL 相对无技能基线平均通过率提升 9.69，相对最强的基于提示或记忆的基线提升 4.01，且在迭代构建中保持技能库规模稳定。",
    "mainFinding": "将技能提取与维护重构为 RL 可学习的管理策略，用双粒度混合奖励驱动，平均通过率较无技能基线提升 9.69。",
    "limitations": "聚焦编码/软件工程领域，跨域泛化未展开；RL + 混合奖励训练依赖可执行验证环境，工程成本与稳定性仍需考量。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.25430"
      }
    ],
    "citation": "CODESKILL. arXiv:2605.25430."
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
    "methodCore": "SkillMaster 针对既有框架中技能的创建、精炼与选择多由外部教师、手工规则或辅助模块掌控、技能始终是「被调用的外部资源」而非智能体可内化能力的问题，提出一套训练框架，教会智能体在解题过程中自主创建新技能、精炼已有技能并选择累积技能。它有三项关键设计:其一，轨迹知情的技能复盘（trajectory-informed skill review），让智能体基于已完成回合的证据来提议、更新或保留技能;其二，每个候选技能编辑都由其在相关探针任务（probe tasks）上的反事实效用（counterfactual utility）来评估，为技能编辑决策提供直接学习信号;其三，提出 DualAdv-GRPO，分别估计「任务求解动作」与「技能编辑决策」的优势（advantage），以稳定任务求解与技能管理的联合训练。总体上，SkillMaster 把 LLM 智能体从「会用技能」推进到能自我发展、适配并应用自身技能库的「自我改进智能体」。",
    "evaluation": "在 ALFWorld 与 WebShop 上，SkillMaster 相对 SOTA 基线的总体成功率分别提升 8.8% 与 9.3%，在所有对比方法中取得最佳表现。进一步分析显示，训练后的智能体能识别技能失败、从轨迹证据精炼程序性知识，并以有限的技能库编辑把改进迁移到未来任务。",
    "mainFinding": "通过 DualAdv-GRPO 分离执行与管理优势，把技能管理内化为智能体自身能力，在 ALFWorld/WebShop 提升 8.8%/9.3% 达最佳。",
    "limitations": "验证集中于 ALFWorld、WebShop 两类交互任务，更广领域泛化未展开；联合训练机制较复杂，对训练稳定性与算力有一定要求。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.08693"
      }
    ],
    "citation": "SKILLMASTER. arXiv:2605.08693."
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
    "methodCore": "SkillBrew 针对检索增强型 LLM 智能体所依赖的技能库（skill bank，即可复用文本原则的集合）常以「只增不删」的追加方式扩张、不断堆入冗余、过时或有害技能、导致仓库低效且策展不良的问题，把技能库策展形式化为一个带约束的多目标问题:理想的技能库应当对智能体有用（useful）、内容多样（diverse）、并对查询分布有良好覆盖（coverage）。为此，SkillBrew 将策展刻画为「在效用约束下的帕累托感知（Pareto-aware）优化」，并通过一个双层的「提议—验证」（propose-then-verify）循环求解，从而在保证效用的前提下权衡多样性与覆盖率，识别出该删除、该修改、该保留的技能。其核心立场是:应把技能库当作需要有原则地策展的对象，而非无限增长的追加式日志，这被视为迈向自我改进 LLM 智能体的重要一步。",
    "evaluation": "作者在两个公开基准上评估该方法，结果支持其核心观点:把技能库当作需有原则策展的对象、而非只增不删的追加式日志，是构建自我改进 LLM 智能体的重要一步。abstract 未给出具体基准名称与数值指标，精确结果需查原文。",
    "mainFinding": "将技能库策展形式化为效用约束下的多目标（有用/多样/覆盖）帕累托优化，用双层提议-验证循环替代只增不删的膨胀。",
    "limitations": "abstract 仅在两个公开基准上定性验证、未披露数值;多目标优化的调参与「提议-验证」循环开销、有害技能判定标准的可靠性仍待观察。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2605.29440"
      }
    ],
    "citation": "SkillBrew. arXiv:2605.29440."
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
    "methodCore": "SkillGuard 针对当前技能生态大多依赖「信任式加载」与静态检查、在「技能能向智能体上下文注入什么」与「运行时能让智能体做什么」之间存在治理缺口、由此带来安全与隐私风险的问题，提出以技能为中心的权限框架，把技能视为「携带权限的可执行工件」。它引入双平面（dual-plane）治理模型，联合规制「上下文影响」与「动作副作用」两个层面，具体机制包括:技能清单（skill manifests）声明意图与能力、运行时访问控制、用户中介授权（user-mediated authorization）、默认拒绝（deny-by-default）执行、能力推断（capability inference）与行为监控。相比只做静态文件检查或只管单次工具调用的既有防御，SkillGuard 系统性地把技能「声明的意图」与其「运行时行为」连接起来，为技能生态的隐私与安全提供实用底座。",
    "evaluation": "在 315 个真实世界技能与 SkillInject 上评估:权限分类法覆盖 99.76% 的受保护对象，自动清单生成达到 91.0% F1。对抗评估中，SkillGuard 将上下文注入攻击成功率从 32.37% 降至 23.02%、明显注入从 25.56% 降至 16.67%，同时保持良性任务效用。",
    "mainFinding": "以「技能=携带权限的可执行工件」构建双平面权限框架，权限分类覆盖 99.76% 对象、清单生成 91.0% F1，并显著压低注入攻击成功率。",
    "limitations": "对抗攻击成功率仅被压低而未消除（仍有约 17%–23% 残余）；清单生成非完美，且依赖运行时监控，部署与性能开销需权衡。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.03024"
      }
    ],
    "citation": "SkillGuard. arXiv:2606.03024."
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
    "methodCore": "MalSkillBench 面向 Claude Code、Gemini CLI 等 AI 编码智能体加载第三方技能（捆绑自然语言指令、可执行脚本与工具权限的 Markdown 包）所引入的供应链风险——技能既是代码又是面向智能体的指令，其风险既非纯代码亦非纯提示。针对检测工具从未在覆盖这一混合空间的可验证 ground truth 上被度量、有效性未知且「仅野外样本」评估存在偏差的问题，作者构建首个经运行时验证的恶意技能基准:3,944 个恶意技能，沿三维分类法标注为 108 个单元（cell）。其中 3,214 个来自「生成—验证—反馈」闭环流水线，仅接纳在 Docker 沙箱中经系统调用监控与 LLM 裁判确认「恶意行为确实触发」的样本;另加入 703 个野外样本与 4,000 个匹配的良性技能。度量显示:代码注入验证成功率达 94.5%，提示注入仅 75.8%;野外样本狭窄，被单一加密货币盗窃活动主导（86.6% 为一种行为、81% 来自两个账户），并有一小撮攻击智能体控制平面的新型长尾。",
    "evaluation": "度量表明:最强的技能专用检测器在代码注入上召回达 98.4%，却在提示注入与智能体控制攻击上崩溃;仅用野外样本评分会使排名波动最多达 66 个召回点。供应链扫描器与提示注入防御各自只看到技能的一半，任何组合都无法恢复「代码—指令」关系，因此检测须联合推理任务意图、代码与指令。",
    "mainFinding": "首个运行时验证恶意技能基准（3944 技能/108 单元）揭示现有检测器在提示注入与控制平面攻击上全线崩溃，须联合推理意图、代码与指令。",
    "limitations": "野外样本狭窄且被单一盗币活动主导，代表性受限;基准由生成-验证流水线构造，可能与真实攻击分布存在偏差。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.07131"
      }
    ],
    "citation": "MalSkillBench. arXiv:2606.07131."
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
    "methodCore": "SkillWiki 从「知识由 Wikipedia 管理、软件由 GitHub 管理，而智能体技能仍缺乏规模化生产、治理与演化的基础设施」这一观察出发，提出一套「活的」（living）知识基础设施:通过把异构知识转化为可复用的技能资产、并与其原始证据（originating evidence）相链接，来支持技能的组织、grounding 与持续演化。其演示覆盖完整的技能生命周期——从知识摄取（ingestion）、技能生产（production），到来源感知的探索（provenance-aware exploration）、治理（governance）与执行驱动的演化（execution-driven evolution）。核心理念是让知识、技能与执行经验在同一共享基础设施内协同演化(co-evolve):技能不再是无源的孤立文本，而是可追溯到证据、可被治理、并在执行反馈中不断迭代的资产。这把技能管理从「算法优化问题」重新定位为「基础设施问题」，强调 provenance 与治理闭环。",
    "evaluation": "作为一项 demonstration（演示）工作，其价值在于呈现从知识摄取、技能生产到来源感知探索、治理与执行驱动演化的完整技能生命周期，并将技能与其原始证据链接以支持溯源治理。适用场景为需要大规模生产、审计与持续演化技能资产的生态平台;abstract 未提供量化基准，具体指标需查原文。",
    "mainFinding": "把技能管理重定位为基础设施问题，让知识、技能与执行经验在同一平台内溯源关联、协同演化，形成治理闭环。",
    "limitations": "本文为演示/基础设施工作，abstract 未给出量化评测;溯源链接与治理闭环在超大规模、异构知识源下的一致性与维护成本仍待验证。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.16523"
      }
    ],
    "citation": "SkillWiki. arXiv:2606.16523."
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
    "methodCore": "Locate-and-Judge 针对 LLM 智能体加载第三方技能（以用户权限执行的文件式指令包）所形成的新攻击面——单个恶意技能即可窃取数据、劫持智能体或作为供应链据点长期潜伏，而传统提示注入防御在此失效:它们依赖「可信指令 vs 不可信数据」的边界，但技能本身就是一大堆指令，被注入的命令混在众多合法指令中并继承其权限。为此，作者提出两阶段检测器:一个轻量「定位器」（locator）按每个结构化片段（span）所吸引的「指令跟随注意力」（instruction-following attention）打分，只保留 Top-K 高注意力片段;随后「判定器」（judge）对保留片段做细致审查。把昂贵的判定集中在少数高注意力片段上，使检测器能审计整个市场而非仅抽样。相比直接用 LLM 全量扫描，该方法带来约一个数量级的成本下降，以较小的召回代价大幅提升可扩展性，并在同等开销下优于关键词与正则基线。",
    "evaluation": "该方法以近乎可忽略的成本部署于市场级规模，以高 precision 标记技能，作者人工确认其中多数确为恶意，发现了数十个在线活跃恶意技能——包括数个伪装成良性功能者，以及许多 SkillSpector 与 Cisco Skill Scanner 未能检出的技能;作者并释出所得标注数据集。abstract 未给出统一的整体 precision/recall 数值。",
    "mainFinding": "用指令跟随注意力先定位、再判定，以约一个数量级更低成本实现市场级全量扫描，检出数十个连现有扫描器都漏掉的活跃恶意技能。",
    "limitations": "以较小召回代价换取成本与可扩展性，可能漏检低注意力隐匿攻击;判定质量依赖底层 LLM 与人工确认，precision 报告偏定性。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.23416"
      }
    ],
    "citation": "Locate-and-Judge. arXiv:2606.23416."
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
    "methodCore": "本条目对应论文《Runtime Skill Audit: Targeted Runtime Probing for Agent Skill Security》，提出 RSA（Runtime Skill Audit）动态分析方法。其出发点是:技能让 LLM 智能体复用指令、资源、工具与工作流，同时也成为恶意行为的新藏身处——一个技能在文档或代码中看似无害，却可能只在被特定用户请求、本地资产、持久状态或多步工具交互调用时才变得有害，这使纯静态审查变得脆弱。RSA 不用同一批通用任务测试所有技能，而是「审查技能中介的智能体在受控运行条件下实际做了什么」:它对风险相关接口做画像（profile risk-relevant interfaces）、准备触发这些接口所需的执行上下文，再依据由此产生的轨迹证据（trace evidence）赋予安全标签。作者在 OpenClaw 上实例化 RSA，并针对代表性静态基线做评测，验证动态审计相较静态审查在面对条件触发型与自进化攻击时的优势。（注:本条目 title 标为 SkillSpector，而输入所附论文实为 RSA;二者在文中被作为可比较对象出现。）",
    "evaluation": "在 OpenClaw 上对 100 个技能评测，RSA 达到 90.0% 准确率、88.0% 真阳性率与 8.0% 假阳性率，较最佳静态基线准确率提升 13.0 个百分点。在自进化攻击下，静态检测器在一两轮后即崩溃，而 RSA 跨多轮持续检出 20 个恶意技能中的 19–20 个。",
    "mainFinding": "以针对性运行时探测取代脆弱静态审查，在 100 技能上达 90.0% 准确率(较最佳静态基线 +13.0pp)，并在自进化攻击下持续检出 19–20/20。",
    "limitations": "评测规模为 100 技能、单一 OpenClaw 环境;运行时探测需构造执行上下文与画像风险接口，成本较高，且条目 title(SkillSpector)与所附论文(RSA)存在名实差异。",
    "related": [],
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.11671"
      }
    ],
    "citation": "SkillSpector. arXiv:2606.11671."
  }
];
