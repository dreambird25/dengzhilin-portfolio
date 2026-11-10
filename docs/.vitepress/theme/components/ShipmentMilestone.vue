<script setup lang="ts">
import { site } from '../site';

const shipment = site.projects[0].delivery;
</script>

<template>
  <article id="automatic-shipment" class="completed-update">
    <div>
      <p class="section-kicker">SF Amazon ERP</p>
      <h2>{{ shipment.title }}<span class="completed-status">{{ shipment.status }}</span></h2>
      <p class="completed-description">{{ shipment.description }}</p>
      <ol class="completed-steps">
        <li v-for="step in shipment.steps" :key="step">{{ step }}</li>
      </ol>
    </div>
    <svg class="completed-art" viewBox="0 0 200 100" fill="none" aria-hidden="true">
      <path d="M12 50h52m-10-10 10 10-10 10" stroke="currentColor" />
      <path d="m88 30 40-20 40 20v43l-40 20-40-20zM88 30l40 20 40-20m-40 20v43" stroke="currentColor" />
      <circle cx="168" cy="70" r="22" fill="currentColor" />
      <path d="m157 70 8 8 14-16" stroke="#fffdf8" stroke-width="2" />
    </svg>
  </article>
</template>
