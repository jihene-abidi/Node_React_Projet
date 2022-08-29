import {React, useState,useEffect} from "react";
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
  FormControl,
  MenuItem,
} from "@material-ui/core";

const AddCar= ()=>{
    const [Marque, setMarque] = useState("");
    const [Vitesse, setVitesse] = useState("");
    //const [Proprietaire, setProprietaire] = useState("");
    const [Prix, setPrix] = useState("");
    const [nombrePlace, setnombrePlace] = useState("");

    const CS= new CarService()
    const navigate= useNavigate()

    const AddCarFunction=()=>{
        const data= {"Marque": Marque, "Vitesse": Vitesse, "Prix": Prix, "nombrePlace": nombrePlace}
        CS.create(data).then((res) =>{
        //    alert("bonjour")
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
                  type="texte"
                  variant="outlined"
                  fullWidth
                  sx={{
                    mb: 2,
                  }}
                  value={Prix} onChange={e => setPrix(e.target.value)}
                />
                  <TextField
                  id="nombrePlace-text"
                  label="Number Of Places"
                  type="texte"
                  variant="outlined"
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
                
                <div>
                  <Button color="primary" variant="contained" onClick={AddCarFunction}>
                    Submit
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      );
        
};
export default AddCar;