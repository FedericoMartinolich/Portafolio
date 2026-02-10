<template>
  <section class="gallery" v-if="slides.length">
    <div class="container">
      <div class="carousel">

        <!-- Slides -->
        <ul class="carousel__slides" :style="{ transform: `translateX(-${current * 100}%)` }">
          <li v-for="(slide, index) in slides" :key="'main-' + index" class="carousel__slide">
            <figure>
              <div>
                <img :src="slide.image" :alt="`Imagen ${index + 1}`" />
              </div>
              <figcaption>{{ slide.description }}</figcaption>
            </figure>
          </li>
        </ul>

        <!-- Thumbnails -->
        <ul class="carousel__thumbnails">
          <li
            v-for="(slide, index) in slides"
            :key="'thumb-' + index"
            :class="{ active: index === current }"
            @click="goTo(index)"
          >
            <img :src="slide.thumb" :alt="`Miniatura ${index + 1}`" />
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
import { ref, computed } from 'vue'

const props = defineProps({
  gallery: {
    type: Array,
    required: true,
    default: () => []
  },
  galleryText: {
    type: Array,
    default: () => []
  }
})

console.log('Props recibidos:', props)

// Convertimos la data original en datos utilizables
const slides = computed(() =>
  props.gallery.map((img, i) => ({
    image: img,           // no concatenar /Portafolio/
    thumb: img,
    description: props.galleryText[i] || ''
  }))
)


console.log('Slides procesados:', slides.value)


// índice dinámico del slide actual
const current = ref(0)

// cambiar slide
const goTo = (index) => {
  current.value = index
}

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
  padding: 0 20px 40px 20px;
}

/* ==== CAROUSEL ==== */
.carousel {
  position: relative;
  text-align: left;
  margin: 0 auto;
  overflow: hidden; /* 🔥 importante */
}

/* === Slides === */
.carousel__slides {
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  transition: transform .35s ease;
  width: 100%;
}

.carousel__slide {
  flex: 0 0 100%; /* 🔥 asegura tamaño de pantalla completa */
  max-width: 100%;
  background: #151b24;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
}

.carousel__slide figure {
  margin: 0;
}

.carousel__slide div {
  position: relative;
  width: 100%;
}

.carousel__slide div::before {
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
  width: 100%;
}

/* === Miniaturas === */
.carousel__thumbnails {
  margin: 24px auto 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  max-width: 90%;
}

.carousel__thumbnails li {
  width: 90px;            /* 🔥 tamaño fijo y uniforme */
  height: 90px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: transform .3s ease, box-shadow .3s ease;
}

.carousel__thumbnails li img {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  filter: brightness(0.7);
  transition: transform .3s ease, filter .3s ease;
}

.carousel__thumbnails li:hover img {
  filter: brightness(1);
  transform: scale(1.05);
}

.carousel__thumbnails li.active {
  box-shadow: 0 0 0 3px rgba(56, 142, 255, .85);
}
</style>