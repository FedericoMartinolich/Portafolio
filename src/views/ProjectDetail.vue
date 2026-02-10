<template>
  <main v-if="project" class="project-detail">

    <!-- Hero -->
    <header class="hero">
      <img :src="project.thumbnail" alt="" class="hero-img" />
      <h1>{{ project.title }}</h1>
    </header>

    <!-- Tabs Navigation -->
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

    <!-- Dynamic Content -->
    <section class="tab-content">
      <transition name="fade" mode="out-in">
        <div :key="tab">

          <!-- ====================== CONTEXT ======================= -->
          <div v-if="tab === 'context'">
            <h3>Context</h3>
            <p>{{ project.detail.problem }}</p>
          </div>

          <!-- ====================== OBJECTIVE ======================= -->
          <div v-else-if="tab === 'objective'">
            <h3>Objective</h3>
            <p>{{ project.detail.objetive }}</p>
          </div>

          <!-- ====================== METHODOLOGY ======================= -->
          <div v-else-if="tab === 'methodology'">

            <!-- Methodology -->
            <h3 v-if="project.detail.metodology">Methodology</h3>
            <p v-if="project.detail.metodology">{{ project.detail.metodology }}</p>

            <!-- Divider: only if Methodology + Process -->
            <div 
              v-if="project.detail.metodology && project.detail.process?.length" 
              class="divider"
            ></div>

            <!-- Process -->
            <h3 v-if="project.detail.process?.length">Process</h3>
            <ul v-if="project.detail.process?.length">
              <li v-for="step in project.detail.process" :key="step">{{ step }}</li>
            </ul>
          </div>

          <!-- ====================== RESULT ======================= -->
          <div v-else-if="tab === 'result'">

            <!-- Result -->
            <h3>Result</h3>
            <p>{{ project.detail.result }}</p>

            <!-- Divider: only if Role exists -->
            <div v-if="project.detail.role" class="divider"></div>

            <!-- Role -->
            <h3 v-if="project.detail.role">Role</h3>
            <p v-if="project.detail.role">{{ project.detail.role }}</p>

            <!-- Divider: only if TechStack exists -->
            <div v-if="project.detail.techStack?.length" class="divider"></div>

            <!-- Tech Stack -->
            <h3 v-if="project.detail.techStack?.length">Tech Stack</h3>
            <div class="item-center" v-if="project.detail.techStack?.length">
              <ul class="stack">
                <li v-for="tech in project.detail.techStack" :key="tech">
                  <i v-if="tech === 'HTML'" class="fa-brands fa-html5"></i>
                  <i v-else-if="tech === 'CSS'" class="fa-brands fa-css3-alt"></i>
                  <i v-else-if="tech === 'JavaScript'" class="fa-brands fa-js"></i>
                  <i v-else-if="tech === 'Vue.js'" class="fa-brands fa-vuejs"></i>
                  <i v-else-if="tech === 'PHP'" class="fa-brands fa-php"></i>
                  <i v-else-if="tech === 'MySQL'" class="fa-solid fa-database"></i>
                  <i v-else-if="tech === 'Laravel' || tech === 'Laravel 10'" class="fa-brands fa-laravel"></i>
                  <i v-else-if="tech === 'Bootstrap'" class="fa-brands fa-bootstrap"></i>
                  <i v-else-if="tech === 'Leaflet'" class="fa-regular fa-map"></i>
                  <i v-else-if="tech === 'AJAX'" class="fa-solid fa-retweet"></i>
                  <i v-else-if="tech === 'FullCalendar'" class="fa-regular fa-calendar"></i>
                  <i v-else-if="tech === 'Tesseract OCR'" class="fa-solid fa-expand"></i>
                  <i v-else-if="tech === 'JWT'" class="fa-solid fa-key"></i>
                  <i v-else-if="tech === 'Vue 3'" class="fa-brands fa-vuejs"></i>
                  <i v-else-if="tech === 'Vite'" class="fa-solid fa-bolt-lightning"></i>
                  <i v-else-if="tech === 'Cloudinary'" class="fa-solid fa-cloud"></i>
                  <i v-else-if="tech === 'Google Drive'" class="fa-brands fa-google-drive"></i>
                  <i v-else-if="tech === 'Google Sheets'" class="fa-brands fa-google-drive"></i>
                  <i v-else-if="tech === 'Vercel'" class="fa-solid fa-square-caret-up"></i>
                  {{ tech }}
                </li>
              </ul>
            </div>

            <!-- Divider: only if repository exists -->
            <div v-if="project.detail.repository" class="divider"></div>

            <!-- Repository -->
            <h3 v-if="project.detail.repository">Repository</h3>
            <div class="item-center" v-if="project.detail.repository">
              <a :href="project.detail.repository" target="_blank" class="btn-github">
                <i class="fa-brands fa-github"></i>
                <span>Ver Repositorio</span>
              </a>
            </div>

          </div>

        </div>
      </transition>
    </section>

    <!-- Gallery -->
    <Gallery
      v-if="project?.gallery?.length && project?.detail?.galleryText?.length"
      :gallery="project.gallery"
      :galleryText="project.detail.galleryText"
    />


  </main>

  <main v-else>
    <p>Project not found.</p>
  </main>
</template>

<script setup>
import { ref, computed, watch } from "vue"
import { useRoute } from "vue-router"
import { useI18n } from "vue-i18n"

import baseProjects from "../data/projects.base.js"
import Gallery from "../components/Gallery.vue"

const route = useRoute()
const { locale, t } = useI18n()

const tab = ref("context")

const tabs = computed(() => [
  { label: t("tabs.context"), value: "context", icon: "📘" },
  { label: t("tabs.objective"), value: "objective", icon: "🎯" },
  { label: t("tabs.methodology"), value: "methodology", icon: "⚙️" },
  { label: t("tabs.result"), value: "result", icon: "🏁" }
])

const project = ref(null)

const loadProject = async () => {
  const langProjects = (await import(`../data/projects.${locale.value}.js`)).default
  const slug = route.params.id

  const baseProject = baseProjects[slug] || {}
  const langProject = langProjects[slug] || {}

  // Asegurar que detail exista
  const baseDetail = baseProject.detail || {}
  const langDetail = langProject.detail || {}

  project.value = {
    ...baseProject,
    ...langProject,
    detail: {
      ...baseDetail,
      ...langDetail,
      gallery: (baseDetail.gallery || []).map(img => `/Portafolio/${img}`),
      galleryText: langDetail.galleryText || []
    }
  }
}

watch([locale, () => route.params.id], loadProject, { immediate: true })
</script>


<style scoped>
.divider {
  width: 90%;
  height: 1px;
  background: rgba(255, 255, 255, 0.062);
  margin: 1.5rem 0;
  justify-self: center;
}

.item-center {
  display: block;
  justify-self: center;
  align-items: center;
  text-align: center;
}

.btn-github {
  display: inline-flex;
  align-items: center;
  justify-self: center;
  gap: 8px;
  background-color: #24292e;
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.2s;
}
.btn-github:hover {
  background-color: #444c56;
}
.btn-github i {
  font-size: 1.2rem;
}
.btn-github p {
  font-size: 0.8rem;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}

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
  justify-content: center;
  text-align: center;
  padding: 0;     /* <-- limpiar padding del UL */
  margin: 0 auto; /* <-- quitar margen por defecto y centrar contenedor */
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
  padding: 40px;
  background: #111827;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.4);
  width: auto;
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
