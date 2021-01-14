// https://hmsk.github.io/frontmatter-markdown-loader/samples-vue.html#nuxt-js-app
import FMMode from 'frontmatter-markdown-loader/mode'

export default {
  // https://nuxtjs.org/blog/going-full-static
  target: 'static',
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
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/3770b0f41c.js' }
    ]
  },
  // custom dot env variables client side
  // https://nuxtjs.org/api/configuration-env/
  env: {
    // WARNING baseURL and proxy cannot be used at the same time, so when the proxy option is in use, you need to define prefix instead of baseURL.
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    prefix: process.env.API_URL
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
    // '@/scss/main.scss'
    // import storybook theme
    './storybook/theme/main.scss'
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
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    // your settings here
    scss: [
      // '@/assets/scss/main.scss',
      '@/storybook/theme/_vars.scss',
      '@/storybook/theme/_mixins.scss'
    ]
  },
  // build: {
  //   loaders: {
  //     scss: {
  //       prependData: '@import "~@/assets/variables.scss";'
  //     }
  //   }
  // },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios', // https://axios.nuxtjs.org/options
    // FIXME is @nuxtjs/proxy needed vs axios?
    '@nuxtjs/proxy', // // https://nuxtjs.org/faq/http-proxy/
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap',
    '@nuxtjs/recaptcha'
  ],
  recaptcha: {
    /* reCAPTCHA options */
    hideBadge: true,
    language: 'v3',
    siteKey: process.env.SITEKEY,
    version: 3,
    size: 'normal'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // use proxy
    proxy: true,
    // proxy will not work with your baseUrl, must have a prefix
    // see https://axios.nuxtjs.org/options/
    prefix: process.env.API_URL // eg api url before the proxy target
    // https://us-central1-nuxt-portfolio-8d1bf.cloudfunctions.net/api + /verify
    // https://us-central1-nuxt-portfolio-8d1bf.cloudfunctions.net/api + /send-mail
    // can only have ONE api url as a prefix?
  },
  proxy: {
    // Note: In the proxy module, /api/ will be added to all requests to the API end point.
    // If you need to remove it use the pathRewrite option
    '/verify': {
      target: 'https://us-central1-nuxt-portfolio-8d1bf.cloudfunctions.net/api/verify',
      pathRewrite: { '^/verify': '' }
    },
    '/send-mail': {
      target: 'https://us-central1-nuxt-portfolio-8d1bf.cloudfunctions.net/api/send-mail',
      pathRewrite: { '^/send-mail': '' }
    }
  },
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
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
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
    // host: 'localhost'
    host: '0.0.0.0' // default: localhost
  },
  sitemap: {
    hostname: 'https://jamesdonnelly.dev/',
    trailingSlash: true
  },
  pwa: {
    meta: {
      // https://pwa.nuxtjs.org/modules/meta.html#options
      /* meta options */
      theme_color: '#32543b'
      // TODO meta
    }
  },
  // https://nuxtjs.org/api/configuration-generate/
  generate: {
    fallback: true,
    // crawler in v2.13 now generates routes for dynamic links
    // TODO routes for sitemap
    routes: [
      '/blog/remote-working-productivity/',
      '/blog/page-speed-load-time/'
    ]
  },
  // https://nuxtjs.org/api/configuration-router/
  router: {
    trailingSlash: true
  },
  // TODO static assets cache policy
  // https://stackoverflow.com/questions/61662857/serve-static-assets-with-an-efficient-cache-policy-nuxt-js-gae
  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-render#static
  render: {
    // Setting up cache for 'static' directory - a year in milliseconds
    // https://web.dev/uses-long-cache-ttl
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 30
      // maxAge: '1y'
    },
    dist: {
      // maxAge: '1y'
      maxAge: 1000 * 60 * 60 * 24 * 30
    }
  }
}
