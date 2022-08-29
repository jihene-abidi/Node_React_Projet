import React from "react";
import Swal from "sweetalert2";
import { Grid, Box } from "@material-ui/core";
import {
  BlogCard,
  SalesOverview,
  ProductPerformance,
  DailyActivities,
} from "./dashboard1-components";
const ListOfCars = () => {
  // 2
  return (
    <Box>
      <Grid container spacing={0}>
        <BlogCard />
      </Grid>
    </Box>
  );
};
export default ListOfCars;