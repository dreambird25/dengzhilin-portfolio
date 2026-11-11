<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

withDefaults(defineProps<{
  pattern?: 'network' | 'grid' | 'flow' | 'pages' | 'dialogue';
  from?: 'canvas' | 'tint';
  to?: 'canvas' | 'tint' | 'ink';
}>(), { pattern: 'network', from: 'canvas', to: 'tint' });

const boundary = ref<HTMLElement>();
let observer: IntersectionObserver | undefined;

onMounted(() => {
  if (!boundary.value || !('IntersectionObserver' in window)) return;
  observer = new IntersectionObserver(([entry]) => {
    entry.target.classList.toggle('is-visible', entry.isIntersecting);
  }, { threshold: 0.2 });
  boundary.value.classList.add('motion-ready');
  observer.observe(boundary.value);
});

onUnmounted(() => observer?.disconnect());
</script>

<template>
  <div ref="boundary" class="section-transition" :class="[`transition-${pattern}`, `transition-from-${from}`, `transition-to-${to}`]" aria-hidden="true">
    <div class="transition-stage">
      <div class="transition-line"></div>
      <svg v-if="pattern === 'network'" class="transition-motif network-motif" viewBox="0 0 440 220" fill="none">
        <path d="M62 48h96v62h32M62 172h96v-62m92 0h40V48h88m-88 62v62h88" stroke="currentColor" stroke-width="2" />
        <rect x="190" y="80" width="60" height="60" fill="currentColor" />
        <rect x="12" y="23" width="50" height="50" stroke="currentColor" />
        <rect x="12" y="147" width="50" height="50" stroke="currentColor" />
        <circle cx="398" cy="48" r="24" fill="var(--accent)" />
        <circle cx="398" cy="172" r="24" stroke="currentColor" />
        <path d="m210 110 8 8 14-16" stroke="var(--surface)" stroke-width="2" />
      </svg>
      <svg v-else-if="pattern === 'grid'" class="transition-motif grid-motif" viewBox="0 0 440 220" fill="none">
        <path d="M20 20h400v180H20zM20 80h400M20 140h400M100 20v180M180 20v180M260 20v180M340 20v180" stroke="currentColor" />
        <g class="grid-tiles" fill="currentColor">
          <path d="M20 20h80v60H20zM180 80h80v60h-80zM340 140h80v60h-80z" />
        </g>
        <circle cx="300" cy="50" r="24" fill="var(--accent)" />
        <path d="M100 200V20l80 60v120m80 0V20l80 60v120" stroke="currentColor" />
      </svg>
      <svg v-else-if="pattern === 'flow'" class="transition-motif flow-motif" viewBox="0 0 440 220" fill="none">
        <path d="M70 110h72m76 0h72m-12-10 12 10-12 10M328 148v42H36v-45" stroke="currentColor" stroke-width="2" />
        <circle cx="36" cy="110" r="34" stroke="currentColor" />
        <path d="m180 72 38 38-38 38-38-38z" fill="currentColor" />
        <rect x="290" y="72" width="76" height="76" fill="var(--accent)" />
        <path d="m311 110 12 12 24-26" stroke="var(--surface)" stroke-width="3" />
        <path d="m26 157 10-12 10 12" stroke="currentColor" stroke-width="2" />
      </svg>
      <svg v-else-if="pattern === 'pages'" class="transition-motif pages-motif" viewBox="0 0 440 220" fill="none">
        <path d="M130 38h172v160H130zM108 22h172v160H108z" stroke="currentColor" />
        <path d="M86 6h172v160H86z" fill="var(--seam-from)" stroke="currentColor" />
        <path d="M112 34h62v36h-62z" fill="var(--accent)" />
        <path d="M190 34h44m-44 16h44m-44 16h30M112 94h120m-120 18h120m-120 18h82" stroke="currentColor" stroke-width="2" />
      </svg>
      <svg v-else class="transition-motif dialogue-motif" viewBox="0 0 440 220" fill="none">
        <path d="M24 24h216v100H98l-40 30v-30H24z" fill="currentColor" />
        <path d="M174 92h240v84h-36v24l-38-24H174z" fill="var(--accent)" />
        <path d="M62 72h112m-12-12 12 12-12 12m214 58H224m12-12-12 12 12 12" stroke="var(--surface)" stroke-width="2" />
      </svg>
    </div>
  </div>
</template>
