<template>
  <section class="services">
    <h3>WHAT I CAN DO FOR YOU..</h3>
    <div class="services__grid pt--4">
      <div v-for="service in services" :key="service.name" class="mb--2">
        <img :src="imgSrc(service.img)" :alt="service.name" :height="imgH" draggable="false">
        <h4>{{ service.name }}</h4>
        <p class="p--1">{{ service.desc }}</p>
        <!-- <ul v-if="service.items">
          <li v-for="item in service.items" :key="item">
            <span class="material-icons">chevron_right</span><span>{{ item }}</span>
          </li>
        </ul> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  data () {
    return {
      // imgW: '100px',
      imgH: '150px',
      services: [
        { name: 'UI/UX DESIGN', desc: 'Product Design that puts the user first.', img: 'wireframing.svg' },
        { name: 'WEBSITE DESIGN ', desc: 'Responsive websites designed for all screen sizes', img: 'web_devices.svg' },
        { name: 'WEB DEVELOPMENT', desc: 'Building user interfaces, websites and web applications that humans love to use', img: 'responsive.svg', items: ['Single Page Applications', 'Databases', 'API\'s'] }
      ]
    }
  },
  methods: {
    imgSrc (img) {
      return require('@/assets/undraw/' + img)
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  // margin-bottom: 1.5rem;
  width: 100%;
  text-align: center;
}
.services__grid {
  display: flex;
  flex-direction: column;
   @media screen and (min-width: 768px) {
    //
    flex-direction: row;
    img {
      max-width: 200px;
    }
    p {
      font-size: 1rem;
    }
  }
  // TODO make the services smaller.. below ipad pro.. only col on mobile
  @media screen and (min-width: 1024px) {
    //
    flex-direction: row;
    img {
      max-width: 250px;
    }
    p {
      font-size: 1.25rem;
    }
  }
}
h3 {
  margin-bottom: 1.5rem;
}

ul {
  display: flex;
  flex-direction: column;
  // @media screen and (min-width: 768px) {
  //   flex-direction: row;
  // }
}
li {
  // margin: 1rem;
  list-style: none;
}
span {
  vertical-align: middle;
}
</style>
