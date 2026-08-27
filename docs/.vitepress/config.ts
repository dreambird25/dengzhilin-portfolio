import { defineConfig } from 'vitepress';
import { site } from './theme/site';

const siteUrl = 'https://dengzhilin.fun';

function canonicalUrl(relativePath: string) {
  const path = relativePath === 'index.md' ? '' : relativePath.replace(/\.md$/, '');
  return new URL(path ? `/${path}` : '/', siteUrl).href;
}

export default defineConfig({
  lang: 'zh-CN',
  title: '邓智林',
  description:
    '邓智林，5年软件开发经验，专注 Amazon ERP、SP-API / Ads API 集成、跨境电商业务系统与工程化实践，持续构建 sifanERP。',
  cleanUrls: true,
  sitemap: {
    hostname: siteUrl,
  },
  head: [
    ['meta', { name: 'theme-color', content: '#111827' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: '邓智林' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: '32x32' }],
  ],
  transformHead({ pageData, title, description }) {
    const canonical = canonicalUrl(pageData.relativePath);
    const pageTitle =
      pageData.relativePath === 'index.md'
        ? title
        : title === site.name
          ? site.name
          : `${title} | ${site.name}`;
    const pageHead = [
      ['link', { rel: 'canonical', href: canonical }],
      ['meta', { property: 'og:title', content: pageTitle }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: canonical }],
      ['meta', { name: 'twitter:card', content: 'summary' }],
    ] as const;

    if (pageData.relativePath !== 'index.md') return pageHead;

    return [
      ...pageHead,
      [
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: site.name,
          alternateName: site.romanizedName,
          url: siteUrl,
          jobTitle: 'Software Engineer',
          description: site.summary,
          sameAs: [site.contact.github, site.contact.blog],
        }),
      ],
    ];
  },
});
