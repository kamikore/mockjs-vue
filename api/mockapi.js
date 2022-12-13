import http from "./http.js";
export default {
    // 获取mock模拟数据
    findAll() {
        return http({
            url: `/api`,
            method: "get"
        })
    },
    //用户列表
    getUser() {
        return http({
            url: `/api/getUser`,
            method: "get",
        });
    },
    //添加用户
    addUser(user) {
        return http({
            url: `/api/addUser`,
            method: "post",
            data: user,
        });
    },

}