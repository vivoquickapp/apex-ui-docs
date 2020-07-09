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
    <canvas
      id="hideCharts"
      style="width: {{width}}px; height: {{height}}px;"
      show="{{false}}"
    ></canvas>
  </div>
</template>

<script>
  import Charts from "apex-ui/components/charts/qacharts-min.js";
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

      const fontSize = function fontSize(d) {
        if (d.value) {
          return ((d.value - min) / (max - min)) * (MAX_FONTSIZE - MIN_FONTSIZE) + MIN_FONTSIZE
        }
        return 0
      }

      const rotate = function rotate() {
        let random = ~~(Math.random() * 4) % 4
        if (random === 2) {
          random = 0
        }
        return random * 90 // 0, 90, 270
      }

      const data = worldPopulation.map(item => {
        item.size = fontSize(item)
        return { ...item }
      })

      $chart = new Charts({
        element: this.$element("chart"),
        width: this.width,
        height: this.height,
        legend: {
          show: false
        },
        series: [
          {
            name: '词云图',
            type: 'tagCloud',
            canvas: this.$element('hideCanvas'),
            size: [this.width, this.height],
            font: 'Serif',
            fontSize,
            padding: 0,
            rotate,
            spiral: 'archimedean',
            timeInterval: 5000,
            data,
          }
        ],
        onRenderComplete: () => {
          console.log("chartTagCloud renderComplete");
        }
      });
    }
  };
</script>
```
