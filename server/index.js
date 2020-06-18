/*
* 用koa启动一个服务，看看打包后的文件，是否能正常打开
* */
const Koa = require('koa');
const glob = require('glob');
const app = new Koa();


app.use(require('koa-static')(process.cwd() + '/dist'));

let project = glob.sync(process.cwd() + '/src/modules/*/main.js');


app.listen('8088', () => {
  for (let item in project) {
    let filepath = project[item]
    let fileList = filepath.split('/');
    let fileName = fileList[fileList.length - 2];
    console.log(`http://localhost:8088/${fileName}/index.html`)
  }
})


