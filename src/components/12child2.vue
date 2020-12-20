<template>
  <div>
    <div>{{ val }}</div>
    <!-- 3.update是固定写法，监听input事件，然后广播事件，并把输入框的值传出去 -->
    <input
      type="text"
      :placeholder="KeyWord"
      @input="$emit('update:KeyWord', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      val: "child2",
    };
  },
  // 2.接收
  props: ["KeyWord"],
};
</script>

<style lang="scss" scoped></style>
