<template>
  <div class="container mb--4 pt--8 contact">
    <h1 class="center">
      GET IN TOUCH?
    </h1>
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
      title: 'Get In Touch | Web Developer Manchester',
      description: 'Freelance web developer based in Manchester. Experienced with building bespoke user interfaces, websites and web applications.',
      submission: null, // submitted form values
      sent: false, // only send once
      auth_user: 'admin',
      auth_pass: process.env.AUTH_PASS,
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
        { hid: 'title', name: 'og:title', property: 'og:title', content: this.title },
        { hid: 'description', name: 'description', content: 'Get in touch with a freelance web developer.' },
        { hid: 'og:description', name: 'og:description', property: 'og:description', content: 'Get in touch with a freelance web developer.' }
      ]
    }
  },
  async mounted () {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      // Fail quietly
    }
  },
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
          // verify the recaptcha token
          this.verifyRecaptcha(response)
          // https://developers.google.com/recaptcha/docs/verify
        } catch {
          this.onError('recaptcha failed')
          // console.log('recaptcha failed', e)
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
      // TODO show loading state.
      // form request to post data with cloud functions
      const data = {
        name: this.submission[0],
        phone: this.submission[1],
        email: this.submission[2],
        message: this.submission[3]
      }
      await this.$axios.post('/send-mail', data, {
        withCredentials: true,
        // FIXME netlify build doesn't send pass.
        auth: {
          username: this.auth_user,
          password: this.auth_pass
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
          // clear form
          this.submission = null
          // TODO redirect to a thank you page.
        })
        .catch(() => {
          this.onError('failed to send')
          // console.log(err)
        })
    },
    async verifyRecaptcha (response) {
      const api = '/verify'
      // use proxy '/verify' to avoid cors issue
      const res = await this.$axios.post(api, { response }, {
        withCredentials: true,
        auth: {
          username: this.auth_user,
          password: this.auth_pass
        },
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then((res) => {
          if (res.data.recaptcha.success === true && res.data.recaptcha.score <= 0.4) {
            // low score
            this.onError('low recaptcha score, sorry!')
          }
          if (res.data.recaptcha.success === true && res.data.recaptcha.score >= 0.5) {
            // successful captcha
            this.sendMessage()
          } else {
            // handle failed captcha
            this.onError('failed to verify recaptcha')
          }
        })
        .catch(() => {
          this.onError('failed to verify recaptcha')
          // console.log(err)
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

.contact {
  min-height: 80vh;
}
</style>
