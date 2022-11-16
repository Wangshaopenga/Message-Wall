import { defineStore } from 'pinia'

interface Person {
  name: string
  age: number
  sex?: string
}
export const useStore = defineStore('main', {
  state() {
    return {
      num: 1 as number,
      person: { name: '张三', age: 12 } as Person,
    }
  },
  getters: {
    getNum(): number {
      return this.num
    },
  },
  actions: {
    setNum(num: number) {
      this.num = num
    },
  },
})
