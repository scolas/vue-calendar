
import firebase from 'firebase/app';
import 'firebase/firestore';


firebase.initializeApp({
  apiKey: "AIzaSyBi6smOcTe_G_I2OckjyyuAQZuYLTn--cU",
  authDomain: "vue-calendar-add80.firebaseapp.com",
  databaseURL: "https://vue-calendar-add80.firebaseio.com",
  projectId: "vue-calendar-add80",
  storageBucket: "vue-calendar-add80.appspot.com",
  messagingSenderId: "108089710072",
  appId: "1:108089710072:web:c293af43d6e07c841c720d"
});

export const db = firebase.firestore();

