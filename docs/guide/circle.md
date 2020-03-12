## 进度环 circle

### 描述

用于表示某项任务的进度

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="../assets/circle.gif" alt="circle" style="width:300px" /></div>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="my-circle" src="apex-ui/components/circle/index"></import>
```

### 示例

```html
<template>
  <div class="wrap">
    <text class="title">基本用法</text>
    <div class="group">
      <my-circle percent="80" size="200">
        <text class="basic-use-text">80%</text>
      </my-circle>
      <my-circle percent="100" stroke-color="#19be6b" size="200">
        <my-icon type="checkmark" size="80" color="#19be6b"></my-icon>
      </my-circle>
      <my-circle percent="75" stroke-color="#ed3f14" size="200">
        <my-icon type="close" size="80" color="#ed3f14"></my-icon>
      </my-circle>
    </div>
    <text class="title">不同样式</text>
    <div class="group">
      <my-circle percent="80" size="200" stroke-linecap="square" stroke-width="30" trail-width="10" trail-color="#ed3f14"></my-circle>
      <my-circle percent="80" size="200" show-trail="{{false}}"></my-circle>
    </div>
    <text class="title">起始角度及旋转方向</text>
    <div class="group">
      <my-circle percent="80" size="200" anticlockwise="{{true}}"></my-circle>
      <my-circle percent="80" size="200" s-angle="{{90}}"></my-circle>
      <my-circle percent="80" size="200" anticlockwise="{{true}}" s-angle="{{90}}"></my-circle>
    </div>
    <text class="title">与外部组件配合</text>
    <div class="group">
      <my-circle percent="{{percent}}" stroke-color="{{color}}" s-angle="{{270}}" >
        <div>
          <my-icon if="{{percent >= 100}}" type="checkmark" size="80" color="#19be6b" ></my-icon>
          <text else class="basic-use-text">{{percent}}%</text>
        </div>
      </my-circle>
      <div>
        <my-button type="success" ontap="handleClickAdd">+</my-button>
        <my-button type="success" ontap="handleClickMinus">-</my-button>
      </div>
    </div>
  </div>
</template>
```

```less
<style lang="less">
.wrap {
  flex-direction: column;
  .title{
    padding: 10px 80px;
  }
  .group {
    flex-direction: row;
    justify-content: space-around;
    margin: 10px 0;
  }
}

.basic-use-text{
  font-size: 40px;
  font-weight: bold;
}
</style>
```

```javascript
<script>
export default {
  data(){
    return {
      percent: 40,
    }
  },

  computed: {
    color(){
      let color = '#2db7f5'
      if (this.percent >= 100) {
        color = '#5cb85c'
      }
      return color
    }
  },
  
  handleClickAdd(){
    if(this.percent < 100){
      this.percent += 10
    }
  },

  handleClickMinus(){
    if(this.percent > 0){
      this.percent -= 10
    }
  }
}
</script>                                                
```

### API

#### 组件属性

| 属性          | 类型     | 默认值     | 说明                                          |
| ------------- | ------- | --------- | -------------------------------------------- |
| percent       | Number  | 0         | 进度环显示百分比                                |
| size          | Number  | 300       | 组件大小                                       |
| strokeWidth   | Number  | 20        | 进度环宽度                                     |
| strokeColor   | String  | '#2d8cf0' | 进度环颜色                                     |
| strokeLinecap | String  | 'round'   | 进度环线条端点样式，可选值为round、square、butt    |
| trailWidth    | Number  | 20        | 背景环宽度                                     |
| trailColor    | String  | '#eaeef2' | 背景环颜色                                     |
| showTrail     | Boolean | true      | 是否显示背景环                                  |
| sAngle        | Number  | 0         | 旋转开始角度，0为三点钟方向，90为六点钟方向，以此类推 |
| anticlockwise | Boolean | false     | 旋转方向，默认为顺时针                           |
| id            | String  | 'canvasId'| canvas id,使用华为引擎时必传                    |

#### slot

| 名称     | 描述                 | 
| ------- | -------------------- | 
| default | 自定义进度环中间显示内容 |
