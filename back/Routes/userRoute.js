//déclaration
// création d'un root
const routeuser = require ("express").Router();
const userController = require("../Controllers/userController");
//const passport = require("passport");
//require("..//middelwares/passportAuthantication").passport;
//imoprtation des controlleurs pour bien utiliser les crud
const usercontroller= require("../Controllers/userController");
//root de create user
const upload= require("..//middelwares/upload")
routeuser.post("/create", usercontroller.CreateUser)
routeuser.post("/createPhoto",upload.single("photo"), usercontroller.CreateUserPhoto)
//root de de get all users
routeuser.get("/getAll",userController.GetAllUsers)
//root de de get user by id
routeuser.get("/getById/:id", userController.GetUserById)
//root de de update user
routeuser.put("/update/:id", userController.UpdateUser)
//root de de delete user
routeuser.delete("/delete/:id", userController.DeleteUser)
//root pour verifier la fonction login
routeuser.post("/login", userController.login)
//root de get user by name et avoir tout ces voitures
routeuser.get("/getBynom/:nom", userController.GetUserVoitures)
//exportation: public
module.exports =routeuser
