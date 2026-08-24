<script setup lang="ts">
import { site } from '../site';
</script>

<template>
  <section class="page-hero now-hero"><div class="site-container page-hero-inner"><p class="eyebrow">Now · 2026.08</p><h1>持续把 sifanERP<br>做得更稳定、更清晰。</h1><p class="page-lead">当前主要在推进 {{ site.currentWork.title }}：让 Amazon Ads 的数据、决策、执行和验证形成能够持续演进的经营闭环。</p></div></section>
  <section class="page-section"><div class="site-container now-grid"><article v-for="(direction, index) in site.currentWork.directions.slice(0, 3)" :key="direction"><span>0{{ index + 1 }}</span><h2>{{ site.currentWork.principles[index] }}</h2><p>{{ direction }}</p></article></div></section>
  <section class="page-section section-tint"><div class="site-container work-detail"><p class="section-kicker">What happens next</p><h2>把自动化建立在证据、边界与复盘上。</h2><p>持续完善 Ads API 集成、异步数据同步、可观测任务与经营看板；优先保证数据可信、动作可控、结果可解释。</p></div></section>
</template>
