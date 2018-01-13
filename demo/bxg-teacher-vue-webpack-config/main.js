// var Vue = require('vue')
import Vue from 'vue'
// var App = require('./js/App.vue')
import App from './js/App.vue'
var vm = new Vue({
  el: '#box',
  render: function (handler) {
    return handler(App)
  }
})
