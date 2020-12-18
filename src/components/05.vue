<template>
  <!-- 1.模板中的js表达式 模板内可以直接调用方法-->
  <div>{{ val + 1 }}</div>
  <div>{{ flag ? 1 : 0 }}</div>
  <div>{{ msg.split("").reverse().join("") }}</div>
  <!-- 2.条件判断 v-if v-else v-else-if v-show -->
  <div>
    <span v-if="Math.random() > 0.5">大于0.5</span>
    <span v-else>小于0.5</span>
  </div>
  <div v-if="type === 1">1</div>
  <div v-else-if="type === 2">2</div>
  <div v-else-if="type === 3">3</div>
  <div v-else>4</div>
  <!-- 4.在<template>元素上使用v-if条件渲染，适合多个兄弟元素
    因为v-if是一个指令，所以必须将它添加到一个元素上。但是如果想切换多个元素呢？此时可以把一个
<template>元素当做不可见的包裹元素，并在上面使用v-if。最终的渲染结果将不包含<template>元素。 -->
  <template v-if="flag">
    <div>div1</div>
    <div>div2</div>
  </template>

  <!-- 5.v-show -> display:none; 与 v-if区别 不渲染到页面 操作css/操作dom-->
  <div v-show="false">v-show</div>
  <div v-if="false">v-if</div>
  <!-- 6.计算属性，模板内只进行简单计算，复杂计算放到计算属性里面 -->
  <div>{{ reverseMsg }}</div>
  <button @click="changeMsg()">重新触发计算属性</button>
  <!-- 7.案例：计算属性实现筛选功能 -->
  <div>
    <input type="text" v-model="keyWord" />
    <div v-for="(item, index) in fruitList" :key="index">{{ item }}</div>
  </div>
  <!-- 8.watch监听数据变化，用于观察Vue实例上的数据变动，官网推荐使用计算属性监听数据变化而不是watch。 -->
  <div>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
    <div>{{ fullName }}</div>
    <div>{{ comName }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: 1,
      flag: true,
      msg: "三国演义",
      type: 4,
      keyWord: "",
      list: ["apple", "banana", "orange", "tomato", "potato"],
      firstName: "",
      lastName: "",
      fullName: "",
    };
  },
  methods: {
    changeMsg() {
      this.msg = "水浒传";
    },
  },
  computed: {
    // reverseMsg可以当做一个变量使用，变量值就是函数返回值
    reverseMsg() {
      // 当msg发生变化时，又会重新触发计算属性
      return this.msg.split("").reverse().join("");
    },
    fruitList() {
      // 存储符合条件的数组成员
      let newList = [];
      this.list.forEach((item) => {
        // 字符串成员查找
        if (item.indexOf(this.keyWord) !== -1 && this.keyWord !== "") {
          newList.push(item);
        }
      });
      return newList;
    },
    // 通过计算属性实现侦听器的功能
    comName() {
      return this.firstName + "" + this.lastName;
    },
  },
  watch: {
    // 要监听的属性
    firstName(value) {
      // 当变量firstName发生变化时就会把变量值赋值给value
      this.fullName = value + "" + this.lastName;
    },
    lastName(value) {
      this.fullName = this.firstName + "" + value;
    },
  },
};
</script>

<style></style>
