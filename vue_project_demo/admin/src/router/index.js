import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../view/Home.vue";
import User from "../view/User.vue";
import Main from "../view/Main.vue";
import Mall from "../view/Mall.vue";
import PageOne from "../view/PageOne.vue";
import PageTwo from "../view/PageTwo.vue";
import Login from "../view/Login.vue";
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const routes = [
    {
        path: '/',
        component: Main,
        name: 'Main',
        redirect: "/home",
        children: [
            // 子路由，。。
            // { path: '/home', name: 'home', component: Home},
            // { path: '/user', name: 'user', component: User},
            // { path: '/mall', name: 'mall', component: Mall},
            // { path: '/page1', name: 'page1', component: PageOne},
            // { path: '/page2', name: 'page2', component: PageTwo},
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    }
]

const router = new VueRouter({
    routes: routes,
})

export default router;