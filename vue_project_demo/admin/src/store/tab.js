import Cookie from "js-cookie";
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
        menu: [],
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
        },
        // 删除 tag 指定的数据。
        closeTag(state,item) {
            const index = state.tabsList.findIndex(val => val.name === item.name)
            state.tabsList.splice(index, 1)
        },
        // 设置 menu 的数据。。
        setMenu(state, val) {
            state.menu = val;
            Cookie.set('menu', JSON.stringify(val));
        },
        // 动态注册路由。。
        addMenu(state, router) {
            if (!Cookie.get('menu')) {
                return
            }
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            // 组装动态路由的数据。。
            const menuArray = []
            menu.forEach(item => {
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () => import(`../view/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                } else {
                    item.component = () => import(`../view/${item.url}`);
                    menuArray.push(item)
                }
            });
            // 路由的动态添加。。
            menuArray.forEach(item => {
                router.addRoute('Main', item)
            })
        }
    }
}