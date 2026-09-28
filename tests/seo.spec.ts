import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('SEO assets', () => {
  it('serves VitePress pages through extensionless Vercel URLs', () => {
    const vercelConfig = JSON.parse(readFileSync(resolve('vercel.json'), 'utf8'));
    expect(vercelConfig.cleanUrls).toBe(true);
  });

  it('exposes a crawlable robots file and person metadata', () => {
    const robots = readFileSync(resolve('docs', 'public', 'robots.txt'), 'utf8');
    const config = readFileSync(resolve('docs', '.vitepress', 'config.ts'), 'utf8');
    const homepage = readFileSync(resolve('docs', 'index.md'), 'utf8');

    expect(robots).toContain('Sitemap: https://dengzhilin.fun/sitemap.xml');
    expect(config).toContain("rel: 'canonical'");
    expect(config).toContain("'application/ld+json'");
    expect(config).toContain("'Person'");
    expect(config).toContain("href: '/favicon.ico'");
    expect(config).toContain('appearance: false');
    expect(existsSync(resolve('docs', 'public', 'favicon.ico'))).toBe(true);
    expect(homepage).toContain('title: 邓智林｜Amazon ERP 与平台 API 工程师');
    expect(homepage).toContain('titleTemplate: false');
    expect(homepage).toContain(
      'description: 邓智林，5年软件开发经验，持续构建 SF Amazon ERP，聚焦 Amazon 运营数据底座、自动化运营与 AI Agent 辅助开品设计。',
    );
  });
});
