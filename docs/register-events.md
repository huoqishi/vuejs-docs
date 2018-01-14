## 使用 v-on 指令为 元素注册事件

```html
<div id="box">
  <!-- 给 button 注册点击事件，当事件触发时，会执行 methods 中的 hello 方法-->
  <!-- hello 被传递了3个参数:
  $event 表示当前触发事件的对象，这里指的就是 $event.target 就是 button
  123, 'name' 就是随便传递的数据
	-->
  <!--如果不想传递任何参数, 直接省略 括号就可以了 【v-on:click="hello"】, 省略时默认会传递 $event 参数 -->
  <button v-on:click="hello($event, 123, 'name')">注册</button>
  <p>
    {{msg}}
  </p>
</div>
```

```js
var vm = new Vue({
  el: '#box',
  data: {
    msg: '小明'
  },
  methods: {
    // 虽然 hello 方法写在 data 中也可以生效，但是, 所有事件对应的方法推荐写到 methods 中去。
    // hello 方法中的 this 指向是 Vue的实例对象 vm
    hello: function (event, num, str) {
      console.log(event.target, num, str)
      this.msg = Math.random()
    }
  }
})
```

### Vue中的事件修饰符

1. .stop ：event.stopPropagation()阻止单击事件冒泡 `v-on:click.stop="handler"`
2. .prevent ：调用 event.preventDefault()
3. .capture ：添加事件侦听器时使用 capture(捕获) 模式
4. .self ：只当事件在该元素本身（而不是子元素）触发时触发回调
5. .once ：只在指定按键上触发回调
6. 修饰符串联写法 ：`v-on:click.stop.prevent`
7. 只有修饰符 ：`<form v-on:submit.prevent></form>`

### Vue中的按键修饰符

> 按方向键移动飞机

1. .enter（按回车键捕获）
2. .tab（按tab键捕获）
3. .esc（按esc键捕获）
4. .space（按空格键捕获）
5. .up（按↑键捕获）
6. .down（按↓键捕获）
7. .left（按←键捕获）
8. .right（按→键捕获）
9. .ctrl（按ctrl键捕获）
10. .alt（按alt键捕获）
11. .shift（按shift键捕获）
12. .字母（1.0.8+： 支持单字母按键别名）
13. 1.0.17+： 可以自定义按键别名：写法：Vue.directive('on').keyCodes.f1 = 112