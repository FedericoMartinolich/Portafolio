<template>
  <section class="project-block">
    <template v-if="isText">
      <h2 class="project-block__title title-font">{{ title }}</h2>
      <p class="project-block__text">{{ content }}</p>
      <div
        v-if="mediaList.length"
        class="project-block__media"
        :class="{ 'project-block__media--single': mediaList.length === 1 }"
      >
        <figure
          v-for="(m, i) in mediaList"
          :key="i"
          class="project-block__figure"
        >
          <button
            type="button"
            class="project-block__zoom"
            aria-label="Ampliar imagen"
            @click="openLightbox(i)"
          >
            <img :src="m.src" :alt="m.caption" loading="lazy" />
            <span class="project-block__zoom-icon"
              ><i class="fa-solid fa-magnifying-glass-plus"></i
            ></span>
          </button>
          <figcaption v-if="m.caption">{{ m.caption }}</figcaption>
        </figure>
      </div>
    </template>

    <template v-else-if="type === 'bullets'">
      <h2 class="project-block__title title-font">{{ title }}</h2>
      <ul class="project-block__list">
        <li v-for="(item, i) in items" :key="i">
          <i
            class="fa-solid fa-check project-block__check"
            aria-hidden="true"
          ></i>
          <span>{{ item }}</span>
        </li>
      </ul>
      <div
        v-if="mediaList.length"
        class="project-block__media"
        :class="{ 'project-block__media--single': mediaList.length === 1 }"
      >
        <figure
          v-for="(m, i) in mediaList"
          :key="i"
          class="project-block__figure"
        >
          <button
            type="button"
            class="project-block__zoom"
            aria-label="Ampliar imagen"
            @click="openLightbox(i)"
          >
            <img :src="m.src" :alt="m.caption" loading="lazy" />
            <span class="project-block__zoom-icon"
              ><i class="fa-solid fa-magnifying-glass-plus"></i
            ></span>
          </button>
          <figcaption v-if="m.caption">{{ m.caption }}</figcaption>
        </figure>
      </div>
    </template>

    <template v-else-if="type === 'tags'">
      <h2 class="project-block__title title-font">{{ title }}</h2>
      <TagList :items="items" />
    </template>

    <template v-else-if="type === 'gallery'">
      <h2 class="project-block__title title-font">{{ title }}</h2>
      <BlockGallery
        :images="galleryImages"
        :captions="captions"
        :title="title"
      />
    </template>

    <template v-else-if="type === 'links'">
      <h2 class="project-block__title title-font">{{ title }}</h2>
      <div class="project-block__links">
        <a
          v-for="(link, i) in links"
          :key="i"
          :href="link.url"
          target="_blank"
          rel="noopener"
          class="project-block__link"
        >
          <i
            class="fa-solid fa-arrow-up-right-from-square"
            aria-hidden="true"
          ></i>
          <span>{{ link.label }}</span>
        </a>
      </div>
    </template>

    <template v-else>
      <h2 v-if="title" class="project-block__title title-font">{{ title }}</h2>
      <p v-if="content" class="project-block__text">{{ content }}</p>
    </template>

    <Lightbox
      v-model:visible="lbVisible"
      v-model:index="lbIndex"
      :list="mediaList"
      :caption="lbIndex < mediaList.length ? mediaList[lbIndex].caption : ''"
    />
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

import TagList from "./TagList.vue";
import BlockGallery from "./BlockGallery.vue";
import Lightbox from "./Lightbox.vue";

const props = defineProps({
  block: { type: Object, required: true },
  project: { type: Object, required: true },
});

const type = computed(() => props.block.type);
const title = computed(() => props.block.title || "");
const content = computed(() => props.block.content || "");
const items = computed(() => props.block.items || []);
const links = computed(() => props.block.links || []);
const captions = computed(() => props.block.captions || []);
const galleryImages = computed(() => props.project.gallery || []);

const media = computed(() => props.block.media || []);
const mediaList = computed(() => {
  const list = Array.isArray(media.value) ? media.value : [media.value];
  return list
    .filter(Boolean)
    .map((m) => ({
      src: m.src || (props.project.gallery || [])[m.index] || "",
      caption: m.caption || "",
    }))
    .filter((m) => m.src);
});

const isText = computed(
  () => type.value === "text" || type.value === "paragraph",
);

const lbVisible = ref(false);
const lbIndex = ref(0);

const openLightbox = (i) => {
  lbIndex.value = i;
  lbVisible.value = true;
};
</script>

<style scoped>
.project-block__title {
  margin: 0 0 1.15rem;
  font-size: 1.6rem;
  letter-spacing: -0.01em;
  color: #fff;
}

.project-block__title::after {
  content: "";
  display: block;
  width: 42px;
  height: 3px;
  margin-top: 0.8rem;
  border-radius: 3px;
  background: linear-gradient(90deg, #3b58ff, #ff3b77);
}

.project-block__text {
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.8;
  letter-spacing: 0.006em;
  /* white-space: pre-line; */
  text-align: left;
  -webkit-hyphens: auto;
  hyphens: auto;
  text-wrap: pretty;
}

.project-block__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.project-block__list li {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.98rem;
  line-height: 1.72;
  text-align: justify;
  -webkit-hyphens: auto;
  hyphens: auto;
  text-wrap: pretty;
}

.project-block__list li > span {
  flex: 1;
  min-width: 0;
}

.project-block__check {
  margin-top: 0.32rem;
  flex-shrink: 0;
  color: #3b58ff;
  font-size: 0.82rem;
}

/* ===== Inline media (images that illustrate the section) ===== */
.project-block__media {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 1.7rem;
}

.project-block__media--single .project-block__figure {
  flex: 0 1 72%;
  min-width: 0;
}

.project-block__figure {
  flex: 1 1 0;
  min-width: 260px;
  margin: 0;
}

.project-block__zoom {
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: none;
  cursor: zoom-in;
  position: relative;
}

.project-block__zoom img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  background: #151b24;
  transition:
    transform 0.25s ease,
    border-color 0.25s ease;
}

.project-block__zoom:hover img {
  border-color: rgba(59, 88, 255, 0.55);
  transform: translateY(-2px);
}

.project-block__zoom-icon {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(4, 8, 15, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 0.85rem;
  opacity: 0;
  transition: opacity 0.25s ease;
}

.project-block__zoom:hover .project-block__zoom-icon {
  opacity: 1;
}

.project-block__figure figcaption {
  margin-top: 0.6rem;
  text-align: center;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.5;
}

@media (max-width: 640px) {
  .project-block__media--single .project-block__figure {
    flex-basis: 100%;
  }
}

.project-block__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.project-block__link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.7rem 1.2rem;
  border-radius: 10px;
  border: 1px solid rgba(59, 88, 255, 0.4);
  background: rgba(59, 88, 255, 0.12);
  color: #fff;
  font-weight: 500;
  font-size: 0.9rem;
  text-decoration: none;
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;
}

.project-block__link:hover {
  border-color: rgba(59, 88, 255, 0.7);
  background: rgba(59, 88, 255, 0.2);
  transform: translateY(-1px);
  color: #fff;
}
</style>
