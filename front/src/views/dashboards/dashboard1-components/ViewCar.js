import React, { useEffect, useState } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import carservice from "../../../services/CarService";
import {
    Typography,
    Box,
    Card,
    Avatar,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip,
  } from "@material-ui/core";
import { Email, ViewCarousel } from "@material-ui/icons";

const ViewCar=()=>{
    const [id, setId] = useState("")
    const [Marque, setMarque] = useState("")
    const [Vitesse, setVitesse] = useState("")
    const [Prix, setPrix] = useState("")
    const [nombrePlace, setnombrePlace] = useState("")

    //const [photo, setPhoto] = useState("")
    const [Voiture, setVoiture] = useState([])
    const [photo, setPhoto]=useState("")
    const onFileChange = event =>{setPhoto(event.target.files[0])};

    const CS= new carservice()
    const navigate= useNavigate();
    const location = useLocation();
  
    useEffect(()=> {
        console.log("ok id ", location.state.id)
        setId(location.state.id)
        GetCar(location.state.id)
        }, []);

    const GetCar=(id) =>{
              CS.getById(id).then((res )=>{
              console.log("View Car");
              setMarque(res.data.data.Marque)
              setVitesse(res.data.data.Vitesse)
              setPhoto(res.data.data.photo)
              setPrix (res.data.data.Prix)
              setnombrePlace (res.data.data.nombrePlace)
            })
          }

    const BackCar=(id)=>{
         navigate("/#/dashboards/dashboard1")
        }      
    
    return(
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
              Car Information
              </Typography>
            </Box>
          </Box>
          
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
                  fontSize: "17px",
                  fontWeight: "300",
                }}
              >
              Marque : {Marque}
              </Typography>
            </Box>
          </Box>


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
                  fontSize: "17px",
                  fontWeight: "300",
                }}
              >
              Vitesse : {Vitesse}
              </Typography>
            </Box>
          </Box>


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
                  fontSize: "17px",
                  fontWeight: "300",
                }}
              >
              Price : {Prix}
              </Typography>
            </Box>
          </Box>


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
                  fontSize: "17px",
                  fontWeight: "300",
                }}
              >
              Number Of Places : {nombrePlace}
              </Typography>
            </Box>
          </Box>


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
                  fontSize: "17px",
                  fontWeight: "300",
                }}
              >
              Image : 
              <img src={"http://localhost:3000/storages/"+ Voiture.photo} width="20%" height="20%"></img>
              </Typography>
            </Box>
          </Box>

       </Card>

       <Table
      aria-label="simple table"
      sx={{
        mt: 3,
        whiteSpace: "nowrap",
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Id
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Image :
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Marque
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Speed
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Price
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Number Of Places
            </Typography>
          </TableCell>
          {/* <TableCell>
            <Typography color="textSecondary" variant="h6">
              proprietere
            </Typography>
          </TableCell> */}
        
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
            <TableCell>
              {id}
            </TableCell>
            <TableCell>
            <Avatar
                   src={"http://localhost:3000/storages/"+ Voiture.photo}
                       sx={{
                        width: "35px",
                        height: "35px",
                      }}
                  />            </TableCell>
            <TableCell>
              {Marque}
            </TableCell>
            <TableCell>
            {Vitesse}
            </TableCell>
            <TableCell>
            {Prix}
            </TableCell>
            <TableCell>
            {nombrePlace}
            </TableCell>
        </TableRow>
     </TableBody>

      </Table>
       <br></br>
       <br></br>

       <div>
                     <Chip
                sx={{
                  pl: "4px",
                  pr: "4px",
                 //  backgroundColor: user.pbg,
                 color: "green",
                }}
                size="small"
                label="Back" 
              onClick={BackCar}
              ></Chip>
       </div>



       </div>
    )
}
export default ViewCar;