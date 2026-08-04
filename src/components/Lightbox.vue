<template>
  <Teleport to="body">
    <Transition name="lb">
      <div
        v-if="visible"
        class="lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="alt || 'Imagen'"
        @click.self="close"
      >
        <button type="button" class="lightbox__close" aria-label="Cerrar" @click="close">
          <i class="fa-solid fa-xmark"></i>
        </button>

        <button
          v-if="list.length > 1"
          type="button"
          class="lightbox__nav lightbox__nav--prev"
          aria-label="Anterior"
          @click="go(index - 1)"
        >
          <i class="fa-solid fa-chevron-left"></i>
        </button>

        <figure
          class="lightbox__figure"
          @wheel="onWheel"
          @mousedown="onDragStart"
          @mousemove="onDragMove"
          @mouseup="onDragEnd"
          @mouseleave="onDragEnd"
        >
          <div
            class="lightbox__stage"
            :class="{ 'lightbox__stage--zoomed': zoomed, 'lightbox__stage--dragging': dragging }"
            @click="toggleZoom"
          >
            <img
              :key="currentSrc"
              :src="currentSrc"
              :alt="alt || currentCaption"
              :style="imgStyle"
            />
          </div>
          <figcaption v-if="currentCaption" class="lightbox__caption">
            {{ currentCaption }}
          </figcaption>
        </figure>

        <button
          v-if="list.length > 1"
          type="button"
          class="lightbox__nav lightbox__nav--next"
          aria-label="Siguiente"
          @click="go(index + 1)"
        >
          <i class="fa-solid fa-chevron-right"></i>
        </button>

        <div class="lightbox__zoom">
          <button type="button" aria-label="Alejar" @click="zoomOut">
            <i class="fa-solid fa-magnifying-glass-minus"></i>
          </button>
          <button type="button" aria-label="Restablecer zoom" @click="resetZoom">
            <i class="fa-solid fa-expand"></i>
          </button>
          <button type="button" aria-label="Acercar" @click="zoomInCenter">
            <i class="fa-solid fa-magnifying-glass-plus"></i>
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  visible: { type: Boolean, default: false },
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
  caption: { type: String, default: '' },
  list: { type: Array, default: () => [] },
  index: { type: Number, default: 0 }
})

const emit = defineEmits(['update:visible', 'update:index'])

const MAX_SCALE = 4
const MIN_SCALE = 1

const scale = ref(1)
const originX = ref(50)
const originY = ref(50)
const tx = ref(0)
const ty = ref(0)
const dragging = ref(false)
const dragStart = ref({ x: 0, y: 0, tx: 0, ty: 0 })
const dragMoved = ref(false)
const suppressClick = ref(false)

const zoomed = computed(() => scale.value > 1)
const imgStyle = computed(() => ({
  transform: `scale(${scale.value}) translate(${tx.value}px, ${ty.value}px)`,
  transformOrigin: `${originX.value}% ${originY.value}%`
}))

const currentSrc = computed(() => props.list[props.index]?.src || props.src)
const currentCaption = computed(
  () => props.list[props.index]?.caption || props.caption || ''
)

const close = () => emit('update:visible', false)

const go = (i) => {
  const len = props.list.length
  if (!len) return
  emit('update:index', ((i % len) + len) % len)
}

const resetZoom = () => {
  scale.value = 1
  tx.value = 0
  ty.value = 0
  originX.value = 50
  originY.value = 50
  dragging.value = false
}

const setZoomAt = (newScale, clientX, clientY) => {
  const img = document.querySelector('.lightbox__stage img')
  if (!img) return
  const r = img.getBoundingClientRect()
  originX.value = ((clientX - r.left) / r.width) * 100
  originY.value = ((clientY - r.top) / r.height) * 100
  scale.value = Math.min(MAX_SCALE, Math.max(MIN_SCALE, newScale))
  if (scale.value === 1) {
    tx.value = 0
    ty.value = 0
  }
}

const toggleZoom = (e) => {
  if (suppressClick.value) {
    suppressClick.value = false
    return
  }
  if (zoomed.value) resetZoom()
  else setZoomAt(2.5, e.clientX, e.clientY)
}

const zoomInCenter = () => {
  const img = document.querySelector('.lightbox__stage img')
  const r = img ? img.getBoundingClientRect() : { left: 0, top: 0, width: 1, height: 1 }
  setZoomAt(scale.value * 1.5, r.left + r.width / 2, r.top + r.height / 2)
}

const zoomOut = () => {
  const img = document.querySelector('.lightbox__stage img')
  const r = img ? img.getBoundingClientRect() : { left: 0, top: 0, width: 1, height: 1 }
  setZoomAt(scale.value / 1.5, r.left + r.width / 2, r.top + r.height / 2)
}

const onWheel = (e) => {
  if (!props.visible) return
  e.preventDefault()
  const factor = e.deltaY < 0 ? 1.2 : 1 / 1.2
  setZoomAt(scale.value * factor, e.clientX, e.clientY)
}

const clampPan = () => {
  const stage = document.querySelector('.lightbox__stage')
  if (!stage) return
  const s = scale.value
  if (s === 1) {
    tx.value = 0
    ty.value = 0
    return
  }
  const { width: sw, height: sh } = stage.getBoundingClientRect()
  const maxX = (sw * (s - 1)) / 2
  const maxY = (sh * (s - 1)) / 2
  tx.value = Math.min(maxX, Math.max(-maxX, tx.value))
  ty.value = Math.min(maxY, Math.max(-maxY, ty.value))
}

const onDragStart = (e) => {
  if (!zoomed.value || e.button !== 0) return
  e.preventDefault()
  dragging.value = true
  dragMoved.value = false
  dragStart.value = { x: e.clientX, y: e.clientY, tx: tx.value, ty: ty.value }
}

const onDragMove = (e) => {
  if (!dragging.value) return
  if (
    !dragMoved.value &&
    (Math.abs(e.clientX - dragStart.value.x) > 5 ||
      Math.abs(e.clientY - dragStart.value.y) > 5)
  ) {
    dragMoved.value = true
  }
  tx.value = dragStart.value.tx + (e.clientX - dragStart.value.x)
  ty.value = dragStart.value.ty + (e.clientY - dragStart.value.y)
}

const onDragEnd = () => {
  if (!dragging.value) return
  dragging.value = false
  clampPan()
  if (dragMoved.value) suppressClick.value = true
}

const onKey = (e) => {
  if (!props.visible) return
  if (e.key === 'Escape') close()
  else if (e.key === 'ArrowRight') go(props.index + 1)
  else if (e.key === 'ArrowLeft') go(props.index - 1)
}

let prevOverflow = ''
watch(
  () => props.visible,
  (v) => {
    if (v) {
      prevOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = prevOverflow
      resetZoom()
    }
  }
)

watch(() => props.index, resetZoom)
watch(() => props.currentSrc, resetZoom)

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = prevOverflow
})
</script>

<style scoped>
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.5rem 1rem 1rem;
  background: rgba(4, 8, 15, 0.92);
  backdrop-filter: blur(6px);
}

.lightbox__figure {
  margin: 0;
  max-width: min(92vw, 1200px);
  max-height: 88vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
}

.lightbox__stage {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  max-height: 78vh;
  overflow: hidden;
  border-radius: 10px;
}

.lightbox__stage img {
  display: block;
  max-width: 100%;
  max-height: 78vh;
  object-fit: contain;
  cursor: zoom-in;
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  background: #0b1017;
  transition: transform 0.25s ease;
  will-change: transform;
}

.lightbox__stage--zoomed img {
  cursor: grab;
}

.lightbox__stage--zoomed.lightbox__stage--dragging img {
  cursor: grabbing;
  transition: none;
}

.lightbox__caption {
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.5;
}

.lightbox__close {
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.2rem;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
}

.lightbox__close:hover {
  border-color: rgba(255, 59, 119, 0.7);
  background: rgba(255, 59, 119, 0.15);
  transform: rotate(90deg);
}

.lightbox__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.85);
  font-size: 1rem;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.lightbox__nav--prev {
  left: 1.2rem;
}

.lightbox__nav--next {
  right: 1.2rem;
}

.lightbox__nav:hover {
  border-color: rgba(59, 88, 255, 0.7);
  background: rgba(59, 88, 255, 0.15);
  color: #fff;
}

.lightbox__zoom {
  position: absolute;
  right: 1.2rem;
  bottom: 1.2rem;
  display: flex;
  gap: 0.5rem;
}

.lightbox__zoom button {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
}

.lightbox__zoom button:hover {
  border-color: rgba(59, 88, 255, 0.7);
  background: rgba(59, 88, 255, 0.15);
  color: #fff;
}

.lb-enter-active,
.lb-leave-active {
  transition: opacity 0.25s ease;
}

.lb-enter-from,
.lb-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .lightbox {
    padding: 4rem 0.5rem 0.5rem;
  }

  .lightbox__nav {
    width: 40px;
    height: 40px;
  }

  .lightbox__nav--prev {
    left: 0.5rem;
  }

  .lightbox__nav--next {
    right: 0.5rem;
  }

  .lightbox__zoom {
    right: 0.75rem;
    bottom: 0.75rem;
  }

  .lightbox__zoom button {
    width: 38px;
    height: 38px;
  }
}
</style>
