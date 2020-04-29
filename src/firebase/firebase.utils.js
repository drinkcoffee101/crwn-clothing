import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAQPePQnlxnwrXjB48XpHPTgVxcE-PuR5c",
    authDomain: "crwn-db-e8356.firebaseapp.com",
    databaseURL: "https://crwn-db-e8356.firebaseio.com",
    projectId: "crwn-db-e8356",
    storageBucket: "crwn-db-e8356.appspot.com",
    messagingSenderId: "672166269009",
    appId: "1:672166269009:web:0f25b59810592ee865a870",
    measurementId: "G-V2BSF1WQMD"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase