## 提示消息 prompt

### 描述

用于展现异常流提示信息。

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="../assets/prompt.gif" alt="prompt" style="width:300px" /></div>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="my-prompt" src="apex-ui/components/prompt/index"></import>
```

### 示例

```html
<template>
    <div class="wrap">
        <my-prompt title="消息提醒" text="提醒你有事情发生了" image="/images/logo-d.png" buttons="{{ buttons }}" ontap="tapHandler"></my-prompt>
        <my-toast id="toast"></my-toast>
    </div>
</template>
```

```javascript
export default {
    data() {
        return {
            buttons: [
                {text: '按钮1', size: 24},
                {text: '按钮2', size: 36, disabled: true}
            ]
        }
    },
    tapHandler(e) {
        this.$child('toast').showToast({
            content: '点击的按钮是：' + e.detail.value.text
        })
    }
}
```

### API

#### 组件属性

| 属性    | 类型    | 默认值 | 说明                         |
| ------- | ------- | ------ | ---------------------------- |
| image   | String  | -      | 传入组件的图片，支持网络图片 |
| title   | String  | -      | 提示的标题                   |
| text    | String  | -      | 需要提示的内容               |
| buttons | Array   | []     | 需要用户交互的按钮           |
| visible | Boolean | true   | 组件是否可见                 |

`buttons`的属性

| 属性     | 类型    | 默认值 | 说明           |
| -------- | ------- | ------ | -------------- |
| text     | String  | -      | 按钮文字       |
| size     | Number  | -      | 按钮文字的大小 |
| disabled | Boolean | false  | 是否禁用按钮   |

#### 组件事件

| 事件名称 | 事件描述                 | 返回值         |
| -------- | ------------------------ | -------------- |
| tap      | 点击了传入组件按钮的事件 | 当前组件的数据 |

