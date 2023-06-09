import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//参数1:字符串，表示全局自定义指令的名字
//参数2:对象，用来接收指令的参数值
Vue.directive('color', function(el) {
  el.style.color = 'red'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
