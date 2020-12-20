<template>
  <div>
    <button><slot>default</slot></button>
  </div>
  <!-- <div>多个根节点，大家都无法继承，必须手动指定继承节点，下一节讲</div> -->
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.orange {
  background-color: orange;
}
.red {
  background-color: red;
}
</style>
