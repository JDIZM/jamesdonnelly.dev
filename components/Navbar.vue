<template>
  <nav class="nav">
    <div class="nav__logo" />
    <!-- <h2 class="nav__title">NAV</h2> -->
    <div @click="drawer = !drawer, toggleBodyClass()" class="nav__menu">
      <i class="material-icons">
        menu
      </i>
    </div>
    <aside v-if="drawer" class="nav__drawer nav__drawer --full">
      <div class="nav__menu" @click="drawer = !drawer, toggleBodyClass()">
        <i class="material-icons">
          close
        </i>
      </div>
      <div>
        <ul class="nav__menu__list">
          <li v-for="(link, i) in links" :key="i" class="nav__menu__list_item">
            <router-link :to="link.path" exact-active-class="--active">
              <div class="nav__menu__wrapper">
                {{ link.name }}
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- <button class="btn btn--secondary"><i class="material-icons">menu</i></button>
      <button class="btn btn--secondary"><i class="material-icons">close</i></button> -->
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
        { name: 'about', path: '/about' },
        { name: 'contact', path: '/contact' },
        { name: 'projects', path: '/projects' },
        { name: 'blog', path: '/blog' }
      ]
    }
  },
  watch: {
    // watch the route and call method
    '$route.fullPath': 'routeChange'
  },
  methods: {
    routeChange () {
      // react to route changes...
      // close nav drawer
      this.drawer = false
      // TODO add transitions when route changes
      this.toggleBodyClass()
    },
    // toggleBodyClass () {
    //   const el = document.body;
    //   this.class = class
    toggleBodyClass () {
      //
      // console.log(c)
      const el = document.body
      // el.classList.toggle('hide-scroll')
      // if (el.classList.contains(c)) {
      //   //
      //   console.log(c, el)
      //   console.log('already contains')
      // }
      // stop body having no class by giving default class
      el.classList.add('body')
      if (this.drawer) {
        // if drawer is open toggle body scrolling class
        el.classList.add('hide-scroll')
      } else {
        el.classList.remove('hide-scroll')
      }
    }
  }
}
</script>

<style lang="scss">
// import component base styles
// @import '@/assets/scss/_nav.scss';
// .navbar {
//   background: $charcoal;
//   color: $off-white;
//   position: fixed;
//   top:0;
//   left: 0;
//   height: 50px;
//   width: 100%;
//   margin: auto;
//   text-align: center;

//   h2 {
//     margin-top: 0;
//   }
// }
// can also target a.nuxt-link-active class

.hide-scroll {
  overflow: hidden;
}
</style>
