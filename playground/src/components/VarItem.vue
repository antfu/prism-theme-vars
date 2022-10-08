<script setup lang="ts">
import type { Ref } from 'vue'
import { computed } from 'vue'
import { colors } from '../store'

const props = defineProps<{ id: string; value: Ref<string> }>()

const name = computed(() => props.id.replace('--prism-', ''))
const value = props.value

const style = computed(() =>
  Object.assign({
    color: 'var(--prism-foreground)',
    background: 'var(--prism-background)',
  },
  props.id.includes('background')
    ? { background: `var(${props.id})` }
    : props.id.includes('style')
      ? { 'font-style': `var(${props.id})` }
      : props.id.includes('decoration')
        ? { 'text-decoration': `var(${props.id})` }
        : { color: `var(${props.id})` },
  ),
)

const color = computed(() => {
  const variableRe = /^var\((--prism-.+?)\)$/
  const key = value.value.match(variableRe)?.[1]
  return key ? colors[key] : value.value
})

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
      style="width: 200px"
      :disabled="readonly"
    >
    <input
      v-if="type === 'color'"
      v-model="color"
      type="color"
      class="m-auto ml-4 bg-transparent w-8 h-9 border-none outline-none "
    >
  </div>
</template>
