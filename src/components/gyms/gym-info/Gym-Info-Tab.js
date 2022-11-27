import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import GymInfoCard from "./Gym-Info-Card";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FemaleIcon from "@mui/icons-material/Female";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const GymInfoTab = ({ gymData }) => {
  function getGenderName(gender_key) {
    switch (gender_key) {
      case "males_only":
        return "Mals Only";
    }
  }
  return (
    <>
      <Grid container spacing={3}>
        <Typography variant="h5" sx={{ my: 3 }}>
          General Info.
        </Typography>
      </Grid>
      <Grid container spacing={4}>
        <Grid item sm={4}>
          <GymInfoCard
            icon={<LocationOnIcon />}
            title="Location"
            desc={gymData?.address}
          />
        </Grid>
        <Grid item sm={4} sx={{ ml: 4 }}>
          <GymInfoCard
            icon={<FemaleIcon />}
            title="Members Should be"
            desc={getGenderName(gymData?.gender_type)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item sm={4}>
          <GymInfoCard icon={<AccessAlarmIcon />} title="Opening Hours" />
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item sm={4}>
          <GymInfoCard title={`About ${gymData?.name?? "The Gym"}`} />
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item sm={4}>
          <GymInfoCard title="Facilities" />
        </Grid>
      </Grid>
    </>
  );
};

export default GymInfoTab;
