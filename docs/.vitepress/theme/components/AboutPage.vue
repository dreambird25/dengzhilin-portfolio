<template>
  <section class="page-hero">
    <div class="site-container page-hero-inner">
      <p class="eyebrow">About</p>
      <h1>以工程方法，<br>处理真实业务的复杂性。</h1>
      <p class="page-lead">我叫邓智林，专注于跨境电商业务系统、Amazon 平台集成和工程化实践。比起让接口“能调通”，我更在意系统能否长期稳定地运行。</p>
    </div>
  </section>
  <section class="page-section">
    <div class="site-container split-layout">
      <p class="section-kicker">How I work</p>
      <div class="principle-list">
        <article><span>01</span><h2>先理解业务，再设计边界</h2><p>将店铺、Listing、订单、库存、FBA、广告和运营分析组织为清晰、可协作的 ERP 能力。</p></article>
        <article><span>02</span><h2>把外部不确定性留在边界外</h2><p>面对 SP-API、Ads API 等平台，设计限流、重试、窗口重叠、状态同步和故障恢复，而非假设接口永远可靠。</p></article>
        <article><span>03</span><h2>让每一次演进都可验证</h2><p>用类型检查、Flyway 迁移、自动化测试和部署门禁，降低系统随业务增长而失控的概率。</p></article>
      </div>
    </div>
  </section>
  <section class="page-section section-tint"><div class="site-container stack-block"><p class="section-kicker">Toolkit</p><h2>日常使用的技术工具。</h2><div class="tag-cloud"><span v-for="item in ['Java 21', 'Spring Boot', 'Spring Cloud', 'Vue 3', 'TypeScript', 'MySQL', 'Redis', 'RabbitMQ', 'Nacos', 'Flyway', 'Vitest']" :key="item">{{ item }}</span></div></div></section>
</template>
