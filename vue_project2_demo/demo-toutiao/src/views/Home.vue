<template>
  <div class='home-container'>
    <van-nav-bar title='怒发冲冠' fixed/>
    <ArtItem
      v-for='item in artList'
      :key='item.art_id'
      :title='item.title'
      :name='item.aut_name'
      :count="item.comm_count"
      :time="item.pubdate"
      :cover="item.cover"/>
  </div>
</template>

<script>
import { getArticleListAPI } from '@/api/articleAPI.js'
import ArtItem from '@/components/ArtItem.vue'
export default {
  name: 'Home',
  data() {
    return {
      page: 1,
      limt: 10,
      artList: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      const { data: res } = await getArticleListAPI(this.page, this.limt)
      console.log('--------res-----', res)
      this.artList = res
    }
  },
  components: {
    ArtItem
  }
}
</script>

<style lang="less" scoped>
  .home-container {
    padding: 46px 0 50px 0;
    .van-nav-bar {
      background-color: #007bff;
    }
    /deep/ .van-nav-bar__title {
      color: white;
    }
  }
</style>
