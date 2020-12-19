<template>
  <div>{{ val }}</div>
  <!-- 3.使用组件，驼峰式转短横线 -->
  <my-child2></my-child2>
  <!-- 5.父组件给子组件传值：调用子组件的时候进行属性绑定 -->
  <!-- 如果是静态值，可以不用v-bind绑定，如果用，就要加上双重引:msg1="'静态值'" -->
  <my-child1 :msg="msg" msg1="静态值" :parent="this"></my-child1>
  <!-- 6.Props验证 -->
  <my-child2 :msg="msg" :num="num" :flag="flag" :fn="fn"></my-child2>
</template>

<script>
// 1.引入组件，引入的名称应该是自定义的，驼峰式
import myChild1 from "./09child1";
import myChild2 from "./09child2";

export default {
  data() {
    return {
      val: "09main",
      msg: "动态值",
      num: 123,
      flag: true,
      num1: 456,
      obj: {
        name: "lisi",
        age: 18,
      },
      fn: "success",
    };
  },
  methods: {
    run() {
      alert("父组件的方法");
    },
  },
  // 2.声明组件，驼峰式 + 简写
  components: {
    myChild1,
    myChild2,
  },
};
</script>

<style lang="scss" scoped>
// scoped表示css是局部作用域，如果不加对其他组件也会生效。
</style>
