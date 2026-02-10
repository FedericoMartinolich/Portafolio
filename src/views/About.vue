<template>
<main>
    <h1 class="title-font">{{ $t("about.title") }}</h1>
    <div class="img-wrapper">
      <img src="/perfil.jpeg" alt="">
    </div>
    <TextCarousel />


<div class="main-wrapper">
  <div class="badge yellow">
    <div class="circle"> <i class="fa fa-brands fa-js"></i></div>
    <div class="ribbon">JavaScript</div>
  </div>
  <div class="badge orange">
    <div class="circle"> <i class="fa fa-brands fa-html5"></i></div>
    <div class="ribbon">Html</div>
  </div>
  <!-- <div class="badge pink">
    <div class="circle"> <i class="fa fa-pied-piper"></i></div>
    <div class="ribbon">Nuker</div>
  </div> -->
  <div class="badge red">
    <div class="circle"> <i class="fa fa-brands fa-laravel"></i></div>
    <div class="ribbon">Laravel</div>
  </div>
  <div class="badge purple">
    <div class="circle"> <i class="fa fa-brands fa-bootstrap"></i></div>
    <div class="ribbon">Bootstrap</div>
  </div>
  <!-- <div class="badge teal">
    <div class="circle"> <i class="fa fa-bicycle"></i></div>
    <div class="ribbon">Roamer</div>
  </div> -->
  <div class="badge blue">
    <div class="circle"> <i class="fa fa-brands fa-css3"></i></div>
    <div class="ribbon">Css</div>
  </div>
  <div class="badge blue-dark">
    <div class="circle"> <i class="fa fa-brands fa-php"></i></div>
    <div class="ribbon">PHP</div>
  </div>
  <!-- <div class="badge green">
    <div class="circle"> <i class="fa fa-tree"></i></div>
    <div class="ribbon">Jungler</div>
  </div> -->
  <div class="badge green-dark">
    <div class="circle"> <i class="fa fa-brands fa-vuejs"></i></div>
    <div class="ribbon">vue</div>
  </div>
  <div class="badge silver">
    <div class="circle"> <i class="fa fa-solid fa-database"></i></div>
    <div class="ribbon">SQL</div>
  </div>
  <!-- <div class="badge gold">
    <div class="circle"> <i class="fa fa-magic"></i></div>
    <div class="ribbon">Support</div>
  </div> -->
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
import TextCarousel from '../components/TextCarousel.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>

/* all */

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Arial', sans-serif;
    padding: 2rem;
}

.img-wrapper {
  position: relative;
  display: inline-block;
  border-radius: 5%;
  overflow: hidden;
  border: 2px solid rgba(143, 143, 143, 0.25);
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.08); /* glow exterior */
}

.img-wrapper::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: inset 0 0 80px rgba(0, 0, 0, 0.7);
  pointer-events: none;
}

.img-wrapper img {
  max-height: 35rem;
  display: block;
  width: 100%;
  height: auto;
}

h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

/* icons */

body {
  font-family: "Comfortaa", sans-serif;
  background: #111;
}

.main-wrapper {
  width: 90%;
  max-width: 900px;
  margin: 3em auto;
  text-align: center;
}

.badge {
  position: relative;
  margin: 1.5em 3em;
  width: 4em;
  height: 6.2em;
  border-radius: 10px;
  display: inline-block;
  top: 0;
  transition: all 0.2s ease;
}
.badge:before, .badge:after {
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  background: inherit;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.badge:before {
  transform: rotate(60deg);
}
.badge:after {
  transform: rotate(-60deg);
}
.badge:hover {
  top: -4px;
}
.badge .circle {
  width: 60px;
  height: 60px;
  position: absolute;
  background: #fff;
  z-index: 10;
  border-radius: 50%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.badge .circle i.fa {
  font-size: 2em;
  margin-top: 8px;
}
.badge .font {
  display: inline-block;
  margin-top: 1em;
}
.badge .ribbon {
  position: absolute;
  border-radius: 4px;
  padding: 5px 5px 4px;
  width: 100px;
  z-index: 11;
  color: #fff;
  bottom: 12px;
  left: 50%;
  margin-left: -55px;
  height: 15px;
  font-size: 14px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.27);
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  background: linear-gradient(to bottom right, #555 0%, #333 100%);
  cursor: default;
}

.yellow {
  background: linear-gradient(to bottom right, #ffeb3b 0%, #fbc02d 100%);
  color: #ffb300;
}

.orange {
  background: linear-gradient(to bottom right, #ffc107 0%, #f57c00 100%);
  color: #f68401;
}

.pink {
  background: linear-gradient(to bottom right, #F48FB1 0%, #d81b60 100%);
  color: #dc306f;
}

.red {
  background: linear-gradient(to bottom right, #f4511e 0%, #b71c1c 100%);
  color: #c62828;
}

.purple {
  background: linear-gradient(to bottom right, #ab47bc 0%, #4527a0 100%);
  color: #7127a8;
}

.teal {
  background: linear-gradient(to bottom right, #4DB6AC 0%, #00796B 100%);
  color: #34a297;
}

.blue {
  background: linear-gradient(to bottom right, #4FC3F7 0%, #2196F3 100%);
  color: #259af3;
}

.blue-dark {
  background: linear-gradient(to bottom right, #1976D2 0%, #283593 100%);
  color: #1c68c5;
}

.green {
  background: linear-gradient(to bottom right, #cddc39 0%, #8bc34a 100%);
  color: #7cb342;
}

.green-dark {
  background: linear-gradient(to bottom right, #4CAF50 0%, #1B5E20 100%);
  color: #00944a;
}

.silver {
  background: linear-gradient(to bottom right, #E0E0E0 0%, #BDBDBD 100%);
  color: #9e9e9e;
}

.gold {
  background: linear-gradient(to bottom right, #e6ce6a 0%, #b7892b 100%);
  color: #b7892b;
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
</style>