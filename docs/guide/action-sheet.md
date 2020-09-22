## 上拉菜单 actionSheet

### 描述

从底部弹出的模态框，提供和当前场景相关的操作菜单。

### 使用效果

<preview page="action-sheet"/>

### 使用方法

在 `.ux` 文件中引入组件

``` html
<import name="my-action-sheet" src="apex-ui/components/actionSheet/index"></import>
```

### 示例

``` html
<template>
  <div class="wrap">
    <my-button type="default" ontap="actionSheet('default')">Default ActionSheet</my-button>
    <my-button type="default" ontap="actionSheet('iOS')">iOS ActionSheet</my-button>

    <my-action-sheet id="actionSheet"></my-action-sheet> 
  </div>
</template>
```

``` less
.wrap {
  flex-direction: column;
  justify-content: center;
}
```

``` javascript
export default {
  data() {
    return {
      timerActionSheet: null
    }
  },
  actionSheet(theme){
    if(this.timerActionSheet) clearTimeout(this.timerActionSheet)

    this.$child('actionSheet').showSheet({
      theme,
      titleText: '三秒后自动关闭',
      buttons: [{
        text: '回到首页',
        icon: {
          type: 'share-alt',
          position: 'right'
        }
      },{
        text: 'Disabled',
        disabled: true
      }],
      buttonClicked: (index,item)=>{
        if(index==0){
          const router = require('@system.router')
          router.clear()
          router.replace({uri: '/'})
        }
        return true
      },
      cancelText: '取消',
      cancel: ()=>{
        console.log('取消按钮或蒙层点击事件')
      },
      destructiveText: '删除',
      destructiveButtonClicked: ()=>{
        console.log('删除按钮点击事件')
        return true
      }
    })

    this.timerActionSheet = setTimeout(()=>{
      this.$child('actionSheet').hideSheet()
    }, 3000)
  }
} 
```

### API

#### 组件参数-options

| 属性                     | 类型      | 默认值      | 说明                                       |
| ------------------------ | -------- |-------------|--------------------------------------------|
| theme                    | String   | 'default'   | 菜单皮肤，可选值为 default、iOS              |
| titleText                | String   | -           | 标题                                       |
| buttons                  | Array    | []          | 按钮                                       |
| buttons[].text           | String   | -           | 按钮的文本                                  |
| buttons[].icon           | Object   | {}          | 按钮的图标                                  |
| buttons[].icon.type      | String   | 'share-alt' | 图标                                       |
| buttons[].icon.size      | String   | '40'        | 图标的大小                                  |
| buttons[].icon.color     | String   | '#495060'   | 图标的颜色                                  |
| buttons[].icon.position  | String   | 'left'      | 图标的位置，可选值为 left、right             |
| buttons[].disabled       | Boolean  | false       | 按钮是否禁用                                |
| buttonClicked            | function | -           | 按钮点击事件，返回值为 true 时将会<br>关闭组件 |
| cancelText               | string   | '取消'      | 取消按钮的文本                               |
| cancel                   | function | -           | 取消按钮或蒙层点击事件                        |
| destructiveText          | string   | -           | 删除按钮的文本                               |
| destructiveButtonClicked | function | -           | 删除按钮点击事                               |

#### 组件方法

| 方法名称    | 方法描述           | 参数    |
| ---------- | ------------------ | ------- |
| showSheet  | 显示上拉菜单        | options |
| hideSheet  | 隐藏上拉菜单        | -       |
| closeSheet | 触发取消按钮方法    | -       |

