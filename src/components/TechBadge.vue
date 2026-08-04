<template>
  <span class="tech-badge" :style="{ '--tc': badge.color }">
    <i :class="badge.icon" aria-hidden="true"></i>
    <span>{{ badge.label }}</span>
  </span>
</template>

<script setup>
import { computed } from 'vue'
import { resolveTech } from '../utils/techBadges.js'

const props = defineProps({
  name: { type: String, required: true }
})

const badge = computed(() => resolveTech(props.name))
</script>

<style scoped>
.tech-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.88);
  background: rgba(255, 255, 255, 0.05);
  background: color-mix(in srgb, var(--tc) 14%, transparent);
  border: 1px solid color-mix(in srgb, var(--tc) 40%, transparent);
  white-space: nowrap;
}

.tech-badge i {
  color: var(--tc);
  font-size: 0.95rem;
}
</style>
