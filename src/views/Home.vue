<template>
<main class="home">
  <section class="hero">
    <h1 class="title-font hero__title">{{ $t('home.profession') }}</h1>
    <p class="hero__tagline">{{ $t('home.tagline') }}</p>

    <SpotlightSearch />

    <p class="hero__hint">{{ $t('home.hint') }}</p>
  </section>

  <section v-if="fullstackProjects.length" class="projects-section">
    <h2 class="projects-section__title title-font">{{ $t('home.fullstack') }}</h2>
    <ProjectCarousel :projects="fullstackProjects" />
  </section>

  <section v-if="frontendProjects.length" class="projects-section">
    <h2 class="projects-section__title title-font">{{ $t('home.frontend') }}</h2>
    <ProjectCarousel :projects="frontendProjects" />
  </section>

  <section class="projects-section">
    <h2 class="projects-section__title title-font">{{ $t('home.backend') }}</h2>
    <ProjectCarousel v-if="backendProjects.length" :projects="backendProjects" />
    <p v-else class="projects-section__empty">{{ $t('home.emptyBackend') }}</p>
  </section>
</main>
</template>

<script setup>
import { ref, computed, watch } from "vue"
import { useI18n } from "vue-i18n"

import ProjectCarousel from "../components/ProjectCarousel.vue"
import SpotlightSearch from "../components/SpotlightSearch.vue"
import baseProjects from "../data/projects.base.js"
import projectOrder from "../data/projects.order.js"

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
  })).sort(
    (a, b) => projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id)
  )
}

// cargar al inicio + cuando cambia el idioma
watch(locale, loadProjects, { immediate: true })

const byCategory = (cat) =>
  projects.value.filter((p) => (p.category || 'fullstack') === cat)

const fullstackProjects = computed(() => byCategory('fullstack'))
const frontendProjects = computed(() => byCategory('frontend'))
const backendProjects = computed(() => byCategory('backend'))
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

.projects-section {
  margin-top: 1rem;
}

.projects-section__title {
  margin: 0 0 0.5rem;
  padding: 0 clamp(1rem, 5vw, 4rem);
  font-size: 1.5rem;
  text-align: left;
  color: #fff;
}

.projects-section__empty {
  padding: 0 clamp(1rem, 5vw, 4rem) 1.5rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.95rem;
  text-align: left;
}


</style>
