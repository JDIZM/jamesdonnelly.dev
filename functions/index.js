const functions = require('firebase-functions')
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
const cors = require('cors')({ origin: true })
admin.initializeApp()
dotenv.config()
const axios = require('axios')
//
// middleware with express
//
const app = require('express')()
const basicAuth = require('express-basic-auth')
// Automatically allow cross-origin requests
app.use(cors)

app.use(basicAuth({
  users: { admin: 'supersecret' }
}))

// Using App as the argument for onRequest(), you can pass a full Express app to an HTTP function
// https://firebase.google.com/docs/functions/http-events#using_existing_express_apps

// create an api to use express with cloud functions
exports.api = functions.https.onRequest(app)

//
// NODEMAILER
// 

// use express for nodemailer
app.post('/send-mail', (req, res) => {
  // create smtp transporter to send email
  const transporter = nodemailer.createTransport({
    // https://community.nodemailer.com/2-0-0-beta/setup-smtp/
    // options.sevice
    // service: 'gmail',
    host: process.env.MAILGUN_SMTP,
    port: '465',

    auth: {
      user: process.env.MAILGUN_SMTP_USER,
      pass: process.env.MAILGUN_SMTP_PASS
    }
  })
  // destructure the req.body object and extract form contents
  const { name, email, phone, message } = req.body
  // use cors
  cors(req, res, () => {
    // getting dest email by query string
    // ?dest=hello@jamesdonnelly.dev
    // const dest = req.query.dest
    const dest = 'hello@jamesdonnelly.dev'

    // mail template
    const template = `
        <p>name: ${name}
        <br />
        phone: ${phone}
        <br />
        email: ${email} 
        <br />
        ${message} </p>
        `

    // setting the mail options
    const mailOptions = {
      from: process.env.MAILGUN_FROM, // Something like: Jane Doe <janedoe@gmail.com>
      // to: dest || email, // send to dest by query string OR by email from post
      to: dest, // send to dest by query string
      subject: 'New message from contact form', // email subject
      html: template // email content in HTML
    }

    // returning result
    return transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return res.send(err.toString())
      }
      return res.send('Message sent!')
    })
  })
})

//
// VERIFY RECAPTCHA
//

// receives json data, posts x-www-form-urlencoded

app.post('/verify', async (req, res) => {
  // can receive json no problem
  // use req.query for query data, not body.
  // http://expressjs.com/en/api.html#req.query
  // handle json data
  const { secret, response } = req.body
  // console.log(secret, response)
  // create a query to send form-urlencoded data
  const api = 'https://www.google.com/recaptcha/api/siteverify'
  const query = `?secret=${secret}&response=${response}`
  console.log(query)
  try {
    // post to api with axios 
    axios.post(api + query, {
      headers: {
        // 'Content-Type': 'application/json'
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then((response) => {
      return res.send({
        recaptcha: response.data
        // handle success and score client side
      })
    })
    .catch((err) => {
      //
      // next(err)
      res.send({
        err
      })
    })
  } catch(err) {
    res.send({
      err
    })
  }
})
