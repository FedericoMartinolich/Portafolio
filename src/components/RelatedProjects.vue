<template>
  <div v-if="list.length" class="related-projects">
    <router-link
      v-for="p in list"
      :key="p.id"
      class="related-projects__item"
      :to="`/projects/${p.id}`"
    >
      <img :src="p.thumbnail" class="related-projects__thumb" alt="" loading="lazy" />
      <div class="related-projects__meta">
        <span class="related-projects__title">{{ p.title }}</span>
        <span class="related-projects__tags">{{ techStack(p) }}</span>
      </div>
      <i class="fa-solid fa-arrow-right related-projects__go" aria-hidden="true"></i>
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  projectIds: { type: Array, default: () => [] },
  projects: { type: Array, default: () => [] }
})

const list = computed(() =>
  props.projectIds
    .map((id) => props.projects.find((p) => p.id === id))
    .filter(Boolean)
)

const techStack = (p) => (p.techStack || []).join(' · ')
</script>

<style scoped>
.related-projects {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.related-projects__item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.6rem 0.7rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  color: #fff;
  text-decoration: none;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
}

.related-projects__item:hover {
  border-color: rgba(59, 88, 255, 0.5);
  background: rgba(59, 88, 255, 0.1);
  transform: translateX(3px);
  color: #fff;
}

.related-projects__thumb {
  width: 44px;
  height: 44px;
  border-radius: 9px;
  object-fit: cover;
  flex-shrink: 0;
}

.related-projects__meta {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.related-projects__title {
  font-weight: 600;
  font-size: 0.92rem;
  color: #fff;
}

.related-projects__tags {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: rgba(255, 255, 255, 0.45);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.related-projects__go {
  flex-shrink: 0;
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.85rem;
  transition: transform 0.2s ease, color 0.2s ease;
}

.related-projects__item:hover .related-projects__go {
  transform: translateX(2px);
  color: #6a84ff;
}
</style>
