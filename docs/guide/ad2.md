## 广告 2.0 ad

### 描述

原生广告 1.0 能力被厂商逐步收回，不再支持，根据最新的厂商提供的原生自渲染 2.0 广告开发的一套广告。

::: tip
1、在无广告展示时，广告组件标签不会占用高度

2、当前仅支持 vivo 广告 adUnitId，后续根据其他厂商开放广告接口情况适配

3、厂商开发者后台的注册的快应用包名会校验，所以需要使用了和 adUnitId 不同的包名，加载广告会失败
:::

### 使用效果

<div style="text-align: center;margin: 40px;">
    <img src="https://zhanstatic.vivo.com.cn/wukong/img/5f914d15-e302-4679-ae29-7ca1e8917279.jpg" alt="ad" style="width:300px" />
   	<img src="https://zhanstatic.vivo.com.cn/wukong/img/a5503697-deef-4390-8d6e-2958e77c24fe.jpg" alt="ad" style="width:300px" />
    <img src="https://zhanstatic.vivo.com.cn/wukong/img/22b06fc7-f1d0-47ca-9e6d-2f39c3115d72.jpg" alt="ad" style="width:300px" />
    <img src="https://zhanstatic.vivo.com.cn/wukong/img/59f168de-0dc6-4936-8970-150f9420eba7.jpg" alt="ad" style="width:300px" />
    <img src="https://zhanstatic.vivo.com.cn/wukong/img/46eef254-1225-49ac-8d48-2b912f7c01e1.jpg" alt="ad" style="width:300px" />
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="ad" src="apex-ui/components/ad2/index"></import>
```

### 示例

```html
<template>
  <div class="wrap">
    <ad
      ad-unit-id="{{adUnitId}}"
      onload="loadHandler"
      onerror="errorHandler"
      onclose="closeHandler"
    ></ad>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        adUnitId: "9d66217c88614253bd68a291c273f8d5" // 这个id是vivo的com.quickapp.center创建的，需要修改manifest的package才能预览出效果
      };
    },
    loadHandler(e) {
      console.log("ad component load", e);
    },
    errorHandler(e) {
      console.log("ad component error", e);
    },
    closeHandler() {
      console.log("ad component close");
    }
  };
</script>
<style lang="less">
  .wrap {
    background-color: #cccccc;
    flex-direction: column;
  }
</style>
```

### API

#### 组件属性

| 属性     | 类型    | 默认值 | 说明                                                      |
| -------- | ------- | ------ | --------------------------------------------------------- |
| debug    | Boolean | false  | 是否开启组件调试，开启后会有 toast 弹出组件加载相关信息   |
| adUnitId | String  | ''     | 原生广告单元 id，可在各厂商开发者管理后台的流量主模块新建 |

::: tip
adUnitId 只能用原生广告的，否则不会加载成功

当前广告类型共有五种，已经封装在了组件内部，使用时无需处理，如果需要指定某一种，可以自行在厂商广告后台配置
:::

#### 组件事件

| 事件名称 | 事件描述         | 返回值                                                 |
| -------- | ---------------- | ------------------------------------------------------ |
| close    | 点击关闭广告触发 | -                                                      |
| load     | 广告加载成功触发 | {}                                                     |
| error    | 广告加载失败触发 | {"errCode":1004,"errMsg":"no ad, real errorCode: 108"} |
