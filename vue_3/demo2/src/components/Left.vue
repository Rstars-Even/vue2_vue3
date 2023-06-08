<template>
  <div class="left">
    <h4>这是 Left 组件、。。。</h4>
  </div>
</template>

<script>
export default {
  name: 'Left',
  props: {
    msg: String
  }
}
</script>
<style scoped>
  .left {
    width: 100%;
    height: 200px;
    border: 1px solid #2c3e50;
    margin-bottom: 30px;
  }
</style>
