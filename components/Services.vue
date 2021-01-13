<template>
  <section class="services">
    <!--  -->
    <div>
      <h3>WHAT I CAN DO FOR YOU..</h3>
      <div v-for="service in services" :key="service.name">
        <h4>{{ service.name }}</h4>
        <p>{{ service.desc }}</p>
        <ul>
          <li v-for="item in service.items" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  data () {
    return {
      services: [
        { name: 'UI/UX DESIGN', desc: 'Product Design that puts the user first.', items: ['Product Design that puts the user first.'] },
        { name: 'WEBSITE DESIGN ', desc: 'Responsive websites designed for all screen sizes', items: ['Responsive websites designed for all screen sizes'] },
        { name: 'WEB DEVELOPMENT', desc: 'Building user interfaces, websites and web applications that humans love to use', items: ['Single Page Applications', 'Databases', 'API\'s'] }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 1.5rem;
  width: 100%;
}
h3 {
  margin-bottom: 1.5rem;
}

ul {
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
}
li {
  margin: 1rem;
  // list-style: none;
}
</style>
