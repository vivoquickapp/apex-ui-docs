## 饼图 pie

### 使用效果

<div style="text-align: center;margin: 40px;">
  <img src="../assets/charts-pie-1.jpg" alt="charts-pie-1" style="width:300px" />
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
          type: "pie",
          width: 600,
          height: 400,
          series: [
            {
              data: [
                {
                  name: "cat1",
                  value: 50
                },
                {
                  name: "cat2",
                  value: 30
                },
                {
                  name: "cat3",
                  value: 1
                },
                {
                  name: "cat4",
                  value: 1
                },
                {
                  name: "cat5",
                  value: 46
                }
              ]
            }
          ],
          onRenderComplete: () => {
            console.log("chartPie renderComplete");
            resolve();
          }
        });
      });
    },
    ontouchstart(e) {
      console.log(`chartPie touchstart`);
    }
  };
</script>
```
