// index.js
import VueRouter from 'vue-router'
import Vue from 'vue'
import App from './App.vue'
import Students from './components/Students.vue'
import SignIn from './components/SignIn.vue'
// 1. VueRouter会在每一个组件的实例上添加两个属性this.$router和this.$routes
Vue.use(VueRouter)
// 2. 路由配置
const router = new VueRouter({
  routes: [{
    name: 'signin',
    path: '/signin',
    component: SignIn
  }, {
    name: 'students',
    path: '/students',
    component: Students
  }]
})
const vm = new Vue({
  el: '#box',
  // 3. 启用路由配置
  router, 
  render: h => h(App)
})
