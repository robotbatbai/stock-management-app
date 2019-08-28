import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCEurQnQFz4Grjg41M5NLp6M_SYIbBTQcY',
  authDomain: 'fir-vue-a31ed.firebaseapp.com',
  databaseURL: 'https://fir-vue-a31ed.firebaseio.com',
  projectId: 'fir-vue-a31ed',
  storageBucket: 'fir-vue-a31ed.appspot.com',
  messagingSenderId: '831126869596',
  appId: '1:831126869596:web:068cfcd6953cc10b'
}
const app = firebase.initializeApp(config)

export const db = app.firestore()
export const followsCollection = db.collection('follows')
