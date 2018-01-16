## axios

> 官方推荐的 ajax 库, 独立于 vue。

### 安装

```bash
# install
npm install vue --save
```

### 使用

```js
axios({
  url: '/user',
  method: 'post',
  data: {
    params: { // params 中的参数将拼接到请求的 url 中去
      id: 19,
      tmp: 12
    },
    arg1: '小明',
    arg2: 18
  }
})
.then(function (res) {  // promise 形式的 callback
  // 请求成功后自动执行
  //res.data 是服务器端响应的数据
}, function (err) {
  // 请求失败后自动执行
})
```

> 简化的使用方式

get 请求

```js
axios.get('/user?id=18')
  .then(function (res) {
  
})
```

或者> 

```js
axios.get('/user?id=18', {
  params: {
    id: 18
  }
})
.then(function (res) {
  
})
```



post 请求

```js
axios.post('/user', {
  name: '小明',
  age: 18
})
.then(function (res) {
  
})
```

