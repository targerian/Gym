import {
  Button,
  Grid,
  InputAdornment,
  LinearProgress,
  Pagination,
  Paper,
  TextField,
} from "@mui/material";
import { Box, spacing } from "@mui/system";
import React, { useState } from "react";
import { useQuery } from "react-query";
import ButtonMain from "../reusable-components/Button-Main";
import GymsCardsContainer from "./Gyms-Cards-Container";

const ListGyms = () => {
  const [currentPage, setCurrentPage] = useState(1);
  let GymsListQUery = useQuery(
    ["Gyms", "list", currentPage],
    async () => {
      const response = await fetch(
        `https://staging.algym.com/api/v1/gyms?lat=31.2443512&long=29.9715685&page_number=${currentPage}&page_size=10&search_diameter=1000`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            // "Accept-Language": currentLanguage,
          },
        }
      );

      const responseJson = await response.json();
      return responseJson.data;
    },
    {
      keepPreviousData: true,
      onError: () => console.log("Server Error"),
      retry: 3,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
    }
  );
  if (GymsListQUery?.isFetching) {
    return <LinearProgress />;
  }
  return (
    <>
      <Grid container spacing={3} justifyContent="space-between" sx={{ py: 4 }}>
        <Box
          sx={{
            width: "30%",
            display: "flex",
            justifyContent: "start",
            position: "relative",
          }}
        >
          <input
            style={{
              width: "100%",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
            type="text"
            placeholder="Search by gym name, facility"
          />
          <span
            style={{
              position: "absolute",
              top: "24%",
              right: "25%",
              fontWeight: "bold",
              color: "blue",
              cursor: "pointer",
            }}
          >
            Filter
          </span>
          <Box
            sx={{
              width: "100px",
              height: "50px",
              background:
                "linear-gradient(113deg,#f21d3c 28%,#f48b45 138%),linear-gradient(180deg,#020303,#020303)",
              color: "white",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
              padding: "0 10px",
              "&:hover": {
                color: "white",
                background: "none",
                backgroundColor: "#5614CF",
              },
            }}
          >
            Find Gyms
          </Box>
        </Box>
        <Grid item sm={5} sx={{ display: "flex", justifyContent: "end" }}>
          <ButtonMain> SWITCH TO MAP VIEW</ButtonMain>
        </Grid>
      </Grid>
      <GymsCardsContainer cardsArray={GymsListQUery?.data} />
      <Grid container justifyContent="center" sx={{ py: 2 }}>
        <Pagination
          page={currentPage}
          onChange={(e, page) => {
            setCurrentPage(page);
          }}
          count={7}
        />
      </Grid>
    </>
  );
};

export default ListGyms;
