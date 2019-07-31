/*
入口JS
*/
import Vue from 'vue'
import App from './App.vue'

import './base.css'
Vue.prototype.m = 1
Vue.prototype.$globalEventBus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})
