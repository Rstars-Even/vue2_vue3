<template>
  <div class="todo-header">
    <h3>count 组件的值：{{ $store.state.countAbout.sum }}</h3>
   <input type="text" v-model="names">
   <button @click="addPerson">添加</button>
   <button @click="addPersonWang">添加一个王姓</button>
   <h4 v-for="item in $store.state.personAbout.personList" :key="item.id">{{ item.name }}</h4>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: 'Person',
  data() {
    return {
        names: ''
    }
  },
  methods: {
    addPerson() {
        const personObj = {id: nanoid(), name: this.names}
        this.$store.commit("personAbout/ADD_PERSON", personObj)
        this.names = ''
    },
    addPersonWang() {
        const personObj = {id: nanoid(), name: this.names}
        this.$store.dispatch("personAbout/addPersonWang", personObj)
        this.names = ''
    }
  }
}
</script>

<style scoped></style>
