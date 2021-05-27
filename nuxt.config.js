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
        href: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      },
      
      {
        rel: "stylesheet",
        src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      },

      {
        rel: "stylesheet",
        src: "https://cdnjs.cloudflare.com/ajax/libs/pure/1.0.1/pure-min.css"
      },
      {
        rel: "stylesheet",
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      },



    ],


    script: [

      {
        src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src:
            "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js",
        type: "text/javascript"
      },
      {
        src:
            "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src: "https://kit.fontawesome.com/13f7323266.js",
        type: "text/javascript"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/js/all.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js",
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
