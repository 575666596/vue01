<template>
  <div>
    {{ val }}
  </div>
  <div>{{ msg }} --{{ msg1 }}</div>
  <div><button @click="use()">父组件传过来的值</button></div>
</template>
<script>
export default {
  data() {
    return {
      val: "child1",
    };
  },
  // 2.子组件接收父组件传过来的值 props 跟一个数组
  props: ["msg", "msg1", "parent"],
  methods: {
    use() {
      // 子组件通过this访问传过来的值
      console.log(this.msg);
    },
  },
  mounted() {
    console.log(this.parent); // undefined 无法接收父组传过来的实例
  },
};
</script>

<style lang="scss" scoped></style>
