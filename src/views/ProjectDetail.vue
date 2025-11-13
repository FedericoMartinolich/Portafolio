<template>
  <main v-if="project" class="project-detail">

    <header class="hero">
      <img :src="project.thumbnail" alt="" class="hero-img" />
      <h1>{{ project.title }}</h1>
    </header>

    <!-- Navegación con botones -->
    <nav class="slidemenu">
      <div class="tabs">
        <button
          v-for="(item, i) in tabs"
          :key="i"
          :class="['tab-btn', { active: tab === item.value }]"
          @click="tab = item.value"
        >
          <span class="icon">{{ item.icon }}</span>
          <span>{{ item.label }}</span>
        </button>
      </div>

      <div class="slider">
        <div
          class="bar"
          :style="{
            width: 100 / tabs.length + '%',
            left: (tabs.findIndex(t => t.value === tab) * (100 / tabs.length)) + '%'
          }"
        ></div>
      </div>
    </nav>


    <!-- Contenido dinámico -->
    <section class="tab-content">
      <transition name="fade" mode="out-in">
        <div :key="tab">
          <div v-if="tab === 'context'">
            <h3>Context</h3>
            <p>{{ project.detail.problem }}</p>
          </div>

          <div v-else-if="tab === 'objective'">
            <h3>Objective</h3>
            <p>{{ project.detail.objetive }}</p>
          </div>

          <div v-else-if="tab === 'methodology'">
            <h3>Methodology</h3>
            <p>{{ project.detail.metodology }}</p>

            <h3>Process</h3>
            <ul>
              <li v-for="step in project.detail.process" :key="step">{{ step }}</li>
            </ul>
          </div>

          <div v-else-if="tab === 'result'">
            <h3>Result</h3>
            <p>{{ project.detail.result }}</p>

            <h3>Role</h3>
            <p>{{ project.detail.role }}</p>

            <h3>Tech Stack</h3>
            <ul class="stack">
              <li v-for="tech in project.detail.techStack" :key="tech">{{ tech }}</li>
            </ul>
          </div>
        </div>
      </transition>
    </section>
    <Gallery
        :gallery="project.detail.gallery"
        :galleryText="project.detail.galleryText"
      />

  </main>

  <main v-else>
    <p>Project not found.</p>
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import projects from "../data/projects.js";
import { ref } from 'vue'
import Gallery from '../components/Gallery.vue';

const tab = ref('context')
const tabs = [
  { label: 'Context', value: 'context', icon: '📘' },
  { label: 'Objective', value: 'objective', icon: '🎯' },
  { label: 'Methodology', value: 'methodology', icon: '⚙️' },
  { label: 'Result', value: 'result', icon: '🏁' }
]
const route = useRoute();
const project = projects.find(p => p.id === route.params.id);
</script>

<style scoped>
.text-center {
  text-align: center;
}

main {
  text-align: left;
}

h3 {
  text-align: center;
}

li {
  list-style: none;
}

.project-detail {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Roboto", sans-serif;
}

/* Hero */
.hero {
  text-align: center;
  margin-bottom: 2rem;
}
.hero-img {
  width: 100%;
  max-height: 280px;
  object-fit: cover;
  border-radius: 10px;
}

/* Body */
.content p {
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

/* Tech stack badges */
.stack {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.stack li {
  background: #222;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.9rem;
    list-style: none;
}

/* Gallery */
.gallery {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.gallery img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;
}
.gallery img:hover {
  transform: scale(1.03);
}

/* github */
/* --- Botón GitHub estilizado --- */
.btn-github {
  display: inline-flex;
  align-items: stretch;
  border-radius: 8px;
  overflow: hidden;
  background: #181c24; /* 🎨 base más elegante */
  text-decoration: none;
  transition: background .3s ease, box-shadow .3s ease, transform .2s ease;
  box-shadow: 0 2px 10px rgba(0,0,0,0.45);
}

/* Hover uniforme */
.btn-github:hover {
  background: #0a0c10;
  box-shadow: 0 6px 20px rgba(0,0,0,0.6);
  transform: translateY(-2px);
}

/* Bloque del ícono */
.btn-github > i {
  background: #0f1116; /* 🎯 más profundo que el fondo */
  padding: 12px 16px;
  font-size: 1.35rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #646cff;
  position: relative;
}

/* Pico */
.btn-github > i::after {
  content: "";
  position: absolute;
  top: 50%;
  right: -8px;
  transform: translateY(-50%);
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid #0f1116; /* mismo color que el bloque del icono */
}

/* Texto */
.btn-github > span {
  padding: 12px 20px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #c8d0ff; /* 💎 un blanco-azulado suave */
}

/* Hover: acento + claridad controlada */
.btn-github:hover > span,
.btn-github:hover > i {
  color: #8c92ff; /* un purple un poco más brillante en hover */
}

/* Pico en hover */
.btn-github:hover > i::after {
  border-left-color: #0a0c10;
}

/* --- Fondo general --- */
.project-detail {
  background: #0e131b;
  color: #e2e8f0;
  min-height: 100vh;
  padding-bottom: 40px;
}

/* --- Hero --- */
.hero {
  text-align: center;
  padding: 40px 20px;
}

.hero-img {
  max-width: 250px;
  border-radius: 16px;
  margin-bottom: 20px;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.4);
}

.hero h1 {
  color: #f9fafb;
  font-size: 2rem;
  font-weight: 600;
}

/* --- Slide Menu --- */
.slidemenu {
  font-family: 'Inter', sans-serif;
  max-width: 700px;
  margin: 40px auto;
  text-align: center;
}

/* contenedor principal */
.slidemenu .tabs {
  display: flex;
  justify-content: space-between; /* los separa parejo */
  align-items: center;
  gap: 0; /* 🔹 sin espacio extra entre botones */
}

/* Botones de pestaña */
.tab-btn {
  flex: 1; /* 🔹 todos ocupan exactamente el mismo ancho */
  text-align: center;
  color: #9ca3af;
  opacity: 0.7;
  border: none;
  background: transparent;
  padding: 12px 0;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 0.95rem;
}

.tab-btn:hover {
  opacity: 0.9;
  color: #f1f5f9;
}

.tab-btn.active {
  opacity: 1;
  color: #ffffff;
}

/* Icono */
.tab-btn .icon {
  display: block;
  font-size: 22px;
  border: 2px solid #9ca3af;
  height: 45px;
  width: 45px;
  margin: 0 auto 5px;
  line-height: 45px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.tab-btn.active .icon {
  border-color: #38bdf8;
  color: #38bdf8;
}

/* --- Slider --- */
.slider {
  position: relative;
  width: 100%;
  height: 4px;
  background: #1f2937;
  border-radius: 5px;
  margin-top: 10px;
  overflow: hidden;
}

.bar {
  position: absolute;
  left: 0;
  top: 0;
  height: 4px;
  background: #38bdf8;
  border-radius: 5px;
  transition: all 0.4s ease;
}

/* --- Contenido --- */
.tab-content {
  margin-top: 25px;
  padding: 20px;
  background: #111827;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.4);
  width: 100%;
}

.tab-content h3 {
  color: #f9fafb;
  margin-bottom: 8px;
}

.tab-content p,
.tab-content li {
  color: #cbd5e1;
  line-height: 1.6;
}

/* --- Responsive --- */
@media (max-width: 700px) {
  .slidemenu .tabs {
    flex-wrap: wrap;
  }
  .tab-btn {
    flex: 1 1 50%;
  }
}


</style>
