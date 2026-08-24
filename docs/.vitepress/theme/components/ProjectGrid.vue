<script setup lang="ts">
import { site } from '../site';
</script>

<template>
  <section class="section section-tint">
    <div class="site-container">
      <div class="section-heading section-heading-row">
        <div>
          <p class="eyebrow">Selected work</p>
          <h2>正在把真实业务持续做深。</h2>
        </div>
        <a class="text-link" href="/projects">查看项目详情 →</a>
      </div>
      <article v-for="project in site.projects" :key="project.name" class="project-card">
        <div class="project-card-head">
          <div>
            <p class="project-status">{{ project.status }}</p>
            <h3>{{ project.name }}</h3>
          </div>
          <span class="project-index">01</span>
        </div>
        <p class="project-description">{{ project.description }}</p>
        <p class="project-stack">{{ project.stack }}</p>
        <ul class="project-highlights">
          <li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>
