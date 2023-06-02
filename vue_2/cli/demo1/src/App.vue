<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MyCount :init='666'></MyCount>
    <MyCount></MyCount>
    app 父组件的 count {{ appCount }}
    <div class="item">
      <div class="el">
        <Left @numchange="getNewConut"></Left>
      </div>
      <div class="el">
        <Right></Right>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Right from '@/components/Right.vue'
import Left from '@/components/Left.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Right,
    Left
  },
  data() {
    return {
      appCount: ''
    }
  },
  methods: {
    getNewConut(val) {
      this.appCount = val
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
  background: #2c3e50;
}
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  .el {
    width: 50vw;
    height: 100px;
    border: 1px solid red;
  }
}
</style>
