<template>
  <div id="app">
    <!-- <button @click="comName='Left'">显示 left</button>
    <button @click="comName='Right'">显示 right</button>
    <keep-alive include="Right,Left">
      <component :is="comName"></component>
    </keep-alive> -->
    <Left>123</Left>
    <Right>123</Right>

  </div>
</template>

<script>
import Left from './components/Left.vue'
import Right from './components/Right.vue'

export default {
  name: 'App',
  data() {
    return {
      comName: 'Left',
    }
  },
  components: {
    Left,
    Right
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
