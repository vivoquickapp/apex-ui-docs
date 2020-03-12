## 页底提示 loadMore

### 描述

提示底部加载状态

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="../assets/loading.gif" alt="iot-load-more" style="width:300px" /></div>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="my-load-more" src="apex-ui/components/load-more/index"></import>
```

### 示例

```html
<template>
    <div class="wrap">
        <my-load-more></my-load-more>
        <my-load-more tip="暂无数据" loading="{{ false }}"></my-load-more>
        <my-load-more loading="{{ false }}"></my-load-more>
    </div>
</template>
```

```less
.wrap {
    flex-direction: column;
    padding: 20px;
    .title {
        margin: 20px;
    }
}
```

### API

#### 组件属性

| 属性    | 类型    | 默认值 | 说明       |
| ------- | ------- | ------ | ---------- |
| loading | Boolean | true   | 显示加载中 |
| tip     | String  | -      | 提示文字   |
| bgColor | String  | #ffffff| 文字背景色 |
