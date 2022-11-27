import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const GymCard = ({ cardDetails }) => {
  return (
    <Link to={`/gyms/${cardDetails?.id}`}>
      <Card sx={{ width: "100%", height: "250px", borderRadius: "10px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={cardDetails?.logo_img_url} height={150} />
          <Typography variant="h5" sx={{ fontWeight: "bolder", my: 1 }}>
            {cardDetails?.name}
          </Typography>
          {cardDetails?.is_hot_deal && (
            <Box
              sx={{
                backgroundColor: "green",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                color: "white",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                my: 2,
                py: 1,
              }}
            >
              <b> Hot Deal</b>
            </Box>
          )}
        </Box>
      </Card>
    </Link>
  );
};

export default GymCard;
