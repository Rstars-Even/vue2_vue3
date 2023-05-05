import Vue from 'vue'
import App from './App.vue'
// import { Row, Button } from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router/";
import store from "./store/";
import "./api/mock";
import Cookie from "js-cookie"

Vue.config.productionTip = false
// 全局引入
Vue.use(ElementUI);
// 按需引入
// Vue.use(Row);
// Vue.use(Button);

// 添加全局前置导航守卫
router.beforeEach((to, from, next) => {
  // 判断是否有 token
  const token = Cookie.get('token')
  // 
  if (!token && to.name !== 'login') {  //没有 token 跳转 login 页面。
    next({ name: 'login'})
  } else if (token && to.name === 'login') {  //有 token 跳转首页。
    next({ name: 'home'})
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
