# 线图 line

## 基础折线图

<div style="text-align: center; margin: 40px;">
  <img src="../assets/charts-line-a-1.jpg" alt="charts-line-a-1" style="width:300px" />
</div>

### 示例代码

```html
<template>
  <div class="chart-wrap">
    <canvas id="chart" style="width: {{width}}px; height: {{height}}px;"></canvas>
  </div>
</template>

<script>
  // import Charts from 'apex/components/charts/qacharts.js'
  import Charts from 'apex/components/charts/qacharts-min.js'

  let $chart

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
          element: this.$element('chart'),
          type: 'line',
          width: this.width,
          height: this.height,
          legend: {
            shapeWidth: 30,
            shapeHeight: 15,
          },
          xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7'],
          },
          series: [
            {
              name: '数据',
              data: [820, 932, 901, 934, 1290, 1330, 1320],
            },
          ],
          onRenderComplete: () => {
            console.log('chartLine renderComplete')
            resolve()
          },
        })
      })
    },
  }
</script>
```

## 曲线图

<div style="text-align: center; margin: 40px;">
  <img src="../assets/charts-line-b-1.jpg" alt="charts-line-b-1" style="width:300px" />
</div>

### 示例代码

```html
<template>
  <div class="chart-wrap">
    <canvas id="chart" style="width: {{width}}px; height: {{height}}px;"></canvas>
  </div>
</template>

<script>
  // import Charts from 'apex/components/charts/qacharts.js'
  import Charts from 'apex/components/charts/qacharts-min.js'

  let $chart

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
          element: this.$element('chart'),
          type: 'line',
          width: this.width,
          height: this.height,
          legend: {
            shapeWidth: 30,
            shapeHeight: 15,
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1', '2', '3', '4', '5', '6', '7'],
          },
          series: [
            {
              name: '数据',
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              smooth: true,
            },
          ],
          onRenderComplete: () => {
            console.log('chartLine renderComplete')
            resolve()
          },
        })
      })
    },
  }
</script>
```

## 面积图

<div style="text-align: center; margin: 40px;">
  <img src="../assets/charts-line-c-1.jpg" alt="charts-line-c-1" style="width:300px" />
</div>

### 示例代码

```html
<template>
  <div class="chart-wrap">
    <canvas id="chart" style="width: {{width}}px; height: {{height}}px;"></canvas>
  </div>
</template>

<script>
  // import Charts from 'apex/components/charts/qacharts.js'
  import Charts from 'apex/components/charts/qacharts-min.js'

  let $chart

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
          element: this.$element('chart'),
          type: 'line',
          width: this.width,
          height: this.height,
          legend: {
            shapeWidth: 30,
            shapeHeight: 15,
          },
          xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7'],
          },
          series: [
            {
              name: '数据',
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              area: {
                show: true,
              },
            },
          ],
          onRenderComplete: () => {
            console.log('chartLine renderComplete')
            resolve()
          },
        })
      })
    },
  }
</script>
```

## 存在空值

<div style="text-align: center; margin: 40px;">
  <img src="../assets/charts-line-d-1.jpg" alt="charts-line-d-1" style="width:300px" />
  <img src="../assets/charts-line-d-2.jpg" alt="charts-line-d-2" style="width:300px" />
</div>

### 示例代码

```html
<template>
  <div class="chart-wrap">
    <canvas id="chart" style="width: {{width}}px; height: {{height}}px;"></canvas>
  </div>
</template>

<script>
  // import Charts from 'apex/components/charts/qacharts.js'
  import Charts from 'apex/components/charts/qacharts-min.js'

  let $chart

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
          element: this.$element('chart'),
          type: 'line',
          width: this.width,
          height: this.height,
          legend: {
            shapeWidth: 30,
            shapeHeight: 15,
          },
          xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7'],
          },
          series: [
            {
              name: '数据',
              connectNulls: true,
              data: [820, 932, null, 934, 1290, 1330, 1320],
            },
          ],
          onRenderComplete: () => {
            console.log('chartLine renderComplete')
            resolve()
          },
        })
      })
    },
  }
</script>
```
