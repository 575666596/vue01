<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- 1.差值 -->
  <div>{{ msg }}</div>
  <!-- 2.html文本 -->
  <div v-html="h3"></div>
  <!-- 3.绑定属性 -->
  <div :title="msg">HelloWorld</div>
  <div v-bind:title="msg">HelloWorld</div>
  <!-- 4.v-bind绑定动态参数，也叫动态属性 -->
  <!-- 动态参数默认绑定动态值，如果确实是静态值，还要加引号 -->
  <div><a :[myHref]="'https://cn.bing.com/'">跳转</a></div>
  <div><a v-bind:[myHref]="myLink">跳转</a></div>
  <!-- 5.列表循环，3.x中必须绑定key -->
  <div v-for="(item, index) in list" :key="index">{{ item }}---{{ index }}</div>
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
      msg: "HelloWorld",
      h3: `<h3>hellow</h3>`,
      myHref: "href",
      myLink: "https://cn.bing.com/",
      list: ["a", "b", "c"],
    };
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
  margin-top: 60px;
} */
</style>
