const {Strategy, ExtractJWT}= require("passport-jwt");
const User= require("..//Models/user");
const passport= require("passport");
//const SECRET= process.env.APP_SECRET;
const SECRET= "stage";

//pour choisir format token avec des options
var options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET,
  };

passport.use(
    new Strategy(options, async ({id}, done) =>{
        //console.log("now we are in middleware of passport");
     try{
        const user= await User.findById(id);
        if (!user){
            throw new Error("user not found");
        }
        console.log(user);
        return done (null, user);
     } catch (error){
        done (null, false);
        console.log(error, message);
     }
    })
);