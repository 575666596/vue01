<template>
  <div>
    {{ val }}
  </div>
  <div><button @click="get()">触发父组件自定义事件（调用父组件方法）</button></div>
</template>
<script>
export default {
  data() {
    return {
      val: "child1",
    };
  },
  methods: {
    //   3.子组件触发父组件自定义事件，第一个参数是时间自定义名称，第二个参数是传递的参数，多个参数以对象形式传递
    get() {
      this.$emit("send", this.val);

      //   this.$emit("send", { name: this.val, age: 123 });
    },
  },
  //建议定义所有发出的事件，以便更好地记录组件应该如何工作。
  emits: ["send"],
};
</script>

<style lang="scss" scoped></style>
