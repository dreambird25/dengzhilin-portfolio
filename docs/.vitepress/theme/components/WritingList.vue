<script setup lang="ts">
import { site } from '../site';
</script>

<template>
  <section class="section site-container">
    <div class="section-heading section-heading-row">
      <div>
        <p class="eyebrow">Writing</p>
        <h2>记录工程判断，而不只是代码片段。</h2>
      </div>
      <a class="text-link" :href="site.contact.blog" target="_blank" rel="noreferrer">访问 CSDN →</a>
    </div>
    <ol class="writing-list">
      <li v-for="writing in site.writings.slice(0, 3)" :key="writing.title">
        <time>{{ writing.date }}</time>
        <div>
          <h3>
            <a :href="writing.url" target="_blank" rel="noreferrer">{{ writing.title }}</a>
          </h3>
          <p>{{ writing.summary }}</p>
          <a class="article-link" :href="writing.url" target="_blank" rel="noreferrer">阅读原文 →</a>
        </div>
      </li>
    </ol>
  </section>
</template>
