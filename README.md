# nuxt-boilerplate

> My nuxt.js portfolio site.

1. storybook > https://github.com/JDIZM/vue-storybook-library
2. functions > https://github.com/JDIZM/firebase-functions-express-api

Note: trailing slash urls are enabled to avoid duplicate url issues, the canonical url will be set to the trailing slash version.

The `NUXT_HOST=https://jamesdonnelly.dev` should not contain the trailing slash. The blog page urls,  thumbnail urls will break.

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

## STACK

* nuxt
* markdown blog using <https://www.npmjs.com/package/frontmatter-markdown-loader>
* storybook ui
* sass theme, utils, mixins
* firebase cloud functions
* netlify hosting

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

* functions are imported in their own repo to avoid linting issues

see <https://github.com/JDIZM/firebase-functions-express-api/>

### BLOG

Content will be stored in the /contents folder and markdown will be loaded based on the folder name, which will create the slug

import dynamically <https://hmsk.github.io/frontmatter-markdown-loader/vue.html>

Note: having issues writing tests with the current frontmatter markdown loader, going to look into using @nuxt/content module <https://content.nuxtjs.org/>

## NETLIFY

* add the proxy urls and external redirects to the `_redirects` file
* `_redirects` is added to the /static folder so it is built every time.

_redirects

```config
/verify  https://us-central1-nuxt-portfolio-8d1bf.cloudfunctions.net/api/verify  200
/send-mail https://us-central1-nuxt-portfolio-8d1bf.cloudfunctions.net/api/send-mail 200

```
