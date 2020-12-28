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
      @error="onError('Make sure you fill in the form!')"
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
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.log(e)
    }
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
    async onSubmit (value) {
      this.submission = value
      // send form once
      if (this.sent) {
        this.onError('Form already sent')
      } else {
        // form should already be validated, this should be a success
        try {
          const response = await this.$recaptcha.execute('submit')
          // console.log('ReCaptcha token:', response)
          // TODO verify the recaptcha token
          // use a node function?
          const secret = '6Lc8AhYaAAAAAI-ZqYXB0fQGBYECdg0EaXxQ3BZg'
          this.verifyRecaptcha(secret, response)
          // https://developers.google.com/recaptcha/docs/verify
        } catch (e) {
          console.log(e)
        }
      }
    },
    onError (msg) {
      this.toast.show = true
      this.toast.msg = msg
      this.toast.icon = 'alarm'
    },
    onUpdate (value) {
      // console.log('update', value)
    },
    async sendMessage () {
      // form request to post data with cloud functions
      const data = {
        name: this.submission[0],
        phone: this.submission[1],
        email: this.submission[2],
        message: this.submission[3]
      }
      // TODO clear form
      // TODO show loading state.
      // make a post request to the cloud mail function
      // const api = process.env.FIREBASE_FUNCTION_API
      // this.$axios.post('/api/', data) // use nuxt.config.js axios proxy
      await this.$axios.post('/send-mail', data, {
        auth: {
          username: 'admin',
          password: 'supersecret'
        }
      }) // without proxy
        .then((response) => {
          // we can do other things with the response and the data
          // what about slack, sms, other firebase functions
          // show success feedback
          this.toast.show = true
          this.toast.msg = 'Your message has been sent!'
          this.toast.icon = 'check_circle'
          this.sent = true
          // TODO redirect to a thank you page.
        })
        .catch((err) => {
          // eslint-disable-next-line
          console.log(err)
        })
    },
    async verifyRecaptcha (secret, response) {
      // console.log(secret, response)
      // const api = 'http://localhost:4000/verify'
      // use proxy '/verify' to avoid cors issue
      // const query = `?secret=${secret}&response=${response}`
      // const res = await this.$axios.post('/verify' + query, {
      const res = await this.$axios.post('/verify', { secret, response }, {
        auth: {
          username: 'admin',
          password: 'supersecret'
        },
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then((res) => {
          if (res.data.recaptcha.success === true && res.data.recaptcha.score <= 0.4) {
            // low score
          }
          if (res.data.recaptcha.success === true && res.data.recaptcha.score >= 0.5) {
            // successful captcha
            // console.log('winner winner chicken dinner')
            this.sendMessage()
          } else {
            // handle failed captcha
          }
        })
        .catch((err) => {
          console.log(err)
        })
      //
      return res
    }
  }
}
</script>

<style scoped>
div {
  text-align: left;
}
</style>
