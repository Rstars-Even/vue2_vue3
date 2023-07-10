import Vue from 'vue'
import App from './App.vue'

// import myMixin from './mixin.js';
import plugins from './plugins.js';

Vue.config.productionTip = false
// Vue.mixin(myMixin)
Vue.use(plugins)

new Vue({
  render: h => h(App),
}).$mount('#app')
