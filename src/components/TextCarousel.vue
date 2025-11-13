<template>
  <div id="scene">
    <div id="left-zone">
      <ul class="list">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="item"
        >
          <input
            type="radio"
            :id="'radio_' + item.slug"
            name="basic_carousel"
            :value="item.description"
            :checked="index === 0"
          />
          <label
            :class="'label_' + item.slug"
            :for="'radio_' + item.slug"
          >
            <i :class="['fa-solid', item.icon]"></i>
            {{ item.name }}
          </label>

          <div :class="'content content_' + item.slug">
            <span class="picto">
              <i :class="['fa-solid', item.icon]"></i>
            </span>
            <h1 :style="{ color: item.color }">{{ item.title }}</h1>
            <p>{{ item.description }}</p>
          </div>
        </li>
      </ul>
    </div>

    <div id="middle-border"></div>
    <div id="right-zone"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {
    name: 'About Me',
    title: 'About Me',
    slug: 'strawberry',
    icon: 'fa-user',
    color: '#e74c3c',
    description:
      'Soy Federico Martinolich, desarrollador web con enfoque en crear soluciones funcionales y bien estructuradas. Me apasiona transformar ideas en aplicaciones que realmente simplifiquen procesos y mejoren la experiencia de los usuarios.',
  },
  {
    name: 'Philosophy',
    title: 'Philosophy',
    slug: 'banana',
    icon: 'fa-solid fa-lightbulb',
    color: '#f1c40f',
    description:
      'Creo que el desarrollo va más allá del código: se trata de entender problemas reales y resolverlos con claridad, empatía y una buena dosis de curiosidad. Busco escribir código limpio, mantener una comunicación clara y aprender constantemente de cada proyecto.',
  },
  {
    name: 'Technologies',
    title: 'Technologies',
    slug: 'apple',
    icon: 'fa-solid fa-microchip',
    color: '#2ecc71',
    description:
      'Trabajo principalmente con tecnologías como Laravel, Vue.js, PHP y JavaScript. También disfruto diseñar interfaces con HTML, CSS y Bootstrap, buscando siempre equilibrio entre funcionalidad y estética.',
  },
  {
    name: 'Contact',
    title: 'Contact',
    slug: 'orange',
    icon: 'fa-solid fa-phone',
    color: '#e67e22',
    description:
      'Si te interesa colaborar, conocer más sobre mi trabajo o simplemente charlar sobre desarrollo web, podés contactarme a través de mis redes o escribirme directamente por WhatsApp. Siempre estoy abierto a nuevas ideas y desafíos.',
  },
])
</script>

<style scoped>
/* Animaciones (igual que antes) */
@keyframes slidein {
  0% { top: -400px; opacity: 0; }
  100% { top: 0; opacity: 1; }
}
@keyframes slideout {
  0% { top: 0; opacity: 1; }
  100% { top: -400px; opacity: 0; }
}

h1 {
  margin: 0.2em 0;
}

/* Escena principal */
#scene {
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  max-width: 1000px;
  height: 400px;
  margin: 40px auto;
  background-color: #141a24;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: relative;
  border-radius: 16px;
  color: #e0e6f0;
  font-family: "Inter", "Tahoma", sans-serif;
}

/* Zona izquierda */
#left-zone {
  background: #0e131b70;
  height: 75%;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: left;
  border-right: 2px solid #1e2530;
}

#left-zone .list {
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Oculta radios */
.item input[type=radio] {
  display: none;
}

/* Label */
.item label {
  display: flex;
  align-items: center;
  gap: 12px;
  opacity: 0.6;
  height: 50px;
  line-height: 50px;
  padding-left: 30px;
  color: #e0e6f0;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.item label i {
  font-size: 1.2rem;
}

.item label:hover {
  opacity: 0.9;
  cursor: pointer;
}

/* Contenido derecho */
.item .content {
  position: absolute;
  left: 350px;
  top: -400px;
  width: 650px;
  height: 400px;
  animation-duration: 0.75s;
  animation-name: slideout;
  animation-timing-function: ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #e0e6f0;
  background-color: #141a24;
}

.picto {
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  margin-bottom: 0px;
}

/* Texto */
.content p {
  max-width: 60%;
  text-align: center;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Efectos selección */
.item input[type=radio]:checked ~ label {
  opacity: 1;
  font-weight: 600;
}

.item input[type=radio]:checked ~ label i {
  color: currentColor;
}

.item input[type=radio]:checked ~ .content {
  animation-name: slidein;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

/* Separador y derecha */
#middle-border {
  background-color: #1e2530;
  height: 75%;
  width: 2px;
}

#right-zone {
  background: #0e131b;
  height: 100%;
  flex-grow: 3;
}
</style>
