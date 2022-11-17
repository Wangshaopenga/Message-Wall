<template>
  <div class="flex flex-col h100vh">
    <TopBar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.main {
  @apply h90% bg-red-300
}

.footer {
  @apply h8%
}
</style>
