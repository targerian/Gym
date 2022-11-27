import { Grid, Typography } from "@mui/material";
import React from "react";

const GymInfoTab = ({ gymData }) => {
  return (
    <>
      <Grid container spacing={3}>
        <Typography variant="h5" sx={{ my: 3 }}>
          General Info.
        </Typography>
      </Grid>
      <Grid container spacing={3}>
        <Grid item sm={4}>
          <Grid container>
            <Grid item sm={2}>
              icon
            </Grid>

            <Grid item>
              <Typography variant="h6">Location</Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 2 }}>
            <Grid item sm={2}></Grid>

            <span style={{ fontSize: "18px" }}>{gymData?.address}</span>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default GymInfoTab;
