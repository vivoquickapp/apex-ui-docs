## 图标 icon

### 描述

提供了丰富的常用icon，可以直接在自己项目中通过简单的配置来使用。

### 图标库

点击图标可复制图标`type`属性到剪贴板，图标下为html实体值，可用于`rating`组件的icon值。

<icon/>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="my-icon" src="@apex-quickapp/components/icon/index"></import>
```

### 示例

```html
<template>
    <my-icon type="info" size="48"></my-icon>
</template>
```

### API

#### 组件属性

| 属性  | 类型   | 默认值  | 说明       |
| ----- | ------ | ------- | ---------- |
| type  | String | 'empty' | 图标的类型 |
| size  | Number | 14      | 图标的大小 |
| color | String | -       | 图标的颜色 |

