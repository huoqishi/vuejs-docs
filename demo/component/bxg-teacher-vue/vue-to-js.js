const fs = require('fs')
const path = require('path')
const files = fs.readdirSync('./js')
console.log(files)
files.forEach(filename => {
  console.log(998)
  if (path.extname(filename) !== '.vue') {return}
  const data = fs.readFileSync('./js/' + filename, 'utf-8')
  const templateResult = /<template>((\s|\S)*)<\/template>/.exec(data)[1]
  const styleResult = /<style>((\s|\S)*)<\/style>/.exec(data)[1]
  const scriptResult = /<script>((\s|\S)*)<\/script>/.exec(data)[1]
  // console.log(scriptResult)
  const result = scriptResult.replace('{', `{
  template: \`${templateResult}\`,`)
  console.log(result)
  const newname = filename.replace('.vue', '.js')
  fs.writeFileSync('./js/' + newname, result)
})
