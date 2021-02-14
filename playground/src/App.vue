<script setup lang="ts">
import { watch } from 'vue'
import Demo from './demo.md'
import { colors } from './store'

watch(
  () => colors['--prism-scheme'],
  v => typeof document !== 'undefined' && document.documentElement.classList.toggle('dark', v === 'dark'),
  { immediate: true },
)
</script>

<template>
  <div class="grid grid-cols-2 h-full" :style="colors">
    <div class="px-8 py-4 overflow-auto">
      <Demo />
    </div>
    <div class="overflow-auto border-l border-light">
      <Panel />
    </div>
  </div>
</template>
