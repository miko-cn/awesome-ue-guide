import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: '/awesome-ue-guide/',
  title: "Awesome UE Guide",
  description: "Your free, community-built guide to learning Unreal Engine.",
  head: [['link', { rel: 'icon', href: '/awesome-ue-guide/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo-mini.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

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
