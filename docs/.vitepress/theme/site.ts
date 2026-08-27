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
    { label: 'CSDN 阅读 / 原创', value: '50万+ / 近200篇' },
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
      date: '2025.12',
      title: 'Amazon SP-API：授权封装、SDK 分层与 AAD 加密一致性设计',
      summary: '从授权、SDK 和安全边界出发，降低第三方平台集成的长期维护成本。',
    },
    {
      date: '2026.01',
      title: 'AI 时代的软件工程：升级，而非消亡',
      summary: '把 AI 放进设计、验证与决策流程，而不是把工程责任交给提示词。',
    },
    {
      date: '2026.02',
      title: '基于 OpenAPI 规范生成亚马逊广告 Java SDK',
      summary: '用规范生成和 Maven 依赖管理，减少 Ads API 集成中的重复劳动。',
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
