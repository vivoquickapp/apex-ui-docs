## 分割符 divider

### 描述

用于让用户在表单选择多个信息项。

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="../assets/devider.jpg" alt="divider" style="width:300px" /></div>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="my-divider" src="apex-ui/components/divider/index"></import>
```

### 示例

```html
<template>
    <div class="wrap">
        <text class="title">基本用法</text>
        <my-divider content="加载已经完成,没有其他数据"></my-divider>
        <my-divider content="加载已经完成,没有其他数据" color="#2d8cf0" line-color="#2d8cf0"></my-divider>
        <my-divider content="加载已经完成,没有其他数据" line-color="#2d8cf0"></my-divider>
        <my-divider content="加载已经完成,没有其他数据" color="#ed3f14" line-color="#ed3f14"></my-divider>
        <my-divider content="加载已经完成,没有其他数据" color="#ff9900" line-color="#ff9900"></my-divider>
        <text class="title">自定义内容</text>
        <my-divider color="#2d8cf0" line-color="#2d8cf0"><text>加载已经完成,没有其他数据</text></my-divider>
        <my-divider color="#ed3f14" line-color="#ed3f14"><text>加载已经完成,没有其他数据</text></my-divider>
    </div>
</template>
```

```less
.wrap {
    flex-direction: column;
    flex-wrap: wrap;
    .title {
        margin: 20px;
    }
}
```

### API

#### 组件属性

| 属性      | 类型   | 默认值    | 说明           |
| --------- | ------ | --------- | -------------- |
| content   | String | -         | 分割线提示内容 |
| height    | Number | 48        | 分割线组件高度 |
| color     | String | '#80848f' | 分割线文字颜色 |
| lineColor | String | '#e9eaec' | 分割线线的颜色 |
| size      | Number | 24        | 提示文字大小   |
