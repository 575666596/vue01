<template>
  <div>{{ val }}</div>
  <div>Vue实例生命周期函数</div>
  <div>页面刷新首先出来前4个函数</div>
  <div><button @click="msg = '改变值'">改变数据，触发5,6函数</button></div>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      val: "child1",
      msg: "默认值",
    };
  },
  components: {},
  beforeCreate() {
    console.log("组件创建前1");
  },
  created() {
    console.log("组件创建后2");
  },
  beforeMount() {
    console.log("模板编译前3");
  },
  mounted() {
    /*请求数据，操作dom，放在这个里面mounted*/
    console.log("页面渲染结束后4");
  },
  beforeUpdate() {
    console.log("数据更新前5");
  },
  updated() {
    console.log("数据更新后6");
  },
  activated() {
    console.log("keep-alive缓存的组件激活时调用1");
  },
  deactivated() {
    console.log("keep-alive 缓存的组件停用时调用2");
  },
  beforeUnmount() {
    //vue2.x中beforeDestroy
    /*页面销毁的时候要保存一些数据，就可以监听这个销毁的生命周期函数*/
    console.log("组件销毁前7");
  },
  unmounted() {
    //vue2.x中destroyed
    console.log("组件销毁后8");
  },
};
</script>

<style lang="scss" scoped></style>
