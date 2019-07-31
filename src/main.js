/*
入口JS
*/
import Vue from 'vue'
import App from './App.vue'

import './base.css'
Vue.prototype.m = 1
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})
