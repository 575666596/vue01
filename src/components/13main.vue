<template>
  <div>{{ val }}</div>
  <div>Vue实例生命周期函数</div>
  <div><button @click="flag = !flag">挂载||销毁子组件，触发78函数</button></div>
  <hr />
  <!-- 注意：不使用缓存组件，挂载或销毁组件分别分别触发1234和78函数，使用缓存组件后，第一次页面加载触发1234函数和缓存1函数，之后挂载或销毁组件分别触发的是缓存1和缓存2函数，其他函数就不能触发了-->
  <!-- <keep-alive> -->
  <v-child v-if="flag"></v-child>
  <!-- </keep-alive> -->
  <hr />
  <!-- keep-alive可以缓存组件，注意刷新是无法缓存的 -->
  <div><button @click="flag1 = !flag1">keep-alive可以缓存组件</button></div>
  <keep-alive>
    <v-ch v-if="flag1"></v-ch>
  </keep-alive>
</template>

<script>
import myChild1 from "./13child1";
import myChild2 from "./13child2";

export default {
  data() {
    return {
      val: "13main",
      flag: true,
      flag1: true,
    };
  },
  components: {
    "v-child": myChild1,
    "v-ch": myChild2,
  },
};
</script>

<style lang="scss" scoped></style>
