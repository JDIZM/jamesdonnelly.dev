---
title: 10 Steps To Improve Page Speed And Reduce Load Time
description: 10 Steps to improve site performance, speed up web pages and reduce load time on mobile devices
createdAt: "2020-12-16"
tags:
  - web development
thumbnail: /fast_loading.svg
--- 

## 1. Check Your Page Speed

Test your page speed using [page speed insights.](https://developers.google.com/speed/pagespeed/insights/)

You can also run an audit with [lighthouse](https://developers.google.com/web/tools/lighthouse/) in chrome developer tools where you can test each page separately. You’ll be provided with a score and a detailed checklist of things that need improving.

## 2. Create A Mobile-First Design

We used to build websites for desktops then using CSS media queries we would shrink the layout to fit mobile devices. It’s now considered best practice to design for mobile screen sizes first then allow the layout to expand and fill larger screens.

## 3. Reduce HTTP Requests And Page Redirects

Improve page load time by reducing the number of requests made. The browser needs to make a new HTTP request for every file that needs to be loaded.  

* Reduce the number of files by bundling assets with [webpack](https://webpack.js.org/).
* [Code splitting](https://webpack.js.org/guides/code-splitting/) can separate your bundled assets so that they are only loaded when needed.
* Reduce the number of external assets loaded such as fonts, scripts, images.

## 4. Minify CSS, JS

Use an asset bundler like webpack to minify your files. This will make them unreadable to the user, remove unnecessary spaces and reduce their file size which ultimately gives us a faster load time.

## 5. Optimizing Images

* Use SVG instead of images Scalable Vector Graphics (SVG) will scale to any resolution, they are much smaller in file size than .png and they can be animated with CSS & JS.

* Lazy Loading images on websites asynchronously. This means images will only be loaded when they come into view. This reduces the number of requests that need to be made on page load and only loads the images when they come into view. You can also use a low res placeholder image that’s displayed for a short time before the image is loaded.

* Optimize images with imageoptim or another image optimizer.
* Using [image-webpack-loader](https://www.npmjs.com/package/image-webpack-loader) with webpack
* [Serve images in next-gen formats](https://web.dev/uses-webp-images/index.html)

## 6. Enable File Compression

Compress your files using Gzip file compression. You can implement this using webpack with [compression-webpack-plugin](https://webpack.js.org/plugins/compression-webpack-plugin/)

## 7. Browser Caching

The browser will cache all of the assets (styles, images, scripts) so the user doesn’t have to download them every time they load the page. This is important for mobile devices when you're limited by bandwidth. HTML files shouldn’t be cached by the browser so they can be updated. Files that are cached “forever” will need to be renamed when they are updated so they are downloaded again. Tools like webpack allow you to create a dynamic hash when you create a new build, this way each file is unique and is safe to cache forever.

## 8. Content Delivery Network (CDN)

You should be using a content delivery network (also called content distribution network) to serve your web pages. You’ll reduce latency and improve load time because the CDN serves the page requests from a server that’s closest to the user. They distribute your content to all their servers globally so it takes less time to respond. It will also serve as a proxy to your site and provide some protection from large upticks in traffic.

## 9. Serve Static Files

You can use a CDN to render static pages, there are also plugins for popular CMS like WordPress to create static HTML files. JAMstack static site generators such as Gatsby, Nuxt, Next, Hugo & Jekyll are becoming quite popular because they are easier to scale, maintain and can have better performance than a traditional LAMP stack.

## 10. Progressive Web Apps

Build a PWA with a framework like [Gatsby](https://www.gatsbyjs.org/) or [Nuxt](https://nuxtjs.org/) and provide app-like features that make the website installable to the home screen and available offline with service workers to name a few.

To classify as a progressive web app it must:

* It must run under HTTPS.
* It must include a Web App Manifest.
* It must implement a service worker.
