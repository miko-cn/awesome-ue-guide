---
layout: doc
---

# 关于我们

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