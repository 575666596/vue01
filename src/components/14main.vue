<template>
  <div>{{ val }}</div>
  <v-child></v-child>
  <hr />
  <v-ch></v-ch>
</template>

<script>
import myChild1 from "./14child1";
import myChild2 from "./14child2";

export default {
  data() {
    return {
      val: "14main",
    };
  },
  components: {
    "v-child": myChild1,
    "v-ch": myChild2,
  },
  // 全局使用Storage
  mounted() {
    this.Storage.set("username", "zhangsan");
    console.log(this.Storage.get("username"));
  },
};
</script>

<style lang="scss" scoped></style>
