import firebase from 'firebase'

const fireConfig = {
  apiKey: "AIzaSyCvqKpnUhGfv3velOw0RKZiZh307jy6InU",
  authDomain: "amo-spa-api.firebaseapp.com",
  databaseURL: "https://amo-spa-api.firebaseio.com",
  projectId: "amo-spa-api",
  storageBucket: "amo-spa-api.appspot.com",
  messagingSenderId: "926517977123"
}

const fireInit = firebase.initializeApp(fireConfig)

export default fireInit