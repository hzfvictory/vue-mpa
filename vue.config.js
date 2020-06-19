//官方文档  https://cli.vuejs.org/zh/config/#vue-config-js

const glob = require('glob');  // 像在shell里一样,获取匹配对应规则的文件.
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const projectName = process.argv[3];  // build后面的文件目录  yarn build xxx
const isAnalyze = process.env.ANALYZE;
const isProduction = process.env.NODE_ENV;

const setPages = () => {
  let entries = {}
  if (isProduction === 'production') {

    if (!projectName) {
      console.error('请添加要打包的项目文件夹')
      return
    }
    entries[projectName] = {
      // page的入口
      entry: 'src/modules/' + projectName + '/main.js',
      // 模板来源
      template: 'public/index.html',  // 如果这里你要做区分的话,可以使用:'src/modules/' + projectName + '/index.html',在每一个项目里面都添加上index.html
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: projectName,
      chunks: ['chunk-common', 'chunk-vendors', projectName]
    }
  } else {
    // [ './src/modules/projectA/main.js', './src/modules/projectB/main.js' ]
    let items = glob.sync('./src/modules/*/main.js');

    for (let i in items) {
      let filepath = items[i];
      let fileList = filepath.split('/');
      let fileName = fileList[fileList.length - 2];
      entries[fileName] = {
        entry: `src/modules/${fileName}/main.js`,
        // 模板来源
        template: `public/index.html`,
        // 在 dist/index.html 的输出
        filename: `${fileName}.html`,
        title: fileName,
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-common', 'chunk-vendors', fileName]
      }
    }
  }
  return entries
}


module.exports = {
  productionSourceMap: false, // 生产禁止显示源代码
  publicPath: projectName ? '/' + projectName : '/',
  outputDir: 'dist/' + projectName,  // 不能动态输出
  pages: setPages(),
  // devServer: {
  //   historyApiFallback: {
  //     rewrites: [
  //       { from: new RegExp('/projectA'), to: '/projectA#/index.html' },
  //     ]
  //   }
  // },
  chainWebpack: config => {
    if (isAnalyze) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(
          new BundleAnalyzerPlugin({
            analyzerPort: 9999,
            openAnalyzer: true,
          }))
    }
  }
}
