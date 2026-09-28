<script setup lang="ts">
import { site } from '../site';
</script>

<template>
  <section class="page-hero now-hero"><div class="site-container page-hero-inner"><p class="eyebrow">Now · 2026.09</p><h1>让 SF Amazon ERP<br>连接数据、运营与 AI。</h1><p class="page-lead">{{ site.currentWork.summary }}</p></div></section>
  <section class="page-section"><div class="site-container now-grid"><article v-for="(direction, index) in site.currentWork.directions" :key="direction"><span>0{{ index + 1 }}</span><h2>{{ site.currentWork.principles[index] }}</h2><p>{{ direction }}</p></article></div></section>
  <section class="page-section section-tint"><div class="site-container work-detail"><p class="section-kicker">What happens next</p><h2>让数据可信，让自动化和 AI 的结果可验证。</h2><p>持续完善平台数据同步与运营工作台，在可追溯数据和人工审核的基础上，验证自动化运营与 AI Agent 辅助开品的实际效果。</p></div></section>
</template>
