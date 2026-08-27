import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('SEO assets', () => {
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
      'description: 邓智林，5年软件开发经验，专注 Amazon ERP、SP-API / Ads API 集成、跨境电商业务系统与工程化实践，持续构建 sifanERP。',
    );
  });
});
