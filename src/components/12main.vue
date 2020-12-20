<template>
  <div>{{ val }}</div>
  <v-child></v-child>
  <hr />
  <!-- slot插槽使用 -->
  <!-- 1.字符串 -->
  <v-ch>按钮</v-ch>
  <!-- 2.html标签 -->
  <v-ch><span>按钮2</span></v-ch>
  <!-- 3.没有传值就采用默认值 -->
  <v-ch></v-ch>
  <!-- 4.非 Prop的Attribute继承，以class为例。实测，要求子组件返回一个根节点，不能是多个根节点，而且是根节点继承了class属性 -->
  <v-ch class="orange">orange</v-ch>
  <v-ch class="red">red</v-ch>
  <!-- 5.自定义非 Prop的Attribute继承 默认根元素继承-->
  <v-chid date-time="2020-12-12"></v-chid>
</template>

<script>
import myChild1 from "./12child1";
import myChild4 from "./12child4";
import myChild5 from "./12child5";

export default {
  data() {
    return {
      val: "12main",
    };
  },
  components: {
    "v-child": myChild1,
    "v-ch": myChild4,
    "v-chid": myChild5,
  },
};
</script>

<style lang="scss" scoped></style>
