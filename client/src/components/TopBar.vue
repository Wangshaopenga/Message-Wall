<template>
  <div class="bg-white shadow h-52px w100% flex items-center justify-between relative dark:bg-#222 dark:shadow">
    <div class="relative inset-l-1.5% flex-[1] flex h100%  items-center text-4 text-center leading-52px font-700 select-none overflow-hidden">
      <img w32px h32px cursor-pointer src="@/assets/images/logo.svg" alt="">
      <span class="cursor-pointer  pl2 whitespace-nowrap display-none text-20px text-#202020 md:block">一刻时光</span>
    </div>

    <div class="flex relative justify-center h100% items-center">
      <div class="w92px h36px m1 text-center leading-36px cursor-pointer select-none" :class="{ btnActive: isActive === 1 }" @click="goMessage">留言墙</div>
      <div class="w92px h36px m1 text-center leading-36px cursor-pointer select-none" :class="{ btnActive: isActive === 2 }" @click="goImages">照片墙</div>
    </div>

    <div class="flex h100% relative inset-r-1.5% flex-[1] overflow-hidden items-center justify-end">
      <img class="cursor-pointer w35px h35px mr3 rd-50%" src="@/assets/images/1.jpg" alt="">
      <span v-show="isDark" class="i-carbon-moon text-5 relative cursor-pointer" @click="toggleDark()" />
      <span v-show="!isDark" class="i-carbon-sun text-5 relative cursor-pointer" @click="toggleDark()" />
    </div>
  </div>
</template>

<script setup lang='ts'>
const isDark = useDark()
const toggleDark = useToggle(isDark)
let isActive = $ref(1)
const router = useRouter()
function goMessage() {
  isActive = 1
  router.push('message')
}
function goImages() {
  isActive = 2
  router.push('image')
}
</script>

<style scoped lang="scss">
.btnActive {
  @apply bg-[#3B73F0] rd-5 text-white text-[4.5] transition-bg transition-colors transition-500
}
</style>
