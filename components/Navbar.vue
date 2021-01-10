<template>
  <nav class="nav">
    <div class="nav__logo" />
    <div class="nav__menu__desktop">
      <ul class="">
        <li v-for="(link, i) in links" :key="i" class="">
          <NuxtLink :to="link.path" exact-active-class="--active" class="btn">
            <div class="">
              {{ link.name.toUpperCase() }}
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="nav__menu" @click="drawer = !drawer">
      <i class="material-icons">
        menu
      </i>
    </div>
    <!-- desktop only -->
    <aside v-if="drawer" class="nav__drawer nav__drawer --full">
      <div class="nav__menu" @click="drawer = !drawer">
        <i class="material-icons">
          close
        </i>
      </div>
      <div>
        <ul class="nav__menu__list">
          <li v-for="(link, i) in links" :key="i" class="nav__menu__list_item">
            <NuxtLink :to="link.path" exact-active-class="--active" class="btn">
              <div class="nav__menu__wrapper">
                {{ link.name }}
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </aside>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      //
      drawer: false,
      links: [
        { name: 'home', path: '/' },
        { name: 'projects', path: '/projects/' },
        { name: 'contact', path: '/contact/' },
        { name: 'blog', path: '/blog/' }
      ]
    }
  },
  watch: {
    // watch the route and call method
    // '$route.fullPath': 'routeChange'
  },
  methods: {
    // TODO add transitions when route changes
    // routeChange () {
    //   // react to route changes...
    //   // close nav drawer
    //   this.drawer = false
    //
    //   this.toggleBodyClass()
    // },
    // toggleBodyClass () {
    //   const el = document.body
    //   // stop body having no class by giving default class
    //   el.classList.add('body')
    //   if (this.drawer) {
    //     // if drawer is open toggle body scrolling class
    //     el.classList.add('hide-scroll')
    //   } else {
    //     el.classList.remove('hide-scroll')
    //   }
    // }
  }
}
</script>

<style lang="scss">
.nav__logo {
  background: url('~assets/logo.png');
  // background-origin: ce;
  background-origin: content-box;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  height: 80px;
  width: 80px;
  margin: 0.5rem auto;
}
</style>
