//导入defineStore方法
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import axios from 'axios'

//调用defineStore方法 counter是模块的标识 独一无二的
//export const useCounterStore是导出defineStore方法
//变量名以use开头后面是模块的名字
export const useCounterStore = defineStore('counter', () => {
    //定义数据
    const count = ref(0)
    //定义方法
    const increment = () => {
        count.value++
    }
    //getter定义 用computed计算属性来定义
    const doubleCount = computed(() => {
        return count.value * 2
    })

    const API_URL = 'http://geek.itheima.net/v1_0/channels'
    const list = ref([])
    const loadList = async ()=>{
      const res =  await axios.get(API_URL)
      list.value=res.data.data.channels
    }

    //以对象的形式return供组件使用
    return {
        count,
        doubleCount,
        increment,
        list,
        loadList
    }
})
