## 卡片 card

### 描述

用于显示卡片等集中视图信息

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="../assets/card.jpg" alt="card" style="width:300px" /></div>


### 使用方法

在`.ux`文件中引入组件

```html
<import name="my-card" src="apex-ui/components/card/index"></import>
```

### 示例

```html
<template>
  <div class="wrap">
    <text class="title">默认</text>
    <my-card title="卡片标题" thumb="/images/logo-d.png" extra="额外内容" footer="卡片底部">
      <text>卡片内容</text>
    </my-card>
    <text class="title">通栏</text>
    <my-card title="卡片标题卡片标题卡片标题卡片标题卡片标题卡片标题卡片标题卡片标题" full="true" thumb="/images/logo-d.png" extra="额外内容" footer="卡片底部">
      <text class="demo">卡片内容</text>
    </my-card>
    <text class="title">使用slot</text>
    <my-card>
      <div slot="title">
        <my-icon type="gift" size="48"></my-icon>
        <text class="slot-demo-title">礼物清单</text>
      </div>
      <div slot="extra" @click="changeRandomGiftList">
        <my-icon type="refresh" size="48" color="#3086FE"></my-icon>
        <text style="color:#3086FE ">换一批</text>
      </div>
      <list class="slot-demo-list">
        <list-item class="slot-demo-list-item" type="listItem" for="{{ randomGiftList }}">
          <text>{{ $item.name }}</text>
          <text>¥{{ $item.price }}</text>
        </list-item>
      </list>
    </my-card>
  </div>
</template>
```

```less
.wrap {
  background-color: #f7f7f7;
  flex-direction: column;
  .title {
    padding: 20px;
  }
}
.demo{
  font-size: 100px;
}
.slot-demo-title{
  font-size: 35px;
  color: #1c2438;
}
.slot-demo-list{
  height: 300px;
  &-item{
    justify-content: space-between;
    text{
      font-size: 35px;
      padding: 5px 0;
    }
  }
}
```

### API

#### 组件属性

| 属性   | 类型    | 默认值 | 说明             |
| ------ | ------- | ------ | ---------------- |
| full   | Boolean | false  | 卡片视图是否联通 |
| title  | String  | -      | 卡片标题         |
| thumb  | String  | -      | 卡片的图片       |
| extra  | String  | -      | 卡片的额外信息   |
| footer | String  | -      | 卡片底部内容     |

#### slot

| 名称   | 说明    |
| ------ | ------- |
| title  | 自定义卡片标题，无法与title、thumb、extra三个属性同用，slot的内容会覆盖属性的内容  |
| extra  | 额外内容，无法与title、thumb、extra三个属性同用，slot的内容会覆盖属性的内容  |
| 无 | 卡片主体内容  |
