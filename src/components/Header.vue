<template>
  <header class="site-header">
    <div class="header-inner">

      <!-- BRAND -->
      <router-link class="brand" to="/">
        <img class="brand__avatar" src="/perfil.jpg" alt="Avatar">
        <span class="brand__name">Federico Martinolich</span>
        <span class="brand__check">✔</span>
      </router-link>

      <!-- NAV -->
      <nav class="nav">
        <ul class="nav__list">
          <li v-for="(item, i) in menu" :key="i">
            <router-link
              :to="{ name: item.href }"
              class="nav__link"
              :class="{ active: activeSection === item.href }"
              @click="activeSection = item.href"
            >
              <span class="nav__num">{{ (i+1).toString().padStart(2,'0') }}</span>
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- THEME BTN -->
      <button class="theme-btn" @click="toggleTheme">🌓</button>

    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const activeSection = ref("home");

const menu = [
  { label: "home", href: "Home" },
  { label: "contact", href: "Writing" },
  { label: "notes", href: "Notes" },
  { label: "about", href: "About" }
];

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
}
</script>


<style scoped>
.site-header {
  width: 100%;
  padding: 1.5rem 0;
  background: #0e131b;
}

.header-inner {
  max-width: 1200px;
  margin: auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Brand */
.brand {
  display: flex;
  align-items: center;
  gap: .6rem;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}

.brand__avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}

.brand__check {
  color: #4db3ff;
  font-size: 1.1rem;
}

/* Nav */
.nav__list {
  list-style: none;
  display: flex;
  gap: 2.2rem;
  padding: 0;
  margin: 0;
}

.nav__link {
  color: #fff;
  text-decoration: none;
  font-weight: 300;
  position: relative;
  transition: color .2s ease;
}

.nav__num {
  font-weight: 600;
  margin-right: .4rem;
}

.nav__link.active::after,
.nav__link:hover::after {
  width: 100%;
}

.nav__link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
  height: 2px;
  background: #ff3b77;
  transition: width .3s ease;
}

/* Theme button */
.theme-btn {
  background: rgba(255,255,255,0.07);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background .2s ease;
}

.theme-btn:hover {
  background: rgba(255,255,255,0.15);
}

</style>