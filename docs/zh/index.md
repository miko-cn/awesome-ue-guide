---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "虚幻引擎精粹指南"
  text: "完全免费、社区共建的虚幻引擎学习指南。"
  tagline: 🚀 助力极速成长，把虚幻照进现实。
  image:
    src: /logo.png
    alt: Awesome-UE-Guide-Logo
  actions:
    - theme: brand
      text: 马上开始
      link: ./markdown-examples
    - theme: alt
      text: 关于我们
      link: ./about

features:
  - icon: 🥰
    title: 完全免费
    details: 仅收录精心筛选的免费资源。零成本投入，即刻开始学习。
  - icon: 📝
    title: 社区共建
    details: 拥抱开源，由社区共同构建。欢迎提交您推荐的优质资源。
  - icon: 🧭
    title: 资源导览
    details: 快速洞悉所有资源概览，助您找到最佳学习路径。
---

## 加入我们

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/20636038?v=4',
    name: 'Miko',
    title: '为人民服务的仓库管家',
    links: [
      { icon: 'github', link: 'https://github.com/miko-cn' },
      // { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  }
]
</script>

<VPTeamMembers :members />
