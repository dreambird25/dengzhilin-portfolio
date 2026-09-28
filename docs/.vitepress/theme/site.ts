export const site = {
  name: '邓智林',
  romanizedName: 'Deng Zhilin',
  role: 'Amazon ERP · 平台 API 集成 · 工程化实践',
  domain: 'dengzhilin.fun',
  summary:
    '5 年软件开发经验，持续构建 sifanERP；专注 Amazon ERP、SP-API / Ads API 集成与跨境业务系统工程化。',
  profileStats: [
    { label: '开发经验', value: '5 年' },
    { label: 'sifanERP Git 提交', value: '2,000+' },
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
      title: '企业级 ERP',
      description:
        '将店铺、Listing、订单、库存、FBA、广告和运营数据收敛为清晰的业务模型与可维护的工作台。',
    },
    {
      number: '03',
      title: '工程化与 AI',
      description:
        '用类型、迁移、测试和部署门禁降低不确定性，也用 AI 加速设计、验证与复盘，而非绕过工程判断。',
    },
  ],
  projects: [
    {
      name: 'sifanERP',
      status: '正在构建',
      description:
        '面向 Amazon 业务的企业级 ERP，覆盖店铺、Listing、订单、库存、FBA、广告、销量分析、运营工作台、文件管理和权限。',
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
    title: '广告经营优化能力',
    summary:
      '正在将 Amazon Ads 的数据同步、精细决策、高频执行与效果验证，建设为可观察、可回放、可控制的经营闭环。',
    principles: ['数据新鲜度门禁', '按证据强弱控制动作幅度', '执行护栏与可回放验证'],
    directions: [
      '汇集广告实体、搜索词与经营数据，并在数据滞后时暂停自动决策。',
      '围绕关键词、定向与预算建立分层决策，充分考虑转化延迟与样本量。',
      '将调价、预算再分配和低效流量治理放进可审计、可追踪的执行链路。',
      '通过历史回放、对照观察和效果回读，持续校正决策而非依赖单次规则。',
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
  technologies: [
    'Java 21',
    'Spring Boot',
    'Spring Cloud',
    'Vue 3',
    'TypeScript',
    'Vite',
    'MySQL',
    'Redis',
    'RabbitMQ',
    'Nacos',
    'Flyway',
    'Vitest',
  ],
} as const;
