# 矩形树图 treemap

## 矩形树图

<div style="text-align: center; margin: 40px;">
  <img src="../assets/charts-treemap.jpg" style="width:300px" />
</div>

### 示例代码

```html
<template>
  <div class="chart-wrap">
    <canvas
      id="chart"
      style="width: {{width}}px; height: {{height}}px;"
    ></canvas>
  </div>
</template>

<script>
  // import Charts from 'apex/components/charts/qacharts.js'
  import Charts from "apex/components/charts/qacharts-min.js";

  let $chart = null;

  export default {
    props: {
      width: {
        default: 600
      },
      height: {
        default: 400
      }
    },
    data() {
      return {};
    },
    initChart() {
      return new Promise((resolve, reject) => {
        $chart = new Charts({
          element: this.$element("chart"),
          width: this.width,
          height: this.height,
          legend: {
            show: false
          },
          series: [
            {
              name: "矩形树图",
              type: "treemap",
              tile: "treemapResquarify", // treemapBinary treemapDice treemapSlice treemapSliceDice treemapResquarify treemapSquarify
              splitLine: {
                show: true,
                lineWidth: 5,
                color: "#ffffff"
              },
              data: [
                {
                  name: "分类 1",
                  value: 3
                },
                {
                  name: "分类 2",
                  value: 2
                },
                {
                  name: "分类 3",
                  value: 6
                },
                {
                  name: "分类 4",
                  value: 4
                },
                {
                  name: "分类 5",
                  value: 1
                },
                {
                  name: "分类 6",
                  value: 2
                },
                {
                  name: "分类 7",
                  value: 6
                }
              ]
            }
          ],
          onRenderComplete: () => {
            console.log("chartTreemap renderComplete");
            resolve();
          }
        });
      });
    }
  };
</script>
```
