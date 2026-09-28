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
      { label: 'SF Amazon ERP Git 提交', value: '2,000+' },
      { label: '设备规模实践', value: '10,000+' },
      { label: 'CSDN 阅读 / 原创', value: '52万+ / 200篇' },
    ]);
  });

  it('describes SF Amazon ERP as the active project', () => {
    expect(site.projects).toHaveLength(1);
    expect(site.projects[0].name).toBe('SF Amazon ERP');
    expect(site.projects[0].status).toBe('正在构建');
    expect(site.projects[0].history.startedAt).toBe('2022');
    expect(site.projects[0].history.contribution).toBe('独立完成约 90% 功能');
    expect(site.projects[0].history.commits).toBe('2,000+ Git 提交');
  });

  it('describes both current work streams', () => {
    expect(site.currentWork.principles).toEqual(['数据底座与自动化运营', 'AI Agent 辅助开品与设计']);
    expect(site.currentWork.directions).toHaveLength(2);
  });

  it('links the latest writing to the published CSDN articles', () => {
    expect(site.writings.slice(0, 3).map(({ title, url }) => ({ title, url }))).toEqual([
      {
        title: 'AI 商品图视觉蒸馏实战：基于“版型-符号”解耦与提示词盲测闭环',
        url: 'https://blog.csdn.net/qq_43657722/article/details/166683715',
      },
      {
        title: 'Amazon Ads API 实战：如何高精度关联广告活动（Campaign）与 ASIN 及 ERP 产品主数据',
        url: 'https://blog.csdn.net/qq_43657722/article/details/165621024',
      },
      {
        title: '别再追“新词”了！从 Graph Engineering 破局，彻底搞懂 AI Agent 的底层内核 Loop Engineering',
        url: 'https://blog.csdn.net/qq_43657722/article/details/165333478',
      },
    ]);
    expect(site.writings).toHaveLength(8);
    expect(new Set(site.writings.map(({ url }) => url)).size).toBe(site.writings.length);
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
