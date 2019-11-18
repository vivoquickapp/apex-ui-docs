## 步骤条 steps

### 描述

显示任务的进度/引导用户完成某些操作

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="../assets/steps.gif" alt="steps" style="width:300px" /></div>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="my-steps" src="apex-ui/components/steps/index.ux"></import>
<import name="my-step" src="apex-ui/components/step/index.ux"></import>
```

### 示例

```html
<template>
  <div class="wrap">
    <text class="title">default</text>
    <my-steps id="steps1" current="{{1}}">
      <my-step group-id="steps1" title="finish" content="contentcontent" status="finish"></my-step>
      <my-step group-id="steps1" title="process" content="contentcontent" status="process"></my-step>
      <my-step group-id="steps1" title="wait" content="contentcontent" status="wait"></my-step>
    </my-steps>
    <text class="title">vertical</text>
    <my-steps id="steps2" current="{{1}}" direction="vertical">
      <my-step group-id="steps2" title="finish" content="contentcontent" status="finish"></my-step>
      <my-step group-id="steps2" title="process" content="contentcontent" status="process"></my-step>
      <my-step group-id="steps2" title="wait" content="contentcontent" status="wait"></my-step>
    </my-steps>
    <text class="title">icon</text>
    <my-steps id="steps4" current="{{1}}">
      <my-step group-id="steps4" title="step1" content="contentcontent" icon="airplane"></my-step>
      <my-step group-id="steps4" title="step2" content="contentcontent" icon="snow"></my-step>
      <my-step group-id="steps4" title="step3" content="contentcontent" icon="gift"></my-step>
    </my-steps>
    <text class="title">current</text>
    <my-steps id="steps3" current="{{current}}">
      <my-step group-id="steps3" title="step1"></my-step>
      <my-step group-id="steps3" title="step2"></my-step>
      <my-step group-id="steps3" title="step3"></my-step>
    </my-steps>
    <my-button type="default" ontap="tap">按钮</my-button>
  </div>
</template>
```

```less
<style>
.wrap {
  flex-direction: column;
  padding: 10px;
}

.title{
  margin:10px 20px;
  margin-top: 50px;
  font-size: 40px;
  font-weight: bold;
  color: #000000;
}
</style>
```

```javascript
<script>
export default {
  data() {
    return {
      current: 0
    }
  },

  tap() {
    this.current = (this.current + 1) % 3
  }
}
</script>
```

### API

#### steps组件属性

| 属性      | 类型    | 默认值        | 说明                                       |
| --------- | ------ | ------------ | ----------------------------------------- |
| current   | Number | 0            | 当前步骤，从0开始                            |
| direction | String | 'horizontal' | step的排列方式，可选值为 vertical、horizontal |
| id        | String | ''           | steps组件ID，必填                           |

#### step组件属性

| 属性    | 类型     | 默认值 | 说明                        |
| ------- | ------- | ----- | -------------------------- |
| status  | String  | ''    | step的当前状态               |
| icon    | String  | ''    | icon样式，具体样式查看icon组件 |
| title   | String  | ''    | 标题                        |
| content | String  | ''    | 内容                        |
| groupId | String  | ''    | 所属的steps组件的ID，必填     |

#### step slot

| 名称    |描述       | 
| ------- | -------- | 
| title   | 自定义标题 |
| content | 自定义内容 |
