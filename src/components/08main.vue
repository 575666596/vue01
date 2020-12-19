<template>
  <div>vue2.x中需要有一个根标签（div）在3.x不需要</div>
  <div>{{ val }}</div>
  <!-- 3.使用组件 -->
  <v-home />
  <v-home></v-home>
  <News></News>
</template>

<script>
// 1.引入组件，引入的名称应该是自定义的
import Home from "./08home";
import News from "./08news";

export default {
  data() {
    return {
      val: "08main",
    };
  },
  methods: {},
  // 2.声明组件，简写方法，和重命名方式
  components: {
    "v-home": Home,
    News,
  },
};
</script>

<style lang="scss" scoped>
// scoped表示css是局部作用域，如果不加对其他组件也会生效。
</style>
