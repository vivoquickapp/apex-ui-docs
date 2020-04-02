## 弹出框 popup

### 描述

用于显示弹出框

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="../assets/popup.gif" alt="popup" style="width:300px" /></div>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="my-popup" src="apex-ui/components/popup/index"></import>
```

### 示例

```html
<template>
  <div class="wrap">
    <my-button type="default" ontap="handleClickPopupCenter">Center Popup</my-button>
    <my-button type="default" ontap="handleClickPopupLeft">Left Popup</my-button>
    <my-button type="default" ontap="handleClickPopupBottom">Bottom Popup</my-button>

    <my-popup 
      id="popupCenter"
      position="center"
      title="提示"
      content="确定关闭吗???"
      closable="{{true}}"
      onclose="onclose('Center Popup')"
      onclosed="onclosed('Center Popup')"
    >
      <my-button type="success" ontap="handleClickClose('popupCenter')">确定</my-button>
      <div class="icon-close" slot="close">
        <my-icon type="close-circle-outline" size="40" color="#2c3e50"></my-icon>
      </div>
    </my-popup>

    <my-popup 
      id="popupLeft" 
      position="left"
      title="提示"
      content="确定关闭吗???"
      onclose="onclose('Left Popup')"
      onclosed="onclosed('Left Popup')"
    >
      <my-button type="success" ontap="handleClickClose('popupLeft')">确定</my-button>
    </my-popup>

    <my-popup 
      id="popupBottom" 
      position="bottom"
      title="提示"
      content="确定关闭吗???"
      onclose="onclose('Right Popup')"
      onclosed="onclosed('Right Popup')"
    >
      <my-button type="success" ontap="handleClickClose('popupBottom')">确定</my-button>
    </my-popup>
  </div>
</template>
```

```less
.wrap {
  flex-direction: column;
  justify-content: center;
  .icon-close {
    padding-top: 31px;
    padding-right: 30px;
  }
}
```

```javascript
export default {
  data() {
    return {}
  },
  handleClickPopupCenter(){
    this.$child('popupCenter').show()
  },
  handleClickPopupLeft(){
    this.$child('popupLeft').show()
  },
  handleClickPopupBottom(){
    this.$child('popupBottom').show()
  },
  handleClickClose(popup){
    this.$child(popup).hide()
  },
  onclose(popup){
    console.log(`${popup} 触发 close 事件`)
  },
  onclosed(popup){
    console.log(`${popup} 触发 closed 事件`)
  }
} 
```

### API

#### 组件属性

| 属性         | 类型     | 默认值  | 说明                                                      |
| ------------ | ------- | ------ | ---------------------------------------------------------- |
| background   | String  | '#ffffff'| 背景颜色                                                 |
| title        | String  | -      | 标题                                                       |
| content      | String  | -      | 内容                                                       |
| extra        | String  | -      | 底部内容                                                    |
| position     | String  | center | 弹出层位置信息，可选值为 center、top、right、<br>bottom、left |
| closable     | Boolean | false  | 是否显示关闭按钮                                             |
| mask         | Boolean | true   | 是否显示蒙层                                                |
| maskClosable | Boolean | true   | 点击蒙层是否允许关闭                                         |
| zIndex       | Number  | 1000   | z-index                                                    |
| hasHeader    | Boolean | true   | 是否显示头部内容                                             |
| hasFooter    | Boolean | true   | 是否显示底部内容                                             |

#### 组件事件

| 事情名称 | 事件描述                  | 返回值 |
| ------ | ------------------------- | ------ |
| close  | 点击关闭按钮或蒙层的回调函数 | -      |
| closed | 关闭后的回调函数            | -      |

#### 组件方法

| 方法名称            | 方法描述              | 参数   |
| ------------------- | -------------------- | ----- |
| show                | 显示弹出框            | -      |
| hide                | 隐藏弹出框            | -      |
| handleClickClose    | 点击关闭按钮关闭弹出框 | -      |
| handleClickBackdrop | 点击蒙层关闭弹出框     | -      |

#### slot

| slot名称 | 描述              |
| ------- | ----------------- |
| header  | 自定义 header 内容 |
| default | 自定义 body 内容   |
| footer  | 自定义 footer 内容 |
| close   | 自定义 close icon |
