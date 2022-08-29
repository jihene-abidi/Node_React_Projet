// création serveur de http
// //declaration
// const http= require("http")
// const hostname="127.0.0.1"
// const port=3000
// //configuration
// const server=http.createServer((req, res)=>{res.statusCode=200
//      res.setHeader('Content-Type','Text/plain')
//      res.end('Bonjour\n')})
// //compilation
// server.listen(port, hostname,()=>{
//     console.log(`server is runnig on http://${hostname}:${port}`)
// })






// création du serveur express
// déclaration
var express = require ("express")
cors= require("cors")
const {success,error} = require("consola")
var app=express() //l'express c'est comme package on va le met dans un var app pour qu'on peut le consommer par la suite
const port=3000
const DB = require("./config/database");//important pour lire la variable db qui vient de config database
const RU = require("./Routes/userRoute") //imoprtation du routers 
const RV = require("./Routes/voitureRoute") //imoprtation du routers pour voiture schema
const passport = require('passport');
const path = require('path')
bodyParser = require('body-parser');
//configuration
app.use(express.json())
app.use(cors())
app.use("/user", RU)
app.use("/voiture", RV)
//upload des images
app.use(express.static('public'));
app.use('/storages', express.static(path.join(__dirname, 'storages')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//compilation
app.listen(port, async() =>{
    try {
      success({
            message: `sucess to connect server via port: ${port}`,
            badge: true,
        });
    }   catch(error) {
        error({
            message: "error",
            badge: false
        });
    }
});


