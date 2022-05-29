import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import { seedDatabase } from '../seed';



// we need a config here
const config = {
  apiKey: "AIzaSyByGk4Kgj_fm24CAXbPDhqPntErHRCo0ag",
  authDomain: "netflix-7.firebaseapp.com",
  projectId: "netflix-7",
  storageBucket: "netflix-7.appspot.com",
  messagingSenderId: "723425011570",
  appId: "1:723425011570:web:6c2d87e02be4f3ed175feb"
};

const firebase = Firebase.initializeApp(config)

// seedDatabase(firebase)

export { firebase }