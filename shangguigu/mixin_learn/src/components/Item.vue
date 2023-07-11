<template>
  <li>
    <label>
      <!-- <input type="checkbox" :checked="item.done"/> -->
      <input type="checkbox" v-model="item.done"/>
      <span>{{ item.title }}</span>
    </label>
    <button class="btn btn-danger" @click="del(item.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'Item',
  props: ["item", 'del_todos'],
  methods: {
    del(id) {
      this.del_todos(id)
    }
  },
}
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }
  li label {
    float: left;
    cursor: pointer;
  }
  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }
  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }
  li:before {
    content: initial;
  }
  li:last-child {
    border-bottom: none;
  }
  li:hover {
    background-color: #ddd;
  }
  li:hover button{
    display: block;
  }
</style>
