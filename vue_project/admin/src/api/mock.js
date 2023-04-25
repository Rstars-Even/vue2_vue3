import Mock from "mockjs";
import homeApi from "./mockServeData/home";
import user from "./mockServeData/user";

// 定义一个mock请求拦截首页数据。。
Mock.mock('/api/home/getData', homeApi.getStatisticalData)  //默认为get请求。。

// 拦截用户列表数据。
Mock.mock('/api/user/add', 'post', user.createUser)
Mock.mock('/api/user/edit', 'post', user.updateUser)
Mock.mock('/api/user/del', 'post', user.deleteUser)
Mock.mock(/api\/user\/getUser/ ,user.getUserList)
