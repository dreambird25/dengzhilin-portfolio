import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh-CN',
  title: '邓智林',
  description: 'Amazon ERP、平台 API 集成与工程化实践',
  cleanUrls: true,
  sitemap: {
    hostname: 'https://dengzhilin.fun',
  },
  head: [
    ['meta', { name: 'theme-color', content: '#111827' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: '邓智林' }],
    ['link', { rel: 'icon', href: '/favicon.svg' }],
  ],
});
