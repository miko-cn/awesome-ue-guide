import { h } from 'vue'
import { useData } from 'vitepress'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import CardExample from '../components/cards/Example.vue'
import CardResource from '../components/cards/Resource.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout)
  },
  enhanceApp({ app }) {
    // 全局注册卡片组件
    app.component('CardExample', CardExample)
    app.component('CardResource', CardResource)
  }
} satisfies Theme
