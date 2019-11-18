## 按钮 dashbord

### 描述

用于各类业务逻辑场景的基础组件。
仪表盘

### 使用效果


### 使用方法

在`.ux`文件中引入组件

```html
<import name="my-dashbord" src="apex-ui/components/iotSlide/dashbord"></import>
```

### 示例

```html
<template>
  <div class="wrap">
    <text class="title">一般用法</text>
    <div class="inline">
      <my-dashbord 
        percent="{{percent1}}"  
        stroke-size="{{500}}"  
        stroke-color="#87d068" 
        stroke-bgcolor="#fac450"
      >
      </my-dashbord>
      <div>
          <input type="button" value="+" style="margin-right: 30px;" @click="increase"></input>
          <input type="button" value="-" @click="decrease"></input>
        </div>
    </div>
  </div>
</template>
<script>
increase() {
    this.percent1 += 6 // 点击添加的进度值
    if( this.percent1 >=  100) {
      this.percent1 = 100
      this.$child('progressCanvas1').drawCanvas(this.percent1)
      return
    }
    this.$child('progressCanvas1').drawCanvas(this.percent1)
  },
  decrease() {
    this.percent1 -= 6  // 点击删除的进度值
    if( this.percent1 <=  0) {
      this.percent1 = 0
      this.$child('progressCanvas1').drawCanvas(this.percent1)
      return
    }
    this.$child('progressCanvas1').drawCanvas(this.percent1)
  }
</script>
```

```less
.title{
  height: 90px;
  width: 100%;
  background-color: #eeeeee;
}
.title_text{
  text-align: left;
  margin-left: 50px;
}
```

### API

#### 组件属性

| 属性          | 类型     | 默认值     | 说明                                                         |
| --------      | -------  | -------   | ------------------------------------------------------------ |
| percent       | Number   |           | 进度值
| stroke-size   | Number   | 500       | 仪表盘大小                          |
| stroke-color  | String   | #1890ff   | 进度条加载的颜色                                           |
| strokeBgcolor | String   | #f5f5f5   | 进度条背景颜色                                              |
                          |

#### 组件事件

| 事件名称 | 事件描述 | 返回值 |
| -------- | -------- | ------ |
注：务必在引入组件的dom结构上添加一个id属性，在生命周期onShow的时候，
    利用：this.$child('progressCanvas')获取到子组件（id为progressCanvas）并调用drawCanvas的方法
    this.$child('progressCanvas1').drawCanvas(this.percent1)。
