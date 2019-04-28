## 分段器 segmented-control

### 描述

分段器由至少 2 个分段控件组成，用作不同视图的显示，预设 9 种颜色 `light`, `stable`, `positive`, `calm`, `assertive`, `balanced`, `energized`, `royal`, `dark` 可选用。

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="../assets/segment.gif" style="width:300px" /></div>

### 使用方法

```html
<import name="my-segmented-control" src="@apex-quickapp/segmented-control/index.ux"></import>
```


### 示例

```html
<template>
    <div class="wrap">
        <div class="sub-title"><text>默认</text></div>
        <my-segmented-control values="{{ segments2 }}" ></my-segmented-control>
        <div class="sub-title"><text>主题色</text></div>
        <my-segmented-control theme="light" values="{{ segments2 }}"></my-segmented-control>
        <my-segmented-control theme="stable" values="{{ segments2 }}" ></my-segmented-control>
        <my-segmented-control theme="positive" values="{{ segments2 }}" ></my-segmented-control>
        <my-segmented-control theme="calm" values="{{ segments2 }}" ></my-segmented-control>
        <my-segmented-control theme="balanced" values="{{ segments2 }}" ></my-segmented-control>
        <my-segmented-control theme="energized" values="{{ segments2 }}" ></my-segmented-control>
        <my-segmented-control theme="assertive" values="{{ segments2 }}" ></my-segmented-control>
        <my-segmented-control theme="royal" values="{{ segments2 }}" ></my-segmented-control>
        <my-segmented-control theme="dark" values="{{ segments2 }}" ></my-segmented-control>
        <div class="sub-title"><text>禁用</text></div>
        <my-segmented-control disabled values="{{ segments2 }}" ></my-segmented-control>
        <div class="sub-title"><text>默认当前页</text></div>
        <my-segmented-control current="{{currentPage}}" values="{{ segments3 }}" onchange="changePage"></my-segmented-control>
    </div>
</template>
```





```less
.wrap {

  flex-direction: column;

  padding: 20px;

  .sub-title {

	   margin: 20px 0;

  }

}
```



```js
export default {
    data() {
        return {
            currentPage: 1,
            segments2: [
              'Segment1', 'Segment2'
            ],
            segments3: [
              'Segment1', 'Segment2', 'Segment3'
            ],
        }
    },
    changePage(e) {
        console.log(e.detail.index)
        this.currentPage = e.detail.index
    }
}
```

### API

#### 组件属性

| 属性     | 类型    | 默认值   | 说明                                                         |
| -------- | ------- | -------- | ------------------------------------------------------------ |
| theme    | String  | balanced | 主题，可选值有light,stable,positive,calm,<br />balanced,energized,assertive,royal,dark,light-inverse,stable-inverse |
| values   | Array   | [ ]      | 选项数组                                                     |
| disabled | Boolean | false    | 是否禁用                                                     |
| current  | Number  | 0        | 当前激活的tab面板的index                                     |



#### 组件事件

| 事件名称 | 事件描述       | 返回值 |
| -------- | -------------- | ------ |
| change   | 切换面板时触发 |    -    |

