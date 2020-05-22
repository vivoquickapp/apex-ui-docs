## 搜索栏 searchBar

### 描述

用于展现搜索栏，提醒用户输入相关内容进行搜索。

### 使用效果

<div style="text-align: center; margin: 40px; "><img src="../assets/search-bar.gif" alt="search-bar" style="width:300px" /></div>

### 使用方法

在 `.ux` 文件中引入组件

``` html
<import name="my-search-bar" src="apex-ui/components/search-bar/index"></import>
```

### 示例

``` html
<template>
    <div class="wrap">
        <text class="title">Normal</text>
        <my-search-bar></my-search-bar>
        <text class="title">Focus</text>
        <my-search-bar input-focus="{{true}}"></my-search-bar>
        <text class="title">Show cancel button</text>
        <my-search-bar has-cancel="{{true}}"></my-search-bar>
    </div>
</template>
```

``` less
.wrap {
  flex-direction: column;
  background-color: #f8f8f8;
  .title {
    padding: 30px;
  }
}
```

``` javascript
export default {
    
}
```

### API

#### 组件属性
        
| 属性                       | 类型     | 默认值            | 说明                                                                             |
|---------------------------|----------|-------------------|-------------------------------------------------------------------------------- |
| has-cancel                | Boolean  | false             | 是否一直显示取消按钮                                                              |
| placeholder-color         | String   | 'rgb(128,128,128) | 占位符文字颜色                                                                   |
| placeholder               | String   | '搜索'            | 占位符文字                                                                       |
| maxlength                 | Number   | -                 | 最大输入长度,默认不限制                                                           |
| pix-class                 | String   | 'wrap'            | 根节点样式类                                                                     |
| disabled                  | Boolean  | false             | 是否禁用                                                                         |
| cancelText                | String   | -                 | 自定义取消按钮的文字                                                              |
| input-focus               | Boolean  | false             | 获取焦点                                                                         |
| input-value               | String   | ''                | 输入框的默认值                                                                    |
| clear                     | Boolean  | true              | 是否显示清除图标                                                                  |
| select                    | Boolean  | false             | 选中文本框的全部文本                                                              |
| selection-start           | Number   | -                 | 光标起始位置，自动聚集时有效，需与selection-end搭配使用                             |
| selection-end             | Number   | -                 | 光标结束位置，自动聚集时有效，需与selection-start搭配使用                           |
| enterkeytype              | String   | 'default'         | 设置软键盘 Enter 按钮的显示文本,可选值: default \| send \| search \| next \| go \| done |

#### 组件事件

| 事件名称         | 事件描述                    | 返回值 |
| --------        | -------------------------- | ------ |
| change          | 值发生变化时触发事件         | event  |
| focus           | 获得焦点触发事件             | event  |
| blur            | 失去焦点触发事件             | event  |
| cancel          | 点击取消按钮触发事件         | event  |
| clear           | 点击清除按钮触发事件         | event  |
| enterKeyClick   | 软键盘 Enter 键点击事件      | event  |
| selectionchange | 选中文本改变和光标移动时触发  | event  |



