---
title: 项目
description: 正在构建的 sifanERP
---

# 正在构建的项目

## sifanERP

**sifanERP** 是面向 Amazon 业务的企业级 ERP，目标是把分散在平台接口、运营流程与数据报表中的复杂性，收敛为稳定、可协作的系统能力。

### 覆盖的业务

- 店铺、Listing、订单、库存与 FBA
- 广告、销量分析与运营工作台
- 文件管理、权限与外部数据集成
- Amazon SP-API、Ads API 与氚云等平台的对接

### 工程结构

后端采用 Java 21、Spring Boot 与 Spring Cloud，配合 MySQL、Redis、RabbitMQ、Nacos 和 Flyway；前端采用 Vue 3、TypeScript 与 Vite。

对我而言，重点不是堆叠服务数量，而是让网关、核心业务、用户权限、平台集成和异步任务拥有清晰边界，并能被独立验证和演进。
