<script setup lang="ts">
import { site } from '../site';
import ShipmentMilestone from './ShipmentMilestone.vue';
import SectionTransition from './SectionTransition.vue';
const project = site.projects[0];
</script>

<template>
  <section class="page-hero">
    <div class="site-container page-hero-inner">
      <p class="eyebrow">思帆科技亚马逊运营系统 · {{ project.status }}</p>
      <h1>{{ project.name }}<br>让 Amazon 业务协同运转。</h1>
      <p class="page-lead">以企业级 ERP 为基础，逐步建设可信的数据底座与自动化运营能力，并探索 AI Agent 辅助开品和商品设计。</p>
    </div>
  </section>

  <section class="page-section project-showcase">
    <div class="site-container">
      <div class="section-heading project-overview-heading">
        <p class="section-kicker">System overview</p>
        <h2>从平台接入，到业务协同。</h2>
      </div>
      <div class="project-metrics">
        <article class="metric-integration">
          <div class="metric-heading">
            <strong>3</strong>
            <svg class="metric-art" viewBox="0 0 144 104" fill="none" aria-hidden="true">
              <path d="M24 30v25h48m48-25v25H72m0-25v45" stroke="currentColor" />
              <circle cx="24" cy="24" r="17" stroke="currentColor" />
              <circle cx="72" cy="24" r="17" fill="currentColor" />
              <circle cx="120" cy="24" r="17" stroke="currentColor" />
              <rect x="48" y="75" width="48" height="22" fill="currentColor" opacity=".25" />
              <path d="m66 83 6 6 6-6" stroke="currentColor" />
            </svg>
          </div>
          <h3>平台集成</h3>
          <p>连接 Amazon、领星与氚云，处理平台授权、数据同步与结果回查。</p>
          <ul class="metric-tags"><li>Amazon</li><li>领星</li><li>氚云</li></ul>
        </article>
        <article class="metric-domains">
          <div class="metric-heading">
            <strong>8+</strong>
            <svg class="metric-art" viewBox="0 0 144 104" fill="none" aria-hidden="true">
              <path d="M24 8h96v88H24zM24 37h96M24 67h96M56 8v88M88 8v88" stroke="currentColor" />
              <path d="M56 37h32v30H56z" fill="currentColor" />
              <circle cx="40" cy="23" r="7" fill="currentColor" opacity=".3" />
              <circle cx="104" cy="82" r="7" fill="currentColor" opacity=".3" />
            </svg>
          </div>
          <h3>核心业务域</h3>
          <p>连接商品、订单、库存与广告，让运营数据和日常业务操作相互关联。</p>
          <ul class="metric-tags"><li>商品与订单</li><li>库存与广告</li></ul>
        </article>
        <article class="metric-system">
          <div class="metric-heading">
            <strong>1</strong>
            <svg class="metric-art" viewBox="0 0 144 104" fill="none" aria-hidden="true">
              <path d="M12 82h38V52h38V22h44m-10-10 10 10-10 10" stroke="currentColor" />
              <rect x="4" y="74" width="16" height="16" fill="currentColor" />
              <rect x="42" y="44" width="16" height="16" fill="currentColor" />
              <rect x="80" y="14" width="16" height="16" fill="#e1a889" />
            </svg>
          </div>
          <h3>持续演进的系统</h3>
          <p>从单体起步，经历微服务拆分、前后端重构与运行时升级，持续服务真实业务。</p>
          <ul class="metric-tags"><li>{{ project.history.startedAt }} → NOW</li></ul>
        </article>
      </div>

      <ShipmentMilestone />

      <div class="project-history">
        <p class="section-kicker">Project history</p>
        <h2>从 2022 年的第一个版本，<br>持续走到今天。</h2>
        <div class="history-grid">
          <article v-for="milestone in project.history.milestones" :key="milestone.stage">
            <span>{{ milestone.stage }}</span>
            <p>{{ milestone.description }}</p>
          </article>
        </div>
        <p class="project-stack-display">{{ project.history.contribution }} · {{ project.history.commits }}，覆盖项目长期迭代中的绝大多数功能建设。</p>
      </div>
      <div class="project-architecture">
        <p class="section-kicker">System focus</p>
        <h2>让系统持续演进的工程底座。</h2>
        <p>从网关、核心业务、用户权限，到异步任务和第三方平台集成，让每一层都有清晰边界，并可被独立验证和演进。</p>
      </div>
      <div class="capability-grid">
        <article v-for="item in project.highlights" :key="item"><span>↗</span>{{ item }}</article>
      </div>
      <p class="project-stack-display">{{ project.stack }}</p>
    </div>
  </section>

  <SectionTransition pattern="flow" />
  <section class="page-section section-tint">
    <div class="site-container work-detail">
      <p class="section-kicker">Ongoing capability</p>
      <h2>{{ site.currentWork.title }}</h2>
      <p>{{ site.currentWork.summary }}</p>
      <div class="capability-grid">
        <article v-for="(direction, index) in site.currentWork.directions" :key="direction">
          <span>↗</span><div><strong>{{ site.currentWork.principles[index] }}</strong><p>{{ direction }}</p></div>
        </article>
      </div>
    </div>
  </section>
</template>
