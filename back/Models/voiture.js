const {default: mongoose,Schema} = require("mongoose");
const {schema}= require("./user");

const SchemaVoiture= new mongoose.Schema({
    Marque:{
        type: String
    },
    Vitesse:{
        type: String
    },
    Prix:{
        type: String
    },
    nombrePlace:{
        type: String
    },
    Proprietaire:{
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    photo:{
        type: String
    },
},
   {timestamps: true}
);
module.exports= mongoose.model("voiture", SchemaVoiture);