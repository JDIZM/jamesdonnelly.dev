// https://hmsk.github.io/frontmatter-markdown-loader/samples-vue.html#nuxt-js-app
import FMMode from 'frontmatter-markdown-loader/mode'

export default {
  // https://nuxtjs.org/blog/going-full-static
  target: 'static',
  /*
  ** Headers of the page
  */
  // Global page headers: https://go.nuxtjs.dev/config-head
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
  // custom dot env variables available client side
  // https://nuxtjs.org/api/configuration-env/
  // Nuxt.js lets you create environment variables client side, also to be shared from server side.
  env: {
    // WARNING baseURL and proxy cannot be used at the same time, so when the proxy option is in use, you need to define prefix instead of baseURL.
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    prefix: process.env.API_URL,
    AUTH_PASS: process.env.AUTH_PASS
  },
  /*
  ** Customize the progress-bar
  */
  loading: { color: '#e85b46', height: '4px', throttle: 0 },
  /*
  **  Global CSS: https://go.nuxtjs.dev/config-css
  */
  css: [
    // import storybook theme
    '@/storybook/theme/_global.scss',
    '@/storybook/theme/_theme.scss'
    // use style-resources to load vars and mixins
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/imports.js',
    '@/plugins/vimg.js'
    // TODO firebase
    // '@/plugins/firebase.js'
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios', // https://axios.nuxtjs.org/options
    '@nuxtjs/proxy', // https://nuxtjs.org/faq/http-proxy/
    '@nuxtjs/pwa', // https://pwa.nuxtjs.org/
    '@nuxtjs/sitemap', // https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/recaptcha', // https://www.npmjs.com/package/@nuxtjs/recaptcha
    '@nuxtjs/style-resources', // https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxt/content', // https://content.nuxtjs.org/
    '@nuxtjs/gtm' // https://github.com/nuxt-community/gtm-module
  ],
  gtm: {
    id: process.env.GTM_ID
  },
  styleResources: {
    scss: [
      '@/storybook/theme/_vars.scss',
      '@/storybook/theme/_mixins.scss'
    ]
  },

  recaptcha: {
    hideBadge: true,
    language: 'v3',
    siteKey: process.env.SITEKEY,
    version: 3,
    size: 'normal'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    // WARNING: baseURL and proxy cannot be used at the same time, so when the proxy option is in use,
    // you need to define prefix instead of baseURL.
    // see https://axios.nuxtjs.org/options/
    // Environment variable API_URL can be used to override baseURL.
    prefix: process.env.API_URL
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
  //
  // Build configuration
  //
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
    port: 8000,
    host: '0.0.0.0'
  },
  sitemap: {
    hostname: 'https://jamesdonnelly.dev/',
    trailingSlash: true
  },
  pwa: {
    manifest: {
      lang: 'en'
    },
    meta: {
      // https://pwa.nuxtjs.org/modules/meta.html#options
      /* meta options */
      theme_color: '#e85b46',
      ogHost: 'https://jamesdonnelly.dev/', // required for ogImage
      twitterCreator: '@JDIZM'
    }
  },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
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
