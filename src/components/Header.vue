<template>
  <header class="site-header">
    <div class="header-inner">

      <!-- BRAND -->
      <router-link class="brand" to="/">
        <img class="brand__avatar" src="/perfil.jpg" alt="Avatar">
        <span class="brand__name">Federico Martinolich</span>
        <span class="brand__check">✔</span>
      </router-link>

      <!-- NAV -->
      <nav class="nav">
        <ul class="nav__list">
          <li v-for="(item, i) in menu" :key="i">
            <router-link
              :to="{ name: item.href }"
              class="nav__link"
              :class="{ active: activeSection === item.href }"
              @click="activeSection = item.href"
            >
              <span class="nav__num">{{ (i+1).toString().padStart(2,'0') }}</span>
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- SEARCH WRAPPER (input + dropdown separados) -->
      <div class="search-wrapper">

        <div class="searcher-container">
          <input
            type="text"
            class="searcher"
            placeholder="Buscar proyectos..."
            v-model="search"
          />

          <button type="submit" class="searcher-btn">
            <i class="fa fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <!-- RESULTADOS (fuera del input-container) -->
        <div v-if="filteredProjects.length" class="search-results">
          <div class="result-item" v-for="p in filteredProjects" :key="p.id">
            <img :src="p.thumbnail" class="result-thumb" />
            <span class="result-title">{{ p.title }}</span>
          </div>
        </div>

      </div>

    </div>
  </header>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import projects from '../data/projects';

const activeSection = ref("home");

const menu = [
  { label: "home", href: "Home" },
  { label: "contact", href: "Writing" },
  /* { label: "notes", href: "Notes" }, */
  { label: "about", href: "About" }
];

const search = ref("");
const filteredProjects = computed(() => {
  /* watch(filteredProjects, (v) => {
    console.log("Resultados:", v);
  }) */

  const q = search.value.trim().toLowerCase();
  if (!q) return [];

  return projects.filter(p => {
    const titleMatch = p.title.toLowerCase().includes(q);

    const techMatch = p.detail?.techStack?.some(tech =>
      tech.toLowerCase().includes(q)
    );

    return titleMatch || techMatch;
  });
});
</script>

<style scoped>
/* ===========================
   Search Wrapper
=========================== */
.search-wrapper {
  position: relative; /* Ahora el dropdown depende de este */
  width: 260px;
}

/* ===========================
   Searcher
=========================== */
.searcher-container {
  display: flex;
  align-items: center;
  gap: 0;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  overflow: hidden;
  transition: border-color .25s ease;
}

.searcher-container:focus-within {
  border-color: #3b58ff;
}

.searcher {
  background: transparent;
  border: none;
  outline: none;
  padding: 0.55rem 0.8rem;
  color: white;
  width: 180px;
  font-size: 0.9rem;
}

.searcher::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.searcher-btn {
  background: transparent;
  border: none;
  padding: 0.55rem 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background .2s ease;
}

.searcher-btn:hover {
  background: rgba(255,255,255,0.12);
}

.fa {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
}

/* ===========================
   Dropdown de resultados
=========================== */
.search-results {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  background: #1a1f27;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  max-height: 300px;
  overflow-y: auto;
  z-index: 1000;
  padding: .5rem 0;
}

.result-item {
  display: flex;
  align-items: center;
  gap: .7rem;
  padding: .55rem 1rem;
  cursor: pointer;
  transition: background .15s;
}

.result-item:hover {
  background: rgba(255,255,255,0.08);
}

.result-thumb {
  width: 38px;
  height: 38px;
  border-radius: 6px;
  object-fit: cover;
}

.result-title {
  color: white;
  font-size: .9rem;
  font-weight: 400;
}

/* ===========================
   Header
=========================== */
.site-header {
  width: 100%;
  padding: 1.5rem 0;
  background: #0e131b;
}

.header-inner {
  max-width: 1200px;
  margin: auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ===========================
   Brand
=========================== */
.brand {
  display: flex;
  align-items: center;
  gap: .6rem;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}

.brand__avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}

.brand__check {
  color: #4db3ff;
  font-size: 1.1rem;
}

/* ===========================
   Nav
=========================== */
.nav__list {
  list-style: none;
  display: flex;
  gap: 2.2rem;
  padding: 0;
  margin: 0;
}

.nav__link {
  color: #fff;
  text-decoration: none;
  font-weight: 300;
  position: relative;
  transition: color .2s ease;
}

.nav__num {
  font-weight: 600;
  margin-right: .4rem;
}

.nav__link.active::after,
.nav__link:hover::after {
  width: 100%;
}

.nav__link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
  height: 2px;
  background: #ff3b77;
  transition: width .3s ease;
}

/* ===========================
   Theme button
=========================== */
.theme-btn {
  background: rgba(255,255,255,0.07);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background .2s ease;
}

.theme-btn:hover {
  background: rgba(255,255,255,0.15);
}

/* ===========================
   Responsive
=========================== */
@media (max-width: 650px) {
  span {
    font-size: 0.75rem;
  }
}
</style>