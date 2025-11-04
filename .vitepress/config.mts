import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: '/awesome-ue-guide/',
  title: "Awesome UE Guide",
  description: "Your free, community-built guide to learning Unreal Engine.",

  head: [['link', { rel: 'icon', href: '/awesome-ue-guide/favicon.ico' }]],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "虚幻引擎精粹指南",
      description: "完全免费、社区共建的虚幻引擎学习指南。",
      themeConfig: {
        nav: [
          { text: '主页', link: './' },
          { text: '关于', link: './about' }
        ],
      }
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo-mini.png',
    nav: [
      { text: 'Home', link: './' },
      { text: 'About', link: './about' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/miko-cn/awesome-ue-guide' }
    ]
  }
})
