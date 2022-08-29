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

const AddCarPicture= ()=>{
    const [Marque, setMarque] = useState("");
    const [Vitesse, setVitesse] = useState("");
    const [Prix, setPrix] = useState("");
    const [nombrePlace, setnombrePlace] = useState("");
    const [photo, setPhoto] = useState("");
    //pour afficher la zone ajout file (pour les images)
    const onFileChange= (event)=>{
        setPhoto(event.target.files[0])
    };

    const CS= new CarService()
    const navigate= useNavigate()

    const AddCarFunction=()=>{
       
const formdata= new FormData();
formdata.append("Marque",Marque)
formdata.append("Vitesse",Vitesse)
formdata.append("Prix",Prix)
formdata.append("nombrePlace",nombrePlace)
formdata.append("photo",photo)
CS.createPicture(formdata).then(res =>{
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
                Add Car With Picture
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
export default AddCarPicture;