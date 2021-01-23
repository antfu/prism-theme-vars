<script setup lang="ts">
import type { Ref } from 'vue'
import { defineProps, computed } from 'vue'

const props = defineProps<{id: string; value: Ref<string>}>()

const name = computed(() => props.id.replace('--prism-', ''))
const value = props.value
const style = computed(() =>
  props.id.includes('background')
    ? ({ background: `var(${props.id})`, color: 'var(--prism-foreground)' })
    : ({ color: `var(${props.id})`, background: 'var(--prism-background)' }),
)

const NonStyleAttrs = [
  'padding',
  'margin',
  'font',
  'size',
  'height',
  'width',
  'radius',
  'decoration',
  'style',
  'scheme',
]

const type = computed(() => {
  if (NonStyleAttrs.some(i => props.id.includes(i)))
    return 'text'
  return 'color'
})

const readonly = computed(() => props.id.includes('scheme'))

function onclick() {
  if (props.id.includes('scheme'))
    value.value = value.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="border-b border-light flex pr-5" :style="style" @click="onclick">
    <div class="px-4 py-2 font-mono">
      {{ name }}
    </div>
    <div class="flex-auto" />
    <input
      v-model="value"
      class="m-auto font-mono bg-transparent text-right outline-none"
      style="width: 300px"
      :disabled="readonly"
    >
    <input
      v-if="type === 'color'"
      v-model="value"
      type="color"
      class="m-auto ml-4 bg-transparent w-8 h-9 border-none outline-none "
    >
  </div>
</template>
