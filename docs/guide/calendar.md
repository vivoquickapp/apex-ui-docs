## 日历 calendar

### 描述

显示日期,提供两种获取所选日期的方式。

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="../assets/calendar.gif" style="width:300px" /></div>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="my-calendar" src="apex-ui/components/calendar/index"></import>
```

### 示例

```html
<template>
    <div class="wrap">
        <div class="line">
            <text>单程使用</text>
            <my-calendar visible="{{open}}" trip="single" onschedule="getSchedule"></my-calendar>
        </div>
        <div class="line">
            <text>联程使用</text>
            <my-calendar visible="{{open}}" trip="round" onschedule="getSchedule"></my-calendar>
        </div>
        <div class="line">
            <text>自定义主题</text>
            <my-calendar visible="{{open}}" number="{{num}}" onschedule="getSchedule" click-style="{{tapArray}}" subtitle="{{subColor}}" title="{{desc}}" bg-color="{{bgColor}}"></my-calendar>
        </div>
        <div class="line">
            <text>自定义标题</text>
            <my-calendar visible="{{open}}" onschedule="getSchedule">
                <div slot="title" class="title">
                    <text>自定义日历标题<text>
                </div>
            </my-calendar>
        </div>
    </div>
</template>
```

```less
.wrap {
    flex-direction: column;
    .line {
        flex-direction: row;
        justify-content: space-between;
        height: 100px;
        border-bottom-color: #bbbec4;
        border-bottom-width: 1px;
        width: 100%;
        align-items: center;
        padding: 0 20px;
    }
    .title{
        height:100px;
        width:100%,
        background-color:'#ffff00',
        text{
            width:100%,
            text-align:center,
            font-size:40px
        }
    }
}
```

```javascript
export default {
    data() {
        return {
            open:true,
            num:8,
            bgColor:'#ffffff',
            desc:'test message',
            subColor:'aliceblue',
            tapArray:['#f7c992', '#ffe4c4']
        }
    },
    getSchedule(e){
        console.log(JSON.parse(e.detail.data))
    }
}
```

### API

#### 组件属性

| 属性        | 类型     | 默认值                 | 说明                                    |
| ----------- | ------- | ---------------------- | --------------------------------------- |
| visible     | Boolean | false                  | 组件当前状态                             |
| trip        | String  | single                 | 组件显示方式                             |
| number      | Number  | 8                      | 组件显示月份总数                          |
| title       | String  | 'test message'         | 组件主标题描述                          |
| subtitle    | String  | 'aliceblue'            | 组件子标题背景色                          |
| bg-color    | String  | '#ffffff'              | 组件页面背景色                            |
| click-style | Array   | ['#f7c992', '#ffe4c4'] | 日期被点击时的背景色,间隔日期的背景色      |

#### 组件事件

| 事件名称  |  事件描述                |  返回值                                                          |
| -------- | ------------------------ | -------------------------------------------------------------------------- |
| schedule | 日期选择发生改变时的事件   | {year: yaer, month: month, day: day, week: week} || {start: {…}, end: {…}} |
