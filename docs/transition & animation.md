

## 概述

> Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。

> 这里会涉及进入、离开和列表的过渡

## 单个元素/组件的过渡

> Vue 提供了 `transition` 的封装组件，在下列情形中，可以给任何元素和组件添加 entering/leaving 过渡

```html
<div id="example-2">
  <button @click="show = !show">Toggle show</button>
  <transition name="bounce">
    <p v-if="show">是否展示</p>
  </transition>
</div>
```

```Js
new Vue({
  el: '#example-2',
  data: {
    show: true
  }
})
```

```css
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
```

### 过渡的类名

在进入/离开的过渡中，会有 6 个 class 切换。

1. `v-enter`：定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。
2. `v-enter-active`：定义过渡的状态。在元素整个过渡过程中作用，在元素被插入时生效，在 `transition/animation` 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。
3. `v-enter-to`: **2.1.8版及以上** 定义进入过渡的结束状态。在元素被插入一帧后生效 (与此同时 `v-enter` 被删除)，在 `transition/animation` 完成之后移除。
4. `v-leave`: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。
5. `v-leave-active`：定义过渡的状态。在元素整个过渡过程中作用，在离开过渡被触发后立即生效，在 `transition/animation` 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。
6. `v-leave-to`: **2.1.8版及以上** 定义离开过渡的结束状态。在离开过渡被触发一帧后生效 (与此同时 `v-leave` 被删除)，在 `transition/animation` 完成之后移除。