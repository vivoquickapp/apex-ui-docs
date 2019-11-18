module.exports = {
    base: '/apex-ui-docs/',
    title: 'Apex',
    description: 'apex-ui是快应用的一套丰富完整的组件库，可以安装即用，提供了多达50+的组件，帮助开发者快速开发快应用。',
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-146469314-1'
            }
        ],
        '@vuepress/back-to-top'
    ],
    markdown: {
        lineNumbers: true
    },
    head: [
        ['link', {rel: 'icon', href: 'favicon.ico'}],
        ['meta', {name: 'keywords', content: '快应用 组件库 apex-ui UI组件库 快应用开发'}]
    ],
    themeConfig: {
        displayAllHeaders: true,
        sidebarDepth: 0,
        nav: [
            {text: '首页', link: '/'},
            {text: '文档', link: '/guide/'},
            {text: 'GitHub', link: 'https://github.com/vivoquickapp/apex-ui.git'},
        ],
        sidebar: [
            {
                title: '介绍',
                collapsable: false,
                children: [
                    '/guide/'
                ]
            },
            {
                title: '基础组件',
                collapsable: false,
                children: [
                    '/guide/button',
                    '/guide/color',
                    '/guide/icon'
                ]
            },
            {
                title: '导航组件',
                collapsable: false,
                children: [
                    '/guide/navbar',
                    '/guide/pagination',
                    '/guide/segmented-control',
                    '/guide/tabbar',
                    '/guide/popover',
                ]
            },
            {
                title: '表单数据',
                collapsable: false,
                children: [
                    '/guide/input',
                    '/guide/input-number',
                    '/guide/radio',
                    '/guide/radio-group',
                    '/guide/checkbox',
                    '/guide/checkbox-group',
                    '/guide/switch',
                    '/guide/rating',
                    '/guide/calendar',
                    '/guide/textarea',
                ]
            },
            {
                title: '数据展示',
                collapsable: false,
                children: [
                    '/guide/alert',
                    '/guide/prompt',
                    '/guide/avatar',
                    '/guide/card',
                    '/guide/divider',
                    '/guide/media',
                    '/guide/accordion',
                    '/guide/steps',
                ]
            },
            {
                title: '操作反馈',
                collapsable: false,
                children: [
                    '/guide/message',
                    '/guide/toast',
                    '/guide/load-more',
                    '/guide/spin',
                    '/guide/circle',
                    '/guide/dialog',
                    '/guide/gallery',
                ]
            },
            {
                title: '拓展组件',
                collapsable: false,
                children: [
                    '/guide/barcode',
                    '/guide/qrcode',
                    '/guide/vcode'
                ]
            },
        ]
    }
}
