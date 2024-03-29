import Vue from "vue"
import Vuex from "vuex"
import countOptions from "./count"
import personOptions from "./person"
// 应用 vuex 插件。。
Vue.use(Vuex)

// 创建并暴露 store
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions,
    }
})

