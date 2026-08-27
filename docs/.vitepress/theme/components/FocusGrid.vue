<script setup lang="ts">
import { site } from '../site';
</script>

<template>
  <section class="section site-container">
    <div class="section-heading">
      <p class="eyebrow">Engineering focus</p>
      <h2>围绕真实业务，持续建立工程能力。</h2>
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
