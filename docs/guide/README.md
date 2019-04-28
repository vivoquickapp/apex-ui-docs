## 快速上手

::: warning
需要注意的是，你的本地的`hap-toolkit`版本需要大于`v4.0`以上才能正常使用本组件库全部组件
:::

### 使用组件库

组件库代码可以直接在[github]()上下载，代码使用MIT的协议，所以你可以根据具体的业务场景随意更改代码:P。组件库的项目主要结构如下：

```
apex-quickapp
├── README.md
├── babel.config.js
├── config
├── deploy.sh
├── docs  // 组件库文档
├── package.json
├── sign
└── src // 组件库目录
```

你需要将`components`目录复制到自己项目的`src`目录下即可，使用方法和自己写的组件使用方法一致，如果你还不太熟练，也可在[引入组件的使用文档]([https://doc.quickapp.cn/tutorial/overview/project-structure.html?h=引入自定义组件](https://doc.quickapp.cn/tutorial/overview/project-structure.html?h=%E5%BC%95%E5%85%A5%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6))中按照说明对照进行操作。

如果你没有太高的定制需求，也可以采用模块管理的方式安装到项目中去。

```sh
npm install apex-quickapp --save-dev  # 使用npm
yarn add apex-quickapp # 使用yarn
```

### 配置项目

#### webpack支持

快应用采用`webpack`作为资源打包工具，所以如果要在项目中引用组件库的内容，需要你手动添加一段`webpack`的配置来支持资源的引用。

- 在项目根目录下创建`config`文件夹
- 在config文件夹下新建一个`config.js`的文件，文件内容如下：

```javascript
module.exports = {
    postHook: function(webpackConf, options){
        webpackConf.resolve.alias = Object.assign(webpackConf.resolve.alias || {}, {
            '@apex-quickapp': 'apex-quickapp/src'
        })
    }
};
```

### 问题反馈

你在使用组件库的过程中遇到任何问题，欢迎在`github`上给提我们issue。



