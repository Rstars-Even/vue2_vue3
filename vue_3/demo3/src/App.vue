<template>
  <div id="app">
    <!-- <a href="#/home">首页</a>
    <a href="#/movie">电影</a>
    <a href="#/about">关于</a> -->
    <!-- 当安装了 vue-router 包后，可以使用 router-link 来代替普通的 a 标签。。。 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/movie/1">功夫</router-link>
    <!-- hash 地址中 ？ 后面的参数项叫‘查询参数’ -->
    <router-link to="/movie/2?name=zs&age=20">鹅城</router-link>
    <router-link to="/movie/3">笑傲江湖</router-link>
    <router-link to="/about">关于</router-link>
    <hr>
    <!-- 这个组件是 路由插件提供，给组件渲染的占位符。 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
