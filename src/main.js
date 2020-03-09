import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import Character from './Character.vue'
import Modal from './Modal.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faVenus, faBirthdayCake, faEye, faAdjust, faWeight, faUserCircle, faRuler } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faTimes, faVenus, faBirthdayCake, faEye, faAdjust, faWeight, faUserCircle, faRuler)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueResource)

Vue.component('profile', Character);
Vue.component('modal', Modal);
new Vue({
  el: '#app',
  render: h => h(App)
})


