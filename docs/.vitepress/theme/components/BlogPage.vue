<script setup lang="ts">
import { site } from '../site';

const categories = ['Amazon 平台与 ERP', 'AI 与工程实践'] as const;
</script>

<template>
  <section class="page-hero">
    <div class="site-container page-hero-inner">
      <p class="eyebrow">Writing</p>
      <h1>记录工程判断，<br>不止代码片段。</h1>
      <p class="page-lead">主要记录 Amazon SP-API / Ads API 集成、Java 服务端、Vue 前端工程化、系统安全与 AI 辅助研发中的真实问题和解决过程。</p>
      <a class="button button-primary" :href="site.contact.blog" target="_blank" rel="noreferrer">在 CSDN 查看全部文章</a>
    </div>
  </section>
  <section class="page-section">
    <div class="site-container">
      <div class="section-heading">
        <p class="section-kicker">Selected writing</p>
        <h2>精选文章。</h2>
      </div>
      <div v-for="category in categories" :key="category" class="writing-page-layout writing-group">
        <h3 class="writing-group-title">{{ category }}</h3>
        <ol class="editorial-list">
          <li v-for="post in site.writings.filter((writing) => writing.category === category)" :key="post.url">
            <time>{{ post.date }}</time>
            <div>
              <h4><a :href="post.url" target="_blank" rel="noreferrer">{{ post.title }}</a></h4>
              <p>{{ post.summary }}</p>
              <a class="article-link" :href="post.url" target="_blank" rel="noreferrer">阅读原文 →</a>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
