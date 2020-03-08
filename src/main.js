import Vue from 'vue'
import App from './App.vue'
import Character from './Character.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.component('Profile', Character);
new Vue({
  el: '#app',
  render: h => h(App)
})
