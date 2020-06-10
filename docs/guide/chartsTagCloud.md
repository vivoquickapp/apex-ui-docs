# 词云图 tagCloud

## 词云图

<div style="text-align: center; margin: 40px;">
  <img src="../assets/charts-tagcloud.jpg" style="width:300px" />
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
  import worldPopulation from "./world-population.js";

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
      const range = worldPopulation.concat([]).sort((a, b) => {
        return a.value - b.value;
      });
      const min = range[0].value;
      const max = range[range.length - 1].value;
      const MAX_FONTSIZE = 36; // 最大的字体
      const MIN_FONTSIZE = 12; // 最小的字体

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
              name: "词云图",
              type: "tagCloud",
              padding: 0,
              timeInterval: 5000,
              font: "Serif",
              spiral: "archimedean",
              imageMask,
              rotate: function rotate() {
                let random = ~~(Math.random() * 4) % 4;
                if (random === 2) {
                  random = 0;
                }
                return random * 90; // 0, 90, 270
              },
              fontSize: function fontSize(d) {
                if (d.value) {
                  return (
                    ((d.value - min) / (max - min)) *
                      (MAX_FONTSIZE - MIN_FONTSIZE) +
                    MIN_FONTSIZE
                  );
                }
                return 0;
              },
              data: worldPopulation
            }
          ],
          onRenderComplete: () => {
            console.log("chartTagCloud renderComplete");
            resolve();
          }
        });
      });
    }
  };
</script>
```
