## 头像 avatar

### 描述

用来代表用户和其他物品，支持显示图片和文字。

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="../assets/avatar.jpg" style="width:300px" /></div>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="my-avatar" src="@apex-quickapp/components/avatar/index"></import>
```

### 示例

```html
<template>
    <div class="wrap">
        <text class="title">圆形</text>
        <div class="group">
            <my-avatar size="small">张</my-avatar>
            <my-avatar>张</my-avatar>
            <my-avatar size="large">张</my-avatar>
        </div>
        <text class="title">方形</text>
        <div class="group">
            <my-avatar size="small" shape="square">A</my-avatar>
            <my-avatar shape="square">A</my-avatar>
            <my-avatar size="large" shape="square">A</my-avatar>
        </div>
        <text class="title">图片</text>
        <div class="group">
            <my-avatar src="/assets/images/logo-d.png" size="small"></my-avatar>
            <my-avatar src="/assets/images/logo-d.png" size="default"></my-avatar>
            <my-avatar src="/assets/images/logo-d.png" size="large"></my-avatar>
        </div>
        <div class="group">
            <my-avatar src="/assets/images/logo-d.png" size="small" shape="square"></my-avatar>
            <my-avatar src="/assets/images/logo-d.png" size="default" shape="square"></my-avatar>
            <my-avatar src="/assets/images/logo-d.png" size="large" shape="square"></my-avatar>
        </div>
    </div>
</template>
```

```less
.wrap {
    flex-direction: column;
    .title {
        padding: 10px 80px;
    }
    .group {
        flex-direction: row;
        justify-content: space-around;
        margin: 10px 0;
    }
}
```

### API

#### 组件属性

| 属性  | 类型   | 默认值    | 说明                                               |
| ----- | ------ | --------- | -------------------------------------------------- |
| shape | String | 'circle'  | 指定组件形状，可选值有 'circle'、'square'          |
| size  | String | 'default' | 设置组件大小，可选值有 'small'、'default'、'large' |
| src   | String | -         | 设置图片类头像的资源地址                           |

