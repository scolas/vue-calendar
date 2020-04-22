import Vue from 'vue'
import App from './App.vue'
import vuetify from '../../plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize'
import store from '../../components/store'



Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false



new Vue({
  vuetify,
  store, 
  render: h => h(App)
}).$mount('#app')

