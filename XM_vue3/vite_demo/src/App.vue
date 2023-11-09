<template>
    <div ref="dom">我是dom</div>
</template>

<script lang="ts" setup>
  import { ref, shallowRef, triggerRef, customRef, onMounted } from 'vue'
  let dom = ref()
  onMounted(() => {
    console.log(dom.value.innerText);
  })

</script>

<style lang="less" scoped>

</style>