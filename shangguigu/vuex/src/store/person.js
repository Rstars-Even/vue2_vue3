// 人员管理相关配置。
export default {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                console.log(value);
                context.commit('ADD_PERSON', value)
            } else {
                alert('添加的人必须姓王！！！')
            }
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            {id: '001', name: '张三'}
        ]
    }
}