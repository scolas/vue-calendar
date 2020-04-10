import Vue from 'vue'
import App from './App.vue'
import Nav from './components/nav.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app';
import 'firebase/firestore';
import VueTextareaAutosize from 'vue-textarea-autosize';


Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

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

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

new Vue({
  vuetify,
  render: h => h(Nav)
}).$mount('#nav')
