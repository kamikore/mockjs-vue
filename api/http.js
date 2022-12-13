import axios from "axios";
import { ElLoading, ElMessage } from "element-plus";

// axios 封装
let http = axios.create({
    baseURL: "",
    timeout: 10000,
});

let loadingInstance;

// 拦截器的添加
http.interceptors.request.use(
    (config) => {
        loadingInstance = ElLoading.service("加载中");
        return config;
    },
    (err) => {
        loadingInstance?.close();
        ElMessage.error("网络异常");
        return Promise.reject(err);
    }
);

//响应拦截器
http.interceptors.response.use(
    (res) => {
        loadingInstance?.close();
        return res.data;
    },
    (err) => {
        loadingInstance?.close();
        ElMessage.error("请求失败");
        return Promise.reject(err);
    }
);
export default http;