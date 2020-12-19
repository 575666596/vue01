<template>
  <div>
    {{ val }}
  </div>
  <div>
    <button @click="change()">子组件修改父组件的值</button><span>{{ msg }}</span>
  </div>
  <hr />
</template>
<script>
export default {
  data() {
    return {
      val: "child1",
      msg: "子组件的msg",
    };
  },
  methods: {
    run() {
      alert("子组件的run方法");
    },
    change() {
      this.$parent.msg = "子组件修改父组件的值";
    },
  },
  mounted() {
    //   主动获取父组件的数据
    console.log(this.$parent.msg);
    // 主动调用父组件的run方法
    this.$parent.run();
  },
};
</script>

<style lang="scss" scoped></style>
