<template>
  <div class="todo-header">
    <h1>签名： {{ desc }}</h1>
    <h1>学校名： {{ schoolName }}</h1>
    <h1>当前求和为： {{ sum }}</h1>
    <h1>当前的值放大十倍： {{ bigSum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="JIA(n)">+</button>
    <button @click="JIAN(n)">-</button>
    <button @click="jiaOdd(n)">为奇数时加</button>
    <button @click="jiaWait(n)">等一等再加</button>
    <h2>下面组件列表的总人数：{{ personList.length }}</h2>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Count',
  data() {
    return {
      n: 1
    }
  },
  computed: {
    ...mapState('countAbout', ['sum', 'schoolName', 'desc']),
    ...mapState('personAbout', ['personList']),
    ...mapGetters('countAbout', ['bigSum'])
  },
  methods: {
    ...mapMutations('countAbout', ['JIA', 'JIAN']),
    ...mapActions('countAbout', ['jiaOdd', 'jiaWait'])
  }
}
</script>

<style scoped></style>
