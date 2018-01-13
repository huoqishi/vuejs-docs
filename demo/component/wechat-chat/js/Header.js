// 组件名不能和已有的html标签名一样
// template中的html标签，只能有一个根元素
var Header = Vue.component('my-header', {
  template: `
  <div>
    <img src="./img/header.jpg" alt="" />
  </div>
  `
})
