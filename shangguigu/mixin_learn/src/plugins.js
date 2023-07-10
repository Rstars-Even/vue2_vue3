export default {
    install(Vue) {  //install 的第一个参数是 Vue 第二个以后的参数是插件使用者传递的数。
        Vue.prototype.hello = () => {
            console.log('这个是一个全局log。。。');
        }
        // 定义混入
        Vue.mixin({
            data() {
                return {
                    name: 'hello...',
                }
            },
        })
        //还可以定义全局过滤器，自定义指令等。。。。
    }
}