<template>
  <div>{{ val }}</div>
  <div><button @click="getData()">全局axios获取数据</button></div>
  <div><button @click="jsonpData()">jsonp获取百度数据</button></div>
  <!-- 调百度jsonp接口 -->
  <ul>
    <li v-for="(item, index) in list" :key="index">{{ item }}</li>
  </ul>
  <!-- 案例 -->
  <input type="text" v-model="keyword" @keyup="jsonpdemo()" />
</template>

<script>
export default {
  data() {
    return {
      val: "child2",
      list: [],
      keyword: "",
    };
  },
  methods: {
    getData() {
      let api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
      //   全局已经配置，直接通过this.Axios访问
      this.Axios(api)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    jsonpData() {
      // 百度 https://sp0.baidu.com/5alFazu8AA54nxGko9WTAnF6hhy/su?wd=golang&cb=xxxxx
      let api = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=php";
      this.fetchJsonp(api, {
        jsonpCallback: "cb", // 百度jsonp请求的回调参数就叫cb，请求的时候会加上这个参数，参数值是随机数
      })
        .then((res) => {
          return res.json(); // 固定写法
        })
        .then((data) => {
          console.log(data); // 成功数据
          this.list = data.s;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    jsonpdemo() {
      if (this.keyword != "") {
        clearTimeout(this.timer); // 清除定时器
        this.timer = setTimeout(() => {
          let api =
            "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + this.keyword;
          this.fetchJsonp(api, {
            jsonpCallback: "cb",
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              console.log(data);
              this.list = data.s;
            });
        }, 200);
      } else {
        this.list = [];
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
