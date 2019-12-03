## 上传 upload

### 描述

用于展示静态数据，提醒警示用户，也可手动关闭提示。

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="../assets/upload.gif" style="width:300px" alt="upload"/></div>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="my-upload" src="apex-ui/components/upload/index"></import>
```

### 示例

```html
<template>
  <my-upload url="http://www.example.com/upload" max="9" multi="true" type="image" disabled="false"
             onchange="changeHandler"
             onremove="removeHandler" onpreview="previewHandler" onfail="failHandler"
             onsuccess="successHandler" onbefore="beforeHandler" oncomplete="completeHandler">
    <text>Upload</text>
  </my-upload>
</template>
```

```javascript
import media from '@system.media';

export default {
    data() {
        return {}
    },
    changeHandler(e) {
        console.log('changed', e);
    },
    removeHandler(e) {
        console.log('removed', e);
    },
    previewHandler(e) {
        console.log('preview', e);
        const {file, fileList} = e.detail;
        const uris = fileList.map((item) => (item.uri));
        console.log(file, fileList, uris);
        media.previewImage({
            current: file.uri,
            uris: uris,
            success: function () {
                console.log('preview success')
            },
            fail: function (data, code) {
                console.log('preview fail, code = ${code}')
            }
        })
    },
    failHandler(e) {
        console.log('failed', e);
    },
    successHandler(e) {
        console.log('success', e);
    },
    beforeHandler(e) {
        console.log('before', e);
    },
    completeHandler(e) {
        console.log('completed', e);
    }
}
```

### API

#### 组件属性

| 属性       | 类型    | 默认值 | 说明                                           |
| ---------- | ------- | ------ | ---------------------------------------------- |
| max        | number  | -1     | 支持显示文件最大数量                           |
| multi      | boolean | false  | 是否支持多选                                   |
| type       | string  | image  | 上传的文件类型，值为'iimage','video'           |
| url        | string  | -      | 上传到服务器的地址                             |
| name       | string  | -      | 文件对应的 key                                 |
| header     | object  | -      | HTTP 请求 Header                               |
| formData   | array   | -      | HTTP 请求中其他额外的 form data                |
| uploaded   | boolean | true   | 默认的上传行为，`false` 时需要自行实现上传功能 |
| disabled   | boolean | false  | 是否禁用                                       |
| removeIcon | boolean | true   | 是否展示删除图标                               |

#### 组件事件

| 事件名称 | 事件描述                 | 返回值 |
| -------- | ------------------------ | ------ |
| before   | 上传文件之前的回调函数   | -      |
| change   | 上传文件改变时的回调函数 | -      |
| remove   | 点击删除图标时的回调函数 | -      |
| success  | 上传文件成功时的回调函数 | -      |
| fail     | 上传文件失败时的回调函数 | -      |
| complete | 上传文件完成时的回调函数 | -      |
| preview  | 点击文件时的回调函数     | -      |

#### slot

| 名称 | 描述       |
| ---- | ---------- |
| -    | 自定义内容 |

