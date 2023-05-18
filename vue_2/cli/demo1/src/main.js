import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Count from '@/components/Count.vue'
Vue.component('MyCount', Count)

new Vue({
  render: h => h(App),
}).$mount('#app')
