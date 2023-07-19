<template>
  <li>
    <label>
      <!-- <input type="checkbox" :checked="item.done"/> -->
      <input type="checkbox" v-model="item.done" />
      <span v-if="!item.isEdit">{{ item.title }}</span>
      <input v-else type="text" :value="item.title" @blur="handleBlue(item, $event)" ref="inputTitle" />
    </label>
    <button class="btn btn-danger" @click="del(item.id)">删除</button>
    <button v-show="!item.isEdit" class="btn btn-danger" @click="handleEdit(item)">编辑</button>
  </li>
</template>

<script>
export default {
  name: 'Item',
  props: ["item"],
  methods: {
    del(id) {
      if (confirm('你确定删除吗？')) {
        this.$bus.$emit('del_todos', id)
      }
    },
    handleBlue(item, e) {
      item.isEdit = false
      if (!e.target.value.trim()) return alert('输入不能为空！')
      this.$bus.$emit('updateTodo', item.id, e.target.value)
    },
    handleEdit(item) {
      if (item.hasOwnProperty('isEdit')) {
        item.isEdit = true
      } else {
        this.$set(item, 'isEdit', true)
      }
      this.$nextTick(() => {
        this.$refs.inputTitle.focus();
      })
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

li:hover button {
  display: block;
}
</style>
