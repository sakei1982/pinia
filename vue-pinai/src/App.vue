<script setup>
//导入useCounterStore方法
//vue3导入方法要加@
import { useCounterStore } from '@/stores/counter.js'
import { onMounted } from 'vue';

//执行方法得到实例对象
const countStore = useCounterStore()
console.log(countStore);

onMounted(()=>{
  countStore.loadList()
})
</script>

<template>
  <button @click="countStore.increment">{{ countStore.count }}</button>
 {{ countStore.doubleCount }}
 <ul v-for="item in countStore.list" :key="item.id">
   <li>{{ item.name }}</li> 
 </ul>
</template>
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
