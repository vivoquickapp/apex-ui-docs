# 参数说明

- 参数类型：Object
- 是否必填：是
- 默认值：`null`
- 描述：参数配置对象

```html
<script>
  import Charts from "apex-ui/components/charts/qacharts-min.js";

  let $chart;

  export default {
    onShow() {
      this.initChart();
    },
    initChart() {
      $chart = new Charts(options);
    }
  };
</script>
```

## element

- 参数类型：Object
- 是否必填：是
- 默认值：`null`
- 描述：canvas 对象，快应用中用 this.\$element('id')获取

```js
$chart = new Charts({
    element: this.$element("canvasId"),
    ...
    ...
})
```

## width

- 参数类型：Number
- 是否必填：是
- 默认值：`null`
- 描述：图表宽度

## height

- 参数类型：Number
- 是否必填：是
- 默认值：`null`
- 描述：图表高度

## animation

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否开启图表绘制动画

## animationDuration

- 参数类型：String
- 是否必填：否
- 默认值：`1000`
- 描述：图表动画时间

## animationTiming

- 参数类型：String
- 是否必填：否
- 默认值：`'default'`
- 描述：图表动画速度曲线，可选值：default，easeIn，easeOut，easeInOut，linear

## backgroundColor

- 参数类型：String
- 是否必填：否
- 默认值：`'#ffffff'`
- 描述：背景颜色（如果页面背景颜色不是白色请设置为页面的背景颜色）

## colors

- 参数类型：Array
- 是否必填：否
- 默认值：`['#7cb5ec', '#f7a35c', '#434348', '#90ed7d', '#f15c80', '#8085e9']`
- 描述：调色盘

## padding

- 参数类型：Array
- 是否必填：否
- 默认值：`[20,20,20,20]`
- 描述：canvas 边界到图表的距离，最小值为 0

## enableScroll

- 参数类型：Boolean
- 是否必填：否
- 默认值：`false`
- 描述：是否开启滑动图表能力，当前仅支持线图和柱状图

```html
<template>
  <div class="chart-wrap">
    <canvas
      id="chartTooltip2"
      class="chart"
      style="width: {{width}}px; height: {{height}}px;"
      ontouchstart="ontouchstart"
      ontouchmove="ontouchmove"
      ontouchend="ontouchend"
    ></canvas>
  </div>
</template>

<script>
import Charts from 'apex-ui/components/charts/qacharts-min.js'

let $chart = null

export default {
  props: {
    width: {
      default: 600,
    },
    height: {
      default: 400,
    },
  },
  data() {
    return {}
  },
  initChart() {
    return new Promise((resolve, reject) => {
      $chart = new Charts({
        element: this.$element('chartTooltip2'),
        width: this.width,
        height: this.height,
        animation: false,
        backgroundColor: '#eeeeee',
        enableScroll: true, // 开启滑动图表
        tooltip: {
          show: true,
          axisPointer: {
            type: 'shadow',
          },
        },
        xAxis: {
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6', '7'],
          axisLabel: {
            format: function (val) {
              return `${val}月`
            },
          },
        },
        series: [
          {
            name: '数据1',
            type: 'bar',
            data: [820, 932, -901, 934, 1290, 1330, 1320],
            label: {
              format: function (val) {
                return `$ ${val}`
              },
            },
          },
          ... // 省略数据
        ],
        onRenderComplete: () => {
          console.log('chartTooltip2 renderComplete')
          resolve()
        },
      })
    })
  },
  ontouchstart(e) {
    $chart.scrollStart(e)
  },
  ontouchmove(e) {
    $chart.scroll(e)
  },
  ontouchend(e) {
    $chart.scrollEnd(e)
  },
}
</script>
```

## tooltip

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：tooltip配置，支持柱状图，线图，饼图，雷达图，蜡烛图

```js
$chart = new Charts({
        tooltip: {
            show: false,
            data: [],
            maxTextWidth: 0,
            backgroundColor: '#000000',
            backgroundRadius: 5,
            backgroundOpacity: 0.7,
            padding: 10,
            itemGap: 5,
            iconRadius: 5,
            iconGap: 5,
        textStyle: {
            fontSize: 15,
            color: '#ffffff',
            lineHeight: 15,
        },
        axisPointer: {
            type: 'line', // line shadow
            lineStyle: {
                lineWidth: 1,
                color: '#808080',
                opacity: 1,
            },
            shadowStyle: {
                color: '#969696',
                opacity: 0.3,
            },
            cross: {
                show: true,
                lineWidth: 1,
                lineColor: '#808080',
                lineDash: [5, 10],
                lineOpacity: 1,
                backgroundColor: '#999999',
                backgroundOpacity: 1,
                fontColor: '#ffffff',
                fontPadding: 5,
            },
        },
    },
    ...
    ...
})
```

### tooltip.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`false`
- 描述：是否显示tooltip

### tooltip.backgroundColor

- 参数类型：String
- 是否必填：否
- 默认值：`#000000`
- 描述：tooltip容器背景颜色

### tooltip.backgroundRadius

- 参数类型：Number
- 是否必填：否
- 默认值：`5`
- 描述：tooltip容器圆角

### tooltip.backgroundOpacity

- 参数类型：Number
- 是否必填：否
- 默认值：`0.7`
- 描述：tooltip容器背景透明度

### tooltip.padding

- 参数类型：Number
- 是否必填：否
- 默认值：`10`
- 描述：tooltip容器padding

### tooltip.itemGap

- 参数类型：Number
- 是否必填：否
- 默认值：`5`
- 描述：tooltip内容间距

### tooltip.iconRadius

- 参数类型：Number
- 是否必填：否
- 默认值：`5`
- 描述：tooltip内容标识圆角

### tooltip.iconGap

- 参数类型：Number
- 是否必填：否
- 默认值：`5`
- 描述：tooltip内容标识与文字的间距

### tooltip.textStyle

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：tooltip内容文字样式

#### tooltip.textStyle.fontSize

- 参数类型：Number
- 是否必填：否
- 默认值：`15`
- 描述：tooltip内容文字大小

#### tooltip.textStyle.color

- 参数类型：String
- 是否必填：否
- 默认值：`#ffffff`
- 描述：tooltip内容文字颜色

#### tooltip.textStyle.lineHeight

- 参数类型：Number
- 是否必填：否
- 默认值：`15`
- 描述：tooltip内容文字行高

### tooltip.axisPointer

- 参数类型：轴指示器配置
- 是否必填：否
- 默认值：`null`
- 描述：tooltip轴指示器配置，在柱状图，线图，蜡烛图中使用

#### tooltip.axisPointer.type

- 参数类型：String
- 是否必填：否
- 默认值：`line`
- 描述：tooltip轴指示器类型，可选值：line，shadow

#### tooltip.axisPointer.lineStyle.lineWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：tooltip轴指示器，线宽

#### tooltip.axisPointer.lineStyle.color

- 参数类型：String
- 是否必填：否
- 默认值：`#808080`
- 描述：tooltip轴指示器，线颜色

#### tooltip.axisPointer.lineStyle.opacity

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：tooltip轴指示器，线透明度

#### tooltip.axisPointer.shadowStyle.color

- 参数类型：String
- 是否必填：否
- 默认值：`#969696`
- 描述：tooltip轴指示器，阴影颜色

#### tooltip.axisPointer.shadowStyle.opacity

- 参数类型：Number
- 是否必填：否
- 默认值：`0.3`
- 描述：tooltip轴指示器，阴影透明度

#### tooltip.axisPointer.cross.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示tooltip标签交叉轴

#### tooltip.axisPointer.cross.lineWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：tooltip标签交叉轴线宽

#### tooltip.axisPointer.cross.lineColor

- 参数类型：String
- 是否必填：否
- 默认值：`#808080`
- 描述：tooltip标签交叉轴颜色

#### tooltip.axisPointer.cross.lineDash

- 参数类型：Array
- 是否必填：否
- 默认值：`[5,10]`
- 描述：tooltip标签交叉轴虚线配置

#### tooltip.axisPointer.cross.lineOpacity

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：tooltip标签交叉轴线透明度

#### tooltip.axisPointer.cross.backgroundColor

- 参数类型：String
- 是否必填：否
- 默认值：`#999999`
- 描述：tooltip标签交叉轴标签背景颜色

#### tooltip.axisPointer.cross.backgroundOpacity

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：tooltip标签交叉轴标签背景透明度

#### tooltip.axisPointer.cross.fontColor

- 参数类型：String
- 是否必填：否
- 默认值：`#ffffff`
- 描述：tooltip标签交叉轴标签文字颜色

#### tooltip.axisPointer.cross.fontPadding

- 参数类型：Number
- 是否必填：否
- 默认值：`5`
- 描述：tooltip标签交叉轴标签文字padding

## legend

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：图例配置

```js
$chart = new Charts({
    legend: {
        show: true,
        type: 'default',
        marginTop: 8,
        itemGap: 15,
        shapeWidth: 15,
        shapeHeight: 15,
        textStyle: {
            fontSize: 15,
            color: '#333333',
            padding: 5,
        }
    },
    ...
    ...
})
```

### legend.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示图例

### legend.type

- 参数类型：String
- 是否必填：否
- 默认值：`'default'`
- 描述：图例类型，可选值：default，circle，line，rect

### legend.marginTop

- 参数类型：Number
- 是否必填：否
- 默认值：`8`
- 描述：图例与图表的距离

### legend.itemGap

- 参数类型：Number
- 是否必填：否
- 默认值：`15`
- 描述：图例之间的间隙

### legend.shapeWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`15`
- 描述：图例图标宽度

### legend.shapeHeight

- 参数类型：Number
- 是否必填：否
- 默认值：`15`
- 描述：图例图标高度

### legend.textStyle

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：图例文字配置

```js
$chart = new Charts({
    legend: {
        textStyle: {
            fontSize: 15,
            color: '#333333',
            padding: 5,
        }
    },
    ...
    ...
})
```

#### legend.textStyle.fontSize

- 参数类型：Number
- 是否必填：否
- 默认值：`15`
- 描述：图例文字大小

#### legend.textStyle.color

- 参数类型：String
- 是否必填：否
- 默认值：`'#333333'`
- 描述：图例文字颜色

#### legend.textStyle.padding

- 参数类型：Number
- 是否必填：否
- 默认值：`5`
- 描述：图例文字与图标之间的距离

## label

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：全局 label 配置，权重大于 seriesItem 单项配置

```js
$chart = new Charts({
    label: {
        show: true,
        fontSize: 15,
        color: 'auto',
        margin: 2,
    },
    ...
    ...
})
```

### label.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示标签

### label.fontSize

- 参数类型：Number
- 是否必填：否
- 默认值：`15`
- 描述：标签文字大小

### label.color

- 参数类型：String
- 是否必填：否
- 默认值：`'auto'`
- 描述：标签文字颜色

### label.margin

- 参数类型：Number
- 是否必填：否
- 默认值：`2`
- 描述：标签文字与图表的距离

## radarAxis

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：雷达图轴线配置

```js
$chart = new Charts({
    radarAxis: {
        shape: true, // polygon. circle
        center: ['50%', '50%'],
        radius: '80%',
        max: 'auto',
        splitNumber: 4,
        axisName: {
            show: true,
            textStyle: {
                fontSize: 15,
                color: '#666666',
                margin: 10,
            },
        },
        axisLine: {
            show: true,
            lineStyle: {
                lineWidth: 2,
                color: '#cccccc',
                opacity: 1,
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                lineWidth: 1,
                color: '#cccccc',
                opacity: 1,
            },
        },
        splitArea: {
            odd: {
                show: true,
                color: '#f5f5f5',
                opacity: 1,
            },
            even: {
                show: true,
                color: '#e6e6e6',
                opacity: 1,
            },
        },
    },
    ...
    ...
})
```

### radarAxis.shape

- 参数类型：String
- 是否必填：否
- 默认值：`'polygon'`
- 描述：雷达图形状，可选值：polygon，circle

### radarAxis.center

- 参数类型：Array
- 是否必填：否
- 默认值：`['50%','50%']`
- 描述：雷达图中心位置

### radarAxis.radius

- 参数类型：String
- 是否必填：否
- 默认值：`'80%'`
- 描述：雷达图直径

### radarAxis.max

- 参数类型：Number
- 是否必填：否
- 默认值：`'auto'`
- 描述：雷达图最大值

### radarAxis.splitNumber

- 参数类型：Number
- 是否必填：否
- 默认值：`4`
- 描述：雷达图网格线分割数量

### radarAxis.axisName

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：雷达图轴线配置

#### radarAxis.axisName.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示轴线名字

#### radarAxis.axisName.textStyle

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：文字配置

##### radarAxis.axisName.textStyle.fontSize

- 参数类型：Number
- 是否必填：否
- 默认值：`15`
- 描述：文字大小

##### radarAxis.axisName.textStyle.color

- 参数类型：String
- 是否必填：否
- 默认值：`'#666666'`
- 描述：文字颜色

##### radarAxis.axisName.textStyle.margin

- 参数类型：Number
- 是否必填：否
- 默认值：`10`
- 描述：文字与图表的距离

### radarAxis.axisLine

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：雷达图轴线配置

#### radarAxis.axisLine.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示雷达图轴线

#### radarAxis.axisLine.lineStyle

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：线条样式配置

##### radarAxis.axisLine.lineStyle.lineWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`2`
- 描述：线条宽度

##### radarAxis.axisLine.lineStyle.color

- 参数类型：String
- 是否必填：否
- 默认值：`'#cccccc'`
- 描述：线条颜色

##### radarAxis.axisLine.lineStyle.opacity

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：线条透明度

### radarAxis.splitLine

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：雷达图网格线配置

#### radarAxis.splitLine.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示雷达图网格线

#### radarAxis.splitLine.lineStyle

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：雷达图网格线线样式

##### radarAxis.splitLine.lineStyle.lineWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：雷达图网格线线宽

##### radarAxis.splitLine.lineStyle.color

- 参数类型：String
- 是否必填：否
- 默认值：`#cccccc`
- 描述：雷达图网格线颜色

##### radarAxis.splitLine.lineStyle.opacity

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：雷达图网格线透明度

### radarAxis.splitArea

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：雷达图网格线区间配置

#### radarAxis.splitArea.odd

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：奇数区间配置

##### radarAxis.splitArea.odd.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示奇数区间

##### radarAxis.splitArea.odd.color

- 参数类型：String
- 是否必填：否
- 默认值：`#f5f5f5`
- 描述：奇数区间颜色

##### radarAxis.splitArea.odd.opacity

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：奇数区间透明度

##### radarAxis.splitArea.even

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：偶数区间配置

##### radarAxis.splitArea.even.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示偶数区间

##### radarAxis.splitArea.even.color

- 参数类型：String
- 是否必填：否
- 默认值：`#e6e6e6`
- 描述：偶数区间颜色

##### radarAxis.splitArea.even.opacity

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：偶数区间透明度

## yAxis

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：y 轴配置

```js
$chart = new Charts({
    yAxis: {
        show: true,
        type: 'value',
        max: 'auto',
        min: 'auto',
        splitNumber: 4,
        axisName: {
            show: true,
            text: '轴名称',
            gap: 10,
            textStyle: {
              color: '#666666',
              fontSize: 15,
              align: 'center',
            },
        },
        axisLabel: {
            show: true,
            gap: 5,
            textStyle: {
              color: '#666666',
              fontSize: 12,
            },
        },
        axisTick: {
            show: true,
            length: 5,
            lineStyle: {
              lineWidth: 1,
              color: '#666666',
            },
        },
        axisLine: {
            show: true,
            lineStyle: {
              lineWidth: 1,
              color: '#666666',
            },
        },
          axisSplitLine: {
            show: true,
            lineStyle: {
              lineWidth: 1,
              color: '#dddddd',
            },
        },
    },
    ...
    ...
})
```

### yAxis.type

- 参数类型：String
- 是否必填：否
- 默认值：`value`
- 描述：y 轴类型，可选值：category，value

### yAxis.max

- 参数类型：Number
- 是否必填：否
- 默认值：`auto`
- 描述：type 为 value 时，y 轴的最大值

### yAxis.min

- 参数类型：Number
- 是否必填：否
- 默认值：`auto`
- 描述：type 为 value 时，y 轴的最小值

### yAxis.data

- 参数类型：Array
- 是否必填：xy 轴只有 y 轴 type 为 category 时，必填
- 默认值：`null`
- 描述：type 为 category 时 y 轴的数据

### yAxis.boundaryGap

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：type 为 category 时生效，boundaryGap 为 true 时, 这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间

### yAxis.splitNumber

- 参数类型：Number
- 是否必填：否
- 默认值：`4`
- 描述：y 轴分割段数

### yAxis.axisName

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：y 轴名称配置

#### yAxis.axisName.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示 y 轴名称

#### yAxis.axisName.text

- 参数类型：String
- 是否必填：否
- 默认值：`轴线名称`
- 描述：y 轴名称

#### yAxis.axisName.gap

- 参数类型：Number
- 是否必填：否
- 默认值：`10`
- 描述：轴线和轴线名称之间的距离

#### yAxis.axisName.textStyle

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：y 轴名称文字配置

##### yAxis.axisName.textStyle.color

- 参数类型：String
- 是否必填：否
- 默认值：`#666666`
- 描述：y 轴名称文字颜色

##### yAxis.axisName.textStyle.fontSize

- 参数类型：Number
- 是否必填：否
- 默认值：`15`
- 描述：y 轴名称文字大小

##### yAxis.axisName.textStyle.align

- 参数类型：String
- 是否必填：否
- 默认值：`center`
- 描述：y 轴名称水平对齐方式，可选值：left，center，right

### yAxis.axisLabel

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：y 轴标签配置

#### yAxis.axisLabel.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示 y 轴标签

#### yAxis.axisLabel.gap

- 参数类型：Number
- 是否必填：否
- 默认值：`5`
- 描述：y 轴标签和 y 轴刻度线之间的距离

#### yAxis.axisLabel.textStyle

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：y 轴标签文字配置

##### yAxis.axisLabel.textStyle.color

- 参数类型：String
- 是否必填：否
- 默认值：`#666666`
- 描述：y 轴标签文字颜色

##### yAxis.axisLabel.textStyle.fontSize

- 参数类型：Number
- 是否必填：否
- 默认值：`12`
- 描述：y 轴标签文字大小

### yAxis.axisTick

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：y 轴刻度线配置

#### yAxis.axisTick.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示 y 轴刻度线

#### yAxis.axisTick.alignWithLabel

- 参数类型：Boolean
- 是否必填：否
- 默认值：`false`
- 描述：type 为 category 时生效，alignWithLabel 为 true 时，刻度线与标签对齐

#### yAxis.axisTick.length

- 参数类型：Number
- 是否必填：否
- 默认值：`5`
- 描述：y 轴刻度线长度

#### yAxis.axisTick.lineStyle

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：y 轴刻度线线配置

##### yAxis.axisTick.lineStyle.lineWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：y 轴刻度线线宽

##### yAxis.axisTick.lineStyle.color

- 参数类型：String
- 是否必填：否
- 默认值：`#666666`
- 描述：y 轴刻度线颜色

### yAxis.axisLine

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：y 轴轴线配置

#### yAxis.axisLine.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示 y 轴轴线

#### yAxis.axisLine.lineStyle

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：y 轴轴线配置

##### yAxis.axisLine.lineStyle.lineWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：y 轴轴线线宽

##### yAxis.axisLine.lineStyle.color

- 参数类型：String
- 是否必填：否
- 默认值：`#666666`
- 描述：y 轴轴线颜色

### yAxis.axisSplit

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：y 轴网格线配置

#### yAxis.axisSplit.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示 y 轴网格线

#### yAxis.axisSplit.alignWithLabel

- 参数类型：Boolean
- 是否必填：否
- 默认值：`false`
- 描述：type 为 category 时生效，alignWithLabel 为 true 时，网格线与标签对齐

#### yAxis.axisSplit.lineStyle

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：y 轴网线线配置

##### yAxis.axisSplit.lineStyle.lineWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：y 轴网格线线宽

##### yAxis.axisSplit.lineStyle.color

- 参数类型：String
- 是否必填：否
- 默认值：`#666666`
- 描述：y 轴网格线颜色

## xAxis

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：x 轴配置

```js
$chart = new Charts({
    xAxis: {
        show: true,
        type: 'category',
        data: [],
        boundaryGap: true,
        splitNumber: 4,
        axisName: {
            show: true,
            text: '轴名称',
            gap: 10,
            textStyle: {
              color: '#666666',
              fontSize: 15,
              align: 'center',
            },
        },
        axisLabel: {
            show: true,
            rotate: 0,
            gap: 5,
            textStyle: {
              color: '#666666',
              fontSize: 12,
            },
        },
        axisTick: {
            show: true
            alignWithLabel: false,
            length: 5,
            lineStyle: {
              lineWidth: 1,
              color: '#666666',
            },
        },
        axisLine: {
            show: true,
            lineStyle: {
              lineWidth: 1,
              color: '#666666',
            },
        },
          axisSplitLine: {
            show: true,
            alignWithLabel: false,
            lineStyle: {
              lineWidth: 1,
              color: '#dddddd',
            },
        },
    },
    ...
    ...
})
```

### xAxis.type

- 参数类型：String
- 是否必填：否
- 默认值：`value`
- 描述：x 轴类型，可选值：category，value

### xAxis.max

- 参数类型：Number
- 是否必填：否
- 默认值：`auto`
- 描述：type 为 value 时，x 轴的最大值

### xAxis.min

- 参数类型：Number
- 是否必填：否
- 默认值：`auto`
- 描述：type 为 value 时，x 轴的最小值

### xAxis.data

- 参数类型：Array
- 是否必填：xy 轴只有 x 轴 type 为 category 时，必填
- 默认值：`null`
- 描述：type 为 category 时 x 轴的数据

### xAxis.boundaryGap

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：type 为 category 时生效，boundaryGap 为 true 时, 这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间

### xAxis.splitNumber

- 参数类型：Number
- 是否必填：否
- 默认值：`4`
- 描述：x 轴分割段数

### xAxis.axisName

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：x 轴名称配置

#### xAxis.axisName.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示 x 轴名称

#### xAxis.axisName.text

- 参数类型：String
- 是否必填：否
- 默认值：`轴线名称`
- 描述：x 轴名称

#### xAxis.axisName.gap

- 参数类型：Number
- 是否必填：否
- 默认值：`10`
- 描述：轴线和轴线名称之间的距离

#### xAxis.axisName.textStyle

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：x 轴名称文字配置

##### xAxis.axisName.textStyle.color

- 参数类型：String
- 是否必填：否
- 默认值：`#666666`
- 描述：x 轴名称文字颜色

##### xAxis.axisName.textStyle.fontSize

- 参数类型：Number
- 是否必填：否
- 默认值：`15`
- 描述：x 轴名称文字大小

### xAxis.axisLabel

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：x 轴标签配置

#### xAxis.axisLabel.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示 x 轴标签

#### xAxis.axisLabel.rotate

- 参数类型：Number
- 是否必填：否
- 默认值：`0`
- 描述：x 轴标签倾斜角度

#### xAxis.axisLabel.gap

- 参数类型：Number
- 是否必填：否
- 默认值：`5`
- 描述：x 轴标签和 x 轴刻度线之间的距离

#### xAxis.axisLabel.textStyle

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：x 轴标签文字配置

##### xAxis.axisLabel.textStyle.color

- 参数类型：String
- 是否必填：否
- 默认值：`#666666`
- 描述：x 轴标签文字颜色

##### xAxis.axisLabel.textStyle.fontSize

- 参数类型：Number
- 是否必填：否
- 默认值：`12`
- 描述：x 轴标签文字大小

### xAxis.axisTick

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：x 轴刻度线配置

#### xAxis.axisTick.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示 x 轴刻度线

#### xAxis.axisTick.alignWithLabel

- 参数类型：Boolean
- 是否必填：否
- 默认值：`false`
- 描述：type 为 category 时生效，alignWithLabel 为 true 时，刻度线与标签对齐

#### xAxis.axisTick.length

- 参数类型：Number
- 是否必填：否
- 默认值：`5`
- 描述：x 轴刻度线长度

#### xAxis.axisTick.lineStyle

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：x 轴刻度线线配置

##### xAxis.axisTick.lineStyle.lineWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：x 轴刻度线线宽

##### xAxis.axisTick.lineStyle.color

- 参数类型：String
- 是否必填：否
- 默认值：`#666666`
- 描述：x 轴刻度线颜色

### xAxis.axisLine

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：x 轴轴线配置

#### xAxis.axisLine.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示 x 轴轴线

#### xAxis.axisLine.lineStyle

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：x 轴轴线配置

##### xAxis.axisLine.lineStyle.lineWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：x 轴轴线线宽

##### xAxis.axisLine.lineStyle.color

- 参数类型：String
- 是否必填：否
- 默认值：`#666666`
- 描述：x 轴轴线颜色

### xAxis.axisSplit

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：x 轴网格线配置

#### xAxis.axisSplit.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示 x 轴网格线

#### xAxis.axisSplit.alignWithLabel

- 参数类型：Boolean
- 是否必填：否
- 默认值：`false`
- 描述：type 为 category 时生效，alignWithLabel 为 true 时，网格线与标签对齐

#### xAxis.axisSplit.lineStyle

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：x 轴网线线配置

##### xAxis.axisSplit.lineStyle.lineWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：x 轴网格线线宽

##### xAxis.axisSplit.lineStyle.color

- 参数类型：String
- 是否必填：否
- 默认值：`#666666`
- 描述：x 轴网格线颜色

## categories

- 参数类型：Array
- 是否必填：否
- 默认值：`null`
- 描述：数据类别，使用场景参考图表示例代码

## series

- 参数类型：Array
- 是否必填：是
- 默认值：`null`
- 描述：数据列表

```js
$chart = new Charts({
    series: [{
        name: '数据',
        data: [],
    }],
    ...
    ...
})
```

## seriesItem.type

- 参数类型：String
- 是否必填：是
- 默认值：`null`
- 描述：图表类型，可选值：bar，line，pie，radar，scatter，funnel，candlestick，k，heatmap，treemap，tagCloud

### seriesItem.name

- 参数类型：String
- 是否必填：是
- 默认值：`null`
- 描述：数据名称

### seriesItem.data

- 参数类型：Array
- 是否必填：是
- 默认值：`null`
- 描述：数据数组，xy 轴仅一条轴 type 为 value 时：`data: [1,2,..]`；xy 轴 type 皆为 value 时：`data: [{x: 1, y: 1},...]`，其余格式参考图表示例代码

### seriesItem.label

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：数据标签配置

### seriesItem.label.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示数据标签

### seriesItem.label.fontSize

- 参数类型：Number
- 是否必填：否
- 默认值：`15`
- 描述：数据标签文字大小

### seriesItem.label.color

- 参数类型：String
- 是否必填：否
- 默认值：`auto`
- 描述：数据标签文字颜色

### seriesItem.label.margin

- 参数类型：Number
- 是否必填：否
- 默认值：`2`
- 描述：数据标签文字距离图形的距离

## 柱状图 series

```js
$chart = new Charts({
    series: [{
        name: '数据',
        data: [],
        barMaxWidth: 20,
        barMinWidth: 1,
        barWidth: 'auto',
        barGap: 5,
    }],
    ...
    ...
})
```

### seriesItem.barMaxWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`20`
- 描述：柱状图柱体最大宽度

### seriesItem.barMinWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：柱状图柱体最小宽度

### seriesItem.barWidth

- 参数类型：String
- 是否必填：否
- 默认值：`auto`
- 描述：柱状图柱体宽度

### seriesItem.barGap

- 参数类型：Number
- 是否必填：否
- 默认值：`5`
- 描述：柱状图柱体间隙

### seriesItem.itemStyle.color

- 参数类型：String | Object
- 是否必填：否
- 默认值：`auto`
- 描述：柱体颜色

### seriesItem.itemStyle.color.linearGradient

- 参数类型：Array
- 是否必填：是
- 默认值：`[x0, y0, x1, y1]`
- 描述：渐变色方向

### seriesItem.itemStyle.color.colors

- 参数类型：Array
- 是否必填：是
- 默认值：`[{offser, color},{offser, color}]`
- 描述：渐变色颜色配置

## 线图 series

```js
$chart = new Charts({
    series: [{
        name: '数据',
        data: [],
        smooth: false,
        connectNulls: false,
        line: {
            show: true,
            lineWidth: 2,
            color: 'auto',
            opacity: 1,
        },
        symbol: {
            show: true,
            type: 'circle',
            size: 7,
            color: 'auto',
        },
        area: {
            show: false,
            color: 'auto',
            opacity: 0.5,
        },
    }],
    ...
    ...
})
```

### seriesItem.smooth

- 参数类型：Boolean
- 是否必填：否
- 默认值：`false`
- 描述：是否显示曲线

### seriesItem.connectNulls

- 参数类型：Boolean
- 是否必填：否
- 默认值：`false`
- 描述：数据为 NULL 时，是否跳过连接

### seriesItem.line

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：折线图线配置

#### show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示折线图折线

#### lineWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`2`
- 描述：折线图折线线宽

#### color

- 参数类型：Boolean
- 是否必填：否
- 默认值：`auto`
- 描述：折线图折线颜色

#### opacity

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：折线图折线透明度

### seriesItem.symbol

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：折线图标记点配置

#### seriesItem.symbol.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示折线图标记点

#### seriesItem.symbol.type

- 参数类型：String
- 是否必填：否
- 默认值：`circle`
- 描述：折线图标记点类型，可选值：circle

#### seriesItem.symbol.size

- 参数类型：Number
- 是否必填：否
- 默认值：`7`
- 描述：折线图标记点大小

#### seriesItem.symbol.color

- 参数类型：String
- 是否必填：否
- 默认值：`auto`
- 描述：折线图标记点颜色

### seriesItem.area

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：折线图区域配置

#### seriesItem.area.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`false`
- 描述：是否显示折线图区域

#### seriesItem.area.color

- 参数类型：String | Object
- 是否必填：否
- 默认值：`auto`
- 描述：折线图区域颜色

#### seriesItem.itemStyle.color.linearGradient

- 参数类型：Array
- 是否必填：是
- 默认值：`[x0, y0, x1, y1]`
- 描述：渐变色方向

#### seriesItem.itemStyle.color.colors

- 参数类型：Array
- 是否必填：是
- 默认值：`[{offser, color},{offser, color}]`
- 描述：渐变色颜色配置

#### seriesItem.area.opacity

- 参数类型：Number
- 是否必填：否
- 默认值：`0.5`
- 描述：折线图区域颜色透明度

## 饼图 series

```js
$chart = new Charts({
    series: [{
        name: '数据',
        data: [],
        center: ['50%', '50%'],
        radius: ['0', '80%'],
        offsetAngle: 0,
        disablePieStroke: true,
        labelLine: {
            lineDotRadius: 3,
            lineWidth: 1,
            length1: 25,
            length2: 15,
        }
    }],
    ...
    ...
})
```

### seriesItem.center

- 参数类型：Array
- 是否必填：否
- 默认值：`['50%','50%']`
- 描述：饼图中心位置比例

### seriesItem.radius

- 参数类型：Array
- 是否必填：否
- 默认值：`['0','80%']`
- 描述：饼图内外直径比例

### seriesItem.offsetAngle

- 参数类型：Number
- 是否必填：否
- 默认值：`0`
- 描述：饼图起始角度偏移度数

### seriesItem.disablePieStroke

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：不绘制饼图各区块分割线

### seriesItem.labelLine

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：饼图引导线配置

#### seriesItem.labelLine.lineDotRadius

- 参数类型：Number
- 是否必填：否
- 默认值：`3`
- 描述：饼图引导线点半径

#### seriesItem.labelLine.lineWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：饼图引导线线宽

#### seriesItem.labelLine.length1

- 参数类型：Number
- 是否必填：否
- 默认值：`25`
- 描述：饼图引导线一段长度

#### seriesItem.labelLine.length2

- 参数类型：Number
- 是否必填：否
- 默认值：`15`
- 描述：饼图引导线二段长度

### seriesItem.title

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：饼图圆心标题配置

#### seriesItem.title.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`false`
- 描述：是否饼图圆心标题

#### seriesItem.title.text

- 参数类型：String
- 是否必填：否
- 默认值：`主标题`
- 描述：饼图圆心主标题

#### seriesItem.title.subtext

- 参数类型：String
- 是否必填：否
- 默认值：`副标题`
- 描述：饼图圆心副标题

#### seriesItem.title.itemGap

- 参数类型：Number
- 是否必填：否
- 默认值：`5`
- 描述：饼图圆心标题间距离

#### seriesItem.title.textStyle.fontSize

- 参数类型：Number
- 是否必填：否
- 默认值：`30`
- 描述：饼图圆心主标题文字大小

#### seriesItem.title.textStyle.fontColor

- 参数类型：Number
- 是否必填：否
- 默认值：`#666666`
- 描述：饼图圆心主标题文字颜色

#### seriesItem.title.textStyle.lineHeight

- 参数类型：Number
- 是否必填：否
- 默认值：`30`
- 描述：饼图圆心主标题文字行高

#### seriesItem.title.subtextStyle.fontSize

- 参数类型：Number
- 是否必填：否
- 默认值：`20`
- 描述：饼图圆心副标题文字大小

#### seriesItem.title.subtextStyle.fontColor

- 参数类型：Number
- 是否必填：否
- 默认值：`#999999`
- 描述：饼图圆心副标题文字颜色

#### seriesItem.title.subtextStyle.lineHeight

- 参数类型：Number
- 是否必填：否
- 默认值：`20`
- 描述：饼图圆心副标题文字行高

## 雷达图 series

```js
$chart = new Charts({
    series: [{
        name: '数据',
        data: [],
        line: {
            show: true,
            lineWidth: 1,
            color: 'auto',
            opacity: 1,
        },
        area: {
            show: true,
            color: 'auto',
            opacity: 0.5,
        },
        symbol: {
            show: true,
            type: 'circle',
            size: 7,
            color: 'auto',
        },
    }],
    ...
    ...
})
```

### seriesItem.line

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：雷达图数据线配置

#### seriesItem.line.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示雷达图数据线

#### seriesItem.line.lineWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：雷达图数据线线宽

#### seriesItem.line.color

- 参数类型：String
- 是否必填：否
- 默认值：`auto`
- 描述：雷达图数据线颜色

#### seriesItem.line.opacity

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：雷达图数据线颜色透明度

### seriesItem.symbol

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：雷达图数据标记点配置

#### seriesItem.symbol.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示雷达图标记点

#### seriesItem.symbol.type

- 参数类型：String
- 是否必填：否
- 默认值：`circle`
- 描述：雷达图标记点类型，可选值：circle

#### seriesItem.symbol.size

- 参数类型：Number
- 是否必填：否
- 默认值：`7`
- 描述：雷达图标记点大小

#### seriesItem.symbol.color

- 参数类型：String
- 是否必填：否
- 默认值：`auto`
- 描述：雷达图标记点颜色

### seriesItem.area

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：雷达图区域配置

#### seriesItem.area.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示雷达图区域

#### seriesItem.area.color

- 参数类型：String
- 是否必填：否
- 默认值：`auto`
- 描述：雷达图区域颜色

#### seriesItem.area.opacity

- 参数类型：Number
- 是否必填：否
- 默认值：`0.5`
- 描述：雷达图区域颜色透明度

## 散点图 series

```js
$chart = new Charts({
    series: [{
        name: '数据',
        data: [],
        color: 'auto',
        radius: 10,
        opacity: 1,
    }],
    ...
    ...
})
```

### seriesItem.color

- 参数类型：String
- 是否必填：否
- 默认值：`auto`
- 描述：散点图点颜色

### seriesItem.radius

- 参数类型：Number/Array
- 是否必填：否
- 默认值：`10`
- 描述：散点图点半径，值为数组时可设置半径最小值最大值

### seriesItem.itemStyle.color

- 参数类型：String/Array
- 是否必填：否
- 默认值：`auto`
- 描述：散点图颜色，值为数组时可设置颜色区间，仅支持使用量对比图

### seriesItem.opacity

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：散点图点透明度

## 漏斗图 series

```js
$chart = new Charts({
    series: [
        {
            name: '数据',
            width: 'auto',
            height: 'auto',
            top: '0%',
            left: '0%',
            right: '0%',
            bottom: '0%',
            max: 100,
            min: 0,
            gap: 5,
            shape: 'funnel', // funnel, pyramid
            sort: 'descending', // descending, ascending
            funnelAlign: 'center', // left, center, right
                label: {
                position: 'inside', // inside, outside
            },
            itemStyle: {
                borderColor: '#ffffff',
                borderWidth: 1,
            },
            data: [
                { value: 60, name: '访问' },
                { value: 40, name: '咨询' },
                { value: 20, name: '订单' },
                { value: 80, name: '点击' },
                { value: 100, name: '展现' },
            ],
        },
    ],
    ...
    ...
})
```

### seriesItem.width

- 参数类型：String
- 是否必填：否
- 默认值：`auto`
- 描述：漏斗图宽度

### seriesItem.height

- 参数类型：String
- 是否必填：否
- 默认值：`auto`
- 描述：漏斗图高度

### seriesItem.top

- 参数类型：String
- 是否必填：否
- 默认值：`0%`
- 描述：漏斗图上间距

### seriesItem.left

- 参数类型：String
- 是否必填：否
- 默认值：`0%`
- 描述：漏斗图左间距

### seriesItem.right

- 参数类型：String
- 是否必填：否
- 默认值：`0%`
- 描述：漏斗图右间距

### seriesItem.bottom

- 参数类型：String
- 是否必填：否
- 默认值：`0%`
- 描述：漏斗图下间距

### seriesItem.shape

- 参数类型：String
- 是否必填：否
- 默认值：`funnel`
- 描述：漏斗图形状，可选值：funnel, pyramid

### seriesItem.sort

- 参数类型：String
- 是否必填：否
- 默认值：`descending`
- 描述：漏斗图数据排序，可选值：descending, ascending

### seriesItem.funnelAlign

- 参数类型：String
- 是否必填：否
- 默认值：`center`
- 描述：漏斗图水平对齐，可选值：left, center, right

### seriesItem.max

- 参数类型：Number
- 是否必填：否
- 默认值：`100`
- 描述：漏斗图最大比例

### seriesItem.min

- 参数类型：Number
- 是否必填：否
- 默认值：`0`
- 描述：漏斗图最小比例

### seriesItem.gap

- 参数类型：Number
- 是否必填：否
- 默认值：`5`
- 描述：漏斗图各层之间的间距

### seriesItem.label.position

- 参数类型：String
- 是否必填：否
- 默认值：`inside`
- 描述：漏斗图标签位置，可选值：inside, outside

### seriesItem.label.itemStyle.borderColor

- 参数类型：String
- 是否必填：否
- 默认值：`#ffffff`
- 描述：漏斗图各层边框颜色

### seriesItem.label.itemStyle.borderWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：漏斗图各层边框线宽

## 蜡烛图 series

```js
$chart = new Charts({
    series: [{
        name: '蜡烛图',
        type: 'candlestick',
        data: [],
        barMaxWidth: 20,
        barMinWidth: 1,
        barWidth: 'auto',
        itemStyle: {
            color: '#ec0000',
            bordercolor: '#ec0000',
            opacity: 1,
            color0: '#00da3c',
            bordercolor0: '#00da3c',
            opacity0: 1,
            borderWidth: 1,
        },
        highLine: {
            show: false,
            lineStyle: {
                color: '#ec0000',
                lineWidth: 1,
                lineDash: [10, 15],
                opacity: 1,
            },
        },
        lowLine: {
            show: false,
            lineStyle: {
                color: '#ec0000',
                lineWidth: 1,
                lineDash: [10, 15],
                opacity: 1,
            },
        },
        bar: {
            show: false,
            height: 50,
            margin: 15,
            itemStyle: {
                color: 'auto',
                opacity: 1,
            },
            lineStyle: {
                lineWidth: 1,
                lineColor: '#666666',
            },
        },
    }],
    ...
    ...
})
```

### seriesItem.barMaxWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`20`
- 描述：蜡烛柱体最大宽度

### seriesItem.barMinWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：蜡烛柱体最小宽度

### seriesItem.barWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`auto`
- 描述：蜡烛柱体宽度

### seriesItem.itemStyle.color

- 参数类型：String
- 是否必填：否
- 默认值：`#ec0000`
- 描述：阳线颜色

### seriesItem.itemStyle.bordercolor

- 参数类型：String
- 是否必填：否
- 默认值：`#ec0000`
- 描述：阳线边框颜色

### seriesItem.itemStyle.opacity

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：阳线透明度

### seriesItem.itemStyle.color0

- 参数类型：String
- 是否必填：否
- 默认值：`#00da3c`
- 描述：阴线颜色

### seriesItem.itemStyle.bordercolor0

- 参数类型：String
- 是否必填：否
- 默认值：`#00da3c`
- 描述：阴线边框颜色

### seriesItem.itemStyle.opacity0

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：阴线透明度

### seriesItem.itemStyle.borderWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：柱体边框线宽

### seriesItem.highLine.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`false`
- 描述：是否显示最高价线

### seriesItem.highLine.lineStyle.color

- 参数类型：String
- 是否必填：否
- 默认值：`#ec0000`
- 描述：最高价线颜色

### seriesItem.highLine.lineStyle.lineWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：最高价线线宽

### seriesItem.highLine.lineStyle.lineDash

- 参数类型：Array
- 是否必填：否
- 默认值：`[10, 15]`
- 描述：最高价线虚线配置

### seriesItem.highLine.lineStyle.opacity

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：最高价线透明度

### seriesItem.lowLine.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`false`
- 描述：是否显示最低价线

### seriesItem.lowLine.lineStyle.color

- 参数类型：String
- 是否必填：否
- 默认值：`#ec0000`
- 描述：最低价线颜色

### seriesItem.lowLine.lineStyle.lineWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：最低价线线宽

### seriesItem.lowLine.lineStyle.lineDash

- 参数类型：Array
- 是否必填：否
- 默认值：`[10, 15]`
- 描述：最低价线虚线配置

### seriesItem.lowLine.lineStyle.opacity

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：最低价线透明度

### seriesItem.bar.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`false`
- 描述：是否显示成交量柱体

### seriesItem.bar.data

- 参数类型：Array
- 是否必填：否
- 默认值：`[]`
- 描述：成交量数据

### seriesItem.bar.height

- 参数类型：Number
- 是否必填：否
- 默认值：`50`
- 描述：成交量柱体最大高度

### seriesItem.bar.margin

- 参数类型：Number
- 是否必填：否
- 默认值：`15`
- 描述：成交量柱体距离蜡烛图距离

### seriesItem.bar.itemStyle.color

- 参数类型：String
- 是否必填：否
- 默认值：`auto`
- 描述：成交量柱体颜色

### seriesItem.bar.itemStyle.opacity

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：成交量柱体透明度

### seriesItem.bar.lineStyle.lineWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：成交量柱体边框线框

### seriesItem.bar.lineStyle.lineColor

- 参数类型：String
- 是否必填：否
- 默认值：`#666666`
- 描述：成交量柱体边框颜色

## 热力图 series

```js
$chart = new Charts({
    series: [{
        name: '热力图',
        type: 'heatmap',
        data: [],
        itemStyle: {
            color: ['#BAE7FF', '#0050B3'],
            useSplit: false,
        }
    }],
    ...
    ...
})
```

### seriesItem.itemStyle.color

- 参数类型：Array
- 是否必填：是
- 默认值：`['#BAE7FF', '#0050B3']`
- 描述：热力图颜色区间

### seriesItem.itemStyle.useSplit

- 参数类型：Boolean
- 是否必填：否
- 默认值：`false`
- 描述：是否显示热力图分割线

## 矩形树图 series

```js
$chart = new Charts({
    series: [{
        name: '矩形树图',
        type: 'treemap',
        splitLine: {
            show: true,
            lineWidth: 5,
            color: '#ffffff',
        },
    }],
    ...
    ...
})
```

### seriesItem.splitLine.show

- 参数类型：Boolean
- 是否必填：否
- 默认值：`true`
- 描述：是否显示矩形树图分割线

### seriesItem.splitLine.lineWidth

- 参数类型：Number
- 是否必填：否
- 默认值：`5`
- 描述：矩形树图分割线线宽

### seriesItem.splitLine.color

- 参数类型：String
- 是否必填：否
- 默认值：`#ffffff`
- 描述：矩形树图分割线颜色

## 词云图 series

```js
$chart = new Charts({
    series: [{
        name: '词云图',
        type: 'tagCloud',
        canvas: this.$element('hideCanvas'),
        size: [600, 400],
        font: 'Serif',
        fontSize,
        padding: 0,
        rotate,
        spiral: 'archimedean',
        timeInterval: 5000,
        data: []
    }],
    ...
    ...
})
```

### seriesItem.canvas

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：词云图计算用 canvas 对象，未配置默认图表 canvas 对象

### seriesItem.size

- 参数类型：Array
- 是否必填：否
- 默认值：`[width, height]`
- 描述：词云图长宽, 未配置默认图表长宽

### seriesItem.font

- 参数类型：String
- 是否必填：否
- 默认值：`Serif`
- 描述：词云图字体

### seriesItem.fontSize

- 参数类型：Number
- 是否必填：否
- 默认值：`15`
- 描述：词云图字体大小

### seriesItem.padding

- 参数类型：Number
- 是否必填：否
- 默认值：`1`
- 描述：词云图字体间隔

### seriesItem.rotate

- 参数类型：Number
- 是否必填：否
- 默认值：`0`
- 描述：词云图字体旋转角度

### seriesItem.spiral

- 参数类型：String
- 是否必填：否
- 默认值：`archimedean`
- 描述：词云图螺旋类型，可选值：'archimedean', 'rectangular'

### seriesItem.timeInterval

- 参数类型：Number
- 是否必填：否
- 默认值：`500`
- 描述：词云图计算时间间隔

### seriesItem.imageMask

- 参数类型：Object
- 是否必填：否
- 默认值：`null`
- 描述：词云图图形图片对象
