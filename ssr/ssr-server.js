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
  res.redirect('https://huoqishi.github.io/vuejs-docs/demo' + req.url)
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
