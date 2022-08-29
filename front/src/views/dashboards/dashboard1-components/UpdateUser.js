//import React from "react";
import {React, useState,useEffect} from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
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
  FormControl,
  MenuItem,
} from "@material-ui/core";
import carService from "../../../services/CarService";
import userService from "../../../services/UserService"
const UpdateUser = () => {
  const location = useLocation();
  const [id, setId] = useState("")
  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [password, setPassword] = useState("")
  const [photo, setPhoto]=useState("")
  const [voitures, setVoitures] = useState([]);
  const [voiture, setVoiture] = useState("");

  const onFileChange = (event) =>{
    setPhoto(event.target.files[0])};
    
  const carSv = new carService();
  const USSERV = new userService();
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log("ok id ", location.state.id)
    setId(location.state.id)
    getuserById(location.state.id)
}, []);

const getuserById = (id) => {
  console.log("before")
  USSERV.getById(id).then(res => {
        console.log("okok id ", res.data.data)
        setNom(res.data.data.nom)
        setRole(res.data.data.role)
        setEmail(res.data.data.email)
        setPassword(res.data.data.password)
        setVoitures(res.data.data.voitures)
        setVoiture(res.data.data.voiture)


    })
}
 //Ajouter l'effet (useEffect) a partir de hooks
 useEffect(()=>{getAllCars();},
 []);
const getAllCars=()=>{
  carSv.getAll().then((res)=>{
console.log("success to get cars",res.data);
//affectatin des états (les donnees ely bch yjibhom ml get bch yhothom f setVoitures)
setVoitures(res.data.data);
});
};

const UpdateUserFunction = ()=>{
      console.log("OK")
      const data={"nom":nom, "email":email, "password":password, "role": role, "voitures": voiture,}
      USSERV.UpdateUser(id, data).then(res => {
        console.log("okk update of user ", res)
        navigate("/#/tables/basic-table")
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
         Update User
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
            id="default-value"
            label="Name"
            variant="outlined"
            defaultValue="user1"
            fullWidth
            sx={{
              mb: 2,
            }}
            value={nom} onChange={e => setNom(e.target.value)}
          />
          <TextField
            id="role-text"
            label="Role"
            type="role"
            variant="outlined"
            fullWidth
            sx={{
              mb: 2,
            }}
            value={role} onChange={e => setRole(e.target.value)}
          />
          
          <TextField
            id="email-text"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            sx={{
              mb: 2,
            }}
            value={email} onChange={e => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            fullWidth
            sx={{
              mb: 2,
            }}
            value={password} onChange={e=>setPassword(e.target.value)}
          />
         <TextField
            id="photo"
            label="photo"
            type="file"
            fullWidth
            sx={{
              mb: 2,
            }}
            value={photo} onChange={onFileChange}
          />
          {/* <TextField
            fullWidth
            id="standard-select-number"
            variant="outlined"
            select
            label="Select"
            value={voitures} onChange={e => setVoitures(e.target.value)}
            sx={{
              mb: 2,
            }}
          >
            {voitures.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.Marque}
              </MenuItem>
            ))}
          </TextField> */}
             <br></br>
           <div class="form-group">
              <label class="col-md-3 control-label">Cars:</label>
                    <select id="voiture" class="col-md-9" onChange={e => setVoiture(e.target.value)}>
                     {voitures.map((voiture) => (
                     <option value={voiture._id}  key={voitures._id}>{voiture.Marque}</option>
                     ))}
                 </select>
            </div>
           <br></br>
          <div>
            <Button color="primary" variant="contained" onClick={UpdateUserFunction}>
             Update
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
  );
};
export default UpdateUser;