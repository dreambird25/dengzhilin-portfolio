<script setup lang="ts">
import { site } from '../site';
</script>

<template>
  <section class="hero-section site-container">
    <p class="eyebrow">Software Engineer · {{ site.romanizedName }}</p>
    <h1>
      把复杂业务，<br />
      做成可靠的软件系统。
    </h1>
    <p class="hero-summary">{{ site.summary }}</p>
    <div class="hero-actions">
      <a class="button button-primary" href="/projects">查看 SF Amazon ERP</a>
      <a class="button button-secondary" href="/services">技术合作</a>
      <a class="button button-secondary" :href="site.contact.github" target="_blank" rel="noreferrer">
        GitHub
      </a>
    </div>
    <dl class="hero-facts">
      <div v-for="stat in site.profileStats" :key="stat.label">
        <dt>{{ stat.label }}</dt>
        <dd>{{ stat.value }}</dd>
      </div>
    </dl>
  </section>
</template>
