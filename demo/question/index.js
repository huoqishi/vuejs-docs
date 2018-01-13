// 创建实例
var vm = new Vue({
  el: '#app', // 和$mount('#app')作用一样
  data: function () {
    return {
      imgs: [
        './img/isc01.jpeg',
        './img/isc02.jpg',
        './img/isc03.jpg'
      ],
      X: 0,
      qs: {
        username: '', // 用户名
        hasFriend: '',
        howAge: null, // 年龄
        whenWork: null, // 工作时间
        // hobby: null,
        // 爱好
        hobby: [], // 这里必需写个空数组才行
        // 建议！
        suggestion: null
      },
      // 是否同意
      isAgree: false
    }
  },
  methods: {
    //  这里方法中的this默认都是vm
    // vm
    // 参数是方向，表示往左还是往右
    // 值是-1或者1
    animate: function (direction) {
      // if (this.X)
      // 如果 X：-600 +  -1*300 // -900
      var tmp = this.X + direction * 300
      if (tmp === -900) {
        this.X = 0
        return
      }
      this.X = tmp
    },
    // 上一页
    prev: function () {
      this.animate(1)
      // this.X += 300
    },
    // 下一页
    next: function () {
      this.animate(-1)
      // this.X += -300
    }
  }
  // data: {} 这样写也可以
})

// 这个可以用el属性代替!
// vm.$mount('#app')
