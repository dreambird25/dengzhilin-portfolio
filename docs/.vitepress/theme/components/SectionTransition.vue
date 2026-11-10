<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

withDefaults(defineProps<{
  pattern?: 'orbit' | 'grid' | 'fan';
  from?: 'canvas' | 'tint';
  to?: 'canvas' | 'tint' | 'ink';
}>(), { pattern: 'orbit', from: 'canvas', to: 'tint' });

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
      <svg v-if="pattern === 'orbit'" class="transition-motif orbit-motif" viewBox="0 0 440 220" fill="none">
        <ellipse cx="220" cy="110" rx="200" ry="90" stroke="currentColor" />
        <ellipse cx="220" cy="110" rx="158" ry="70" stroke="currentColor" />
        <ellipse cx="220" cy="110" rx="116" ry="50" stroke="currentColor" />
        <ellipse cx="220" cy="110" rx="74" ry="30" stroke="currentColor" />
        <path d="M5 170 435 50" stroke="currentColor" />
        <circle class="orbit-satellite" cx="335" cy="57" r="32" fill="var(--accent)" />
        <circle cx="220" cy="110" r="12" fill="currentColor" />
      </svg>
      <svg v-else-if="pattern === 'grid'" class="transition-motif grid-motif" viewBox="0 0 440 220" fill="none">
        <path d="M20 20h400v180H20zM20 80h400M20 140h400M100 20v180M180 20v180M260 20v180M340 20v180" stroke="currentColor" />
        <g class="grid-tiles" fill="currentColor">
          <path d="M20 20h80v60H20zM180 80h80v60h-80zM340 140h80v60h-80z" />
        </g>
        <circle cx="300" cy="50" r="24" fill="var(--accent)" />
        <path d="M100 200V20l80 60v120m80 0V20l80 60v120" stroke="currentColor" />
      </svg>
      <svg v-else class="transition-motif fan-motif" viewBox="0 0 440 220" fill="none">
        <path d="M220 220A200 200 0 0 1 20 20h200z" fill="currentColor" />
        <path d="M220 220A200 200 0 0 0 420 20H220z" fill="var(--accent)" />
        <path d="m220 220-24-200m24 200L148 20m72 200L92 20m128 200L28 20m192 200 24-200m-24 200L292 20m-72 200L348 20m-128 200L412 20" stroke="var(--surface)" />
        <circle cx="220" cy="180" r="22" fill="var(--surface)" />
      </svg>
      <div class="transition-counterform"></div>
    </div>
  </div>
</template>
