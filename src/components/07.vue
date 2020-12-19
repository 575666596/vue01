<template>
  <div class="container">
    <h2>todolist</h2>
    <hr />
    <div><input type="text" v-model.trim="val" @keyup.enter="add()" /></div>
    <h3>未完成</h3>
    <!-- 注意：v-if和v-for不能同时放在一个标签，要借助template -->
    <ul>
      <template v-for="(item, index) in list" :key="index">
        <li v-if="!item.checked">
          <input type="checkbox" v-model="item.checked" @change="changebox()" /> ---{{
            item.title
          }}
          ---
          <button @click="del(index)">删除</button>
        </li>
      </template>
    </ul>
    <h3>已完成</h3>
    <ul>
      <template v-for="(item, index) in list" :key="index">
        <li v-if="item.checked">
          <input type="checkbox" v-model="item.checked" @change="changebox()" /> ---{{
            item.title
          }}
          ---
          <button @click="del(index)">删除</button>
        </li>
      </template>
    </ul>

    <pre>{{ list }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: "",
      list: [],
    };
  },
  methods: {
    add() {
      this.list.push({
        title: this.val,
        checked: false,
      });
      // 键值对形式保存，值是json字符串类型
      localStorage.setItem("todolist", JSON.stringify(this.list));
      this.val = "";
    },
    del(index) {
      this.list.splice(index, 1);
      // 读值操作，键值对形式保存，值是json字符串类型
      localStorage.setItem("todolist", JSON.stringify(this.list));
    },
    // 复选框状态改变时重新设置
    changebox() {
      localStorage.setItem("todolist", JSON.stringify(this.list));
    },
  },
  // 页面刷新会触发的方法
  mounted() {
    let todolist = JSON.parse(localStorage.getItem("todolist"));
    // 如果todolist存在就赋值
    if (todolist) {
      this.list = todolist;
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 500px;
  height: 600px;
  margin: 100px auto;
  border: 1px solid #ccc;
  h2 {
    text-align: center;
  }
  ul {
    list-style: none;
    li {
      color: #666;
      font-size: 24px;
    }
  }
}
</style>
