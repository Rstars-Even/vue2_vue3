import axios from "axios";

const http = axios.create({
    baseURL: '/api',
    timeout: 5000,
})

// 添加请求拦截器。
http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么。
    return config;
}, function (error) {
        // 对请求错误做些什么。】
    return Promise.reject(error);
});
// 添加响应拦截器。。
http.interceptors.response.use(function (response) {
    // 对相应数据做点什么。
    return response;
}, function (error) {
    // 对向应错误 做点什么。
    return Promise.reject(error);
})

export default http