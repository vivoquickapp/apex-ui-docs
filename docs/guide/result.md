## 结果页 result

### 描述

在整张页面中组织插画、图标、文字等内容，向用户反馈操作结果。

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="../assets/result.gif" alt="result" style="width:300px" /></div>


### 使用方法

在`.ux`文件中引入组件

```html
<import name="my-result" src="apex-ui/components/result/index"></import>
```

### 示例

```html
<template>
    <result-page icon="{{ icon }}" buttons="{{ buttons }}" title="支付结果" desc="本次支付的结果成功" ontap="clicked">
        <div class="header" slot="header">
            <text>头部内容</text>
        </div>
        <div class="footer" slot="footer">
            <text>Copyright © 2019-present</text>
        </div>
    </result-page>
</template>
<script>
    import prompt from '@system.prompt';
    import router from '@system.router';

    export default {
        data() {
            return {
                icon: {
                    type: 'checkmark-circle',
                    size: 200,
                    color: '#33cd5f'
                },
                buttons: [
                    {
                        text: '确定',
                        type: 'primary'
                    },
                    {
                        text: '取消',
                        type: 'ghost'
                    }
                ]
            }
        },
        clicked(e) {
            console.log(e);
            const index = e.detail.index;
            index === 0 && prompt.showToast({
                message: '支付成功！'
            });
            index === 1 && router.back()
        }
    }
</script>

```

### API

#### 组件属性

| 属性        | 类型    | 默认值             | 说明             |
| ----------- | ------- | ------------------ | ---------------- |
| fixed       | Boolean | false              | 底部是否固定位置 |
| title       | String  | -                  | 标题             |
| desc        | String  | -                  | 描述信息         |
| extra       | String  | -                  | 底部额外信息     |
| icon        | Object  | -                  | 图标             |
| icon.type   | String  | 'checkmark-circle' | 图标类型         |
| icon.size   | Number  | 200                | 图标大小         |
| icon.color  | String  | '#33cd5f'          | 图标颜色         |
| buttons     | Array   | []                 | 按钮组           |
| button.text | String  | -                  | 按钮文字         |
| button.type | String  | -                  | 按钮类型         |

#### 组件事件

| 事件名称 | 事件描述                              | 返回值        |
| -------- | ------------------------------------- | ------------- |
| tap      | 组件按钮点击事件，返回点击按钮的index | {index:index} |

#### slot

| 名称   | 说明    |
| ------ | ------- |
| header | 头部内容，无法与icon属性同用，slot的内容会覆盖属性的内容 |
| footer | 底部内容，无法与extra属性同用，slot的内容会覆盖属性的内容  |
| - | 结果页主体内容 |
