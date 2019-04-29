## 导航栏 navbar

### 描述

表单组件，在原生的基础上做了一些拓展，更加美观和方便。

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="../assets/navbar.gif" style="width:300px" /></div>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="my-navbar" src="apex-ui/components/navbar/index"></import>
```

### 示例

```html
<template>
    <div class="wrap">
        <text class="title">默认</text>
        <my-navbar title="导航标题" left-text=" < " right-text="···" ontap="click"></my-navbar>
        <text class="title">自定义</text>
        <my-navbar left-text=" < " right-text="···" ontap="click">
            <text>自定义导航标题</text>
        </my-navbar>
        <text class="title">内置主题</text>
        <my-navbar theme="dark" title="导航标题" left-text=" < " right-text="···" ontap="click"></my-navbar>
        <my-navbar theme="calm" title="导航标题" left-text=" < " right-text="···" ontap="click"></my-navbar>
        <my-navbar theme="royal" title="导航标题" left-text=" < " right-text="···" ontap="click"></my-navbar>
        <my-navbar theme="positive" title="导航标题" left-text=" < " right-text="···" ontap="click"></my-navbar>
        <my-toast id="toast"></my-toast>
    </div>
</template>
```

```less
.wrap {
    flex-direction: column;
    background-color: #f7f7f7;
    .title {
        margin: 20px;
    }
}
```

```javascript
export default {
    click(e) {
        console.log(e.detail.type);
        if (e.detail.type === 'right') {
            this.$child('toast').showToast({
                content: '你点击的是右边！'
            })
        }
        if (e.detail.type === 'left') {
            this.$child('toast').showToast({
                content: '你点击的是左边！'
            })
        }
    }
}
```

### API

#### 组件属性

| 属性      | 类型    | 默认值 | 说明                                                   |
| --------- | ------- | ------ | ------------------------------------------------------ |
| theme     | String  | light  | 导航栏风格，可选值有light、positive、calm、royal、dark |
| title     | String  | -      | 导航的标题                                             |
| leftText  | String  | -      | 左边文字                                               |
| rightText | String  | -      | 右边问题                                               |
| height    | Number  | 100    | 导航高度                                               |
| bgColor   | String  | -      | 背景颜色                                               |
| fixed     | Boolean | False  | 是否固定到顶部                                         |

#### 组件事件

| 事件名称 | 事件描述 | 返回值                  |
| -------- | -------- | ----------------------- |
| tap      | 点击事件 | 点击的位置{type:'left'} |
