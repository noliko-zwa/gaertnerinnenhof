require('dotenv').config()
const { Instagram_Id, Instagram_AccessToken } = process.env
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  target: 'static',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Hier kannst du alles erfahren, was es rund um deine Bio-Gärtnerei an der Stadtgrenze zu Berlin zu wissen gibt',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/app.scss'],
  components: true,
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'bootstrap-vue/nuxt',
    'vue-scrollto/nuxt',
    '@nuxt/content',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],
  env: {
    Instagram_AccessToken,
    Instagram_Id,
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  compilerOptions: {
    types: ['@nuxt/content'],
  },
}
