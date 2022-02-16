
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDm-npLAr239bSwvaam_wy3q-fMbOWY5kU",
  authDomain: "registrationsystem-ddec5.firebaseapp.com",
  projectId: "registrationsystem-ddec5",
  storageBucket: "registrationsystem-ddec5.appspot.com",
  messagingSenderId: "1050599754247",
  appId: "1:1050599754247:web:7ad0563ea1d09aed12f8a2"
};


// const app = initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);

// export const auth = app.auth()
export default app;