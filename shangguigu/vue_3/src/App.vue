<template>
  <h3>姓名: {{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h3>工作岗位：{{ job.type }}</h3>
  <h3>月收入：{{ job.salary }}</h3>
  <button @click="fun">点击事件，改变数据</button>
  <hr>
  <h3>工作岗位：{{ job2.type }}</h3>
  <h3>月收入：{{ job2.salary }}</h3>
</template>

<script>
import {ref, reactive} from 'vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  setup() {
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type: '前端',
      salary: '10k'
    })
    let job2 = reactive({
      type: 'ui设计',
      salary: '30k'
    })
    // 方法
    function fun() {
      name.value = '李四'
      age.value = 20

      job.value.type = '后端'
      job.value.salary = '20k'

      job2.type = '运维'
      job2.salary = '60k'
    }

    return {
      name,
      age,
      job,
      job2,
      fun
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
