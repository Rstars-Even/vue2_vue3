module.exports = {
    //开启代理服务。。。(方式一)
    // devServer: {
        // proxy: 'http://localhost:5000'
    // }


    // 问题一：不能配置多个代理，不能灵活控制请求是否走代理。
    // 问题二：如果前端本地有和服务端相同名字的资源，代理会匹配前端资源不会转发给服务端。


    //开启代理服务。。。(方式二)
    devServer: {
        proxy: {
            '/api': {                                //匹配所有以 '/api' 开头的请求路劲，添加以下配置。。
                target: 'http://localhost:5000',     //需要代理的接口。。。
                pathRewrite: {'^/api': ''},          //把请求头 '/api' 替换为空。这样请求服务端才有这个接口。
                ws: true,                            //用于支持 websocket
                changeOrigin: true,                  //用于控制请求头中的 host 值。。
            },
            // '/demo': {                                //匹配所有以 '/demo' 开头的请求路劲，添加以下配置。。。
            //     target: 'http://localhost:5001',     //需要代理的接口。。。（可以配置多个代理。。）
            //     pathRewrite: {'^/demo': ''},          //把请求头 '/demo' 替换为空。这样请求服务端才有这个接口。
            //     ws: true,                            //用于支持 websocket(不写默认为 true)
            //     changeOrigin: true,                  //用于控制请求头中的 host 值(不写默认为 true)
            // }
        }
    }

}