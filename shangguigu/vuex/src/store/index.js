import Vue from "vue"
import Vuex from "vuex"
// 应用 vuex 插件。。
Vue.use(Vuex)

// 用于响应组件中的动作。
const actions = {}
//用于操作数据。（state）
const mutations = {}
// 用于存储数据。
const state = {}

// 创建并暴露 store
export default new Vue.Store({
    actions,
    mutations,
    state
})

