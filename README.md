# vue-mpa

### 启动项目

> yarn serve

### 打包项目

#### 打包单个项目

> yarn build [项目名称]

#### 打包所有的项目

> yarn build:all

脚本内容需要根据打包目录正确添加，大佬可循环获取

### 启动本地server

> node server/index.js

然后根据提示，打开某个页面。


### 注意事项

> 打包只能一个文件一个文件打包，好处是每一个项目是单独的一个文件夹
> 如果直接打包，你会发现左右的页面都在dist内（outputDir 输出的文件夹是静态唯一的），虽然不影响开发，但是如果单独的一个页面是一个完整的项目的话，这样就不好区分了。