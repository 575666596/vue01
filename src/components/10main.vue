<template>
  <div>{{ val }}</div>
  <v-child ref="children"></v-child>
  <div><button @click="getMsg()">获取子组件数据</button></div>
  <div><button @click="getFn()">调用子组件方法</button></div>
  <div>
    <button @click="change()">父组件修改子组件的值</button><span>{{ msg }}</span>
  </div>

  <hr />
</template>

<script>
// 1.引入组件，引入的名称应该是自定义的，驼峰式
import myChild1 from "./10child1";

export default {
  data() {
    return {
      val: "10main",
      msg: "父组件的msg",
    };
  },
  components: {
    "v-child": myChild1,
  },
  methods: {
    getMsg() {
      // 获取子组件数据
      alert(this.$refs.children.msg);
    },

    getFn() {
      // 调用子组件方法
      this.$refs.children.run();
    },
    run() {
      console.log("父组件的run方法");
    },
    change() {
      this.$refs.children.msg = "父组件修改子组件的值";
    },
  },
};
</script>

<style lang="scss" scoped></style>
