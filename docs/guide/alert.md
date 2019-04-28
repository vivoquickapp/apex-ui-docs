## 警告提示 alert

### 描述

用于展示静态数据，提醒警示用户，也可手动关闭提示。

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="../assets/alert.gif" style="width:300px" /></div>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="my-alert" src="@apex-quickapp/components/alert/index"></import>
```

### 示例

```html
<template>
    <div style="flex-direction:column;">
        <my-alert value="An alert info" type="info"></my-alert>
        <my-alert value="An alert info" type="success"></my-alert>
        <my-alert value="An alert info" type="warning"></my-alert>
        <my-alert value="An alert info" type="error"></my-alert>
        <my-alert value="An alert info" desc="Some description about alert component" type="info"></my-alert>
        <my-alert value="An alert info" desc="Some description about alert component" type="success"></my-alert>
        <my-alert value="An alert info" desc="Some description about alert component" type="warning"></my-alert>
        <my-alert value="An alert info" desc="Some description about alert component" type="error"></my-alert>
        <my-alert value="An alert info" show-icon="true" type="info"></my-alert>
        <my-alert value="An alert info" show-icon="true" type="success"></my-alert>
        <my-alert value="An alert info" show-icon="true" type="warning"></my-alert>
        <my-alert value="An alert info" show-icon="true" type="error"></my-alert>
        <my-alert value="An alert info" show-icon="true" desc="Some description about alert component" type="info"></my-alert>
        <my-alert value="An alert info" show-icon="true" desc="Some description about alert component" type="success"></my-alert>
        <my-alert value="An alert info" show-icon="true" desc="Some description about alert component" type="warning"></my-alert>
        <my-alert value="An alert info" show-icon="true" desc="Some description about alert component" type="error"></my-alert>
        <my-alert value="An alert info" closable="true" type="info"></my-alert>
        <my-alert value="An alert info" closable="true" show-icon="true" desc="Some description about alert component" type="success"></my-alert>
    </div>
</template>
```

### API

#### 组件属性

| 属性      | 类型    | 默认值 | 说明                                                         |
| --------- | ------- | ------ | ------------------------------------------------------------ |
| type      | String  | 'info' | 警告提示样式，可选值有 'info'、'success'、'warning'、'error' |
| closable  | Boolean | false  | 是否可以关闭                                                 |
| show-icon | Boolean | false  | 是否显示图标                                                 |
| title     | String  | ''     | 警告标题                                                     |
| desc      | String  | ''     | 警告内容描述                                                 |

#### 组件事件

| 事件名称 | 事件描述         | 返回值 |
| -------- | ---------------- | ------ |
| close    | 点击关闭按钮触发 | -      |

