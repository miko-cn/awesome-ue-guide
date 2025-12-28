<template>
  <div :class="['card', `card-${type}`]">
    <div v-if="title" class="card-title">
      <span v-if="icon" class="card-icon">{{ icon }}</span>
      {{ title }}
    </div>
    <div class="card-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  type?: 'default' | 'success' | 'warning' | 'danger' | 'info'
  icon?: string
}>()
</script>

<style scoped>
.card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 16px;
  margin: 16px 0;
  background-color: var(--vp-c-bg-soft);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.card-default {
  border-color: var(--vp-c-divider);
  border-left: 4px solid var(--vp-c-brand);
}

.card-success {
  border-color: var(--vp-c-success);
  border-left: 4px solid var(--vp-c-success);
  background-color: rgba(34, 197, 94, 0.1);
}

.card-warning {
  border-color: var(--vp-c-warning);
  border-left: 4px solid var(--vp-c-warning);
  background-color: rgba(245, 158, 11, 0.1);
}

.card-danger {
  border-color: var(--vp-c-danger);
  border-left: 4px solid var(--vp-c-danger);
  background-color: rgba(239, 68, 68, 0.1);
}

.card-info {
  border-color: var(--vp-c-brand);
  border-left: 4px solid var(--vp-c-brand);
  background-color: rgba(59, 130, 246, 0.1);
}

.card-title {
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.card-default .card-title {
  color: var(--vp-c-brand);
}

.card-success .card-title {
  color: var(--vp-c-success);
}

.card-warning .card-title {
  color: var(--vp-c-warning);
}

.card-danger .card-title {
  color: var(--vp-c-danger);
}

.card-info .card-title {
  color: var(--vp-c-brand);
}

.card-icon {
  font-size: 18px;
}

.card-content {
  font-size: 14px;
  color: var(--vp-c-text-1);
  line-height: 1.6;
}
</style>
