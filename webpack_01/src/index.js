// 使用es6语法导入jq。。
import $ from 'jquery';
//导入样式。(在webpack中，一切皆模块，都可以通过ES6导入语法进行导入和使用)
import './css/index.css';
import './css/index.less';  //引入 less 文件。

// 测试用 url-loader 处理图片文件。
import logo from './img/icon.png';
console.log('------logo---------', logo);
$('.box').attr('src', logo)


$(function () {
    // 实现奇偶变色。。
    $('li:odd').css('background-color', 'red');
    $('li:even').css('background-color', 'pink');
})