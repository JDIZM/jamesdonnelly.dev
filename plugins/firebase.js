// import * as firebase from 'firebase/app'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
// if (process.client) {
//   require('firebase/app')
// }
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  projectId: process.env.FB_P_ID,
  storageBucket: process.env.FB_S_BU,
  messagingSenderId: process.env.FB_MESS_ID,
  appId: process.env.FB_APP_ID
}
// config fixes this issue https://github.com/vercel/next.js/issues/1999
// export default app
export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
