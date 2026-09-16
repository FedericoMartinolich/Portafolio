<template>
  <div class="carousel">
    <button class="carousel__arrow carousel__arrow--left" @click="prev" aria-label="Previous">
      <i class="fa-solid fa-chevron-left"></i>
    </button>

    <div class="carousel__viewport" ref="viewportEl">
      <div class="carousel__track" :style="trackStyle" :class="{ 'carousel__track--animating': animating }">
        <div
          v-for="(item, i) in trackItems"
          :key="item._key"
          class="carousel__slide"
          :style="{ width: slideWidth }"
        >
          <Card
            :route="`/projects/${item.id}`"
            :head="item.title"
            :text="item.shortDesc"
            :routeImg="item.thumbnail"
          />
        </div>
      </div>
    </div>

    <button class="carousel__arrow carousel__arrow--right" @click="next" aria-label="Next">
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue"
import Card from "./Card.vue"

const props = defineProps({
  projects: { type: Array, required: true }
})

const CLONE_COUNT = 3

const currentIndex = ref(0)
const animating = ref(false)
const viewportWidth = ref(1200)
const viewportElWidth = ref(0)
const viewportEl = ref(null)
const gap = 24

let resizeObserver = null

const maxVisible = computed(() => {
  const w = viewportWidth.value
  if (w > 1280) return 4
  if (w > 900) return 3
  if (w > 560) return 2
  return 1
})

const slideWidth = computed(() => {
  const count = maxVisible.value
  const totalGap = gap * (count - 1)
  return `calc((100% - ${totalGap}px) / ${count})`
})

const trackItems = computed(() => {
  const list = props.projects
  if (!list.length) return []
  const items = []
  for (let c = 0; c < CLONE_COUNT; c++) {
    for (let i = 0; i < list.length; i++) {
      items.push({ ...list[i], _key: `pre-${c}-${i}` })
    }
  }
  for (let i = 0; i < list.length; i++) {
    items.push({ ...list[i], _key: `orig-${i}` })
  }
  for (let c = 0; c < CLONE_COUNT; c++) {
    for (let i = 0; i < list.length; i++) {
      items.push({ ...list[i], _key: `post-${c}-${i}` })
    }
  }
  return items
})

const originalsStart = computed(() => CLONE_COUNT * props.projects.length)

const slidePx = computed(() => {
  const count = maxVisible.value
  const totalGap = gap * (count - 1)
  if (viewportElWidth.value === 0) return 0
  return (viewportElWidth.value - totalGap) / count + gap
})

const trackStyle = computed(() => {
  const offset = originalsStart.value + currentIndex.value
  const px = slidePx.value
  if (px === 0) return { transform: "translateX(0)" }
  return {
    transform: `translateX(calc(-${offset} * ${px}px))`
  }
})

const next = () => {
  const total = props.projects.length
  animating.value = true
  currentIndex.value++

  if (currentIndex.value >= total) {
    currentIndex.value = 0
    nextTick(() => {
      animating.value = false
    })
  }
}

const prev = () => {
  const total = props.projects.length
  animating.value = true
  currentIndex.value--

  if (currentIndex.value < 0) {
    currentIndex.value = total - 1
    nextTick(() => {
      animating.value = false
    })
  }
}

const onResize = () => {
  viewportWidth.value = window.innerWidth
}

onMounted(() => {
  viewportWidth.value = window.innerWidth
  window.addEventListener("resize", onResize)

  if (viewportEl.value) {
    viewportElWidth.value = viewportEl.value.offsetWidth
    resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        viewportElWidth.value = entry.contentRect.width
      }
    })
    resizeObserver.observe(viewportEl.value)
  }
})

onUnmounted(() => {
  window.removeEventListener("resize", onResize)
  if (resizeObserver) resizeObserver.disconnect()
})
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  padding: 0 clamp(1rem, 5vw, 4rem) 1rem;
}

.carousel__viewport {
  overflow: hidden;
  width: 100%;
}

.carousel__track {
  display: flex;
  gap: 1.5rem;
  will-change: transform;
}

.carousel__track--animating {
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.carousel__slide {
  flex-shrink: 0;
}

.carousel__arrow {
  all: unset;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(14, 19, 27, 0.9);
  backdrop-filter: blur(10px);
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
}

.carousel__arrow i {
  font-size: 1rem;
  pointer-events: none;
}

.carousel__arrow:hover {
  background: rgba(59, 88, 255, 0.35);
  border-color: rgba(59, 88, 255, 0.5);
  color: #fff;
  transform: translateY(-50%) scale(1.08);
}

.carousel__arrow:active {
  transform: translateY(-50%) scale(0.96);
}

.carousel__arrow--left {
  left: 0;
}

.carousel__arrow--right {
  right: 0;
}
</style>
