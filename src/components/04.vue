<template>
  <!-- 1.原生js获取dom节点-->
  <div @click="get()" id="div">{{ val }}</div>
  <!-- 2.vue提供的获取dom节点 1.ref指定名字-->
  <div ref="mydiv">{{ val }}</div>
  <!-- 3.双向数据绑定 -->
  <ul>
    <li>姓名：<input type="text" v-model="userinfo.name" /></li>
    <li>年龄：<input type="text" v-model="userinfo.age" /></li>
    <!-- 单选框name属性相同，表示只能选择一个，id值对应label标签 v-model绑定值与value匹配 -->
    <li>
      性别：
      <input type="radio" name="sex" id="sex1" value="1" v-model="userinfo.sex" /><label
        for="sex1"
        >男</label
      >
      <input type="radio" name="sex" id="sex2" value="2" v-model="userinfo.sex" /><label
        for="sex2"
        >女</label
      >
    </li>
    <li>
      城市：
      <select v-model="userinfo.city">
        <!-- value要属性绑定 -->
        <option v-for="(item, index) in userinfo.cityList" :key="index" :value="item">
          {{ item }}
        </option>
      </select>
    </li>
    <li>
      爱好：
      <!-- 这里使用span包裹，div会换行 -->
      <span v-for="(item, index) in userinfo.hobby" :key="index">
        <input type="checkbox" id="'ch_' + index" v-model="item.checked" />
        <label for="'ch_' + index">{{ item.title }}</label>
      </span>
    </li>
    <li>
      备注：
      <textarea rows="" cols="" v-model="userinfo.mark"></textarea>
    </li>
  </ul>
  <!-- pre表示原样输出 -->
  <pre>{{ userinfo }}</pre>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// 导出这个模块，固定写法
export default {
  // name: 'App',
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      val: "hello",
      userinfo: {
        name: "",
        age: "",
        sex: "1",
        cityList: ["北京", "上海", "深圳"],
        city: "上海", // 默认选择上海
        hobby: [
          {
            title: "吃饭",
            checked: false,
          },
          {
            title: "打球",
            checked: false,
          },
          {
            title: "睡觉",
            checked: true,
          },
        ],
        mark: "",
      },
    };
  },
  methods: {
    get() {
      //  原生js操作dom
      let div = document.getElementById("div");
      console.log(div.innerHTML);
    },
  },
  mounted() {
    // 2.通过this.$refs.mydiv访问dom节点
    console.log(this.$refs.mydiv);
    this.$refs.mydiv.style.background = "red";
  },
};
</script>

<style></style>
