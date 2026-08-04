<template>
  <div class="spotlight">
    <div class="spotlight__box">
      <i class="fa-solid fa-magnifying-glass spotlight__icon"></i>

      <div class="spotlight__field">
        <input
          ref="inputEl"
          v-model="search"
          type="text"
          class="spotlight__input"
          :class="{ 'spotlight__input--empty': !search }"
          autocomplete="off"
          spellcheck="false"
          :aria-label="prefix"
          @keydown.down.prevent="move(1)"
          @keydown.up.prevent="move(-1)"
          @keydown.enter.prevent="go()"
          @keydown.esc="inputEl?.blur()"
        />

        <span v-if="!search" class="spotlight__ph" aria-hidden="true">
          <Transition name="ph" mode="out-in">
            <span :key="phIndex" class="spotlight__ph-label">
              {{ prefix }} "<strong>{{ currentWord }}</strong>"
            </span>
          </Transition>
        </span>
      </div>

      <span class="spotlight__kbd">{{ kbd }}</span>
    </div>

    <Transition name="results">
      <div v-if="filteredProjects.length" class="spotlight__results">
        <router-link
          v-for="(p, i) in filteredProjects"
          :key="p.id"
          class="spotlight__item"
          :class="{ 'spotlight__item--active': i === activeIndex }"
          :to="`/projects/${p.id}`"
          @mouseenter="activeIndex = i"
          @click="search = ''"
        >
          <img :src="p.thumbnail" class="spotlight__thumb" alt="" />
          <div class="spotlight__meta">
            <span class="spotlight__title">{{ p.title }}</span>
            <span class="spotlight__tags">{{ p.techStack.join(' · ') }}</span>
          </div>
          <i class="fa-solid fa-arrow-up-right-from-square spotlight__go"></i>
        </router-link>
      </div>

      <div v-else-if="search && !filteredProjects.length" class="spotlight__results spotlight__results--empty">
        {{ t('search.noResults', { q: search.trim() }) }}
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import baseProjects from '../data/projects.base.js'

const { locale, t, tm } = useI18n()
const router = useRouter()

/* ======================
   PROJECTS (ASYNC SAFE)
====================== */
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

/* ======================
   SEARCH
====================== */
const search = ref('')
const inputEl = ref(null)
const activeIndex = ref(0)

const filteredProjects = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return []

  return projects.value.filter((p) => {
    const titleMatch = p.title?.toLowerCase().includes(q)
    const techMatch = p.techStack?.some((tech) => tech.toLowerCase().includes(q))
    return titleMatch || techMatch
  })
})

watch(filteredProjects, () => {
  activeIndex.value = 0
})

const move = (dir) => {
  const n = filteredProjects.value.length
  if (!n) return
  activeIndex.value = (activeIndex.value + dir + n) % n
}

const go = () => {
  const p = filteredProjects.value[activeIndex.value]
  if (!p) return
  search.value = ''
  router.push(`/projects/${p.id}`)
}

/* ======================
   ROTATING PLACEHOLDER
====================== */
const prefix = computed(() => t('search.prefix'))
const suggestions = computed(() => tm('search.suggestions') || [])
const phIndex = ref(0)
const currentWord = computed(() => suggestions.value[phIndex.value] ?? suggestions.value[0] ?? '')

let phTimer = null
const cyclePh = () => {
  if (!suggestions.value.length) return
  phIndex.value = (phIndex.value + 1) % suggestions.value.length
  phTimer = setTimeout(cyclePh, 3200)
}

/* ======================
   SHORTCUTS
====================== */
const isMac = /Mac|iPhone|iPad/i.test(navigator.platform || '')
const kbd = isMac ? '⌘K' : 'Ctrl K'

const onGlobalKey = (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault()
    inputEl.value?.focus()
  }
}

onMounted(() => {
  phTimer = setTimeout(cyclePh, 3200)
  window.addEventListener('keydown', onGlobalKey)
})

onBeforeUnmount(() => {
  clearTimeout(phTimer)
  window.removeEventListener('keydown', onGlobalKey)
})
</script>

<style scoped>
.spotlight {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
  font-family: var(--font-sans);
}

.spotlight__box {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  height: 60px;
  padding: 0 0.9rem 0 1.1rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 18px;
  box-shadow:
    0 2px 10px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    background 0.3s ease;
}

.spotlight__box:focus-within {
  border-color: rgba(59, 88, 255, 0.65);
  background: rgba(255, 255, 255, 0.09);
  box-shadow:
    0 4px 22px rgba(0, 0, 0, 0.35),
    0 0 0 4px rgba(59, 88, 255, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.spotlight__icon {
  flex-shrink: 0;
  color: rgba(255, 255, 255, 0.55);
  font-size: 1.05rem;
}

.spotlight__field {
  position: relative;
  flex: 1;
  min-width: 0;
  height: 100%;
  display: flex;
  align-items: center;
}

.spotlight__input {
  flex: 1;
  min-width: 0;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-family: var(--font-sans);
  font-size: 1.05rem;
  caret-color: #fff;
}

.spotlight__input--empty {
  color: transparent;
}

.spotlight__ph {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  pointer-events: none;
  color: rgba(255, 255, 255, 0.38);
  font-size: 1.05rem;
}

.spotlight__ph-label {
  display: inline-block;
}

.spotlight__ph-label strong {
  color: rgba(255, 255, 255, 0.78);
  font-weight: 550;
}

.spotlight__kbd {
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.45);
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  padding: 0.22rem 0.45rem;
}

/* ===== Results ===== */
.spotlight__results {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  right: 0;
  max-height: 340px;
  overflow-y: auto;
  background: rgba(21, 26, 36, 0.96);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.55);
  padding: 0.4rem;
  z-index: 1000;
}

.spotlight__item {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.6rem 0.7rem;
  border-radius: 10px;
  color: #fff;
  text-decoration: none;
  transition: background 0.15s ease;
}

.spotlight__item--active {
  background: rgba(59, 88, 255, 0.18);
}

.spotlight__results--empty {
  padding: 0.9rem 1rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.55);
}

.spotlight__thumb {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
}

.spotlight__meta {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.spotlight__title {
  font-weight: 550;
  font-size: 0.95rem;
}

.spotlight__tags {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.spotlight__go {
  margin-left: auto;
  flex-shrink: 0;
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.8rem;
}

/* ===== Transitions ===== */
.ph-enter-active,
.ph-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.ph-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.ph-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.results-enter-active,
.results-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
  transform-origin: top;
}

.results-enter-from,
.results-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.98);
}

/* ===== Responsive ===== */
@media (max-width: 480px) {
  .spotlight__box {
    height: 52px;
    border-radius: 14px;
  }
  .spotlight__kbd {
    display: none;
  }
}
</style>
