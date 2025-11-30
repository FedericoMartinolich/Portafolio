<template>
  <main class="contact-view">
    <section id="contact">
      <h1 class="section-header">Contact</h1>

      <div class="contact-wrapper">
        <!-- Formulario -->
        <form ref="form" @submit.prevent="sendEmail">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="NAME"
              name="name"
              required
            />
          </div>

          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="reply_to"
              placeholder="EMAIL"
              name="reply_to"
              required
            />

          </div>

          <div class="form-group">
          <input
              type="text"
              class="form-control"
              id="title"
              placeholder="TITLE"
              name="title"
              required
            />
          </div>

          <textarea
            class="form-control"
            rows="8"
            placeholder="MESSAGE"
            name="message"
            required
          ></textarea>

          <button class="btn btn-primary send-button" type="submit">
            <div class="alt-send-button">
              <i class="fa fa-paper-plane"></i>
              <span class="send-text">SEND</span>
            </div>
          </button>
          <p id="form-msg" class="col-span-2 text-center text-sm">{{ msg }}</p>
        </form>

        <!-- Datos de contacto -->
        <div class="direct-contact-container">
          <ul class="contact-list">
            <li class="list-item">
              <i class="fa fa-map-marker fa-2x"></i>
              <span class="contact-text place">Gualeguaychú Entre Rios, Argentina</span>
            </li>
            <li class="list-item">
              <i class="fa fa-brands fa-whatsapp fa-2x"></i>
              <span class="contact-text phone"
                ><a href="https://wa.me/541125276194" target="_blank">(54) 11 2527-6194</a></span
              >
            </li>
            <li class="list-item">
              <i class="fa fa-envelope fa-2x"></i>
              <span class="contact-text gmail"
                ><a href="mailto:martinolichfederico@gmail.com">martinolichfederico@gmail.com</a></span
              >
            </li>
          </ul>

          <hr />

          <ul class="social-media-list">
            <li>
              <a href="https://www.linkedin.com/in/federico-martinolich" target="_blank" class="contact-icon"
                ><i class="fa fa-brands fa-linkedin-in"></i
              ></a>
            </li>
            <li>
              <a href="https://github.com/FedericoMartinolich" target="_blank" class="contact-icon"
                ><i class="fa fa-brands fa-github"></i
              ></a>
            </li>
            <li>
              <a href="https://www.instagram.com/fedev.jpg" target="_blank" class="contact-icon"
                ><i class="fa fa-brands fa-instagram"></i
              ></a>
            </li>
          </ul>
          <hr />
          <div class="copyright">© All rights reserved</div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import emailjs from 'emailjs-com';
import { ref } from 'vue';

const form = ref(null);
const msg = ref("");

const sendEmail = () => {
  msg.value = "Sending...";

  emailjs.sendForm(
    "service_0mexqa8",
    "template_1f1ml7k",
    form.value,
    "epWXTcHwVSD3VGOWW"
  )
  .then(() => {
    msg.value = "Mensaje enviado correctamente 🎉";
    form.value.reset();
  })
  .catch(() => {
    msg.value = "Hubo un error al enviar 😕";
  });
};
</script>

<style scoped>
.contact-view {
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0e131b;
  color: #fff;
  padding: 60px 20px;
}

/* Sección principal */
.section-header {
  text-align: center;
  font: 300 48px "Oswald", sans-serif;
  text-transform: uppercase;
  letter-spacing: 6px;
  margin-bottom: 40px;
}

/* Contenedor */
.contact-wrapper {
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  gap: 60px;
  width: 100%;
  max-width: 960px;
}

/* Formulario */

.form-horizontal {
  max-width: 420px;
  width: 100%;
}

.form-control,
textarea {
  width: 100%;
  background-color: #1a1f2a;
  border: 1px solid #2b3242;
  color: #fff;
  margin-bottom: 12px;
  padding: 10px;
  border-radius: 8px;
}

.form-control:focus,
textarea:focus {
  outline: none;
  border-color: #007bff;
  background-color: #12161f;
}

.send-button {
  width: 100%;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.send-button:hover {
  background: #0056b3;
}

/* Contacto derecho */
.direct-contact-container {
  max-width: 400px;
  text-align: left;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
}

.list-item {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  color: #aaa;
}

.list-item i {
  width: 30px;
  text-align: center;
  margin-right: 10px;
}

.contact-text a {
  color: #fff;
  text-decoration: none;
  transition: color 0.2s;
}

.contact-text a:hover {
  color: #007bff;
}

/* Redes sociales */
.social-media-list {
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 0;
}

.social-media-list li {
  list-style: none;
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  background: #1f2633;
  border-radius: 50%;
  color: #fff;
  transition: all 0.3s;
}

.contact-icon:hover {
  background: #007bff;
  transform: scale(1.1);
}

.copyright {
  text-align: center;
  color: #777;
  margin-top: 20px;
  font-size: 14px;
}

@media (max-width: 768px) {
  .contact-wrapper {
    flex-direction: column;
    align-items: center;
  }
}
</style>
