module.exports = {
  base: "/apex-ui-docs/",
  title: "Apex",
  description:
    "apex-ui是快应用的一套丰富完整的组件库，可以安装即用，提供了多达50+的组件，帮助开发者快速开发快应用。",
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-146469314-1"
      }
    ],
    "@vuepress/back-to-top",
    [
      "vuepress-plugin-feedback",
      {
        projectId: "160377005031017817",
        titleText: "您对Apex-ui的使用体验满意吗?",
        good: "组件丰富&&使用简单方便&&UI清晰整洁&&文档丰富详细&&组件接口齐全",
        bad: "组件不全&&使用复杂&&UI不美观&&文档描述不清晰&&组件接口不全"
      }
    ]
  ],
  markdown: {
    lineNumbers: true
  },
  head: [
    ["link", { rel: "icon", href: "favicon.ico" }],
    [
      "meta",
      { name: "keywords", content: "快应用 组件库 apex-ui UI组件库 快应用开发" }
    ]
  ],
  themeConfig: {
    displayAllHeaders: true,
    sidebarDepth: 0,
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/guide/" },
      { text: "GitHub", link: "https://github.com/vivoquickapp/apex-ui.git" }
    ],
    sidebar: [
      {
        title: "介绍",
        collapsable: false,
        children: ["/guide/"]
      },
      {
        title: "基础组件",
        collapsable: false,
        children: ["/guide/button", "/guide/color", "/guide/icon"]
      },
      {
        title: "导航组件",
        collapsable: false,
        children: [
          "/guide/navbar",
          "/guide/pagination",
          "/guide/segmented-control",
          "/guide/tabbar",
          "/guide/popover"
        ]
      },
      {
        title: "表单数据",
        collapsable: false,
        children: [
          "/guide/input",
          "/guide/input-number",
          "/guide/radio",
          "/guide/radio-group",
          "/guide/checkbox",
          "/guide/checkbox-group",
          "/guide/switch",
          "/guide/rating",
          "/guide/calendar",
          "/guide/textarea",
          "/guide/search-bar",
          "/guide/upload",
          "/guide/slider",
          "/guide/city-cascader"
        ]
      },
      {
        title: "数据展示",
        collapsable: false,
        children: [
          "/guide/alert",
          "/guide/prompt",
          "/guide/avatar",
          "/guide/card",
          "/guide/divider",
          "/guide/accordion",
          "/guide/select",
          "/guide/steps",
          "/guide/countdown",
          "/guide/counter",
          "/guide/media",
          "/guide/sticky",
          "/guide/index-item",
          "/guide/fab-button"
        ]
      },
      {
        title: "操作反馈",
        collapsable: false,
        children: [
          "/guide/message",
          "/guide/toast",
          "/guide/load-more",
          "/guide/spin",
          "/guide/circle",
          "/guide/dialog",
          "/guide/gallery",
          "/guide/action-sheet",
          "/guide/mask",
          "/guide/popup"
        ]
      },
      {
        title: "拓展组件",
        collapsable: false,
        children: [
          "/guide/barcode",
          "/guide/qrcode",
          "/guide/vcode",
          "/guide/keyboard",
          "/guide/result",
          "/guide/filterbar",
          "/guide/ad",
          "/guide/ad2"
        ]
      },
      {
        title: "图表组件",
        collapsable: false,
        sidebarDepth: 1,
        children: [
          "/guide/charts",
          "/guide/chartsBar",
          "/guide/chartsLine",
          "/guide/chartsPie",
          "/guide/chartsRadar",
          "/guide/chartsScatter",
          "/guide/chartsFunnel",
          "/guide/chartsCandlestick",
          "/guide/chartsHeatmap",
          "/guide/chartsTreemap",
          "/guide/chartsTagCloud"
        ]
      },
      {
        title: "图表组件方法及参数说明",
        collapsable: true,
        sidebarDepth: 3,
        children: [
          "/guide/chartsApi",
          "/guide/chartsEvent",
          "/guide/chartsOptions"
        ]
      }
    ]
  }
};
