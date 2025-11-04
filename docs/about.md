---
layout: doc
---

# About

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