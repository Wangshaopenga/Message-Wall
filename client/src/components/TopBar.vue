<template>
  <div class="bg-white re shadow h-72px w100% flex justify-between px5 items-center text-[4.5]">
    <div cursor-pointer flex text-4 text-center leading-72px font-700 select-none>
      <img mr3 src="@/assets/images/logo.svg" alt="">
      一刻时光
    </div>

    <div class="flex justify-center items-center">
      <div class="w92px h36px text-center leading-36px cursor-pointer ml select-none" :class="{ btnActive: isActive === 1 }" @click="goMessage">留言墙</div>
      <div class="w92px h36px text-center leading-36px cursor-pointer ml select-none" :class="{ btnActive: isActive === 2 }" @click="goImages">照片墙</div>
    </div>

    <div class=" flex items-center ">
      <img class="cursor-pointer w45px h45px mr3 rd-50%" src="@/assets/images/1.jpg" alt="">
      <span text-16px cursor-pointer>沐兮</span>
    </div>
  </div>
</template>

<script setup lang='ts'>
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
