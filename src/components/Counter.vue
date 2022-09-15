<script setup lang="ts">
  import { ref } from 'vue'

  const count = ref<number>(0)

  const add = () => count.value = count.value + 1

  const clear = () => count.value = 0
</script>

<template>
  <div class="container">
    <p>Count: {{ count }}</p>
    <div class="row mt-8">
      <button class="counter-btn mr-8" @click="add">Add</button>
      <button class="counter-btn" @click="clear">Clear</button>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .container {
    @apply flex flex-col w-1/2 mx-auto my-8;
  }
  .row {
    @apply flex flex-row items-center justify-start;
  }
  .counter-btn {
    @apply block bg-orange-400 font-bold text-white rounded shadow cursor-pointer py-1 px-3
  }
</style>