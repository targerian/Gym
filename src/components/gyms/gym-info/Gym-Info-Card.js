import { Grid, Typography } from "@mui/material";
import React from "react";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";

const GymInfoCard = ({ icon = <SportsGymnasticsIcon />, title, desc = "" }) => {
  return (
    <Grid container spacing={3} sx={{ minHeight: "150px" }}>
      <Grid item sm={12}>
        <Grid container>
          <Grid item sm={2}>
            {icon}
          </Grid>

          <Grid item>
            <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
              {title}
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 2 }}>
          <Grid item sm={2}></Grid>
          <Grid item sm={10}>
            <span style={{ fontSize: "18px" }}>{desc}</span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GymInfoCard;
