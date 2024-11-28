import { fileURLToPath } from 'node:url'

const urlToPath = (url: string) => fileURLToPath(new URL(url, import.meta.url))

export default defineNuxtConfig({
  components: {
    dirs: [{ path: './components', prefix: 'Template', extensions: ['vue'] }],
  },

  //modules: ['bootstrap-vue-next'],

  css: [
    'bootstrap/dist/css/bootstrap.min.css', // Bootstrap desde node_modules
    /* 'swiper/css',
    'swiper/css/effect-fade',
    'swiper/css/navigation',
    'swiper/css/pagination',
    'animate.css/animate.css', */
    './layers/template/assets/css/vendor/bootstrap.min.css',
    './layers/template/assets/css/all.min.css',
    './layers/template/assets/css/vendor/nice-select.css',
    './layers/template/assets/css/vendor/jquery-ui.min.css',
    './layers/template/assets/css/vendor/animate.min.css',
    './layers/template/assets/css/vendor/slick.css',
    './layers/template/assets/css/vendor/lightcase.css',
    './layers/template/assets/css/vendor/datepicker.min.css',
    './layers/template/assets/css/main.css', //mi css principal
  ],

  vite: {
    build: {
      sourcemap: false, // Deshabilita la generación de mapas de origen
    },
  },
})
