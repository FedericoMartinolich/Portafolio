<template>
  <Header />
  <div class="app-container">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition> 
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
  transition: opacity .4s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

</style>
