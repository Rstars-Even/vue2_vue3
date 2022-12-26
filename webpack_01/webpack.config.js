module.exports = {
    // 代表 webpack 的运行模式。可选值有两个：development 和 production
    // 结论：开发时一定要用：development,追求打包速度，而不是体积小。
    // 相反，在项目上线时用：production. 打包后体积文件小，但打包速度慢。
    mode: 'development'
}