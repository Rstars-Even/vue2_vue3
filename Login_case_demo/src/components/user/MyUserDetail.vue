<template>
  <div>
    <button type="button" class="btn btn-light btn-sm" @click="$router.back()">后退</button>
    <h4 class="text-center">用户详情----- {{ $route.params.id }}</h4>
  </div>
</template>

<script>
export default {
  name: 'MyUserDetail'
}
</script>

<style lang="less" scoped></style>
