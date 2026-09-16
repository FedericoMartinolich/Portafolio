<template>
<main>
  <div class="two-columns">
    <!-- Columna Izquierda: Sobre mí -->
    <div class="column-left">
      <div class="photo-container">
        <img class="photo-bg" src="/perfil.jpeg" alt="" />
        <img class="photo-fg" src="/perfil.jpeg" alt="Foto de perfil" />
      </div>
      <h1 class="title-font">{{ $t("about.title") }}</h1>
      <p class="intro">Soy Federico Martinolich, un desarrollador web enfocado en crear soluciones funcionales y bien estructuradas. Me apasiona transformar ideas en aplicaciones que realmente simplifiquen procesos y mejoren la experiencia del usuario.</p>
      <a href="/Portafolio/cv/Federico_Martinolich_Desarollador_Analista_Sistemas.pdf" download class="btn-cv">
        <i class="fa fa-download"></i> {{ $t("about.cv") }}
      </a>
    </div>

    <!-- Columna Derecha: Experiencia -->
    <div class="column-right">
      <h2 class="career__title title-font">{{ $t("about.careerTitle") }}</h2>
      <section class="career">
        <ExperienceList :experiences="experiences" />
      </section>
    </div>
  </div>

  <footer>
    <a href="https://www.linkedin.com/in/federico-martinolich" target="_blank">
        <i class="fa fa-brands fa-linkedin-in icons"></i>
    </a>
    <a href="https://github.com/FedericoMartinolich" target="_blank">
        <i class="fa fa-brands fa-github icons"></i>
    </a>
    <a href="https://wa.me/541125276194" target="_blank">
        <i class="fa fa-brands fa-whatsapp icons"></i>
    </a>
    <a href="https://www.instagram.com/fedev.jpg" target="_blank">
      <i class="fa fa-brands fa-instagram icons"></i>
    </a>
  </footer>
</main>
</template>

<script setup>
import ExperienceList from '../components/ExperienceList.vue';
import { useI18n } from 'vue-i18n';
import experiencesData from '../data/experiences.json';

const { t } = useI18n();
const experiences = experiencesData.experiences;
</script>

<style scoped>
.btn-cv {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  padding: 0.85rem 1.6rem;
  border-radius: 10px;

  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: #fff;
  font-weight: 600;
  text-decoration: none;

  box-shadow: 0 8px 20px rgba(79, 70, 229, 0.35);
  transition: all 0.25s ease;

  margin-top: 2rem;
  width: 100%;
  box-sizing: border-box;
}

.btn-cv:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(79, 70, 229, 0.45);
  background: linear-gradient(135deg, #4f46e5, #4338ca);
}

.btn-cv:active {
  transform: translateY(0);
  box-shadow: 0 6px 16px rgba(79, 70, 229, 0.35);
}

/* all */

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--font-sans);
    padding: 2rem;
}

.two-columns {
  display: flex;
  gap: 3rem;
  width: 100%;
  max-width: 1200px;
  align-items: flex-start;
}

.column-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.column-right {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.career {
  width: 100%;
  margin-top: 0;
  border-left: 1px solid rgba(255, 255, 255, 0.12);
  padding-left: 3rem;
}

.photo-container {
  position: relative;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.photo-container::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  box-shadow: inset 0 0 20px 2px rgba(0, 0, 0, 0.6);
}

.photo-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(20px);
  transform: scale(1.2);
}

.photo-fg {
  position: relative;
  display: block;
  width: auto;
  height: auto;
  max-width: 400px;
  max-height: 400px;
  margin: 0 auto;
  object-fit: contain;
}

h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.intro {
  max-width: 100%;
  margin: 2rem 0 0;
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.05rem;
  line-height: 1.7;
  text-align: justify;
}

.career {
  width: 100%;
  margin-top: 0;
}

.career__title {
  font-size: 2.5rem;
  margin: 0 0 1.5rem;
  text-align: left;
}

footer {
  text-align: center;
  margin: 5em auto;
}
footer a {
  text-decoration: none;
  display: inline-block;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #111;
  border: 0.5px dashed #f8f8f8;
  color: #999;
  margin: 5px;
}
footer a:hover {
  background: #222;
}
footer a .icons {
  margin-top: 12px;
  display: inline-block;
  font-size: 20px;
}

@media (max-width: 768px) {
  .two-columns {
    flex-direction: column;
    gap: 2rem;
  }

  .column-left {
    width: 100%;
    padding-bottom: 2rem;
  }

  .column-right {
    width: 100%;
  }

  .career {
    border-left: none;
    padding-left: 0;
  }

  .intro {
    text-align: justify;
  }

  .career__title {
    text-align: center;
  }
}

@media (max-width: 640px) {
  h1 {
    font-size: 2.2rem;
  }
  .career__title {
    font-size: 1.6rem;
  }
}
</style>
