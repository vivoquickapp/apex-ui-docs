# 事件

## onRenderComplete

- 参数类型：Function
- 是否必填：否
- 默认值：`null`
- 描述：图表渲染结束回调函数

```html
<script>
  import Charts from "apex-ui/components/charts/qacharts-min.js";

  let $chart;

  export default {
    onShow() {
      this.initChart();
    },
    initChart() {
      $chart = new Charts({
          ...
          ...
          ...
          onRenderComplete: () => {
            console.log('chart renderComplete')
          },
      });
    }
  };
</script>
```
