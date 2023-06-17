<template>
  <div class="hello">
    <h1>Movie 组件。、、{{ $route.params.id }}</h1>
    {{ id }}
    <h1>Movie 组件。、、{{ $route.query }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  mounted () {
    console.log('-----------$oute------', this.$route)
  },
  props: ['id']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
a {
  color: #42b983;
}
</style>
