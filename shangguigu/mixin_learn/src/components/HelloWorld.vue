<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
import myMinix from '../mixin';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  minixs: [myMinix], // todo.vue 中声明minix 进行混合
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
