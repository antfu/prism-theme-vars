<script setup lang="ts">
import { Themes, downloadCSS, downloadJSON, theme } from '../store'
</script>

<template>
  <div class="border-b border-light p-3 flex">
    <div class="my-auto ml-2 text-lg font-mono">
      <span class="opacity-50">Prism</span> <span>--theme-vars</span>
    </div>
    <div class="flex-auto" />
    <select v-model="theme" class="font-mono mr-5 outline-none text-right">
      <option v-for="t in Object.keys(Themes)" :key="t">
        {{ t }}
      </option>
    </select>
    <button title="Download JSON" class="p-2 icon-btn rounded inline-block opacity-75" @click="downloadJSON">
      <carbon-document-download />
    </button>
    <button title="Download CSS" class="p-2 icon-btn rounded inline-block opacity-75" @click="downloadCSS">
      <carbon-download />
    </button>
    <a
      title="GitHub"
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
