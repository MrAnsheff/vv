import Vue from 'vue'
import App from './App.vue'
import Servers from './components/Servers.vue'

Vue.component('my-servers', Servers);

new Vue({
  el: '#app',
  render: h => h(App)
})
