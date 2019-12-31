## 滑动选择器 slider

### 描述

用于在一个区间内选择特定值。

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="../assets/slider.gif" alt="slider" style="width:300px" /></div>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="my-slider" src="apex-ui/components/slider/index"></import>
```

### 示例

```html
<template>
  <div class="wrap">
    <text class="title">Default</text>
    <my-slider onchange="onchange('Default')" onafter-change="onafterChange('Default')"></my-slider>

    <text class="title">Custom tip</text>
    <my-slider default-value="10" tips-formatter="{d} %" onchange="onchange('Custom tip')" onafter-change="onafterChange('Custom tip')"></my-slider>

    <text class="title">No tip</text>
    <my-slider default-value="10" show-tips={{false}} onchange="onchange('No tip')" onafter-change="onafterChange('No tip')"></my-slider>

    <text class="title">Disabled</text>
    <my-slider default-value="10" disabled="{{true}}"></my-slider>

    <text class="title">Default value</text>
    <my-slider default-value="10" value-type="value" onchange="onchange('Default value')" onafter-change="onafterChange('Default value')"></my-slider>

    <text class="title">Custom icon value</text>
    <my-slider default-value="10" value-type="custom" onchange="onchange('Custom icon value')" onafter-change="onafterChange('Custom icon value')">
        <div slot="min">
          <my-icon type="vol-mute" size="50" color="#888888" ></my-icon>
        </div>
        <div slot="max">
          <my-icon type="vol-high" size="50" color="#888888" ></my-icon>
        </div>
    </my-slider>

    <text class="title">Custom image value</text>
    <my-slider default-value="10" value-type="custom" onchange="onchange('Custom image value')" onafter-change="onafterChange('Custom image value')">
        <div slot="min">
          <image src="../../images/logo-d.png" style="width: 50px; height: 50px;"></image>
        </div>
        <div slot="max">
          <image src="../../images/logo-d.png" style="width: 50px; height: 50px;"></image>
        </div>
    </my-slider>

    <text class="title">Custom value</text>
    <my-slider default-value="10" value-type="{{ {min: 'value', max: 'custom'} }}" onchange="onchange('Custom value')" onafter-change="onafterChange('Custom value')">
        <div slot="max">
          <my-icon type="vol-high" size="50" color="#888888" ></my-icon>
        </div>
    </my-slider>

    <text class="title">Step = 10</text>
    <my-slider default-value="10" value-type="value" step="10" onchange="onchange('Step = 10')" onafter-change="onafterChange('Step = 10')"></my-slider>

    <text class="title">Custom style</text>
    <my-slider default-value="10" style-object="{{ {'color': 'blue', 'selected-color': 'red', 'block-color': 'yellow', 'padding-left': '50px', 'padding-right': '50px'} }}" onchange="onchange('Custom style')" onafter-change="onafterChange('Custom style')"></my-slider>
  </div>
</template>
```

```less
.wrap {
  flex-direction: column;
  padding: 0 40px 50px;
  .title{
    padding: 50px 0 20px;
  }
}
```

```javascript
export default {
  data() {
    return {}
  },
  onchange(slider,e){
    console.log(`${slider} onchange, currentValue = ${e.detail.currentValue}`,)
  },
  onafterChange(slider,e){
    console.log(`${slider} onafterChange, currentValue = ${e.detail.currentValue}`)
  }
} 
```

### API

#### 组件属性

| 属性          | 类型              | 默认值 | 说明                                                                                                |
| ------------- | ---------------- | ------ | -------------------------------------------------------------------------------------------------- |
| min           | Number           | 0      | 最小值                                                                                              |
| max           | Number           | 100    | 最大值                                                                                              |
| step          | Number           | 1      | 步长，取值必须大于 0，<br>并且可被 (max - min) 整除                                                   |
| defaultValue  | Number           | 0      | 默认值                                                                                              |
| disabled      | Boolean          | false  | 是否禁用                                                                                            |
| valueType     | String 或 Object | 'none' | 控制最小值最大值显示的类型，可选择'none'、'value'、'icon'，参数支持对象格式如 {min: 'none', max: 'none'} |
| tipsFormatter | String           | '{d}'  | 格式化当前滑块的值<br>( {d} 为固定写法会被转化为当前滑块<br>的值，如 {d} % 转化为 n % )                  |
| showTips      | Boolean          | true   | 是否显示tips                 |
| styleObject   | Object           | {<br>'color': '#f0f0f0',<br>'selected-color': '#009688',<br>'block-color': '#009688',<br>'padding-left': '32px',<br>'padding-right': '32px'<br>} | 组件是否可见 |

#### 组件事件

| 事件名称     | 事件描述                      | 返回值                               |
| ----------- | ----------------------------- | ------------------------------------ |
| change      | 拖动过程中数值改变触发的回调函数 | event.detail = {currentValue: value} |
| afterChange | 完成一次拖动后触发的回调函数     | event.detail = {currentValue: value} |

