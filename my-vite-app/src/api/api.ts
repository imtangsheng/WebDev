// index.ts
import axios from "axios";
import { ElMessage } from 'element-plus';

const MesDuration = 5 * 1000;

// 定义接口
interface IResData {
    status: boolean;
    code?: number;
    message?: string;
    data?: any;
}

// axios.defaults.baseURL = "http://localhost:8000";
const service = axios.create({
    baseURL: "http://localhost:8000",
    timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
    (config) => {
        // Do something before request is sent
        if (config.url !== "/login") {
            config.headers.token = localStorage.getItem("token");
        }
        return config;
    },
    (error) => {
        // Do something with request error
        console.log(error);
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        const res = response.data;// as IResData;
        if (!res.status){
            ElMessage({
                message: res.message || 'Error',
                type: 'error',
                duration: MesDuration
            });
            return Promise.reject(new Error(res.message || 'Error'))
        }else{
            return res;
        }
    },
    (error) => {
        console.log("err" + error); // for debug
        ElMessage({
            message: "错误码："+error.status +".信息："+ error.message,
            type: 'error',
            duration: MesDuration
        });
        return Promise.reject(error);
    }
);

// 用户登录
async function login(data:{ username:string,password:string }) {
    const res = await service.post<IResData>('/user/login', data);
    return res;
}

export { login };

export class User {

    async login1(data:{ username:string,password:string }) {
        const res = await service.post('/user/login', data);
        return res;
    }
    // 用户登出 
    async logout() {
        const res = await service.get<IResData>('/user/logout');
        return res;
    }

}
// 接口对象
// export const API = {
//     IResData = () => {
//         status = false,
//         code = 0,
//         message = '',
//         data = null
//     }
//   }

export default service;