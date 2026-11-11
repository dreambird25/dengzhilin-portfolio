<script setup lang="ts">
import { site } from '../site';

const toolkitScenarios = [
  {
    title: '接入业务平台',
    description: '接入平台数据，处理授权、限流和状态同步。',
    tools: ['Amazon SP-API', 'Amazon Ads API', '领星 OpenAPI'],
  },
  {
    title: '组织业务服务',
    description: '按业务拆分服务，管理网关、服务发现与权限。',
    tools: ['Java 21', 'Spring Boot 3.5', 'Nacos'],
  },
  {
    title: '处理数据与任务',
    description: '管理订单和库存数据，调度同步与自动化任务。',
    tools: ['MySQL 8', 'Redis', 'RabbitMQ', 'XXL-JOB'],
  },
  {
    title: '构建运营工作台',
    description: '把业务操作和数据分析放进日常使用的界面。',
    tools: ['Vue 3', 'TypeScript', 'ECharts'],
  },
] as const;
</script>

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
  <section id="toolkit" class="page-section section-tint" aria-labelledby="toolkit-title">
    <div class="site-container stack-block">
      <p class="section-kicker">Toolkit</p>
      <h2 id="toolkit-title">技术如何支撑业务。</h2>
      <div class="toolkit-scenarios">
        <article v-for="(scenario, index) in toolkitScenarios" :key="scenario.title">
          <div class="toolkit-scenario-heading">
            <span aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
            <h3>{{ scenario.title }}</h3>
          </div>
          <p>{{ scenario.description }}</p>
          <ul class="toolkit-core-tools" role="list">
            <li v-for="tool in scenario.tools" :key="tool">{{ tool }}</li>
          </ul>
        </article>
      </div>
      <details class="toolkit-inventory">
        <summary>完整工具清单</summary>
        <dl>
          <div v-for="group in site.technologies" :key="group.label">
            <dt>{{ group.label }}</dt>
            <dd>{{ group.items.join('、') }}</dd>
          </div>
        </dl>
      </details>
    </div>
  </section>
</template>
