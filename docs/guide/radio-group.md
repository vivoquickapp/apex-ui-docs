## 单选框组 radioGroup

### 描述

用于给表单中的单选框分组，提供了多个相关单选框的操作方法。需要配合`radio`使用。

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="../assets/radio.gif" style="width:300px" /></div>

### 使用方法

在`.ux`文件中引入组件，使用了此组件的radio必须传入`group`属性，值为group组件的`id`。

```html
<import name="my-radio-group" src="@apex-quickapp/components/radio-group/index"></import>
```

### 示例

```html
<template>
    <div class="wrap">
        <text class="title">组合</text>
        <my-radio-group id="myGroup" current="{{current}}" onchange="handleFruitChange">
            <my-radio group="myGroup" for="{{fruit}}" position="{{position}}" value="{{$item.name}}"></my-radio>
        </my-radio-group>
        <my-button onclick="handleClick" type="ghost">切换单选框位置</my-button>
        <text class="title">单个</text>
        <my-radio value="{{animal}}" disabled="{{disabled}}" checked="{{checked}}" onchange="handleAnimalChange"></my-radio>
        <my-button onclick="handleDisabled" type="ghost">切换disabled状态</my-button>
    </div>
</template>
```

```less
.wrap {
    flex-direction: column;
    background-color: #f7f7f7;
    .title {
        margin: 20px;
    }
}
```

```javascript
export default {
    data() {
        return {
            fruit: [{
                id: 1,
                name: '香蕉',
                checked: false
            }, {
                id: 2,
                name: '苹果',
                checked: true
            }, {
                id: 3,
                name: '西瓜',
                checked: false
            }, {
                id: 4,
                name: '葡萄',
                checked: false
            }],
            current: '苹果',
            position: 'left',
            animal: '熊猫',
            checked: false,
            disabled: false,
        }
    },
    handleFruitChange({detail}) {
        this.current = detail.value;
    },
    handleClick() {
        this.position = this.position.indexOf('left') !== -1 ? 'right' : 'left';
    },
    handleDisabled() {
        this.disabled = !this.disabled;
    },
    handleAnimalChange({detail}) {
        this.checked = detail.current;
    },
}
```

### API

#### 组件属性

| 属性    | 类型   | 默认值 | 说明                           |
| ------- | ------ | ------ | ------------------------------ |
| current | String | -      | 默认处于选中状态的radio的值    |
| id      | String | -      | 组的id，用于区分不同组，必填项 |

#### 组件事件

| 事件名称 | 事件描述               | 返回值                         |
| -------- | ---------------------- | ------------------------------ |
| change   | 单选框值发生变化的事件 | {current:current, value:value} |

