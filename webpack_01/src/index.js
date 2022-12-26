// 使用es6语法导入jq。。
import $ from 'jquery';

$(function () {
    // 实现奇偶变色。。
    $('li:odd').css('background-color', 'red');
    $('li:even').css('background-color', 'pink');
})