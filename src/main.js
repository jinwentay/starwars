import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import Character from './Character.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueResource)

Vue.component('Profile', Character);
new Vue({
  el: '#app',
  render: h => h(App)
})
