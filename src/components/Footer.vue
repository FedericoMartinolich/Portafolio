<template>
    <footer class="main-footer">
    <div class="containter">
      <p>© {{ year }} Portafolio — Creado por <a href="https://www.linkedin.com/in/federico-martinolich/" target="_blank">FeDev03</a></p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.main-footer {
  bottom: 0;
  left: 0;
  height: 20vh;
  width: 100%;
  text-align: center;
  padding: 12px 0;
  background: #0e131b;
  backdrop-filter: blur(6px);
  color: white;
  font-size: 14px;
  z-index: 1000;
  border-top: 1px solid rgba(255,255,255,0.08);
}

.main-footer a {
  color: #FF416C;
  text-decoration: none;
  font-weight: 600;
}

.main-footer a:hover {
  text-decoration: underline;
}

.containter {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
}
</style>