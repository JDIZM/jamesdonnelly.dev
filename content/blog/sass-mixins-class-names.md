---
title: SASS Mixins to generate class names for utility classes
date: "2020-06-06"
excerpt: Use SASS Mixins to generate class names for utility classes
tags:
  - SASS
  - CSS
  - FRONTEND
thumbnail: /logos/sass.svg
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

![alt text](@/assets/carbon-2.png "image")


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

// create a mixin to create class names
@mixin background {
  @each $name, $colour in $colours {
    //
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

.bg {
  @include background;
};

.text {
  @include text;
};

```