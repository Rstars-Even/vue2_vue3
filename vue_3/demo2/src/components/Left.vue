<template>
  <div class="left">
    <h4 v-color>这是 Left 组件、。。。</h4>
    <slot :text1="text1"></slot>
    <hr/>
    <slot name="default2" :text="text"></slot>
  </div>
</template>

<script>
export default {
  name: 'Left',
  props: {
    msg: String
  },
  data() {
    return {
      text1: '11------------1111',
      text: '这是 left 组件的值。。。'
    }
  },
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
