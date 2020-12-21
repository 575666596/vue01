<template>
  <div>
    <ul>
      <li
        :class="['base', index === currentIndex ? 'active' : '']"
        @click="currentIndex = index"
        v-for="(item, index) in list"
        :key="index"
      >
        {{ item.title }}
      </li>
    </ul>
    <div>{{ upContent }}</div>
  </div>
  <!-- $nextTick使用 -->
  <div id="div">{{ div }}</div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "apple",
          content: "apples",
        },
        {
          title: "orange",
          content: "oranges",
        },
        {
          title: "banana",
          content: "bananas",
        },
      ],
      currentIndex: 0,
      div: "div1",
    };
  },
  computed: {
    upContent() {
      // 新写法，这前tab内容的显示根标题一样放到循环里面，根据v-if判断索引是否等于当前索引
      return this.list[this.currentIndex].content;
    },
  },
  activated() {
    console.log("keep-alive缓存的组件激活时调用1");
  },
  deactivated() {
    console.log("keep-alive 缓存的组件停用时调用2");
  },
  mounted() {
    // 页面渲染完成后获取dom
    const div1 = document.querySelector("#div");
    console.log("1" + div1.innerHTML);
    // 修改dom
    this.div = "$nextTick演示";
    const div2 = document.querySelector("#div");
    // div2.innerHTML = "div2"; 这种方法可以，用的是原生方法
    // 此时获取不到最新的dom
    console.log("2" + div2.innerHTML);
    this.$nextTick(() => {
      const div3 = document.querySelector("#div");
      console.log("3" + div3.innerHTML);
    });
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  .base {
    display: inline;
    padding: 0 10px;
  }
  .active {
    background: red;
  }
}
</style>
