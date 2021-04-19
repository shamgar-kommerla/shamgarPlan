import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBnqV6mN8GB-O0X_f3pA4-YgizOYxd5yBU",
    authDomain: "fst-pjct-shamgar-plan.firebaseapp.com",
    projectId: "fst-pjct-shamgar-plan",
    storageBucket: "fst-pjct-shamgar-plan.appspot.com",
    messagingSenderId: "113727746243",
    appId: "1:113727746243:web:99631158aa7776ab7a3276",
    measurementId: "G-7FH2HR1N4V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots : true});
