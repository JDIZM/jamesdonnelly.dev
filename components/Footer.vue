<template>
  <footer role="contentinfo">
    <div class="footer__grid">
      <div class="footer__item">
        <h3>SOCIAL</h3>
        <ul>
          <li class="mt--1">
            <div class="m--1 social-icons">
              <img height="25px" width="25px" alt="twitter" src="/logos/twitter.svg">
              <a href="https://twitter.com/JDIZM"> Twitter</a>
            </div>
            <div class="m--1 social-icons">
              <img height="25px" width="25px" alt="github" src="/logos/github.svg">
              <a href="https://github.com/JDIZM"> Github</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="copy">
      <p>&copy; {{ new Date().getFullYear() }} <a href="https://twitter.com/JDIZM">@JDIZM</a> | made with <span>❤️</span> using Nuxt.js</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.social-icons {
  img {
    height: 25px;
    width: 25px;
    display: inline-block;
    vertical-align: bottom;
  }
  a {
    display: inline-block;
  }
}

// footer
footer {
 width: 90%;
 margin: 0 auto;
@media screen and (min-width: $breakpoint-md) {
  width: 80%;
};
@media screen and (min-width: $breakpoint-lg) {
  width: 60%;
};
display: flex;
// justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;
text-align: left;
}
.footer__grid {
  // padding-left: map-get($spacing, 2);
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // text-align: left;
  @media screen and (min-width: $breakpoint-md){
    flex-direction: row;
  }
}

.footer__item {
  flex: 1 1 auto;
  // padding: map-get($spacing, 1);
  width: 100%;
}

.copy {
  width: 100%;
  margin: auto;
  padding: 1rem;
}
</style>
