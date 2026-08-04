<template>
  <div
    ref="galleryEl"
    class="block-gallery"
    tabindex="0"
    role="region"
    :aria-label="title"
  >
    <div class="block-gallery__main">
      <button
        type="button"
        class="block-gallery__arrow block-gallery__arrow--left"
        :disabled="!images.length"
        aria-label="Previous"
        @click="prev"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>

      <figure class="block-gallery__figure">
        <button
          type="button"
          class="block-gallery__view"
          :aria-label="`Ver imagen ${current + 1}`"
          @click="openLightbox"
        >
          <Transition name="slide" mode="out-in">
            <img
              v-if="images.length"
              :key="current"
              :src="images[current]"
              class="block-gallery__img"
              :alt="`Image ${current + 1}`"
              loading="lazy"
            />
          </Transition>
          <span class="block-gallery__zoom"><i class="fa-solid fa-magnifying-glass-plus"></i></span>
        </button>
      </figure>

      <button
        type="button"
        class="block-gallery__arrow block-gallery__arrow--right"
        :disabled="!images.length"
        aria-label="Next"
        @click="next"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>

    <p v-if="images.length" class="block-gallery__caption">
      <span class="block-gallery__counter">{{ current + 1 }} / {{ images.length }}</span>
      <span class="block-gallery__text">{{ captions[current] || '' }}</span>
    </p>

    <ul v-if="images.length > 1" class="block-gallery__thumbs">
      <li
        v-for="(img, i) in images"
        :key="i"
        :class="{ 'block-gallery__thumb--active': i === current }"
        @click="openThumb(i)"
      >
        <img :src="img" :alt="`Thumbnail ${i + 1}`" loading="lazy" />
      </li>
    </ul>

    <Lightbox
      v-model:visible="lbVisible"
      v-model:index="current"
      :list="lightboxList"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

import Lightbox from './Lightbox.vue'

const props = defineProps({
  images: { type: Array, default: () => [] },
  captions: { type: Array, default: () => [] },
  title: { type: String, default: 'Gallery' }
})

const current = ref(0)
const galleryEl = ref(null)
const lbVisible = ref(false)

const lightboxList = computed(() =>
  props.images.map((src, i) => ({ src, caption: props.captions[i] || '' }))
)

const openLightbox = () => {
  lbVisible.value = true
}

const openThumb = (i) => {
  go(i)
  lbVisible.value = true
}

const go = (i) => {
  if (i < 0) i = props.images.length - 1
  if (i >= props.images.length) i = 0
  current.value = i
}

const prev = () => go(current.value - 1)
const next = () => go(current.value + 1)

const isVisible = () => {
  const el = galleryEl.value
  if (!el) return false
  const r = el.getBoundingClientRect()
  return r.top < window.innerHeight && r.bottom > 0
}

const onKey = (e) => {
  if (lbVisible.value) return
  if (!isVisible()) return
  if (e.key === 'ArrowRight') {
    e.preventDefault()
    next()
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault()
    prev()
  }
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<style scoped>
.block-gallery {
  margin: 1.5rem 0 0;
  outline: none;
}

.block-gallery__main {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 84%;
  margin: 0 auto;
}

.block-gallery__figure {
  flex: 1;
  min-width: 0;
  margin: 0;
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
  background: #151b24;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
}

.block-gallery__view {
  position: absolute;
  inset: 0;
  padding: 0;
  border: 0;
  background: none;
  cursor: zoom-in;
  display: block;
}

.block-gallery__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.block-gallery__zoom {
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

.block-gallery__figure:hover .block-gallery__zoom {
  opacity: 1;
}

.block-gallery__arrow {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
}

.block-gallery__arrow:hover:not(:disabled) {
  border-color: rgba(59, 88, 255, 0.6);
  background: rgba(59, 88, 255, 0.14);
  color: #fff;
}

.block-gallery__arrow:disabled {
  opacity: 0.35;
  cursor: default;
}

.block-gallery__caption {
  display: flex;
  align-items: baseline;
  gap: 0.7rem;
  margin: 0.9rem 0 0;
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.55;
}

.block-gallery__counter {
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.45);
  padding: 0.15rem 0.45rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
}

.block-gallery__thumbs {
  list-style: none;
  margin: 1.1rem auto 0;
  padding: 0;
  max-width: 84%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.block-gallery__thumbs li {
  width: 58px;
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  opacity: 0.55;
  transition: border-color 0.2s ease, opacity 0.2s ease, transform 0.2s ease;
}

.block-gallery__thumbs li img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.block-gallery__thumbs li:hover {
  opacity: 0.9;
}

.block-gallery__thumb--active {
  border-color: #3b58ff;
  opacity: 1;
  transform: translateY(-2px);
}

/* Slide transition */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(14px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-14px);
}

@media (max-width: 640px) {
  .block-gallery__arrow {
    width: 34px;
    height: 34px;
  }
  .block-gallery__caption {
    flex-direction: column;
    gap: 0.35rem;
  }
}
</style>
