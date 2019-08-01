/*
入口JS
*/
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueResource from 'vue-resource'
// 使用插件
Vue.use(VueResource)
Vue.prototype.$bus = new Vue()
Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})
