<template>
    <div>
      <ul>
        <li v-for="(item, ind) in arr" :key="item">
          <span>{{ item }}</span>
          <button @click="del(ind)">删除</button>
        </li>
      </ul>
      <button @click="add">生成</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        arr: [1, 5, 3],
      };
    },
    methods: {
      add() {
        this.arr.push(Math.floor(Math.random() * 20));
      },
      del(index) {
        this.arr.splice(index, 1);
      },
    },
  };
  </script>