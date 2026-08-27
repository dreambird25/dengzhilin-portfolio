<script setup lang="ts">
import { ref } from 'vue';
import { site } from '../site';

const copied = ref<'technical' | 'content' | null>(null);

async function copyEmail(value: string, type: 'technical' | 'content') {
  await navigator.clipboard.writeText(value);
  copied.value = type;
  window.setTimeout(() => (copied.value = null), 2000);
}
</script>

<template>
  <section class="contact-section">
    <div class="site-container contact-inner">
      <p class="eyebrow">Elsewhere</p>
      <h2>如果你也在解决复杂的业务与工程问题，我们可以聊聊。</h2>
      <div class="contact-channels">
        <article>
          <span>技术合作</span>
          <a :href="'mailto:' + site.contact.email">{{ site.contact.email }}</a>
          <button type="button" @click="copyEmail(site.contact.email, 'technical')">
            {{ copied === 'technical' ? '已复制' : '复制邮箱' }}
          </button>
        </article>
        <article>
          <span>资讯与内容合作</span>
          <a :href="'mailto:' + site.contact.consultationEmail">{{ site.contact.consultationEmail }}</a>
          <button type="button" @click="copyEmail(site.contact.consultationEmail, 'content')">
            {{ copied === 'content' ? '已复制' : '复制邮箱' }}
          </button>
        </article>
      </div>
      <div class="hero-actions contact-actions">
        <a class="button button-secondary" :href="site.contact.github" target="_blank" rel="noreferrer">
          在 GitHub 查看我的工作
        </a>
      </div>
    </div>
  </section>
</template>
