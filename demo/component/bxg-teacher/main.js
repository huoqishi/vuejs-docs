import App from './js/App.js'
import Vue from './vue.js'
var vm = new Vue ({
  el: '#box',
  render: function (handler) {
    return handler(App)
  }
})
