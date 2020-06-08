# nuxt-boilerplate

> My nuxt.js portfolio site.

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

## SASS

1. install loaders to use sass
`npm install --save-dev node-sass sass-loader`

2. edit the nuxt.config.js and add the reference to scss files

```
  css: [
    '@/assets/global.scss'
  ],
  ```

3. Install normalize.css and import in the plugins folder

`yarn install normalize.css`

// import normalize.css for default html styles

`import '~/node_modules/normalize.css/normalize.css'`


## Notes

NuxtStack It comes with normalize.css - https://nuxtstack.org/guide/features.html

## FUNCTIONS

* firebase nodemailer sendMail() cloud function

## STACK

* nuxt
* tailwind or custom css theme
* custom components
* custom theme (type, colours, spacing)
* json cv
* learn jest testing
* rebuild this repo once done
* sass / node-sass
* sitemap https://www.npmjs.com/package/@nuxtjs/sitemap


### BLOG

content will be stored in the /contents folder and markdown will be loaded based on the folder name, which will create the slug

https://www.npmjs.com/package/frontmatter-markdown-loader 

import dynamically https://hmsk.github.io/frontmatter-markdown-loader/vue.html
