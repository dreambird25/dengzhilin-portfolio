import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { site } from '../docs/.vitepress/theme/site';

describe('personal site content', () => {
  it('uses Deng Zhilin’s public identity and contact links', () => {
    expect(site.name).toBe('邓智林');
    expect(site.contact.email).toBe('dengzhilin666@gmail.com');
    expect(site.contact.consultationEmail).toBe('1931630839@qq.com');
    expect(site.contact.github).toBe('https://github.com/dreambird25');
    expect(site.contact.blog).toBe('https://blog.csdn.net/qq_43657722');
  });

  it('describes sifanERP as the active project', () => {
    expect(site.projects).toHaveLength(1);
    expect(site.projects[0].name).toBe('sifanERP');
    expect(site.projects[0].status).toBe('正在构建');
  });

  it('describes the advertising optimization work in progress', () => {
    expect(site.currentWork.title).toContain('广告');
    expect(site.currentWork.principles).toContain('数据新鲜度门禁');
  });

  it('uses custom page components for every secondary page', () => {
    const expectedComponents = {
      'about.md': '<AboutPage />',
      'projects.md': '<ProjectsPage />',
      'blog.md': '<BlogPage />',
      'now.md': '<NowPage />',
      'services.md': '<ServicesPage />',
    };

    for (const [file, component] of Object.entries(expectedComponents)) {
      const content = readFileSync(resolve('docs', file), 'utf8');
      expect(content).toContain(component);
    }
  });
});
