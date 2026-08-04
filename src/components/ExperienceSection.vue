<template>
  <section class="experience-section" :class="{ 'experience-section--open': open }">
    <header class="experience-section__header" @click="toggle">
      <i :class="iconClass" class="experience-section__icon" aria-hidden="true"></i>
      <h4 class="experience-section__title">{{ title }}</h4>
      <span class="experience-section__chevron" aria-hidden="true">
        <i class="fa-solid fa-chevron-down"></i>
      </span>
    </header>

    <div class="experience-section__body" :class="{ 'experience-section__body--open': open }">
      <div class="experience-section__inner">
        <ContentBlock
          v-for="(block, i) in blocks"
          :key="i"
          :block="block"
          :projects="projects"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

import ContentBlock from './ContentBlock.vue'
import { pick } from '../utils/l10n.js'

const props = defineProps({
  section: { type: Object, required: true },
  projects: { type: Array, default: () => [] },
  defaultOpen: { type: Boolean, default: false }
})

const { locale } = useI18n()

const open = ref(props.defaultOpen)
const toggle = () => (open.value = !open.value)

const title = computed(() => pick(props.section.title, locale.value))
const iconClass = computed(() => pick(props.section.icon, locale.value) || 'fa-solid fa-circle')
const blocks = computed(() => props.section.blocks || [])
</script>

<style scoped>
.experience-section {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.3s ease, background 0.3s ease;
}

.experience-section--open {
  border-color: rgba(59, 88, 255, 0.35);
  background: rgba(255, 255, 255, 0.05);
}

.experience-section__header {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.85rem 1rem;
  cursor: pointer;
  user-select: none;
}

.experience-section__icon {
  color: #6a84ff;
  font-size: 0.85rem;
  width: 1rem;
  text-align: center;
}

.experience-section__title {
  flex: 1;
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
}

.experience-section__chevron {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.75rem;
  transition: transform 0.3s ease;
}

.experience-section--open .experience-section__chevron {
  transform: rotate(180deg);
}

.experience-section__body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.experience-section__body--open {
  grid-template-rows: 1fr;
}

.experience-section__inner {
  overflow: hidden;
  min-height: 0;
}

.experience-section__inner :deep(.content-block) {
  padding: 0 1rem 1rem;
}

.experience-section__inner :deep(.content-block:last-child) {
  padding-bottom: 1.1rem;
}
</style>
