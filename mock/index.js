// 引入mockjs
import Mock from "mockjs";

// 获取 mock.Random 对象
const Random = Mock.Random;

/*
常用语法:
    "id":"@id",                                            随机id
    "star|1-2":"★",                                        字符串重复一道2次
    "price|100-200.2-3",                                    小数点2-3位
    "data|10":[{name:"名称"}]                               数组的内容重复10遍
    "live|1":true,                                          随机返回true,false
    "tel":/13 \d{9}/,
    "des":function(){ return this.start+this.price},
    "name":"@cname",                                         表示中文名称
    "address":"@country(true)",                              地址
    "ip":"@ip",
    "description":"@cparagraph(1, 3)",                       随机段落2-3行
    "pic":@dataImage('200x100','色块图片')`
*/


// 使用mockjs模拟初始数据
let tableList = [
    {
        id: "5ffa80aD-9CF4-0C77-eBFC-f6612BfAcF4F",
        account: "admin",
        password: "123456",
        address: "36918166@qq.com",
    },
    {
        id: "4FcC922C-C72c-95c3-Ef92-FbFAc24cc831",
        account: "ebHoL6",
        password: "i320Hu74fbn2Gi",
        address: "48165263@qq.com",
    },
]



/** get请求
 * 获取mock模拟数据
 */
Mock.mock("/api", "get", () => {
    return Mock.mock({
        "code": 0,
        // 属性值是数组， data|4 产生4条数据组成数组
        "data|4": [{
            id: "@id",      //
            msg: "@cparagraph(2,3)", //段落2-3行
            name: "@cname", //随机中文名
            date: "@datetime" //随机日期
        }],
        "pagnation": {
            "total|10-25": 1,
            "size": 4,
            "pageTotal|4-10": 1,
        }
    })

});


/** get请求
 * 获取用户列表
 */
Mock.mock("/api/getUser", "get", () => {
    return {
        code: "0",
        message: "success",
        data: tableList,
    };

});


/** post请求添加表格数据 */
Mock.mock("/api/addUser", "post", (params) => {
    console.log("拦截post params", params)
    let newData = JSON.parse(params.body);
    newData.id = Random.guid();
    tableList.push(newData);
    return {
        code: "0",
        message: "success",
        data: tableList,
    };
});