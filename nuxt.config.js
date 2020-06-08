// https://hmsk.github.io/frontmatter-markdown-loader/samples-vue.html#nuxt-js-app
import FMMode from 'frontmatter-markdown-loader/mode'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ]
  },
  // custom dot env variables client side
  // https://nuxtjs.org/api/configuration-env/
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#e85b46', height: '4px', throttle: 0 },
  // loading: { color: '#e85b46' }, // FIXME page loads so fast we don't see it?
  // loading indicator
  /*
  ** Global CSS
  */
  css: [
    'normalize.css/normalize.css',
    '@/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/imports.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
    // '@nuxtjs/vuetify'
  ],
  // vuetify: {
  //   /* module options */
  //   // customVariables: ['~/assets/variables.scss'],
  //   theme: {
  //     primary: '#ff9800',
  //     secondary: '#ff5722',
  //     accent: '#00bcd4',
  //     error: '#e91e63',
  //     warning: '#f44336',
  //     info: '#ffeb3b',
  //     success: '#4caf50'
  //   }
  // },
  // build: {
  //   loaders: {
  //     scss: {
  //       prependData: '@import "~@/assets/variables.scss";'
  //     }
  //   }
  // },
  // buildModules: [
  //   // Doc: https://github.com/nuxt-community/eslint-module
  //   '@nuxtjs/eslint-module',
  //   ['@nuxtjs/vuetify', { /* module options */
  //     customVariables: ['~/assets/variables.scss'],
  //     theme: { light: { primary: '#FF5733' } } }]
  // ],
  // https://github.com/nuxt-community/vuetify-module
  // https://vuetifyjs.com/en/getting-started/quick-start#nuxt-install
  // TODO the options arent working!
  // vuetify: {
  //   optionsPath: './vuetify.options.js'
  // },
  // vuetify: {
  //   /* module options */
  //   customVariables: ['~/assets/variables.scss']
  // },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // proxy: true // Can be also an object with default options
  },
  // proxy: {
  //   '/api/': 'https://us-central1-baked-digital.cloudfunctions.net/sendMail'
  // },
  /*
  ** Build configuration
  */
  // build: {
  //   /*
  //   ** You can extend webpack config here
  //   */
  //   extend (config, ctx) {
  //   }
  build: {
    extend (config, _ctx) {
      config.module.rules.push(
        {
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          options: {
            mode: [FMMode.VUE_COMPONENT]
          }
        }
      )
    }
  },
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  sitemap: {
    hostname: 'https://jamesdonnelly.dev'
  }
}
