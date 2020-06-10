<template>
  <footer role="contentinfo">
    <div class="footer__grid">
      <!-- <div class="footer__item">
        <h5>TITLE</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum sequi quos pariatur nulla atque placeat fuga quam officia, veniam maxime. Repellat similique explicabo inventore iusto necessitatibus obcaecati fugiat suscipit ad!</p>
      </div>
      <div class="footer__item">
        <h5>TITLE</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum sequi quos pariatur nulla atque placeat fuga quam officia, veniam maxime. Repellat similique explicabo inventore iusto necessitatibus obcaecati fugiat suscipit ad!</p>
      </div> -->
      <div class="footer__item">
        <h5>SOCIAL</h5>
        <ul>
          <li class="mt--1">
            <div class="m--1 social-icons">
              <img src="/logos/twitter.svg">
              <a href="https://twitter.com/JDIZM"> Twitter</a>
            </div>
            <div class="m--1 social-icons">
              <img src="/logos/github.svg">
              <a href="https://github.com/JDIZM"> Github</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="copy">
      <p>&copy; {{ new Date().getFullYear() }} <a href="https://twitter.com/JDIZM">@JDIZM</a> | made with ❤️ using nuxt.js <br> Illustrations from <a href="https://undraw.co/">Undraw</a></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
// .footer__grid {
//   display: flex;
// }

// .footer__item {
//   flex: 1 1 auto;
// }
.social-icons {
  //  display: inline-block;
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
</style>
