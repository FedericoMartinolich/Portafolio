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
  width: 100%;
  font-family: var(--font-sans);
}

.card {
  width: 100%;
  max-width: 24rem;
  height: 36rem;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  color: #f0f0f0;
  background: #151b24;
  border: 1px solid rgba(255, 255, 255, 0.09);
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.3),
    0 12px 32px -8px rgba(0, 0, 0, 0.5);
  transform: translateZ(0);
  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.45s ease,
    border-color 0.3s ease;
}

.card:hover {
  transform: scale(1.02);
  border-color: rgba(255, 255, 255, 0.16);
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.3),
    0 26px 64px -16px rgba(0, 0, 0, 0.65),
    0 0 0 1px rgba(59, 88, 255, 0.10),
    0 0 44px -6px rgba(59, 88, 255, 0.28);
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
  right: 30px;
  margin: 0;
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.15;
  text-align: left;
  transition: bottom 0.3s ease;
}

.card p,
.card a {
  position: absolute;
  left: 30px;
  right: 30px;
  opacity: 0;
  max-width: 80%;
  transition: opacity 0.4s ease;
}

.card p {
  bottom: 80px;
  text-align: left;
  font-size: 0.92rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.85);
}
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
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.03em;
  color: rgba(255, 255, 255, 0.65);
  transition: opacity 0.4s ease;
}

.card:hover .find-more {
  opacity: 1;
}
</style>
