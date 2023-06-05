<template>
  <div>
    <button @click="clicks">点击获取 ref</button>
    <h3 ref="testRef">{{ msgFromLeft }}</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msgFromLeft: 'hello world 子组件。。。'
    }
  },
  methods: {
    clicks() {
      this.$refs.testRef.style.color = 'red';   //使用 ref 引用改变 dom 字体颜色。
    }
  }
}
</script>