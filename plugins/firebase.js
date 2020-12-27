// import * as firebase from 'firebase/app'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
// if (process.client) {
//   require('firebase/app')
// }
const config = {
  apiKey: 'AIzaSyCBhb4ql4-LdU9RPAEZ9Yl1ALdY_URznd8',
  authDomain: 'nuxt-portfolio-8d1bf.firebaseapp.com',
  databaseURL: 'https://nuxt-portfolio-8d1bf.firebaseio.com',
  projectId: 'nuxt-portfolio-8d1bf',
  storageBucket: 'nuxt-portfolio-8d1bf.appspot.com',
  messagingSenderId: '329674313162',
  appId: '1:329674313162:web:9008fb58c9b2f9ceb9d333',
  measurementId: 'G-KZWB6GKFPJ'
}
// config fixes this issue https://github.com/vercel/next.js/issues/1999
// export default app
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
