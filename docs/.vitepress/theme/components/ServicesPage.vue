<script setup lang="ts">
import { ref } from 'vue';
import { site } from '../site';

const copied = ref(false);

async function copyConsultationEmail() {
  await navigator.clipboard.writeText(site.contact.consultationEmail);
  copied.value = true;
  window.setTimeout(() => (copied.value = false), 2000);
}
</script>

<template>
  <section class="page-hero service-hero">
    <div class="site-container page-hero-inner">
      <p class="eyebrow">Network infrastructure services</p>
      <h1>为海外社媒运营，<br>提供网络技术支持。</h1>
      <p class="page-lead">面向 TikTok、Instagram、YouTube 等海外社媒业务，提供中转服务搭建、出海流量基础设施与设备订阅管理相关的技术服务。</p>
      <div class="service-contact">
        <p>咨询合作</p>
        <a :href="'mailto:' + site.contact.consultationEmail">{{ site.contact.consultationEmail }}</a>
        <button class="button button-primary" type="button" @click="copyConsultationEmail">{{ copied ? '已复制' : '一键复制邮箱' }}</button>
      </div>
    </div>
  </section>

  <section class="page-section">
    <div class="site-container">
      <div class="service-proof"><strong>10,000+</strong><p>台设备的流量出海、设备管理与订阅管理搭建经验。</p></div>
      <div class="service-grid">
        <article><span>01</span><h2>中转服务搭建</h2><p>根据业务拓扑设计与落地中转网络，梳理连通性、可用性、访问控制与日常运维边界。</p></article>
        <article><span>02</span><h2>出海流量技术服务</h2><p>为海外社媒运营提供网络基础设施支持，帮助业务团队获得稳定、可管理的网络服务能力。</p></article>
        <article><span>03</span><h2>设备与订阅管理</h2><p>围绕万级设备规模，建立设备分组、状态管理、订阅分发与运营协同所需的管理能力。</p></article>
      </div>
    </div>
  </section>

  <section class="page-section section-tint"><div class="site-container service-note"><p class="section-kicker">Service boundary</p><h2>技术服务应当服务于合规经营。</h2><p>仅提供合法、合规的网络与设备运营基础设施支持；不提供规避平台规则、绕过安全机制或不当账号操作相关服务。</p></div></section>
</template>
