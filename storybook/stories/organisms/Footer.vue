<template>
  <footer>
    <div class="footer">
      <div class="footer__grid">
        <div class="footer__grid__item brand">
          <div class="brand__logo">
            <img :src="logoSrc" draggable="false" alt="logo" />
          </div>
        </div>
        <div class="footer__grid__item social">
          <h3>SOCIAL</h3>
          <ul>
            <li v-for="link in social" :key="link.name">
              <a
                :href="link.path"
                :aria-label="link.aria"
                ><i :class="link.iconClass" /></a>
            </li>
            <!-- <li><a href="#" aria-label="Find us on Twitter"><i class="fab fa-twitter-square" /></a></li> -->
          </ul>
        </div>
        <div class="footer__grid__item info mt--2">
          <!-- <h3>COMPANY INFO</h3> -->
          <p>made with ❤️ using nuxt.js</p>
          <!-- <p>
            {{ address[0] }} <br />
            {{ address[1] }} <br />
            {{ address[2] }}
          </p> -->
        </div>
      </div>
      <div class="copy">
        <p>
          &copy; {{ name }} <span v-if="companyNo">  - Company number {{ companyNo }} - </span>
          <a v-if="privacy" :href="privacy">Privacy</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
// FIXME duplicate keys
export default {
  name: "Footer",
  props: {
    name: {
      type: String,
      required: true,
    },
    companyNo: {
      type: String,
      required: false,
    },
    privacy: {
      type: String,
      required: false,
    },
    logoSrc: {
      type: String,
      required: true,
    },
    address: {
      type: Array,
      required: false,
    },
    social: {
      type: Array,
      required: true,
      // default: () => {
      //   [{linkedin: 'https://linkedin.com'}]
      // } 
    }
  },
};
</script>

<style lang="scss" scoped>
// import the theme first for global variables
// @import "../theme/theme.scss";
@import "./Footer.scss";
</style>
