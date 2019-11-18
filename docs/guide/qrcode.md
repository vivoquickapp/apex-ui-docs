## 二维码 qrcode

### 描述

用于生成和展示二维码。

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="../assets/qrcode.gif" alt="qrcode" style="width:300px" /></div>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="my-qrcode" src="apex-ui/components/qrcode/index"></import>
```

### 示例

```html
<template>
  <div class="wrap">
    <text class="note">请输入文字，即使输入即时生成</text>
    <my-input value="{{content}}" placeholder="请输入要生成二维码的内容" onchange="changeHandler()"></my-input>
    <my-qrcode content="{{content}}"></my-qrcode>
    <text class="note">提示：长按二维码可保存到相册</text>
  </div>
</template>
```

### API

#### 组件属性

| 属性              | 类型    | 默认值  | 说明                         |
| ----------------- | ------- | ------- | ---------------------------- |
| content           | string  | -       | 二维码内容                   |
| height            | number  | 400     | 二维码画布高度               |
| width             | number  | 400     | 二维码画布宽度               |
| bgColor           | string  | 'white' | 二维码画布背景色             |
| fgColor           | string  | 'black' | 二维码画布前景色             |
| save              | boolean | true    | 是否启用长按二维码保存到相册 |
| typeNumber        | number  | -1      | 类型                         |
| errorCorrectLevel | number  | 2       | 误差校正等级                 |

