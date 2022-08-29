var express = require ("express")
var cors = require ("cors")
const {success,error} = require("consola")
var app = express()
const port=3000
const RU = require("..//back/Routes/UserRoute");
const DB = require("./config/database");//important pour lire la variable db qui vient de config database
const passport = require('passport');
const RV= require("../back/Routes/voitureRoute");
const path = require('path')
bodyParser = require('body-parser');
//configuration
app.use(express.json())
app.use(cors())
app.use ("/user",RU)
app.use ("/voiture",RV)
app.use(express.static('public'));
app.use('/storages', express.static(path.join(__dirname, 'storages')));
app.use(bodyParser.urlencoded({extended: true}));
//test de serveur
app.listen(port,async()=>{
  try{
    success({
      message:`sucess to connect to server via port:${port}`,
      badge:true,
    });
  } catch(error){
    error({
      message:"error",
      badge:true,
    });
  }
});