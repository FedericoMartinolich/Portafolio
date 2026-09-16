<template>
  <router-link :to="route" class="button">
    <main>
      <div class="card">
        <div class="card__image">
          <img :src="routeImg" alt="" />
        </div>
        <div class="card__body">
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
    default: "https://via.placeholder.com/400x600",
  },
});
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
  font-family: var(--font-sans);
}

.card {
  width: 100%;
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
    0 0 0 1px rgba(59, 88, 255, 0.1),
    0 0 44px -6px rgba(59, 88, 255, 0.28);
}

.card__image {
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
  transition: opacity 0.3s ease, transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.card:hover .card__image img {
  opacity: 1;
  transform: scale(1.04);
}

.card__body {
  padding: 1rem 1.25rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.card__body h2 {
  margin: 0;
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.2;
  text-align: left;
  color: #f0f0f0;
}

.card__body p {
  margin: 0;
  text-align: left;
  font-size: 0.85rem;
  font-weight: 300;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.7);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.find-more {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.03em;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.3s ease;
  margin-top: 0.2rem;
}

.card:hover .find-more {
  color: rgba(59, 88, 255, 0.9);
}
</style>
