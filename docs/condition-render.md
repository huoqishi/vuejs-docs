## v-if

> 通过给 v-if 指定一个布尔值，可以用来控制元素是否被渲染

```html
<div id="box">
  <header v-if="showHeader">
    <h1>
      标题
    </h1>
    <div>
      菜单
    </div>
  </header>
  <footer>版权所有@xxx.com</footer>
</div>
```

```js
var vm = new Vue({
  el: '#box',
  data: {
    showHeader: false
  }
})
```

> 渲染结果
>
> 由于 v-if 指定的条件为 false, 所以 header 就不会被渲染出来

```html
<div id="box">
  <footer>版权所有@xxx.com</footer>
</div>
```

v-if 还可以配合 v-else 来使用

> v-if 与 v-else-if 与 v-else 必须是相邻的兄弟元素时，它们才能是一个组合
>
> 当 v-if 或者 v-else-if 对应的条件为 true 时, 它们所在的标签会被正常渲染, 否不会被渲染
>
> v-else 不需要指定一个具体的值, 同一组全中 v-if 和 所有的 v-else-if 都不满足条件时 v-else 满足条件, 此时就只有 v-else 所有标签会被渲染

```html
<div id="box">
  <span v-if="sex == 0">男</span>
  <span v-else-if="sex == 1">女</span>
  <span v-else>人妖</span>
</div>
```

```js
var vm = new Vue({
  el: '#box',
  data: {
    sex: -1
  }
})
```



> 渲染结果

```html
<div id="box">
  <span>人妖</span>
</div>
```

## v-show

通过给 v-show 指定一个布尔值，可以用来控制元素是否显示

```html
<div id="box">
  <!-- 当 showHeader 为 false 时， vue 会给 header 添加一个 style属性 display:none;-->
  <header v-show="showHeader">
    <h1>
      标题
    </h1>
    <div>
      菜单
    </div>
  </header>
  <footer>版权所有@xxx.com</footer>
</div>
```

```js
var vm = new Vue({
  el: '#box',
  data: {
    showHeader: false
  }
})
```

> 渲染结果

```html
<div id="box">
  <header v-show="showHeader" style="display:none;">
    <h1>
      标题
    </h1>
    <div>
      菜单
    </div>
  </header>
  <footer>版权所有@xxx.com</footer>
</div>
```

