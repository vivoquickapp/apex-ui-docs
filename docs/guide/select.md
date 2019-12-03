## 下拉框 select

### 描述

用于弹出一个下拉菜单给用户选择操作。

### 使用效果

<div style="text-align: center; margin: 40px; "><img src="../assets/select.gif" style="width:300px" /></div>

### 使用方法

在 `.ux` 文件中引入组件

``` html
<import name="my-select" src="apex-ui/components/select/index"></import>
```

### 示例

``` html
<template>
    <div class="wrap">
        <div class="item" onclick="singleSelect">
            <text class="type">单选</text>
            <div class="icon">
                <text>{{result1}}</text>
                <my-icon type="arrow-fwd" size="40"></my-icon>
            </div>
        </div>
        <div class="item" onclick="multiSelect">
            <text class="type">多选</text>
            <div class="icon">
                <text>{{result2}}</text>
                <my-icon type="arrow-fwd" size="40"></my-icon>
            </div>
        </div>
        <div class="item" onclick="customSelect">
            <text class="type">自定义个数</text>
            <div class="icon">
                <text>{{result3}}</text>
                <my-icon type="arrow-fwd" size="40"></my-icon>
            </div>
        </div>
        <my-select id="select1" oncomfirm="singleClose"></my-select>
        <my-select id="select2" oncomfirm="multiClose"></my-select>
        <my-select id="select3" oncomfirm="customClose"></my-select>
    </div>
</template>
```

``` less
.wrap {
  flex: 1;
  width: 100%;
  background-color: #f9f9f9;
  flex-direction: column;
  justify-content: center;
  .item {
    border: 1px solid #eeeeee;
    background-color: #fff;
    height: 80px;
    width: 100%;
    padding-left: 20px;
    align-items: center;
    justify-content: space-between;
    .type {
      height: 80px;
      width: 40%;
      justify-content: space-between;
    }
    .icon {
      justify-content: space-between;
    }
  }
}
```

``` javascript
export default {
    data: {
        result1: "请选择",
        result2: "请选择",
        result3: "请选择",
        opt1: []
    },
    singleSelect() {
        let opt = ["苹果", "梨子", "西瓜", "荔枝", "榴莲", "番石榴"]
        this.$child('select1').showSelect({
            options: opt,
        })
    },
    multiSelect() {
        let opt = ["医生", "法官", "律师", "教师", "警察", "护士", "会计"]
        this.$child('select2').showSelect({
            options: opt,
            type: 'checkBox'
        })
    },
    customSelect() {
        let opt = ["北京", "伦敦", "东京", "巴黎", "罗马", "柏林", "哥本哈根", "曼谷"]
        this.$child('select3').showSelect({
            options: opt,
            type: 'checkBox',
            max: 3
        })
    },
    singleClose(evt) {
        this.result1 = evt.detail.data || "请选择"
    },
    multiClose(evt) {
        this.result2 = evt.detail.data || "请选择"
    },
    customClose(evt) {
        this.result3 = evt.detail.data || "请选择"
    },
}
```

### API

#### 组件参数-

| 属性     | 类型    | 默认值  | 说明                                                         |
| -------- | ------- | ------- | ------------------------------------------------------------ |
| options  | Array  | -       | 自定义可选项个数                                |
| type    | String  | radio   | 下拉框类型:'checkBox'|'radio'                     |
| max     | Number  | -1      | 自定义可选项的最大个数(type为checkBox时)                         |

#### 组件事件

| 事件名称 | 事件描述                  | 返回值                       |
| -------- | ------------------------ | ---------------------------- |
| confirm   | 点击返回所选项      | event|

#### 组件方法

| 方法名称          | 事件描述 | 参数   |
| ----------------- | -------- | ------ |
| showToast(option) | 显示提示 | option |
| hideToast()       | 隐藏提示 | -      |

