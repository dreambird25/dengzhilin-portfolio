<script setup lang="ts">
import { site } from '../site';
</script>

<template>
  <section class="page-hero"><div class="site-container page-hero-inner"><p class="eyebrow">Writing</p><h1>记录工程判断，<br>不止代码片段。</h1><p class="page-lead">主要记录 Amazon SP-API / Ads API 集成、Java 服务端、Vue 前端工程化、系统安全与 AI 辅助研发中的真实问题和解决过程。</p><a class="button button-primary" :href="site.contact.blog" target="_blank" rel="noreferrer">访问 CSDN</a></div></section>
  <section class="page-section"><div class="site-container writing-page-layout"><div><p class="section-kicker">Recent writing</p><h2>最近在写什么。</h2></div><ol class="editorial-list"><li v-for="post in site.writings" :key="post.title"><time>{{ post.date }}</time><div><h3>{{ post.title }}</h3><p>{{ post.summary }}</p></div></li></ol></div></section>
  <section class="page-section section-tint"><div class="site-container stack-block"><p class="section-kicker">Topics</p><div class="tag-cloud"><span v-for="topic in ['SP-API', 'Ads API', 'Java', 'Vue 3', '系统设计', '安全', 'AI 工程化']" :key="topic">{{ topic }}</span></div></div></section>
</template>
