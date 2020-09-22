## 验证码 vcode

### 描述

用于生成验证码

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="../assets/vcode.gif" alt="vcode" style="width:300px" /></div>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="my-vcode" src="apex-ui/components/vcode/index"></import>
```

### 示例

```html
<template>
    <div>
        <div class="wrap">
            <div class="row">
                <my-input title="验证码" value="{{content}}" placeholder="请输入验证码" onchange="changeHandler()"></my-input>
                <my-vcode onchange="changeHandler()"></my-vcode>
            </div>
            <div class="row">
                <my-input title="验证码" value="{{content}}" placeholder="请输入验证码" onchange="changeHandler()"></my-input>
                <my-vcode onchange="changeHandler()"></my-vcode>
            </div>
            <text>tips:点击验证码可刷新</text>
        </div>
    </div>
</template>
```

```less
.wrap {
    padding: 20px;
    flex-direction: column;

    .row {
        padding: 20px 0;
    }

    text {
        padding: 20px;
    }
}
```

### API

#### 组件属性

| 属性      | 类型    | 默认值               | 说明           |
| --------- | ------- | -------------------- | -------------- |
| str       | String  | 英文字母大小写及数字 | 验证码范围     |
| num       | Number  | 6                    | 验证码长度     |
| width     | Number  | 240                  | 画布宽度       |
| height    | Number  | 80                   | 画布高度       |
| bgColor   | String  | -                    | 画布背景色     |
| fontColor | String  | -                    | 画布字体颜色   |
| hasPoint  | Boolean | true                 | 是否显示干扰点 |
| hasLine   | Boolean | true                 | 是否显示干扰线 |
| id        | String  | 'canvasId'           | canvas id,使用华为引擎时必传                    |

#### 组件事件

| 事件名称 | 事件描述                 | 返回值        |
| -------- | ------------------------ | ------------- |
| change   | 验证码改变后的触发的事件 | {value:value} |
