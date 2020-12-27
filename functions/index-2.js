const functions = require('firebase-functions')
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
const cors = require('cors')({ origin: true })
admin.initializeApp()
dotenv.config()

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

exports.sendMail = functions.https.onRequest((req, res) => {
  // destructure the req.body object and extract form contents
  const { name, email, phone, message } = req.body
  // use cors
  cors(req, res, () => {
    // getting dest email by query string
    const dest = req.query.dest

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
