<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>
  <div h-full bg="#edeff1" text-center flex="~" justify-center items-center>
    <div>
      <div>{{ store.num }}</div>
      <button red-btn @click="store.num++">+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useStore()
</script>
