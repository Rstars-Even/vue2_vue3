import Vue from 'vue'
import App from './App.vue'
// 引入store。
import store from './store'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  store,                    //注册 vuex 插件。。。
  beforeCreate() {
    Vue.prototype.$bus = this
  }
})
