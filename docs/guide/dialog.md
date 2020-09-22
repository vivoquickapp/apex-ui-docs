## 对话框 dialog

### 描述

模态对话框，在浮层中显示，引导用户进行相关操作。

### 使用效果

<preview page="dialog"/>

### 使用方法

在 `.ux` 文件中引入组件

``` html
<import name="my-dialog" src="apex-ui/components/dialog/index"></import>
```

### 示例

``` html
<template>
    <div class="wrap">
        <text class="btn" onclick="openDialog1">默认对话框</text>
        <text class="btn" onclick="openDialog2">确认对话框</text>
        <text class="btn" onclick="openDialog3">输入对话框</text>
        <text class="btn" onclick="openDialog4">自定义对话框</text>
        <text class="btn" onclick="openDialog5">Vertical Buttons Dialog</text>
        <my-dialog visible="{{open1}}" title="三秒后自动关闭" content="弹窗内容，告知当前状态、信息和解决方法。详细描述内容：" onaffirm="close" oncancel="close"></my-dialog>
        <my-dialog visible="{{open2}}" title="冷知识" content="奶牛打嗝会加剧温室效应！" oncancel="close" options="{{opt1}}" dialog-type='alter' onaffirm="close"></my-dialog>
        <my-dialog visible="{{open3}}" dialog-type='prompt' onaffirm="close" oncancel="close" prompt="{{obj}}" onenter="enter"></my-dialog>
        <my-dialog visible="{{open4}}" onclick0="btn0" onclick1="btn1" onclick2="btn2" options="{{opt2}}"></my-dialog>
        <my-dialog visible="{{open5}}" vertical="{{true}}" options="{{opt4}}" onclick0="close" onclick1="close"></my-dialog>
        <my-dialog visible="{{open6}}" dialog-type='alter' onaffirm="close" options="{{opt3}}"></my-dialog>
    </div>
</template>
```

``` less
.wrap {
  flex-direction: column;
  background-color: #f7f7f7;
  align-items: center;
  padding-top: 80px;
  .btn {
    height: 80px;
    width: 90%;
    margin: 10px;
    background-color: #fff;
    text-align: center;
    color: #000000;
  }
}
```

``` javascript
export default {
    data: {
        open1: false,
        open2: false,
        open3: false,
        open4: false,
        open5: false,
        open6: false,
        opt1: {},
        opt2: {},
        opt3: {},
        opt4: {},
        obj: {}
    },
    openDialog1() {
        this.open1 = true
        setTimeout(() => {
            this.open1 = false
        }, 3000);
    },
    openDialog2() {
        this.open2 = true
        this.opt1 = {
            closable: true,
            affirm: '知道了'
        }
    },
    openDialog3() {
        this.open3 = true
        this.obj = {
            title: '提示',
            content: '请猜出八位数字，按enter键查看结果！',
            fieldtype: 'password',
        }
    },
    openDialog4() {
        this.open4 = true
        this.opt2 = {
            title: "我是标题",
            content: "我是自定义对话框",
            buttons: [{
                    btn: '支付宝支付',
                    style: {
                        color: '#58b4ff',
                    }
                },
                {
                    btn: '微信支付',
                    style: {
                        color: '#58b4ff',
                    }
                },
                '关闭'
            ]
        }
    },
    openDialog5() {
        this.open5 = true
        this.opt4 = {
            title: '2选1',
            content: '下面选项中任选一项',
            buttons: ['选项1', '选项2']
        }
    },
    close() {
        this.open1 = false
        this.open2 = false
        this.open3 = false
        this.open4 = false
        this.open5 = false
        this.open6 = false
        this.open7 = false
    },
    enter(evt) {
        this.open3 = false
        if (evt.detail.event.value === '123456') {
            console.log(111111)
            this.opt3 = {
                title: "提示",
                content: "密码正确!"
            }
            this.open6 = true
        } else {
            console.log(222222)
            this.opt3 = {
                title: "提示",
                content: "密码错误!"
            }
            this.open6 = true
        }
    },
    btn0(evt) {
        this.open4 = false
        this.opt3 = {
            title: "提示",
            content: "你选择了支付宝支付!"
        }
        this.open6 = true
    },
    btn1(evt) {
        this.open4 = false
        this.opt3 = {
            title: "提示",
            content: "你选择了微信支付!"
        }
        this.open6 = true
    },
    btn2() {
        this.open4 = false
    }
}
```

### API

#### 组件属性

| 属性                                          | 类型     | 默认值            | 说明                                                       |
|--------------------------------------------- |----------|-------------------|----------------------------------------------------------- |
| vertical                                     | Boolean  | false             | 是否垂直显示按钮                                             |
| dialog-style                                 | Obejct   | {}                | 对话框样式                                                  |
| dialog-type                                  | String   | 'text'            | 可选值: alter|text|prompt                                   |
| visible                                      | Boolean  | false             | 控制对话框显隐                                               |
| title                                        | String   | '默认标题'         | 对话框标题(优先级 prompt.title > options.title > title)      |
| content                                      | String   | '默认内容'         | 对话框内容(优先级 prompt.content > options.content > content)|
| options                                      | Obejct   | defualtOptions    | 对话框对象                                                   |
| options.title                                | String   | ''                | 对话框标题(优先级 prompt.title > options.title > title)      |
| options.title                                | String   | ''                | 对话框内容(优先级 prompt.content > options.content > content)|
| options.closable                             | Boolean  | false             | 是否显示关闭按钮                                             |
| options.buttons                              | Array    | []                | 自定义按钮                                                   |
| options.cancel                               | String   | '取消'            | 取消按钮的文字                                                |
| options.affirm                               | String   | '确认'            | 确认按钮的文字                                                |
| prompt                                       | Obejct   | defualtPrompt     | 对话input框对象                                              |
| prompt.title                                 | String   | ''                | 对话框标题(优先级 prompt.title > options.title > title)      |
| prompt.content                               | String   | ''                | 对话框内容(优先级 prompt.content > options.content > content)|
| prompt.value                                 | String   | ''                | input框默认值                                                |
| prompt.fieldtype                             | String   | 'text'            | input框的类型                                                |
| prompt.placeholder                           | String   | '请输入文本'       | input框提示文本的内容                                         |
| prompt.focus                                 | Boolean  | false             | 是否使input框获得焦点                                         |
| prompt.maxlength                             | Number   | -1                | input框允许输入的最大字符长度,默认-1 即不限长度                  |
| prompt.inputStyle                            | Obejct   | {}                | input框样式                                                  |

#### 组件事件

| 事件名称              | 事件描述                                 | 返回值 |
| -------------------- | --------------------------------------- | ------ |
| change               | 输入框的值发生变化时触发事件               | event  |
| cancel               | 点击取消按钮触发事件                      | event  |
| affrim               | 点击确认按钮触发事件                      | event  |
| enter                | 软键盘 Enter 键点击事件                   | event  |
| close                | 对话框关闭按钮点击事件                    | event  |
| click[buttons.index] | 自定义button按钮点击事件(详见示例)         | event  |

