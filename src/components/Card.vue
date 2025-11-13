<template>
<router-link :to="route" class="button">
    <main>
    <div class="card">
        <img :src="routeImg" alt="">
        <div class="card-content">
        <h2>{{ head }}</h2>
        <p>{{ text }}</p>
        <span class="find-more material-symbols-outlined">Find out more →</span>
        </div>
    </div>
    </main>
</router-link>
</template>

<script setup>
defineProps({
  route: String,
  head: String,
  text: String,
  routeImg: {
    type: String,
    default: "https://via.placeholder.com/400x600"
  }
});
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
}

.card {
  width: 24rem;
  height: 36rem;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  color: #f0f0f0;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

/* Imagen al fondo */
.card img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
  transition: opacity 0.3s ease;
  z-index: 1;
}

/* Sombra inicial en base inferior */
.card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,     /* más oscuro abajo */
    rgba(0, 0, 0, 0.274) 25%,    /* se aclara rápido */
    rgba(0, 0, 0, 0.15) 60%,    /* casi se desvanece */
    transparent 100%           /* desaparece hacia arriba */
  );
  transition: background 0.4s ease;
  z-index: 2;
}


/* Sombra expandida */
.card:hover::before {
  background: rgba(0,0,0,0.8);
}

/* ✅ Texto ahora se ve porque está ENCIMA de la sombra */
.card-content {
  position: absolute;
  inset: 0;
  z-index: 3;
}

/* Estilo del texto */
.card h2 {
  position: absolute;
  bottom: 30px;
  left: 30px;
  margin: 0;
  font-family: "Roboto Condensed", sans-serif;
  transition: bottom 0.3s ease;
}

.card p,
.card a {
  position: absolute;
  left: 30px;
  opacity: 0;
  max-width: 80%;
  transition: opacity 0.4s ease;
}

.card p { bottom: 80px; text-align: left; }
.card a { bottom: 40px; color: inherit; text-decoration: none; }

/* Animación al hover */
.card:hover h2 { bottom: 220px; }
.card:hover p,
.card:hover a { opacity: 1; }
.card:hover img { opacity: 1; }

.material-symbols-outlined {
  vertical-align: middle;
}

.find-more {
  position: absolute;
  left: 30px;
  bottom: 40px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.card:hover .find-more {
  opacity: 1;
}
</style>
