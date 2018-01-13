/**
 * 这个文件里写的代码最终会由node执行
 */
const path = require('path')
module.exports = {
  entry: './main.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'merge.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      { 
        test: /\.(jpg|jpeg|bmp|png|gif|)$/,
        loader: 'file-loader?name=img/[name].[ext]',
      }
    ]
  }
}
