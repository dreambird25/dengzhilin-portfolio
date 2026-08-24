<script setup lang="ts">
import { site } from '../site';
</script>

<template>
  <section class="section site-container">
    <div class="section-heading">
      <p class="eyebrow">What I work on</p>
      <h2>从业务问题到长期可运行的系统。</h2>
    </div>
    <div class="focus-grid">
      <article v-for="focus in site.focuses" :key="focus.number" class="focus-card">
        <span>{{ focus.number }}</span>
        <h3>{{ focus.title }}</h3>
        <p>{{ focus.description }}</p>
      </article>
    </div>
  </section>
</template>
