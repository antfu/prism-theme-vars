<script setup lang="ts">
import { colorRefs } from '../store'
</script>

<template>
  <div>
    <NavBar />
    <div v-for="[key, value] in colorRefs" :key="key">
      <VarItem :id="key" :value="value" />
    </div>
  </div>
</template>
