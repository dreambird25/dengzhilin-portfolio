<script setup lang="ts">
import { site } from '../site';
</script>

<template>
  <section class="hero-section site-container">
    <svg class="hero-system-art" viewBox="0 0 260 240" fill="none" aria-hidden="true">
      <path d="M40 42h90v52m-90 104h90v-52m26-26h64V42m-64 78h64v78" stroke="currentColor" />
      <rect x="104" y="94" width="52" height="52" fill="currentColor" />
      <rect x="18" y="20" width="44" height="44" stroke="currentColor" />
      <rect x="18" y="176" width="44" height="44" stroke="currentColor" />
      <circle cx="220" cy="42" r="22" fill="var(--accent)" />
      <circle cx="220" cy="198" r="22" stroke="currentColor" />
      <path d="m118 120 8 8 16-18" stroke="var(--surface)" stroke-width="2" />
      <path d="M82 72h96v96H82z" stroke="currentColor" opacity=".3" />
    </svg>
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
