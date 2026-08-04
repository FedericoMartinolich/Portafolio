<template>
  <article class="experience-card" :class="{ 'experience-card--open': open }">
    <header class="experience-card__header" @click="toggle">
      <div class="experience-card__top">
        <span class="experience-card__icon" aria-hidden="true">
          <i class="fa-solid fa-briefcase"></i>
        </span>
        <div class="experience-card__titles">
          <h3 class="experience-card__role">{{ role }}</h3>
          <span class="experience-card__company">{{ company }}</span>
        </div>
        <span class="experience-card__period">{{ period }}</span>
        <button
          class="experience-card__chevron"
          :aria-expanded="open"
          aria-label="Toggle"
          type="button"
        >
          <i class="fa-solid fa-chevron-down"></i>
        </button>
      </div>

      <div class="experience-card__meta">
        <span class="experience-card__duration">{{ duration }}</span>
      </div>
    </header>

    <div class="experience-card__body" :class="{ 'experience-card__body--open': open }">
      <div class="experience-card__inner">
        <p class="experience-card__summary">{{ summary }}</p>

        <TagList v-if="tags.length" :items="tags" />

        <div class="experience-card__sections">
          <ExperienceSection
            v-for="(section, i) in sections"
            :key="section.id"
            :section="section"
            :projects="projects"
            :default-open="i === 0"
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

import ExperienceSection from './ExperienceSection.vue'
import TagList from './TagList.vue'
import { pick } from '../utils/l10n.js'

const props = defineProps({
  experience: { type: Object, required: true },
  projects: { type: Array, default: () => [] }
})

const { locale } = useI18n()

const open = ref(false)
const toggle = () => (open.value = !open.value)

const role = computed(() => pick(props.experience.role, locale.value))
const company = computed(() => pick(props.experience.company, locale.value))
const period = computed(() => pick(props.experience.period, locale.value))
const duration = computed(() => pick(props.experience.duration, locale.value))
const summary = computed(() => pick(props.experience.summary, locale.value))
const tags = computed(() => pick(props.experience.tags, locale.value) || [])
const sections = computed(() => props.experience.sections || [])
</script>

<style scoped>
.experience-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

.experience-card:hover {
  border-color: rgba(255, 255, 255, 0.2);
}

.experience-card--open {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(59, 88, 255, 0.45);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.experience-card__header {
  padding: 1.15rem 1.4rem;
  cursor: pointer;
  user-select: none;
}

.experience-card__top {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.experience-card__icon {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(59, 88, 255, 0.15);
  color: #6a84ff;
  font-size: 1.05rem;
}

.experience-card__titles {
  flex: 1;
  min-width: 0;
}

.experience-card__role {
  margin: 0;
  font-family: var(--font-serif);
  font-size: 1.2rem;
  color: #fff;
  letter-spacing: 0.01em;
}

.experience-card__company {
  display: block;
  margin-top: 0.15rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.55);
}

.experience-card__period {
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.5);
  padding: 0.3rem 0.6rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  white-space: nowrap;
}

.experience-card__chevron {
  flex-shrink: 0;
  background: transparent;
  border: none;
  padding: 0.3rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
}

.experience-card--open .experience-card__chevron {
  transform: rotate(180deg);
  color: #fff;
}

.experience-card__meta {
  margin-top: 0.6rem;
  padding-left: calc(42px + 0.9rem);
}

.experience-card__duration {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.45);
}

.experience-card__body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.experience-card__body--open {
  grid-template-rows: 1fr;
}

.experience-card__inner {
  overflow: hidden;
  min-height: 0;
}

.experience-card__summary {
  margin: 0;
  padding: 0 1.4rem;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.95rem;
  line-height: 1.6;
}

.experience-card__sections {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding: 1.1rem 1.4rem 1.4rem;
}

@media (max-width: 640px) {
  .experience-card__top {
    flex-wrap: wrap;
  }
  .experience-card__period {
    order: 3;
    margin-left: calc(42px + 0.9rem);
  }
}
</style>
