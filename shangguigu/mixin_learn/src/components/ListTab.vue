<template>
  <ul class="todo-main">
    <transition-group appear name="animate__animated animate__bounce" enter-active-class="animate__backInDown"
      leave-active-class="animate__fadeOutDownBig">
      <Item v-for="el in todo_list" :key="el.id" :item="el"></Item>
    </transition-group>
  </ul>
</template>

<script>
import 'animate.css'
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
