## 广告 ad

### 描述

原生广告组件，用于快速接入广告能力。

::: tip
1、在无广告展示时，广告组件标签不会占用高度

2、不同的厂商使用的 adUnitId 是不同的，可以通过 device 接口获取当前运行的设备厂商信息

3、厂商开发者后台的注册的快应用包名会校验，所以需要使用了和 adUnitId 不同的包名，加载广告会失败
:::

### 使用效果

<div style="text-align: center;margin: 40px;">
    <img src="https://zhanstatic.vivo.com.cn/wukong/img/b60cd00f-892d-4777-a665-4c321aaceb33.jpeg" alt="ad" style="width:300px" />
    <img src="https://zhanstatic.vivo.com.cn/wukong/img/35e15293-0116-4f26-b1c5-8f94d7702a0c.jpeg" alt="ad" style="width:300px" />
    <img src="https://zhanstatic.vivo.com.cn/wukong/img/98c22f7c-9657-4246-b4e6-286788928a50.jpeg" alt="ad" style="width:300px" />
    <img src="https://zhanstatic.vivo.com.cn/wukong/img/6e69c296-7708-42d4-8f81-bf6e81bbe427.jpeg" alt="ad" style="width:300px" />
    <img src="https://zhanstatic.vivo.com.cn/wukong/img/0b568f5f-86c1-49e7-b8fc-e3e45b51474b.jpeg" alt="ad" style="width:300px" />
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="ad" src="apex-ui/components/ad/index"></import>
```

### 示例

```html
<template>
  <div class="wrap">
    <ad
      type="pure-pic"
      ad-unit-id="{{adUnitId}}"
      onload="loadHandler"
      onerror="errorHandler"
      onclose="closeHandler"
    ></ad>
  </div>
</template>
<script>
  import device from "@system.device";
  export default {
    data() {
      return {
        adUnitId: ""
      };
    },
    onInit() {
      this.switchAdUnitIdByBrand();
    },
    async switchAdUnitIdByBrand() {
      // 这个方法的作用是适配不同厂商的adUnitId
      const res = await device.getInfo();
      const brand = res.data.brand;
      switch (brand) {
        case "vivo":
          this.adUnitId = "9d66217c88614253bd68a291c273f8d5"; // 这个id是vivo的com.quickapp.center创建的，需要修改manifest的package才能预览出效果
          break;
        case "oppo":
          this.adUnitId = "oppo-adUnitId";
          break;
        case "huawei":
          this.adUnitId = "huawei-adUnitId";
          break;
        default:
          console.warn("此设备不支持广告组件！");
      }
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

| 属性     | 类型   | 默认值                | 说明                                                                                                                      |
| -------- | ------ | --------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| type     | String | 'top-pic-bottom-text' | 广告样式，可选值有 'pure-pic'、'top-text-bottom-pic'、'top-pic-bottom-text'、'left-pic-right-text'、'left-text-right-pic' |
| adUnitId | String | ''                    | 原生广告单元 id，可在各厂商开发者管理后台的流量主模块新建                                                                 |

::: tip
adUnitId 只能用原生广告的，否则不会加载成功

vivo 广告当前返回的素材只有大图，所以如果是在 vivo 侧上架的快应用建议 type 属性使用`pure-pic`或者`top-pic-bottom-text`
:::

#### 组件事件

| 事件名称 | 事件描述         | 返回值                                                 |
| -------- | ---------------- | ------------------------------------------------------ |
| close    | 点击关闭广告触发 | -                                                      |
| load     | 广告加载成功触发 | {}                                                     |
| error    | 广告加载失败触发 | {"errCode":1004,"errMsg":"no ad, real errorCode: 108"} |

#### 错误码信息与解决方案表

错误码是通过 onerror 回调获取到的错误信息。由于不同厂商的广告 SDK 可能所差异，所以同一错误码对应的原因在不同厂商可能有所不同。如果出现问题可以直接联系对应厂商的技术人员解决。

| 代码 | 异常情况                                     | 解决办法                                                                                     |
| ---- | -------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 1000 | 后端错误，调用失败                           | 联系技术人员对接                                                                             |
| 1001 | 参数错误                                     | 检查广告参数是否填写正确/将手机时间调成一天之后                                              |
| 1002 | 广告单元无效                                 | 检查对应 ID 是否正确填写，确认已申请广告位                                                   |
| 1003 | 内部错误                                     | 联系技术人员对接                                                                             |
| 1004 | 无合适的广告                                 | 广告填充率问题，开发者忽略即可；也可能是广告 id 和申请的包名不匹配                           |
| 1005 | 广告组件审核中                               | -                                                                                            |
| 1006 | 广告组件被驳回                               | -                                                                                            |
| 1007 | 广告能力被封禁                               | 如果应用本身线上没什么流量多请求几次，如果应用本身在线上有一定的请求量级就咨询广告联盟客服。 |
| 1008 | 广告位的广告能力已关闭                       | 咨询广告联盟客服冻结原因                                                                     |
| 1009 | 广告加载超时                                 | 延时再次加载                                                                                 |
| 1100 | 过于频繁调用相关的 API                       | 间隔一定时间后再调用                                                                         |
| 1101 | 广告在加载后，长时间没有展示，广告信息已过期 | 联系技术人员对接                                                                             |
| 1102 | 调用了不支持的方法                           | 联系技术人员对接                                                                             |
| 1103 | 环境监测失败，如应用无权限等                 | 联系技术人员对接                                                                             |
| 1104 | 网络错误                                     | 检查是否可以正常上网，可以试试 4G 或者换个网络测试                                           |
| 1105 | 广告未加载成功                               | 联系技术人员对接                                                                             |
| 1106 | 广告展示失败                                 | 联系技术人员对接                                                                             |
| 2000 | 未知错误                                     | 联系技术人员对接                                                                             |
