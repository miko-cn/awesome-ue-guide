---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Awesome UE Guide"
  text: "Your free, community-built guide to learning Unreal Engine."
  tagline: 🚀 Fast-Track to Unreal. Build What's Next.
  image:
    src: /logo.png
    alt: Awesome-UE-Guide-Logo
  actions:
    - theme: brand
      text: Quick Start
      link: ./markdown-examples
    - theme: alt
      text: About us
      link: ./about

features:
  - icon: 🥰
    title: 100% Free
    details: Curated free resources only. Dive in and learn without any cost.
  - icon: 📝
    title: Community-Powered
    details: Fully open-source and built by the community. Contribute by submitting your favorites.
  - icon: 🧭
    title: Guided Overview
    details: Get a quick insight into all resources to find your perfect starting point.
---

## Join us

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/20636038?v=4',
    name: 'Miko',
    title: 'Founder',
    links: [
      { icon: 'github', link: 'https://github.com/miko-cn' },
      // { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  }
]
</script>

<VPTeamMembers :members />
