<template>
  <div class="container">
    <h2 class="center">
      GET IN TOUCH?
    </h2>
    <p class="pb--2">If you need to reach me, then feel free to pop me a message.</p>
    <div class="form">
      <form @submit.prevent="sendMessage" @keydown.enter.prevent>
        <div class="form__field">
          <label for="name">name</label>
          <input id="name" v-model="name" type="text" name="name">
        </div>
        <div class="form__field">
          <label for="phone">phone</label>
          <input id="phone" v-model="phone" type="number" name="phone">
        </div>
        <div class="form__field">
          <label for="email">email</label>
          <input id="email" v-model="email" type="email" name="email">
        </div>
        <div class="form__field">
          <label for="message">message</label>
          <textarea id="message" v-model="message" name="message" rows="4" cols="50"> Hello </textarea>
        </div>
        <p v-if="feedback" class="help err">
          {{ feedback }}
        </p>
        <button class="btn btn--secondary">
          submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      title: 'contact!',
      name: null,
      phone: null,
      email: null,
      message: null,
      feedback: null
    }
  },
  methods: {
    method () {
      // eslint-disable-next-line
      console.log('this is a method in nuxt.js')
    },
    sendMessage () {
      // TODO build form request to post data with cloud functions
      // get the form data with v-model
      const data = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        message: this.message
      }
      // need a better if clause..
      if (this.name) {
        // if name exists then check the rest of the form data
        //
        this.feedback = null
        // do something with the form data
        // eslint-disable-next-line
        console.log(data)
        // make a post request to the cloud mail function
        const api = process.env.FIREBASE_FUNCTION_API
        // eslint-disable-next-line
        console.log(api)
        // this.$axios.post('/api/', data) // use nuxt.config.js axios proxy
        this.$axios.post(api, data) // without proxy
          .then((response) => {
            // we can do other things with the response and the data
            // eslint-disable-next-line
            console.log(response)
            // what about slack, sms, other firebase functions
            // TODO show success feedback
          })
          .catch((err) => {
            // eslint-disable-next-line
            console.log(err)
          })
      } else {
        // do something else
        // handle UI feedback classes
        this.feedback = 'you need to enter something'
      }
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Contact page description' },
        { hid: 'og:url', name: 'og:url', content: this.$route.path },
        { hid: 'og:image', name: 'og:image', content: 'https://i.imgur.com/9lSpJi6.jpg' }
      ]
    }
  }
}
</script>

<style scoped>
/* .title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  margin-top: 0;
  text-align: center;
} */

.form {
  /* width: 80%;
  max-width: 400px; */
  /* margin: auto; */
}
form {
    display: flex;
    /* justify-content: center;
    align-items: center;
    text-align: center; */
    flex-direction: column;
}
label {
    /* margin: 4px; */
}
input {
    /* margin: 4px; */
    /* height: 40px; */
}
button {
    margin-top: 16px;
    height: 60px;
    font-size: 1.3em;
}

.help {
    margin: 4px;
    color: red;
}
.err {
    color: red;
}

</style>
