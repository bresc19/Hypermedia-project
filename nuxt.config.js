export default {
  serverMiddleware: [
    {
      path: "/api",
      handle: "~/server/rest/api.js"
    }
  ],
  ssr: true,
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
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: "stylesheet",
        href: '/css/bootstrap.4.6.min.css'
      },

      {
        rel: "stylesheet",
        src: "/css/font-awesome.4.7.min.css"
      },

      {
        rel: "stylesheet",
        src: "/css/pure-min.css"
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

      {
        src: "/js/jquery-3.5.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src:
            "/js/bootstrap.bundle.min.js",
        type: "text/javascript"
      },
      {
        src:
            "/js/popper.min.js",
        type: "text/javascript"
      },
      {
        src: "/js/13f7323266.js",
        type: "text/javascript"
      },
      {
        src: "/js/all.min.js",
        type: "text/javascript"
      },
      {
        src: "/js/popper2.min.js",
        type: "text/javascript"
      },
      {
        src: "/js/bootstrap.min.js",
        type: "text/javascript"
      }
    ]
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

// Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    base: '/'
  },
  axios: {}
}
