<template>
  <div>
    <!-- 标题 -->
    <h4 class="text-center">用户管理</h4>

    <!-- 用户列表 -->
    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>头衔</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="el in userlist" :key="el.id">
          <td>{{ el.id }}</td>
          <td>{{ el.name }}</td>
          <td>{{ el.age }}</td>
          <td>{{ el.position }}</td>
          <td><a href="javascript:void(0);" @click="userInfor(el.id)">详情</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MyUser',
  data() {
    return {
      // 用户列表数据
      userlist: [
        { id: 1, name: '嬴政', age: 18, position: '始皇帝' },
        { id: 2, name: '李斯', age: 35, position: '丞相' },
        { id: 3, name: '吕不韦', age: 50, position: '商人' },
        { id: 4, name: '赵姬', age: 48, position: '王太后' }
      ]
    }
  },
  methods: {
    userInfor(id) {
      this.$router.push('/home/userinfor/' + id);
    }
  },
}
</script>

<style lang="less" scoped></style>
