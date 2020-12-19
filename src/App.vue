<template>
  <div>{{ val }}</div>
  <v-main></v-main>
</template>

<script>
import Main from "./components/09main";
export default {
  data() {
    return {
      val: "App",
    };
  },
  components: {
    "v-main": Main,
  },
};
</script>

<style lang="scss" scoped></style>
