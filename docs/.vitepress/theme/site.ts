export const site = {
  name: '邓智林',
  romanizedName: 'Deng Zhilin',
  role: 'Amazon 运营系统 · 数据自动化 · AI Agent',
  domain: 'dengzhilin.fun',
  summary:
    '5 年软件开发经验，持续构建 SF Amazon ERP；当前聚焦 Amazon 运营数据底座与自动化，以及 AI Agent 辅助快速开品和商品设计。',
  profileStats: [
    { label: '开发经验', value: '5 年' },
    { label: 'SF Amazon ERP Git 提交', value: '2,000+' },
    { label: '设备规模实践', value: '10,000+' },
    { label: 'CSDN 阅读 / 原创', value: '52万+ / 200篇' },
  ],
  contact: {
    email: 'dengzhilin666@gmail.com',
    consultationEmail: '1931630839@qq.com',
    github: 'https://github.com/dreambird25',
    blog: 'https://blog.csdn.net/qq_43657722',
  },
  focuses: [
    {
      number: '01',
      title: 'Amazon 平台集成',
      description:
        '围绕 SP-API 与 Ads API，处理授权、限流、同步、重试和可恢复性，而不把它们当作一次性的接口调用。',
    },
    {
      number: '02',
      title: '数据底座与运营自动化',
      description:
        '打通店铺、Listing、订单、库存、FBA 与广告数据，逐步把运营分析和高频动作接入可追踪的自动化流程。',
    },
    {
      number: '03',
      title: 'AI Agent 与商品设计',
      description:
        '探索让 AI Agent 结合 Amazon 运营数据，辅助选品、Listing 质检、商品图设计与方案验证，加快开品迭代。',
    },
  ],
  projects: [
    {
      name: 'SF Amazon ERP',
      status: '正在构建',
      description:
        '思帆科技亚马逊运营系统：以现有 ERP 能力为基础，建设运营数据底座与自动化流程，并探索 AI Agent 辅助开品和设计。',
      stack:
        'Java 21 · Spring Boot · Spring Cloud · Vue 3 · MySQL · Redis · RabbitMQ · Nacos',
      highlights: ['SP-API / Ads API 集成', '微服务与网关治理', 'Flyway 数据库迁移', '可观测的异步任务'],
      history: {
        startedAt: '2022',
        origin: '从零启动，初版采用 Vue 2、Element UI、JDK 8 与 Spring Boot。',
        rebuild: '随后完成前后端全面重构，升级为面向长期演进的工程体系。',
        contribution: '独立完成约 90% 功能',
        commits: '2,000+ Git 提交',
      },
    },
  ],
  currentWork: {
    title: '数据底座与 AI Agent',
    summary:
      '当前沿两条主线推进：汇集 Amazon 业务数据并逐步形成可追踪的自动化运营闭环；让 AI Agent 结合运营数据，辅助快速开品、Listing 优化和商品视觉设计。',
    principles: ['数据底座与自动化运营', 'AI Agent 辅助开品与设计'],
    directions: [
      '汇集商品、Listing、订单、库存、广告与经营数据，关注数据新鲜度、口径一致性和可追溯性，再逐步接入自动化分析与执行。',
      '让 AI Agent 在可信数据与人工审核的基础上，辅助选品判断、Listing 质检、商品图设计和方案验证，缩短开品迭代周期。',
    ],
  },
  writings: [
    {
      date: '2026.09.26',
      category: 'AI 与工程实践',
      title: 'AI 商品图视觉蒸馏实战：基于“版型-符号”解耦与提示词盲测闭环',
      summary: '用版型、符号与画面协议拆分商品图生成任务，再通过盲测检验控形与主题衍生效果。',
      url: 'https://blog.csdn.net/qq_43657722/article/details/166683715',
    },
    {
      date: '2026.09.16',
      category: 'Amazon 平台与 ERP',
      title: 'Amazon Ads API 实战：如何高精度关联广告活动（Campaign）与 ASIN 及 ERP 产品主数据',
      summary: '分析 SP、SD、SB 广告关联差异，并处理推广与出单归因、重复数据和历史版本错配。',
      url: 'https://blog.csdn.net/qq_43657722/article/details/165621024',
    },
    {
      date: '2026.09.14',
      category: 'AI 与工程实践',
      title: '别再追“新词”了！从 Graph Engineering 破局，彻底搞懂 AI Agent 的底层内核 Loop Engineering',
      summary: '从单个 Agent 循环入手，讨论确定性验证、状态持久化与熔断，再判断何时需要图编排。',
      url: 'https://blog.csdn.net/qq_43657722/article/details/165333478',
    },
    {
      date: '2026.09.07',
      category: 'Amazon 平台与 ERP',
      title: 'Amazon Ads API V2 视频报告与 V3 的坑：报告成功了，为什么活动数据还是少？',
      summary: '通过真实对账发现旧版 SBV 活动在 V3 报告中的缺口，并用 V2 视频报告补数。',
      url: 'https://blog.csdn.net/qq_43657722/article/details/164461895',
    },
    {
      date: '2026.08.30',
      category: 'Amazon 平台与 ERP',
      title: '把 Amazon Listing 质检做成 Skill：GitHub 开源，5 分钟跑出中文诊断报告',
      summary: '介绍支持文件、Excel/CSV、SP-API 与 ERP 数据的 Listing 质检 Skill 及批量实践。',
      url: 'https://blog.csdn.net/qq_43657722/article/details/164190510',
    },
    {
      date: '2026.08.28',
      category: 'Amazon 平台与 ERP',
      title: '广告自动优化为什么必须先解决数据新鲜度问题',
      summary: '数据新鲜度决定自动化是否有资格做判断；从水位、证据强度、执行护栏到历史回放建立经营闭环。',
      url: 'https://blog.csdn.net/qq_43657722/article/details/164145114',
    },
    {
      date: '2026.08.28',
      category: 'Amazon 平台与 ERP',
      title: 'Amazon SP-API 数据同步：限流、幂等、重试与断点恢复',
      summary: '拆解店铺级限流、错误分类、幂等写入、成功游标和站点时间口径，说明同步如何在失败后继续推进。',
      url: 'https://blog.csdn.net/qq_43657722/article/details/164141569',
    },
    {
      date: '2026.08.28',
      category: 'Amazon 平台与 ERP',
      title: '从 0 到 2,000+ 次提交：ERP 四年的架构演进',
      summary: '从快速交付到业务模块、平台集成、数据迁移与上线门禁，复盘长期 ERP 如何控制复杂度。',
      url: 'https://blog.csdn.net/qq_43657722/article/details/164139889',
    },
  ],
  now: {
    updatedAt: '2026.10',
    summary:
      '当前围绕 SF Amazon ERP 推进广告自动化与运营日志：把广告数据、候选判断、确认执行和结果核对串成工作流，让关键运营操作的人员、依据、过程和结果有据可查。',
    directions: [
      {
        title: '广告自动化与执行闭环',
        status: '候选识别、确认执行与日志已打通',
        description:
          '围绕 Amazon Ads API，建立待否词清单、执行前复核、人工确认、结果回查与执行日志。持续完善规则自动执行、数据新鲜度与异常恢复，让每次广告优化都能解释判断依据和实际结果。',
      },
      {
        title: '跨业务运营日志',
        status: '开发接入已完成',
        description:
          '已接入 FBA 移除、Listing 修改、发货排期、采购排期与拼箱。记录确认人与实际执行人、操作来源、原因、前后数据和逐项结果，区分执行成功、失败与待核对，为跨业务复盘建立统一入口。',
      },
    ],
    next:
      '继续完善广告规则的自动执行与失败恢复，推进运营日志的发布验收。在可追溯数据、执行前校验和结果核对的基础上，把自动化从建议逐步推进到可靠执行。',
  },
  technologies: [
    {
      label: '后端与服务治理',
      items: ['Java 21', 'Spring Boot 3.5', 'Spring Cloud', 'Spring Cloud Alibaba', 'Spring Cloud Gateway', 'OpenFeign', 'Nacos', 'Sa-Token'],
    },
    {
      label: '前端与交互',
      items: ['Vue 3', 'TypeScript', 'Vite', 'Naive UI', 'Ant Design Vue', 'Pinia', 'Vue Router', 'Alova', 'ECharts'],
    },
    {
      label: '数据与任务调度',
      items: ['MySQL 8', 'MyBatis-Plus', 'Redis', 'Redisson', 'RabbitMQ', 'XXL-JOB', 'Flyway'],
    },
    {
      label: '平台集成与 AI 探索',
      items: ['Amazon SP-API', 'Amazon Ads API', '领星 OpenAPI', '氚云 API', 'Spring AI Alibaba', 'MCP SDK'],
    },
    {
      label: '构建与质量工具',
      items: ['Maven', 'pnpm', 'Docker', 'JUnit 5', 'Vitest', 'ESLint', 'Prettier'],
    },
  ],
} as const;
