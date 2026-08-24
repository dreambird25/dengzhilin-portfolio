<script setup lang="ts">
import { site } from '../site';
</script>

<template>
  <section class="contact-section">
    <div class="site-container contact-inner">
      <p class="eyebrow">Elsewhere</p>
      <h2>如果你也在解决复杂的业务与工程问题，我们可以聊聊。</h2>
      <div class="hero-actions">
        <a class="button button-primary" :href="'mailto:' + site.contact.email">发邮件</a>
        <a class="button button-secondary" :href="site.contact.github" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>
