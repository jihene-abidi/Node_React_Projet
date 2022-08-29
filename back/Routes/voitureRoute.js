//déclaration
// création d'un root
const routevoiture = require ("express").Router();
const voitureController = require("../Controllers/voitureController");
//const passport = require("passport");
//require("..//middelwares/passportAuthantication").passport;
//imoprtation des controlleurs pour bien utiliser les crud
const voiturecontroller= require("../Controllers/voitureController");
//root de create voiture
const upload= require("..//middelwares/upload")
// a chaque fois on ajoute une photo il faux insérer le partie upload entre deux virgule
routevoiture.post("/create", voiturecontroller.CreateVoiture)
routevoiture.post("/createPhoto",upload.single("photo"), voiturecontroller.CreateVoiture)
//root de de get all voitures
routevoiture.get("/getAll",voitureController.GetAllVoitures)
//root de de get voiture by id
routevoiture.get("/getById/:id", voitureController.GetVoitureById)
//root de de update voiture
routevoiture.put("/update/:id", voitureController.UpdateVoiture)
//root de de delete voiture
routevoiture.delete("/delete/:id", voitureController.DeleteVoiture)
//exportation: public
module.exports =routevoiture
