import http from "./interceptor/Axiosinterceptor";
export default class UserService{
    create (data){
        return http.post("/user/create", data);
    }
    createPicture (data){
        return http.post("/user/createPhoto", data);
    }
    get (data){
        return http.get("/user/get", data);
    }
    getAll (data){
        console.log("bonjour")
        return http.get("/user/getAll", data);
    }
    getById (id){
        return http.get("/user/getById/"+ id);
    }
    UpdateUser (id, data){
        return http.put("/user/update/"+ id, data);
    }
    remove (id){
        console.log("user service File")
        return http.delete("/user/delete/"+id);
    }
    login =(data)=>{
        return http.post("/user/login",data)
       }
}
