<template>
  <div
    :class="['card', `card-${type}`]"
  >
    <!-- 头图 -->
    <div v-if="image" class="card-image">
      <img :src="'/awesome-ue-guide/images/' + image" :alt="title || 'Card image'" />
    </div>
    
    <!-- 标题 -->
    <!-- <div v-if="title" class="card-title">
      {{ title }}
    </div>
     -->
    <!-- 内容和操作按钮容器 -->
    <div class="card-body">

      <div class="card-text-wrapper" :class="{ 'has-edit-time': editTime }">
        <!-- 标题 -->
        <div v-if="title" class="card-title">
          {{ title }}
        </div>

        <!-- 内容 -->
        <div class="card-content">
          <slot />
        </div>

        <!-- 编辑时间 -->
        <div v-if="editTime" class="card-edit-time">
          最后编辑于：{{ editTime }}
        </div>
      </div>

      <!-- 操作按钮 -->
      <div v-if="href" class="card-actions">
        <button
          class="action-btn open-btn"
          @click="handleOpen"
          title="打开链接"
          aria-label="打开链接"
        >
          <!-- <span class="icon">⧉</span> -->
           <img class="icon" :src="externalLinkIcon" alt="打开链接" />
        </button>
        <button
          class="action-btn copy-btn"
          @click="handleCopy"
          title="复制链接"
          aria-label="复制链接"
        >
          <!-- <span class="icon">📋</span> -->
           <img class="icon" :src="clipboardIcon" alt="复制链接" />
        </button>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import externalLinkIcon from './icons/external-link-line.svg?url'
import clipboardIcon from './icons/clipboard-line.svg?url'

const props = defineProps<{
  title?: string
  type?: 'default'
  image?: string  // 图片路径，如：'/awesome-ue-guide/images/example.png' 或 './images/example.png'
  href?: string   // 点击卡片跳转的链接
  editTime?: string  // 最后编辑时间
}>()

const copyTip = ref('')

const handleOpen = () => {
  if (props.href) {
    window.open(props.href, '_blank')
  }
}

const handleCopy = async () => {
  if (props.href) {
    try {
      await navigator.clipboard.writeText(props.href)
      copyTip.value = '已复制！'
      setTimeout(() => {
        copyTip.value = ''
      }, 2000)
    } catch (err) {
      console.error('复制失败:', err)
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  margin: 16px 0;
  background-color: var(--vp-c-bg-soft);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.card-body {
  display: flex;
  gap: 0;
}

.card-text-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}


.card-actions {
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--vp-c-divider);
  padding: 8px;
  gap: 0;
}

.action-btn {
  width: 40px;
  flex: 1;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  padding: 0;
  /* font-size: 18px; */
}

.action-btn:first-child {
  border-bottom: 1px solid var(--vp-c-divider);
}

.action-btn .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  width: 18px;
  height: 18px;
  filter: none;
}

:root.dark .action-btn .icon {
  filter: invert(1);
}

.action-btn:hover .icon {
  opacity: 1;
}

.card-default {
  border-left: 4px solid var(--vp-c-brand);
}

/* 头图样式 */
.card-image {
  width: 100%;
  height: 100px;
  overflow: hidden;
  background-color: var(--vp-c-bg);
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .card-image img {
  transform: scale(1.05);
}

/* 标题样式 */
.card-title {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 12px;
  padding: 16px 16px 0 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* 内容样式 */
.card-content {
  font-size: 14px;
  color: var(--vp-c-text-1);
  line-height: 1.6;
  padding: 0 16px 16px 16px;
}

.card-text-wrapper.has-edit-time .card-content {
  padding-bottom: 8px;
}

/* 编辑时间样式 */
.card-edit-time {
  font-size: 12px;
  color: var(--vp-c-text-3);
  padding: 8px 16px;
  border-top: 1px solid var(--vp-c-divider);
  display: flex;
  align-items: center;
  line-height: 1.4;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.card:hover .card-edit-time {
  opacity: 0.9;
}

</style>

<style>
.card-text-wrapper .card-content p {
  margin: 8px 0 !important;
  line-height: 1.6 !important;
  display: block;
}
</style>