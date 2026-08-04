<template>
  <div class="experience-list">
    <ExperienceCard
      v-for="exp in experiences"
      :key="exp.id"
      :experience="exp"
      :projects="projects"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import ExperienceCard from './ExperienceCard.vue'
import baseProjects from '../data/projects.base.js'

defineProps({
  experiences: {
    type: Array,
    required: true
  }
})

const { locale } = useI18n()

const projects = ref([])

const loadProjects = async () => {
  const langProjects = (await import(`../data/projects.${locale.value}.js`)).default

  projects.value = Object.keys(baseProjects).map((key) => ({
    id: key,
    ...baseProjects[key],
    ...langProjects[key]
  }))
}

watch(locale, loadProjects, { immediate: true })
</script>

<style scoped>
.experience-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  text-align: left;
}
</style>
