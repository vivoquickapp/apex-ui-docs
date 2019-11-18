## 画廊 gallery

### 描述

用于预览图片

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="../assets/gallery.gif" alt="gallery" style="width:300px" /></div>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="my-gallery" src="apex-ui/components/gallery/index"></import>
```

### 示例

```html
<template>
  <div class="wrap">
    <text class="title">default</text>
    <div class="image-wrap">
      <block for="{{(idx, image) in srcs}}">
        <image src="{{image}}" onclick="handleClick(idx)"></image>
      </block>
    </div>
    <text class="title">aotoplay</text>
    <div class="image-wrap">
      <block for="{{(idx, image) in srcs}}">
        <image src="{{image}}" onclick="handleClick2(idx)"></image>
      </block>
    </div>
    <text class="title">vertical</text>
    <div class="image-wrap">
      <block for="{{(idx, image) in srcs}}">
        <image src="{{image}}" onclick="handleClick3(idx)"></image>
      </block>
    </div>
    <my-gallery id="gallery"></my-gallery>
  </div>
</template>
```

```less
<style lang="less">
.wrap {
  flex-direction: column;
  background-color: #eee;
}

.image-wrap {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
}

.title{
  font-size: 50px;
  margin: 10px 20px;
}

image {
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin: 0 20px;
}
</style>
```

```javascript
<script>
export default {
  data() {
    return {
      srcs: [
        '/images/logo-d.png',
        '/images/logo-d.png',
        '/images/logo-d.png',
        '/images/logo-d.png',
      ],
    }
  },

  handleClick(idx, e) {
    this.$child('gallery').showGallery({
      srcs: this.srcs,
      index: idx,
    })
  },

  handleClick2(idx, e) {
    this.$child('gallery').showGallery({
      srcs: this.srcs,
      index: idx,
      autoplay: true
    })
  },

  handleClick3(idx, e) {
    this.$child('gallery').showGallery({
      srcs: this.srcs,
      index: idx,
      vertical: true
    })
  }
}
</script>
```

### API

#### 组件属性

| 属性                   | 类型     | 默认值               | 说明                                   |
| ---------------------- | ------- | ------------------- | ------------------------------------- |
| indicator              | Bollean | true                | 是否启用 indicator                     |
| indicatorColor         | String  | 'rgba(0, 0, 0, .5)' | indicator填充颜色                      |
| indicatorSelectedColor | String  | ''                  | indicator选中时颜色                     |
| autoplay               | Boolean | false               | 是否自动播放                            |
| interval               | Number  | 2000                | 自动播放时的时间间隔，单位毫秒             |
| duration               | Number  | 500                 | 滑动动画时长                            |
| loop                   | Boolean | true                | 是否开启循环模式                         |
| vertical               | Boolean | false               | 滑动方向是否为纵向,纵向时indicator 也为纵向 |
| index                  | Number  | 0                   | 当前显示的图片索引                      |
| srcs                   | String[]| []                  | 图片链接列表                            |

#### 事件

| 名称   | 参数                  |描述                      | 
| ------ |  ------------------- |------------------------ | 
| change | {index:currentIndex} | 当前显示的图片索引变化时触发 |
