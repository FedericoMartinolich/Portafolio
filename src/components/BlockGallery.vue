<template>
  <div
    ref="galleryEl"
    class="block-gallery"
    tabindex="0"
    role="region"
    :aria-label="title"
  >
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
        <span class="block-gallery__zoom"
          ><i class="fa-solid fa-magnifying-glass-plus"></i
        ></span>
      </button>
    </figure>

    <div v-if="images.length > 1" class="block-gallery__nav">
      <button
        type="button"
        class="block-gallery__arrow"
        aria-label="Previous"
        @click="prev"
      >
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <button
        type="button"
        class="block-gallery__arrow"
        aria-label="Next"
        @click="next"
      >
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>

    <ul v-if="images.length > 1" class="block-gallery__dots">
      <li
        v-for="(_, i) in images"
        :key="i"
        :class="{ 'block-gallery__dot--active': i === current }"
        @click="go(i)"
      ></li>
    </ul>

    <p v-if="captions[current]" class="block-gallery__caption">
      {{ captions[current] }}
    </p>

    <Lightbox
      v-model:visible="lbVisible"
      v-model:index="current"
      :list="lightboxList"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

import Lightbox from "./Lightbox.vue";

const props = defineProps({
  images: { type: Array, default: () => [] },
  captions: { type: Array, default: () => [] },
  title: { type: String, default: "Gallery" },
});

const current = ref(0);
const galleryEl = ref(null);
const lbVisible = ref(false);

const lightboxList = computed(() =>
  props.images.map((src, i) => ({ src, caption: props.captions[i] || "" })),
);

const openLightbox = () => {
  lbVisible.value = true;
};

const go = (i) => {
  if (i < 0) i = props.images.length - 1;
  if (i >= props.images.length) i = 0;
  current.value = i;
};

const prev = () => go(current.value - 1);
const next = () => go(current.value + 1);

const isVisible = () => {
  const el = galleryEl.value;
  if (!el) return false;
  const r = el.getBoundingClientRect();
  return r.top < window.innerHeight && r.bottom > 0;
};

const onKey = (e) => {
  if (lbVisible.value) return;
  if (!isVisible()) return;
  if (e.key === "ArrowRight") {
    e.preventDefault();
    next();
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    prev();
  }
};

onMounted(() => window.addEventListener("keydown", onKey));
onBeforeUnmount(() => window.removeEventListener("keydown", onKey));
</script>

<style scoped>
.block-gallery {
  margin: 0 auto;
  max-width: 780px;
  outline: none;
}

.block-gallery__figure {
  margin: 0;
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
  background: #151b24;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
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

/* ===== Navigation arrows ===== */
.block-gallery__nav {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;
}

.block-gallery__arrow {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(14, 19, 27, 0.9);
  backdrop-filter: blur(10px);
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.9rem;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.block-gallery__arrow:hover {
  border-color: rgba(59, 88, 255, 0.5);
  background: rgba(59, 88, 255, 0.35);
  color: #fff;
  transform: scale(1.08);
}

.block-gallery__arrow:active {
  transform: scale(0.96);
}

/* ===== Pagination dots ===== */
.block-gallery__dots {
  list-style: none;
  margin: 0.9rem auto 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.block-gallery__dots li {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition:
    background 0.25s ease,
    transform 0.25s ease;
}

.block-gallery__dots li:hover {
  background: rgba(255, 255, 255, 0.45);
}

.block-gallery__dot--active {
  background: #3b58ff !important;
  transform: scale(1.2);
}

/* ===== Caption ===== */
.block-gallery__caption {
  margin: 0.8rem 0 0;
  text-align: center;
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.55;
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
  .block-gallery {
    max-width: 100%;
  }

  .block-gallery__figure {
    border-radius: 12px;
  }

  .block-gallery__arrow {
    width: 38px;
    height: 38px;
  }
}
</style>
