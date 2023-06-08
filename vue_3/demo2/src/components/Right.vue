<template>
    <div class="right">
        <h4>Right组件、。。。</h4>
    </div>
</template>

<script>
export default {
    name: 'Right',
    props: {
        msg: String
    }
}
</script>
<style scoped>
.right {
  width: 100%;
  height: 200px;
  border: 1px solid red;
}
</style>
