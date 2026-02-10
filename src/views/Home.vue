<template>
<main>
    <p>{{ $t('home.intro') }} <router-link to="/about">Fede</router-link> {{ $t('home.intro2') }}</p> 
    <h1 class="title-font">{{ $t('home.profession') }}</h1>
    <p>
        {{ $t('home.welcome') }}       
      <br>  
        {{ $t('home.instructions') }}
    </p>
    <div class="cards-grid">
        <!-- En un futuro poner carrusel cuando sean de 1 col -->
        <Card 
            v-for="project in projects"
            :key="project.id"
            :route="`/projects/${project.id}`"
            :head="project.title"
            :text="project.shortDesc"
            :routeImg="project.thumbnail"
        >
        </Card>
    </div>
</main>
</template>

<script setup>
import { ref, watch } from "vue"
import { useI18n } from "vue-i18n"
const { t } = useI18n()

import Card from "../components/Card.vue"
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
.text-left {
  text-align: left;
}
.cards-grid {
  display: grid;
  gap: 2rem;
  padding: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}
h1 {
   padding-left: 2rem; 
   padding-right: 2rem;
   font-size: 6rem;
   margin-top: 1rem;
   margin-bottom: 1rem;
}
p {
    font-size: 1.2rem;
    margin-bottom: 20px;
    font-family: 'Courier New', Courier, monospace;
    padding-left: 2rem; 
    padding-right: 2rem;
}
</style>