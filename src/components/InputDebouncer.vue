<script setup lang="ts">
import useDebouncedRef from '@/composables/useDebouncedRef'
const searchedText = useDebouncedRef('', 600, false)
</script>
<template>
  <div class="d-flex flex-column my-4">
    <span class="text-white">{{ searchedText }}</span>
    <input type="text" v-model="searchedText" />
  </div>
</template>
<style>
.text-white {
  color: white;
}
.d-flex {
  display: flex;
}
.flex-column {
  flex-direction: column;
}
.my-4 {
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
