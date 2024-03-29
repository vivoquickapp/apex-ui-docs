## 快速上手

::: warning
需要注意的是，你的本地的快应用引擎版本需要大于`1070`以上才能正常使用本组件库全部组件

组件库 designWidth 基于 750 开发，为了适配不同的 designWidth，你需要修改文件`apex-ui/components/styles/base.less`中的@ratio 变量。

当前组件库默认@ratio 为 750/750，如果你的快应用 designWidth 为 360，则应该修改@ratio 为 360/750。

:::

### 快速预览

使用`浏览器`或者`快应用调试器`扫码快速预览组件库效果：

<div style="text-align: left;margin: 10px;">
  <img src="../assets/qrcode.png" style="width:300px" />
</div>

### 使用组件库

#### 手动安装

- 下载项目代码

  ```sh
  git clone https://github.com/vivoquickapp/apex-ui.git
  ```

- 拷贝代码

  把项目中的`components`文件夹拷贝到要使用组件库的项目`src`目录下。然后就可以安装自定义组件的使用方式来使用本组件库了。

代码使用 MIT 的协议，所以你可以根据具体的业务场景随意更改代码:P。

如果你对自定义组件的使用还不太熟练，也可在[引入组件的使用文档](https://doc.quickapp.cn/tutorial/overview/project-structure.html?h=%E5%BC%95%E5%85%A5%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6)中按照说明对照进行操作。

#### 自动安装

使用下面两种方式均可安装组件库到项目依赖中。比起手动安装，在需要自定义修改组件以适应自己项目的业务需求方面没有那么方便。

```sh
npm install apex-ui --save  # 使用npm
yarn add apex-ui # 使用yarn
```

### 项目仓库

- [文档](https://github.com/vivoquickapp/apex-ui-docs.git)
- [组件库](https://github.com/vivoquickapp/apex-ui.git)

### 反馈交流

你在使用组件库的过程中遇到任何问题，欢迎在`github`上给我们提[issues](https://github.com/vivoquickapp/apex-ui/issues)。

也可以加微信与我们取得联系。

![技术弟](../assets/vivobro.jpg)
