<template>
  <div>
    {{ val }}
    <hr />
    <!-- 单个v-model数据绑定 -->
    <!-- 1.绑定 -->
    <v-input v-model:KeyWord="keyword"></v-input>
  </div>
  <div>{{ keyword }}</div>
  <hr />
  <!-- 多个v-model数据绑定 -->
  <v-ch v-model:firstName="firstName" v-model:lastName="lastName"></v-ch>
  <div>{{ firstName }}---{{ lastName }}</div>
</template>
<script>
import chlid from "./12child2";
import ch from "./12child3";

export default {
  data() {
    return {
      val: "child1",
      keyword: "三国演义",
      firstName: "first",
      lastName: "last",
    };
  },
  components: {
    "v-input": chlid,
    "v-ch": ch,
  },
};
</script>

<style lang="scss" scoped></style>
