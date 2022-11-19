<template>
  <div class="topbar">
    <div class="logo">
      <img class="logo-img" src="@/assets/images/logo.svg" alt="">
      <span class="logo-title">一刻时光</span>
    </div>

    <div class="btns">
      <button class="top-btn" :class="{ btnActive: isActive === 1 }" @click="goMessage">留言墙</button>
      <button class="top-btn" :class="{ btnActive: isActive === 2 }" @click="goImages">照片墙</button>
    </div>

    <div class="user">
      <img class="avatar" src="@/assets/images/1.jpg" alt="">
      <span v-show="isDark" class="i-carbon-moon toggle" @click="toggleDark()" />
      <span v-show="!isDark" class="i-carbon-sun toggle" @click="toggleDark()" />
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
.topbar {
  @apply bg-#f5f5f7 shadow h-52px w100% flex items-center justify-between relative dark:bg-#222 dark:shadow  fixed z1;
  .logo {
    @apply relative inset-l-1.5% flex-[1] flex h100%  items-center text-4 text-center leading-52px font-700 select-none overflow-hidden;
    .logo-img {
      @apply w32px h32px cursor-pointer hover:scale-110 transition-transform-500;
    }
    .logo-title {
      @apply cursor-pointer  pl2 whitespace-nowrap display-none text-20px md:block;
    }
  }
  .btns {
    @apply flex relative justify-center h100% items-center;
    .top-btn {
      @apply w82px h36px m1 text-center leading-36px cursor-pointer select-none;
    }
  }
  .user {
    @apply flex h100% relative inset-r-1.5% flex-[1] overflow-hidden items-center justify-end;
    .avatar {
      @apply cursor-pointer  hover:scale-110 transition-transform-500 w35px h35px mr1.35rem rd-50%;
    }
    .toggle {
      @apply hover:scale-110 transition-transform-500 text-5 relative cursor-pointer;
    }
  }
}
.btnActive {
  @apply bg-[#3B73F0] rd-5 text-white text-[4.5] transition-bg transition-colors transition-500 hover:bg-[#5069f0]
  background: rgba(80, 105, 240);
}
</style>
