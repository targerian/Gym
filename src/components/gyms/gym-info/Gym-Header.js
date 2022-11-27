import { Avatar, Breadcrumbs, Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link, useParams } from "react-router-dom";

const GymHeader = ({ gymData }) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "purple",
        height: "300px",
        color: "white",
      }}
    >
      <Container maxWidth="xl">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            style={{ color: "lightgrey", fontWeight: "bolder" }}
            to="/"
          >
            Explore Gyms
          </Link>
          <Typography sx={{ color: "lightgrey", fontWeight: "bolder" }}>
            {gymData?.name}
          </Typography>
        </Breadcrumbs>
        <Grid container sx={{ my: 4 }} justifyContent="space-between">
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "60%",
              height: "60%",
            }}
          >
            <Avatar
              src={gymData?.logo_img_url}
              sx={{ width: 120, height: 120, backgroundColor: "white" }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                ml: 3,
              }}
            >
              <Typography variant="h3" sx={{ mb: 2 }}>
                {gymData?.name}
              </Typography>
              <Grid container sx={{ width: "100%" }}>
                <Grid item sm={2}>
                  icon
                </Grid>
                <Grid item sm={8}>
                  <Typography sx={{ maxWidth: "600px", mb: 2 }} variant="h6">
                    {gymData?.address}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="h6">{Math.floor(+gymData?.rate)}</Typography>
              {/* noTime to create an array and map returning stars :(  */}
            </Box>
          </Box>
          <Button
            size="large"
            sx={{
              backgroundColor: "red",
              color: "white",
              py: 1,
              height: "60px",
              width: "300px",
              fontWeight: "bolder",
            }}
          >
            become a member
          </Button>
        </Grid>
      </Container>
    </Box>
  );
};

export default GymHeader;
