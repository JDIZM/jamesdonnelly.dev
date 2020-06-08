---
title: Serverless Contact Form With Firebase & Mailgun
date: "2020-06-06"
excerpt: Serverless Contact Form With Firebase & Mailgun
tags:
  - FIREBASE
  - SERVERLESS
  - FRONTEND
thumbnail: https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80
---
## Another Post Title, Separate

some lorem ipsum would do.

* bullet one
* bullet two


## SECTION TWO

some lorem ipsum would do.

* how to use sass mixins
* sass maps
* examples
* background colours
* text colours
* padding
* margin
* width


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