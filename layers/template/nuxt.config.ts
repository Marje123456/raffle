import { fileURLToPath } from 'node:url'

const urlToPath = (url: string) => fileURLToPath(new URL(url, import.meta.url))

export default defineNuxtConfig({
  components: {
    dirs: [{ path: './components', prefix: 'Template', extensions: ['vue'] }],
  },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    urlToPath('./assets/css/vendor/bootstrap.min.css'),
    urlToPath('./assets/css/all.min.css'),
    urlToPath('./assets/css/line-awesome.min.css'),
    urlToPath('./assets/css/vendor/nice-select.css'),
    urlToPath('./assets/css/vendor/animate.min.css'),
    urlToPath('./assets/css/vendor/lightcase.css'),
    urlToPath('./assets/css/vendor/slick.css'),
    urlToPath('./assets/css/vendor/jquery-ui.min.css'),
    urlToPath('./assets/css/vendor/datepicker.min.css'),
    urlToPath('./assets/css/main.css'),
  ],

  app: {
    head: {
      script: [
        {
          src: '/layers/template/assets/js/vendor/jquery-3.5.1.min.js',
          defer: true,
        },
        {
          src: '/layers/template/assets/js/vendor/bootstrap.bundle.min.js',
          defer: true,
        },
        {
          src: '/layers/template/assets/js/vendor/jquery.nice-select.min.js',
          defer: true,
        },
        { src: '/layers/template/assets/js/vendor/lightcase.js', defer: true },
        { src: '/layers/template/assets/js/vendor/wow.min.js', defer: true },
        { src: '/layers/template/assets/js/vendor/slick.min.js', defer: true },
        {
          src: '/layers/template/assets/js/vendor/jquery.countdown.js',
          defer: true,
        },
        {
          src: '/layers/template/assets/js/vendor/jquery-ui.min.js',
          defer: true,
        },
        {
          src: '/layers/template/assets/js/vendor/datepicker.min.js',
          defer: true,
        },
        {
          src: '/layers/template/assets/js/vendor/datepicker.en.js',
          defer: true,
        },
        {
          src: '/layers/template/assets/js/vendor/TweenMax.min.js',
          defer: true,
        },
        {
          src: '/layers/template/assets/js/vendor/MorphSVGPlugin.min.js',
          defer: true,
        },
        { src: '/layers/template/assets/js/preloader.js', defer: true },
        { src: '/layers/template/assets/js/contact.js', defer: true },
        { src: '/layers/template/assets/js/app.js', defer: true },
      ],
    },
  },

  vite: {
    build: {
      sourcemap: false, // Deshabilita la generación de mapas de origen
    },
  },
})
