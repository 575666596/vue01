<template>
  <div class="date-picker">
    <!-- 2.指定继承元素 -->
    <input type="date" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  // 1.禁用默认继承
  inheritAttrs: false,
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>
