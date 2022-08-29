// import {React, useState,useEffect} from "react";
// import UserService from "../../../services/UserService";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import {
//   Card,
//   CardContent,
//   Divider,
//   Box,
//   Typography,
//   TextField,
//   FormControlLabel,
//   Checkbox,
//   Button,
//   Grid,
//   RadioGroup,
//   Radio,
//   FormControl,
//   MenuItem,
// } from "@material-ui/core";

// const AddUserPicture= ()=>{
//     const location = useLocation();
//   const [id, setId] = useState("")
//   const [nom, setNom] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [voitures,setVoitures] = useState([]);
//   const [photo, setPhoto]=useState("")
//     //pour afficher la zone ajout file (pour les images)
//     const onFileChange= (event)=>{
//         setPhoto(event.target.files[0])
//     };

//     const US= new UserService()
//     const navigate= useNavigate()

//     const AddUserFunction=()=>{  
//      const formdata= new FormData();
//      formdata.append("nom",nom)
//      formdata.append("email",email)
//      formdata.append("password",password)
//      US.createPicture(formdata).then(res =>{
//       console.log("after userservice add a user", res);   
//       navigate("/#/dashboards/dashboard1")
// })
// }

//     return (
//         <div>
//           {/* ------------------------------------------------------------------------------------------------ */}
//           {/* Basic Checkbox */}
//           {/* ------------------------------------------------------------------------------------------------ */}
//           <Card
//             variant="outlined"
//             sx={{
//               p: 0,
//             }}
//           >
//             <Box
//               sx={{
//                 padding: "15px 30px",
//               }}
//               display="flex"
//               alignItems="center"
//             >
//               <Box flexGrow={1}>
//                 <Typography
//                   sx={{
//                     fontSize: "18px",
//                     fontWeight: "500",
//                   }}
//                 >
//                 Add User With Picture
//                 </Typography>
//               </Box>
//             </Box>
//             <Divider />
//             <CardContent
//               sx={{
//                 padding: "30px",
//               }}
//             >
//               <form>
//                 <TextField
//                   id="nom-text"
//                   label="Name"
//                   variant="outlined"
//                   defaultValue="user1"
//                   fullWidth
//                   sx={{
//                     mb: 2,
//                   }}
//                   value={nom} onChange={e => setNom(e.target.value)}
//                 />
//                 <TextField
//                   id="email-text"
//                   label="Email"
//                   type="texte"
//                   variant="outlined"
//                   fullWidth
//                   sx={{
//                     mb: 2,
//                   }}
//                   value={email} onChange={e => setEmail(e.target.value)}
//                 />
//                 <TextField
//                   id="password-text"
//                   label="Password"
//                   type="texte"
//                   variant="outlined"
//                   fullWidth
//                   sx={{
//                     mb: 2,
//                   }}
//                   value={password} onChange={e => setPassword(e.target.value)}
//                 />
//               <div>
//                 <div calss="col-md-3">
//                   Picture 
//                 </div>
//                 <div class="col-md-7">
//                     <input type="file" class="form-control" onChange={onFileChange} />
//                 </div>
//               </div>
               
//                 <br></br>
//                 <div>
//                   <Button color="primary" variant="contained" onClick={AddUserFunction}>
//                     Submit
//                   </Button>
//                 </div>
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       );
        
// };
// export default AddUserPicture;


import {React, useState,useEffect} from "react";
import UserService from "../../../services/UserService";
import CarService from "../../../services/CarService";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  RadioGroup,
  Radio,
  Select,
  FormControl,
  MenuItem,
} from "@material-ui/core";
const AddUserPicture= ()=>{
    const [role,setRole]=useState("")
    const [nom,setNom]=useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [photo, setPhoto] = useState("");
    const [voitures, setVoitures] = useState([]);
    const [voiture, setVoiture] = useState("");
    //pour afficher la zone ajout file (pour les images)
    const onFileChange= (event)=>{
        setPhoto(event.target.files[0])
    };
    const US= new UserService()
    const CS= new CarService()
    const navigate= useNavigate()

     //Ajouter l'effet (useEffect) a partir de hooks
     useEffect(()=>{getAllCars();},
                   []);
     const getAllCars=()=>{
      CS.getAll().then((res)=>{
      console.log("Success to get cars",res.data);
      setVoitures(res.data.data);
      });
     };

    const AddUserPhotoFunction=()=>{
    const formdata= new FormData();
      formdata.append("nom",nom)
      formdata.append("email",email)
      formdata.append("password",password)
      formdata.append("role",role)
      formdata.append("photo",photo)
      formdata.append("voitures",voiture)

      US.createPicture(formdata).then(res =>{
       console.log("after userservice add a user", res);
       navigate("/#/dashboards/dashboard1")
      })
    }
    return (
        <div>
          {/* ------------------------------------------------------------------------------------------------ */}
          {/* Basic Checkbox */}
          {/* ------------------------------------------------------------------------------------------------ */}
          <Card
            variant="outlined"
            sx={{
              p: 0,
            }}
          >
            <Box
              sx={{
                padding: "15px 30px",
              }}
              display="flex"
              alignItems="center"
            >
              <Box flexGrow={1}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                Add User With Picture
                </Typography>
              </Box>
            </Box>
            <Divider />
            <CardContent
              sx={{
                padding: "30px",
              }}
            >
              <form>
              <TextField
                //   id="marque-text"
                  label="nom"
                  variant="outlined"
                  defaultValue="user1"
                  fullWidth
                  sx={{
                    mb: 2,
                  }}
                  value={nom} onChange={e => setNom(e.target.value)}
                />
                <TextField
                //   id="marque-text"
                  label="Email"
                  variant="outlined"
                  defaultValue="user1"
                  fullWidth
                  sx={{
                    mb: 2,
                  }}
                  value={email} onChange={e => setEmail(e.target.value)}
                />
                <TextField
                //   id="vitesse-text"
                  label="Password"
                  type="texte"
                  variant="outlined"
                  fullWidth
                  sx={{
                    mb: 2,
                  }}
                  value={password} onChange={e => setPassword(e.target.value)}
                />
           <br></br>
           <div class="form-group">
              <label class="col-md-3 control-label">Cars:</label>
                    <select id="voiture" class="col-md-9" onChange={e => setVoiture(e.target.value)}>
                    {voitures.map((voiture)=>(
                    <option value={voiture._id} key={voitures._id}>{voiture.Marque}</option>
                    ))}
                 </select>
            </div>
           <br></br>
              <FormControl variant="standard" sx={{ minWidth: 120 }}>
              <label>Role</label>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={role}
                onChange={e => setRole(e.target.value)}
                label="role"
              >
                <MenuItem value="role">
                  <em>Role</em>
                </MenuItem>
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>
          <br></br>
          <br></br>

          <div>
           <div calss="col-md-3">
            Picture
           </div>
           <div class="col-md-7">
                    <input type="file" class="form-control" onChange={onFileChange} />
                </div>
          </div>
                <br></br>
                <div>
                  <Button color="primary" variant="contained" onClick={AddUserPhotoFunction}>
                    Submit
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      );
};
export default AddUserPicture;