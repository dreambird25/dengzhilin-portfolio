import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('SEO assets', () => {
  it('exposes a crawlable robots file and person metadata', () => {
    const robots = readFileSync(resolve('docs', 'public', 'robots.txt'), 'utf8');
    const config = readFileSync(resolve('docs', '.vitepress', 'config.ts'), 'utf8');

    expect(robots).toContain('Sitemap: https://dengzhilin.fun/sitemap.xml');
    expect(config).toContain("rel: 'canonical'");
    expect(config).toContain("'application/ld+json'");
    expect(config).toContain("'Person'");
  });
});
