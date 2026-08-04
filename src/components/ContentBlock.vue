<template>
  <div class="content-block">
    <h5 v-if="title" class="content-block__title">{{ title }}</h5>

    <p v-if="type === 'text' || type === 'paragraph'" class="content-block__text">
      {{ content }}
    </p>

    <ul v-else-if="type === 'bullets'" class="content-block__list">
      <li v-for="(item, i) in items" :key="i">{{ item }}</li>
    </ul>

    <TagList v-else-if="type === 'tags'" :items="items" />

    <RelatedProjects v-else-if="type === 'projects'" :project-ids="projectIds" :projects="projects" />

    <p v-else class="content-block__text">{{ content }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import TagList from './TagList.vue'
import RelatedProjects from './RelatedProjects.vue'
import { pick, pickItems } from '../utils/l10n.js'

const props = defineProps({
  block: { type: Object, required: true },
  projects: { type: Array, default: () => [] }
})

const { locale } = useI18n()

const type = computed(() => props.block.type)
const title = computed(() => pick(props.block.title, locale.value))
const content = computed(() => pick(props.block.content, locale.value))
const items = computed(() => pickItems(props.block.items, locale.value))
const projectIds = computed(() => props.block.projects || [])
</script>

<style scoped>
.content-block {
  margin-top: 1rem;
}

.content-block__title {
  margin: 0 0 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
}

.content-block__text {
  margin: 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.92rem;
  line-height: 1.65;
}

.content-block__list {
  margin: 0;
  padding-left: 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.content-block__list li {
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.92rem;
  line-height: 1.55;
}

.content-block__list li::marker {
  color: #6a84ff;
}
</style>
