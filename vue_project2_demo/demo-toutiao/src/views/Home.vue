<template>
  <div class='home-container'>
    <van-nav-bar title='怒发冲冠' fixed/>
    <van-pull-refresh v-model="refreshing" :disabled="finished" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad">
        <ArtItem
          v-for='item in artList'
          :key='item.art_id'
          :title='item.title'
          :name='item.aut_name'
          :count="item.comm_count"
          :time="item.pubdate"
          :cover="item.cover"/>
      </van-list>
    </van-pull-refresh>
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
      artList: [],
      loading: true,
      finished: false,
      refreshing: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList(isRefresh) {
      const { data: res } = await getArticleListAPI(this.page, this.limt)
      console.log('--------res-----', res)
      // this.artList = res

      if (isRefresh) {
        // 下拉刷新
        this.artList = [...res, ...this.artList]
        this.refreshing = false
      } else {
        // 上拉刷新
        this.artList = [...this.artList, ...res]
        this.loading = false
      }

      if (res.length === 0) {
        this.finished = true
      }
    },
    onLoad() {
      console.log('----------上拉加载。。。。')
      this.page++
      this.getList()
    },
    onRefresh() {
      console.log('----------下拉加载。。。。')
      this.page++
      this.getList(true)
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
