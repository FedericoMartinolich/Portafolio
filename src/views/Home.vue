<template>
<main>
    <p>Hi there! I'm <router-link to="/about">Fede</router-link></p> 
    <h1 class="title-font">I am a Fullstack Developer</h1>
    <p>
      Welcome to my Portfolio! 
      <!-- <br> You can find out anything specific about me using keywords in the search bar at the top. -->
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
import Card from '../components/Card.vue';
import projects from '../data/projects.js';
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