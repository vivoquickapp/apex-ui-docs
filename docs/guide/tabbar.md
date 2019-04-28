## 标签栏 tabbar

### 描述

位于 应用 底部，方便用户在不同功能模块之间进行快速切换。

### 使用效果
<div style="text-align: center;margin: 40px;"><img src="" style="width:300px" /></div>

### 使用方法

```html
<import name="my-tabbar" src="@apex-quickapp/tabbar/index"></import>
```


### 示例

```html
<template>
  <my-tabbar tabbar="{{tabbarData}}"></my-tabbar>
</template>
```

```js
export default {
        data() {
            return {
                tabbarData: [
                    {
                        iconPath: '/assets/images/logo-d.png',
                        selectedIconPath: '/assets/images/logo.png',
                        pagePath: '/pages/home',
                        text: 'tab',
                        active: true
                    },
                    {
                        iconPath: '/assets/images/logo-d.png',
                        selectedIconPath: '/assets/images/logo.png',
                        pagePath: '/pages/home',
                        text: 'tab',
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

