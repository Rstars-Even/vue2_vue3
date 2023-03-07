export default {
    state: {
        isCollapse: false,      //控制菜单栏收起还是展开。
    },
    mutations: {
        // 修改菜单栏状态。
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse;
        }
    }
}