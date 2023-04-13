export default {
    state: {
        isCollapse: false,      //控制菜单栏收起还是展开。
        tabsList: [
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home/Home',
            }
        ], //面包屑的数据。
    },
    mutations: {
        // 修改菜单栏状态。
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse;
        },
        // 更新面包屑数据。。
        selectMenu(state, val) {
            //  判断是否为首页。
            if(val.name !== 'home') {
                const index = state.tabsList.findIndex(item => item.name === val.name);
                // 如果不存在。
                if (index === -1) {
                    state.tabsList.push(val)
                }
            }
        }
    }
}