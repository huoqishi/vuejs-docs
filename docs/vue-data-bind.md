##  如何使用?

> 如何使用 Vue 提供的数据绑定的方式将数据呈现到 DOM 中呢?

## {{}} Mustache 语法

> 数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：

```html	
<div class="el">
  <div>
    {{msg}}
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

```js
var app = new Vue({
  el: '.el',
  data: {
    msg: 'Hello Word!'
  }
})
```

> 渲染结果

```html
<div class="el">
  <div>
    Hello Word!
  </div>
</div>
```

**如果上面的 `msg` 值中即使包含 HTML 标签, 这些标签会被当作普通的文本显示出来!**

## v-text指令

> {{}} 这种 Mustache 语法虽然方便, 但是在它尚未被 Vue 解析时, 浏览器会把 {{}} 原样呈现出来，所以可能会出现页面上{{}} 闪一下的情况(其实也没太大影响)。如果想避免这样的问题，则可以使用官方提供 `v-text` 指令来代替 `{{}}`

> 使用方式如下:

```html
<div class="el">
  <div v-text="msg"></div>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

```js
var app = new Vue({
  el: '.el',
  data: {
    msg: 'Hello Word!'
  }
})
```

> `v-text` 指令的作用与 `{{}}` 的作用大抵相同, v-text 书写在标签的属性位置，该属性的值与{{}}  中书写的内容一致，最终 Vue 会将它呈现到指令所在标签中

**与{{}}表现一致，如果数据中存在 HTML 标签，则会原样显示标签**

## v-html 指令

> 与 v-text 使用方式一致，唯一的区别是，v-html对应的数据中如果包含标签，Vue 则会将标签解析成 HTML

```html
<div class="el">
  <div v-html="msg"></div>
  <div v-text="msg"></div>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

```js
var app = new Vue({
  el: '.el',
  data: {
    msg: '<h1>Hello Word!</h1>'
  }
})
```

渲染结果:

```html
<div class="el">
  <div v-html="msg"><h1>Hello Word!</h1></div>
  <div v-text="msg">$lt;h1$gt;Hello Word!$lt;/h1$gt;</div>
</div>
```



!> 你的站点上动态渲染的任意 HTML 可能会非常危险，因为它很容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。请只对可信内容使用 HTML 插值，**绝不要**对用户提供的内容使用插值。



## 属性绑定(v-bind)

> 无论是 `{{}}` `v-once` `v-text` 还是 `v-html`, 都只能将数据呈现在 HTML 标签中间，并不能够设置标签的属性

> v-bind 的作用就是用来为元素设置属性

> 假设有一张图片，地址是 JavaScript 动态获取的，则我们可以这么做: 

```html
<div class="el">
  <img v-bind:src="path"/>
</div>
```

```js
var app = new Vue({
  el: '.el',
  data: {
    msg: './img/logo.png'
  }
})
```

> 执行结果:

```html
<div class="el">
  <img v-bind:src="path" src="./img/logo.png"/>
</div>
```

V-bind 指令的语法:

`v-bind:属性名="xx"`

如 `v-bind:src="xx"` 就为标签添加了一个 src 属性

如 `v-bind:id="xx"` 就为标签添加了一个 id 属性

如上，可以按自己的需求添加相应的属性。



## {{}}、v-once、v-text、v-html、v-bind 对比

| 技术类型   | 书写位置           | 能否解析数据中的 html | 是否可能出现页面闪烁 | 数据是否自动绑定 | 是否支持 JavaScript 表达式 |
| ------ | -------------- | ------------- | ---------- | -------- | ------------------- |
| {{}}   | 任何位置, 除了标签属性位置 | 不能            | 可能会        | 自动绑定     | 支持                  |
| v-text | 标签属性位置         | 不能            | 不会         | 自动绑定     | 支持                  |
| v-once | 标签属性位置         | 不能            | 不会         | 只绑定一次    | 支持                  |
| v-html | 标签属性位置         | 能             | 不会         | 自动绑定     | 支持                  |
| v-bind | 标签属性位置         | 不能，它只是操作标签属性  | 不会         | 自动绑定     | 支持                  |

🚩 上述案例代码在:  <a href="###">示例代码</a> 