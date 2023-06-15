import Vue from 'vue'
import App from './App.vue'
// 导入路由模块，拿到实例对象。
import router from '@/router/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router // 挂载路由实例对象。
}).$mount('#app')
