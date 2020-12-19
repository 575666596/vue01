<template>
  <div>
    {{ val }}
  </div>
  <div><button @click="get()">触发父组件自定义事件（调用父组件方法）</button></div>
  <!-- 借助第三方模块实现非父子组件传值 -->
  <div><button @click="doLogin()">向非父子组件传值</button></div>
</template>
<script>
// 引入库文件
import event from "../modules/event.js";

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
    doLogin() {
      //   emit方法广播事件，login是自定义广播事件，参数也可以是一个对象
      event.emit("login", this.val);
    },
  },
  //建议定义所有发出的事件，以便更好地记录组件应该如何工作。
  emits: ["send"],
};
</script>

<style lang="scss" scoped></style>
