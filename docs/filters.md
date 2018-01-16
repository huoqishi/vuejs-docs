## 什么是过滤器?

> 以往我们如果需要处理一个数据，比如说想根据一个人的生日算出他的年龄，或者想从一个数组中过滤掉不需要的数据，我们可以将这些功能封装成方法，在各处调用。
>
> 过滤器就是 Vue 提供的一种专门用来实现上述功能的方式，本质上它也是方法，只是调用的方式会有些不同。

## 如何使用 过滤器?

```html
<div id="#box">
  <p>
    <!--{{birth | getAge}} 相当于 {{getAge(birth)}}-->
    {{birth | getAge}}
  </p>
</div>
```

```js
var vm = new Vue({
  el: '#box',
  data: {
    birth: '1998-10-20'
  },
  filters: {
    // 参数是上面 {{birth | getAge}} 中的 birth
    getAge: function (val) {
      return new Date().getFullYear() - new Date(birth).getFullYear() + 1
    }
  }
})
```

> 渲染结果

```html
<div id="#box">
  <p>
    21
  </p>
</div>
```





## 全局过滤器?

> 上面的过滤器，只能在 `el:'#box'` 属性指定的范围内的模板中使用
>
> 假如项目中有多个组件(或者多个 new Vue()) 时，全局过滤器可以在任意的模板中使用

```js
// 定义一个过滤器
// 参数1: 相当于过滤器这个方法的名字
Vue.filter('my-filter', function (value) {
// 返回处理后的值
})
```

```html
<div id="#box1">
  <p>
    <!--可以直接使用全局过滤器-->
    {{birth | getAge}}
  </p>
</div>
<div id="#box2">
  <p>
    <!--可以直接使用全局过滤器-->
    {{birth | getAge}}
  </p>
</div>
```



```js
var vm = new Vue({
  el: '#box1',
  data: {
    birth: '1998-10-20'
  }
})
var vm = new Vue({
  el: '#box1',
  data: {
    birth: '1998-10-20'
  }
})
```

