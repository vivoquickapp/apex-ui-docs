## 标签栏 tabbar

### 描述

位于 应用 底部，方便用户在不同功能模块之间进行快速切换。

### 使用效果

<preview page="tabbar"/>

### 使用方法

```html
<import name="my-tabbar" src="apex-ui/components/tabbar/index"></import>
```


### 示例

```html
<template>
  <div class="wrap">
    <text>页面1</text>
    <my-tabbar tabbar="{{tabbarData}}"></my-tabbar>
  </div>
</template>
```

```js
export default {
    data() {
        return {
            tabbarData: [
                {
                    iconPath: '/images/logo-d.png',
                    selectedIconPath: '/images/logo-d.png',
                    pagePath: '/pages/tabbar',
                    text: 'tab1',
                    active: true
                },
                {
                    iconPath: '/images/logo-d.png',
                    selectedIconPath: '/images/logo-d.png',
                    pagePath: '/pages/tabbar/page1',
                    text: 'tab2',
                    active: false
                },
                {
                    iconPath: '/images/logo-d.png',
                    selectedIconPath: '/images/logo-d.png',
                    pagePath: '/pages/tabbar/page2',
                    text: 'tab3',
                    active: false
                }
            ]
        }
    }
}
```



### API

#### 组件属性

| 属性   | 类型  | 默认值 | 说明                                |
| ------ | ----- | ------ | ----------------------------------- |
| tabbar | Array | [ ]    | tab数据对象数组，对象数据结构见下表 |

#### tabbar

| 属性             | 类型    | 说明                           |
| ---------------- | ------- | ------------------------------ |
| iconPath         | Path    | 非激活状态下的图标路径，非必填 |
| selectedIconPath | Path    | 激活状态下的图标路径，非必填   |
| pagePath         | Path    | 对应的页面路由，必填           |
| text             | String  | tab文本，必填                  |
| active           | Boolean | 是否激活，必填                 |
