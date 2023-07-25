import Vue from "vue"
import Vuex from "vuex"
// 应用 vuex 插件。。
Vue.use(Vuex)

// 用于响应组件中的动作。
const actions = {
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('JIA', value);
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value);
        }, 3000)
    }
}
//用于操作数据。（state）
const mutations = {
    JIA(state, value) {
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    }
}
// 用于存储数据。
const state = {
    sum: 0
}
// 用于将 state 中的数据进行加工。（相当于 vue 中的计算属性）
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

// 创建并暴露 store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

