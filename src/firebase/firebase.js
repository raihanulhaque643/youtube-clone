import * as firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBBk9JhNEamIOX9bKkK1YrtLP21slteu9w",
    authDomain: "clone-ea192.firebaseapp.com",
    databaseURL: "https://clone-ea192.firebaseio.com",
    projectId: "clone-ea192",
    storageBucket: "clone-ea192.appspot.com",
    messagingSenderId: "989891106455",
    appId: "1:989891106455:web:c535bfafa6bd82350cbbd2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);