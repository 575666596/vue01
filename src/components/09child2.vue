<template>
  <div>{{ val }}</div>
  <div>{{ msg }}</div>
  <div>{{ num }}</div>
  <div>{{ flag }}</div>
  <div>{{ num1 }}</div>
  <div>{{ obj }}</div>
  <div>{{ fn }}</div>
</template>

<script>
export default {
  data() {
    return {
      val: "child2",
    };
  },
  // 对传入和数据进行校验，props跟一个对象
  props: {
    // 基础类型检查，null 和 undefined 会通过任何类型的验证
    msg: String,
    // 多个可能类型
    num: [Number, String],
    // 必填的字符
    flag: { type: Boolean, required: true },
    // 带有默认值的数字，默认值的意思是父组件没有传递num1变量时，子组件也可以使用num1
    num1: {
      type: Number,
      default: 100,
    },
    // 带有默认值的对象，同上
    obj: {
      type: Object,
      default: function () {
        // 对象或数组默认值必须从一个工厂函数获取
        return { name: "zhangsan", age: 20 };
      },
      // 自定义验证函数
      // 具有默认值的函数
    },
  },
};
</script>

<style lang="scss" scoped></style>
