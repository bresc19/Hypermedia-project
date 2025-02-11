export default {
  ssr: true,
  target: 'server',
  serverMiddleware: [
    {
      path: "/api",
      handle: "~/server/rest/api.js",
    }
  ],
  env: {
    BASE_URL: 'https://toptech-polimi.herokuapp.com',
    //BASE_URL: 'https://localhost:3000',
    //DATABASE_URL: 'postgres://postgres:admin@localhost:5432/hypermedia-project'
    DATABASE_URL: 'postgres://lnjtjbzjogupnb:3347350d1c81eaa341f905fc7e436ef53053e45c73aa4542a00dc0f225692086@ec2-34-250-16-127.eu-west-1.compute.amazonaws.com:5432/d5kfvb6ra7u04b'

  },
  head: {
    title: 'TopTech',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Website implementation for Hypermedia Project, 2021'},
    ],
    link: [
      {
        rel: 'icon', type: 'image/png',
        href: '/favicon.png'
      },
      {
        rel: "stylesheet",
        href: '/css/bootstrap.4.6.min.css'
      },
      {
        rel:"stylesheet",
        src: "/css/style.css"
      },

      {
        rel: "stylesheet",
        src: "/css/bootstrap5.min.css"
      },

      {
        rel: 'stylesheet',
        src: '/css/bootstrap.4.1.3.min.css'
      },

      {
        rel: 'stylesheet',
        src: '/css/bootstrap.4.3.1.min.css'
      },

      {
        rel: 'stylesheet',
        src: '/css/bootstrap.4.4.min.css'
      },





    ],


    script: [
    ],
  },


// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

// Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
// https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

// Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',

  ],
  css: [
    '@assets/css/style.css'
  ],

// Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    base: '/'
  },
  axios: {}
}
