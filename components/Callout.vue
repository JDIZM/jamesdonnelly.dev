<template>
  <section class="callout bg--blue text--white">
    <div>
      <span class="callout__overline">FREELANCE DEVELOPER FOR HIRE</span>
      <h2>LOOKING FOR A WEB DEVELOPER?</h2>
      <nuxt-link to="/contact/">
        <Button
          type="submit"
          label="HIRE ME"
          primary
        />
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import Button from '@/storybook/stories/atoms/Button.vue'
export default {
  name: 'Callout',
  components: {
    Button
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
.callout__overline {
  color: var(--primary);
}
section {
  // scrollbar is invisible on mobile
  width: 100vw;
  // margin: auto;
  // margin-bottom: 2rem;
   text-align: center;
  @media screen and (min-width: 600px) {
    width: calc(100vw - 0.95rem);
  }
  h2 {
    margin-bottom: 0;
  }
}
div {
  width: 90%;
  padding: 2rem 0;
  max-width: 980px;
  margin: auto;
}
</style>
