import { Card, CardContent, Typography, Button, Grid, Chip } from "@material-ui/core";
import {React, useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import CarService from "../../../services/CarService";
import user1 from "../../../assets/images/backgrounds/u2.jpg";
import user2 from "../../../assets/images/backgrounds/u3.jpg";
import user3 from "../../../assets/images/backgrounds/u4.jpg";
const BlogCard = () => {
  const [Voitures,setVoitures] = useState([])
  const CS= new CarService()
  const navigate= useNavigate()

  useEffect(()=> {
    getAllCarsFront();
  }, []);

  const getAllCarsFront=() =>{
    CS.getAll().then((res) =>{
      console.log("resultat de voiture",res);
      setVoitures(res.data.data)
    })
  }

  const DeleteCar=(id) =>{
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
       CS.remove(id).then((res)=>{
         console.log(res.status);
         console.log("response", res);
         if (res.status===200){
          getAllCarsFront()
           Swal.fire("Supprimé !", "Votre fichier a été supprimer","Succès");
          }
        });
      }
     });
    
   }
  const UpdateCar= (id)=>{
    navigate("/dashboards/UpdateCar/"+id,{state:{id:id}})
   }

   const ViewCar= (id)=>{
    navigate("/dashboards/ViewCar/"+id,{state:{id:id}})

   }
   const BackCar=()=>{
    navigate("/#/dashboards/dashboard1")
  }

  return (
    <Grid container>
      {Voitures.map((Voiture, index) => (
        <Grid
          key={index}
          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              p: 0,
              width: "100%",
            }}
          >
            {/* <img src={blog.img} alt="img" width="100%" /> */}
            <img src={"http://localhost:3000/storages/"+ Voiture.photo}width="100%" height="60%"></img>
            <CardContent
              sx={{
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "h6.fontSize",
                  fontWeight: "500",
                }}
              >
                {Voiture.Marque}
              </Typography>
              <Typography
                color="textSecondary"
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  mt: 1,
                }}
              >
                {Voiture.Vitesse}
              </Typography>
              <Typography
                color="textSecondary"
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  mt: 1,
                }}
              >
                {Voiture.Prix}
              </Typography>
              <Typography
                color="textSecondary"
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  mt: 1,
                }}
              >
                {Voiture.nombrePlace}
              </Typography>
              <Chip
                sx={{
                  pl: "4px",
                  pr: "4px",
                 //  backgroundColor: user.pbg,
                  color: "#3498DB",
                }}
                size="small"
                label="Update" 
                onClick={(e)=>UpdateCar(Voiture._id)}
              ></Chip>
              <Chip
                sx={{
                  pl: "4px",
                  pr: "4px",
                 //  backgroundColor: user.pbg,
                 color: "red",
                }}
                size="small"
                label="Delete" 
              onClick={(e)=>DeleteCar(Voiture._id)}
              ></Chip>
                       <Chip
                sx={{
                  pl: "4px",
                  pr: "4px",
                 //  backgroundColor: user.pbg,
                 color: "green",
                }}
                size="small"
                label="View" 
              onClick={(e)=>ViewCar(Voiture._id)}
              ></Chip>
             
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogCard;
