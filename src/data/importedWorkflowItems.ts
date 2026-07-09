import type { RadarItem } from "./radarData";

export const importedWorkflowItems: RadarItem[] = [
  {
    "id": "workflow-aflow",
    "figures": [{"src": "figures/workflow-aflow.png", "caption": "AFlow · 架构/流程示意"}], "page": "workflow",
    "title": "AFlow: Automating Agentic Workflow Generation",
    "shortTitle": "AFlow",
    "category": "workflow-search",
    "maturity": "mature",
    "score": 0.88,
    "year": 2024,
    "venue": "ICLR 2025",
    "authors": "Jiayi Zhang, Jinyu Xiang, Zhaoyang Yu et al.",
    "methodFamily": "蒙特卡洛树搜索流程优化",
    "tags": [
      "流程搜索",
      "MCTS",
      "代码化流程",
      "执行反馈",
      "算子"
    ],
    "scores": {
      "clarity": 0.9,
      "evidence": 0.88,
      "reproducibility": 0.82,
      "adoption": 0.86,
      "selfEvolution": 0.82
    },
    "summary": "把智能体工作流优化重新表述为在「代码表示的流程」空间上的搜索问题,用蒙特卡洛树搜索结合代码修改、树形经验与执行反馈自动发现高效流程,六个基准平均超基线 5.7%,并让小模型以 GPT-4o 4.55% 的成本超过后者。",
    "methodCore": "AFlow 面对的现实是:大模型解决复杂任务时通常依赖一套遵循详细指令与操作序列的智能体工作流,但这些流程的构建需要大量人工,严重限制了可扩展性与泛化性。此前尝试自动化流程生成与优化的方法仍然依赖初始的人工设置,离「完全自动、且真正有效」的目标还有距离。AFlow 的出发点,就是把流程构建从人工调试彻底解放出来。\n\n## 把流程优化重述为搜索问题\nAFlow 的核心贡献在于一次表述上的转换:它把工作流优化重新表述为在「代码表示的工作流」空间中的搜索问题——在这个空间里,调用大模型的节点由边连接起来,整条流程就是一段可执行的代码。这一表述的好处是,流程的结构、控制流、算子的组合方式都变成了可被程序化搜索、程序化修改的对象,而不再是靠人手写的固定模板。把「设计流程」变成「搜索代码」,是整套方法能够自动化的前提。\n\n## 蒙特卡洛树搜索与三重反馈机制\n在这个搜索空间之上,AFlow 引入了一个自动化框架,用蒙特卡洛树搜索(Monte Carlo Tree Search)高效地探索。它通过三种手段迭代地精修流程:一是代码修改,直接在代码层面调整节点与连接;二是树形结构的经验,把历史上探索过的分支组织成树,让后续搜索能利用先前积累的经验而非从零试探;三是执行反馈,用流程实际跑出来的结果来指导下一步该往哪个方向扩展。树搜索的价值在于它能在「利用已知有效结构」与「探索新结构」之间取得平衡,避免陷入局部最优,也避免盲目穷举带来的成本爆炸。\n\n## 实证结果与对小模型的意义\n在六个基准数据集上的实证评估证明了 AFlow 的有效性:相较当时最强的基线取得平均 5.7% 的提升。更具启发性的一点是,AFlow 让更小的模型能在特定任务上超过 GPT-4o,而推理成本仅为后者的 4.55%(以美元计)。这说明经过系统搜索得到的流程结构本身就承载了相当一部分「智能」——好的流程可以补偿模型能力的不足,让弱模型跑出强模型的效果。\n\n## 对自我进化的价值\n从自我进化的视角看,AFlow 展示了一条清晰的路径:当流程被表示为可执行、可修改的代码,并配以执行反馈驱动的搜索,智能体系统就能够不依赖人工干预地持续改良自身的解题流程。它把「流程设计」这一长期依赖专家经验的环节转化为一个可自动优化的闭环,为后续一系列自动化流程生成工作奠定了搜索式优化的范式基础,也让「用更省的模型跑出更好的结果」成为工程上可达的目标。值得强调的是,AFlow 把经验组织成树形结构这一设计,让每一次搜索都不是孤立试探,而是能复用此前分支上积累的成败信息,从而在有限的执行预算内更快逼近高质量流程,这种「经验可积累、可复用」的特性正是自我进化系统区别于一次性优化的核心所在。",
    "evaluation": "在六个基准数据集上与当时最强基线比较,AFlow 取得平均 5.7% 的提升;同时验证成本维度,展示搭配 AFlow 搜索出的流程后,小模型可在特定任务上超过 GPT-4o,而推理成本仅为其 4.55%(按美元计),说明流程结构本身能补偿模型能力差距。",
    "mainFinding": "把工作流优化重述为代码空间上的搜索,并用蒙特卡洛树搜索结合代码修改、树形经验与执行反馈迭代精修,能自动发现比人工 prompt 调试更稳定高效的流程;经搜索的流程可让小模型以极低成本超过更强模型。",
    "limitations": "每次候选流程都需真实执行评估,搜索的计算与调用成本较高;搜索空间(节点、算子、边的定义)仍需人工设定,其设计会显著影响最终结果质量。",
    "related": [
      "workflow-evoflow",
      "workflow-scoreflow",
      "workflow-maas"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2410.10762"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2410.10762"
      },
      {
        "label": "代码",
        "href": "https://github.com/FoundationAgents/AFlow"
      }
    ],
    "citation": "AFlow: Automating Agentic Workflow Generation, ICLR 2025."
  },
  {
    "id": "workflow-evoflow",
    "figures": [{"src": "figures/workflow-evoflow.png", "caption": "EvoFlow · 架构/流程示意"}], "page": "workflow",
    "title": "EvoFlow: Evolving Diverse Agentic Workflows On The Fly",
    "shortTitle": "EvoFlow",
    "category": "workflow-search",
    "maturity": "growing",
    "score": 0.78,
    "year": 2025,
    "venue": "arXiv 2025",
    "authors": "Guibin Zhang, Kaijie Chen, Guancheng Wan et al.",
    "methodFamily": "小生境进化算法流程种群",
    "tags": [
      "进化算法",
      "种群多样性",
      "异构模型",
      "复杂度自适应",
      "成本"
    ],
    "scores": {
      "clarity": 0.82,
      "evidence": 0.8,
      "reproducibility": 0.72,
      "adoption": 0.62,
      "selfEvolution": 0.85
    },
    "summary": "针对现有自动化流程缺乏模型异构性、只做单目标优化的问题,提出基于小生境进化算法的 EvoFlow,自动搜索一整个「异构且复杂度自适应」的流程种群,而非单一同质流程,七个基准上超越前人 1.23%~29.86%,并以 12.4% 成本超过 o1-preview。",
    "methodCore": "EvoFlow 观察到过去两年多智能体系统的演化轨迹:从劳动密集的纯人工设计,到部分自动化(如 prompt 工程、通信拓扑),再到完全自动化设计。但作者指出,现有的自动化流程管线往往缺乏大模型的异构性,并且只聚焦单一目标的性能优化,这限制了它们把较弱模型组合起来、给出更定制化且更经济方案的潜力。EvoFlow 的立意,就是不再追求一个单一而复杂的流程,而是搜索一整个多样化的流程群体。\n\n## 从单一流程到异构流程种群\nEvoFlow 是一个基于小生境进化算法(niching evolutionary algorithm)的框架,用来自动搜索一个由异构、且复杂度自适应的智能体流程构成的种群,而不是单个同质、复杂的流程。这一转变很关键:不同的查询难度差异很大,简单的输入输出任务不该动用与复杂多轮交互同样重的流程。让种群中同时存在从简单到复杂的多种流程,系统就能按需匹配,既省成本又保效果。\n\n## 四个进化算子\n技术上,EvoFlow 由四个环节构成。其一是基于标签的检索(tag-based retrieval),从流程种群中抽取父代流程;其二是交叉(crossover),把父代流程的结构片段重组产生新流程;其三是变异(mutation),对流程做局部改动引入新变化;其四是基于小生境的选择(niching-based selection),用来维持种群的多样性与质量。小生境选择是防止「早熟收敛」的关键——它避免整个种群迅速趋同到少数几个结构,从而保留探索空间。\n\n## 三重实证优势\n在七个基准上的广泛评估表明 EvoFlow 具备三重特性。其一是多样性:它演化出的流程群体覆盖从简单 I/O 任务到复杂多轮交互的宽广范围。其二是高性能:相较此前人工设计与自动化的流程,取得 1.23% 到 29.86% 的提升。其三是经济性:用较弱的开源模型,以 o1-preview 推理成本的 12.4% 就超过了它。这组结果印证了「组合弱模型 + 多样化流程」路线的可行性。\n\n## 对自我进化的价值\nEvoFlow 把进化计算的种群思想引入流程自动化,给自我进化系统提供了一个重要视角:进化的目标不应是收敛到唯一最优解,而是维持一个多样、互补的解集,让系统能对不同难度、不同领域的查询动态取用。异构性与复杂度自适应让系统能把昂贵的强模型只用在真正需要的地方,把简单任务交给便宜的弱模型流程,从而在整体上实现更优的性能—成本权衡,这正是可持续自我进化所需要的经济学基础。换个角度看,EvoFlow 维护的是一个「解的生态」而非「唯一冠军」,当环境或任务分布发生变化时,种群中原本次优的流程可能迅速补位,这种冗余与多样性赋予了系统更强的鲁棒性与迁移能力,也让持续演化不至于因过早收敛而丧失应变空间。",
    "evaluation": "在七个基准上评估,验证三重特性:多样性(演化出覆盖简单 I/O 到复杂多轮交互的流程群体)、高性能(较人工与自动化流程提升 1.23%~29.86%)、经济性(用较弱开源模型以 o1-preview 12.4% 的推理成本超过它),并对比不同选择策略对种群多样性的影响。",
    "mainFinding": "用小生境进化算法搜索一个异构、复杂度自适应的流程种群,而非单一同质复杂流程,能兼顾多样性、性能与成本;小生境选择有效抑制早熟收敛,组合弱模型即可超过强模型。",
    "limitations": "维护并评估流程种群需要大量候选执行,复现与搜索成本较高;标签检索与小生境选择的超参设计影响种群质量与收敛行为。",
    "related": [
      "workflow-aflow",
      "workflow-evoagent",
      "workflow-maas"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2502.07373"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2502.07373"
      }
    ],
    "citation": "EvoFlow: Evolving Diverse Agentic Workflows On The Fly, arXiv 2025."
  },
  {
    "id": "workflow-scoreflow",
    "figures": [{"src": "figures/workflow-scoreflow.png", "caption": "ScoreFlow · 架构/流程示意"}], "page": "workflow",
    "title": "ScoreFlow: Mastering LLM Agent Workflows via Score-based Preference Optimization",
    "shortTitle": "ScoreFlow",
    "category": "workflow-search",
    "maturity": "growing",
    "score": 0.76,
    "year": 2025,
    "venue": "arXiv 2025",
    "authors": "Yinjie Wang, Ling Yang, Guohao Li et al.",
    "methodFamily": "连续空间梯度化流程优化",
    "tags": [
      "连续优化",
      "Score-DPO",
      "偏好优化",
      "定量反馈",
      "可扩展"
    ],
    "scores": {
      "clarity": 0.83,
      "evidence": 0.81,
      "reproducibility": 0.75,
      "adoption": 0.6,
      "selfEvolution": 0.8
    },
    "summary": "针对离散优化方法在表示能力、适应性与可扩展性上的局限,提出在连续空间做高效梯度优化的 ScoreFlow,并引入能纳入定量反馈的 Score-DPO(直接偏好优化的新变体),六个基准上较基线提升 8.2%,让小模型以更低成本超过大模型。",
    "methodCore": "ScoreFlow 关注的是自动化流程优化方法普遍存在的一个短板:它们大多依赖离散优化技术,因而在表示能力上受限、缺乏适应性、可扩展性也差。当流程被当作离散对象来搜索时,优化过程难以平滑地利用梯度信息,也难以随规模增长而高效扩展。ScoreFlow 想做的,是把流程优化搬到连续空间里,用梯度来驱动。\n\n## 从离散搜索到连续梯度优化\nScoreFlow 是一个简单却高性能的框架,它利用连续空间中高效的、基于梯度的优化来克服上述挑战。相比在离散结构上做组合搜索,连续空间的梯度优化能够更平滑地探索流程配置,更容易随问题规模扩展,也更灵活地适应不同任务。这一选择是 ScoreFlow 区别于 AFlow 等树搜索方法的关键分野:后者在离散代码空间做树搜索,前者则把优化放到可微的连续空间。\n\n## Score-DPO:纳入定量反馈的偏好优化\nScoreFlow 的核心技术是 Score-DPO——直接偏好优化(Direct Preference Optimization)方法的一个新变体。传统 DPO 只利用「A 比 B 好」这样的成对偏好,而 Score-DPO 进一步把定量反馈纳入考虑,也就是不仅知道哪个流程更好,还知道它好多少。把分数信号引入偏好优化,使得优化过程能更细腻地区分候选流程之间的差距,而不是只做二元的优劣判断,从而更充分地利用执行评估提供的信息量。\n\n## 跨任务的实证表现\n在覆盖问答、编程与数学推理的六个基准上,ScoreFlow 相较现有基线取得了 8.2% 的提升。更值得注意的是,它使较小的模型能够以更低的推理成本超过更大的模型。这一结果与该方向的其他工作相互呼应:一套经过良好优化的流程能够放大小模型的能力,在成本敏感的部署场景中具有直接的实用价值。\n\n## 对自我进化的价值\nScoreFlow 为流程自我进化提供了一条「可微化」的技术路线。把流程优化转化为连续空间中的梯度问题,并用带定量反馈的偏好优化来学习,意味着系统的改良过程可以更平滑、更可扩展地进行,而不必受限于离散搜索的组合爆炸。这种以分数为信号、以梯度为引擎的优化范式,让智能体流程的持续自我改良在算法层面更接近成熟的机器学习优化框架,也更容易与后续的强化学习、偏好学习方法衔接。进一步说,Score-DPO 把「好多少」而非仅仅「谁更好」纳入学习目标,意味着优化器能感知候选流程之间的细粒度差距,在众多接近的候选中分辨出真正值得强化的方向,避免了二元偏好下常见的信息浪费;这种对定量反馈的充分利用,使 ScoreFlow 在样本效率与优化平滑度上都更具优势,为流程的连续、可微自我进化提供了扎实的算法支撑。",
    "evaluation": "在覆盖问答、编程与数学推理的六个基准上评估,ScoreFlow 较现有基线提升 8.2%;并验证成本维度,展示较小模型经 ScoreFlow 优化后能以更低推理成本超过更大模型,同时对比离散优化基线在适应性与扩展性上的差距。",
    "mainFinding": "把流程优化放到连续空间做基于梯度的优化,并用能纳入定量反馈的 Score-DPO 学习偏好,比依赖离散优化的方法更灵活、可扩展,六基准提升 8.2%,并让小模型以更低成本超过大模型。",
    "limitations": "连续空间优化依赖可靠的定量反馈信号来构造 Score-DPO 目标,反馈噪声会影响优化质量;偏好数据的采集与执行评估仍带来成本。",
    "related": [
      "workflow-aflow",
      "workflow-flowreasoner",
      "workflow-adaptflow"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2502.04306"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2502.04306"
      },
      {
        "label": "代码",
        "href": "https://github.com/Gen-Verse/ScoreFlow"
      }
    ],
    "citation": "ScoreFlow: Mastering LLM Agent Workflows via Score-based Preference Optimization, arXiv 2025."
  },
  {
    "id": "workflow-evoagent",
    "figures": [{"src": "figures/workflow-evoagent.png", "caption": "EvoAgent · 架构/流程示意"}], "page": "workflow",
    "title": "EvoAgent: Towards Automatic Multi-Agent Generation via Evolutionary Algorithms",
    "shortTitle": "EvoAgent",
    "category": "workflow-search",
    "maturity": "growing",
    "score": 0.74,
    "year": 2024,
    "venue": "NAACL 2025",
    "authors": "Siyu Yuan, Kaitao Song, Jiangjie Chen et al.",
    "methodFamily": "进化算法多智能体扩展",
    "tags": [
      "进化算法",
      "多智能体生成",
      "变异",
      "交叉",
      "通用扩展"
    ],
    "scores": {
      "clarity": 0.81,
      "evidence": 0.78,
      "reproducibility": 0.74,
      "adoption": 0.6,
      "selfEvolution": 0.83
    },
    "summary": "针对现有多智能体工作重度依赖人工设计框架、限制功能范围与可扩展性的问题,提出用进化算法把「专才智能体」自动扩展为多智能体系统的通用方法 EvoAgent,把已有框架当作初始个体,施加变异、交叉、选择等算子生成多样设置的多个智能体。",
    "methodCore": "EvoAgent 关注的问题是:强大的大模型催生了用于解决复杂任务的自主智能体,尤其是多智能体系统,但现有工作严重依赖人工设计的框架,这极大限制了智能体系统的功能范围与可扩展性。如何自动地把一个专门的智能体扩展成多智能体系统以提升解题能力,仍是一个重大挑战。EvoAgent 试图用进化算法来回答这个问题。\n\n## 把已有框架当作进化的初始个体\nEvoAgent 是一个通用方法,通过进化算法自动地把专门的智能体扩展为多智能体系统,从而提升基于大模型的智能体的解题效果。它的巧妙之处在于起点的选择:把现有的智能体框架视作进化中的「初始个体」,而不是从空白开始。这意味着 EvoAgent 不需要推倒重来,而是站在既有设计的肩膀上,通过进化把单个专才逐步扩展、繁衍为一支多样化的智能体队伍。\n\n## 变异、交叉与选择算子\n在初始个体之上,EvoAgent 施加一系列进化算子——如变异(mutation)、交叉(crossover)、选择(selection)等——来生成具有多样设置的多个智能体。变异让单个智能体的配置产生局部变化,交叉让不同智能体的特征重组,选择则保留表现更好的个体。通过这套算子的反复作用,一个原本单一的专才智能体被扩展成一组设置各异、彼此互补的智能体,共同构成一个多智能体系统。这种做法把「设计多智能体系统」的难题,转化为「让进化算子在已有框架上自动繁衍」的过程。\n\n## 通用性:可套用到任意框架\n实验结果表明,EvoAgent 能显著增强基于大模型的智能体的解题能力,并且可以泛化到任意基于大模型的智能体框架,把它们扩展为多智能体系统。这种「框架无关」的通用性是 EvoAgent 的重要卖点:它不是又一个具体的多智能体系统,而是一种可以叠加在各种现有系统之上的自动扩展机制,因此具有很强的可组合性和适用面。\n\n## 对自我进化的价值\nEvoAgent 体现了自我进化的一个朴素而有力的思路:不必从零构造复杂系统,而是让进化算子在已有设计上持续繁衍与筛选,系统便能自动地把单个能力扩展成协作群体。把生物进化中的变异—交叉—选择迁移到智能体设计上,为「智能体系统如何在无人工干预下自动壮大」提供了一个通用范式,也让「一个专才自动长成一支队伍」成为可操作的工程路径。尤其值得注意的是,EvoAgent 以现有框架作为初始个体的做法,意味着社区多年积累的优秀智能体设计都能被当作进化的种子而非被抛弃,进化过程因此既保留了人类先验,又能在其上探索出人工难以预想的新组合;这种「站在已有设计上继续进化」的思路,大幅降低了自动扩展的起步门槛,也让方法能够随着基础智能体的进步而水涨船高。",
    "evaluation": "在多种任务上评估,结果显示 EvoAgent 能显著增强基于大模型的智能体的解题能力,并验证其框架无关的通用性——可泛化到任意基于大模型的智能体框架,把单个专才智能体自动扩展为多智能体系统。",
    "mainFinding": "用进化算法把现有智能体框架当作初始个体,施加变异、交叉、选择等算子,可自动把单个专才智能体扩展为多样化的多智能体系统,显著提升解题能力,且方法与具体框架无关、可通用套用。",
    "limitations": "进化算子生成的大量候选智能体都需评估,计算成本随种群增长;扩展质量依赖初始个体的设计与算子设置,选择信号的可靠性影响最终系统表现。",
    "related": [
      "workflow-evoflow",
      "workflow-aflow",
      "workflow-symbolic"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2406.14228"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2406.14228"
      },
      {
        "label": "项目主页",
        "href": "https://evo-agent.github.io/"
      }
    ],
    "citation": "EvoAgent: Towards Automatic Multi-Agent Generation via Evolutionary Algorithms, NAACL 2025."
  },
  {
    "id": "workflow-autoflow",
    "page": "workflow",
    "title": "AutoFlow: Automated Workflow Generation for Large Language Model Agents",
    "shortTitle": "AutoFlow",
    "category": "workflow-search",
    "maturity": "growing",
    "score": 0.72,
    "year": 2024,
    "venue": "arXiv 2024",
    "authors": "Zelong Li, Shuyuan Xu, Kai Mei et al.",
    "methodFamily": "自然语言程序流程生成",
    "tags": [
      "自然语言程序",
      "流程生成",
      "微调",
      "上下文学习",
      "迭代优化"
    ],
    "scores": {
      "clarity": 0.8,
      "evidence": 0.75,
      "reproducibility": 0.74,
      "adoption": 0.58,
      "selfEvolution": 0.78
    },
    "summary": "针对人工设计流程费力且需领域知识、难以大规模部署的问题,提出以自然语言程序为流程格式、并用迭代优化提升流程质量的 AutoFlow,同时给出微调式与上下文式两种生成方法,分别适配开源与闭源模型,生成稳健可靠的智能体流程。",
    "methodCore": "AutoFlow 针对的是一个部署层面的痛点:为保证大模型智能体遵循有效而可靠的流程来完成任务,人们通常用人工设计的工作流来引导智能体的工作机制,但人工设计流程需要相当的精力与领域知识,使得在海量规模上开发与部署智能体变得困难。AutoFlow 的目标就是把流程生成自动化,让智能体能规模化地拥有可靠流程。\n\n## 以自然语言程序作为流程格式\nAutoFlow 是一个自动为智能体生成流程以解决复杂任务的框架。它采用自然语言程序(natural language program)作为智能体流程的格式。这一选择兼具可读性与可执行性:自然语言程序既能被大模型理解与生成,又保留了程序的结构化控制流,人类也能直接阅读与审查。作者认为,用自然语言自动生成并解释流程,代表了解决复杂任务的一种有前景的范式,尤其是在大模型快速发展的背景下。\n\n## 迭代式流程优化\n在生成之外,AutoFlow 还引入了一个流程优化过程,迭代地提升流程质量。也就是说,生成出来的流程不是一锤定音,而是要经过反复打磨:根据反馈不断修订,直至得到稳健可靠的版本。这种「生成—优化」的闭环,是保证自动生成流程质量的关键,避免了一次性生成带来的脆弱性。\n\n## 两种生成方法适配开源与闭源模型\nAutoFlow 提供了两种流程生成方法:基于微调(fine-tuning-based)的方法与基于上下文(in-context-based)的方法。前者适用于可以训练权重的开源模型,后者则通过上下文学习适配无法微调的闭源模型。这样的双路线设计让 AutoFlow 框架既能用在开源模型上,也能用在闭源模型上,大大拓宽了适用范围——无论用户手中的是哪一类模型,都能享受自动流程生成的收益。\n\n## 对自我进化的价值\nAutoFlow 强调「自然语言流程的自动生成与解释」是一条有前景的范式,这对自我进化很有意义:当流程以自然语言程序的形式存在,它既可被模型自动改写,也可被人类审查与纠正,形成人机协同的可持续改良回路。加上迭代优化机制与对开源/闭源模型的双重适配,AutoFlow 让「大规模、自动、可解释地为智能体配备可靠流程」成为工程上可落地的方案,降低了智能体系统规模化部署的门槛。更深一层看,以自然语言作为流程载体还带来一种独特的可迁移性:同一段流程描述几乎不加改动就能在不同模型间复用,人类专家也能直接介入修改某一步骤而无需理解底层代码,这让流程知识的沉淀、复用与人机共同维护都变得自然;当自动生成与人工审查能够在同一份自然语言流程上无缝协作时,智能体系统的可靠性改良便获得了一条兼顾效率与可控性的持续演化通道。",
    "evaluation": "实验结果表明 AutoFlow 框架能产出稳健可靠的智能体流程;通过对比微调式与上下文式两种生成方法,验证框架分别在开源与闭源模型上的适用性,并展示迭代优化过程对流程质量的提升作用。",
    "mainFinding": "以自然语言程序作为流程格式、配合迭代式流程优化,可自动生成稳健可靠的智能体流程;微调式与上下文式两种方法分别适配开源与闭源模型,让自动流程生成的适用范围覆盖两类模型。",
    "limitations": "自然语言程序的表达能力与解析可靠性影响复杂流程的生成;迭代优化依赖有效的反馈信号,流程质量在缺乏领域知识时仍可能受限。",
    "related": [
      "workflow-aflow",
      "workflow-workflowgen",
      "workflow-adaptflow"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2407.12821"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2407.12821"
      },
      {
        "label": "代码",
        "href": "https://github.com/agiresearch/AutoFlow"
      }
    ],
    "citation": "AutoFlow: Automated Workflow Generation for Large Language Model Agents, arXiv 2024.",
    "figures": [
      {
        "src": "figures/workflow-autoflow.png",
        "caption": "AutoFlow 概览:以自然语言程序表示智能体流程,并用强化学习式奖励迭代优化流程质量的整体生成过程。"
      }
    ]
  },
  {
    "id": "workflow-flowreasoner",
    "page": "workflow",
    "title": "FlowReasoner: Reinforcing Query-Level Meta-Agents",
    "shortTitle": "FlowReasoner",
    "category": "workflow-rl",
    "maturity": "growing",
    "score": 0.8,
    "year": 2025,
    "venue": "arXiv 2025",
    "authors": "Hongcheng Gao, Yue Liu, Yufei He et al.",
    "methodFamily": "推理式元智能体强化学习",
    "tags": [
      "查询级",
      "元智能体",
      "强化学习",
      "执行反馈",
      "推理蒸馏"
    ],
    "scores": {
      "clarity": 0.84,
      "evidence": 0.82,
      "reproducibility": 0.78,
      "adoption": 0.64,
      "selfEvolution": 0.86
    },
    "summary": "提出查询级元智能体 FlowReasoner,为每一条用户查询单独设计一套多智能体系统;先蒸馏 DeepSeek R1 赋予其生成多智能体系统的推理能力,再用带执行反馈的强化学习强化,三个基准上准确率超过 o1-mini 10.52%。",
    "methodCore": "FlowReasoner 关注的问题是:过去的自动化多智能体系统设计大多在「任务级」上做优化——为一整类任务找一套固定流程,却忽视了同一类任务里不同查询之间的巨大差异。作者主张把粒度下沉到「查询级」,即为每一条用户查询单独生成一套量身定制的多智能体系统,一查询一系统。要实现这一点,关键是造出一个能够「推理着去设计系统」的元智能体。\n\n## 查询级元智能体的立意\nFlowReasoner 是一个查询级的元智能体(meta-agent),它的职责不是直接解题,而是为每一条进来的查询即时设计出一套多智能体系统去解题。相比任务级方法把一套流程套用到所有同类查询,查询级设计能针对当前查询的具体难度、结构与约束做定制,从而更贴合真实需求。这一粒度的转变,是 FlowReasoner 区别于 AFlow 等任务级搜索方法的根本分野。\n\n## 两阶段训练:推理蒸馏 + 强化学习\nFlowReasoner 的能力通过两个阶段获得。第一阶段是推理能力的注入:作者通过蒸馏 DeepSeek R1,把「如何生成多智能体系统」的基础推理能力赋予 FlowReasoner,让它一开始就具备关于系统设计的思考链条。第二阶段是强化:在此基础上,用带外部执行反馈的强化学习进一步增强它——让它设计的系统真实跑起来,再用跑出来的结果去回馈训练。这种「先蒸馏推理、再用执行反馈强化」的组合,让元智能体既懂得如何推理设计,又能被真实效果不断校准。\n\n## 多目标奖励:性能、复杂度与效率\n强化学习的方向由一个多目标奖励(multi-purpose reward)引导,它从三个维度评价被设计出来的系统:性能(解题是否正确)、复杂度(系统是否过度臃肿)、效率(运行代价是否可接受)。把这三者同时纳入奖励,使得 FlowReasoner 不会一味追求正确率而堆砌复杂系统,而是在正确、简洁、高效之间寻求平衡。正是这种多维奖励,让「审慎推理式」的系统生成有了明确的优化靶心。\n\n## 实证与对自我进化的价值\n在工程代码与竞赛代码两类基准上的实验证明了 FlowReasoner 的优越性,尤其是它在三个基准上以 10.52% 的准确率优势超过了 o1-mini。从自我进化的视角看,FlowReasoner 展示了一条把「推理」与「执行反馈强化」结合起来自动设计智能体系统的路线:元智能体不是靠人手调参,而是通过真实运行结果不断学习「怎样的系统适合怎样的查询」。这种以查询为单位、以执行反馈为信号、以强化学习为引擎的自我改良机制,让智能体系统的设计过程本身变成了一个可持续学习、越用越聪明的闭环,也让「因材施教」式的按需系统生成成为可能——每一条查询都能得到最契合它的解法,而非被迫套用一套万能却平庸的模板。",
    "evaluation": "在工程代码与竞赛代码两类基准上评估,FlowReasoner 展现出对任务级基线的优越性;跨三个基准的准确率比 o1-mini 高出 10.52%,并通过多目标奖励验证其在性能、复杂度与效率三个维度上的均衡表现。",
    "mainFinding": "把多智能体系统设计下沉到查询级,先蒸馏 R1 注入推理能力、再用带执行反馈的强化学习和多目标奖励强化,能为每条查询即时生成量身定制的系统,准确率超过 o1-mini 10.52%。",
    "limitations": "为每条查询单独生成系统并真实执行以获取反馈,推理与训练成本较高;推理能力依赖蒸馏源模型的质量,奖励中性能、复杂度、效率三者的权衡需要人工设定。",
    "related": [
      "workflow-scoreflow",
      "workflow-dyflow",
      "workflow-aflow"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2504.15257"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2504.15257"
      },
      {
        "label": "代码",
        "href": "https://github.com/sail-sg/FlowReasoner"
      }
    ],
    "citation": "FlowReasoner: Reinforcing Query-Level Meta-Agents, arXiv 2025.",
    "figures": [
      {
        "src": "figures/workflow-flowreasoner.png",
        "caption": "FlowReasoner 概览:查询级元智能体经推理蒸馏与执行反馈强化学习,为每条查询生成定制的多智能体系统。"
      }
    ]
  },
  {
    "id": "workflow-dyflow",
    "page": "workflow",
    "title": "DyFlow: Dynamic Workflow Framework for Agentic Reasoning",
    "shortTitle": "DyFlow",
    "category": "workflow-rl",
    "maturity": "growing",
    "score": 0.76,
    "year": 2025,
    "venue": "arXiv 2025",
    "authors": "Yanbo Wang, Zixiang Xu, Yue Huang et al.",
    "methodFamily": "设计器-执行器动态流程",
    "tags": [
      "动态流程",
      "中间反馈",
      "子目标分解",
      "动态算子",
      "跨域泛化"
    ],
    "scores": {
      "clarity": 0.83,
      "evidence": 0.8,
      "reproducibility": 0.76,
      "adoption": 0.6,
      "selfEvolution": 0.83
    },
    "summary": "针对现有自动流程绑定特定数据集、少用中间反馈、算子预定义僵化的问题,提出由「设计器」与「执行器」构成的动态流程框架 DyFlow,依据任务需求与实时中间反馈自适应构造并调整推理过程,在社会推理、生物医学、数学与代码等多域上显著超越基线。",
    "methodCore": "DyFlow 关注的是自动流程生成方法普遍存在的三重局限:一是大多依赖人工设计的固定流程,难以跨任务适配;二是少数尝试自动生成的方法往往绑定特定数据集或查询类型,对中间反馈利用有限,削弱了系统的鲁棒性与推理深度;三是它们的操作(算子)通常是预定义且不灵活的。DyFlow 的目标,是让流程能够依据任务需求与实时反馈动态地生长与调整。\n\n## 设计器与执行器的双核结构\nDyFlow 由两个核心组件构成:设计器(designer)与执行器(executor)。设计器负责把复杂问题分解为一串由高层目标定义的子目标(sub-goals),并根据中间输出与反馈动态规划下一步该做什么;执行器则负责把这些计划落地,用动态算子(dynamic operators)执行每一步操作。这种「先规划、再执行,且规划随反馈滚动更新」的分工,让流程不再是一次性排定的静态管线,而是能边跑边调的动态过程。\n\n## 基于中间反馈的动态规划\nDyFlow 的关键特性是充分利用中间反馈。设计器不会一次性把整条流程排死,而是依据执行器产生的中间输出和反馈,动态地规划后续步骤。这意味着当某一步的结果不理想时,系统能及时调整方向,而不是沿着既定但可能错误的路径一路走到底。对中间反馈的这种敏感,是 DyFlow 相较「预定义流程」方法在鲁棒性与推理深度上的核心优势来源。\n\n## 上下文感知的动态算子\n执行器使用带上下文感知参数化(context-aware parameterization)的动态算子来执行每一步操作。与预定义、固定参数的算子不同,动态算子能根据当前上下文调整自身行为,从而实现灵活且语义扎实(semantically grounded)的推理。算子不再是僵硬的固定模块,而是能因地制宜地适配当前子目标的可变工具,这让同一套框架能覆盖差异极大的任务类型。\n\n## 跨域实证与对自我进化的价值\n作者在社会推理、生物医学、数学问题求解与代码生成等多个领域上系统评估了 DyFlow,结果显示它显著超越现有基线,取得可观的 Pass@k 提升,并在多样领域上展现出稳健的泛化能力。从自我进化的视角看,DyFlow 提供了一种「运行时自适应」的思路:流程不是在离线搜索阶段一次定型,而是在解决每个具体问题的过程中,依据实时反馈持续地构造与修正自身。这种把「设计」嵌入「执行」的动态闭环,让智能体系统能够对未曾见过的任务即时调整推理策略,而非被固定流程所束缚,从而在面对开放、多变的真实任务时具备更强的适应力与泛化潜力。",
    "evaluation": "在社会推理、生物医学、数学问题求解与代码生成等多个领域上系统评估,DyFlow 显著超越现有基线,取得可观的 Pass@k 提升,并验证其跨多样领域的稳健泛化能力;同时对比预定义流程,展示动态算子与中间反馈带来的鲁棒性收益。",
    "mainFinding": "用设计器分解子目标并依中间反馈动态规划、执行器以上下文感知的动态算子落地,能让流程在运行时自适应构造与调整,显著提升跨任务泛化与 Pass@k 表现。",
    "limitations": "运行时动态规划与反馈驱动调整增加了每次求解的调用与延迟成本;设计器分解子目标与执行器算子参数化的质量依赖底层模型能力,反馈噪声会影响动态调整的稳定性。",
    "related": [
      "workflow-flowreasoner",
      "workflow-aflow",
      "workflow-adaptflow"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2509.26062"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2509.26062"
      },
      {
        "label": "代码",
        "href": "https://github.com/wyf23187/DyFlow"
      }
    ],
    "citation": "DyFlow: Dynamic Workflow Framework for Agentic Reasoning, arXiv 2025.",
    "figures": [
      {
        "src": "figures/workflow-dyflow.png",
        "caption": "DyFlow 概览:设计器分解子目标并依中间反馈动态规划,执行器用上下文感知的动态算子执行,构成运行时自适应的推理流程。"
      }
    ]
  },
  {
    "id": "workflow-maporl",
    "page": "workflow",
    "title": "MAPoRL: Multi-Agent Post-Co-Training for Collaborative Large Language Models with Reinforcement Learning",
    "shortTitle": "MAPoRL",
    "category": "workflow-rl",
    "maturity": "growing",
    "score": 0.75,
    "year": 2025,
    "venue": "arXiv 2025",
    "authors": "Chanwoo Park, Seungju Han, Xingzhi Guo et al.",
    "methodFamily": "多智能体协同后训练",
    "tags": [
      "协同后训练",
      "多智能体RL",
      "验证器奖励",
      "多轮讨论",
      "泛化"
    ],
    "scores": {
      "clarity": 0.82,
      "evidence": 0.79,
      "reproducibility": 0.72,
      "adoption": 0.58,
      "selfEvolution": 0.82
    },
    "summary": "针对以往多智能体工作只靠现成模型的固有协作能力、难以真正提升表现的问题,提出协同后训练范式 MAPoRL:多个大模型先各自作答再多轮讨论改进,由验证器对答案与讨论打分作为共训练奖励,用多智能体强化学习共同训练,显著提升协作表现并能泛化到未见领域。",
    "methodCore": "MAPoRL 针对的是多智能体协作研究中一个被忽视的假设:以往大多数工作只是「提示」现成的大模型,依赖它们与生俱来的协作能力,而近来的研究显示,这种做法未必能真正提升模型表现。换句话说,把几个未经专门训练的模型放在一起讨论,并不自动带来更好的结果。MAPoRL 的主张是——协作行为需要被显式地训练出来。\n\n## 协同后训练的新范式\nMAPoRL(Multi-Agent Post-co-training for collaborative LLMs with Reinforcement Learning)提出了一种全新的后训练范式,目的是显式地激发协作行为,进一步释放多智能体大模型框架的潜力。与既有的单模型后训练不同,MAPoRL 主张把多个大模型「放在一起共同训练」(co-training),用强化学习让它们学会如何更好地彼此配合,而不是各自孤立地变强。这一「共训练」思想是 MAPoRL 区别于常规后训练的核心。\n\n## 独立作答—多轮讨论—验证打分的流程\n在 MAPoRL 中,多个大模型首先各自独立生成回答,然后进入多轮讨论(multi-turn discussion),协作地改进最终答案。讨论结束后,一个 MAPoRL 验证器(verifier)对答案和讨论过程双重评估:它给出一个分数,既验证答案的正确性,又对具有纠错性、说服性的讨论给予额外激励。也就是说,奖励不只看最终答案对不对,还看讨论过程是否真的推动了答案变好——这鼓励模型进行有建设性的、能纠正彼此错误的交流,而非流于形式的附和。\n\n## 共训练奖励与多智能体强化学习\n验证器给出的分数被用作共训练奖励(co-training reward),并通过多智能体强化学习加以最大化。与现有的大模型后训练范式不同,MAPoRL 倡导用强化学习把多个大模型一起训练,以获得更好的泛化能力。作者的分析性洞见与实验都表明:单独训练个体模型不足以诱导出有效协作,而多智能体共训练则能在多个基准上提升协作表现,并能泛化到未曾见过的领域。这说明「协作」是一种需要专门训练、且训练后可迁移的能力。\n\n## 对自我进化的价值\nMAPoRL 为多智能体系统的自我进化提供了一个关键论点:协作不是模型规模到位后自动涌现的免费能力,而是必须通过共同训练显式培育的技能。把「答案是否正确」与「讨论是否有建设性」一并纳入奖励,并用多智能体强化学习去优化,意味着一个多智能体系统能够通过后训练不断改良其内部的协作机制,让讨论越来越高效、纠错越来越及时。这种以协作质量为优化目标、可泛化到新领域的共训练路线,为「让智能体群体越合作越强」提供了扎实的训练学基础,也提示未来的自我进化系统应把群体协作本身当作一个可学习、可持续优化的对象。",
    "evaluation": "实验与分析性洞见共同表明:单独训练个体模型不足以诱导有效协作,而多智能体共训练能在多个基准上提升协作表现,并展示对未见领域的泛化能力;通过验证器对答案与讨论双重打分,验证纠错性、说服性讨论对最终答案质量的正向作用。",
    "mainFinding": "协作能力需显式后训练而非依赖现成模型固有能力;让多模型独立作答后多轮讨论,由验证器对答案与讨论双重打分作为共训练奖励并用多智能体RL最大化,能显著提升协作表现并泛化到未见域。",
    "limitations": "多模型共训练与多轮讨论采样带来较高的训练与推理成本;协作质量高度依赖验证器打分的可靠性,奖励设计不当可能诱导表面性而非实质性的讨论。",
    "related": [
      "workflow-marft",
      "workflow-flowreasoner",
      "workflow-scoreflow"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2502.18439"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2502.18439"
      }
    ],
    "citation": "MAPoRL: Multi-Agent Post-Co-Training for Collaborative LLMs with Reinforcement Learning, arXiv 2025.",
    "figures": [
      {
        "src": "figures/workflow-maporl.png",
        "caption": "MAPoRL 概览:多个大模型独立作答后多轮讨论,验证器对答案与讨论双重打分作为共训练奖励,经多智能体强化学习最大化。"
      }
    ]
  },
  {
    "id": "workflow-marft",
    "page": "workflow",
    "title": "MARFT: Multi-Agent Reinforcement Fine-Tuning",
    "shortTitle": "MARFT",
    "category": "workflow-rl",
    "maturity": "growing",
    "score": 0.74,
    "year": 2025,
    "venue": "arXiv 2025",
    "authors": "Junwei Liao, Muning Wen, Jun Wang et al.",
    "methodFamily": "多智能体强化微调框架",
    "tags": [
      "强化微调",
      "Flex-MG",
      "马尔可夫博弈",
      "异步交互",
      "开源框架"
    ],
    "scores": {
      "clarity": 0.81,
      "evidence": 0.76,
      "reproducibility": 0.75,
      "adoption": 0.6,
      "selfEvolution": 0.81
    },
    "summary": "系统研究基于大模型的多智能体强化学习,提出多智能体强化微调框架 MARFT:引入贴合真实 LaMAS 优化的新马尔可夫博弈 Flex-MG,分析经典 MARL 与 MARFT 在异步交互、profile 感知设计、异构架构上的关键差异,给出鲁棒可扩展的模块化算法与开源实现。",
    "methodCore": "MARFT 关注的是一个尚待系统研究的方向:基于大模型的多智能体系统(LaMAS)在复杂智能体任务上展现了强大的多方面推理与协作能力,而强化学习被公认能提升智能体智能,但用基础强化学习技术去微调 LaMAS 的工作却很有限。更棘手的是,直接把传统的多智能体强化学习(MARL)套用到 LaMAS 上会因 LaMAS 独特的机制而遭遇重大挑战。MARFT 试图填补这一空白,给出一套面向 LaMAS 的强化微调方法论。\n\n## Flex-MG:面向真实 LaMAS 的马尔可夫博弈\nMARFT 的理论基础是一个新的马尔可夫博弈(Markov Game)形式化——Flex-MG,它被设计得与真实世界的 LaMAS 优化相对齐,同时配套一个面向 LaMAS 的通用算法框架。传统的 MARL 建模往往假设同步、同构的智能体,而这与大模型多智能体系统的实际运作方式相去甚远。Flex-MG 的价值,就在于把建模贴近 LaMAS 的真实结构,让强化微调建立在一个更符合实际的数学框架之上。\n\n## 从 RL 到 RFT 再到多智能体版本\n文章梳理了从传统强化学习(RL)到强化微调(RFT)的演化脉络,再分析其多智能体对应形态。这条脉络的意义在于:单智能体的强化微调已相对成熟,而把它推广到多智能体场景需要重新审视诸多前提。MARFT 正是沿着「RL→RFT→多智能体 RFT」这条路径,系统地把强化微调的思想扩展到大模型多智能体系统。\n\n## 识别经典 MARL 与 MARFT 的关键差异\n针对 LaMAS,作者识别出经典 MARL 与 MARFT 之间的几处关键差异:异步的智能体交互(asynchronous agent interactions)、profile 感知的智能体设计(profile-aware agent design)、以及异构架构(heterogeneous architectures)。这些差异——智能体不再同步行动、各自带有不同的角色画像、底层架构互不相同——正是传统 MARL 无法直接套用的根本原因,也促使作者提出面向 LaMAS 的强化微调形式化。\n\n## 开源框架与对自我进化的价值\nMARFT 给出了一个鲁棒且可扩展的框架,详述其模块化算法,并提供开源实现以支持采用与进一步研究;文章还讨论了动态环境建模、样本效率低、缺乏统一框架等应用前景与开放挑战。从自我进化的视角看,MARFT 的意义在于它把「用强化学习持续微调整个多智能体系统」这件事,从零散尝试提升为有理论形式化(Flex-MG)、有通用算法、有开源工具的系统方法论。当一个多智能体系统能够以贴合自身异步、异构、角色分化特性的方式被强化微调时,它就获得了一条随任务反馈持续自我改良的正式通道;这份「路线图」式的工作为后续把多智能体系统训练成韧性强、自适应、与人对齐的智能体提供了坚实的方法学起点。",
    "evaluation": "作为对 LLM 多智能体强化学习的综合性研究,MARFT 通过引入 Flex-MG 形式化与通用算法框架,系统对比经典 MARL 与 MARFT 在异步交互、profile 感知设计、异构架构上的差异,并以开源实现支撑方法的可采用性与可复现性,同时讨论动态环境建模、样本效率等开放挑战。",
    "mainFinding": "直接套用传统 MARL 到大模型多智能体系统会因异步交互、profile 感知设计与异构架构而失效;需以贴合 LaMAS 的 Flex-MG 形式化和面向 LaMAS 的模块化强化微调框架来专门优化。",
    "limitations": "样本效率低、缺乏统一成熟框架、动态环境建模困难等仍是公开挑战;作为方法论与框架性工作,大规模端到端实证验证相对有限。",
    "related": [
      "workflow-maporl",
      "workflow-flowreasoner",
      "workflow-symbolic"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2504.16129"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2504.16129"
      },
      {
        "label": "代码",
        "href": "https://github.com/jwliao-ai/MARFT"
      }
    ],
    "citation": "MARFT: Multi-Agent Reinforcement Fine-Tuning, arXiv 2025.",
    "figures": [
      {
        "src": "figures/workflow-marft.png",
        "caption": "MARFT 概览:以 Flex-MG 马尔可夫博弈形式化多智能体强化微调,给出面向 LaMAS 异步、异构、profile 感知特性的模块化算法框架。"
      }
    ]
  },
  {
    "id": "workflow-maas",
    "figures": [{"src": "figures/workflow-maas.png", "caption": "MaAS · 架构/流程示意"}], "page": "workflow",
    "title": "Multi-agent Architecture Search via Agentic Supernet",
    "shortTitle": "MaAS",
    "category": "workflow-cost",
    "maturity": "growing",
    "score": 0.82,
    "year": 2025,
    "venue": "arXiv 2025",
    "authors": "Guibin Zhang, Luyang Niu, Junfeng Fang et al.",
    "methodFamily": "智能体超网概率架构分布",
    "tags": [
      "智能体超网",
      "查询自适应",
      "资源分配",
      "概率分布",
      "可迁移"
    ],
    "scores": {
      "clarity": 0.85,
      "evidence": 0.84,
      "reproducibility": 0.78,
      "adoption": 0.64,
      "selfEvolution": 0.84
    },
    "summary": "针对自动化流程只找一套静态、复杂、一刀切系统、无法按查询难度动态分配推理资源的问题,提出优化「智能体超网」(架构的概率连续分布)的 MaAS,按查询从超网采样定制系统,六基准上仅需现有系统 6~45% 的推理成本、却反超 0.54%~11.82%,并具备跨数据集与跨模型骨干的迁移性。",
    "methodCore": "MaAS 观察到,尽管已有方法能自动化智能体流程的设计,但它们通常都在追求一套静态、复杂、一刀切(one-size-fits-all)的系统。这样的单体系统有一个根本缺陷:它无法根据每条查询的难度和领域动态地分配推理资源。简单查询和复杂查询被迫共用同一套重型流程,造成资源浪费。MaAS 的破题思路,是从「找一个系统」转向「优化一整个系统分布」。\n\n## 从单体系统到智能体超网\nMaAS 不再追求一个单体的智能体系统,而是转去优化「智能体超网」(agentic supernet)——一个关于智能体架构的、概率化且连续的分布。也就是说,MaAS 学习的不是某一个确定的流程,而是一个能生成各种流程的概率分布空间。这一转变借鉴了神经架构搜索中超网的思想:把海量可能的架构编码进一个连续可优化的母体,再从中按需采样。这是 MaAS 区别于以往「搜索单一最优流程」方法的核心创新。\n\n## 查询依赖的采样与资源分配\nMaAS 是一个自动化框架,它从超网中采样出「查询依赖」(query-dependent)的智能体系统,既给出高质量的解答,又提供量身定制的资源分配——例如大模型调用次数、工具调用次数、token 成本等。关键在于「查询依赖」四个字:面对一条简单查询,MaAS 会采样出一个轻量系统;面对复杂查询,则采样出更强也更耗资源的系统。资源因此被花在刀刃上,而不是对所有查询一视同仁地投入重型流程。\n\n## 三重实证优势:省、强、可迁移\n在六个基准上的全面评估揭示了 MaAS 的三重优势。其一是省:它只需要现有人工设计或自动化多智能体系统 6% 到 45% 的推理成本。其二是强:在如此低的成本下,它反而以 0.54% 到 11.82% 的幅度超过了那些系统。其三是可迁移:它享有优越的跨数据集与跨大模型骨干的可迁移性,即在一个数据集或一种模型上优化出的超网,能较好地迁移到别的数据集或模型骨干上。省与强的同时达成,正说明了「按查询分配资源」相较「一刀切」的巨大效率红利。\n\n## 对自我进化的价值\nMaAS 为自我进化系统贡献了一个极具启发性的范式:进化的产物不必是一个固定的最优系统,而可以是一个能够按需生成系统的概率分布。把智能体架构组织成一个可采样的超网,意味着系统能够对每一条进来的查询即时决定「该用多重的武器」,从而在整体上实现性能与成本的最优权衡。这种「按难度动态分配推理资源」的能力,让智能体系统的自我进化不再只关注解题能力的上限,更关注资源使用的效率;而超网所具备的跨数据集、跨模型迁移性,又让一次优化的成果能够复用到更广的场景,大大提升了自我进化的经济性与可持续性。",
    "evaluation": "在六个基准上全面评估,MaAS 展现三重优势:成本上仅需现有人工/自动化多智能体系统 6%~45% 的推理开销;性能上反超它们 0.54%~11.82%;迁移性上具备优越的跨数据集与跨大模型骨干可迁移性,验证按查询采样带来的资源分配效率。",
    "mainFinding": "把优化对象从单体智能体系统换成「智能体超网」(架构的概率连续分布),按查询采样定制系统与资源分配,能以 6~45% 的推理成本反超现有系统 0.54~11.82%,并跨数据集、跨模型骨干迁移。",
    "limitations": "构造并优化连续的架构超网需要相当的训练开销与设计经验;采样出的系统质量依赖超网分布的表达能力,超网结构的设定会影响可采样架构的覆盖范围。",
    "related": [
      "workflow-masrouter",
      "workflow-aflow",
      "workflow-evoflow"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2502.04180"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2502.04180"
      }
    ],
    "citation": "Multi-agent Architecture Search via Agentic Supernet, arXiv 2025."
  },
  {
    "id": "workflow-masrouter",
    "figures": [{"src": "figures/workflow-masrouter.png", "caption": "MasRouter · 架构/流程示意"}], "page": "workflow",
    "title": "MasRouter: Learning to Route LLMs for Multi-Agent Systems",
    "shortTitle": "MasRouter",
    "category": "workflow-cost",
    "maturity": "growing",
    "score": 0.78,
    "year": 2025,
    "venue": "arXiv 2025",
    "authors": "Yanwei Yue, Guibin Zhang, Boyang Liu et al.",
    "methodFamily": "级联控制器多智能体路由",
    "tags": [
      "多智能体路由",
      "协作模式",
      "角色分配",
      "模型路由",
      "即插即用"
    ],
    "scores": {
      "clarity": 0.84,
      "evidence": 0.82,
      "reproducibility": 0.78,
      "adoption": 0.66,
      "selfEvolution": 0.8
    },
    "summary": "针对多智能体系统成本高、动态选模型难,且现有路由方法只顾单智能体、忽视协作模式与角色决策的问题,首次提出多智能体系统路由问题 MASR,并给出用级联控制器网络统一决定协作模式、角色分配与模型路由的 MasRouter,在 MBPP 上超 SOTA 1.8~8.2%、在 HumanEval 上省开销至多 52.07%,且即插即用。",
    "methodCore": "MasRouter 关注多智能体系统一个现实的痛点:由大模型驱动的多智能体系统虽然能拓展大模型的能力边界,却往往带来显著成本,并在动态选择大模型这件事上面临挑战。现有的大模型路由方法确实能在单智能体场景下通过为每条查询定制模型选择来降低开销,但它们忽视了多智能体系统中更关键的决策——协作模式与智能体角色。MasRouter 要做的,是把路由的视野从「选哪个模型」扩展到「怎么组队、谁扮演什么角色、各用什么模型」。\n\n## 提出多智能体系统路由问题 MASR\n作者首先提出并形式化了多智能体系统路由(Multi-Agent System Routing,MASR)这一问题,它把多智能体系统的所有组成部分整合进一个统一的路由框架。这是一个重要的问题定义:以往路由只管模型选择,而 MASR 把协作模式、角色分配、模型选择统统纳入同一个决策问题,承认它们彼此耦合、需要联合优化。这一问题的提出本身,就是 MasRouter 的核心贡献之一。\n\n## 级联控制器网络的三级决策\n朝着这一目标,作者提出了 MasRouter——首个高性能、经济且可归纳(inductive)的 MASR 解决方案。它通过一个级联控制器网络(cascaded controller network)来完成协作模式确定、角色分配与大模型路由三件事,逐级递进地构建出一个在效果与效率之间取得平衡的多智能体系统。级联的设计让三类决策有序衔接:先定协作模式,再分配角色,最后为每个角色选模型,层层收敛出一个既好用又省钱的系统。\n\n## 三重实证特性:高性能、经济、即插即用\n大量实验展示了 MasRouter 的三重特性。其一是高性能:在 MBPP 上相较当时最先进方法取得 1.8% 到 8.2% 的提升。其二是经济:在 HumanEval 上相较 SOTA 方法把开销最多降低 52.07%。其三是即插即用:它能无缝集成到主流多智能体框架中,通过定制化路由把开销降低 17.21% 到 28.17%。可归纳性意味着它无需为每个新场景重训,能直接推广;即插即用则让它成为可叠加在现有系统上的通用增效模块。\n\n## 对自我进化的价值\nMasRouter 为多智能体系统的自我进化提供了「路由即优化」的视角:系统不必事先固定协作结构,而是可以为每条查询动态地决策该采用怎样的协作模式、配置怎样的角色、调用怎样的模型。把这三类决策统一进一个可学习、可归纳的路由框架,意味着系统能够随查询特征自适应地重组自身,把昂贵资源留给真正需要的环节。这种「按需路由」的能力,加上无需重训即可泛化和即插即用的工程特性,让智能体系统能够以极低的改造成本持续优化其性能—成本权衡,为大规模、经济、可持续的自我进化部署提供了一条务实路径。",
    "evaluation": "在多个代码基准上验证 MasRouter 的三重特性:高性能(MBPP 上超 SOTA 1.8%~8.2%)、经济(HumanEval 上开销最多降 52.07%)、即插即用(无缝集成主流多智能体框架,定制路由降开销 17.21%~28.17%),并验证其归纳式路由的跨场景泛化能力。",
    "mainFinding": "首次把协作模式、角色分配、模型选择统一为多智能体系统路由问题 MASR,并用级联控制器网络逐级决策,能构建兼顾效果与效率的系统,超 SOTA 且大幅降本,还可即插即用集成到现有框架。",
    "limitations": "级联控制器需在标注/执行数据上训练,路由质量依赖训练数据的覆盖面;三级决策的耦合关系复杂,协作模式与角色空间的设定会影响可路由方案的范围。",
    "related": [
      "workflow-maas",
      "workflow-gdesigner",
      "workflow-aflow"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2502.11133"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2502.11133"
      },
      {
        "label": "代码",
        "href": "https://github.com/yanweiyue/masrouter"
      }
    ],
    "citation": "MasRouter: Learning to Route LLMs for Multi-Agent Systems, arXiv 2025."
  },
  {
    "id": "workflow-adaptflow",
    "page": "workflow",
    "title": "AdaptFlow: Adaptive Workflow Optimization via Meta-Learning",
    "shortTitle": "AdaptFlow",
    "category": "workflow-cost",
    "maturity": "growing",
    "score": 0.77,
    "year": 2025,
    "venue": "arXiv 2025",
    "authors": "Runchuan Zhu, Bowen Jiang, Lingrui Mei et al.",
    "methodFamily": "MAML 式流程元学习",
    "tags": [
      "元学习",
      "MAML",
      "双层优化",
      "流程初始化",
      "快速适配"
    ],
    "scores": {
      "clarity": 0.83,
      "evidence": 0.81,
      "reproducibility": 0.77,
      "adoption": 0.6,
      "selfEvolution": 0.82
    },
    "summary": "针对静态模板或人工流程难以适配多样任务、可扩展性差的问题,提出受 MAML 启发的自然语言元学习框架 AdaptFlow:学习一个可泛化的流程初始化,通过双层优化让内环用大模型反馈精修子任务流程、外环更新共享初始化,从而在未见任务上以语言引导的修改快速适配,问答/代码/数学上达到 SOTA。",
    "methodCore": "AdaptFlow 关注的问题是:智能体流程——结构化的大模型调用序列——虽被寄予厚望,但现有做法常依赖静态模板或人工设计的流程,这既限制了对多样任务的适应能力,也阻碍了可扩展性。作者希望找到一种方式,让流程不必为每个新任务从头设计,而是能从一个良好的起点快速适配。这一诉求把元学习的思想引入了流程优化。\n\n## 受 MAML 启发的自然语言元学习\nAdaptFlow 是一个基于自然语言的元学习框架,灵感来自与模型无关的元学习(MAML,model-agnostic meta-learning)。它学习的不是某个具体任务的流程,而是一个可泛化的流程初始化(workflow initialization)——一个能够快速适配到各种子任务的良好起点。MAML 的精髓是「学会如何快速学习」,AdaptFlow 把这一精髓迁移到流程上:先求得一个通用初始化,再针对具体任务少量微调即可用。这与从零搜索每个任务流程的做法形成鲜明对比。\n\n## 双层优化:内环适配、外环泛化\nAdaptFlow 采用双层优化(bi-level optimization)方案。内环(inner loop)针对某个特定子任务,用大模型生成的反馈来精修流程;外环(outer loop)则更新那个共享的初始化,使其在众多任务上都表现良好。两层协同的效果是:外环保证初始化足够通用,内环保证针对具体任务能快速收敛。这种「共享初始化 + 任务级快速适配」的结构,是 AdaptFlow 兼顾泛化与专用的关键机制。\n\n## 语言引导的快速适配\n凭借这一设置,AdaptFlow 能够通过对初始化流程施加「语言引导的修改」(language-guided modifications),有效地泛化到未见过的任务上。也就是说,适配过程是用自然语言描述的反馈来驱动流程调整的,既保留了可读性,又让适配灵活而低成本。面对新任务时,系统无需重新搜索,只需在通用初始化上做少量语言引导的微调,便能迅速得到贴合该任务的流程。\n\n## 实证与对自我进化的价值\n在问答、代码生成与数学推理等基准上评估,AdaptFlow 始终优于人工设计与自动搜索的基线,取得当时最优结果,并展现出跨任务、跨模型的强泛化能力。从自我进化的视角看,AdaptFlow 提供了一条「学会快速适配」的路线:系统积累的不是某个具体任务的解法,而是一种能迅速为新任务生成流程的元能力。当一个可泛化的初始化被学出来后,面对层出不穷的新任务,系统只需少量语言引导的调整即可应对,而无需每次都付出昂贵的从零搜索代价。这种以元学习为核心的快速适配能力,让智能体系统的自我进化在面对开放世界的任务多样性时既高效又可扩展。",
    "evaluation": "在问答、代码生成与数学推理等基准上评估,AdaptFlow 始终优于人工设计与自动搜索的基线,取得 SOTA 结果,并验证其跨任务与跨模型的强泛化能力;通过双层优化对比,展示共享初始化 + 快速适配相较从零搜索的效率优势。",
    "mainFinding": "受 MAML 启发学习一个可泛化的流程初始化,并用双层优化(内环大模型反馈精修子任务、外环更新共享初始化),能让流程在未见任务上通过语言引导的修改快速适配,达到跨任务、跨模型的 SOTA。",
    "limitations": "元学习阶段需要跨多任务的训练来求得良好初始化,前期成本较高;快速适配质量依赖大模型反馈的可靠性,初始化的泛化范围受训练任务分布限制。",
    "related": [
      "workflow-scoreflow",
      "workflow-autoflow",
      "workflow-dyflow"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2508.08053"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2508.08053"
      },
      {
        "label": "代码",
        "href": "https://github.com/microsoft/DKI_LLM/tree/AdaptFlow/AdaptFlow"
      }
    ],
    "citation": "AdaptFlow: Adaptive Workflow Optimization via Meta-Learning, arXiv 2025.",
    "figures": [
      {
        "src": "figures/workflow-adaptflow.png",
        "caption": "AdaptFlow 概览:受 MAML 启发的双层优化,内环用大模型反馈精修子任务流程,外环更新可泛化的共享流程初始化。"
      }
    ]
  },
  {
    "id": "workflow-gnnpred",
    "page": "workflow",
    "title": "GNNs as Predictors of Agentic Workflow Performances",
    "shortTitle": "GNN Workflow Predictor",
    "category": "workflow-cost",
    "maturity": "exploring",
    "score": 0.72,
    "year": 2025,
    "venue": "arXiv 2025",
    "authors": "Yuanshuo Zhang, Yuchen Hou, Bohan Tang et al.",
    "methodFamily": "图神经网络流程性能预测",
    "tags": [
      "图神经网络",
      "性能预测",
      "计算图",
      "FLORA-Bench",
      "免执行评估"
    ],
    "scores": {
      "clarity": 0.81,
      "evidence": 0.76,
      "reproducibility": 0.78,
      "adoption": 0.56,
      "selfEvolution": 0.78
    },
    "summary": "针对优化智能体流程因大量大模型调用而昂贵低效的问题,这篇立场论文把智能体流程表述为计算图,主张用图神经网络作为流程性能的高效预测器以避免重复调用大模型评估,并构建统一基准 FLORA-Bench,大量实验得出「GNN 简单却有效」的结论,为自动化流程优化开辟新方向。",
    "methodCore": "这篇工作关注自动化流程优化中一个绕不开的成本瓶颈:由大模型调用构成的智能体流程虽在复杂任务上取得显著成功,但在真实应用中优化这类流程既昂贵又低效,因为每评估一个候选流程都要大量调用大模型。如果每次评估都得真跑一遍流程,搜索的成本就会随候选数量急剧膨胀。这篇立场论文提出的方案,是用一个便宜的代理模型来预测流程好坏,从而绕开昂贵的真实执行。\n\n## 把智能体流程表述为计算图\n论文的第一步是表述上的转换:把智能体流程形式化为计算图(computational graphs)。在这一视角下,流程中的大模型调用、工具调用、算子等成为图中的节点,它们之间的数据流与控制流成为边。这样,一个流程就变成了一个结构化的图对象,而图恰恰是图神经网络最擅长处理的数据形态。把流程「图化」,是让 GNN 能够介入预测的前提。\n\n## 用 GNN 作为免执行的性能预测器\n在此基础上,论文主张用图神经网络(GNNs)作为智能体流程性能的高效预测器,从而避免为评估而重复调用大模型。也就是说,给定一个表述为计算图的候选流程,训练好的 GNN 能直接预测它大概能取得多好的性能,而无需真的把流程跑一遍。这一「免执行评估」的思路,直击流程优化的成本痛点:用一次廉价的图神经网络前向推理,替代一次昂贵的真实流程执行。\n\n## FLORA-Bench 与实证结论\n为了给这一立场提供实证支撑,作者构建了 FLORA-Bench——一个用于对 GNN 预测智能体流程性能进行基准测试的统一平台。通过大量实验,论文得出了明确结论:GNN 是简单却有效的预测器(simple yet effective predictors)。这个结论虽朴素,却意义重大:它证明了「用轻量图模型预测重量级流程性能」这条路是走得通的,为后续研究提供了可复现的实验基座。\n\n## 对自我进化的价值\n作为一篇立场论文,这项工作为智能体流程的自我进化开辟了一个新方向:流程优化的评估环节可以被廉价的代理模型接管。当每一个候选流程的好坏都能被 GNN 快速预测,而无需真实执行时,搜索空间的探索成本将大幅下降,自动化流程优化因此能在有限预算内考察远多于以往的候选。这不仅支持了 GNN 的新应用,更指向一种「预测器驱动的流程进化」范式——系统可以先用预测器海选出有前景的候选,再仅对少数精选者做真实验证,从而把宝贵的大模型调用集中用在最有价值的地方。这种以廉价预测替代昂贵执行的思路,为大规模、高效率的流程自我进化扫清了成本障碍,也让「先预测、后验证」的两段式优化成为可能。",
    "evaluation": "作者构建统一基准 FLORA-Bench 对 GNN 预测智能体流程性能进行系统评测,通过大量实验得出「GNN 是简单却有效的预测器」的结论,验证以图神经网络免执行地预测流程性能、替代重复大模型调用评估的可行性。",
    "mainFinding": "把智能体流程表述为计算图并用 GNN 作为性能预测器,可免执行地估计候选流程好坏、避免重复调用大模型评估;FLORA-Bench 上的大量实验证明 GNN 是简单却有效的预测器。",
    "limitations": "作为立场论文,预测器的泛化边界与在全新流程结构上的准确性仍需更多验证;GNN 预测质量依赖 FLORA-Bench 训练数据的分布,对分布外流程的可靠性有待考察。",
    "related": [
      "workflow-maas",
      "workflow-worfbench",
      "workflow-gptswarm"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2503.11301"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2503.11301"
      },
      {
        "label": "代码",
        "href": "https://github.com/youngsoul0731/Flora-Bench"
      }
    ],
    "citation": "GNNs as Predictors of Agentic Workflow Performances, arXiv 2025.",
    "figures": [
      {
        "src": "figures/workflow-gnnpred.png",
        "caption": "GNN 流程性能预测:把智能体流程表述为计算图,用图神经网络免执行地预测其性能,避免重复调用大模型评估。"
      }
    ]
  },
  {
    "id": "workflow-adas",
    "figures": [{"src": "figures/workflow-adas.png", "caption": "ADAS · 架构/流程示意"}], "page": "workflow",
    "title": "Automated Design of Agentic Systems",
    "shortTitle": "ADAS",
    "category": "workflow-graph",
    "maturity": "growing",
    "score": 0.85,
    "year": 2024,
    "venue": "ICLR 2025",
    "authors": "Shengran Hu, Cong Lu, Jeff Clune",
    "methodFamily": "元智能体代码化系统发现",
    "tags": [
      "自动化设计",
      "元智能体",
      "代码化智能体",
      "经验档案",
      "跨域迁移"
    ],
    "scores": {
      "clarity": 0.86,
      "evidence": 0.85,
      "reproducibility": 0.8,
      "adoption": 0.7,
      "selfEvolution": 0.88
    },
    "summary": "提出「智能体系统自动化设计」(ADAS)这一新研究领域,主张让元智能体用代码自动发明并组合更好的智能体;给出 Meta Agent Search 算法,元智能体基于不断增长的历史发现档案迭代编写新智能体,在编码、科学、数学等多域上远超人工设计,且发明的智能体能跨域跨模型迁移。",
    "methodCore": "ADAS 从机器学习史的一条规律出发:手工设计的方案最终总会被学习得到的方案所取代。当下研究者投入大量精力开发强大的通用智能体,把基础模型当作智能体系统中的模块(如思维链、自我反思、Toolformer),但这些系统本身仍主要靠人工设计。ADAS 提出一个正在成形的新研究领域——智能体系统的自动化设计(Automated Design of Agentic Systems),目标是自动创造强大的智能体系统设计,包括发明全新的构件、以及以新方式组合它们。\n\n## 代码化智能体与图灵完备的可能性\nADAS 指出一条尚未被充分探索却极具前景的路径:智能体可以用代码来定义,而新的智能体可以由一个「元智能体」(meta agent)自动发现——元智能体不断用代码编写出越来越好的智能体。这里的关键洞见在于:既然编程语言是图灵完备的,那么这种方法理论上就能学习出任何可能的智能体系统,包括新颖的提示、工具使用、工作流,以及它们的各种组合。把智能体表示为代码,等于把「设计智能体」这件事变成了「编写并改进程序」,从而打开了近乎无限的设计空间。\n\n## Meta Agent Search:基于经验档案的迭代编程\n为了验证这一想法,作者提出了一个简单却有效的算法——Meta Agent Search。在这个算法里,一个元智能体基于一个不断增长的「历史发现档案」(archive of previous discoveries),迭代地编写出有趣的新智能体。也就是说,元智能体每发明一个新智能体,就把它加入档案;后续的发明又能参考档案中已有的成功与失败经验,站在积累之上继续探索。这种「档案驱动的迭代编程」让搜索不是盲目试探,而是能复用历史智慧、逐步逼近更强设计。\n\n## 跨域跨模型的鲁棒迁移\n在编码、科学、数学等多个领域的大量实验表明,该算法能逐步发明出设计新颖、且大幅超越当时最强人工设计智能体的系统。尤为引人注目的是一个反复出现的惊人结果:Meta Agent Search 发明的智能体在跨领域、跨模型迁移时依然保持优越性能,展现出鲁棒性与通用性。这说明这些被自动发明出来的设计并非过拟合于某一任务或某一模型,而是捕捉到了某种更普适的、可迁移的智能体设计智慧。\n\n## 对自我进化的价值\nADAS 为自我进化确立了一个宏大而清晰的愿景:让智能体系统的设计本身成为一个可自动学习、可持续改进的过程。当智能体被表示为代码、由元智能体基于经验档案不断编写更优版本时,系统就获得了「自己设计自己后代」的能力,而人类的角色从设计者转变为安全的监护者。图灵完备带来的表达上限、经验档案带来的累积性、以及发明产物的跨域跨模型鲁棒性,共同勾勒出一条通向「自动设计越来越强大的智能体系统」的道路——只要发展得当且安全,这正是自我进化研究最令人振奋的方向之一。",
    "evaluation": "在编码、科学、数学等多个领域的大量实验中,Meta Agent Search 逐步发明出大幅超越当时最强人工设计智能体的新颖设计;并反复验证一个关键结果:自动发明的智能体在跨领域、跨模型迁移时仍保持优越性能,证明其鲁棒性与通用性。",
    "mainFinding": "把智能体定义为代码、由元智能体基于不断增长的经验档案迭代编写更优智能体(Meta Agent Search),因编程语言图灵完备而理论上可学习任意系统;自动发明的设计远超人工且能跨域跨模型鲁棒迁移。",
    "limitations": "元智能体反复编写并评估候选系统的搜索成本高;自动发明强大智能体带来安全性顾虑,作者明确强调需在安全前提下发展;档案质量与元智能体编程能力显著影响发现效率。",
    "related": [
      "workflow-symbolic",
      "workflow-agentsquare",
      "workflow-aflow"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2408.08435"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2408.08435"
      },
      {
        "label": "项目主页",
        "href": "https://www.shengranhu.com/ADAS/"
      }
    ],
    "citation": "Automated Design of Agentic Systems, ICLR 2025."
  },
  {
    "id": "workflow-gptswarm",
    "page": "workflow",
    "title": "Language Agents as Optimizable Graphs",
    "shortTitle": "GPTSwarm",
    "category": "workflow-graph",
    "maturity": "mature",
    "score": 0.86,
    "year": 2024,
    "venue": "ICML 2024",
    "authors": "Mingchen Zhuge, Wenyi Wang, Louis Kirsch et al.",
    "methodFamily": "可优化计算图统一框架",
    "tags": [
      "计算图",
      "节点优化",
      "边优化",
      "统一框架",
      "层次协作"
    ],
    "scores": {
      "clarity": 0.87,
      "evidence": 0.85,
      "reproducibility": 0.82,
      "adoption": 0.74,
      "selfEvolution": 0.85
    },
    "summary": "针对各种人工提示工程技巧催生大量互不相通代码库的现状,把基于大模型的智能体统一描述为「可优化的计算图」:节点处理数据或查询大模型,边刻画信息流,图可递归组合成层次化的智能体协作;并提出自动图优化器,既做节点级提示优化,又做边级连接优化以改进智能体编排。",
    "methodCore": "GPTSwarm 面对的是一个碎片化的现实:人们提出了各式各样人工设计的提示工程技巧来改进基于大模型的问题求解器,结果催生了大量彼此割裂、互不相通的代码库。每一种技巧、每一套流程都自成一体,难以统一、难以复用、更难以自动改进。GPTSwarm 的核心贡献,是用一个统一的抽象把这些五花八门的方法收拢到同一个框架之下。\n\n## 把智能体统一描述为计算图\nGPTSwarm 把基于大模型的智能体统一描述为计算图(computational graphs)。在这个抽象里,节点(nodes)实现处理多模态数据或查询大模型的功能,边(edges)刻画各操作之间的信息流动。任何一种提示技巧、任何一条智能体流程,都能被表示为这样一张图。这种统一表述的意义在于:原本互不相通的众多方法,现在都成了同一种数学对象的不同实例,从而可以被同一套工具去分析、优化与组合。\n\n## 递归组合成层次化协作\n更进一步,图可以被递归地组合成更大的复合图,用来表示智能体间协作的层次结构——此时边连接的是不同智能体的操作。也就是说,单个智能体是一张图,多个智能体的协作又是一张由子图组成的更大的图。这种递归组合能力让 GPTSwarm 既能描述单智能体内部的处理流程,也能描述多智能体之间的协作编排,在同一框架内自然地表达从个体到群体的层次结构。\n\n## 节点优化与边优化两类自动优化器\nGPTSwarm 的技术核心是两类新颖的自动图优化器。其一是节点优化(node optimization):精修节点级别的大模型提示,让每个节点把自己的活儿干得更好。其二是边优化(edge optimization):通过改变图的连接关系来改进智能体的编排,即调整信息如何在节点/智能体之间流动。前者优化「每个部件怎么做」,后者优化「部件之间怎么连」,两者结合就能既提升局部质量又优化整体结构。\n\n## 对自我进化的价值\nGPTSwarm 为自我进化提供了一个极具影响力的统一底座:当所有智能体方法都被表示为可优化的计算图,「改进智能体」就等价于「优化一张图」——既可以优化图上的节点(提示),也可以优化图的拓扑(连接)。实验表明,该框架能高效地开发、集成并自动改进各种大模型智能体。这种把节点与边都纳入自动优化的思路,让智能体系统的持续改良有了统一而可操作的数学语言:无论是单个智能体的内部提示,还是多智能体的协作拓扑,都能在同一框架内被自动地、协同地进化,为后续大量基于图的流程优化工作奠定了范式基础。",
    "evaluation": "实验证明 GPTSwarm 框架能够高效地开发、集成并自动改进各种大模型智能体;通过节点优化(精修节点级提示)与边优化(改变图连接以改进编排)两类自动图优化器,验证在统一计算图表述下同时优化局部质量与整体拓扑的有效性。",
    "mainFinding": "把各种大模型智能体统一描述为可优化的计算图(节点处理数据/查询大模型、边刻画信息流,可递归组合成层次协作),并用节点优化与边优化两类自动优化器同时改进提示与拓扑,能高效开发并自动改进智能体。",
    "limitations": "图优化器仍需真实执行来评估候选,优化成本随图规模上升;统一图抽象对某些高度特化的流程可能需要额外建模,优化质量依赖节点与边搜索空间的设定。",
    "related": [
      "workflow-gdesigner",
      "workflow-flow",
      "workflow-symbolic"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2402.16823"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2402.16823"
      },
      {
        "label": "代码",
        "href": "https://github.com/metauto-ai/gptswarm"
      }
    ],
    "citation": "Language Agents as Optimizable Graphs, ICML 2024.",
    "figures": [
      {
        "src": "figures/workflow-gptswarm.png",
        "caption": "GPTSwarm 概览:把大模型智能体统一表示为计算图,节点级提示优化与边级连接优化两类自动优化器协同改进流程。"
      }
    ]
  },
  {
    "id": "workflow-agentsquare",
    "page": "workflow",
    "title": "AgentSquare: Automatic LLM Agent Search in Modular Design Space",
    "shortTitle": "AgentSquare",
    "category": "workflow-graph",
    "maturity": "growing",
    "score": 0.83,
    "year": 2024,
    "venue": "ICLR 2025",
    "authors": "Yu Shang, Yu Li, Keyu Zhao et al.",
    "methodFamily": "模块化设计空间智能体搜索",
    "tags": [
      "模块化",
      "MoLAS",
      "模块演化",
      "模块重组",
      "性能预测器"
    ],
    "scores": {
      "clarity": 0.85,
      "evidence": 0.83,
      "reproducibility": 0.8,
      "adoption": 0.66,
      "selfEvolution": 0.84
    },
    "summary": "针对当前智能体研究严重依赖人工、任务专属设计、难以适配新任务的问题,提出「模块化大模型智能体搜索」(MoLAS)问题,把已有设计抽象为规划、推理、工具使用、记忆四个统一 IO 接口的基础模块;AgentSquare 用模块演化与重组高效搜索,并以性能预测器跳过无前景设计,六基准上平均超最佳人工设计 17.2%。",
    "methodCore": "AgentSquare 关注的问题是:大模型的进展催生了大量能处理复杂任务的智能体系统,但当前研究在很大程度上依赖人工的、任务专属的设计,这限制了它们对新任务的适应能力。每遇到一个新任务就要专家重新设计一套智能体,既费力又难以规模化。AgentSquare 的破题之道,是把智能体设计模块化,并在模块空间中自动搜索。\n\n## 提出模块化智能体搜索问题 MoLAS\n论文首先提出一个新的研究问题:模块化大模型智能体搜索(Modularized LLM Agent Search,MoLAS)。为此,作者设计了一个模块化的设计空间,把现有的大模型智能体设计抽象为四个具有统一输入输出接口的基础模块:规划(Planning)、推理(Reasoning)、工具使用(Tool Use)与记忆(Memory)。统一 IO 接口是关键——它让不同来源的模块可以像积木一样自由拼接与替换,从而把「设计智能体」变成「在模块空间里搜索最佳组合」。\n\n## 模块演化与重组两大机制\n基于这一设计空间,AgentSquare 引入两个核心机制来高效搜索优化的大模型智能体:模块演化(module evolution)与模块重组(module recombination)。模块演化针对单个模块做改进,产生新的模块变体;模块重组则把不同的模块重新搭配,组合出新的智能体。二者一个纵向深挖单模块、一个横向重排模块组合,共同高效地探索由四类模块张成的庞大设计空间。\n\n## 性能预测器加速搜索\n为了进一步加速搜索,作者设计了一个性能预测器(performance predictor),它使用上下文内的代理模型(in-context surrogate models)来跳过那些没有前景的智能体设计。也就是说,在真正花大成本执行一个候选设计之前,先用廉价的预测器估计它值不值得一试,把评估预算集中到有希望的候选上。这一机制显著降低了在庞大模块空间中搜索的代价。\n\n## 实证与对自我进化的价值\n在覆盖网页、具身、工具使用与游戏等多样场景的六个基准上,AgentSquare 大幅超越人工设计的智能体,相较最知名的人类设计取得平均 17.2% 的性能提升;它还能生成可解释的设计洞见,帮助人们更深入地理解智能体架构及其对任务表现的影响。从自我进化的视角看,AgentSquare 的模块化设计空间提供了一个可复用、可组合的进化基底:社区多年沉淀的优秀设计都能被抽象为标准模块,进而被演化与重组机制自动地探索出新的强力组合。这种「把成功设计模块化、再自动搜索最佳拼装」的路线,既充分利用了既有的人类先验,又能在其上发现人工难以预想的新架构,为智能体系统的持续自我改良提供了一个整合社区集体智慧的平台。",
    "evaluation": "在覆盖网页、具身、工具使用与游戏等多样场景的六个基准上评估,AgentSquare 大幅超越人工设计智能体,相较最佳人类设计取得平均 17.2% 的性能提升;性能预测器有效跳过无前景设计以加速搜索,并能产出可解释的架构设计洞见。",
    "mainFinding": "把已有智能体设计抽象为规划、推理、工具使用、记忆四个统一接口模块(MoLAS 问题),用模块演化与重组搜索、以性能预测器跳过无前景设计,能自动找到平均超最佳人工设计 17.2% 的智能体并给出可解释洞见。",
    "limitations": "四模块抽象可能无法覆盖所有智能体设计范式;搜索仍需一定量真实执行来校准预测器,模块空间与接口的设定会影响可搜索架构的表达力。",
    "related": [
      "workflow-adas",
      "workflow-mass",
      "workflow-aflow"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2410.06153"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2410.06153"
      },
      {
        "label": "代码",
        "href": "https://github.com/tsinghua-fib-lab/AgentSquare"
      }
    ],
    "citation": "AgentSquare: Automatic LLM Agent Search in Modular Design Space, ICLR 2025.",
    "figures": [
      {
        "src": "figures/workflow-agentsquare.png",
        "caption": "AgentSquare 概览:把智能体抽象为规划、推理、工具使用、记忆四模块,用模块演化与重组搜索,并以性能预测器跳过无前景设计。"
      }
    ]
  },
  {
    "id": "workflow-mass",
    "page": "workflow",
    "title": "Multi-Agent Design: Optimizing Agents with Better Prompts and Topologies",
    "shortTitle": "MASS",
    "category": "workflow-graph",
    "maturity": "growing",
    "score": 0.82,
    "year": 2025,
    "venue": "ICML 2025",
    "authors": "Han Zhou, Xingchen Wan, Ruoxi Sun et al.",
    "methodFamily": "提示-拓扑交错分级优化",
    "tags": [
      "提示优化",
      "拓扑优化",
      "分级优化",
      "设计空间分析",
      "设计原则"
    ],
    "scores": {
      "clarity": 0.85,
      "evidence": 0.83,
      "reproducibility": 0.79,
      "adoption": 0.64,
      "selfEvolution": 0.82
    },
    "summary": "针对多智能体系统的提示与拓扑设计本质复杂、难以自动化的问题,先深入分析设计空间揭示提示与拓扑共同起关键作用,进而提出 MASS 优化框架:分块级(局部)提示优化、工作流拓扑优化、工作流级(全局)提示优化三阶段交错、层层条件依赖,所得系统大幅超越一众现有方案,并据此提炼出有效多智能体系统的设计原则。",
    "methodCore": "MASS 关注的问题是:被当作多智能体协作使用的大模型,其表现取决于两组设计——声明各智能体功能的提示(prompts),以及编排智能体间交互的拓扑(topologies)。为多智能体系统设计好的提示与拓扑本质上极其复杂:两者相互耦合、搜索空间巨大,人工调试既费力又难以逼近最优。MASS 的目标,是把这整个设计过程自动化。\n\n## 先分析设计空间,再动手优化\n不同于直接堆砌搜索算法,MASS 首先对设计空间做了深入分析,以理解构建有效多智能体系统背后的因素。这项分析揭示了一个关键结论:提示与拓扑共同扮演着至关重要的角色——两者都不可偏废,且彼此影响。正是基于这一洞见,MASS 才设计出后续的优化流程。这种「先理解、再优化」的方法论,让框架的设计有的放矢,而非盲目搜索。\n\n## 从局部到全局、从提示到拓扑的三阶段\n基于上述洞见,MASS(Multi-Agent System Search)通过交错其优化阶段来高效地开发复杂的多智能体设计空间——从局部到全局、从提示到拓扑,分为三个阶段:其一是块级(局部)提示优化;其二是工作流拓扑优化;其三是工作流级(全局)提示优化。而且每一阶段都以前面阶段迭代优化出的提示/拓扑为条件展开。这种「先把单块提示调好,再优化整体拓扑,最后在确定的拓扑上做全局提示微调」的分级交错策略,巧妙地把庞大而耦合的搜索空间拆解为可依次攻克的子问题。\n\n## 层层条件依赖的优化逻辑\n三阶段之间的条件依赖是 MASS 效率的来源:拓扑优化是在已经调好的块级提示之上进行的,全局提示优化又是在已经确定的拓扑之上进行的。这样,每一步优化都建立在前一步的成果之上,避免了在提示与拓扑这两个耦合维度上同时盲目搜索所带来的组合爆炸,让优化过程既高效又稳定地收敛。\n\n## 实证与对自我进化的价值\n实验显示,经 MASS 优化的多智能体系统以显著幅度超越了一众现有替代方案;基于 MASS 找到的系统,作者最终提炼出构建有效多智能体系统的设计原则。从自我进化的视角看,MASS 的贡献不仅在于一个高效的优化框架,更在于它把「什么样的提示与拓扑组合才有效」这一隐性知识显性化为可复用的设计原则。这种「通过自动优化反过来提炼设计规律」的做法,让智能体系统的自我改良不再停留于黑箱搜索,而是能沉淀出可迁移、可指导后续设计的原则性认识,这种「先自动优化、再提炼原则」的双向路线,让每一次搜索既产出更强的系统,又沉淀出可指导未来的知识,为多智能体系统的持续进化提供了既能自动优化、又能积累可解释经验的双重价值。",
    "evaluation": "实验显示经 MASS 优化的多智能体系统以显著幅度超越一众现有替代方案;通过对设计空间的深入分析验证提示与拓扑共同起关键作用,并基于 MASS 找到的系统提炼出构建有效多智能体系统的设计原则。",
    "mainFinding": "多智能体系统的提示与拓扑共同起关键作用;用「块级提示→拓扑→全局提示」三阶段交错、层层条件依赖的 MASS 分级优化,能高效开发耦合的设计空间、大幅超越现有方案,并提炼出可复用的设计原则。",
    "limitations": "三阶段优化仍需在每阶段真实执行评估,整体搜索成本可观;分级顺序与各阶段搜索空间的设定影响最终结果,提炼出的设计原则的普适性需在更多场景验证。",
    "related": [
      "workflow-agentsquare",
      "workflow-gptswarm",
      "workflow-aflow"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2502.02533"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2502.02533"
      }
    ],
    "citation": "Multi-Agent Design: Optimizing Agents with Better Prompts and Topologies, ICML 2025.",
    "figures": [
      {
        "src": "figures/workflow-mass.png",
        "caption": "MASS 概览:从局部到全局、从提示到拓扑三阶段交错优化,每阶段以前序优化结果为条件,层层收敛出有效多智能体系统。"
      }
    ]
  },
  {
    "id": "workflow-dylan",
    "page": "workflow",
    "title": "A Dynamic LLM-Powered Agent Network for Task-Oriented Agent Collaboration",
    "shortTitle": "DyLAN",
    "category": "workflow-graph",
    "maturity": "growing",
    "score": 0.78,
    "year": 2023,
    "venue": "COLM 2024",
    "authors": "Zijun Liu, Yanzhe Zhang, Peng Li et al.",
    "methodFamily": "动态智能体网络团队优选",
    "tags": [
      "动态网络",
      "团队优化",
      "智能体重要度",
      "动态通信",
      "任务定向"
    ],
    "scores": {
      "clarity": 0.83,
      "evidence": 0.8,
      "reproducibility": 0.76,
      "adoption": 0.62,
      "selfEvolution": 0.8
    },
    "summary": "针对现有多智能体协作被固定智能体数量与静态通信结构所限的问题,提出动态大模型智能体网络 DyLAN:分「团队优化」与「任务求解」两阶段,先用基于无监督「智能体重要度分数」的选择算法挑出对给定任务贡献最大的智能体团队,再让选中的智能体依查询动态协作,在代码、决策、推理等任务上以适中成本超越强基线,MMLU 特定科目上团队优选提升准确率至多 25.0%。",
    "methodCore": "DyLAN 关注的问题是:近来研究表明,让多个大模型驱动的智能体协作是一条很有前景的解题路径,但现有做法受限于使用固定数量的智能体和静态的通信结构。固定的团队规模和一成不变的通信拓扑,无法针对不同任务与领域灵活调整,既可能造成冗余,也可能力有不逮。DyLAN 提出自动地从候选中选出一支智能体团队,在动态通信结构中面向不同任务与领域展开协作。\n\n## 两阶段范式:团队优化与任务求解\nDyLAN 构建了一个名为「动态大模型智能体网络」(Dynamic LLM-Powered Agent Network)的框架,运行一个两阶段范式:第一阶段是团队优化(Team Optimization),第二阶段是任务求解(Task Solving)。先优化「谁来组队」,再让优化后的团队去解题——这种把「选人」与「做事」分开的设计,是 DyLAN 区别于固定团队方法的核心。\n\n## 基于智能体重要度分数的团队优选\n在第一阶段,DyLAN 使用一个智能体选择算法,它基于一个无监督的指标——智能体重要度分数(Agent Importance Score)。这个分数衡量各智能体在一次初步试跑中对给定任务的贡献大小,据此挑选出最合适的智能体团队。无监督是其优点:无需额外标注,只凭初步试跑就能评估每个智能体的价值,从而面向具体任务组建出贡献最大的团队。\n\n## 依查询动态协作\n在第二阶段,被选中的智能体依据查询动态地协作。也就是说,通信结构不是预先固定的,而是随着具体查询灵活组织的。团队成员根据当前任务的需要动态地交互与配合,而非按一张静态拓扑机械地传递信息。这让协作既贴合任务、又避免了无谓的通信开销。\n\n## 实证与对自我进化的价值\n实验表明,DyLAN 在代码生成、决策制定、通用推理与算术推理等任务上以适中的计算成本超越了强基线;在 MMLU 的特定科目上,团队优化阶段的智能体选择把准确率最多提升了 25.0%。从自我进化的视角看,DyLAN 提供了一个「按任务动态重组团队」的思路:系统不必固守一个僵化的智能体阵容,而是能根据任务特征自动评估、筛选并组织出最合适的协作团队。这种以无监督重要度分数为依据的团队优选,加上依查询动态调整的通信结构,让多智能体系统能够针对不同任务持续自我调整其组成与协作方式,在保持适中成本的同时不断逼近更优的协作配置,为面向多样任务的自适应协作进化提供了可行范式。两阶段解耦「选人」与「做事」的设计,也让团队构成本身成为一个可被独立优化的对象,使系统能在不重训个体模型的前提下,仅凭重组团队就获得可观的能力提升。",
    "evaluation": "实验表明 DyLAN 在代码生成、决策制定、通用推理与算术推理等任务上以适中计算成本超越强基线;在 MMLU 特定科目上,团队优化阶段的智能体选择把准确率最多提升 25.0%,验证基于智能体重要度分数的团队优选价值。",
    "mainFinding": "用两阶段范式打破固定团队与静态通信的限制:先以无监督的智能体重要度分数选出对任务贡献最大的团队,再让其依查询动态协作,能以适中成本超越强基线,团队优选在 MMLU 特定科目提升准确率至多 25.0%。",
    "limitations": "团队优化阶段的初步试跑带来额外调用成本;智能体重要度分数依赖初步试跑的代表性,选择质量与候选智能体池的构成相关。",
    "related": [
      "workflow-flow",
      "workflow-gdesigner",
      "workflow-gptswarm"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2310.02170"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2310.02170"
      },
      {
        "label": "代码",
        "href": "https://github.com/SALT-NLP/DyLAN"
      }
    ],
    "citation": "A Dynamic LLM-Powered Agent Network for Task-Oriented Agent Collaboration, COLM 2024.",
    "figures": [
      {
        "src": "figures/workflow-dylan.png",
        "caption": "DyLAN 概览:先在团队优化阶段用智能体重要度分数选出最优团队,再让选中的智能体依查询在动态通信结构中协作求解。"
      }
    ]
  },
  {
    "id": "workflow-flow",
    "page": "workflow",
    "title": "Scaling Large Language Model-based Multi-Agent Collaboration",
    "shortTitle": "MacNet",
    "category": "workflow-graph",
    "maturity": "growing",
    "score": 0.8,
    "year": 2024,
    "venue": "ICLR 2025",
    "authors": "Chen Qian, Zihao Xie, YiFei Wang et al.",
    "methodFamily": "有向无环图协作网络扩展",
    "tags": [
      "协作扩展律",
      "有向无环图",
      "MacNet",
      "涌现",
      "千级智能体"
    ],
    "scores": {
      "clarity": 0.83,
      "evidence": 0.81,
      "reproducibility": 0.76,
      "adoption": 0.6,
      "selfEvolution": 0.82
    },
    "summary": "受神经元扩展律启发,探究持续增加协作智能体能否带来类似收益:用有向无环图把智能体组织成多智能体协作网络 MacNet,拓扑化编排其交互推理;发现它能支撑超过一千个智能体协作、不规则拓扑优于规则拓扑,并揭示「协作扩展律」——整体性能随智能体规模呈逻辑斯蒂增长,且协作涌现早于传统神经涌现。",
    "methodCore": "这项工作从一个基本观察出发:大模型驱动的自主智能体的突破表明,多智能体协作往往能通过集体推理超越任何单个个体。受神经扩展律——增加神经元数量可提升性能——的启发,本研究探究一个诱人的问题:持续增加协作智能体的数量,是否也能带来类似的收益?这把「规模」这一深度学习的核心议题引入了多智能体协作。\n\n## 用有向无环图组织协作网络 MacNet\n技术上,作者利用有向无环图(directed acyclic graphs)把智能体组织成一个多智能体协作网络(MacNet),并在其上对智能体的交互推理进行拓扑化编排,以实现自主的任务求解。有向无环图的选择既保证了信息流动的方向性、避免了循环依赖,又提供了足够灵活的拓扑表达能力,让大量智能体能够以结构化的方式协同工作。MacNet 因此成为承载大规模智能体协作的骨架。\n\n## 支撑千级智能体与不规则拓扑的优势\n大量评估揭示,MacNet 能够有效支撑超过一千个智能体之间的协作,而且不规则拓扑(irregular topologies)的表现优于规则拓扑(regular ones)。前者证明了该框架在规模上的可扩展性——协作不再局限于寥寥数个智能体;后者则是一个有意思的发现:精心设计或自然涌现的不规则连接结构,反而比整齐划一的规则结构更能激发有效协作,这为拓扑设计提供了重要启示。\n\n## 协作扩展律:逻辑斯蒂增长与早于神经的涌现\n研究还识别出一条协作扩展律(collaborative scaling law):整体性能随智能体规模增长呈现逻辑斯蒂(logistic)增长模式,且「协作涌现」(collaborative emergence)发生得比传统的神经涌现更早。作者推测,这可能是因为扩展智能体数量在交互式反思与精修过程中催化了它们的多维度考量,从而产出更全面的成果。这条扩展律把「多加智能体」这件事从经验之谈提升为有规律可循的定量认识。\n\n## 对自我进化的价值\n这项工作为自我进化提供了「规模视角」的重要参照:当把协作智能体的数量当作一个可扩展的维度,系统的整体能力会遵循可预测的扩展律而增长,且协作带来的涌现比单模型的神经涌现来得更早。这意味着,一个能够自主组织大规模智能体协作网络的系统,可以通过「扩展协作规模」这一途径持续提升自身能力,而不必单纯依赖更强的个体模型。不规则拓扑优于规则拓扑的发现,又提示自我进化的系统应当去探索并演化出非平凡的协作结构,而非固守整齐的连接模式;这些定量规律为大规模协作式自我进化提供了可依循的设计与预测依据。",
    "evaluation": "大量评估揭示 MacNet 能有效支撑超过一千个智能体的协作,且不规则拓扑优于规则拓扑;并识别出协作扩展律——整体性能随智能体规模呈逻辑斯蒂增长,协作涌现早于传统神经涌现,验证「增加协作智能体可带来类神经扩展收益」的假设。",
    "mainFinding": "用有向无环图把智能体组织成协作网络 MacNet 并拓扑化编排交互推理,可支撑千级智能体协作,不规则拓扑优于规则拓扑;性能随规模呈逻辑斯蒂增长,协作涌现早于神经涌现。",
    "limitations": "支撑上千智能体协作的计算与通信成本高昂;协作扩展律为经验性观察,其在不同任务与模型上的普适边界仍需更多验证。",
    "related": [
      "workflow-gptswarm",
      "workflow-dylan",
      "workflow-gdesigner"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2406.07155"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2406.07155"
      },
      {
        "label": "代码",
        "href": "https://github.com/OpenBMB/ChatDev/tree/macnet"
      }
    ],
    "citation": "Scaling Large Language Model-based Multi-Agent Collaboration, ICLR 2025.",
    "figures": [
      {
        "src": "figures/workflow-flow.png",
        "caption": "MacNet 概览:用有向无环图组织多智能体协作网络并拓扑化编排交互推理,揭示性能随智能体规模呈逻辑斯蒂增长的协作扩展律。"
      }
    ]
  },
  {
    "id": "workflow-gdesigner",
    "page": "workflow",
    "title": "G-Designer: Architecting Multi-agent Communication Topologies via Graph Neural Networks",
    "shortTitle": "G-Designer",
    "category": "workflow-graph",
    "maturity": "growing",
    "score": 0.81,
    "year": 2024,
    "venue": "arXiv 2024",
    "authors": "Guibin Zhang, Yanwei Yue, Xiangguo Sun et al.",
    "methodFamily": "变分图自编码器拓扑设计",
    "tags": [
      "通信拓扑",
      "变分图自编码器",
      "任务自适应",
      "token 节省",
      "对抗鲁棒"
    ],
    "scores": {
      "clarity": 0.84,
      "evidence": 0.83,
      "reproducibility": 0.78,
      "adoption": 0.64,
      "selfEvolution": 0.82
    },
    "summary": "针对实践者在众多高性能通信拓扑中难以为具体任务选出最优、又要兼顾 token 开销的困境,提出自适应、高效、鲁棒的 G-Designer:把多智能体系统建模为网络,用变分图自编码器编码智能体节点与任务特定虚拟节点,解码出任务自适应的高性能通信拓扑,MMLU 达 84.50%、HumanEval pass@1 达 89.90%,HumanEval 上 token 至多降 95.33%,对抗攻击下准确率仅降 0.3%。",
    "methodCore": "G-Designer 关注一个非常实际的困境:基于大模型的智能体已证明集体智能能显著超越单个智能体,而这主要归功于精心设计的智能体间通信拓扑。可是,面对众多多样且高性能的拓扑设计,实践者常常困惑于该为自己的具体任务选择哪一套流程——哪种拓扑既能避免不必要的通信 token 开销,又能保证高质量的解答?G-Designer 正是要回答这个「该选哪种拓扑」的难题。\n\n## 把多智能体系统建模为可学习的网络\nG-Designer 是一个自适应、高效且鲁棒的多智能体部署方案,它能动态地设计出任务感知、量身定制的通信拓扑。具体做法是把多智能体系统建模为一个多智能体网络,在这个网络视角下,智能体成为节点,它们之间的通信关系成为边。这样,「设计通信拓扑」就转化为「在图上生成合适的连接结构」,从而可以用图学习的工具来自动完成。\n\n## 变分图自编码器的编码-解码\n技术核心是一个变分图自编码器(variational graph auto-encoder):它既编码节点(即各个智能体),又编码一个任务特定的虚拟节点(task-specific virtual node),然后解码出一个任务自适应的、高性能的通信拓扑。引入任务虚拟节点是关键设计——它把当前任务的信息注入编码过程,使得解码出来的拓扑能够随任务而变。面对不同任务,G-Designer 能生成不同的、恰到好处的通信结构,而非套用一张固定的图。\n\n## 三重实证特性:高性能、任务自适应、对抗鲁棒\n六个基准上的大量实验展示了 G-Designer 的三重特性。其一是高性能:在 MMLU 上准确率达 84.50%,在 HumanEval 上 pass@1 达 89.90%。其二是任务自适应:它能根据任务难度架构相应的通信协议,在 HumanEval 上把 token 消耗最多降低 95.33%——简单任务用稀疏拓扑,复杂任务才用稠密拓扑。其三是对抗鲁棒:在面对智能体对抗攻击时,准确率仅下降 0.3%,展现出很强的防御能力。\n\n## 对自我进化的价值\nG-Designer 为自我进化贡献了「拓扑即可学习对象」的范式:多智能体系统的通信结构不必由人手工选定,而可以由一个图生成模型依据任务动态地设计出来。通过任务虚拟节点,系统能感知当前任务的特性并据此生成最匹配的协作拓扑,从而在性能、成本与鲁棒性三者间自动取得平衡。这种「按任务自适应地架构通信结构」的能力,让智能体系统能够对不同任务持续地重塑自身的协作方式,把昂贵的通信开销只花在真正需要的地方,并在对抗环境下保持稳定;这为多智能体系统协作结构的持续自我优化提供了一个高效而鲁棒的生成式路径。",
    "evaluation": "六个基准上的大量实验验证 G-Designer 三重特性:高性能(MMLU 84.50%、HumanEval pass@1 89.90%)、任务自适应(按任务难度架构协议,HumanEval 上 token 消耗最多降 95.33%)、对抗鲁棒(面对智能体对抗攻击准确率仅降 0.3%)。",
    "mainFinding": "把多智能体系统建模为网络,用变分图自编码器编码智能体节点与任务虚拟节点、解码出任务自适应的通信拓扑,能同时做到高性能、按任务难度大幅节省 token、以及对抗攻击下几乎不掉点。",
    "limitations": "变分图自编码器需在数据上训练,拓扑生成质量依赖训练覆盖的任务分布;对全新任务类型的自适应能力与虚拟节点表示的表达力相关。",
    "related": [
      "workflow-gptswarm",
      "workflow-masrouter",
      "workflow-flow"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2410.11782"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2410.11782"
      }
    ],
    "citation": "G-Designer: Architecting Multi-agent Communication Topologies via Graph Neural Networks, arXiv 2024.",
    "figures": [
      {
        "src": "figures/workflow-gdesigner.png",
        "caption": "G-Designer 概览:用变分图自编码器编码智能体节点与任务虚拟节点,解码出任务自适应、省 token 且对抗鲁棒的通信拓扑。"
      }
    ]
  },
  {
    "id": "workflow-archon",
    "page": "workflow",
    "title": "Archon: An Architecture Search Framework for Inference-Time Techniques",
    "shortTitle": "Archon",
    "category": "workflow-graph",
    "maturity": "growing",
    "score": 0.79,
    "year": 2024,
    "venue": "arXiv 2024",
    "authors": "Jon Saad-Falcon, Adrian Gamarra Lafuente, Shlok Natarajan et al.",
    "methodFamily": "推理期技术架构搜索",
    "tags": [
      "推理期技术",
      "架构搜索",
      "帕累托前沿",
      "计算预算",
      "模块化"
    ],
    "scores": {
      "clarity": 0.83,
      "evidence": 0.81,
      "reproducibility": 0.77,
      "adoption": 0.62,
      "selfEvolution": 0.79
    },
    "summary": "针对重复采样、迭代修订等推理期技术组合缺乏最佳实践、搜索空间庞大的问题,提出模块化自动框架 Archon:给定计算预算与可用模型集,在庞大设计空间中搜索面向目标基准的优化配置,推进准确率对最大 token 预算的帕累托前沿,在指令遵循、推理与编码任务上平均超越 o1、GPT-4o、Claude 3.5 Sonnet 等前沿模型 15.1%。",
    "methodCore": "Archon 关注的是推理期技术(inference-time techniques)的组合难题。重复采样、迭代修订等推理期技术正成为在测试时增强大模型的有力手段,但如何开发结合这些技术的系统,其最佳实践仍然发育不足。原因有三:我们对每种技术在不同模型与任务上的效用理解有限;技术之间存在复杂的相互作用;而组合它们的搜索空间又极其庞大。Archon 要解决的,正是「如何自动地选择并组合推理期技术与模型」这一问题。\n\n## 模块化自动搜索框架\nArchon 是一个模块化的自动化框架,用于优化「选择并组合推理期技术与大模型」这一过程。给定一个计算预算和一组可用的大模型,Archon 会在一个庞大的设计空间中探索,发现针对目标基准的优化配置。模块化意味着各种推理期技术都被抽象成可插拔、可组合的单元,而自动化则意味着最佳组合由框架搜索得出,而非人工拼凑。这让原本靠经验和试错的系统搭建,变成了有预算约束的自动优化。\n\n## 推进准确率-token 预算的帕累托前沿\nArchon 既能设计定制的,也能设计通用的架构,并且这些架构能够推进准确率对最大 token 预算(accuracy vs. maximum token budget)的帕累托前沿——相较于表现最好的基线更进一步。帕累托前沿的表述很重要:Archon 不是单纯追求最高准确率,而是在「准确率」与「token 预算」这一对相互制约的目标之间,找到一系列更优的权衡点。给定多少算力,就把这些算力用出最高的性价比。\n\n## 用更多推理算力换取超越前沿模型\n在指令遵循、推理与编码任务上,作者展示了 Archon 能够利用额外的推理计算预算来设计系统,平均超越 OpenAI 的 o1、GPT-4o 与 Claude 3.5 Sonnet 等前沿模型 15.1%。这一结果印证了推理期技术组合的巨大潜力:通过在测试时投入更多算力、并把这些算力以最优方式组织起来,即便底层不换更强的模型,系统整体也能显著超越前沿模型的单次表现。\n\n## 对自我进化的价值\nArchon 为自我进化提供了「推理期自我增强」的视角:系统的能力提升不必都来自训练阶段,也可以来自对推理期技术的自动化组合与优化。当一个框架能够在给定算力预算下,自动搜索出最优的技术—模型组合并推进性能—成本的帕累托前沿时,系统就获得了一种「用算力换能力」的可调节自我增强手段。这种模块化、可按预算优化的架构搜索,让智能体系统能够依据可用资源动态地重组自身的推理策略,在不同的算力约束下都逼近最优表现,为推理期层面的持续自我优化提供了系统化的方法论。",
    "evaluation": "在指令遵循、推理与编码任务上评估,Archon 能利用额外推理计算预算设计出平均超越 o1、GPT-4o、Claude 3.5 Sonnet 等前沿模型 15.1% 的系统;并验证其设计的架构能推进准确率对最大 token 预算的帕累托前沿。",
    "mainFinding": "把推理期技术与模型的选择组合抽象为模块化架构搜索,在给定算力预算下自动发现优化配置,能推进准确率-token 预算的帕累托前沿,平均超越 o1、GPT-4o、Claude 3.5 Sonnet 等前沿模型 15.1%。",
    "limitations": "在庞大设计空间中搜索并评估配置本身消耗可观的推理算力;最优组合依赖目标基准,跨基准的通用架构与定制架构之间需权衡。",
    "related": [
      "workflow-mass",
      "workflow-agentsquare",
      "workflow-adas"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2409.15254"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2409.15254"
      },
      {
        "label": "代码",
        "href": "https://github.com/ScalingIntelligence/Archon"
      }
    ],
    "citation": "Archon: An Architecture Search Framework for Inference-Time Techniques, arXiv 2024.",
    "figures": [
      {
        "src": "figures/workflow-archon.png",
        "caption": "Archon 概览:在给定算力预算下,对重复采样、迭代修订等推理期技术与模型做模块化架构搜索,推进准确率-token 预算帕累托前沿。"
      }
    ]
  },
  {
    "id": "workflow-symbolic",
    "page": "workflow",
    "title": "Symbolic Learning Enables Self-Evolving Agents",
    "shortTitle": "Agent Symbolic Learning",
    "category": "workflow-graph",
    "maturity": "growing",
    "score": 0.84,
    "year": 2024,
    "venue": "arXiv 2024",
    "authors": "Wangchunshu Zhou, Yixin Ou, Shengwei Ding et al.",
    "methodFamily": "符号化反向传播自优化",
    "tags": [
      "符号学习",
      "数据中心",
      "语言化反向传播",
      "自我进化",
      "符号网络"
    ],
    "scores": {
      "clarity": 0.84,
      "evidence": 0.8,
      "reproducibility": 0.75,
      "adoption": 0.62,
      "selfEvolution": 0.9
    },
    "summary": "针对当前语言智能体以模型/工程为中心、进步高度依赖人工工程的根本局限,主张转向以数据为中心——让智能体在环境中自主学习与进化;提出智能体符号学习框架,把智能体视为符号网络(提示、工具及其堆叠方式为可学习权重),用自然语言模拟反向传播与梯度下降来优化,使智能体在部署后仍能自我更新,成为「自我进化智能体」。",
    "methodCore": "这篇工作直指当前语言智能体研究的一个根本局限:通往通用人工智能(AGI)的一条路径是开发「语言智能体」——涉及提示技巧与工具使用方法的复杂大模型流程。尽管语言智能体在许多真实任务上展现了令人印象深刻的能力,但当前研究是以模型为中心、或以工程为中心的。也就是说,提示、工具、流程上的每一点进步,都需要人类专家投入大量的手工工程,而不是从数据中自动学习。作者相信,从「以模型/工程为中心」转向「以数据为中心」——即让语言智能体具备在环境中自主学习与进化的能力——是它们可能实现 AGI 的关键。\n\n## 把智能体视为符号网络\n为此,作者提出了智能体符号学习(agent symbolic learning),一个系统性框架,让语言智能体能够以数据为中心的方式、用符号优化器自己优化自己。具体而言,他们把智能体视为符号网络(symbolic networks),其中可学习的「权重」由提示、工具、以及它们堆叠组合的方式所定义。这是一个精妙的类比:正如神经网络的权重是数值参数,智能体这张「符号网络」的权重是提示与工具的配置,而学习就是去优化这些符号权重。\n\n## 语言化的反向传播与梯度下降\n智能体符号学习通过模仿联结主义学习中的两个基本算法——反向传播(back-propagation)与梯度下降(gradient descent)——来优化语言智能体内部的符号网络。不同的是,它不处理数值权重,而是与权重、损失、梯度的「自然语言模拟物」(natural language simulacrums)打交道。也就是说,损失是用自然语言描述的、梯度也是用自然语言表达的,整个「反向传播」过程在语言层面进行:根据任务反馈生成语言化的「梯度」,再据此更新语言化的「权重」(提示与工具配置)。这把深度学习的优化范式巧妙地移植到了符号世界。\n\n## 部署后仍能自我更新\n作者在标准基准与复杂真实任务上进行了概念验证实验,结果表明智能体符号学习能让语言智能体在被创建并部署到真实环境之后仍然更新自己,由此产生「自我进化智能体」(self-evolving agents)。这一点至关重要:传统智能体一旦部署就固化了,而经过符号学习的智能体能在实际运行中根据遇到的数据持续改良自身的提示与工具组合,真正做到「越用越好」。\n\n## 对自我进化的价值\n这篇工作几乎就是「自我进化智能体」概念的奠基性表述之一。它的深刻之处在于,把连接主义学习中最核心的反向传播—梯度下降范式,以自然语言的形式迁移到了智能体的符号网络上,从而让智能体能够以数据为中心地自主优化,而无需人类专家在每一步上手工调参。当损失、梯度、权重都被语言化,智能体就获得了一套通用的自我优化机制:它能从环境反馈中学习,持续更新自己的提示与工具配置,在部署后不断进化。这种从「工程中心」到「数据中心」的范式转变,为整个自我进化智能体领域指明了方向,也让「智能体自主学习、终身进化」从理念变成了可操作的技术框架。",
    "evaluation": "在标准基准与复杂真实任务上进行概念验证实验,结果表明智能体符号学习能让语言智能体在创建并部署到真实环境后仍持续更新自己,产生「自我进化智能体」,验证以自然语言模拟反向传播与梯度下降优化符号网络的可行性。",
    "mainFinding": "把语言智能体视为以提示、工具及其堆叠方式为可学习权重的符号网络,用自然语言模拟反向传播与梯度下降来优化,能让智能体以数据为中心地自主优化、在部署后仍持续自我更新,成为自我进化智能体。",
    "limitations": "作为概念验证,大规模稳定性与长期自我进化的收敛性仍需更多验证;语言化梯度与损失的质量依赖底层大模型的反思能力,优化信号噪声会影响更新方向。",
    "related": [
      "workflow-adas",
      "workflow-marft",
      "workflow-gptswarm"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2406.18532"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2406.18532"
      },
      {
        "label": "代码",
        "href": "https://github.com/aiwaves-cn/agents"
      }
    ],
    "citation": "Symbolic Learning Enables Self-Evolving Agents, arXiv 2024.",
    "figures": [
      {
        "src": "figures/workflow-symbolic.png",
        "caption": "智能体符号学习概览:把智能体视为符号网络,以自然语言模拟反向传播与梯度下降,优化由提示与工具堆叠定义的符号权重。"
      }
    ]
  },
  {
    "id": "workflow-statellm",
    "page": "workflow",
    "title": "StateFlow: Enhancing LLM Task-Solving through State-Driven Workflows",
    "shortTitle": "StateFlow",
    "category": "workflow-fsm",
    "maturity": "growing",
    "score": 0.78,
    "year": 2024,
    "venue": "COLM 2024",
    "authors": "Yiran Wu, Tianwei Yue, Shaokun Zhang et al.",
    "methodFamily": "状态机驱动任务求解",
    "tags": [
      "状态机",
      "流程接地",
      "子任务求解",
      "可解释",
      "成本降低"
    ],
    "scores": {
      "clarity": 0.84,
      "evidence": 0.81,
      "reproducibility": 0.78,
      "adoption": 0.64,
      "selfEvolution": 0.76
    },
    "summary": "针对大模型处理需要一系列动作、与工具及外部环境动态交互的复杂任务,提出把复杂任务求解过程概念化为状态机的新范式 StateFlow,区分「流程接地」(状态与状态转移)与「子任务求解」(状态内动作),增强控制与可解释性;在 InterCode SQL 与 ALFWorld 上较 ReAct 成功率高 13% 与 28%,成本分别省 5 倍与 3 倍,还能与 Reflexion 等迭代精修方法结合。",
    "methodCore": "StateFlow 关注的是一个明显的趋势:人们越来越多地用大模型去处理复杂任务——例如那些需要一系列动作、并要与工具和外部环境动态交互的任务。这类任务的难点在于,过程冗长、分支复杂,单纯让大模型自由发挥容易失控,也难以解释它究竟走到了哪一步。StateFlow 的破题思路,是借用经典的状态机来给这类任务求解过程立一个清晰的骨架。\n\n## 把任务求解概念化为状态机\nStateFlow 是一种新颖的、基于大模型的任务求解范式,它把复杂的任务求解过程概念化为状态机(state machines)。在这一范式下,一个状态代表运行过程的某种状态(status),整个求解过程就是在若干状态之间转移的过程。用状态机来刻画任务流程,让原本模糊的「解题过程」变成了结构清晰、边界明确的状态转移图,这是 StateFlow 一切控制与可解释性收益的来源。\n\n## 区分「流程接地」与「子任务求解」\nStateFlow 的核心设计是明确区分两件事:一是「流程接地」(process grounding),通过状态和状态之间的转移来实现;二是「子任务求解」(sub-task solving),通过某个状态内部执行的动作来实现。这一区分极大地增强了任务求解过程的控制力与可解释性——「现在处于哪个阶段」由状态清楚地标示,「这个阶段该干什么」由状态内的动作负责。把「流程走到哪」和「具体怎么做」解耦开来,让复杂流程变得可控、可读、可调试。\n\n## 状态转移与状态内动作\n状态之间的转移由启发式规则或大模型做出的决策来控制,这允许流程有动态、自适应的推进——既可以用固定规则保证可靠,也可以让大模型在需要时灵活决断走向。而一旦进入某个状态,就会执行一系列动作:这不仅包括用不同提示引导的大模型调用,也包括按需使用外部工具。如此,状态机既提供了骨架,又在每个状态内保留了调用模型与工具的充分灵活性。\n\n## 实证与对自我进化的价值\n实验结果显示,StateFlow 显著提升了大模型的效率。例如,在 InterCode SQL 与 ALFWorld 基准上,StateFlow 相较 ReAct 分别取得高出 13% 与 28% 的成功率,同时成本分别减少 5 倍与 3 倍。作者还表明,StateFlow 可以与 Reflexion 等迭代精修方法结合,进一步提升表现。从自我进化的视角看,StateFlow 提供了一种「结构化可控」的流程基底:当任务求解被组织成清晰的状态机,系统的每一步都变得可观测、可解释、可干预,这为在其上叠加反思与迭代精修(如与 Reflexion 结合)创造了理想条件。一个结构清晰、状态可控的流程,更容易被后续的自我改良机制精准定位问题、局部优化,从而让智能体在保持高效与低成本的同时,具备可持续改进的良好基础。",
    "evaluation": "在 InterCode SQL 与 ALFWorld 基准上,StateFlow 相较 ReAct 分别取得高出 13% 与 28% 的成功率,同时成本分别减少 5 倍与 3 倍;并验证 StateFlow 可与 Reflexion 等迭代精修方法结合以进一步提升表现,说明其状态机结构对效率与可组合性的价值。",
    "mainFinding": "把复杂任务求解概念化为状态机,区分「流程接地」(状态与转移)与「子任务求解」(状态内动作),能增强控制与可解释性;较 ReAct 成功率高 13%~28%、成本省 3~5 倍,且可与 Reflexion 结合。",
    "limitations": "状态与状态转移的设计仍需一定的人工先验,复杂任务的状态划分影响效果;状态转移由启发式规则或大模型决策控制,决策质量依赖模型能力与规则设计。",
    "related": [
      "workflow-workflowgen",
      "workflow-dyflow",
      "workflow-autoflow"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2403.11322"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2403.11322"
      },
      {
        "label": "代码",
        "href": "https://github.com/yiranwu0/StateFlow"
      }
    ],
    "citation": "StateFlow: Enhancing LLM Task-Solving through State-Driven Workflows, COLM 2024.",
    "figures": [
      {
        "src": "figures/workflow-statellm.png",
        "caption": "StateFlow 概览:把复杂任务求解建模为状态机,区分状态与转移构成的流程接地,以及每个状态内调用大模型与工具的子任务求解。"
      }
    ]
  },
  {
    "id": "workflow-workflowgen",
    "figures": [{"src": "figures/workflow-workflowgen.png", "caption": "WorkflowGen · 架构/流程示意"}], "page": "workflow",
    "title": "WorkflowGen: An Adaptive Workflow Generation Mechanism Driven by Trajectory Experience",
    "shortTitle": "WorkflowGen",
    "category": "workflow-fsm",
    "maturity": "exploring",
    "score": 0.7,
    "year": 2026,
    "venue": "arXiv 2026",
    "authors": "Ruocan Wei, Shufeng Wang, Ziwei Shi",
    "methodFamily": "轨迹经验驱动流程生成",
    "tags": [
      "轨迹经验",
      "闭环生成",
      "三级路由",
      "经验复用",
      "token 节省"
    ],
    "scores": {
      "clarity": 0.8,
      "evidence": 0.72,
      "reproducibility": 0.7,
      "adoption": 0.54,
      "selfEvolution": 0.8
    },
    "summary": "针对大模型智能体推理开销大、token 消耗高、执行不稳、无法复用历史经验,且传统方法每次从零生成流程导致高成本低鲁棒的问题,提出轨迹经验驱动的自适应流程生成框架 WorkflowGen:从早期执行中捕获完整轨迹、在节点与流程两级抽取可复用知识,以闭环机制仅对可变节点做轻量生成,并用三级自适应路由在直接复用、改写生成与完整初始化间动态选择,相较实时规划省 token 逾 40%、中等相似查询成功率提升 20%。",
    "methodCore": "WorkflowGen 关注的是大模型智能体在业务查询、工具使用、流程编排等复杂任务中的一系列实际痛点:推理开销高、token 消耗过大、执行不稳定,以及无法复用过去的经验。传统方法为每一条查询都从零生成流程,导致成本高、响应慢、鲁棒性差。WorkflowGen 的核心想法,是让流程生成能够从历史轨迹中学习并复用经验,从而在成本、效率与成功率上全面改善。\n\n## 从执行轨迹中抽取可复用知识\nWorkflowGen 是一个自适应的、由轨迹经验驱动的自动流程生成框架。在执行早期,它捕获完整的执行轨迹,并在节点级与流程级两个层面抽取可复用的知识,包括错误指纹(error fingerprints)、最优工具映射、参数模式(parameter schemas)、执行路径,以及异常规避策略。这种「一边执行、一边沉淀经验」的做法,让系统把过去踩过的坑、走通的路都结构化地保存下来,成为后续生成流程时可以调用的宝贵资产,而不是每次都重新摸索。\n\n## 闭环机制:只对可变节点轻量生成\nWorkflowGen 采用一个闭环机制,只对「可变节点」执行轻量级的生成,具体通过轨迹改写(trajectory rewriting)、经验更新(experience updating)与模板归纳(template induction)三种手段实现。关键在于「只对可变节点生成」:流程中稳定不变的部分直接沿用历史经验,只有真正随查询变化的节点才需要重新生成。这大幅削减了生成的工作量与 token 消耗,是效率提升的直接来源。\n\n## 三级自适应路由\n为了决定每条查询该怎么处理,WorkflowGen 设计了一个三级自适应路由策略,依据与历史查询的语义相似度,在三种模式间动态选择:直接复用(direct reuse)、基于改写的生成(rewriting-based generation)、以及完整初始化(full initialization)。与历史高度相似的查询可以直接复用现成流程;中等相似的用改写生成;全新的才走完整初始化。这种按相似度分级的路由,让系统把生成成本精确匹配到每条查询的实际需要上。\n\n## 实证与对自我进化的价值\n在无需大规模标注数据集的情况下,作者定性地把 WorkflowGen 与实时规划、静态单轨迹、基础上下文学习等基线做了比较。方法相较实时规划把 token 消耗降低了逾 40%,并通过主动的错误规避与自适应回退,在中等相似查询上把成功率提升了 20%,还借助模块化、可追溯的经验增强了可部署性与跨场景适应性。从自我进化的视角看,WorkflowGen 展示了一条「经验驱动、越用越省」的路线:系统在运行中不断沉淀轨迹经验,并用这些经验为相似的新查询快速拼装流程,把宝贵的生成算力只花在真正新颖的部分。这种以可复用经验为核心、以相似度路由为调度的机制,让智能体系统能够随使用不断积累并复用知识,在效率、鲁棒性与可解释性之间取得务实平衡,为经验驱动的持续自我优化提供了可落地的工程范式。",
    "evaluation": "在无需大规模标注数据集的情况下,定性地把 WorkflowGen 与实时规划、静态单轨迹、基础上下文学习等基线比较:相较实时规划 token 消耗降低逾 40%,通过主动错误规避与自适应回退在中等相似查询上成功率提升 20%,并以模块化、可追溯的经验增强可部署性与跨场景适应性。",
    "mainFinding": "用轨迹经验驱动流程生成:早期捕获完整轨迹、在节点与流程两级抽取可复用知识,以闭环机制仅对可变节点轻量生成,并按语义相似度三级路由,能相较实时规划省 token 逾 40%、中等相似查询成功率提升 20%。",
    "limitations": "作为定性比较为主的工作,缺乏大规模标注数据上的定量基准验证;经验复用效果依赖历史轨迹与当前查询的相似度,面对与历史差异极大的全新查询收益有限。",
    "related": [
      "workflow-statellm",
      "workflow-autoflow",
      "workflow-adaptflow"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2604.19756"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2604.19756"
      }
    ],
    "citation": "WorkflowGen: An Adaptive Workflow Generation Mechanism Driven by Trajectory Experience, arXiv 2026."
  },
  {
    "id": "workflow-worfbench",
    "figures": [{"src": "figures/workflow-worfbench.png", "caption": "WorFBench · 架构/流程示意"}], "page": "workflow",
    "title": "Benchmarking Agentic Workflow Generation",
    "shortTitle": "WorFBench",
    "category": "workflow-benchmark",
    "maturity": "growing",
    "score": 0.8,
    "year": 2024,
    "venue": "ICLR 2025",
    "authors": "Shuofei Qiao, Runnan Fang, Zhisong Qiu et al.",
    "methodFamily": "图结构流程生成基准",
    "tags": [
      "流程生成基准",
      "图工作流",
      "子序列子图匹配",
      "序列vs图规划",
      "WorfEval"
    ],
    "scores": {
      "clarity": 0.84,
      "evidence": 0.82,
      "reproducibility": 0.82,
      "adoption": 0.66,
      "selfEvolution": 0.72
    },
    "summary": "针对现有流程评测框架要么只看整体性能、要么场景受限、结构简单、评价标准松散的问题,提出统一的流程生成基准 WorFBench(多面场景 + 复杂图结构工作流)与系统评价协议 WorFEval(用子序列与子图匹配算法精确量化流程生成能力);评测发现大模型的序列规划与图规划能力存在明显差距,连 GPT-4 也差约 15%,且生成的流程能提升下游任务表现。",
    "methodCore": "WorFBench 关注的是流程生成的评测问题。大模型在推理与规划任务上推动了显著进展,而把复杂问题分解为可执行的工作流是其中关键的一步。但现有的流程评测框架要么只关注整体性能(holistic performance),要么存在场景覆盖受限、工作流结构过于简单、评价标准松散等局限。缺乏一个严谨、全面的基准,就难以真正衡量大模型的流程生成能力。WorFBench 正是为填补这一空白而生。\n\n## 统一的流程生成基准\n为此,作者引入 WorFBench——一个统一的工作流生成基准,具备多面的场景(multi-faceted scenarios)与错综复杂的图工作流结构(intricate graph workflow structures)。相较以往简单的线性流程,WorFBench 采用图结构来刻画工作流,能更真实地反映复杂任务中并行、分支、依赖等结构关系;而多面场景则保证了评测覆盖面的广度。这让基准既贴近真实流程的复杂度,又具备足够的场景多样性。\n\n## WorFEval:子序列与子图匹配的评价协议\n配套地,作者提出了 WorFEval——一个系统性的评价协议,利用子序列匹配(subsequence matching)与子图匹配(subgraph matching)算法来精确量化大模型智能体的流程生成能力。子序列匹配衡量的是线性顺序上的规划正确性,子图匹配衡量的则是图结构上的规划正确性。用这两种匹配算法,WorFEval 能够既严谨又细致地评估生成的流程与标准答案之间的吻合程度,克服了以往评价标准松散的问题。\n\n## 关键发现:序列规划与图规划的差距\n通过对不同类型大模型的全面评测,作者发现了大模型智能体在序列规划能力与图规划能力之间存在明显差距——即便是 GPT-4 也表现出约 15% 的差距。这是一个重要而具体的发现:大模型擅长把任务排成一条线,却在处理具有复杂图结构依赖的规划时明显吃力。作者还训练了两个开源模型,评估它们在留出任务上的泛化能力;并观察到生成的工作流能够增强下游任务,使其在推理时以更少的时间取得更优表现。\n\n## 对自我进化的价值\nWorFBench 为流程的自我进化提供了不可或缺的「标尺」:任何自动化流程生成或优化方法,都需要一个严谨、覆盖复杂图结构的基准来客观衡量其能力与进步。WorFEval 的子序列/子图匹配协议,让「流程生成得好不好」有了精确、可复现的量化标准,而不是笼统地看最终任务成功率。它揭示的序列规划与图规划的差距,更为后续研究指明了明确的改进方向——如何提升大模型在复杂图结构上的规划能力。对自我进化系统而言,一个可靠的评测基准是持续改良的前提:只有能被准确度量的能力,才能被有针对性地优化;WorFBench 因此为流程生成能力的持续进化提供了坚实的评估基础设施。",
    "evaluation": "通过对不同类型大模型的全面评测,用 WorFEval 的子序列与子图匹配算法精确量化流程生成能力,发现序列规划与图规划能力存在明显差距(GPT-4 也约差 15%);并训练两个开源模型评估留出任务泛化,验证生成的流程能提升下游任务表现并缩短推理时间。",
    "mainFinding": "提出含多面场景与复杂图结构的统一流程生成基准 WorFBench 及用子序列/子图匹配的 WorFEval 协议,精确量化流程生成能力,揭示大模型序列规划与图规划间约 15% 的能力差距,并证明生成流程能增强下游任务。",
    "limitations": "构建复杂图结构工作流的标注与场景覆盖需要大量人工;子图匹配对结构等价的判定可能对某些语义等价但结构不同的流程偏严,评价协议本身仍有细化空间。",
    "related": [
      "workflow-flowbench",
      "workflow-gnnpred",
      "workflow-aflow"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2410.07869"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2410.07869"
      },
      {
        "label": "代码与数据集",
        "href": "https://github.com/zjunlp/WorfBench"
      }
    ],
    "citation": "Benchmarking Agentic Workflow Generation, ICLR 2025."
  },
  {
    "id": "workflow-flowbench",
    "page": "workflow",
    "title": "FlowBench: Revisiting and Benchmarking Workflow-Guided Planning for LLM-based Agents",
    "shortTitle": "FlowBench",
    "category": "workflow-benchmark",
    "maturity": "growing",
    "score": 0.78,
    "year": 2024,
    "venue": "arXiv 2024",
    "authors": "Ruixuan Xiao, Wentao Ma, Ke Wang et al.",
    "methodFamily": "流程引导规划知识基准",
    "tags": [
      "流程引导规划",
      "知识形式化",
      "多层级评价",
      "规划幻觉",
      "多领域场景"
    ],
    "scores": {
      "clarity": 0.83,
      "evidence": 0.8,
      "reproducibility": 0.8,
      "adoption": 0.64,
      "selfEvolution": 0.7
    },
    "summary": "针对基于大模型的智能体在专业密集任务上缺乏特定知识时易产生规划幻觉、而注入的流程知识大多杂乱无章、格式多样、缺乏严格形式化与全面比较的问题,首次形式化不同格式的流程知识并提出流程引导规划基准 FlowBench:覆盖 6 个领域 51 个场景、知识以多样格式呈现,并设计多层级评价框架,结果表明当前大模型智能体的规划仍需大幅改进。",
    "methodCore": "FlowBench 关注的是基于大模型的智能体在规划中的一个突出问题:这类智能体通过迭代规划与行动来完成复杂任务,但在缺乏特定知识的专业密集(expertise-intensive)任务上,容易产生不良的规划幻觉(planning hallucinations)。为缓解这一点,已有一些初步尝试通过注入外部的流程相关知识来增强规划的可靠性。然而,这些被注入的知识大多杂乱无章、格式各异,缺乏严格的形式化与全面的比较。FlowBench 正是要把「流程引导的规划」这件事系统地厘清并基准化。\n\n## 形式化不同格式的流程知识\n受上述问题驱动,作者首先形式化了不同格式的流程知识(workflow knowledge)。这一步很关键:现实中的流程知识可能以文本、图、伪代码等多种形式存在,若不加以形式化,就无法公平比较不同格式的效用。通过对各种格式进行统一的形式化,FlowBench 为「哪种知识格式对规划更有帮助」这一问题的研究奠定了基础。\n\n## FlowBench:覆盖 6 领域 51 场景\n在此基础上,作者提出 FlowBench——首个面向流程引导规划的基准。它覆盖来自 6 个领域的 51 个不同场景,且知识以多样的格式呈现。这样的覆盖面既保证了领域的广度,又通过多格式知识的设置,让基准能够评估不同知识表示形式在真实规划任务中的表现差异。FlowBench 因此不只是一个测试集,更是一个用于系统比较流程知识格式与规划能力的研究平台。\n\n## 多层级评价框架\n为了在 FlowBench 上评估不同的大模型,作者设计了一个多层级(multi-tiered)的评价框架。多层级意味着评价不只看最终结果,而是从多个层面细致地衡量规划质量,从而更全面地刻画智能体在流程引导规划上的能力。作者据此评估了流程知识跨多种格式的效用,结果表明:当前的大模型智能体在规划上仍需要相当大的改进,才能达到令人满意的水平。\n\n## 对自我进化的价值\nFlowBench 为流程引导的规划提供了一块严谨的「试金石」,这对自我进化具有基础性意义。当智能体试图通过注入外部流程知识来减少规划幻觉、提升可靠性时,必须有一个形式化、多领域、多格式、多层级的基准来客观衡量不同做法的优劣。FlowBench 对流程知识格式的形式化,让「哪种知识表示最有利于规划」得以被系统比较;它揭示的「当前大模型规划仍需大幅改进」的结论,则为后续研究划定了清晰的努力方向。对自我进化系统而言,可靠的规划是持续改良的核心能力之一,而 FlowBench 提供的严谨评测,正是让这一能力得以被准确度量、进而被有针对性地持续优化的必要前提。",
    "evaluation": "在 FlowBench(6 领域 51 场景、知识多格式呈现)上用多层级评价框架评估不同大模型,系统考察流程知识跨多种格式的效用;结果表明当前大模型智能体的规划能力仍需相当大的改进才能达到令人满意的水平。",
    "mainFinding": "首次形式化不同格式的流程知识并提出流程引导规划基准 FlowBench(6 领域 51 场景 + 多格式知识 + 多层级评价),系统比较知识格式的效用,发现当前大模型智能体的规划仍需大幅改进。",
    "limitations": "51 个场景与多格式知识的构造需要大量领域标注;多层级评价框架对不同格式知识的可比性设计仍有细化空间,基准结论随所选大模型与知识注入方式而变。",
    "related": [
      "workflow-worfbench",
      "workflow-statellm",
      "workflow-autoflow"
    ],
    "links": [
      {
        "label": "论文 arXiv",
        "href": "https://arxiv.org/abs/2406.14884"
      },
      {
        "label": "PDF",
        "href": "https://arxiv.org/pdf/2406.14884"
      },
      {
        "label": "代码与数据集",
        "href": "https://github.com/Justherozen/FlowBench"
      }
    ],
    "citation": "FlowBench: Revisiting and Benchmarking Workflow-Guided Planning for LLM-based Agents, arXiv 2024.",
    "figures": [
      {
        "src": "figures/workflow-flowbench.png",
        "caption": "FlowBench 概览:形式化多格式的流程知识,构建覆盖 6 领域 51 场景的流程引导规划基准,并以多层级框架评价大模型规划能力。"
      }
    ]
  }
];
