const {default: mongoose,Schema} = require("mongoose");
const SchemaUser= new mongoose.Schema(
 {
    nom:{
        type: String,
        require: true,
        trim: true,
    },
    email:{
        type: String,
        require: true,
        trim: true,
        unique: true,
    },
    password:{
        type: String,
        require: true,
        trim: true,
        unique: true,
    },
    photo:{
        type: String,
    },
    voitures: [{
        type:Schema.Types.ObjectId,
        ref : "voiture"
    }],
    role:{
        type: String,
        default: "user",
    }

 },
 {timestamps: true}
)
//pour mettre le module public et afficher dans tout l'application
module.exports= mongoose.model("user", SchemaUser);