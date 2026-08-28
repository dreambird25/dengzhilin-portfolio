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
    expect(site.profileStats).toEqual([
      { label: '开发经验', value: '5 年' },
      { label: 'sifanERP Git 提交', value: '2,000+' },
      { label: '设备规模实践', value: '10,000+' },
      { label: 'CSDN 阅读 / 原创', value: '50万+ / 近200篇' },
    ]);
  });

  it('describes sifanERP as the active project', () => {
    expect(site.projects).toHaveLength(1);
    expect(site.projects[0].name).toBe('sifanERP');
    expect(site.projects[0].status).toBe('正在构建');
    expect(site.projects[0].history.startedAt).toBe('2022');
    expect(site.projects[0].history.contribution).toBe('独立完成约 90% 功能');
    expect(site.projects[0].history.commits).toBe('2,000+ Git 提交');
  });

  it('describes the advertising optimization work in progress', () => {
    expect(site.currentWork.title).toContain('广告');
    expect(site.currentWork.principles).toContain('数据新鲜度门禁');
  });

  it('links the latest writing to the published CSDN articles', () => {
    expect(site.writings.map(({ title, url }) => ({ title, url }))).toEqual([
      {
        title: '广告自动优化为什么必须先解决数据新鲜度问题',
        url: 'https://blog.csdn.net/qq_43657722/article/details/164145114',
      },
      {
        title: 'Amazon SP-API 数据同步：限流、幂等、重试与断点恢复',
        url: 'https://blog.csdn.net/qq_43657722/article/details/164141569',
      },
      {
        title: '从 0 到 2,000+ 次提交：ERP 四年的架构演进',
        url: 'https://blog.csdn.net/qq_43657722/article/details/164139889',
      },
    ]);
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

  it('presents the primary project before the general capability summary', () => {
    const homepage = readFileSync(resolve('docs', 'index.md'), 'utf8');
    expect(homepage.indexOf('<ProjectGrid />')).toBeLessThan(homepage.indexOf('<FocusGrid />'));
  });
});
