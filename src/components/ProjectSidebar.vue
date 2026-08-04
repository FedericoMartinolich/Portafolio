<template>
  <aside class="project-sidebar">
    <p class="project-sidebar__label">{{ label }}</p>
    <nav class="project-sidebar__nav">
      <template v-for="group in groups" :key="group.key">
        <p class="project-sidebar__group">
          {{ t(`categories.${group.key}`) }}
        </p>
        <button
          v-for="section in group.items"
          :key="section.id"
          type="button"
          class="project-sidebar__item"
          :class="{ 'project-sidebar__item--active': section.id === activeId }"
          @click="$emit('navigate', section.id)"
        >
          {{ section.title }}
        </button>
      </template>
    </nav>
  </aside>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps({
  groups: { type: Array, default: () => [] },
  activeId: { type: String, default: "" },
  label: { type: String, default: "" },
})

defineEmits(["navigate"])
</script>

<style scoped>
.project-sidebar {
  font-family: var(--font-sans);
}

.project-sidebar__label {
  margin: 0 0 0.6rem;
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
}

.project-sidebar__nav {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

.project-sidebar__group {
  margin: 0 0 0.15rem;
  padding-left: 0.9rem;
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
}

.project-sidebar__group:not(:first-child) {
  margin-top: 0.9rem;
}

.project-sidebar__item {
  position: relative;
  text-align: left;
  background: transparent;
  border: none;
  padding: 0.45rem 0.9rem;
  border-radius: 8px 0 0 8px;
  font-size: 0.88rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.55);
  cursor: pointer;
  transition:
    color 0.2s ease,
    background 0.2s ease;
}

.project-sidebar__item:hover {
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.04);
}

.project-sidebar__item--active {
  color: #fff;
  background: rgba(59, 88, 255, 0.14);
}

.project-sidebar__item--active::before {
  content: "";
  position: absolute;
  left: -1px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #3b58ff;
  border-radius: 2px;
}
</style>
