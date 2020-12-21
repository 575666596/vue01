<template>
  <div>{{ val }}</div>
  <div><button @click="getData()">axios基本使用</button></div>
  <ul>
    <li v-for="(item, index) in list" :key="index">{{ item.title }}---{{ item.aid }}</li>
  </ul>
</template>

<script>
// 1.引入axios
import axios from "axios";

export default {
  data() {
    return {
      val: "child1",
      list: [],
    };
  },
  methods: {
    getData() {
      let api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
      axios
        .get(api)
        .then((res) => {
          console.log(res);
          this.list = res.data.result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
