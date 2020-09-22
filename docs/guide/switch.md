## 滑动按钮 switch

### 描述

在两种状态间切换时用到的开关选择器。

### 使用效果

<preview page="switch"/>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="my-switch" src="apex-ui/components/switch/index"></import>
```

### 示例

```html
<template>
    <div class="wrap">
        <div class="line">
            <text>基本用法</text>
            <my-switch value="true" onchange="changeHandler"></my-switch>
        </div>
        <div class="line">
            <text>自定义内容</text>
            <my-switch open="open" close="关闭"></my-switch>
        </div>
        <div class="line">
            <text>图标</text>
            <my-switch open="&#xe975;"></my-switch>
        </div>
        <div class="line">
            <text>禁止切换</text>
            <my-switch disabled="true"></my-switch>
        </div>
    </div>
</template>
```

```less
.wrap {
    flex-direction: column;
    .line {
        flex-direction: row;
        justify-content: space-between;
        height: 100px;
        border-bottom-color: #bbbec4;
        border-bottom-width: 1px;
        width: 100%;
        align-items: center;
        padding: 0 20px;
    }
}
```

```javascript
export default {
    changeHandler(e) {
        console.log('switch changed!', e);
    }
}
```

### API

#### 组件属性

| 属性     | 类型    | 默认值 | 说明                                           |
| -------- | ------- | ------ | ---------------------------------------------- |
| value    | String  | false  | 组件当前状态                                   |
| open     | Number  | -      | 开启状态显示的文字，支持图标库图标的html实体值 |
| close    | Number  | -      | 关闭状态显示的文字，支持图标库图标的html实体值 |
| disabled | Boolean | false  | 是否禁用                                       |
| name     | String  | -      | 开关的名称                                     |

#### 组件事件

| 事件名称 | 事件描述                 | 返回值                       |
| -------- | ------------------------ | ---------------------------- |
| change   | 组件状态发生改变时的事件 | {checked:checked, name:name} |
