<template>
  <div class="message-wall">
    <div class="top">
      <p class="title">留言墙</p>
      <p class="quote">很多事情值得记录，当然也值得回味。</p>
    </div>
    <div class="category">
      <div class="item" @click="isActive = index" :class="{ active: index === isActive }" v-for="(item, index) in categories" :key="item">{{ item }}</div>
    </div>
    <div class="main">
      <div class="card-box" @click="click" v-for="i in 10" :key="i">
        <div class="card-top">
          <p class="">22-11-18 21:09</p>
          <p class="">爱情</p>
        </div>
        <div class="card-content">{{ content }}</div>
        <div class="card-bottom">
          <div class="icones">
            <div class="icon">
              <div class="i-carbon-favorite-filled heart" />
              <div ml1>1</div>
            </div>
            <div class="icon">
              <div class="i-carbon-chat-bot comment" />
              <div ml1>1</div>
            </div>
          </div>
          <div class="name">匿名</div>
        </div>
      </div>
    </div>
    <div class="loading">没有更多了~</div>
  </div>
</template>

<script setup lang='ts'>
import { getMessage } from '@/utils/api'

const categories: string[] = ['全部', '留言', '目标', '理想', '过去', '将来', '爱情', '亲情', '友情', '秘密', '信条', '无题']
let isActive = $ref(0)
let color = ref('#e1f6d8')
const content = $ref('这是一段暖心的话，它或许不长，但是它是我现在最想说的。放在这里就留一个纪念吧，不用回头看，应为现在才是当下最好的。这是一段暖心的话，它或许不长，但是它是我现在最想说的。放在这里就留一个纪念吧。')

async function click() {
  const messages = await getMessage()
  console.log(messages)
}
</script>

<style lang="scss" scoped>
.message-wall {
  @apply w100% flex px56px py36px flex-col bg-#f2f2f2 mt-52px items-center justify-center dark:bg-#1e1e1e;
  .top {
    @apply text-center;
    .title {
      @apply text-56px font-600;
    }
    .quote {
      @apply text-14px color-#5b5b5b font-400;
    }
  }
  .category {
    @apply py10 flex flex-wrap;
    .item {
      @apply color-#5b5b5b h28px w56px leading-28px font-500 text-14px m1 cursor-pointer text-center transition-font-300;
    }
    .active {
      @apply color-#202020 border-#202020 border-1  font-600 rd-5 dark:color-#fefefe dark:border-gray-300;
    }
  }
  .main {
    @apply self-start ma grid gap2 md:grid-cols-2 xl:grid-cols-4 relative lg:grid-cols-3;
    .card-box {
      @apply w288px h240px py12px px24px rd-5px shadow relative m6px hover:translate-y--1.5 transition duration-300;
      background-color: v-bind(color);
      .card-top {
        @apply color-#949494 text-12px top-5% flex justify-between;
      }
      .card-content {
        @apply text-14px absolute w246px h140px text-#202020 indent-2em top-20% left-50% translate-x--50%;
      }
      .card-bottom {
        @apply flex justify-between w-240px p1 absolute bottom-2%;
        .icones{
          @apply flex relative text-14px text-#949494 text-center;
          .icon {
            @apply flex mr2 cursor-pointer first:hover:text-red;
          }
        }
        .name {
          @apply text-14px italic text-#202020;
        }
      }
    }
  }
  .loading {
    @apply mt10 w100p text-center;
  }
}
</style>
