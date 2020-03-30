## 折线图 line

### 使用效果

<div style="text-align: center;margin: 40px;">
  <img src="../assets/charts-line-1.jpg" alt="charts-line-1" style="width:300px" />
</div>

### 使用方法

在 script 中引入方法

```html
<script>
  import Charts from "apex-ui/components/charts/qacharts-min.js";
</script>
```

### 示例

```html
<template>
  <div class="chart-wrap">
    <canvas
      id="chart"
      style="width: {{width}}px; height: {{height}}px;"
      ontouchstart="ontouchstart"
    ></canvas>
  </div>
</template>

<script>
  // import Charts from 'apex/components/charts/qacharts.js'
  import Charts from "apex/components/charts/qacharts-min.js";

  let $chart = null;

  export default {
    data() {
      return {};
    },
    initChart() {
      return new Promise((resolve, reject) => {
        $chart = new Charts({
          element: this.$element("chart"),
          type: "line",
          width: 600,
          height: 400,
          animation: false,
          legend: {
            shapeWidth: 30,
            shapeHeight: 15
          },
          categories: ["一", "二", "三", "四", "五", "六", "日"],
          series: [
            {
              name: "数据",
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ],
          onRenderComplete: () => {
            console.log("chartLine renderComplete");
            resolve();
          }
        });
      });
    },
    ontouchstart(e) {
      console.log(`chartLine touchstart`);
    }
  };
</script>
```
