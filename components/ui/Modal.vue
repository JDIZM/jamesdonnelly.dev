<template>
  <div v-if="show" class="modal">
    <div class="modal-content">
      <!-- <i class="material-icons modal-close">close</i> -->
      <h4>{{ title }}</h4>
      <p>{{ msg }}</p>
    </div>
    <div class="modal-footer">
      <!-- // TODO add dynamic @click action for the modal route-->
      <a class="btn btn--secondary">Continue</a>
      <a class="btn btn--primary" @click="$emit('close')">Cancel</a>
    </div>
  </div>
</template>

<script>
// requires a modal trigger which passes the show state as a prop
// emit events in this child component with $emit('event') to pass to the parent
// listen for events in the parent with @eventname="something" to do something.
// <button class="btn btn--primary" @click="showModal = true">
//    primary
// </button>
// <Modal :show="showModal" @close="showModal = false" />
export default {
  name: 'Modal',
  props: {
    show: Boolean // receive value as props from parent using modal trigger
  },
  data () {
    return {
      // use events to send the state from parent to child.
      // show: true, // show the modal, handle display state with v-if and @click
      msg: 'some message', // message
      title: 'MODAL TITLE' // title
    }
  }
  // TODO modal overlay
  // toggle () {
  //   // toggle modal state
  // },
  // close () {
  //   // close the modal
  // }
}
</script>

<style lang="scss" scoped>
// @import '@/scss/_modal.scss'; // imported in main.scss for access to global vars
</style>
