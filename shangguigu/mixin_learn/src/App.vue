<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <Top :addTodo="addTodo"/>
        <ListTab :todo_list="todo_list"/>
        <Bottom :todo_list="todo_list" :allcheck="allcheck" :removeAll="removeAll"/>
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
      todo_list: JSON.parse(localStorage.getItem('todos')) || [],
    }
  },
  mounted() {
    this.$bus.$on('del_todos', this.del_todos)
    this.$bus.$on('updateTodo', this.updateTodo)
  },
  methods: {
    addTodo(item) {
      console.log('---------item-------', item);
      this.todo_list.unshift(item)
    },
    del_todos(id) {
      console.log('---------id-------', id);
      this.todo_list = this.todo_list.filter(todo => todo.id !== id);
    },
    updateTodo(id, title) {
      this.todo_list.forEach(todo => {if(todo.id === id) todo.title = title});
    },
    allcheck(done) {
      this.todo_list.forEach(todo => todo.done = done);
    },
    removeAll() {
      this.todo_list = this.todo_list.filter(todo => !todo.done)
    }
  },
  watch: {
    todo_list: {
      deep: true,
      handler(val) {
        localStorage.setItem('todos', JSON.stringify(val))
      }
    }
  }
}
</script>

<style>

</style>
