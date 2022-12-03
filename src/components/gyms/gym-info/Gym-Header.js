import { Avatar, Breadcrumbs, Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link, useParams } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const GymHeader = ({ gymData }) => {
  return (
    <Box
      sx={{
        width: "100%",
        background:
          "linear-gradient(to top, rgb(147, 28, 255), rgb(86, 20, 207) 55%)",
        height: "300px",
        color: "white",
        py: 3,
      }}
    >
      <Container maxWidth="lg">
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
              src={
                gymData?.logo_img_url ||
                "https://images-platform.99static.com/8QVhsq0xUI9KAGH6WZXUmnWohwI=/0x0:1574x1574/500x500/top/smart/99designs-contests-attachments/97/97489/attachment_97489210"
              }
              sx={{ width: 120, height: 120, backgroundColor: "white" }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                ml: 4,
                pl: 2,
              }}
            >
              <Typography variant="h4" sx={{ mb: 2 }}>
                {gymData?.name}
              </Typography>
              <Grid container sx={{ width: "100%" }}>
                <Grid item sm={2}>
                  <LocationOnIcon />
                </Grid>
                <Grid item sm={8}>
                  <Typography sx={{ maxWidth: "600px", mb: 2 }} variant="h6">
                    {gymData?.district}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  jsutiyContent: "start",
                }}
              >
                {[...Array(Math.floor(+gymData?.rate || 1)).keys()]?.map(
                  (el) => (
                    <StarBorderIcon variant="filled" sx={{ color: "orange" }} />
                  )
                )}
                {[
                  ...Array(
                    Math.floor(5 - Math.floor(+gymData?.rate || 1))
                  ).keys(),
                ]?.map((el) => (
                  <StarBorderIcon variant="filled" />
                ))}
              </Grid>
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
