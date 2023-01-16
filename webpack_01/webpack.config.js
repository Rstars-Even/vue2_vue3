const path = require('path');
//1.导入 html 插件，得到一个构造函数。。
const HtmlPlugin = require('html-webpack-plugin');
//2.创建 HTML 插件的实例对象。
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',        //指定源文件的存放路径。
    filename: './index.html'            //指定生成的文件的存放路径。。
});
const { CleanWebpackPlugin } = require('clean-webpack-plugin');     //导入插件。。
module.exports = {
    // 代表 webpack 的运行模式。可选值有两个：development 和 production
    // 结论：开发时一定要用：development,追求打包速度，而不是体积小。
    // 相反，在项目上线时用：production. 打包后体积文件小，但打包速度慢。
    mode: 'development',
    // devtool: 'eval-source-map',     //仅限推荐在开发模式中使用。。，
    devtool: 'nosources-source-map',     //推荐在实际开发中使用。或者不配置 source-map
    entry: path.join(__dirname, './src/index.js'),    //打包入口文件的路径。
    output: {
        path: path.join(__dirname, './dist'),        //打包后文件的输出路径。。
        filename: 'js/bundle.js'        //给打包后的文件，重命名。
    },
    devServer: {
        open: true,            //初次打包完成后，自动打开浏览器。
        host: '127.0.0.1',       //实时打包所生成的主机地址。。
        port: 80            //实时打包所用的端口号。
    },
    //3.通过 plugins 节点，使 htmlPlugin 插件生效。。
    plugins: [htmlPlugin, new CleanWebpackPlugin()],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'],  },    //test：表示匹配的文件类型。use 表示对应要调用的 loader。
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // 多个参数用 & 符号分割。。limit 字段控制图片打包是否转为 base64 值为图片的字节数。
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=5000&outputPath=images' },
        ]
    }
}