# nuxt-portfolio

> My nuxt.js portfolio site.

## Built With

* Nuxt
* @nuxt/content <https://content.nuxtjs.org/>
* Storybook UI
* SASS theme, utils, mixins
* Firebase Cloud Functions
* Netlify hosting

Note: trailing slash urls are enabled to avoid duplicate url issues, the canonical url will be set to the trailing slash version.

The `NUXT_HOST=https://jamesdonnelly.dev` should not contain the trailing slash. The blog page urls, thumbnail urls will break.

this.$route.path will append '/' to the NUXT_HOST on the index and each route path will be prefixed with a '/'. Image assets should also be prefixed.

```js
process.env.NUXT_HOST = 'https://jamesdonnelly.dev'
this.$route.path = '/'
this.thumbnail = '/laravel_and_vue.svg'
// assets and path should be referenced like so
process.env.NUXT_HOST + this.$route.path
require('~/assets/blog' + this.thumbnail)
```

## Modules

Dev // buildModules

* '@nuxtjs/eslint-module',
* '@nuxtjs/dotenv' // https://github.com/nuxt-community/dotenv-module

Prod

* '@nuxtjs/axios', // https://axios.nuxtjs.org
* '@nuxtjs/proxy', // https://nuxtjs.org/faq/http-proxy/
* '@nuxtjs/pwa',
* '@nuxtjs/sitemap',
* '@nuxtjs/recaptcha',
* '@nuxtjs/style-resources' // https://www.npmjs.com/package/@nuxtjs/style-resources

## Recommended Reading

* https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## STORYBOOK UI

The storybook UI is cloned from (https://github.com/JDIZM/vue-storybook-library)

add the reference to scss files in nuxt.config.js.

```config
css: [
    // import storybook theme
    './storybook/theme/main.scss'
  ],
```

### USING THE COMPONENTS

Import the components directly from the /storybook folder

```config
import Toast from '@/storybook/stories/molecules/Toast.vue'
```

## FUNCTIONS

express api with endpoints to handle backend logic, built with firebase functions

endpoints:

* verify recaptcha /verify
* send mail /send-mail

commands:

* lint `cd functions` then `npm run lint`
* deploy from project root `firebase deploy --only functions`

NOTE: Linting issue. eslint conflicts with the root nuxt config.

<https://eslint.org/docs/user-guide/configuring/configuration-files#cascading-and-hierarchy>

"By default, ESLint will look for configuration files in all parent folders up to the root directory. This can be useful if you want all of your projects to follow a certain convention, but can sometimes lead to unexpected results."

To limit ESLint to a specific project, place "root": true inside the .eslintrc.* file

### BLOG

Content will be stored in the /content folder and markdown will be loaded based on the folder name, which will create the slug for the post pages.

see: <https://content.nuxtjs.org/>

## NETLIFY

make sure netlify cli is installed `npm i -g netlify-cli` to handle deployment with netlify.

* add the proxy urls and external redirects to the `_redirects` file
* `_redirects` is added to the /static folder so it is built every time.
* you can also modify the netliy.toml file

_redirects

```config
/verify  https://us-central1-nuxt-portfolio-8d1bf.cloudfunctions.net/api/verify  200
/send-mail https://us-central1-nuxt-portfolio-8d1bf.cloudfunctions.net/api/send-mail 200

```
