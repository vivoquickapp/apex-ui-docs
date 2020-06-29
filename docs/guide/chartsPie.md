# 饼图 pie

## 饼图

<div style="text-align: center; margin: 40px;">
  <img src="../assets/charts-pie-a-1.jpg" style="width:300px" />
</div>

### 示例代码

```html
<template>
  <div class="chart-wrap">
    <canvas id="chart" style="width: {{width}}px; height: {{height}}px;"></canvas>
  </div>
</template>

<script>
  import Charts from 'apex-ui/components/charts/qacharts-min.js'

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
          width: this.width,
          height: this.height,
          series: [
            {
              name: "饼图",
              type: 'pie',
              data: [
                {
                  name: 'cat1',
                  value: 50,
                },
                {
                  name: 'cat2',
                  value: 30,
                },
                {
                  name: 'cat3',
                  value: 1,
                },
                {
                  name: 'cat4',
                  value: 1,
                },
                {
                  name: 'cat5',
                  value: 46,
                },
              ],
            },
          ],
          onRenderComplete: () => {
            console.log('chartPie renderComplete')
            resolve()
          },
        })
      })
    },
  }
</script>
```

## 环形图

<div style="text-align: center; margin: 40px;">
  <img src="../assets/charts-pie-b-1.jpg" alt="charts-pie-b-1" style="width:300px" />
</div>

### 示例代码

```html
<template>
  <div class="chart-wrap">
    <canvas id="chart" style="width: {{width}}px; height: {{height}}px;"></canvas>
  </div>
</template>

<script>
  import Charts from "apex-ui/components/charts/qacharts-min.js";

  let $chart;

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
      return {};
    },
    initChart() {
      $chart = new Charts({
        element: this.$element("chart"),
        type: "pie",
        width: this.width,
        height: this.height,
        series: [
          {
            radius: ['60%', '80%']
            data: [
              {
                name: 'cat1',
                value: 50,
              },
              {
                name: 'cat2',
                value: 30,
              },
              {
                name: 'cat3',
                value: 1,
              },
              {
                name: 'cat4',
                value: 1,
              },
              {
                name: 'cat5',
                value: 46,
              },
            ],
          }
        ],
        onRenderComplete: () => {
          console.log("chartPie renderComplete");
          resolve();
        }
      });
    }
  };
</script>
```
