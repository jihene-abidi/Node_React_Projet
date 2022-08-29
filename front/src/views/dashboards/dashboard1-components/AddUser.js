import {React, useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  Select,
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

import UserService from "../../../services/UserService";
import CarService from "../../../services/CarService";
import { array } from "prop-types";



const AddUser= ()=>{
  //ajouter l'etat (usestate) a partir de hooks
    const [role, setRole] = useState("");
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [photo, onFileChange] = useState("");
    const [voitures, setVoitures] = useState([]);
    const [voiture, setVoiture] = useState("");
    const US= new UserService()
    const CS= new CarService
    const navigate= useNavigate()

    //Ajouter l'effet (useEffect) a partir de hooks
     useEffect(()=>{getAllCars();},
                []);
     const getAllCars=()=>{
      CS.getAll().then((res)=>{
        console.log("success to get cars",res.data);
        //affectatin des états (les donnees ely bch yjibhom ml get bch yhothom f setVoitures)
        setVoitures(res.data.data);
      });
    };
    const AddUserFunction=()=>{
        const data= {
          //"nom": existe dans bac qui est avec orangé
          //nom ave bleu donnée de l'utilisateur
         "nom":nom, 
         "email": email,
         "password": password, 
         "role": role,
         //j'ajoute une seule voiture dans toute la liste c.a.d je selecte seulement une seule voiture 
         "voitures": voiture,}
        US.create(data).then((res) =>{
          //  alert("bonjour")
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
                Add User
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
       

          <Box 
           sx={{
            marginLeft:"auto",
            mt:{
              lg:0,
              xs:2,
            },
           }}
           
           
           >
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

          </Box>
            
                <div>
                  <Button color="primary" variant="contained" onClick={AddUserFunction}>
                    Submit
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      );
        
}
export default AddUser;