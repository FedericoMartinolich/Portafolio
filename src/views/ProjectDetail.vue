<template>
  <main v-if="project" class="project-detail">
    <div class="pd">
      <header class="pd-head">
        <router-link to="/" class="pd-back">
          <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
          {{ t("project.back") }}
        </router-link>
      </header>

      <!-- Executive summary -->
      <section class="exec">
        <div class="exec__head">
          <img
            v-if="project.thumbnail"
            :src="project.thumbnail"
            class="exec__logo"
            :style="{ '--accent': project.accent || '#3b58ff' }"
            alt=""
          />
          <div class="exec__head-text">
            <h1 class="exec__title">{{ project.title }}</h1>
            <p v-if="project.company" class="exec__company">
              {{ project.company }}
            </p>
            <p class="exec__summary">{{ project.shortDesc }}</p>
          </div>
        </div>

        <div v-if="meta.state" class="exec__state-row">
          <span
            :class="['exec__state', `exec__state--${project.status || 'done'}`]"
            >{{ meta.state }}</span
          >
        </div>

        <div class="exec__meta-line">
          <span v-if="meta.type">{{ meta.type }}</span>
          <span
            v-if="meta.type && meta.role"
            class="exec__dot"
            aria-hidden="true"
          ></span>
          <span v-if="meta.role">{{ meta.role }}</span>
          <span
            v-if="meta.duration"
            class="exec__dot"
            aria-hidden="true"
          ></span>
          <span v-if="meta.duration">{{ meta.duration }}</span>
        </div>

        <div v-if="project.techStack?.length" class="exec__tech-row">
          <TechBadge v-for="tech in visibleTech" :key="tech" :name="tech" />
          <button
            v-if="hiddenTechCount > 0"
            type="button"
            class="exec__more"
            :aria-expanded="showAllTech"
            @click="showAllTech = !showAllTech"
          >
            {{
              showAllTech
                ? t("project.lessTechs")
                : t("project.moreTechs", { n: hiddenTechCount })
            }}
          </button>
        </div>

        <div v-if="hasActions" class="exec__actions">
          <a
            v-if="project.demo"
            :href="project.demo"
            target="_blank"
            rel="noopener"
            class="exec__action exec__action--primary"
          >
            <i
              class="fa-solid fa-arrow-up-right-from-square"
              aria-hidden="true"
            ></i>
            {{ t("project.verDemo") }}
          </a>
          <a
            v-if="project.repository"
            :href="project.repository"
            target="_blank"
            rel="noopener"
            class="exec__action"
          >
            <i class="fa-brands fa-github" aria-hidden="true"></i>
            {{ t("project.github") }}
          </a>
        </div>
      </section>

      <!-- Mobile index -->
      <nav v-if="sections.length" class="pd-chips">
        <button
          v-for="section in sections"
          :key="section.id"
          type="button"
          class="pd-chips__item"
          :class="{ 'pd-chips__item--active': section.id === activeId }"
          @click="setSection(section.id)"
        >
          {{ section.title }}
        </button>
      </nav>

      <div class="pd-layout">
        <ProjectSidebar
          class="pd-sidebar"
          :groups="groupedSections"
          :active-id="activeId"
          :label="t('project.onThisPage')"
          @navigate="setSection"
        />

        <div class="pd-content">
          <Transition name="pd-fade" mode="out-in">
            <ProjectBlock
              v-if="activeBlock"
              :key="activeBlock.id"
              :block="activeBlock"
              :project="project"
            />
          </Transition>
        </div>
      </div>
    </div>
  </main>

  <main v-else class="project-detail">
    <p class="pd-notfound">{{ t("project.notFound") }}</p>
  </main>
</template>

<script setup>
import { ref, computed, watch, nextTick } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

import baseProjects from "../data/projects.base.js";
import ProjectSidebar from "../components/ProjectSidebar.vue";
import ProjectBlock from "../components/ProjectBlock.vue";
import TechBadge from "../components/TechBadge.vue";

const route = useRoute();
const { locale, t } = useI18n();

const SHOW_TECH_COUNT = 3;

const project = ref(null);
const activeId = ref("");
const showAllTech = ref(false);

const loadProject = async () => {
  const langProjects = (await import(`../data/projects.${locale.value}.js`))
    .default;
  const slug = route.params.id;

  project.value = {
    ...(baseProjects[slug] || {}),
    ...(langProjects[slug] || {}),
  };

  showAllTech.value = false;
  await nextTick();
  activeId.value = sections.value[0]?.id || "";
  window.scrollTo(0, 0);
};

watch([locale, () => route.params.id], loadProject, { immediate: true });

const meta = computed(() => project.value?.meta || {});
const blocks = computed(() => project.value?.blocks || []);
const sections = computed(() =>
  blocks.value
    .filter((b) => b.title)
    .map((b) => ({ id: b.id, title: b.title })),
);

const visibleTech = computed(() => {
  const stack = project.value?.techStack || [];
  return showAllTech.value ? stack : stack.slice(0, SHOW_TECH_COUNT);
});

const hiddenTechCount = computed(() =>
  Math.max(0, (project.value?.techStack?.length || 0) - SHOW_TECH_COUNT),
);

const hasActions = computed(() =>
  Boolean(project.value?.demo || project.value?.repository),
);

const activeBlock = computed(() =>
  blocks.value.find((b) => b.id === activeId.value) || blocks.value[0],
);

const CATEGORY_BY_ID = {
  resumen: "context",
  problema: "context",
  objetivo: "context",
  solucion: "development",
  reportes: "development",
  reglas: "development",
  carga: "development",
  ocr: "development",
  pedido: "development",
  seguimiento: "development",
  panel: "development",
  datos: "development",
  canchero: "development",
  busqueda: "development",
  cancha: "development",
  detalles: "development",
  responsive: "development",
  navegacion: "development",
  solicitud: "development",
  contacto: "development",
  compra: "development",
  empresa: "development",
  nuevos: "development",
  arquitectura: "development",
  implementacion: "development",
  desafios: "development",
  resultado: "conclusion",
  aprendizajes: "conclusion",
  distinto: "conclusion",
  galeria: "conclusion",
  enlaces: "resources",
};

const CATEGORY_ORDER = ["context", "development", "conclusion", "resources"];

const groupedSections = computed(() => {
  const map = {};
  for (const s of sections.value) {
    const cat = CATEGORY_BY_ID[s.id] || "development";
    if (!map[cat]) map[cat] = [];
    map[cat].push(s);
  }
  return CATEGORY_ORDER.filter((key) => map[key]).map((key) => ({
    key,
    items: map[key],
  }));
});

const setSection = (id) => {
  activeId.value = id;
};
</script>

<style scoped>
.project-detail {
  font-family: var(--font-sans);
  color: #e2e8f0;
  min-height: 60vh;
}

.pd {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 2rem 5rem;
}

.pd-head {
  margin-bottom: 1.6rem;
  text-align: left;
}

.pd-back {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  margin-left: -0.8rem;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  font-weight: 400;
  text-decoration: none;
  transition:
    color 0.2s ease,
    background 0.2s ease;
}

.pd-back:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
}

/* ===== Executive summary card ===== */
.exec {
  position: relative;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 18px;
  padding: 1.6rem 1.8rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.exec::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b58ff, #ff3b77);
}

.exec__head {
  display: flex;
  align-items: center;
  gap: 1.1rem;
}

.exec__logo {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  object-fit: cover;
  flex-shrink: 0;
  border: 1px solid color-mix(in srgb, var(--accent) 45%, transparent);
  box-shadow: 0 6px 20px color-mix(in srgb, var(--accent) 28%, transparent);
}

.exec__title {
  margin: 0;
  font-size: 1.55rem;
  letter-spacing: -0.01em;
  color: #fff;
  text-align: left;
}

.exec__company {
  margin: 0.1rem 0 0;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: left;
}

.exec__summary {
  margin: 0.35rem 0 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.95rem;
  line-height: 1.6;
  text-align: justify;
  -webkit-hyphens: auto;
  hyphens: auto;
  text-wrap: pretty;
}

.exec__state-row {
  margin-top: 1.1rem;
  display: flex;
  align-items: center;
}

.exec__state {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  font-weight: 600;
  line-height: 1.2;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  white-space: nowrap;
}

.exec__state::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: currentColor;
}

.exec__state--done {
  background: rgba(74, 222, 128, 0.14);
  border: 1px solid rgba(74, 222, 128, 0.45);
  color: #6ee7a0;
  box-shadow: 0 0 12px rgba(74, 222, 128, 0.35);
  text-shadow: 0 0 8px rgba(74, 222, 128, 0.5);
}

.exec__state--progress {
  background: rgba(250, 204, 21, 0.14);
  border: 1px solid rgba(250, 204, 21, 0.5);
  color: #fde047;
  box-shadow: 0 0 12px rgba(250, 204, 21, 0.35);
  text-shadow: 0 0 8px rgba(250, 204, 21, 0.5);
}

.exec__meta-line {
  margin-top: 0.7rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.55rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.72);
}

.exec__dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.35);
}

.exec__tech-row {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
}

.exec__more {
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.05);
  border: 1px dashed rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  padding: 0.3rem 0.75rem;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    color 0.2s ease;
}

.exec__more:hover {
  border-color: rgba(59, 88, 255, 0.6);
  background: rgba(59, 88, 255, 0.12);
  color: #fff;
}

.exec__actions {
  margin-top: 1.2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.exec__action {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.6rem 1.1rem;
  border-radius: 10px;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.06);
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;
}

.exec__action:hover {
  border-color: rgba(59, 88, 255, 0.6);
  background: rgba(59, 88, 255, 0.14);
  transform: translateY(-1px);
  color: #fff;
}

.exec__action--primary {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  border-color: transparent;
  box-shadow: 0 6px 18px rgba(79, 70, 229, 0.3);
}

.exec__action--primary:hover {
  background: linear-gradient(135deg, #4f46e5, #4338ca);
  border-color: transparent;
}

/* ===== Layout ===== */
.pd-layout {
  display: grid;
  grid-template-columns: 230px minmax(0, 1fr);
  gap: 3.5rem;
  align-items: start;
  margin-top: 3rem;
}

.pd-sidebar {
  position: sticky;
  top: 2rem;
}

.pd-content {
  min-width: 0;
}

.pd-fade-enter-active,
.pd-fade-leave-active {
  transition:
    opacity 0.22s ease,
    transform 0.22s ease;
}

.pd-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.pd-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ===== Mobile chips ===== */
.pd-chips {
  display: none;
  gap: 0.5rem;
  margin-top: 1.5rem;
  overflow-x: auto;
  padding: 0.75rem 0 0.5rem;
  background: #0e131b;
  position: sticky;
  top: 0;
  z-index: 20;
  scrollbar-width: none;
}

.pd-chips::-webkit-scrollbar {
  display: none;
}

.pd-chips__item {
  flex-shrink: 0;
  font-size: 0.82rem;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.65);
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    background 0.2s ease;
}

.pd-chips__item:hover {
  color: #fff;
}

.pd-chips__item--active {
  border-color: rgba(59, 88, 255, 0.6);
  background: rgba(59, 88, 255, 0.15);
  color: #fff;
}

.pd-notfound {
  text-align: center;
  padding: 4rem 2rem;
  color: rgba(255, 255, 255, 0.6);
}

/* ===== Responsive ===== */
@media (max-width: 900px) {
  .pd-layout {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .pd-sidebar {
    display: none;
  }

  .pd-chips {
    display: flex;
  }
}

@media (max-width: 640px) {
  .pd {
    padding: 1.4rem 1.2rem 4rem;
  }

  .exec {
    padding: 1rem 1rem;
  }

  .exec__head {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.7rem;
  }

  .exec__logo {
    width: 52px;
    height: 52px;
  }

  .exec__title {
    font-size: 1.5rem;
    text-align: left;
  }
}
</style>
