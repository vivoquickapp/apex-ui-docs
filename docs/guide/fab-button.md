## 浮动按钮 fab-button

### 描述

用于展示一个浮动的按钮

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="../assets/fabbutton.gif" style="width:300px" /></div>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="my-fab-button" src="apex-ui/components/fab-button/index"></import>
```

### 示例

```html
<template>
  <div>
    <my-fab-button theme="light" position="topLeft" buttons="{{buttons}}" direction="vertical"></my-fab-button>
    <my-fab-button theme="royal" position="bottomLeft" buttons="{{buttons}}" direction="vertical" reverse="{{true}}"></my-fab-button>
    <my-fab-button position="center" buttons="{{buttons}}" direction="circle"></my-fab-button>
    <my-fab-button theme="dark" position="topRight" buttons="{{buttons}}" reverse="{{true}}"></my-fab-button>
    <my-fab-button theme="calm" position="bottomRight" buttons="{{buttons}}" reverse="{{true}}"></my-fab-button>
  </div>
</template>
```

```javascript
<script>
import prompt from '@system.prompt'
import router from '@system.router'

export default {
  data() {
    return {
      buttons: [
        {
          type: 'primary',
          icon: 'airplane',
          label: 'first label',
          shape: 'circle',
          click: () => {
            console.log('button1')
            prompt.showToast({
              message: 'message' + this.num
            })
          }
        },
        {
          type: 'primary',
          icon: 'alarm',
          label: 'label 2',
          shape: 'circle',
          disabled: true,
          click: () => {
            console.log('button2')
          }
        },
        {
          type: 'primary',
          icon: 'bug',
          label: 'a label 3',
          shape: 'circle',
          click: () => {
            console.log('button3')
            router.push({
              uri: '/pages/accordion'
            })
          }
        },
        {
          type: 'primary',
          icon: 'build',
          label: 'label 4',
          shape: 'circle',
          click: () => {
            console.log('button4')
            console.log(this.num)
            this.test()
          }
        },
      ],
      num: 1
    }
  },

  test() {
    console.log('test')
  }
}
</script>
```

### API

#### 组件属性

| 属性               | 类型     | 默认值        | 说明                                   |
| ------------------ | ------- | ------------ | ------------------------------------- |
| theme              | String  | 'balanced'   | 按钮主题，可选值为 light、stable、positive、calm、assertive、balanced、energized、royal、dark |
| position           | String  | 'center'     | 按钮位置，可选值为 topLeft、topRight、bottomLeft、bottomRight |
| actionButtonIcon   | String  | 'add'        | 操作按钮的图标  |
| actionButtonRotate | Boolean | true         | 点击操作按钮时是否旋转 |
| backdrop           | Boolean | false        | 是否显示背景幕 |
| buttons            | Array   | []           | 按钮数组  |
| direction          | String  | 'horizontal' | 按钮组排列方向，可选值为 horizontal、vertical、circle |
| reverse            | Boolean | false        | 是否反转方向，当 direction 为 horizontal/vertical 时才生效 |

#### buttons[]属性

| 属性     | 类型      | 默认值 | 说明                                 |
| -------- | -------- | ----- | ----------------------------------- |
| icon     | String   | ''    | 按钮图标                             |
| label    | String   | ''    | 按钮标签，当direction为vertical时才显示 |
| disabled | Boolean  | false | 是否禁用                             |
| click    | Function |       | 点击按钮时触发的事件                   |