import Vue from 'vue'
import VueRouter from 'vue-router'
// 需要导入的组件。
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'
import Tab1 from '@/components/teb/Tab1.vue'
import Tab2 from '@/components/teb/Tab2.vue'
import Login from '@/components/Login.vue'
import Main from '@/components/Main.vue'

// 把 VueRouter 安装为 Vue 项目的插件。
// Vue.use() 函数的作用，就是用来安装插件的。
Vue.use(VueRouter)

// 创建路由的实例对象。
const router = new VueRouter({
  // 定义 ‘hash’ 地址与 ‘组件’ 之间的关系。
  routes: [
    // 首次进入页面时，通过 redirect 属性，转到 /home 对应的路由规则。
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/main', component: Main },

    // 根据 id 的值展示对应的电影信息。
    { path: '/movie/:id', component: Movie, props: true },
    {
      // 父级路由
      path: '/about',
      component: About,
      // redirect: '/about/tab1',
      // 子级路由
      children: [
        // 如果把 childern 数组中，某个路由规则的 path 值为空字符串，则这个路由规则叫‘默认子路由’。。。就可以不用上面的 redirect 属性。。。
        { path: '', component: Tab1 },
        { path: 'tab2', component: Tab2 }
      ]
    }
  ]
})

router.beforeEach(function (to, from, next) {
  console.log('-----------------', to.path)
  if (to.path === '/main') {
    const token = localStorage.getItem('token')
    console.log('--------token---------', token)
    if (token) {
      next() // 查看是否登录。
    } else {
      next('/login') // 没登录跳转到登录页面。
    }
  } else {
    // 查看的页面不需要登录直接放行。。
    next()
  }
})

export default router
