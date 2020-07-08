# 方法

## updateData

- 参数：`options`
- 方法描述：更新图表数据，重新绘制图表

## stopAnimation

- 参数：`null`
- 方法描述：停止当前正在进行的动画效果，直接展示渲染的最终结果

## getCurrentIndex

- 参数：`e`
- 方法描述: 在组件 touchstart 事件上使用，获取点击位置的数据下标, 支持柱状图，线图，饼图，雷达图，蜡烛图
- 返回数据：`{currentData, offset}`

## showTooltip

- 参数：`e`
- 方法描述: 在组件 touchstart, touchmove 事件上使用，显示 tooltip, 支持柱状图，线图，饼图，雷达图，蜡烛图

## hideTooltip

- 参数：`null`
- 方法描述: 在组件 touchend 事件上使用，显示 tooltip, 支持柱状图，线图，饼图，雷达图，蜡烛图
