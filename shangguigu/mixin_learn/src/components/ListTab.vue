<template>
  <ul class="todo-main">
    <Item v-for="el in todo_list" :key="el.id" :item="el"></Item>
  </ul>
</template>

<script>
import Item from './Item.vue';
export default {
  name: 'ListTab',
  components: {
    Item
  },
  props: ['todo_list']
}
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }
  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin: 10px;
  }
</style>
