const HtmlWebpackPlugin = require('html-webpack-plugin')
// 这里new仅仅是创建了一个实例，并没有对文件进行处理
const hp = new HtmlWebpackPlugin({
  // 默认文件会被复制到output.path文件夹中
  template: './index.html', // 指定要复制哪个文件

  // 指定新的文件名, 新的文件中会自动引入output.filename对应的js文件
  filename: 'index.html'
})

module.exports = {
  entry: './index.js', // 入口文件
  output: {
    path: require('path').join(__dirname, './dist'),// 打包后新js文件的保存目录(绝对路径)
    filename: 'merge.js' // 打包后新js的文件名
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // 指定要处理vue后缀的文件
        loader: 'vue-loader'
      },
      // 图片
      {
        // 图片格式不仅仅是vue文件中用的格式
        // 还要有css中使用的格式
        test: /\.(jpg|jpeg|png|bmp|gif|svg)$/,
        // 把图片备份到output.path指定的目录中
        loader: 'file-loader'
      },
      // css
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  // webpack内部会调用这个hp实例的方法来复制文件
  // plugins中的配置处理代码中没用import 的文件
  plugins: [hp]
}