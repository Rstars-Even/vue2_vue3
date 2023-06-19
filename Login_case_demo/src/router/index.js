import Vue from 'vue'
import VueRouter from 'vue-router'
// 需要导入的组件。
import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'
import User from '@/components/menus/MyUsers.vue'
import Rights from '@/components/menus/MyRights.vue'
import Goods from '@/components/menus/MyGoods.vue'
import Order from '@/components/menus/MyOrders.vue'
import Settings from '@/components/menus/MySettings.vue'
import Userinfor from '@/components/user/MyUserDetail.vue'

Vue.use(VueRouter)
// 创建路由的实例对象。
const router = new VueRouter({
  // 定义 ‘hash’ 地址与 ‘组件’ 之间的关系。
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/login', component: Login },
    { path: '/home', component: Home, redirect:'/home/user', children: [
        { path: 'user', component: User },
        { path: 'rights', component: Rights },
        { path: 'goods', component: Goods },
        { path: 'order', component: Order },
        { path: 'settings', component: Settings },
        { path: 'userinfor/:id', component: Userinfor },
    ]},
  ]
})

router.beforeEach((to, from, next) => {
    const arr = ['/home', '/home/user', '/home/settings', '/home/goods', '/home/rights', '/home/order'];
    if (arr.indexOf(to.path) != -1) {
        const token = localStorage.getItem('token')
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