<template>
  <div class="app-container">
    <Headers title="购物车案例"/>
    <Goods @state-change="getNewState" v-for="item in list" :key="item.goods_id" :id="item.goods_id" :name="item.goods_name" :pic="item.goods_img" :price="item.goods_price" :state="item.goods_state" :count="item.goods_count"/>
    <Footer @change_select="getNewAllState" :amount="amt" :isFull="select_all" :total="total"/>
</div>
</template>

<script>
import axios from 'axios'
import Headers from '@/components/Header/Header.vue'
import Goods from '@/components/Goods/Goods.vue'
import Footer from '@/components/Footer/Footer.vue'
import bus from '@/components/eventBus.js';
export default {
  data() {
    return {
      list: [],    //购物车数组。。
    }
  },
  created() {
    this.initCartList()

    bus.$on('share', val => {
      console.log('-------------val---', val);
      this.list.some(item => {
        console.log('---item.id----', item.goods_id, val.id);
        if (item.goods_id === val.id) {
          item.goods_count = val.value
          console.log('---this.list----', this.list);
          return true
        }
      })
    })
  },
  methods: {
    async initCartList() {
      const { data: res } = await axios.get('https://applet-base-api-t.itheima.net/api/cart')
      if(res.status == 200) {
        this.list = res.list
      }
      console.log('-------------res------', res)
    },
    /**
     * 是否选择商品。
     * @param {*} val 接收一个id 和是否勾选的状态。
     */
    getNewState(val) {
      // console.log('--------val---------', val);
      this.list.some(item => {
        if (item.goods_id === val.id) {
          item.goods_state = val.value
          return true
        }
      })
    },
    getNewAllState(val) {
      this.list.forEach(item => item.goods_state = val);
    }
  },
  computed: {
    select_all() {
      return this.list.every(item => item.goods_state)
    },
    // 已勾选的商品总价格
    amt() {
      return this.list.filter(item => item.goods_state).reduce((total, item) => (total += item.goods_price * item.goods_count), 0)
    },
    // 已勾选的商品总数量
    total() {
      return this.list.filter(item => item.goods_state).reduce((t, item) => (t += item.goods_count), 0)
    }

  },
  components: {
    Headers,
    Goods,
    Footer
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
