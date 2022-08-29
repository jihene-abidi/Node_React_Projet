import http from "./interceptor/Axiosinterceptor";
export const LoginAPI= (data)=>{
        return http.post("/user/login", data);
}