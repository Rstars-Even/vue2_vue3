<template>
  <div class="hello">
    <h1>about 组件。、、</h1>
    <router-link to="/about">tab1</router-link>
    <router-link to="/about/tab2">tab2</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
a {
  color: #42b983;
}
</style>
