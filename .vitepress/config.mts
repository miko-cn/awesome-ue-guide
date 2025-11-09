import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  lang: "zh-CN",
  base: '/awesome-ue-guide/',
  title: "虚幻引擎精粹指南",
  description: "完全免费、社区共建的虚幻引擎学习指南。",
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/awesome-ue-guide/favicon.ico' }],
    ['meta', { name: 'google-site-verification', content: 'zxs0T4N-5W9F1VpSGKU2RYW1iNWYd_tv6y6Tia-00ns' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo-mini.png',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        }
      }
    },
    nav: [
      { text: '主页', link: './' },
      { text: '关于', link: './about' }
    ],
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '站点使命', link: '/intro' },
          { text: '学习指南', link: '/begin' },
        ]
      },
      {
        text: '资源目录',
        items: [
          { text: '虚幻官方资源', link: '/epic'}
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/miko-cn/awesome-ue-guide' }
    ],

    // 文章翻页
    docFooter: {
      prev: "上一篇", //Next page
      next: "下一篇", //Previous page
    },
    //当前页面 On this page
    outlineTitle: "页面内容",
    // 返回顶部 Return to top
    returnToTopLabel: "返回顶部",
    // 菜单  Menu
    sidebarMenuLabel: "菜单",
    notFound: {
      title: "页面未找到",
      quote: "哎呀，您好像迷失在网络的小胡同里啦，别着急，赶紧回头是岸！",
      linkText: "返回首页",
    },

    footer: {
      message: '本站点使用 <a href="https://vitepress.dev/zh/" target="_blank">Vitepress</a> 构建 | 部署在 <a href="https://github.com/miko-cn/awesome-ue-guide" target="_blank">Github Pages</a>',
      copyright: 'MIT License. Copyright © 2025 miko-cn.'
    }
  },
  sitemap: {
    hostname: 'https://miko-cn.github.io/awesome-ue-guide/'
  }
})
