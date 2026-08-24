<script setup lang="ts">
import { site } from '../site';
</script>

<template>
  <section class="current-work-section">
    <div class="site-container current-work-inner">
      <div><p class="eyebrow">In progress</p><h2>{{ site.currentWork.title }}<br>持续建设中。</h2></div>
      <div><p class="current-work-summary">{{ site.currentWork.summary }}</p><ul><li v-for="principle in site.currentWork.principles" :key="principle">{{ principle }}</li></ul><a class="text-link" href="/now">查看正在推进的事情 →</a></div>
    </div>
  </section>
</template>
