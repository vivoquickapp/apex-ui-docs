module.exports = {
    base: '/apex-ui-docs/',
    title: 'Apex',
    description: 'Apex Quickapp UI Components Suit',
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
        ['link', {rel: 'icon', href: 'favicon.ico'}]
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
                ]
            },
            {
                title: '操作反馈',
                collapsable: false,
                children: [
                    '/guide/message',
                    '/guide/toast',
                    '/guide/load-more'
                ]
            },
        ]
    }
}
