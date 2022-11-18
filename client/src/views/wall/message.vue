<template>
  <div class="h100p w100p flex p56px flex-col bg-#f2f2f2 items-center dark:bg-#1e1e1e">
    <div text-center>
      <p text-56px font-600>留言墙</p>
      <p class="text-14px color-#5b5b5b font-400">很多事情值得记录，当然也值得回味。</p>
    </div>
    <div py10 flex flex-wrap>
      <div class="category" @click="isActive = index" :class="{ active: index === isActive }" v-for="(item, index) in categories" :key="item">{{ item }}</div>
    </div>
    <div class="self-start ma grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
      <div class="w288px h240px bg-#d9edd1  py12px px20px m6px" v-for="i in 10" :key="i">{{ i }}</div>
    </div>
  </div>
</template>

<script setup lang='ts'>
const categories: string[] = ['全部', '留言', '目标', '理想', '过去', '将来', '爱情', '亲情', '友情', '秘密', '信条', '无题']
let isActive = $ref(0)
</script>

<style lang="scss" scoped>
.category {
  @apply color-#5b5b5b h28px w56px leading-28px font-500 text-14px m1 cursor-pointer text-center transition-font-300;
}
.active {
  @apply color-#202020 border-#202020 border-1  font-600 rd-5 dark:color-#fefefe dark:border-gray-300;
}
</style>
