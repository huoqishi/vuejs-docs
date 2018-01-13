## 么是数据绑定?

> 也有人叫它单向数据绑定

以前端为例, 将 JavaScript 中的数据(变量)与 DOM 中的某部分关联起来, 当我们在任一时刻修改该数据时，与之关联的 DOM 中会自动呈现新的数据， 而这个过程不需要开发者去主动操作 DOM 来进行更新。这种数据与 DOM 单向关联的关系，就可以叫做单向数据绑定。

![什么鬼](./images/how-what.jpg)

> 完全不懂?

> 不着急，我们慢慢来。。。
>
> 回忆下，刚学 DOM 操作的那段时光，我们是如何将 JavaScript 中的数据呈现到 DOM 中的: 
>
> ```js
> var age = 18 // 要呈现到 DOM 中的数据
> var oDiv = document.getElementById('#box')
> oDiv.innerText = age
>
> // 不久后 age 更新了, 要把 age 更新到 DOM 中，我们是这么做的
> age = 19
> oDiv.innerText = age
> ```
>
> 如何使用需要操作的数据或者 DOM 比较多，那么使用 jQuery 或者模板引擎也是一个不错的选择
>
> ```js
> var age = 18 // 要呈现到 DOM 中的数据
> $('#box').text(age) // 呈现数据
>
> // 不久后 age 更新了, 要把 age 更新到 DOM 中，我们是这么做的
> age = 19
> $('#box').text(age
> ```

嗯，若有所思，确实方便多了!!!

> 不不不! 还不够方便，请看下下面这个 demo:

<a href="../demo/01.on-way data binding.html" target="_blank">数据绑定演示demo</a>

该页面有一个全局的变量`age`, 默认值是 10, 尝试在浏览器调度工具中修改 age 的值:

```Js
// 如：
window.age = 998
```

随意的修改 age 的值，看看页面发生了什么变化!!!

天哪，页面内容立即和 age 的值神同步了?



![我的天哪](./images/my-god2.jpg)



## 单向数据绑定原理

## 总结

上面案例，直接修改 age 的值，没有做任何其他的操作，页面就立即发生了变化。案例中所呈现出的效果就是单向数据绑定。

超级方便有木有!!!