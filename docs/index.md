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
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - icon: 🥰
    title: Free
    details: Include free resources only, enjoy learning without any payment.
  - icon: 📝
    title: Community-Built
    details: Built by community, totally open-source, open issue to add your recommendations.
  - icon: 🧭
    title: Brief-Intro
    details: Get a brief introduction of all resources, easy to choose which to learn.
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
    name: 'miko-cn',
    title: 'Owner',
    links: [
      { icon: 'github', link: 'https://github.com/miko-cn' },
      // { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  }
]
</script>

<VPTeamMembers :members />
