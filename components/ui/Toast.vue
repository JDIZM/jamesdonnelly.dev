<template>
  <div v-if="show" class="toast active">
    <!-- <i class="material-icons modal-close">close</i> -->
    <!-- <h4>{{ title }}</h4> -->
    <span class="material-icons">{{ icon }}</span>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
// receive props from parent
// listen for events on parent
// emit events to parent
// active class changes the position of the toast, it can be dynamically added :class="{ active: showToast }
// or it can always be on and we just control visibility with  v-if / v-show.
export default {
  name: 'Toast',
  props: {
    show: Boolean, // receive value as props from parent using modal trigger
    // duration: Number // duration of toast message
    icon: {
      type: String,
      required: false,
      default: 'info'
    }
  },
  data () {
    return {
      msg: 'toast message', // message
      duration: 5000 // duration of toast message
    }
  },
  created () {
    // set the timeout after message appears
    // emit the state to the parent
    setTimeout(() => {
      this.$emit('toastTimeout') // emit timeout event to parent
    }, this.duration) // after set duration
  }
}
</script>

<style lang="scss" scoped>
// @import '@/scss/_toast.scss'; // imported in main.scss for access to global vars
</style>
