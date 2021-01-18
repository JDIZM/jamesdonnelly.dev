---
title: Page speed, Load Time & Conversions
date: "2020-12-16"
excerpt: Page speed, Load Time & Conversions
tags:
  - web development
thumbnail: /fast_loading.svg
---

With over 50% of all traffic on the internet coming from mobile devices, there’s no question that load time is important for people on the move. Time is valuable and modern life is fast, so your site should be too. Users care more about the load time than your fancy animations, ads or your 187 scripts loading in the background.

<!-- ![mobile page speed](/mobile-page-speed-new-industry-benchmarks-01-21.png "image") -->
![mobile page speed](@/assets/blog/mobile-page-speed-new-industry-benchmarks-01-21.png "image")

From a site owner’s perspective. You’re focused on generating revenue, adding functionality, tracking and improving conversions. I can understand that you need to keep the lights on and the bills paid.

Just imagine you’re sat on the subway, train or bus on your commute to work. Slow connection, websites taking ages to load, you’re not going to stick around too long you want that juicy information now.

Speed is now an important search ranking factor for [Google](https://developers.google.com/web/updates/2018/07/search-ads-speed). If you don’t optimize for speed and put users first you’re losing out on potential traffic, causing unnecessarily high bounce rates and throwing away precious conversions. That sweet Cost-Per-Acquisition you’ve been working on is going to go up and you’ll stall growth.

You can optimize the experience according to the user’s device. If you’re visiting from a desktop you’re more likely to have a much faster connection and can download higher-resolution files.

![Fast Loading](@/assets/blog/fast_loading.svg "image")

## Steps to improve site performance, speed up web pages and reduce load time on mobile devices.

### Check Your Page Speed

Test your page speed using [page speed insights](https://developers.google.com/speed/pagespeed/insights/)
You can also run an audit on your homepage with [lighthouse](https://developers.google.com/web/tools/lighthouse/) in chrome developer tools where you can test each page separately and you’ll be provided with a score and a detailed checklist of things that need improving. 


### Mobile-First Design

We used to build websites for desktops then using CSS media queries we would shrink the layout to fit mobile devices. It’s now considered best practice to design for mobile screen sizes first then allow the layout to expand and fill larger screens.

### Progressive Web Apps

Build a PWA with a framework like [Gatsby](https://www.gatsbyjs.org/) or [Nuxt](https://nuxtjs.org/) and provide app-like features that make the website installable to the home screen and available offline with service workers to name a few.

To classify as a progressive web app it must:
* It must run under HTTPS.
* It must include a Web App Manifest.
* It must implement a service worker.

### Minify CSS, JS

Use an asset bundler like webpack to minify your files. This will make them unreadable, remove unnecessary spaces and reduce their size.

### Reduce HTTP requests and page redirects 

Improve page load time by reducing the number of requests made. The browser needs to make a new HTTP request for every file that needs to be loaded. Reduce the number of files by bundling assets with [webpack](https://webpack.js.org/). All your styles and scripts can be bundled into one CSS and JS file. 

### Optimizing images

**Use SVG instead of images** Scalable Vector Graphics (SVG) will scale to any resolution, they are much smaller in file size than .png and they can be animated with CSS & JS.

**Lazy Loading** images on websites asynchronously. This means images will only be loaded when they come into view. This reduces the number of requests that need to be made on page load and only loads the images when they come into view. You can also use a low res placeholder image that’s displayed for a short time before the image is loaded.

**Image Compression**

* Optimize images with imageoptim 
* Using image-webpack-loader with webpack

### Enable file compression

Compress your files using Gzip file compression. You can implement this using webpack with [compression-webpack-plugin](https://webpack.js.org/plugins/compression-webpack-plugin/)

### Browser Caching

The browser will cache all of the assets (styles, images, scripts) so the user doesn’t have to download them every time they load the page. This is important for mobile devices when you're limited by bandwidth. HTML files shouldn’t be cached by the browser so they can be updated. Files that are cached “forever” will need to be renamed when they are updated so they are downloaded again. Tools like webpack allow you to create a dynamic hash when you create a new build, this way each file is unique and is safe to cache forever.

### Content Delivery Network (CDN)

You should be using a content delivery network (also called content distribution network) to serve your web pages. You’ll reduce latency and improve load time because the CDN serves the page requests from a server that’s closest to the user. They distribute your content to all their servers globally so it takes less time to respond. It will also serve as a proxy to your site and provide some protection from large upticks in traffic.

### Serve Static Files

You can use a CDN to render static pages, there are also plugins for popular CMS like WordPress to create static HTML files. JAMstack static site generators such as Gatsby, Next.js, Hugo, Jekyll are becoming quite popular because they are easier to scale, maintain and have better performance than a traditional LAMP stack.
