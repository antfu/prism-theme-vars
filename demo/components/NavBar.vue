<script setup lang="ts">
import { download, Themes, theme } from '../store'
</script>

<template>
  <div class="border-b border-light p-3 flex">
    <div class="ml-2 m-auto text-lg font-mono">
      <span class="opacity-50">Prism</span> <span>--theme-vars</span>
    </div>
    <div class="flex-auto" />
    <select v-model="theme" class="font-mono mr-5 outline-none text-right">
      <option v-for="theme in Object.keys(Themes)" :key="theme">
        {{ theme }}
      </option>
    </select>
    <div class="p-2 icon-btn rounded inline-block opacity-75" @click="download">
      <carbon-download />
    </div>
    <a
      class="p-2 icon-btn rounded inline-block opacity-75"
      href="https://github.com/antfu/prism-theme-vars"
      target="_blank"
    >
      <carbon-logo-github />
    </a>
  </div>
</template>

<style scoped>
.icon-btn:hover {
  background: rgba(125, 125, 125, 0.1);
}
</style>
