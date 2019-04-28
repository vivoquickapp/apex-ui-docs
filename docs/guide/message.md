## 全局提示 message

### 描述

轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="../assets/message.gif" style="width:300px" /></div>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="my-message" src="@apex-quickapp/components/message/index"></import>
```

### 示例

```html
<template>
    <div class="wrap">
        <my-button ontap="handleDefault">默认提醒</my-button>
        <my-button ontap="handleSuccess">成功提醒</my-button>
        <my-button ontap="handleWarning">警告提醒</my-button>
        <my-button ontap="handleError">错误提醒</my-button>
        <my-button ontap="handleDuration">自定义持续时间</my-button>
        <my-message id="message"></my-message>
    </div>
</template>
```

```less
.wrap {
    flex-direction: column;
    padding-top: 100px;
}
```

```javascript
export default {
    handleDefault() {
        this.$child('message').showMessage({
            content: '这是一条普通提醒'
        });
    },
    handleSuccess() {
        this.$child('message').showMessage({
            content: '这是一条成功提醒',
            type: 'success'
        });
    },
    handleWarning() {
        this.$child('message').showMessage({
            content: '这是一条警告提醒',
            type: 'warning'
        });
    },
    handleError() {
        this.$child('message').showMessage({
            content: '这是一条错误提醒',
            type: 'error'
        });
    },
    handleDuration() {
        this.$child('message').showMessage({
            content: '我将在 5 秒后消失',
            duration: 5
        });
    }
}
```

### API

#### 组件参数-option

| 属性     | 类型   | 默认值  | 说明                                                 |
| -------- | ------ | ------- | ---------------------------------------------------- |
| content  | String | -       | 提示的内容                                           |
| duration | Number | 2       | 提示持续的时间                                       |
| type     | String | default | 提示的类型，可选值有default，success，warning，error |
| bgColor  | String | -       | 自定义提示的背景色                                   |

#### 组件方法

| 方法名称            | 事件描述 | 参数   |
| ------------------- | -------- | ------ |
| showMessage(option) | 显示提示 | option |
| hideMessage()       | 隐藏提示 | -      |

