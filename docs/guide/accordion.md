## 手风琴 accordion

### 描述

可以折叠/展开的内容区域

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="../assets/accordion.gif" style="width:300px" alt="accordion"/></div>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="my-accordion" src="apex-ui/components/accordion/index.ux"></import>
<import name="my-accordion-group" src="apex-ui/components/accordion-group/index.ux"></import>
```

### 示例

```html
<template>
  <div class="wrap">
    <my-accordion-group id="default" title="Default" default-open="{{ ['0', '1'] }}" onchange="handleChange">
      <my-accordion group-id="default" title="Accordion 1" content="自定义组件自定义组件自定义组件自定义组件自定义组件"></my-accordion>
      <my-accordion group-id="default" title="Accordion 2" content="自定义组件自定义组件自定义组件自定义组件自定义组件"></my-accordion>
      <my-accordion group-id="default" title="Accordion 3" content="自定义组件自定义组件自定义组件自定义组件自定义组件"></my-accordion>
    </my-accordion-group>
    <my-accordion-group id="default2" title="thumb" default-open="{{ ['0'] }}">
      <my-accordion group-id="default2" thumb="../../images/logo-d.png" title="Accordion 4" content="自定义组件自定义组件自定义组件自定义组件自定义组件"></my-accordion>
      <my-accordion group-id="default2" thumb="../../images/logo-d.png" title="Accordion 5" content="自定义组件自定义组件自定义组件自定义组件自定义组件"></my-accordion>
      <my-accordion group-id="default2" thumb="../../images/logo-d.png" title="Accordion 6" content="自定义组件自定义组件自定义组件自定义组件自定义组件"></my-accordion>
    </my-accordion-group>
    <my-accordion-group id="default3" title="disabled">
      <my-accordion group-id="default3" disabled="{{true}}" title="Accordion 7" content="自定义组件自定义组件自定义组件自定义组件自定义组件"></my-accordion>
      <my-accordion group-id="default3" disabled="{{true}}" title="Accordion 8" content="自定义组件自定义组件自定义组件自定义组件自定义组件"></my-accordion>
      <my-accordion group-id="default3" disabled="{{true}}" title="Accordion 9" content="自定义组件自定义组件自定义组件自定义组件自定义组件"></my-accordion>
    </my-accordion-group>
    <my-accordion-group id="default4" title="accordion模式" accordion="{{true}}" default-open="{{ ['0'] }}">
      <my-accordion group-id="default4" title="Accordion 10" content="自定义组件自定义组件自定义组件自定义组件自定义组件"></my-accordion>
      <my-accordion group-id="default4" title="Accordion 11" content="自定义组件自定义组件自定义组件自定义组件自定义组件"></my-accordion>
      <my-accordion group-id="default4" title="Accordion 12" content="自定义组件自定义组件自定义组件自定义组件自定义组件"></my-accordion>
    </my-accordion-group>
    <my-accordion-group id="default5" title="custom key" label="label" default-open="{{ ['0', '2'] }}">
      <my-accordion group-id="default5" key="key1" title="Accordion 13" content="自定义组件自定义组件自定义组件自定义组件自定义组件"></my-accordion>
      <my-accordion group-id="default5" key="key2" title="Accordion 14" content="自定义组件自定义组件自定义组件自定义组件自定义组件"></my-accordion>
      <my-accordion group-id="default5" key="key3" title="Accordion 15" content="自定义组件自定义组件自定义组件自定义组件自定义组件"></my-accordion>
    </my-accordion-group>
  </div>
</template>
```

```less
<style>
.wrap{
  flex-direction: column;
}
</style>
```

```javascript
<script>
export default {
  handleChange(e){
    console.log('index',e.detail.key)
  }
}
</script>
```

### API

#### accordion-group组件属性

| 属性        | 类型      | 默认值 | 说明                                   |
| ----------- | -------- | ----- | ------------------------------------- |
| defaultOpen | String[] | []    | 默认处于打开状态的子组件                  |
| accordion   | Boolean  | false | accordion模式，只有一个子组件能处于打开状态 |
| title       | String   | ''    | 标题                                   |
| label       | String   | ''    | 描述                                   |
| id          | String   | ''    | accordion-group组件ID，必填             |

#### accordion组件属性

| 属性      | 类型     | 默认值 | 说明                             |
| --------- | ------- | ----- | ------------------------------- |
| key       | String  | ''    | 索引                             |
| thumb     | String  | ''    | 左侧缩略图                        |
| title     | String  | ''    | 标题                             |
| content   | String  | ''    | 内容                             |
| disabled  | Boolean | false | 禁用                             |
| showArrow | Boolean | true  | 是否显示箭头                       |
| groupId   | String  | ''    | 所属的accordion-group组件的ID，必填 |

#### accordion-group组件事件

| 名称    | 参数             |描述                    | 
| ------ | ---------------- |---------------------- | 
| change | {key:currentkey} | 当前打开的子组件变化时触发 |
