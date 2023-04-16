import http from "../utils/request";

// 请求首页数据。。
export const getData = () => {
    // 返回一个 promise 对象。。
    return http.get('/home/getData')
}

// 请求用户列表数据。。
export const getUser = (params) => {
    return http.get('/user/getUser', params)
}
export const addUser = (data) => {
    return http.get('/user/add', data)
}
export const editUser = (data) => {
    return http.get('/user/del', data)
}
export const delUser = (data) => {
    return http.get('/user/del', data)
}