<template>
  <!-- 1.如果不传递参数可以省略小括号-->
  <div @click="setVal">{{ val }}</div>
  <!-- 2.事件对象写在参数末尾，$event，固定写法 -->
  <div @click="eventFn(1, $event)">{{ val }}</div>
  <!-- 3.多事件处理程序 逗号隔开-->
  <div @click="one(), two()">{{ val }}</div>
  <!-- 4.事件修饰符 -->
  <div>
    <a href="https://cn.bing.com/" target="_blank" @click="prevent($event)">跳转</a>
  </div>
  <div><a href="https://cn.bing.com/" target="_blank" @click.prevent="">跳转</a></div>
  <!-- 5.按键修饰符 好处是只有按下空格键才会触发方法，事件对象任意键都会触发-->
  <input type="text" @keyup="doSearch($event)" />
  <input type="text" @keyup.space="space()" />
  <!-- 6.去空格修饰符trim -->
  <div><input type="text" v-model.trim="text" />{{ text }}</div>
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
      text: "",
    };
  },
  methods: {
    setVal() {
      this.val = "helloworld";
    },
    eventFn(num, e) {
      console.log(num);
      console.log((e.target.style.background = "red"));
      // e.stopPropagation()
    },
    one() {
      console.log(1);
    },
    two() {
      console.log(2);
    },
    prevent(e) {
      e.preventDefault();
    },
    doSearch(e) {
      console.log(e.keyCode);
      if (e.keyCode === 13) {
        alert("回车键");
      }
    },
    space() {
      alert("空格键");
    },
  },
};
</script>

<style></style>
