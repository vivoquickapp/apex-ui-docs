## 倒计时 countdown

### 描述

用于展示倒计时数据。

### 使用效果

<preview page="countdown"/>

### 使用方法

在script中引入方法

```html
<script>
    import Countdown from 'apex-ui/components/countdown/index';
</script>
```

### 示例

```html
<import name="my-button" src="apex-ui/components/button/index"></import>
<import name="my-input" src="apex-ui/components/input/index"></import>
<template>
  <div class="wrap">
    <div class="countdown">
      <text>距离2077年还剩:</text>
      <text>{{number1}}</text>
    </div>
    <div class="vcode">
      <my-input title="手机号" type="number" placeholder="请输入手机号"></my-input>
      <my-button if="number2 === 0" ontap="vcode()">获取验证码</my-button>
      <my-button if="number2 !== 0" type="ghost">{{number2}}</my-button>
    </div>
    <div class="countdown">
      <text>距离这个页面消失还剩:{{number3}}</text>
    </div>
    <my-button ontap="start()">开始</my-button>
    <my-button ontap="stop()">停止</my-button>
    <my-button ontap="update()">更新</my-button>
  </div>
</template>
<style lang="less">
  .wrap {
    flex-direction: column;
    padding: 20px;

    .countdown {
      padding: 40px 0;
      flex-direction: column;

      text {
        font-size: 40px;
      }
    }

    .vcode {
      margin: 30px 0;
      justify-content: space-between;
    }
  }
</style>
<script>
    import Countdown from 'apex-ui/components/countdown/index';

    export default {
        data() {
            return {
                number1: 0,
                number2: 0,
                number3: 0
            }
        },
        onInit() {
            const that = this;

            this.countdown1 = new Countdown({
                date: 'June 7, 2077 17:07:07',
                render(date) {
                    const years = date.years + ' 年 ';
                    const days = this.leadingZeros(date.days, 3) + ' 天 ';
                    const hours = this.leadingZeros(date.hours, 2) + ' 时 ';
                    const min = this.leadingZeros(date.min, 2) + ' 分 ';
                    const sec = this.leadingZeros(date.sec, 2) + ' 秒 ';

                    that.number1 = years + days + hours + min + sec;
                },
            });

            this.countdown3 = new Countdown({
                date: +(new Date()) + 60000 * 20,
                render(date) {
                    const min = this.leadingZeros(date.min, 2) + ' 分 ';
                    const sec = this.leadingZeros(date.sec, 2) + ' 秒 ';

                    that.number3 = min + sec;
                },
            })
        },
        start() {
            this.countdown3.start()
        },
        stop() {
            this.countdown3.stop()
        },
        update() {
            this.countdown3.update(+(new Date) + 60000 * 30)
        },
        vcode() {
            const that = this;
            if (this.number2 && this.number2.interval) return !1;
            new Countdown({
                date: +(new Date) + 60000,
                onEnd() {
                    that.number2 = 0;
                },
                render(date) {
                    const sec = this.leadingZeros(date.sec, 2) + ' 秒 ';
                    date.sec !== 0 && (that.number2 = sec);
                },
            })
        }
    }
</script>

```

### API

#### 组件属性

| 属性            | 类型     | 默认值 | 说明                   |
| --------------- | -------- | ------ | ---------------------- |
| options         | Object   | -      | 配置项                 |
| options.date    | String   | ''     | 倒计时截止的日期       |
| options.refresh | Number   | 1000   | 刷新周期               |
| options.offset  | Number   | 0      | 偏移量                 |
| options.onEnd   | Function | -      | 倒计时结束时的回调函数 |
| options.render  | Function | -      | 渲染组件的回调函数     |
