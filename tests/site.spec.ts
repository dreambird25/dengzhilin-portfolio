import { describe, expect, it } from 'vitest';
import { site } from '../docs/.vitepress/theme/site';

describe('personal site content', () => {
  it('uses Deng Zhilin’s public identity and contact links', () => {
    expect(site.name).toBe('邓智林');
    expect(site.contact.email).toBe('dengzhilin666@gmail.com');
    expect(site.contact.github).toBe('https://github.com/dreambird25');
    expect(site.contact.blog).toBe('https://blog.csdn.net/qq_43657722');
  });

  it('describes sifanERP as the active project', () => {
    expect(site.projects).toHaveLength(1);
    expect(site.projects[0].name).toBe('sifanERP');
    expect(site.projects[0].status).toBe('正在构建');
  });
});
