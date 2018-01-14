## class 和 style 样式绑定

> 在 Vue 中我们除了使用常规的方式设置 class 和 style 样式之外,  对于那些需要动态变化的的样式，也使用可以v-bind 来进行绑定

```html
<div id="box">
  <button v-bind:class="styles">登陆</button>
</div>
```

```js
var app = new Vue({
  el: '.el',
  data: {
    styles: 'hello btn'
  }
})
```

> 渲染结果

```html
<div id="box">
  <button class="hello btn">登陆</button>
</div>
```

## 以对象的语法设置 class(推荐)

```html
<div id="box">
  <!--
	 下面指定的对象中{hello: true, btn: true, test: false}, 对象的key 就是将要给button添加的样式名， value 是判断要不要添加样式的条件。 
	当 value 为 true 时，vue 便会将 key 作为样式名, 添加到 button 元素的 class 属性中
  -->
  <button v-bind:class=" {hello: true, btn: false, hide: true} ">登陆</button>
  <button v-bind:class=" {hello: 1==2, btn: 1==1, hide: true} ">登陆</button>
  <button v-bind:class=" {hello: true, btn: true, hide: isHide} ">登陆</button>
</div>
```

```js
var vm = new Vue({
  el: '.el',
  data: {
    // 作为上面判断 button 是否会有 hide 样式的条件
    // 修改 isHide 的值，button 的样式就会发生变化
    isHide: false
  }
})
```



> 渲染结果

```html
<div id="box">
  <button class="hello hide">登陆</button>
  <button class="btn hide">登陆</button>
  <button class="hello btn">登陆</button>
</div>
```

## 以对象的语法设置 style 

```html
<div id="box">
  <button style=" {color: '#f0f', fontSize: '+ size + 'px'} ">注册</button>
  <button style=" styles ">登陆</button>
</div>
```

```js
var vm = new Vue({
  el: '.el',
  data: {
    // 修改这里 size 的值
    // 或者修改 styles 的属性，上面 button 中的样式也会相应的变化
    size: 18,
    styles: {
      color: '#f0f',
      fontSize: '20px'
    }
  }
})
```

> 渲染结果

```html
<div id="box">
  <button style="color: #f0f; fontSize: 18px ">注册</button>
  <button style="color: #f0f; fontSize: 20px">登陆</button>
</div>
```

