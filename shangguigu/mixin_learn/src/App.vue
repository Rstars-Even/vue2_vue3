<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <Top :addTodo="addTodo"/>
        <ListTab :todo_list="todo_list" :del_todos="del_todos"/>
        <Bottom/>
      </div>
    </div>
  </div>
</template>

<script>
import Top from './components/Top.vue'
import ListTab from './components/ListTab.vue'
import Bottom from './components/Bottom.vue'

export default {
  name: 'App',
  components: {
    Top,
    ListTab,
    Bottom
  },
  data() {
    return {
      todo_list: [
        {id: '001', title: '学习', done: true},
        {id: '002', title: '娱乐', done: false},
        {id: '003', title: '运动', done: true},
      ],
    }
  },
  methods: {
    addTodo(item) {
      console.log('---------item-------', item);
      this.todo_list.unshift(item)
    },
    del_todos(id) {
      this.todo_list = this.todo_list.filter( todo => todo.id !== id);
    }
  }
}
</script>

<style>

</style>
