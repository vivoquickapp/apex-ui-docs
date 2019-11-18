## 条形码 barcode

### 描述

用于展现条形码。

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
  <div class="wrap">
    <div class="panel">
      <my-input value="{{ number }}" type="number" maxlength="13" onchange="changeHandler()" placeholder="请输入13位有效条形码编码"></my-input>
      <text>提示：扫描只能识别有效的条形码</text>
      <div class="barcode">
        <my-barcode number="{{ number }}"></my-barcode>
      </div>
    </div>
  </div>
</template>
```

### API

#### 组件属性

| 属性              | 类型     | 默认值 | 说明                       |
| ----------------- | -------- | ------ | -------------------------- |
| number            | Number   | -      | 条形码的数值               |
| width             | Number   | 400    | 条码宽度                   |
| height            | Number   | 150    | 条码高度                   |
| options           | Object   | -      | 配置项                     |
| options.number    | Boolean  | true   | 是否显示数字               |
| options.prefix    | Boolean  | true   | 是否显示国家前缀           |
| options.color     | String   | black  | 条形码的颜色               |
| options.debug     | Boolean  | false  | 是否开启调试               |
| options.onValid   | Function | -      | 验证条形码合法的回调函数   |
| options.onInvalid | Function | -      | 验证条形码不合法的回调函数 |
| options.onSuccess | Function | -      | 接口调用成功的回调函数     |
| options.onError   | Function | -      | 接口调用失败的回调函数     |
