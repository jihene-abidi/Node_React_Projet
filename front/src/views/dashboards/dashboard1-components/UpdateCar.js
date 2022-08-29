import {React, useState,useEffect} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import CarService from "../../../services/CarService";

const UpdateCar= ()=>{
    const location= useLocation()
    const [id, setId] = useState("");
    const [Marque, setMarque] = useState("");
    const [Vitesse, setVitesse] = useState("");
    const [Prix, setPrix] = useState("");
    const [nombrePlace, setnombrePlace] = useState("");

    //const [Proprietaire, setProprietaire] = useState("");

    const navigate= useNavigate()
    const CS= new CarService()

useEffect (()=>{
    console.log("ok id", location.state.id)
    setId (location.state.id)
    getCarById (location.state.id)
  }, []);

const getCarById=(id)=>{
   CS.getById(id).then((res)=>{
    console.log("update",id)
    setMarque(res.data.data.Marque)
    setVitesse(res.data.data.Vitesse)
    setPrix(res.data.data.Prix)
    setnombrePlace(res.data.data.nombrePlace)
    //setProprietaire(res.data.data.Proprietaire)
    console.log("updateee please")
})
}

const UpdateCarFunction=()=>{
 console.log("ok")
  const data={"Marque":Marque,"Vitesse":Vitesse, "Prix": Prix, "nombrePlace": nombrePlace}
  CS.UpdateCar(id, data).then(res => {
    console.log("okk update of user ", res)
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
            Add Car
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
              id="marque-text"
              label="Marque"
              variant="outlined"
              defaultValue="user1"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={Marque} onChange={e => setMarque(e.target.value)}
            />

            <TextField
              id="vitesse-text"
              label="Speed"
              type="texte"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={Vitesse} onChange={e => setVitesse(e.target.value)}
            />
            <TextField
              id="prix-text"
              label="Price"
              variant="outlined"
              defaultValue="user1"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={Prix} onChange={e => setPrix(e.target.value)}
            />
            <TextField
              id="nombrePlace-text"
              label="Number Of Places"
              variant="outlined"
              defaultValue="user1"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={nombrePlace} onChange={e => setnombrePlace(e.target.value)}
            />
            {/* <TextField
              id="outlined-password-input"
              label="Proprietaire"
              type="text"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={Proprietaire} onChange={e=>setProprietaire(e.target.value)}
            /> */}
           {/* <TextField
              id="photo"
              label="photo"
              type="file"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={photo} onChange={onFileChange}
            /> */}
            
            <div>
              <Button color="primary" variant="contained" onClick={UpdateCarFunction}>
              Update
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
    
};

export default UpdateCar;