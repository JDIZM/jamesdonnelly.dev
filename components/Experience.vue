<template>
  <div class="experience m--2">
    <h3>EXPERIENCE</h3>
    <p>Here's a snapshot of the last few roles i've worked in..</p>
    <div v-for="(job, i) in experience" :key="i" class="experience__item mt--4">
      <div class="exp__date">
        <h4>{{ job.location }}</h4>
        <p>{{ job.date }}</p>
      </div>
      <div class="exp__time__wrapper">
        <div class="exp__time">
          <div class="exp__time__inner">
            <div>
              <!-- <img v-if="job.logo" :src="imgSrc(job.logo)" alt=""> -->
              <span v-if="job.time">{{ job.time }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="exp__info">
        <h5>{{ job.position }}</h5>
        <p>{{ job.info }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',
  props: {
    experience: {
      type: Array,
      required: true
    }
  },
  methods: {
    imgSrc (img) {
      return require('@/assets/' + img)
    }
  }
}
</script>

<style lang="scss" scoped>
.experience {
  text-align: center;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 600px) {
    text-align: left;
  }
}
.experience__item {
  display: grid;
  grid-template-columns: 1fr;
  // grid-template-rows: 1fr 2fr 2fr;
  text-align: center;
  div {
      margin-bottom: 0.5rem;
  }
  // expand to large screen layout
  @media screen and (min-width: 680px) {
    grid-template-columns: 1fr 1fr 3fr;
    grid-template-rows: 1fr;
    text-align: left;
  }
}

// .exp__date {
//   h5 {
//     margin: 0;
//   }
// }
.exp__time__wrapper {
  // margin: auto;
  width: 100%;
}
.exp__time {
 border: 2px solid black;
 border-radius: 100%;
 padding: 2px;
 width: 108px;
 height: 108px;
 margin: auto;
}
.exp__time__inner {
  border: 1px solid black;
  border-radius: 100%;
  background: black;
  width: 100%;
  max-width: 106px;
  max-height: 106px;
  height: 100%;
  margin: auto;
}
.exp__time__inner div{
  color: white;
  text-align: center;
  line-height: 98px;
}
.exp__time__inner div::selection {
  background-color: transparent;
}

.exp__time__img {
  overflow: hidden;
  line-height: 0;
}
.exp__time__img img{
  position: relative;
  height: 100%;
  width: 100%;
}

h3 {
  margin-bottom: 1.5rem;
}
</style>
