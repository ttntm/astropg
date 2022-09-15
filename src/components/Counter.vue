<script setup lang="ts">
  import { useStore } from '@nanostores/vue'
  // import { ref } from 'vue'
  import { count, clearCount, increaseCount } from '@store/Common.Store'

  const current = useStore(count)

  const add = () => increaseCount()

  const clear = () => clearCount()
</script>

<template>
  <div class="container">
    <h2 class="font-bold">
      <slot>Counter</slot>
    </h2>
    <p>Count: {{ current }}</p>
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