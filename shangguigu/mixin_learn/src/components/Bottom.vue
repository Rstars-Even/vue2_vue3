<template>
  <div class="todo-footer" v-show="sum">
    <label>
      <input type="checkbox" :checked="ischeck" @change="checkAll"/>
    </label>
    <span>
      <span>已完成{{ statistics }}</span> / 全部{{ sum }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'Bottom',
  props: ['todo_list', 'allcheck', 'removeAll'],
  computed: {
    sum() {
      return this.todo_list.length
    },
    statistics() {
      return this.todo_list.reduce((pre, cur) => pre + (cur.done ? 1 :0), 0)
    },
    ischeck() {
      return this.sum === this.statistics && this.sum > 0
    },
  },
  methods: {
    checkAll(e) {
      this.allcheck(e.target.checked)
    },
    clearAll() {
      this.removeAll()
    }
  },
}
</script>
<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }
  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }
  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }
</style>
