export const site = {
  name: '邓智林',
  romanizedName: 'Deng Zhilin',
  role: 'Amazon ERP · 平台 API 集成 · 工程化实践',
  domain: 'dengzhilin.fun',
  summary:
    '我专注于把跨境电商的复杂业务、第三方平台能力和工程治理，做成稳定、可观测、可持续演进的软件系统。',
  contact: {
    email: 'dengzhilin666@gmail.com',
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
    },
  ],
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
