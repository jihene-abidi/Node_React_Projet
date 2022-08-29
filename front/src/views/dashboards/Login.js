import {React, useState,useEffect} from "react";
import UserService  from "../../../../front/src/services/UserService"
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
const Login =()=>{
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")

    const US= new UserService ()
    const LoginFunction = ()=>{
         //alert("boujourUser")
        const data ={
            "email":email,
            "password":password,
            "role": role,
        }
    US.login(data).then((res)=>{
    alert("ok");
    console.log(res.data);
    console.log(res.data.user.role);

    if (res.data.user.role =="admin"){
      console.log("this is admin")
      navigate("/#/tables/basic-table")}
    else{
      console.log("this is user", res.data.user.role)
      navigate("/#/dashboards/ListOfCars")}
    }
    )}
    
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
               Login
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
                  label="Email"
                  variant="outlined"
                  defaultValue="user"
                  fullWidth
                  sx={{
                    mb: 2,
                  }}
                  value={email} onChange={e => setEmail(e.target.value)}
                />
                <TextField
                  id="Vitesse-text"
                  label="Password"
                  type="Password"
                  variant="outlined"
                  fullWidth
                  sx={{
                    mb: 2,
                  }}
                  value={password} onChange={e => setPassword(e.target.value)}
                />
                <div>
                  <Button color="primary" variant="contained"  onClick={LoginFunction}>
                    Conexion
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      );
}
 export default Login ;