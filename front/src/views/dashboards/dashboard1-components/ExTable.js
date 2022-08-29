import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userservice from "../../../services/UserService";
import Swal from "sweetalert2";
import {
  Typography,
  Box,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@material-ui/core";
import { ControlPointDuplicate } from "@material-ui/icons";
import UpdateUser from "./UpdateUser";

//bch nconsomiw les services ely mawjoudin fy UserService

const ExTable = () => {
  const [users,setUsers] = useState([])
  const US= new userservice()
  const navigate= useNavigate();
  
  useEffect(()=> {
    getAllUsersFront();
  }, []);

  const getAllUsersFront=() =>{
    US.getAll().then((res )=>{
      console.log("Jihene");
      setUsers(res.data.data)
    })
  }

 const deleteuser= (id)=>{

    // US.remove(id).then(res =>{
    // console.log("nchlh tekhdem", id);
   console.log ("ok supprimer", id);
   Swal.fire({
    title: "Vous étes sur ?",
    text: "Vous ne pouvez pas revenir en arriére",
    icon: "avertissement",
    showCancelButton: true,
    confirmButtonColor: "#3085D6",
    cancelButtonColor: "#d33",
    confirmButtonText: "oui, supprimez le !",
   }).then((result)=>{
    if (result.isConfirmed){
      US.remove(id).then((res)=>{
        console.log(res.status);
        console.log("response", res);
        if (res.status===200){
          getAllUsersFront();
          Swal.fire("Supprimé !", "Votre fichier a été supprimer","Succès");
        }
      });
    }
   });
  
 }

 const UpdateUser= (id)=>{
  navigate("/dashboards/UpdateUser/"+id,{state:{id:id}})
 }

 const ViewUser=(id)=>{
  navigate("/dashboards/ViewUser/"+id,{state:{id:id}})
 }

  return (
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
              Role
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Image
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
              Cars
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6" align="center">
              Action
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user,index) => (
          <TableRow Key={user._id}>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {index+1}
              </Typography>
            </TableCell>


            <TableCell>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {user.role}
                 </Typography>
               </Box>
            </TableCell>

            <TableCell>
                  <Box>
                    <Box>
                   <Avatar
                   src={"http://localhost:3000/storages/"+ user.photo}
                       sx={{
                        width: "35px",
                        height: "35px",
                      }}
                  />
                  {/* <img src={"http://localhost:3000/storages/"+ user.photo}width="30%" height="60%"></img>                   */}
                </Box>
              </Box>
            </TableCell>

            <TableCell>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {user.nom}
                 </Typography>
               </Box>
            </TableCell>
    
             <TableCell>
              <Typography color="black" variant="h6">
                {user.email}
              </Typography>
            </TableCell>
            <TableCell>
            <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {user.password}
                  </Typography>
                </Box>
             </Box>
            </TableCell >

            <TableCell>
            <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {user.voitures.length}
                  </Typography>
                </Box>
             </Box>
            </TableCell >



            <TableCell>
            <Chip
                sx={{
                  pl: "4px",
                  pr: "4px",
                   backgroundColor: user.pbg,
                  color: "#3498DB",
                }}
                size="small"
                label="Update" 
                onClick={(e)=>UpdateUser(user._id)}
              ></Chip>
                  <Chip
                sx={{
                  pl: "4px",
                  pr: "4px",
                   backgroundColor: user.pbg,
                  color: "red",
                }}
                size="small"
                label="Delete"
                onClick= {(e) =>deleteuser(user._id)}
              ></Chip>
                  <Chip
                sx={{
                  pl: "4px",
                  pr: "4px",
                   backgroundColor: user.pbg,
                  color: "green",
                }}
                size="small"
                label="View"
                onClick= {(e) =>ViewUser(user._id)}
              ></Chip>
            </TableCell> 
           </TableRow>  ))}
      </TableBody>
    </Table>
  );
};

export default ExTable;
