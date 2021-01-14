<template>
  <nav class="nav">
    <!--  desktop only -->
    <div class="nav__desktop">
      <div class="nav__desktop__brand">
        <div class="nav__desktop__logo">
          <img :src="logoSrc" draggable="false" alt="logo" height="50px" width="50px" />
        </div>
      </div>
      <ul class="nav__desktop__list">
        <li v-for="link in links" :key="link.path">
          <nuxt-link v-if="link.path" :to="link.path" exact-active-class="--active">
            <div class="nav__desktop__list__item">
              <span v-if="link.icon" class="material-icons">{{ link.icon }}</span>
              <span v-if="link.name">{{ link.name.toUpperCase() }}</span>
            </div>
          </nuxt-link>
          <a
            v-else
            @click.prevent="onDropdown"
            exact-active-class="--active"
            role="button"
            aria-pressed="false"
            tabindex="0"
          >
            <div class="nav__desktop__list__item">
              <span v-if="link.icon" class="material-icons">{{ link.icon }}</span>
              <span v-if="link.name">{{ link.name.toUpperCase() }}</span>
            </div>
          </a>
        </li>
      </ul>
      <div class="nav__desktop__btns">
        <Button
          @onClick="onEnquire"
          @keydown.enter.prevent="onEnquire"
          type="submit"
          label="HIRE ME"
          primary
          class="nav__desktop__btn"
        />
      </div>
    </div>
    <!-- only show nav toggle on mobile -->
    <div class="nav__mobile">
      <div class="nav__mobile__brand">
        <div class="nav__mobile__logo">
          <img :src="logoSrc" draggable="false" alt="logo"/>
        </div>
      </div>
      <div class="nav__mobile__btns">
        <Button
          @onClick="onEnquire"
          @keydown.enter.prevent="onEnquire"
          type="submit"
          label="HIRE ME"
          primary
          class="nav__mobile__btn"
        />
      </div>
    </div>
    <!-- toggle hidden on desktop with display:none -->
    <div
      @click="onShowDrawer"
      class="nav__toggle"
      role="button"
      aria-pressed="true"
      tabindex="0"
    >
      <i class="material-icons">menu</i>
    </div>
    <NavDrawer
      :links="links"
      :showDrawer="showDrawer"
      :dropdownItems="dropdownItems"
      @close="onCloseDrawer"
      :logoSrc="logoSrc"
      :showDropdown="showDropdown"
      @onDropdown="onDropdown"
    />
    <NavDropdown
      :items="dropdownItems"
      :showDropdown="showDropdown"
    />
  </nav>
</template>

<script>
import NavDrawer from './NavDrawer'
import NavDropdown from './NavDropdown'
import Button from '../../atoms/Button'
export default {
  name: 'NavMain',
  components: {
    // NavDesktop,
    Button,
    NavDrawer,
    NavDropdown
  },
  props: {
    links: {
      type: Array,
      required: true
    },
    showDrawer: {
      type: Boolean,
      required: true
    },
    showDropdown: {
      type: Boolean,
      required: true
    },
    dropdownItems: {
      type: Array,
      required: true
    },
    logoSrc: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    }
  },
  data () {
    return {
      //
    }
  },
  watch: {
    // watch the route and call method
    '$route.fullPath': 'onRouteChange'
  },
  methods: {
    //
    onDropdown () {
      this.$emit('onDropdown')
    },
    onEnquire () {
      this.$emit('onEnquire');
    },
    onRouteChange () {
      // react to route changes...
      this.$emit('onReset')
    },
    onShowDrawer () {
      this.$emit('onShowDrawer')
    },
    onCloseDrawer () {
      this.$emit('onCloseDrawer')
    }
  }
}
</script>

<style lang="scss" scoped>
// @import "../../theme/theme.scss";
@import "./Nav.scss";
</style>