const Voiture= require("../Models/voiture")
const jwt = require("jsonwebtoken");
const SECRET= "formation";
module.exports= {
 CreateVoiture: async function(req, res) {
 //affichage du requette
 console.log(req.body)
 //creation d'une voiture
 const newVoiture={
    Marque: req.body.Marque,
    Vitesse: req.body.Vitesse,
    Prix: req.body.Prix,
    nombrePlace: req.body.nombrePlace,
    Proprietaire: req.body.Proprietaire,
    photo: req.file.filename,
 };
  
 await Voiture.create(newVoiture, (error, voiture) => {
   if (error){
    res.status(500).json({
        message: error,
        status: 500
    });
 } else {
        res.status(200).json({
            message: "voiture is created",
            status: 200,
            data:voiture
        });
    }
  });
 },


 GetAllVoitures: function(req, res){
  Voiture.find({}).exec((error, list)=>{
   if(error){
    res.status(500).json({
        message:"echec d'avoir la liste",
        status: 500,});
   }else{
    res.status(200).json({
        message:"c'est la liste des voitures",
        status: 200,
        data:list});
   }
  });
 },

 GetVoitureById: function(req, res){
    Voiture.findOne({_id: req.params.id}).exec((error, voitureById)=>{
        if(error){
         res.status(500).json({
            message:error.message, 
            status: 500,});
        }else{
         res.status(200).json({
            message:"voiture selectionner par id",
            status: 200,
            data:voitureById});
        }
       });
 },

 UpdateVoiture: function(req, res){
    Voiture.updateOne({_id: req.params.id}, req.body).exec((error, voitureupdated)=>{
        if(error){
         res.status(500).json({
            message:error.message, 
            status: 500,});
        }else{
         res.status(200).json({
            message:"mise a jour effectuer a voiture",
            status: 200,
            data:voitureupdated});
        }
       });
 },

 DeleteVoiture: function(req, res){
    Voiture.deleteOne({_id: req.params.id}).exec((error, voituredeleted)=>{
        if(error){
         res.status(500).json({
            message:error.message, 
            status: 500,});
        }else{
         res.status(200).json({
            message:"voiture effacer avec succée",
            status: 200,
            data:voituredeleted});
        }
       });
 },


}