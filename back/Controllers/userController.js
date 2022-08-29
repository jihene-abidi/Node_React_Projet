const User= require("../Models/user")
const jwt = require("jsonwebtoken");
const SECRET= "formation";
module.exports= {
 CreateUser: async function(req, res) {
 //affichage du requette
 console.log(req.body)
 //creation d'un utilisateur
 const newUser={
    nom: req.body.nom,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    voitures: req.body.voitures,
 };
  
 await User.create(newUser, (error, user) => {
   if (error){
    res.status(500).json({
        message: error,
        status: 500
    });
 } else {
        res.status(200).json({
            message: "user is created",
            status: 200,
            data:user,
        });
    }
  });
 },

 CreateUserPhoto: async function(req, res) {
    //affichage du requette
    console.log(req.body)
    //creation d'un utilisateur
    const newUser={
       nom: req.body.nom,
       email: req.body.email,
       password: req.body.password,
       role: req.body.role,
       photo: req.file.filename,
       voitures: req.body.voitures,
    };
     
    await User.create(newUser, (error, user) => {
      if (error){
       res.status(500).json({
           message: error,
           status: 500
       });
    } else {
           res.status(200).json({
               message: "user is created",
               status: 200,
               data:user,
           });
       }
     });
 },

 GetAllUsers: function(req, res){
    //.populate("voitures"): pour lire les voitures affecter au propriétaire
  User.find({}).populate("voitures").exec((error, list)=>{
   if(error){
    res.status(500).json({
        message:"echec d'avoir la liste",
        status: 500,});
   }else{
    res.status(200).json({
        message:"c'est la liste des utilisateurs",
        status: 200,
        data:list});
   }
  });
 },

 GetUserById: function(req, res){
    User.findOne({_id: req.params.id}).exec((error, userByid)=>{
        if(error){
         res.status(500).json({
            message:error.message, 
            status: 500});
        }else{
         res.status(200).json({
            message:"utilisateur selectionner par id",
            status: 200,
            data:userByid});
        }
       });
 },

 UpdateUser: function(req, res){
    User.updateOne({_id: req.params.id}, req.body).exec((error, userupdated)=>{
        if(error){
         res.status(500).json({
            message:error.message, 
            status: 500,});
        }else{
         res.status(200).json({
            message:"mise a jour effectuer a utilisateur",
            status: 200,
            data:userupdated,});
        }
       });
 },

 DeleteUser: function(req, res){
    User.deleteOne({_id: req.params.id}).exec((error, userdeleted)=>{
        if(error){
         res.status(500).json({
            message:error.message, 
            status: 500,});
        }else{
         res.status(200).json({
            message:"utilisateur effacer avec succée",
            status: 200,
            data:userdeleted,});
        }
       });
 },

 login: async function(req,res){
    try{
        //1ere etape verifier email et comparer password
        const {email, password}= req.body;
        const user= await User.findOne({email});
        if (!user){
            return res
            .status(404)
            .json({status: 404, message: "email not found !"});
        }
        //2eme etape creation de token
        const token= jwt.sign(
            {
                id: user._id,
                user: user,
            },
            SECRET,
            {expiresIn: "7 days"}
        );
        const result= {
            email: user.email,
            user: user,
            token: token,
            expiresIn: 7,
        };
        return res.status(200).json({
            ...result,
            message: "connecté",
            success: true,
        });
    } catch (error){
        res.status(404).json({ status: 404, message: error.message});
    }
 },

 GetUserVoitures: function(req,res){
    User.findOne({nom: req.params.nom})
    .populate("voitures")
    .exec((error, userBynom)=>{
        if(error){
         res.status(500).json({
            message:error.message, 
            status: 500,});
        }else{
         res.status(200).json({
            message:"utilisateur selectionner par id",
            status: 200,
            data:userBynom});
        }
       });
 },
}