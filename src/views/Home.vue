<template>
<main class="home">
  <section class="hero">
    <h1 class="title-font hero__title">{{ $t('home.profession') }}</h1>
    <p class="hero__tagline">{{ $t('home.tagline') }}</p>

    <SpotlightSearch />

    <p class="hero__hint">{{ $t('home.hint') }}</p>
  </section>

  <div class="cards-grid">
    <Card
      v-for="project in projects"
      :key="project.id"
      :route="`/projects/${project.id}`"
      :head="project.title"
      :text="project.shortDesc"
      :routeImg="project.thumbnail"
    />
  </div>
</main>
</template>

<script setup>
import { ref, watch } from "vue"
import { useI18n } from "vue-i18n"

import Card from "../components/Card.vue"
import SpotlightSearch from "../components/SpotlightSearch.vue"
import baseProjects from "../data/projects.base.js"

const { locale } = useI18n()

const projects = ref([])

const loadProjects = async () => {
  const langProjects = (
    await import(`../data/projects.${locale.value}.js`)
  ).default

  projects.value = Object.keys(baseProjects).map((key) => ({
    id: key,
    ...baseProjects[key],
    ...langProjects[key]
  }))
}

// cargar al inicio + cuando cambia el idioma
watch(locale, loadProjects, { immediate: true })
</script>

<style scoped>
.home {
  padding-bottom: 4rem;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
  padding: 3rem 1.5rem 2rem;
}

.hero__title {
  margin: 0;
  font-size: clamp(2.75rem, 7vw, 4.5rem);
  line-height: 1.05;
  letter-spacing: -0.01em;
}

.hero__tagline {
  margin: 0;
  max-width: 620px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.72);
}

.hero__hint {
  margin: 0.4rem 0 0;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.4);
}

.cards-grid {
  display: grid;
  gap: 1.5rem;
  padding: 0.5rem 2rem 0;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
</style>
