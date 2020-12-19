<template>
  <div>
    {{ val }}
  </div>
  <div><input type="text" placeholder="请输入用户名" v-model="username" /></div>
  <div><input type="password" placeholder="请输入密码" v-model="password" /></div>
  <div><button @click="submit()">登录</button></div>
</template>
<script>
// 引入库文件
import event from "../modules/event.js";

export default {
  data() {
    return {
      val: "child2",
      username: "",
      password: "",
    };
  },
  methods: {
    submit() {
      this.$emit("verify", { username: this.username, password: this.password });
    },
  },
  emits: {
    //   监听自定义事件
    verify: ({
      //   监听传递的属性
      username,
      password,
    }) => {
      if (username !== "" && password !== "") {
        return true;
      } else {
        //   error函数的作用是在控制台打印错误信息，不影响自定义事件触发和参数传递
        console.error("用户名或密码不能为空");
        return false;
      }
    },
  },
  mounted() {
    //   on方法监听广播，login是监听的自定义广播事件，data是接收传递过来的参数
    event.on("login", (data) => {
      console.log(data);
    });
  },
};
</script>

<style lang="scss" scoped></style>
