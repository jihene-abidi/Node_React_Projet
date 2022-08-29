import http from "./interceptor/Axiosinterceptor";
export default class CarService{
    create (data){
        console.log("create")
        return http.post("/voiture/create", data);
    }
    createPicture (data){
        console.log("create")
        return http.post("/voiture/createPhoto", data);
    }
    get (data){
     return http.get("/voiture/get", data);
     }
     getAll (data){
         console.log("bonjour")
         return http.get("/voiture/getAll", data);
     }
    getById (id){
       return http.get("/voiture/getById/"+ id);
     }
     UpdateCar (id, data){
        return http.put("/voiture/update/"+ id, data)
     }
     remove (id){
       console.log("car service File")
      return http.delete("/voiture/delete/"+id);
     }
}