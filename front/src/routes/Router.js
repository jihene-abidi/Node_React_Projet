import { lazy } from "react";
import { Navigate } from "react-router-dom";


/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout/FullLayout.js"));
/****End Layouts*****/

/*****Pages******/
const Dashboard1 = lazy(() => import("../views/dashboards/Dashboard1"));
/*****Tables******/
const BasicTable = lazy(() => import("../views/tables/BasicTable"));

// form elements
const ExAutoComplete = lazy(() =>import("../views/FormElements/ExAutoComplete"));
const ExButton = lazy(() => import("../views/FormElements/ExButton"));
const ExCheckbox = lazy(() => import("../views/FormElements/ExCheckbox"));
const ExRadio = lazy(() => import("../views/FormElements/ExRadio"));
const ExSlider = lazy(() => import("../views/FormElements/ExSlider"));
const ExSwitch = lazy(() => import("../views/FormElements/ExSwitch"));
const AddUser  = lazy(()=> import ("../views/dashboards/dashboard1-components/AddUser"));
const AddUserPicture  = lazy(()=> import ("../views/dashboards/dashboard1-components/AddUserPicture"));
const UpdateUser  = lazy(()=> import ("../views/dashboards/dashboard1-components/UpdateUser"));
const AddCar  = lazy(()=> import ("../views/dashboards/dashboard1-components/AddCar"));
const AddCarPicture  = lazy(()=> import ("../views/dashboards/dashboard1-components/AddCarPicture"));
const UpdateCar  = lazy(()=> import ("../views/dashboards/dashboard1-components/UpdateCar"));
const ViewUser  = lazy(()=> import ("../views/dashboards/dashboard1-components/ViewUser"));
const ViewCar  = lazy(()=> import ("../views/dashboards/dashboard1-components/ViewCar"));
const ListOfCars = lazy(()=>import("../views/dashboards/ListOfCars"));
const Login = lazy(()=>import("../views/dashboards/Login"))

// form layouts
const FormLayouts = lazy(() => import("../views/FormLayouts/FormLayouts"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="dashboards/dashboard1" /> },
      { path: "dashboards/dashboard1", exact: true, element: <Dashboard1 /> },
      { path: "tables/basic-table", element: <BasicTable /> },
      {path:  "Login",element:<Login/>},
      { path: "/form-layouts/form-layouts", element: <FormLayouts /> },
      { path: "/dashboards/AddUser", element: <AddUser/>},
      { path: "/dashboards/AddUserPicture", element: <AddUserPicture/>},
      { path: "/dashboards/UpdateUser/:id", element: <UpdateUser/>},
      { path: "/dashboards/AddCar", element: <AddCar/>},
      { path: "/dashboards/AddCarPicture", element: <AddCarPicture/>},
      { path: "/dashboards/UpdateCar/:id", element: <UpdateCar/>},
      { path: "/dashboards/ViewUser/:id", element: <ViewUser/>},
      { path: "/dashboards/ViewCar/:id", element: <ViewCar/>},
      { path: "/dashboards/ListOfCars", element: <ListOfCars/>},

      // { path: "/form-elements/autocomplete", element: <ExAutoComplete /> },
      // { path: "/form-elements/button", element: <ExButton /> },
      // { path: "/form-elements/checkbox", element: <ExCheckbox /> },
      // { path: "/form-elements/radio", element: <ExRadio /> },
      // { path: "/form-elements/slider", element: <ExSlider /> },
      // { path: "/form-elements/switch", element: <ExSwitch /> },
    ],
  },
];

export default ThemeRoutes;
