import React, { useEffect, useState} from "react";
import { Link, useNavigate,useLocation} from "react-router-dom";
import userservice from "../../../services/UserService";
import carservice from "../../../services/CarService";

import {
    Typography,
    Box,
    Card,
    Avatar,
    Divider,
    CardContent,
    TextField,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip,
    getCardActionAreaUtilityClass,
  } from "@material-ui/core";
import { Email } from "@material-ui/icons";

const ViewUser=()=>{
    const [user,setUser] = useState([])
    const [id, setId] = useState("")
    const [role, setRole] = useState("")
    const [nom, setNom] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [photo, setPhoto] = useState("")
    const [voitures, setVoitures] = useState([])
    const [voiture, setVoiture] = useState([])
    const [Marque, setMarque] = useState("")

    const US= new userservice()
    const CS= new carservice()

    const navigate= useNavigate();
    const location = useLocation();

    useEffect(()=> {
        console.log("ok id ", location.state.id)
        setId(location.state.id)
        GetUser(location.state.id)
        //GetCar(location.state.id)
        }, []);

    const GetUser=(id) =>{
              US.getById(id).then((res )=>{
              console.log("View User");
              setNom(res.data.data.nom)
              setRole(res.data.data.role)
              setEmail(res.data.data.email)
              setPassword(res.data.data.password)
              setPhoto(res.data.data.photo)
              setVoitures(res.data.data.voitures)
             
            })
     }
    const GetCar=(id)=>{
      console.log("id car", id)
       CS.getById(id).then((res)=>{
        console.log("avant set")
        setMarque(res.data.data.Marque)
        console.log("apres set")

       })
     }
    
      const BackUser=()=>{
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
                    User Information
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
                    Id : {id}
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
                    Name : {nom}
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
                    Role : {role}
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
                    Email : {email}
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
                    Password : {password}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    padding: "15px 30px",
                  }}
                  display="flex"
                  alignItems="right"
                >
                  <Box flexGrow={1}>
                    <Typography
                      sx={{
                        fontSize: "17px",
                        fontWeight: "300",
                      }}
                    >
                    Image : 
                    <img src={"http://localhost:3000/storages/"+ photo} width="10%" height="10%"></img>
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
                    Number Of Cars : {(voitures.length)}
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
                    Car Name : {GetCar(voitures)}
                               {Marque}
                    </Typography>
                  </Box>
                </Box>

                </Card>
{/**********************/}

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
              Name
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Email
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Password
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Image
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Role
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Cars
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Car Name
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
            <TableCell>
              {id}
            </TableCell>
            <TableCell>
              {nom}
            </TableCell>
            <TableCell>
              {email}
            </TableCell>
            <TableCell>
              {password}
            </TableCell>
            <TableCell>
            <Avatar
                   src={"http://localhost:3000/storages/"+ photo}
                       sx={{
                        width: "35px",
                        height: "35px",
                      }}
                  />
              {/* <img src={"http://localhost:3000/storages/"+ user.photo}width="100%" height="60%"></img> */}
            </TableCell>
            <TableCell>
              {role}
            </TableCell>
            <TableCell>
            {(voitures.length)}
            </TableCell>
            <TableCell>
            {GetCar(voitures)}
            {Marque}
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
                onClick={BackUser}
            ></Chip>
       </div>
       </div>
    )
}
export default ViewUser;