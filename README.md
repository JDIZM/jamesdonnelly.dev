# nuxt-boilerplate

> My nuxt.js portfolio site.

1. storybook > https://github.com/JDIZM/vue-storybook-library
2. functions > https://github.com/JDIZM/firebase-functions-express-api

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
* storybook ui
* sass theme, utils, mixins
* firebase cloud functions
* netlify hosting
* markdown blog

## STORYBOOK UI

The storybook UI is cloned from (https://github.com/JDIZM/vue-storybook-library)

add the reference to scss files in nuxt.config.js.
```
css: [
    // import storybook theme
    './storybook/theme/main.scss'
  ],
```

### USING THE COMPONENTS

Import the components directly from the /storybook folder

```
import Toast from '@/storybook/stories/molecules/Toast.vue'
```

## FUNCTIONS

* functions are imported in their own repo to avoid linting issues

see (https://github.com/JDIZM/firebase-functions-express-api/)


### BLOG

content will be stored in the /contents folder and markdown will be loaded based on the folder name, which will create the slug

https://www.npmjs.com/package/frontmatter-markdown-loader 

import dynamically https://hmsk.github.io/frontmatter-markdown-loader/vue.html

## NETLIFY

* add the proxy urls and external redirects to the `_redirects` file
* `_redirects` is added to the /static folder so it is built every time.

_redirects
```
/verify  https://us-central1-nuxt-portfolio-8d1bf.cloudfunctions.net/api/verify  200
/send-mail https://us-central1-nuxt-portfolio-8d1bf.cloudfunctions.net/api/send-mail 200

```