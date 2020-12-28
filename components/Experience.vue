<template>
  <div class="experience m--2">
    <h3>EXPERIENCE</h3>
    <div v-for="(job, i) in experience" :key="i" class="experience__item mt--4">
      <div class="exp__date">
        <h4>{{ job.location }}</h4>
        <p>{{ job.date }}</p>
      </div>
      <div class="exp__time__wrapper">
        <div class="exp__time">
          <div class="exp__time__inner">
            <!--  -->
            <div>1</div>
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
  }
}
</script>

<style lang="scss" scoped>
.experience {
  // without grid
  // position: relative;
  // top: 0;
  // left: 0;
  // with grid
  text-align: left;
  width: 100%;
  height: 100%;
  // width ignore on flexbox
  // display: flex;
  // flex-direction: row;
}
.experience__item {
  // without grid
  // min-height: 320px;
  // with grid
  display: grid;
  // grid-template-columns: 1fr 1fr 2fr;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 2fr;
  text-align: center;
  // expand to large screen layout
  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr 2fr;
    grid-template-rows: 1fr;
    text-align: left;
  }
}

.exp__date {
  // without grid
  // @media screen and (min-width: 600px) {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 20%;
  // }
  // left: 0;
  // width: 50%;
  // position: absolute;
  // text-align: left;
  // height: 100%;
  // with grid
  h5 {
    margin: 0;
  }
}
.exp__time__wrapper {
  // without grid
  //  @media screen and (min-width: 600px) {
  //   position: absolute;
  //   top: 0;
  //   left: 22%;
  //   width: 20%;
  // }
  // left: 50%;
  // width: 50%;
  // position: absolute;
  // height: 100%;
  // with grid
  margin: auto;
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
  // position: relative;
  // top: 0;
  // left: 0;
  border: 1px solid black;
  border-radius: 100%;
  background: black;
  width: 100%;
  max-width: 106px;
  max-height: 106px;
  height: 100%;
  margin: auto;
//  text-align:center;
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

.exp__info {
  // without grid
  // @media screen and (min-width: 600px) {
  //   top: 0;
  //   left: 50%;
  //   width: 50%;
  //   position: relative;
  // }
  //   text-align: left;
  //   top: 100px;
  //   left: 0;
  //   width: 100%;
  //   position: absolute;
  //   height: 100%;
  // with grid
  h5 {
    margin: 0;
  }
}
</style>
