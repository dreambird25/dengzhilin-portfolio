<script setup lang="ts">
import { site } from '../site';
const project = site.projects[0];
</script>

<template>
  <section class="page-hero"><div class="site-container page-hero-inner"><p class="eyebrow">思帆科技亚马逊运营系统 · {{ project.status }}</p><h1>{{ project.name }}<br>让 Amazon 业务协同运转。</h1><p class="page-lead">以企业级 ERP 为基础，逐步建设可信的数据底座与自动化运营能力，并探索 AI Agent 辅助开品和商品设计。</p></div></section>
  <section class="page-section project-showcase"><div class="site-container"><div class="project-metrics"><div><strong>3</strong><span>平台接口层</span></div><div><strong>8+</strong><span>核心业务域</span></div><div><strong>1</strong><span>正在持续构建的系统</span></div></div><div class="project-history"><p class="section-kicker">Project history</p><h2>从 2022 年的第一个版本，<br>持续走到今天。</h2><div class="history-grid"><article><span>{{ project.history.startedAt }}</span><p>{{ project.history.origin }}</p></article><article><span>Rebuild</span><p>{{ project.history.rebuild }}</p></article><article><span>{{ project.history.contribution }}</span><p>{{ project.history.commits }}，覆盖项目长期迭代中的绝大多数功能建设。</p></article></div></div><div class="project-architecture"><p class="section-kicker">System focus</p><h2>平台集成、业务数据、运营工作台。</h2><p>从网关、核心业务、用户权限，到异步任务和第三方平台集成，让每一层都有清晰边界，并可被独立验证和演进。</p></div><div class="capability-grid"><article v-for="item in project.highlights" :key="item"><span>↗</span>{{ item }}</article></div><p class="project-stack-display">{{ project.stack }}</p></div></section>
  <section class="page-section section-tint"><div class="site-container work-detail"><p class="section-kicker">Ongoing capability</p><h2>{{ site.currentWork.title }}</h2><p>{{ site.currentWork.summary }}</p><div class="capability-grid"><article v-for="(direction, index) in site.currentWork.directions" :key="direction"><span>↗</span><div><strong>{{ site.currentWork.principles[index] }}</strong><p>{{ direction }}</p></div></article></div></div></section>
</template>
