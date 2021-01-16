---
title: SASS Mixins to generate class names for utility classes
date: "2021-01-06"
excerpt: Use SASS Mixins to generate class names for utility classes
tags:
  - SASS
  - CSS
  - FRONTEND
thumbnail: /sass.svg
---
## This post needs finishing! Sorry

<!-- ![alt text](/logos/sass.svg "image") -->

* how to use sass mixins
* sass maps
* examples
* background colours
* text colours
* padding
* margin
* width

SASS Maps
Maps in Sass hold pairs of keys and values, and make it easy to look up a value by its corresponding key. 

* using map-get to retrieve colours from the key:value pairs

eg

```css
.text--highlight {
  color: map-get($colours, black);
  background: map-get($colours, yellow);
}
```

![alt text](@/assets/blog/sass-mixins.png "image")


```scss
// map the variables with key:value pairs
$colors: (
  deep-blue: rgb(46,8,127),
  astra: rgb(249,236,184),
  white: rgb(255, 255, 255),
  black: rgb(0, 0, 0),
  red: rgb(167, 33, 69),
  yellow: rgb(255, 200, 50)
);

// create a mixin to append class names for each name, colour
@mixin background {
  @each $name, $colour in $colours {
    // append  the name
    &-#{$name} {
      background: $colour;
    }
  }
}
@mixin text {
  @each $name, $colour in $colors {
    //
    &-#{$name} {
      color: $colour;
    }
  }
}

// https://tailwindcss.com/docs/theme/#app
// inherit spacing values
@mixin spacing {
  @each $size, $rem in $spacing {
    // margin
    .m--#{$size} {
      margin: $rem;
    }
    .mt--#{$size} {
      margin-top: $rem;
    }
    .mb--#{$size} {
      margin-bottom: $rem;
    }
    // padding
    .p--#{$size} {
      padding: $rem;
    }
    .pt--#{$size} {
      padding-top: $rem;
    }
    .pb--#{$size} {
      padding-bottom: $rem;
    }
  }
}

// create bg classes with mixin
// appends --colour eg bg--yellow
.bg {
  @include background;
};

// create text classes with mixin
// appends --colour eg text--yellow
.text {
  @include text;
};

// create spacing classes for margin and padding
// m--1, p--1 etc
@include spacing;

```