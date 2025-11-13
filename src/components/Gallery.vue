<template>
  <section class="gallery" v-if="slides && slides.length">
    <div class="container">
      <div class="carousel">
        <!-- Inputs dinámicos -->
        <template v-for="(slide, index) in slides" :key="index">
          <input
            type="radio"
            name="slides"
            :id="'slide-' + (index + 1)"
            :checked="index === 0"
          />
        </template>

        <!-- Slides principales -->
        <ul class="carousel__slides">
          <li
            class="carousel__slide"
            v-for="(slide, index) in slides"
            :key="'main-' + index"
          >
            <figure>
              <div>
                <img :src="slide.image" :alt="`Imagen ${index + 1}`" />
              </div>
              <figcaption>
                {{ slide.description }}
              </figcaption>
            </figure>
          </li>
        </ul>

        <!-- Miniaturas -->
        <ul class="carousel__thumbnails">
          <li v-for="(slide, index) in slides" :key="'thumb-' + index">
            <label :for="'slide-' + (index + 1)">
              <img :src="slide.thumb" :alt="`Miniatura ${index + 1}`" />
            </label>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section v-else class="gallery-empty">
    <p>No hay imágenes disponibles.</p>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  gallery: {
    type: Array,
    required: true,
    default: () => []
  },
  galleryText: {
    type: Array, // 👈 importante: es un array, no un string
    default: () => []
  }
})

// 🔄 Convertir tus arrays simples en objetos para el carrusel
const slides = computed(() =>
  props.gallery.map((img, i) => ({
    image: img,
    thumb: img,
    description: props.galleryText[i] || ''
  }))
)
</script>


<style scoped>
/* ==== RESET LOCAL ==== */
.gallery,
.gallery * {
  box-sizing: border-box;
}

.gallery {
  margin: 0;
  padding: 40px 0;
  background: #0e131b;
  color: #e0e6f0;
}

/* ==== CONTENEDOR ==== */
.container {
  max-width: 1044px;
  margin: 0 auto;
  padding: 0 20px 40px 20px; /* margen inferior controlado */
}

/* ==== CAROUSEL ==== */
.carousel {
  position: relative;
  text-align: left;
  margin: 0 auto;
}

.carousel > input {
  display: none;
}

/* === Lógica dinámica con nth-of-type === */
.carousel > input:nth-of-type(6):checked ~ .carousel__slides .carousel__slide:first-of-type {
  margin-left: -500%;
}
.carousel > input:nth-of-type(5):checked ~ .carousel__slides .carousel__slide:first-of-type {
  margin-left: -400%;
}
.carousel > input:nth-of-type(4):checked ~ .carousel__slides .carousel__slide:first-of-type {
  margin-left: -300%;
}
.carousel > input:nth-of-type(3):checked ~ .carousel__slides .carousel__slide:first-of-type {
  margin-left: -200%;
}
.carousel > input:nth-of-type(2):checked ~ .carousel__slides .carousel__slide:first-of-type {
  margin-left: -100%;
}
.carousel > input:nth-of-type(1):checked ~ .carousel__slides .carousel__slide:first-of-type {
  margin-left: 0%;
}

/* === Miniatura activa === */
.carousel > input:nth-of-type(1):checked ~ .carousel__thumbnails li:nth-of-type(1),
.carousel > input:nth-of-type(2):checked ~ .carousel__thumbnails li:nth-of-type(2),
.carousel > input:nth-of-type(3):checked ~ .carousel__thumbnails li:nth-of-type(3),
.carousel > input:nth-of-type(4):checked ~ .carousel__thumbnails li:nth-of-type(4),
.carousel > input:nth-of-type(5):checked ~ .carousel__thumbnails li:nth-of-type(5),
.carousel > input:nth-of-type(6):checked ~ .carousel__thumbnails li:nth-of-type(6) {
  box-shadow: 0 0 0 4px rgba(56, 142, 255, 0.8);
  border-radius: 8px;
}

/* === Slides === */
.carousel__slides {
  position: relative;
  z-index: 1;
  padding: 0;
  margin: 0;
  overflow: hidden;
  display: flex;
  transition: margin-left 0.3s ease-out;
}

.carousel__slide {
  flex: 1 0 100%;
  width: 100%;
  background: #151b24;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  overflow: hidden;
}

.carousel__slide figure {
  display: flex;
  margin: 0;
}

.carousel__slide div {
  position: relative;
  width: 100%;
}

.carousel__slide div:before {
  content: "";
  display: block;
  width: 100%;
  padding-top: 66.6667%;
}

.carousel__slide img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.85);
  transition: filter 0.3s ease;
}

.carousel__slide img:hover {
  filter: brightness(1);
}

.carousel__slide figcaption {
  padding: 20px;
  color: #cfd8e3;
  font-size: 0.95rem;
}

.carousel__slide .credit {
  display: block;
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85em;
}

/* === Miniaturas === */
.carousel__thumbnails {
  list-style: none;
  padding: 0;
  margin: 20px -10px 0 -10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.carousel__thumbnails li {
  flex: 1 1 auto;
  max-width: calc((100% / 6) - 20px);
  margin: 0 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.carousel__thumbnails label {
  display: block;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.carousel__thumbnails label:before {
  content: "";
  display: block;
  width: 100%;
  padding-top: 100%;
}

.carousel__thumbnails img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
  transition: all 0.3s ease;
  border-radius: 8px;
}

.carousel__thumbnails label:hover img {
  filter: brightness(1);
  box-shadow: 0 0 10px rgba(56, 142, 255, 0.6);
  transform: scale(1.05);
}
</style>
