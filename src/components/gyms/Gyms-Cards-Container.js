import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import GymCard from "./Gym-Card";

const GymsCardsContainer = ({ cardsArray }) => {
  return (
    <>
      <h1>All</h1>

      <Box
        sx={{
          width: "70%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "5px",
        }}
      >
        <Grid container spacing={5}>
          {cardsArray?.map((card, index) => (
            <Grid key={index} item sm={6} md={3}>
              <GymCard cardDetails={card} cardIndex={index} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default GymsCardsContainer;
