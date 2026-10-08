<script setup lang="ts">
import { site } from '../site';
</script>

<template>
  <section class="page-hero now-hero">
    <div class="site-container page-hero-inner">
      <p class="eyebrow">Now · {{ site.now.updatedAt }}</p>
      <h1>推进广告自动化，<br>让运营操作有据可查。</h1>
      <p class="page-lead">{{ site.now.summary }}</p>
    </div>
  </section>
  <section class="page-section">
    <div class="site-container now-grid">
      <article v-for="(direction, index) in site.now.directions" :key="direction.title">
        <span>0{{ index + 1 }}</span>
        <h2>{{ direction.title }}</h2>
        <p class="now-status">{{ direction.status }}</p>
        <p>{{ direction.description }}</p>
      </article>
    </div>
  </section>
  <section class="page-section section-tint">
    <div class="site-container work-detail">
      <p class="section-kicker">What happens next</p>
      <h2>把自动化从建议推进到可靠执行。</h2>
      <p>{{ site.now.next }}</p>
    </div>
  </section>
</template>
