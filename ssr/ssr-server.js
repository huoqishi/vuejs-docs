const express = require('express')
const Renderer = require('docsify-server-renderer')
const ssrConfig = require('./ssr.config')
const readFileSync = require('fs').readFileSync
const app = express()
const renderer = new Renderer({
  template: readFileSync('./ssr/ssr.html', 'utf-8'),
  config: ssrConfig
})
app.use('/demo', (req, res, next) => {
  // res.send('ok')
  res.redirect('https://huoqishi.github.io/vuejs-docs/demo' + req.url)
  // res.writeHead(302, {
  //   Location: 'https://huoqishi.github.io/vuejs-docs' + req.url
  //   // Location: '/data-bind'
  // })
  // res.send('<meta http-equiv="refresh" content="0; url=https://huoqishi.github.io/vuejs-docs' + req.url + '" /><h1>即将中转。。。</h1>')
})
app.use((req, res) => {
  console.log(req.url)
  renderer.renderToString(req.url)
    .then(html => {
      res.send(html)
    })
    .catch(err => {
      if (err) {
        res.send('error')
      }
    })
})
app.listen(8091, '127.0.0.1', err => {
  if (err) return console.log('出错了', err)
  console.log('监听成功: http://127.0.0.1:8091')
})

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err)
})
