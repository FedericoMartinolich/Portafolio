<template>
  <header class="site-header">
    <div class="header-inner">

      <!-- BRAND -->
      <router-link class="brand" to="/">
        <img class="brand__avatar" src="/perfil.jpg" alt="Avatar">
        <span class="brand__text">
          <span class="brand__name">
            Federico Martinolich <span class="brand__check">✔</span>
          </span>
          <span class="brand__subtitle">Laravel · Vue · PHP</span>
        </span>
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

      <!-- Lang -->
      <div class="lang-switcher">
        <span class="lang-switcher__label">{{ t('language.label') }}</span>
        <div class="lang-switcher__control">
          <button
            class="lang-btn"
            :class="{ active: locale === 'es' }"
            @click="locale = 'es'"
          >
            ES
          </button>
          <button
            class="lang-btn"
            :class="{ active: locale === 'en' }"
            @click="locale = 'en'"
          >
            EN
          </button>
        </div>
      </div>

    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

const activeSection = ref('Home')

const menu = computed(() => [
  { label: t("menu.home"), href: 'Home' },
  { label: t("menu.contact"), href: 'Writing' },
  { label: t("menu.about"), href: 'About' }
])
</script>


<style scoped>
/* ===========================
   Header
=========================== */
.site-header {
  width: 100%;
  padding: 1rem 0;
  background: #0e131b;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.header-inner {
  max-width: 1200px;
  margin: auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

/* ===========================
   Brand
=========================== */
.brand {
  display: flex;
  align-items: center;
  gap: .7rem;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}

.brand__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.brand__text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.25;
}

.brand__name {
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
}

.brand__check {
  color: #4db3ff;
  font-size: 0.85rem;
  margin-left: 2px;
}

.brand__subtitle {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 400;
}

/* ===========================
   Nav
=========================== */
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
  font-family: var(--font-mono);
  font-weight: 600;
  margin-right: .4rem;
  font-size: 0.85em;
  color: rgba(255, 255, 255, 0.55);
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

/* ===========================
   Lang Switcher
=========================== */
.lang-switcher {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.3rem;
}

.lang-switcher__label {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: rgba(255, 255, 255, 0.4);
}

.lang-switcher__control {
  display: flex;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  padding: 3px;
  gap: 3px;
}

.lang-btn {
  background: transparent;
  border: none;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.55);
  cursor: pointer;
  transition:
    background .25s ease,
    color .25s ease,
    transform .15s ease;
}

.lang-btn:hover {
  color: white;
}

.lang-btn.active {
  background: #3b58ff;
  color: white;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(59, 88, 255, 0.35);
}

.lang-btn:active {
  transform: scale(0.95);
}

/* ===========================
   Responsive
=========================== */
@media (max-width: 768px) {
  .header-inner {
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 0.8rem;
  }

  .nav__list {
    gap: 1.4rem;
  }

  .brand__subtitle,
  .lang-switcher__label {
    display: none;
  }
}
</style>
