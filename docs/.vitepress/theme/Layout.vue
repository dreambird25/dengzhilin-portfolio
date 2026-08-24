<script setup lang="ts">
import { Content, useData } from 'vitepress';
import { ref } from 'vue';
import { site } from './site';

const menuOpen = ref(false);
const { page } = useData();

const links = [
  { label: '主页', href: '/' },
  { label: '关于', href: '/about' },
  { label: '项目', href: '/projects' },
  { label: '服务', href: '/services' },
  { label: '博客', href: '/blog' },
  { label: 'Now', href: '/now' },
];

function isActive(href: string) {
  const relativePath = page.value.relativePath;
  if (href === '/') return relativePath === 'index.md';
  return relativePath === href.slice(1) + '.md';
}
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <div class="site-container header-inner">
        <a class="brand" href="/" aria-label="邓智林主页">
          <span class="brand-name">{{ site.name }}</span>
          <span class="brand-domain">{{ site.domain }}</span>
        </a>

        <button
          class="menu-button"
          type="button"
          :aria-expanded="menuOpen"
          aria-label="切换导航菜单"
          @click="menuOpen = !menuOpen"
        >
          <span></span><span></span>
        </button>

        <nav class="desktop-nav" aria-label="主导航">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            :class="{ active: isActive(link.href) }"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>

      <nav v-if="menuOpen" class="mobile-nav site-container" aria-label="移动主导航">
        <a v-for="link in links" :key="link.href" :href="link.href" @click="menuOpen = false">
          {{ link.label }}
        </a>
      </nav>
    </header>

    <main class="site-main">
      <Content />
    </main>

    <footer class="site-footer">
      <div class="site-container footer-inner">
        <p>© {{ new Date().getFullYear() }} {{ site.name }} · Built with Vue + VitePress.</p>
        <div class="footer-links">
          <a :href="site.contact.github" target="_blank" rel="noreferrer">GitHub</a>
          <a :href="site.contact.blog" target="_blank" rel="noreferrer">CSDN</a>
          <a :href="'mailto:' + site.contact.email">Email</a>
        </div>
      </div>
    </footer>
  </div>
</template>
