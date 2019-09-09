## 分页器 pagination

### 描述

当数据量较多时，使用分页可以快速进行数据切换。

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="../assets/pagination.gif" style="width:300px" /></div>

### 使用方法

```html
<import name="my-page" src="apex-ui/components/pagination/index.ux"></import>
```

### 示例

```html
<template>
    <div class="wrap">
        <div class="line">
            <text>默认文字的按钮</text>
            <my-page total="{{total}}" current="{{current}}" ontap="clickPage"></my-page>
        </div>
        <div class="line">
            <text>自定义文字和图标</text>
            <my-page total="{{total}}" current="{{current}}" ontap="clickPage" prev-text="< 上一步" next-text="下一步 >">
            </my-page>
        </div>
        <div class="line">
            <text>隐藏数字</text>
            <my-page total="{{total}}" current="{{current}}" ontap="clickPage" simple="true"></my-page>
        </div>
        <div class="line">
            <text>只显示数字</text>
            <my-page total="{{total}}" current="{{current}}" type="number"></my-page>
        </div>
        <div class="line">
            <text>显示点</text>
            <my-page total="{{total}}" current="{{current}}" type="pointer"></my-page>
        </div>
    </div>
</template>
```

```less
.wrap {
  flex-direction: column;
  .line {
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    margin: 20px 0;
  }
}
```

```js
export default {
    data() {
        return {
            total: 3,
            current: 1
        }
    },
    clickPage(e) {
        console.log(e.detail.type);
        if (e.detail.type === 'prev') {
            this.current --
        }
        if (e.detail.type === 'next') {
            this.current ++

        }
    }
}
```



### API

#### 组件属性

| 属性     | 类型    | 默认值 | 说明                                         |
| -------- | ------- | ------ | -------------------------------------------- |
| current  | Number  | 1      | 当前页                                       |
| total    | Number  | 0      | 总页数                                       |
| prevText | String  | Prev   | 上一页按钮文本                               |
| nextText | String  | Next   | 下一页按钮文本                               |
| type     | String  | button | 类型，可选值为 button、<br />number、pointer |
| simple   | Boolean | false  | 是否隐藏数值                                 |



#### 组件事件

| 事件名称 | 事件描述               | 返回值 |
| -------- | ---------------------- | ------ |
| tap   | 切换页码时触发 | -      |
