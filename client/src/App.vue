<template>
  <router-view />
</template>

<!-- <template>
  <div class="flex flex-col">
    <div class="top">
      <div class="top-btn" :class="{ btnActive: isActive === 1 }" @click="isActive = 1">留言墙</div>
      <div class="top-btn" :class="{ btnActive: isActive === 2 }" @click="isActive = 2">照片墙</div>
    </div>
    <div class="main">
      <router-view />
    </div>
    <div class="footer"> footer </div>
  </div>
</template>

<script setup lang="ts">
let isActive = ref(1)
</script>

<style scoped lang="scss">
.top {
  @apply: bg-white shadow h-72px w100% flex justify-center items-center text-[4.5] select-none
}

.top-btn {
  @apply: w92px h36px text-center leading-36px cursor-pointer ml3
}

.btnActive {
  @apply bg-[#3B73F0] rd-5 text-white text-[4.5] transition-bg transition-colors transition-500
}

.main {
  @apply h1600px bg-red-300
}
</style> -->
