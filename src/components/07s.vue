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
// 3.导入
import storage from "./modules/storage";
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
      storage.set("todolist", this.list);
      this.val = "";
    },
    del(index) {
      this.list.splice(index, 1);
      storage.set("todolist", this.list);
    },
    changebox() {
      storage.set("todolist", this.list);
    },
  },
  mounted() {
    let todolist = storage.get("todolist");
    if (todolist) {
      this.list = todolist;
    }
    console.log(storage);
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
