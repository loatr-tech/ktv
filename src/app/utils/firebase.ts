import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ3DKq0vI256yimaad4iUp0uML33m07Yo",
  authDomain: "loatr-tech-ktv.firebaseapp.com",
  projectId: "loatr-tech-ktv",
  storageBucket: "loatr-tech-ktv.appspot.com",
  messagingSenderId: "580571065570",
  appId: "1:580571065570:web:a0f122923e4800aa2742bb",
  measurementId: "G-XQY5SYQYEV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;