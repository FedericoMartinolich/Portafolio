<template>
  <Header />

  <div class="app-container">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.fullPath" />
      </transition>
    </router-view>
  </div>

  <Footer />
</template>


<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'

import { useRoute } from 'vue-router';
</script>

<style scoped>
.app-container {
  min-width: 100vw;
  min-height: 65vh;
  background: #0e131b;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}


</style>
