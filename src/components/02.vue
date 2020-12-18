<template>
  <!-- 1.事件和方法 -->
  <div @click="getVal()">{{ val }}</div>
  <div v-on:click="getVal()">{{ val }}</div>
  <!-- 2.class绑定 -->
  <div :class="{ red: flag, font: flag ? true : false }">{{ val }}</div>
  <div :class="[`red`, `${flag} ?  '': 'font'`]">{{ val }}</div>
  <div :class="['red', flag ? 'font' : '']">{{ val }}</div>
  <!-- 3.style绑定 -->
  <div :style="{ color: 'red', fontSize: flag ? '24px' : '' }">{{ val }}</div>
  <!-- 4.案例 -->
  <div v-for="(item, index) in list" :key="index" :class="[index === 0 ? 'red' : '']">
    {{ item }}
  </div>
  <div
    v-for="(item, index) in list"
    :key="index"
    :class="{ red: index === 0 ? true : false }"
  >
    {{ item }}
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// 导出这个模块，固定写法
export default {
  // name: 'App',
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      val: "hello",
      flag: "true",
      list: ["a", "b", "c"],
    };
  },
  methods: {
    getVal() {
      this.val = "helloworld";
    },
  },
};
</script>

<style>
.red {
  color: red;
}
.font {
  font-size: 28px;
}
</style>
