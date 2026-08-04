<template>
  <ul v-if="items.length" class="tag-list">
    <li v-for="(item, i) in items" :key="i" class="tag-list__item">
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
.tag-list {
  list-style: none;
  margin: 0;
  padding: 1.1rem 1.4rem 1.4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  justify-content: center;
}

.tag-list__item {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.75);
  background: rgba(59, 88, 255, 0.14);
  border: 1px solid rgba(59, 88, 255, 0.3);
  border-radius: 999px;
  padding: 0.25rem 0.7rem;
}
</style>
