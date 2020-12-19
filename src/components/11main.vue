<template>
  <div>{{ val }}</div>
  <hr />
  <!-- 自定义事件实现子组件给父组件传值 -->
  <!-- 1.绑定自定义事件 $event接收传递过来的参数，是固定写法，在vue中可以不加小括号，默认传递$event-->
  <v-child @send="run($event)"></v-child>

  <!-- 2.自定义事件传值验证 -->
  <v-ch @verify="get($event)"></v-ch>
</template>

<script>
// 1.引入组件，引入的名称应该是自定义的，驼峰式
import myChild1 from "./11child1";
import myChild2 from "./11child2";

export default {
  data() {
    return {
      val: "11main",
    };
  },
  components: {
    "v-child": myChild1,
    "v-ch": myChild2,
  },
  methods: {
    //   2.添加事件处理逻辑
    run(e) {
      console.log(e);
      alert("父组件的run方法");
    },
    get(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped></style>
