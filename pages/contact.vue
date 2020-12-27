<template>
  <div class="container">
    <h2 class="center">
      GET IN TOUCH?
    </h2>
    <p class="pb--2">
      If you need to reach me, then feel free to pop me a message.
    </p>
    <ContactForm
      :show-error="false"
      :show-success="false"
      :inputs="inputs"
      @onSubmit="onSubmit"
      @onUpdate="onUpdate"
      @error="onError"
    />
    <Toast
      :show="toast.show"
      :msg="toast.msg"
      :duration="toast.duration"
      :icon="toast.icon"
      @onTimeout="toast.show = false"
    />
  </div>
</template>

<script>
import ContactForm from '@/storybook/stories/organisms/contact-form/ContactForm.vue'
import Toast from '@/storybook/stories/molecules/Toast.vue'
export default {
  components: {
    ContactForm,
    Toast
  },
  data () {
    return {
      title: 'contact!',
      submission: null, // submitted form values
      sent: false, // only send once
      toast: {
        show: false,
        duration: 4000,
        icon: 'check_circle',
        msg: 'Default toast msg'
      },
      inputs: [
        // 0 - name
        {
          name: 'name',
          type: 'text',
          label: 'What\'s your name?',
          placeholder: 'James',
          icon: 'person',
          showIcon: true,
          showError: false
        },
        // 1 - email
        {
          name: 'email',
          type: 'email',
          label: 'What\'s your email?',
          placeholder: 'hello@jamesdonnelly.dev',
          icon: 'email',
          showIcon: true,
          showError: false
        },
        // 2 - phone
        {
          name: 'phone',
          type: 'tel',
          label: 'What\'s your phone number?',
          placeholder: '0161 123 4567',
          icon: 'phone',
          showIcon: true,
          showError: false
        },
        // 3 - message
        {
          name: 'message',
          type: 'textarea',
          label: 'Leave me a message',
          placeholder: 'Enter a message',
          icon: 'message',
          showIcon: true,
          showError: false
        }
      ]
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Get in touch with a freelance web developer.' },
        { hid: 'og:url', name: 'og:url', content: this.$route.path },
        { hid: 'og:image', name: 'og:image', content: '/logo.png' }
      ]
    }
  },
  async mounted () {
    // TODO implement recaptcha
    await this.$recaptcha.init()
  },
  // computed: {
  //   validateEmail () {
  //     // TODO can't validate form without access to the inputs.
  //     return {
  //       error: this.email === null || this.email === undefined || this.email === ''
  //     }
  //   }
  // },
  methods: {
    method () {
      // eslint-disable-next-line
      console.log('this is a method in nuxt.js')
    },
    async onSubmit (value) {
      if (!this.sent) {
        // send form once
        // form should already be validated, this should be a success
        // console.log('submit form', value)
        this.submission = value
        // TODO send message
        await this.sendMessage()
      }
    },
    onError () {
      this.toast.show = true
      this.toast.msg = 'There was an error!'
      this.toast.icon = 'alarm'
    },
    onUpdate (value) {
      // console.log('update', value)
    },
    async sendMessage () {
      // TODO build form request to post data with cloud functions
      // get the form data with v-model
      const data = {
        name: this.submission[0],
        phone: this.submission[1],
        email: this.submission[2],
        message: this.submission[3]
      }
      // console.log(data)
      // TODO clear form
      // TODO show loading state.
      // make a post request to the cloud mail function
      const api = process.env.FIREBASE_FUNCTION_API
      // eslint-disable-next-line
      console.log(api)
      // this.$axios.post('/api/', data) // use nuxt.config.js axios proxy
      await this.$axios.post(api, data) // without proxy
        .then((response) => {
          // we can do other things with the response and the data
          // eslint-disable-next-line
          console.log(response)
          // what about slack, sms, other firebase functions
          // TODO show success feedback
          this.toast.show = true
          this.toast.msg = 'Your message has been sent!'
          this.toast.icon = 'check_circle'
        })
        .catch((err) => {
          // eslint-disable-next-line
          console.log(err)
        })
      // need a better if clause..
      // if (this.name) {
      //   // if name exists then check the rest of the form data
      //   //
      //   this.feedback = null
      //   // do something with the form data
      //   // eslint-disable-next-line
      //   console.log(data)
      //   // make a post request to the cloud mail function
      //   const api = process.env.FIREBASE_FUNCTION_API
      //   // eslint-disable-next-line
      //   console.log(api)
      //   // this.$axios.post('/api/', data) // use nuxt.config.js axios proxy
      //   this.$axios.post(api, data) // without proxy
      //     .then((response) => {
      //       // we can do other things with the response and the data
      //       // eslint-disable-next-line
      //       console.log(response)
      //       // what about slack, sms, other firebase functions
      //       // TODO show success feedback
      //     })
      //     .catch((err) => {
      //       // eslint-disable-next-line
      //       console.log(err)
      //     })
      // } else {
      //   // do something else
      //   // handle UI feedback classes
      //   this.feedback = 'you need to enter something'
      // }
    }
  }
}
</script>

<style scoped>
div {
  text-align: left;
}
</style>
