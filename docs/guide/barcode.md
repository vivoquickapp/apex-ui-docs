## 条形码 barcode

### 描述

用于展现条形码。支持多种格式条码。条码绘制及计算源码由[JsBarcode](https://github.com/lindell/JsBarcode)修改而来。

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="../assets/barcode.gif" alt="barcode" style="width:300px" /></div>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="my-barcode" src="apex-ui/components/barcode/index"></import>
```

### 示例

```html
<template>
  	<my-barcode height="260" width="600" font-size="50" value="524324543" format="CODE128"></my-barcode>
</template>
```

### API

#### 组件属性

| 属性         | 类型    | 默认值    | 说明                                                         |
| ------------ | ------- | --------- | ------------------------------------------------------------ |
| value        | String  | -         | 条形码的数值                                                 |
| displayValue | Boolean | true      | 是否显示条形码的数值                                         |
| format       | String  | 'CODE128' | 条形码的格式类型，[支持类型](https://github.com/lindell/JsBarcode/wiki) |
| width        | Number  | 400       | 条码宽度                                                     |
| height       | Number  | 150       | 条码高度                                                     |
| font         | String  | ''        | 文字字体                                                     |
| fontSize     | Number  | 20        | 文字大小                                                     |
| fontOptions  | String  | ''        | 文字样式"bold" "italic"                                      |
| text         | String  | ''        | 文字内容，默认为空，显示value的值                            |
| textAlign    | String  | 'center'  | 文字对齐方式                                                 |
| textPosition | String  | 'bottom'  | 文字位置                                                     |
| textMargin   | Number  | 2         | 文字外边距                                                   |
| background   | String  | '#FFFFFF' | 条码背景色                                                   |
| lineColor    | String  | '#000000' | 条码颜色                                                     |
| margin       | Number  | 10        | 条码外边距                                                   |
| marginTop    | Number  | -         | 条码上边距                                                   |
| marginBottom | Number  | -         | 条码下边距                                                   |
| marginLeft   | Number  | -         | 条码左边距                                                   |
| marginRight  | Number  | -         | 条码右边距                                                   |
| options      | Object  | {}        | 额外配置项，用于不同格式条码的自定义配置                     |

#### 组件事件

| 事件名称 | 事件描述           | 返回值 |
| -------- | ------------------ | ------ |
| valid    | 条码值验证结果事件 | valid  |